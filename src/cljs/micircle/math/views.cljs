(ns micircle.math.views
  (:require [re-frame.core :as re-frame]
            [micircle.chord.main :as chord]
            [json-html.core :as json-html]
            [micircle.chord.utils :as utils]))


(def labels ["A" "B" "C" "D" "E"])
(def tmatrix
  [[0 0 1 0]
   [0 0 0 1]
   [1 0 0 0]
   [0 1 0 0]])

(def tmatrixbig
  [[0 0 1 0 0]
   [1 0 1 1 0]
   [0 1 0 1 0]
   [0 0 1 0 0]
   [0 0 1 0 0]])


(defn matrix []
  (fn [size]
    (into [:div.matrix (into [:div.row [:div.cell "="]] (map (fn [label] [:div.cell label]) labels))]
          (map-indexed (fn [idx row]
                         (into [:div.row [:div.cell (nth labels idx)]]
                               (map (fn [cell]
                                      [:div.cell
                                       {:class (if (= 1 cell) "true" "false")} cell]) row)))
                       tmatrix))))

(defn divide-circle-evenly
  "Expects a list of entities."
  [data]
  (let [total (count data)]
    (reduce (fn [col next] (conj col {:angle (* next (/ 360 total))})) [] data)))

(defn place-on-circle [data]
  (doall (map (fn [e] (utils/polar-to-cartesian 0 0 150 (:angle e))) data)))

(defn svg []
  (fn []
    (println )
    [:svg.matrix
     {:width  400
      :height 400}
     [:g
      {:transform "translate(200,200)"}
      [:circle.guide
       {:r 150}]
      (map (fn [{y :y x :x}] [:circle.anchor {:r 5 :cx x :cy y}])
           (-> (divide-circle-evenly [1 2 3 4]) (place-on-circle)))]]))

(defn main []
  (fn []
    [:div
     [:h1 "main"]
     [matrix 5]
     [svg]]))
