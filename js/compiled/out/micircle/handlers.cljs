(ns micircle.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as re-frame :refer [trim-v]]
            [micircle.db :as db]
            [micircle.chord.utils :as utils]
            [micircle.utils :as u]
            [cljs-http.client :as http]
            [com.rpl.specter :as s]
            [cljs.core.async :as async :refer [<!]]))

(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    db/default-db))



(defn get-index
  "Finds the index of an item in a collection or nil if not found."
  [col e] (first (keep-indexed (fn [idx entity] (if (= entity e) idx)) col)))




(defn view-calculate-features [data]
  (s/transform [:view :nodes
                s/ALL
                (s/collect-one :start) (s/collect-one :end) (s/collect-one :length)
                :features
                s/ALL
                :sequenceData
                s/ALL]
               (fn [start-degree end-degree length sequence-data]
                 (if (= "?-?" (:pos sequence-data))
                   (assoc sequence-data :start start-degree :end (+ 1 start-degree))
                   (let [pos   (u/parse-pos (:pos sequence-data))
                         scale (u/radial-scale [0 length] [start-degree end-degree])
                         [x y] (map (partial scale) pos)]
                     (assoc sequence-data :start x :end y))))
               data))

(defn space-around-circle [data]
  (reduce
    (fn [total next]
      (if-not (empty? total)
        (let [my-length (- (:end next) (:start next))]
          (conj total (assoc next
                        :start (+ (:end (last total)) 0)
                        :end (- (+ (:end (last total)) my-length) 0))))

        (conj total next))) [] data))

(defn pad-segment [padding x]
  (assoc x :start (:start x)
           :end (- (:end x) padding)))

(defn divide-circle [data]
  (let [total (reduce + (map (comp js/parseInt :length) data))]
    (reduce (fn [col next]
              (conj col
                    (merge next
                           {:start 0
                            :end   (* (:length next) (/ 360 total))}))) [] data)))

