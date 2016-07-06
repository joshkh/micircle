(ns micircle.hyperview.views
  (:require-macros
    [clojure.core.matrix :refer [def-mat-mop def-mat-mops]]
    [clojure.core.matrix.macros :refer [TODO error]])
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [json-html.core :as json-html]
            [com.rpl.specter :as s]
            [micircle.chord.utils :as utils]))

(def pi (.-PI js/Math))
(def theta (reagent/atom 1.4))

(def globals {:width  250
              :height 250})

;(def model {:label    "A"
;            :children [{:label    "B"
;                        :children [{:label    "B1"
;                                    :children nil}
;                                   {:label    "B2"
;                                    :children nil}
;                                   {:label    "B3"
;                                    :children [{:label    "BB1"
;                                                :children nil}
;                                               {:label    "BB2"
;                                                :children nil}]}
;                                   {:label    "B4"
;                                    :children nil}]}
;                       {:label    "C"
;                        :children [{:label    "C1"
;                                    :children nil}
;                                   {:label    "C2"
;                                    :children nil}]}
;                       {:label    "D"
;                        :children nil}]})



;[{:label "Z"
;  :children nil}
; {:label "Y"
;  :children nil}]

;(def model {:label    "A"
;            :children [{:label    "B"
;                        :children [{:label    "X"
;                                    :children nil}
;                                   {:label    "Y"
;                                    :children nil}]}
;                       {:label    "C"
;                        :children nil}
;                       {:label    "D"
;                        :children nil}
;                       {:label    "E"
;                        :children nil}
;
;                       ]})



(def model2 {:label    "a"
             :children [{:label    "b"
                         :children [{:label    "c"
                                     :children nil}
                                    {:label    "d"
                                     :children [{:label    "e"
                                                 :children []}
                                                {:label    "f"
                                                 :children []}]}
                                    {:label    "g"
                                     :children [{:label    "h"
                                                 :children [{:label    "i"
                                                             :children nil}
                                                            {:label    "j"
                                                             :children [{:label    "k"
                                                                         :children []}]}]}
                                                {:label    "l"
                                                 :children nil}]}
                                    {:label    "m"
                                     :children nil}]}
                        {:label    "n"
                         :children [{:label    "o"
                                     :children nil}
                                    {:label    "p"
                                     :children nil}]}
                        {:label    "q"
                         :children nil}]})

(def model {:label    "a"
            :children [{:label    "b"
                        :children [{:label    "f"
                                    :children [{:label    "g"
                                                :children [{:label    "h"
                                                            :children []}]}]}
                                   {:label    "g"
                                    :children [{:label    "i"
                                                :children []}
                                               {:label    "j"
                                                :children []}
                                               {:label    "k"
                                                :children []}]}
                                   {:label    "h"
                                    :children [{:label    "l"
                                                :children []}
                                               {:label    "m"
                                                :children []}]}

                                   {:label    "i"
                                    :children nil}]}
                       {:label    "c"
                        :children [{:label    "n"
                                    :children [{:label    "p"
                                                :children nil}
                                               {:label    "q"
                                                :children nil}]}
                                   {:label    "o"
                                    :children [{:label    "r"
                                                :children nil}]}]}
                       {:label    "d"
                        :children [{:label    "s"
                                    :children [{:label    "w"
                                                :children nil}
                                               {:label    "x"
                                                :children nil}
                                               {:label    "y"
                                                :children nil}]}
                                   {:label    "t"
                                    :children [{:label    "z"
                                                :children nil}]}
                                   {:label    "u"
                                    :children [{:label    "0"
                                                :children nil}
                                               {:label    "1"
                                                :children nil}]}]}
                       {:label    "e"
                        :children [{:label    "2"
                                    :children [{:label    "5"
                                                :children nil}]}
                                   {:label    "3"
                                    :children [{:label    "6"
                                                :children nil}
                                               {:label    "7"
                                                :children nil}
                                               {:label    "8"
                                                :children nil}]}
                                   {:label    "4"
                                    :children nil}]}]})




(defn distance
  "Euclidean distance between 2 points"
  [[x1 y1] [x2 y2]]
  (Math/sqrt
    (+ (Math/pow (- x1 x2) 2)
       (Math/pow (- y1 y2) 2))))

