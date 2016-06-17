(ns micircle.math.views
  (:require-macros
    [clojure.core.matrix :refer [def-mat-mop def-mat-mops]]
    [clojure.core.matrix.macros :refer [TODO error]])
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [micircle.chord.main :as chord]
            [json-html.core :as json-html]
            [micircle.chord.utils :as utils]
            [clojure.core.matrix :as matrix]
            [clojure.core.matrix.operators :as o]
            [clojure.core.matrix.selection :refer [sel where]]))


(defn permutations [s]
  (lazy-seq
    (if (seq (rest s))
      (apply concat (for [x s]
                      (map #(cons x %) (permutations (remove #{x} s)))))
      [s])))


(def entities (reagent/atom [:a :b :c :d :e :f]))

(def connections [[:b :d] [:a :c]])

(defn pack-matrix []
  (println "packing matrix"))

(defn get-index [col e] (first (keep-indexed (fn [idx entity] (if (= entity e) idx)) col)))

(defn between?
  "Does n fall between (non-inclusive) the min and max of the values in vector v?"
  [v n] (apply < (interpose n ((juxt first last) (sort v)))))

(defn within?
  "Does n fall within the min and max of the values in vector v?"
  [v n] (apply <= (interpose n ((juxt first last) (sort v)))))

(defn on?
  "Is n equal to the min or max of the values in vector v?"
  [v n] (some? (some true? (map (partial = n) ((juxt first last) (sort v))))))

(defn distance
  "The distance between the min and max of the values in vector v."
  [v]
  (apply - (reverse ((juxt first last) (sort v)))))

(defn crosses?
  "True if [x1 y1] crosses over [x2 y2]."
  [pos1 pos2]
  (not (if (or (on? pos1 (first pos2)) (on? pos1 (second pos2)))
         true ; claw graph
         (if (between? pos1 (first pos2))
           (within? pos1 (second pos2))
           (not (between? pos1 (second pos2)))))))

(defn cost
  "Determines the number of crosses in a given matrix."
  [entities edges]
  (/ (count
       (filter true?
               (mapcat (fn [next-edge]
                         (let [pos (into [] (map (partial get-index entities) next-edge))]
                           (map (fn [n]
                                  (let [tmp (into [] (map (partial get-index entities) n))]
                                    (crosses? pos tmp))) edges))) edges)))
     2))





;(println "the cost" (cost @entities connections))

;(println "ALL" (apply min (map (fn [permutation]
;                       (cost permutation connections)) (permutations @entities))))

;(println "MATRIX" (matrix/matrix [:a :b :c :d :e :f :g :h]))






(defn connect [entity-a entity-b entities matrix]
  (let [pos (mapv (partial get-index entities) [entity-a entity-b])]
    (-> matrix
        (assoc-in pos 1)
        (assoc-in (reverse pos) 1))))

(def tmatrix (reagent/atom (reduce (fn [total [A B]]
                                     (connect A B @entities total))
                                   (matrix/zero-matrix (count @entities) (count @entities)) connections)))


;(defn cost [m]
;  (let [edges (keep-indexed (fn [row-idx x]
;                              (if-let [[f] (keep-indexed (fn [col-idx y] (if (= 1 y) col-idx nil)) x)]
;                                (if-not (nil? f) [row-idx f]))) m)]
;    ; Now determine if any of these edges overlap another
;    (reduce (fn [count next]
;              (some (fn [[row col]]
;                      (println "lookign at row" row)
;                      (println "found idx" (get-index @entities row))
;                      false) edges)) 0 edges)))

;(println "cost finished" (cost @tmatrix))


;(defn checker? [item y]
;  (println "item: " item y)
;  true)
;
;(sel tmatrix (where checker?) -1)






(defn calculate-angles-for-entities
  "Expects a list of ordered entities."
  [data]
  (reduce (fn [col next]
            (conj col {:label next
                       :angle (+ 0 (* (inc (count col)) (/ 360 (count data))))})) [] data))

(defn place-entities-on-plane
  "Map entities around a circular using their known angle"
  [data]
  (doall (map (fn [e]
                (let [pos (utils/polar-to-cartesian 0 0 150 (:angle e))]
                  (merge e pos))) data)))

(def parsed (reagent/atom (-> (calculate-angles-for-entities @entities)
                              (place-entities-on-plane))))

(defn matrix-view []
  (fn []
    (into [:div.matrix (into [:div.row [:div.cell "="]] (map (fn [label] [:div.cell label]) @entities))]
          (map-indexed (fn [idx row]
                         (into [:div.row [:div.cell (nth @entities idx)]]
                               (map (fn [cell]
                                      [:div.cell
                                       {:class (if (= 1 cell) "true" "false")} cell]) row)))
                       @tmatrix))))

(defn lines []
  (fn [data]
    (let [entity-range (take (count data) (range))]
      (into [:g.lines] (mapcat
                         (fn [row-index]
                           (doall (reduce
                                    (fn [total col-index]
                                      (if (= 1 (matrix/select @tmatrix row-index col-index))
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
  (fn []
    (let [data @parsed]
      [:svg.matrix
       {:width  400
        :height 400}
       [:g {:transform "translate(200,200)"}
        [:circle.guide {:r 150}]
        [lines data]
        [nodes data]
        [labels data]]])))


(defn xer []
  (println "perms" (count (permutations @entities)))
  ;(swap! tmatrix (fn [x] (matrix/rotate x [1 1])))
  ;(swap! entities (fn [x] (matrix/rotate x [1])))
  )

(defn rotater []
  [:div.button.-blue.center {:on-click xer} "test"])

(defn main []
  (fn []
    [:div
     [:br]
     [:br]
     [rotater]
     [matrix-view 5]
     [svg]]))