(defn get-nodes-with-features
  "Return nodes that have features with an id.
  The :linkedFeatures key will only contain the matching features."
  [nodes id]
  (->> nodes
       (s/select [s/ALL (s/selected? :features s/ALL :id #(= id %))])
       (s/transform [s/ALL :features] #(filter (fn [feature] (= id (:id feature))) %))))

(defn zero-if-nan [[x y]]
  [(if (js/isNaN x) 1 x)
   (if (js/isNaN y) 12 y)])


(defn calculate-link-path [from-feature to-feature center?]
  ;(println "CALC LINK PATH")
  ;(println "from feature" from-feature)
  ;(println "to feature" to-feature)

  (let [from-feature-scale (u/radial-scale [0 (:length from-feature)]
                                           [(:start from-feature) (:end from-feature)])
        to-feature-scale   (u/radial-scale [0 (:length to-feature)]
                                           [(:start to-feature) (:end to-feature)])
        from-pos           (u/parse-pos (-> from-feature :features first :sequenceData first :pos))
        to-pos             (u/parse-pos (-> to-feature :features first :sequenceData first :pos))]


    (let [[x1 y1] (if (js/isNaN (first from-pos))
                    (if center?
                      [(- (/ (+ (:start from-feature) (:end from-feature)) 2) 2) (+ 2 (/ (+ (:start from-feature) (:end from-feature)) 2))]
                      [(:start from-feature) (+ 2 (:start from-feature))])

                    (map (partial from-feature-scale) from-pos))
          [x2 y2] (if (js/isNaN (first to-pos))
                    (if center?
                      [(- (/ (+ (:start to-feature) (:end to-feature)) 2) 2) (+ 2 (/ (+ (:start to-feature) (:end to-feature)) 2))]
                      [(:start to-feature) (+ 2 (:start to-feature))])
                    (zero-if-nan (map (partial to-feature-scale) to-pos)))]

      ;(println "x1" x1 "y1" y1 "x2" x2 "y2" y2)
      (utils/describe-link 0 0 150 x1 y1 x2 y2))))

;
;(let [[x1 y1] (zero-if-nan (map (partial from-feature-scale) from-pos))
;      [x2 y2] (zero-if-nan (map (partial to-feature-scale) to-pos))]
;  ;(println "x1" x1 "y1" y1)
;  ;(println "x2" x2 "y2" y2)
;  (utils/describe-link 0 0 150 x1 y1 x2 y2))

(defn view-calculate-links [db]
  (let [nodes (get-in db [:view :nodes])]
    (assoc-in db [:view :links]
              (into [] (mapcat
                         (fn [node]
                           (map (fn [feature]
                                  (calculate-link-path
                                    (assoc node :features [feature])
                                    (first (get-nodes-with-features
                                             nodes
                                             (-> feature :linkedFeatures first)))
                                    (:center (:view db)))) (:features node))) nodes)))))


; Walk through each feature of a node and look at the sequence data



; Draw an arc from the sequence data's start and end point to the start and end point of the sequence data in the linked feature



;(defn view-calculate-links [db]
;  (let [nodes (get-in db [:view :nodes])]
;    (println
;      (map (fn [node]
;             (map (fn [feature]
;                    (println "has feature" (:sequenceData feature))
;                    feature) (:features node))) nodes))
;    )
;  db)

(defn generate-textpath-defs [db]
  (let [nodes (get-in db [:view :nodes])]
    (assoc-in db [:view :defs]
              (into [] (map (fn [node]
                              {
                               :id (:uuid node)
                               :d  (utils/describe-arc 0 0 175
                                                       (:start node)
                                                       (:end node)
                                                       true)})
                            nodes)))))






(defn convert-strings-to-ints [db]
  (->> db
       (s/transform [:view :nodes s/ALL :features s/ALL :id] #(js/parseInt %))
       (s/transform [:view :nodes s/ALL :features s/ALL :linkedFeatures s/ALL] #(js/parseInt %))))



(defn view-parse-nodes [db]
  (let [participants (-> db :jamiobj :data last :participants)
        interactors  (:interactors db)]
    (assoc-in db [:view :nodes]
              (into []
                    (map (fn [participant]
                           (assoc participant :uuid (gensym)
                                              :length
                                              (if-let [found (get-in interactors [(keyword (:interactorRef participant)) :length])]
                                                found
                                                8888)
                                              :label
                                              (get-in interactors [(keyword (:interactorRef participant)) :label])))
                         participants)))))

(defn parse-interactors-and-features [db]
  (assoc db :interactors (reduce (fn [total next]
                                   (assoc total (keyword (:id next)) next))
                                 {}
                                 (butlast (get-in db [:jamiobj :data])))
            :features (reduce (fn [total next]
                                (assoc total (keyword (:id next)) next))
                              {}
                              (butlast (get-in db [:jamiobj :data])))))


(defn interaction? [e]
  (= "interaction" (:object e)))

(defn interactor? [e]
  (= "interactor" (:object e)))



(defn features [data]
  (s/select [:data s/ALL interaction? :participants s/ALL :features s/ALL] data))

(defn participants [data]
  (->>
    (s/select [:data s/ALL interaction? :participants s/ALL] data)
    (map (fn [p] (assoc p :uuid (gensym))))))

(defn interactors [data]
  (s/select [:data s/ALL interactor?] data))

(defn feature [features id]
  (filter (fn [x]
            (println x)
            (= (:id x) id)) features))


(defn index-map [feature-ids]
  (reduce #(assoc % %2 (get-index feature-ids %2)) {} feature-ids))

(defn square-matrix [size fill]
  (into [] (repeat size (into [] (repeat size fill)))))

(defn feature-matrix [features]
  (let [vertices (map :id features)
        indices  (index-map vertices)
        m        (square-matrix (count features) nil)]
    (-> {}
        (assoc :matrix (reduce (fn [total next]
                                 (reduce (fn [total linked-feature]
                                           (assoc-in total [(get indices (:id next)) (get indices linked-feature)] true))
                                         total (:linkedFeatures next))) m features)
               :vertices vertices
               :indices indices))))



(defn handle-all
  [db data]
  (println "handling data")
  (-> db
      (assoc :raw data)
      (assoc :data (feature-matrix (features data)))
      (assoc :interactors (interactors data))
      (assoc :participants (participants data))
      (assoc :features (features data))

      ;convert-strings-to-ints
      ;parse-interactors-and-features
      ;view-parse-nodes
      ;view-calculate-nodes
      ;view-calculate-features
      ;generate-textpath-defs
      ;view-calculate-links
      ))


(defn interactor [db id]
  (s/select-one [:interactors (s/filterer #(= (:id %) id)) s/ALL] db))

(defn make-ticks [node]
  (assoc node :ticks (range (:start node) (:end node) 5)))

(re-frame/register-handler
  :calculate-view
  (fn [db]
    (-> db
        ; Copy our nodes
        (assoc-in [:view :nodes] (map #(select-keys % [:label :features :id :uuid :interactorRef]) (:participants db)))

        ; Ensure that each participant's view has a length
        (update-in [:view :nodes] (partial map (fn [node] (assoc node :length (count (:sequence (interactor db (:interactorRef node))))))))

        (update-in [:view :nodes] (partial map (fn [node]
                                                 (if (= 0 (:length node))
                                                   (assoc node :length 20 :small-molecule true)
                                                   node))))

        ; Space the nodes around a circle according to their length
        (update-in [:view :nodes] divide-circle)

        (update-in [:view :nodes] space-around-circle)

        (update-in [:view :nodes] (partial map (partial pad-segment 5)))

        (update-in [:view :nodes] (partial map make-ticks))
        generate-textpath-defs
        view-calculate-links)))

(re-frame/register-handler
  :handle-data
  (fn [db [_ data]]
    (re-frame/dispatch [:calculate-view])
    (handle-all db data)))

(re-frame/register-handler
  :center-unknown
  (fn [db]
    (re-frame/dispatch [:calculate-view])
    (assoc-in db [:view :center] (not (:center (:view db))))))

(re-frame/register-handler
  :set-complex-id trim-v
  (fn [db [id]]
    (re-frame/dispatch [:load-data])
    (assoc db :complex-id id)))

(re-frame/register-handler
  :load-data trim-v
  (fn [db]
    (go (let [result (:body (<! (http/get (str "http://www.ebi.ac.uk/intact/complex-ws/export/" (:complex-id db)) {:with-credentials? false})))]

          ; Create a list of all interactors
          (let [interactor-ids (s/select [:data s/ALL :identifier :id some?] result)]

            ; Fetch their lengths from uniprot
            (let [channels (map u/protein-length interactor-ids)]

              ; Merge the channels and associate the return lengths with the correct interactor
              (go (let [lengths (->> channels (async/merge) (async/reduce conj []) (<!))]

                    ; Update interactors with their known lengths
                    (let [fixed (reduce (fn [total next]
                                          (s/transform [:data (s/filterer #(= (:accession next) (:id (:identifier %)))) s/ALL]
                                                       (fn [x]
                                                         (assoc x :length (if (nil? (:length next)) 100 (:length next)))) total))
                                        result
                                        lengths)]

                      ; Start the calculation process
                      (re-frame/dispatch [:handle-data fixed]))))))))
    db))
