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
(def theta 2)

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

(def model {:label    "A"
            :children [{:label    "B"
                        :children [{:label "Z"
                                    :children nil}
                                   {:label "Y"
                                    :children nil}]}
                       {:label    "C"
                        :children nil}
                       {:label    "D"
                        :children nil}
                       {:label "E"}]})



(def globals (reagent/atom {:width  500
                            :height 500
                            :r      50
                            :theta  2.4}))

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

(defn center-at-zero [tree]
  (assoc tree :x 0 :y 0))

(defn fan-child
  ([idx total] (fan-child 0 idx total))
  ([trajectory idx total]
   (println "fan child called with" trajectory idx total)
   (if (> total 1)
     (+ trajectory (- (* idx (/ theta (dec total))) (/ theta 2)))
     trajectory)))

(defn radiate-children [radius children]
  (map-indexed
    (fn [idx child]
      (let [angle (radial-parition idx (count children))]
        (merge (assoc child :angle angle) (polar-to-cartesian 0 0 radius angle)))) children))

(defn containment-arcs [tree]
  (println "CONTAINTMENT ARCS CALLED ON" tree)
  (let [children (:children tree)]
    (if (> (count children) 1)
      (assoc tree :children
                  (map-indexed (fn [index child]
                                 (println "----------------------")
                                 (println "CHILD" child)
                                 (let [neighbour (nth children (if (= index (dec (count children))) (dec index) (inc index)))
                                       _ (println "NEIGH" neighbour)
                                       mid-angle (/ (+ (:angle child) (:angle neighbour)) 2)
                                       _ (println "mid angle" mid-angle)
                                       midpoint  (polar-to-cartesian 0 0 (:arc-radius tree) mid-angle)
                                       _ (println "mid point" midpoint)
                                       d         (distance [(:x child) (:y child)] [(:x midpoint) (:y midpoint)])]
                                   (println "GOT THE D" d mid-angle midpoint)
                                   (assoc child :arc-radius d))) children))
      (do
        (assoc tree :children (map (fn [child]
                                     (assoc child :arc-radius (/ (:arc-radius tree) 1.5))) children))))))

(defn fan-children [tree]
  (assoc tree :children
              (map-indexed
                (fn [idx child]
                  (println "Fanning child to angle" (fan-child (:arc-radius tree) idx (count (:children tree))))
                  (->
                    (assoc child :angle (fan-child idx (count (:children tree))))
                    (merge (polar-to-cartesian 0 0 (:arc-radius tree) (fan-child idx (count (:children tree)))))))
                (:children tree))))

(defn do-again? [tree f]
  (if (:children tree)
    (assoc tree :children (map f (:children tree)))
    tree))

(defn doit [tree]
  (-> tree
      containment-arcs
      fan-children
      (do-again? doit))
  ;(let [u (containment-arcs (assoc tree :touched true))]
  ;  (if-let [children (:children tree)]
  ;    (let [angled-children (map-indexed
  ;                            (fn [idx child]
  ;                              (let [ang (fan-child (:angle tree) idx (count children))]
  ;                                (println "child" child)
  ;                                (println "arc-radius" (:arc-radius tree))
  ;                                (merge (assoc child :angle ang) (polar-to-cartesian 0 0 (:arc-radius tree) ang))))
  ;                            children)]
  ;      (containment-arcs (assoc u :children (map doit angled-children))))
  ;    u))

  )

(defn doa [tree]
  (update tree :children (partial map doit)))

(defn space-children-around-circle [tree]
  (-> tree
      center-at-zero
      (update :children (partial radiate-children 60))
      (assoc :arc-radius 60)
      ))

(def tree (-> model
              space-children-around-circle
              containment-arcs
              doa
              ))

(defn hiccupify [tree]
  (into [:g {:transform (translate (:x tree) (:y tree))}]
        [[:circle.node {:r 5}]
         [:circle.guide {:r (:arc-radius tree)}]
         [:text.lbl (:label tree)]
         (map hiccupify (:children tree))]))

(defn radiator []
  (fn [t]
    (into [:g {:transform (translate 0 0)}] (hiccupify t))))

(defn guide []
  (fn []
    [:circle.guide {:r 60}]))

(defn svg []
  (fn []
    (let [t tree]
      [:svg.hyperview
       [:g {:transform "translate(250,250)"}
        [guide]
        [radiator t]]])))

(defn main []
  [:div
   [svg]
   [:div (json-html/edn->hiccup tree)]])

