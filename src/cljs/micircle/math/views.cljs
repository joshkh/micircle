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
            [com.rpl.specter :as s]
            [clojure.core.matrix.selection :refer [sel where]]))


(defn permutations [s]
  (lazy-seq
    (if (seq (rest s))
      (apply concat (for [x s]
                      (map #(cons x %) (permutations (remove #{x} s)))))
      [s])))


;(println "permmies" (permutations [:a :b :c :d :e :f :g :h :i]))


;(def entities (reagent/atom [:a :b :c :d :e :f :g]))



(defn node-frequency
  "Returns a frequency map of the number of times a node appears in an edge."
  [edges]
  (reverse (sort-by last (frequencies (flatten edges)))))

(defn get-index
  "Finds the index of an item in a collection or nil if not found."
  [col e] (first (keep-indexed (fn [idx entity] (if (= entity e) idx)) col)))

(defn find-neighbours
  "Finds all nodes that have an edge with this node."
  [edges e]
  (remove (partial = e) (flatten (keep identity (map (fn [edge] (if (get-index edge e) edge)) edges)))))

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
         true                                               ; claw graph
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


(defn pack [entities connections]
  (let [frequency-map (node-frequency entities)]
    (loop [sorted []
           [target & remaining] frequency-map]
      (let [progress (conj (reverse sorted) (first target))]
        (println "neighbours" (find-neighbours connections (first target)))
        (if-not (empty? remaining)
          (recur progress remaining)
          progress)))))

;(println "packed" (pack @entities connections))
;(reset! entities (pack @entities connections))





;(println "the cost" (cost @entities connections))

;(println "ALL" (apply min (map (fn [permutation]
;                       (cost permutation connections)) (permutations @entities))))

;(println "MATRIX" (matrix/matrix [:a :b :c :d :e :f :g :h]))






(defn connect [entity-a entity-b entities matrix]
  (let [pos (mapv (partial get-index entities) [entity-a entity-b])]
    (-> matrix
        (assoc-in pos 1)
        (assoc-in (reverse pos) 1))))


(defn calculate-angles-for-entities
  "Expects a list of ordered entities."
  [data]
  (reduce (fn [col next]
            (conj col {:label next
                       :angle (- (* (inc (count col)) (/ 360 (count data))) (/ 360 (count data)))})) [] data))

(defn place-entities-on-plane
  "Map entities around a circular using their known angle"
  [data]
  (doall (map (fn [e]
                (let [pos (utils/polar-to-cartesian 0 0 150 (:angle e))]
                  (merge e pos))) data)))



;(defn matrix-view []
;  (fn []
;    (into [:div.matrix (into [:div.row [:div.cell "="]] (map (fn [label] [:div.cell label]) @entities))]
;          (map-indexed (fn [idx row]
;                         (into [:div.row [:div.cell (nth @entities idx)]]
;                               (map (fn [cell]
;                                      [:div.cell
;                                       {:class (if (= 1 cell) "true" "false")} cell]) row)))
;                       @tmatrix))))

(defn matrix-view []
  (fn [data]
    (into [:div.matrix
           (into [:div.row [:div.cell "="]]
                 (map (fn [label]
                        [:div.cell label]) (:entities data)))]
          (map-indexed (fn [idx row]
                         (into [:div.row [:div.cell (nth (:entities data) idx)]]
                               (map (fn [cell]
                                      [:div.cell
                                       {:class (if (= 1 cell) "true" "false")} cell]) row))
                         )
                       (:matrix data)))))

(defn lines []
  (fn [data]
    (let [entity-range (take (count (:view data)) (range))]
      (println "entity-range" entity-range)
      (into [:g.lines] (mapcat
                         (fn [row-index]
                           (doall
                             (reduce
                               (fn [total col-index]
                                 (println "total" total "col-index" col-index)
                                 (println "inspecting" (nth (:view data) row-index))
                                 ;(conj total
                                 ;      [:line {:x1 (-> (nth (:view data) row-index) :x)
                                 ;              :y1 (-> (nth (:view data) row-index) :y)
                                 ;              :x2 (-> (nth (:view data) col-index) :x)
                                 ;              :y2 (-> (nth (:view data) col-index) :y)}])
                                 (if (= 1 (matrix/select (:matrix data) row-index col-index))
                                   (conj total
                                         [:line {:x1 (-> (nth (:view data) row-index) :x)
                                                 :y1 (-> (nth (:view data) row-index) :y)
                                                 :x2 (-> (nth (:view data) col-index) :x)
                                                 :y2 (-> (nth (:view data) col-index) :y)}])
                                   total)

                                 ) [] entity-range)))
                         entity-range)))))


(defn nodes []
  (fn [data]
    (into [:g.nodes] (map (fn [{y :y x :x}]
                            [:circle.anchor {:r 5 :cx x :cy y}]) (:view data)))))

(defn labels []
  (fn [data]
    (into [:g.labels] (map (fn [entity]
                             [:text {:x (+ 5 (:x entity)) :y (+ 5 (:y entity))}
                              (:label entity)])) (:view data))))

(defn svg []
  (fn [data]
    [:svg.matrix
     {:width  400
      :height 400}
     [:g {:transform "translate(200,200)"}
      [:circle.guide {:r 150}]
      [lines data]
      [nodes data]
      [labels data]
      ]]))


(defn xer [a]
  ;(println "perms" (count (permutations @entities)))
  (swap! a (fn [x] (matrix/rotate x [1 1])))
  (swap! a (fn [x] (matrix/rotate x [1])))
  )

(defn rotater []
  [:div.button.-blue.center {:on-click xer} "test"])


(defn build-matrix [entities connections]
  (reduce (fn [total [A B]]
            (connect A B entities total))
          (matrix/zero-matrix (count entities) (count entities)) connections))


;[:a :b :c :d :e :f :g :h :i]
;[:a :e :b :d :g :f :c]
(def matrix1 (reagent/atom {:entities    [:a :e :b :d :g :f :c :h :i]
                            :connections [
                                          ;[:a :e]
                                          ;[:b :d]
                                          ;[:c :f]
                                          ;[:b :e]
                                          [:c :i]
                                          [:d :i]
                                          [:e :g]
                                          [:a :c]

                                          [:b :h]
                                          [:f :e]
                                          ;[:h :i]
                                          [:f :a]
                                          ]}))

;(def parsed (reagent/atom (-> (calculate-angles-for-entities @entities)
;                              (place-entities-on-plane))))


(swap! matrix1 (fn [a] (assoc a :view (-> (calculate-angles-for-entities (:entities a))
                                          (place-entities-on-plane)))))

(swap! matrix1 (fn [a] (assoc a :matrix (build-matrix (:entities a) (:connections a)))))





(defn main []
  (fn []
    [:div
     [:br]
     [:br]
     [:span (str @matrix1)]
     ;[:span (str @entities)]
     ;[rotater]
     [:div.row
      [:div.col [matrix-view @matrix1]]
      [:div.col [svg @matrix1]]
      ]

     ]))