(defn polar-to-cartesian
  "Convert polar coordinates to cartesian coordinates.
  TODO: confirm that x and y should not be reversed."
  [center-x center-y radius angle-in-radians]
  {:x (+ center-x (* radius (.cos js/Math angle-in-radians)))
   :y (+ center-y (* radius (.sin js/Math angle-in-radians)))})

(defn translate [x y]
  (str "translate(" x "," y ")"))

(defn radial-parition [index total]
  (/ (* 2 pi index) total))

(defn containment-arcs [tree]
  (let [children (:children tree)]
    (if (> (count children) 1)
      (assoc tree :children
                  (map-indexed (fn [index child]
                                 (let [neighbour (nth children (if (= index (dec (count children))) (dec index) (inc index)))
                                       mid-angle (/ (+ (:angle child) (:angle neighbour)) 2)
                                       midpoint  (polar-to-cartesian 0 0 (:containment-radius tree) mid-angle)
                                       d         (distance [(:x child) (:y child)] [(:x midpoint) (:y midpoint)])]
                                   (assoc child :containment-radius d
                                                :midpoint midpoint))) children))
      (assoc tree :children (map (fn [child]
                                   (assoc child :containment-radius (/ (:containment-radius tree) 1.5))) children)))))


(defn fan-child
  ([idx total] (fan-child 0 idx total 2))
  ([idx total trajectory containment-angle]
   (if (nil? containment-angle)
     (fan-child idx total trajectory @theta)
     (if (> total 1)
       (+ trajectory (- (* idx (/ containment-angle (dec total))) (/ containment-angle 2)))
       trajectory))))

(defn radiate-children [radius children]
  (map-indexed
    (fn [idx child]
      (let [angle (- (radial-parition idx (count children)) (/ pi 2))]
        (merge (assoc child :angle angle) (polar-to-cartesian 0 0 radius angle)))) children))

(defn fan-children [tree]
  (if (= 0 (:containment-angle tree))
    (assoc tree :children (radiate-children 90 (:children tree)))
    (assoc tree :children
                (map-indexed
                  (fn [idx child]
                    (->
                      (assoc child :angle (fan-child idx
                                                     (count (:children tree))
                                                     (:angle tree)
                                                     (:containment-angle tree)))
                      (merge (polar-to-cartesian 0 0 (:containment-radius tree)
                                                 (fan-child idx
                                                            (count (:children tree))
                                                            (:angle tree)
                                                            (:containment-angle tree))))))
                  (:children tree)))))

(defn modify-tree [tree]
  (-> tree
      fan-children
      containment-arcs
      (update :children (partial map modify-tree))))

(def tree (reagent/atom (-> model
                            (assoc :containment-radius 90
                                   :containment-angle 0
                                   :angle (/ pi 2))
                            modify-tree)))


(defn swaptree [v]
  (reset! theta v)
  (reset! tree (-> model
                   (assoc :containment-radius 90
                          :containment-angle 0
                          :angle (/ pi 2))
                   modify-tree)))



(defn hiccupify [tree & parent]
  (into [:g {:transform (translate (:x tree) (:y tree))}]
        [[:circle.node {:r 1}]
         (if-not (empty? (:children tree))
           [:circle.guide {:r                (:containment-radius tree)
                           :stroke-dasharray "1,3"}])
         [:text.lbl {:dx 5 :dy 5} (:label tree)]
         (into [:g] (map (fn [c]
                           [:line {:x1 0
                                   :y1 0
                                   :x2 (:x c)
                                   :y2 (:y c)}]) (:children tree)))
         (into [:g] (map (fn [c] [hiccupify c tree]) (:children tree)))]))

(defn radiator []
  (fn [t]
    (into [:g {:transform (translate 0 0)}] (hiccupify t))))

(defn guide []
  (fn []
    [:circle.guide {:r                90
                    :stroke-dasharray "1,3"}]))

(defn svg []
  (fn [tree]
    [:svg.hyperview
     [:g {:transform "translate(250,250)"}
      ;[guide]
      [radiator tree]]]))

(defn main []
  [:div
   [:div
    [:input.form-control {:type      "range" :min 0 :max pi :step 0.1
                          :on-change (fn [e] (swaptree (.. e -target -value)))}]]

   [svg @tree]
   ;[:div (json-html/edn->hiccup @tree)]
   ])