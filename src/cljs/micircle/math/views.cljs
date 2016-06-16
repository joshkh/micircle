(ns micircle.math.views
  (:require-macros
    [clojure.core.matrix :refer [def-mat-mop def-mat-mops]]
    [clojure.core.matrix.macros :refer [TODO error]])
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [micircle.chord.main :as chord]
            [json-html.core :as json-html]
            [micircle.chord.utils :as utils]
            [clojure.core.matrix :as matrix]))



(def entities ["A" "B" "C" "D" "E" "F"])

(def connections [
                  ["A" "D"]
                  ["E" "F"]
                  ])

(def skeleton [[0 0 0 0 0 0]
               [0 0 0 0 0 0]
               [0 0 0 0 0 0]
               [0 0 0 0 0 0]
               [0 0 0 0 0 0]
               [0 0 0 0 0 0]])

(defn get-index [col e]
  (first (keep-indexed (fn [idx entity] (if (= entity e) idx)) col)))

(defn connect [entity-a entity-b entities matrix]
  (let [pos (mapv (partial get-index entities) [entity-a entity-b])]
    (-> matrix
        (assoc-in pos 1)
        (assoc-in (reverse pos) 1))))

(def tmatrix (reduce (fn [total [A B]] (connect A B entities total)) skeleton connections))

(defn calculate-angles-for-entities
  "Expects a list of ordered entities."
  [data]
  (reduce (fn [col next]
            (conj col {:label next
                       :angle (* (inc (count col)) (/ 360 (count data)))})) [] data))

(defn place-entities-on-plane
  "Map entities around a circular using their known angle"
  [data]
  (doall (map (fn [e]
                (let [pos (utils/polar-to-cartesian 0 0 150 (:angle e))]
                  (merge e pos))) data)))

(def parsed (reagent/atom (-> (calculate-angles-for-entities entities)
                              (place-entities-on-plane))))

(defn matrix-view []
  (fn []
    (into [:div.matrix (into [:div.row [:div.cell "="]] (map (fn [label] [:div.cell label]) entities))]
          (map-indexed (fn [idx row]
                         (into [:div.row [:div.cell (nth entities idx)]]
                               (map (fn [cell]
                                      [:div.cell
                                       {:class (if (= 1 cell) "true" "false")} cell]) row)))
                       tmatrix))))

(defn lines []
  (fn [data]
    (let [entity-range (take (count data) (range))]
      (into [:g.lines] (mapcat
                         (fn [row-index]
                           (doall (reduce
                                    (fn [total col-index]
                                      (if (= 1 (matrix/select tmatrix row-index col-index))
                                        (conj total
                                              [:line {:x1 (-> (nth data row-index) :x)
                                                      :y1 (-> (nth data row-index) :y)
                                                      :x2 (-> (nth data col-index) :x)
                                                      :y2 (-> (nth data col-index) :y)}])
                                        total)) [] entity-range)))
                         entity-range)))))


(defn nodes []
  (fn [data]
    (into [:g.nodes] (map (fn [{y :y x :x}]
                            [:circle.anchor {:r 5 :cx x :cy y}]) data))))

(defn labels []
  (fn [data]
    (into [:g.labels] (map (fn [entity]
                             [:text {:x (+ 5 (:x entity)) :y (+ 5 (:y entity))}
                              (:label entity)])) data)))

(defn svg []
  (let [data @parsed]
    (fn []
      [:svg.matrix
       {:width  400
        :height 400}
       [:g {:transform "translate(200,200)"}
        [:circle.guide {:r 150}]
        [lines data]
        [nodes data]
        [labels data]]])))

(defn main []
  (fn []
    [:div
     [:br]
     [:br]
     [matrix-view 5]
     [svg]]))
