(ns micircle.math.views
  (:require-macros
    [clojure.core.matrix :refer [def-mat-mop def-mat-mops]]
    [clojure.core.matrix.macros :refer [TODO error]])
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [micircle.chord.main :as chord]
            [json-html.core :as json-html]
            [micircle.chord.utils :as utils]
            [clojure.core.matrix :as m]))

(defn divide-circle-evenly
  "Expects a list of entities."
  [data]
  (let [total (count data)]
    (reduce (fn [col next] (conj col {:angle (* next (/ 360 total))})) [] data)))

(defn place-on-circle [data]
  (doall (map (fn [e]
                (let [pos (utils/polar-to-cartesian 0 0 150 (:angle e))]
                  (merge e pos))) data)))


(def labels [0 1 2 3])

(def tmatrix [[0 0 1 0]
              [0 0 0 1]
              [1 0 0 0]
              [0 1 0 0]])

(def parsed (reagent/atom (-> (divide-circle-evenly labels) (place-on-circle))))


(println "SELECTED" (m/select tmatrix 0 1))
(println "SLICED" (m/slices tmatrix 1))


(defn matrixes []
  (fn [size]
    (into [:div.matrix (into [:div.row [:div.cell "="]] (map (fn [label] [:div.cell label]) labels))]
          (map-indexed (fn [idx row]
                         (into [:div.row [:div.cell (nth labels idx)]]
                               (map (fn [cell]
                                      [:div.cell
                                       {:class (if (= 1 cell) "true" "false")} cell]) row)))
                       tmatrix))))


(defn svg []
  (fn []
    [:svg.matrix
     {:width  400
      :height 400}
     [:g
      {:transform "translate(200,200)"}
      [:circle.guide
       {:r 150}]
      (map (fn [{y :y x :x}]
             [:circle.anchor {:r 5 :cx x :cy y}]) @parsed)]]))

(defn main []
  (fn []
    [:div
     [:h1 "main"]
     [:span (str "test: " @parsed)]
     [:br]
     [:br]
     [matrixes 5]
     [svg]]))
