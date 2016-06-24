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
(def theta pi)

(def model {:label    "A"
            :children [{:label    "B"
                        :children [{:label    "B1"
                                    :children nil}
                                   {:label    "B2"
                                    :children nil}
                                   {:label    "B3"
                                    :children nil}]}
                       {:label    "C"
                        :children nil}
                       {:label    "D"
                        :children nil}
                       {:label    "E"
                        :children nil}]})



(def globals (reagent/atom {:width  500
                            :height 500
                            :r      50
                            :theta  2.79253}))

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
  (println "NEXT ANGLE" (/ (* 2 pi index) total))
  (/ (* 2 pi index) total))

(defn center-at-zero [tree]
  (assoc tree :x 0 :y 0))

(defn fan-child-old [idx total]
  (println "fan total idx" idx total)
  (- pi
     (+ (/ theta
           2)
        (/ (* theta idx)
           total)
        (/ theta
           (* 2 total)))))

(defn fan-child [idx total]
  (let [total 3
        theta pi
        slice-size (/ theta total)]

    (println "FANNED" slice-size))

  )



(defn radiate-children [radius children]
  (map-indexed
    (fn [idx child]
      (let [angle (radial-parition idx (count children))]
        (merge (assoc child :angle angle) (polar-to-cartesian 0 0 radius angle)))) children))

(defn containment-arcs [tree]
  (let [children (:children tree)]
    (assoc tree :children (map-indexed (fn [index child]
                                         (let [neighbour (nth children (if (= index (dec (count children))) (dec index) (inc index)))
                                               mid-angle (/ (+ (:angle child) (:angle neighbour)) 2)
                                               midpoint  (polar-to-cartesian 0 0 100 mid-angle)
                                               d         (distance [(:x child) (:y child)] [(:x midpoint) (:y midpoint)])]

                                           (assoc child :arc-radius d))) children))))

(defn handle-children [tree]
  (if-let [children (:children tree)]
    (let [spaced-children (map-indexed (fn [idx child]
                                         (println "child" child) child)
                                       children)]
      ;(println "spaced-children" spaced-children)
      (assoc tree :children (map handle-children children))
      children)
    ))


(defn doit [tree]
  ;(println "DOIT" tree)
  (let [u (assoc tree :touched true)]
    (if-let [children (:children tree)]
      (let [angled-children (map-indexed
                              (fn [idx child]
                                (assoc child :angle (fan-child (inc idx) (count children))))
                              children)]
        (assoc u :children (map doit angled-children)))
      u))
  )

(defn doa [tree]
  (update tree :children (partial map doit)))


(defn space-children-around-circle [tree]
  (-> tree
      center-at-zero
      (update :children (partial radiate-children 100))
      ;doit
      ))



(def tree (-> model
              space-children-around-circle
              containment-arcs
              doa))




(defn hiccupify [root tree]
  (into root
        (map (fn [child]
               [:g {:transform (translate (:x child) (:y child))}
                [:circle.node {:r 5}]
                [:circle.guide {:r (:arc-radius child)}]
                [:text.lbl (:label child)]
                ;(map (partial [:g]) (:children child))
                ]) (:children tree))))

;(println "hiccupify" (hiccupify [:g {:transform (translate 0 0)}] tree))

(defn radiator []
  (fn [t]
    (hiccupify [:g {:transform (translate 0 0)}] t)))


;(println "coordinates" (map (partial polar-to-cartesian 0 0 100) (calculate-coordinates [1 2])))

(defn guide []
  (fn []
    [:circle.guide {:r 100}]))

(defn svg []
  (fn []
    (let [t tree]
      [:svg.hyperview
       [:g {:transform "translate(250,250)"}
        [guide]
        [radiator t]]])))

(defn main []
  [:div
   ;[:h3 "Hyperview"]
   [svg]
   [:div (json-html/edn->hiccup tree)]])

