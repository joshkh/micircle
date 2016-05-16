(ns micircle.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [re-frame.core :as re-frame]
              [micircle.db :as db]
              [cljs-http.client :as http]
              [cljs.core.async :refer [<!]]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
  :handle-data
  (fn [db [_ data]]
    (re-frame/dispatch [:calculate-view])
    (assoc db :jamiobj data)))

(re-frame/register-handler
  :load-data
  (fn [db]
    (go (let [result (<! (http/get "demo.json" {:with-credentials? false}))]
          (re-frame/dispatch [:handle-data (:body result)])))
    db))

(re-frame/register-handler
  :calculate-view
  (fn [db]
    (let [interaction (first (filter #(= "interaction" (:object %)) (-> db :jamiobj :data)))
          participants (:participants interaction)]
      (doall (for [p participants]
         (let [ref (:interactorRef p)]
           (println "ref" ref)))))
    db))