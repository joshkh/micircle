(ns micircle.hyperview.views
  (:require-macros
    [clojure.core.matrix :refer [def-mat-mop def-mat-mops]]
    [clojure.core.matrix.macros :refer [TODO error]])
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [micircle.chord.utils :as utils]))

(def pi (.-PI js/Math))

(def model {:label    "A"
            :children [{:label    "B"
                        :children nil}
                       {:label    "C"
                        :children [:label "D"
                                   :children nil]}]})

(def globals (reagent/atom {:width  500
                            :height 500
                            :r      50
                            :theta  2.79253}))



(defn polar-to-cartesian
  "Convert polar coordinates to cartesian coordinates.
  TODO: confirm that x and y should not be reversed."
  [center-x center-y radius angle-in-radians]
  {:x (+ center-x (* radius (.cos js/Math angle-in-radians)))
   :y (+ center-y (* radius (.sin js/Math angle-in-radians)))})


(defn radial-parition [index total]
  (/ (* 2 pi (inc index)) total))

(defn calculate-coordinates [nodes]
  (map-indexed (fn [idx node] (/ (* 2 pi (inc idx)) (count nodes))) nodes))

(defn walker [tree]
  (println "walker got" tree)
  (let [updated (assoc tree :mmmmmmmmmmm 7777777)]
    (if (nil? (:children updated))
      updated
      (map (fn [x] (assoc updated :children (map walker x))) (:children updated)))))

(defn start [tree]
  (let [children (map (fn [child coordinates]
                        (merge child coordinates))
                      (:children tree)
                      (map (partial polar-to-cartesian 0 0 100) (calculate-coordinates (range (count (:children tree))))))]
    (assoc tree :children (map walker children)))
  )

(defn walk-model [root]
  (if-let [children (:children root)]
    (assoc root :children (map (fn [child]
                                 (walk-model (assoc child :xxx 123))) children))
    root))


(defn space-children-around-circle [tree]
  (-> tree
      (assoc :x 0 :y 0)
      (update :children (partial map-indexed
                                 (fn [idx child]
                                   (let [angle (radial-parition idx (count (:children tree)))]
                                     (merge (assoc child :angle angle) (polar-to-cartesian 0 0 100 angle)))))))
  ;(assoc tree :children
  ;            (map-indexed (fn [idx child]
  ;                           (assoc child :angle (radial-parition idx (count (:children tree)))))
  ;                         (:children tree)))

  )

;(println "children" (space-children-around-circle model))

;(println "walked" (start model))

(defn node []
  (fn []
    [:circle {:r 50}]))


(def tree (space-children-around-circle model))

(loop [tree tree
       s []]
  (into [:g]))



;(println "coordinates" (map (partial polar-to-cartesian 0 0 100) (calculate-coordinates [1 2])))

(defn guide []
  (fn []
    [:circle.guide {:r 100}]))

(defn svg []
  (fn []
    (let [tree (space-children-around-circle model)]
      [:svg.hyperview
       [:g {:transform "translate(250,250)"} [guide]]])))

(defn main []
  [:div
   [:h3 "Hyperview"]
   [svg]])

