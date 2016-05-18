(ns micircle.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as re-frame]
            [micircle.db :as db]
            [micircle.chord.utils :as utils]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/register-handler
  :handle-data
  (fn [db [_ data]]
    (re-frame/dispatch [:shape-data])
    (re-frame/dispatch [:calculate-pieces])
    (re-frame/dispatch [:calculate-view])
    (re-frame/dispatch [:generate-defs])
    (re-frame/dispatch [:calculate-links])
    (assoc db :jamiobj data)))

(re-frame/register-handler
  ; Associate a map of interactors by id to app db
  :shape-data
  (fn [db]
    (assoc db :interactors
              (reduce (fn [total next]
                        (assoc total (keyword (:id next)) next))
                      {}
                      (butlast (get-in db [:jamiobj :data])))
              :features
              (reduce (fn [total next]
                        (assoc total (keyword (:id next)) next))
                      {}
                      (butlast (get-in db [:jamiobj :data]))))))

(def padding 1)

(defn space-around-circle [data]
  (reduce
    (fn [total next]
      (if-not (empty? total)
        (let [my-length (- (:end next) (:start next))]
          (conj total (assoc next
                        :start (+ (:end (last total)) padding)
                        :end (- (+ (:end (last total)) my-length) padding))))

        (conj total next))) [] data))

(defn pad-segments [data]
  (map (fn [x]
         (assoc x :start (+ (:start x) padding)
                  :end (- (:end x) padding))) data))

(defn divide-circle [data]
  (let [total (reduce + (map (comp js/parseInt :length) data))]
    (reduce (fn [col next]
              (conj col
                    (merge next
                           {:start 0
                            :end (* (:length next) (/ 360 total))}))) [] data)))



(re-frame/register-handler
  :calculate-view
  (fn [db]
    (update-in db [:view :nodes] (comp pad-segments space-around-circle divide-circle))))

(re-frame/register-handler
  :generate-defs
  (fn [db]
    (let [nodes (get-in db [:view :nodes])]
      (assoc-in db [:view :defs]
                (into [] (map (fn [node]
                                {:id (:uuid node)
                                 :d (utils/describe-arc 0 0 175
                                                        (:start node)
                                                        (:end node))})
                              nodes))))))


(re-frame/register-handler
  :calculate-links
  (fn [db]
    (let [nodes (get-in db [:view :nodes])])
    db))

(re-frame/register-handler
  :load-data
  (fn [db]
    (go (let [result (<! (http/get "demo.json" {:with-credentials? false}))]
          (re-frame/dispatch [:handle-data (:body result)])))
    db))

(re-frame/register-handler
  :calculate-pieces
  (fn [db]
    (let [participants (-> db :jamiobj :data last :participants)
          interactors  (:interactors db)]
      (assoc-in db [:view :nodes]
                (into []
                      (map (fn [participant]
                             (assoc participant :uuid (gensym)
                                                :length
                                                (get-in interactors [(keyword (:interactorRef participant)) :length])
                                                :label
                                                (get-in interactors [(keyword (:interactorRef participant)) :label])))
                           participants))))))
