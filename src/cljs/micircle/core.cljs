(ns micircle.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [micircle.handlers]
            [micircle.subs]
            [micircle.views :as views]
            [micircle.config :as config]))

(enable-console-print!)

(when config/debug?
  (println "dev mode"))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

(re-frame/dispatch [:set-complex-id "EBI-9082861"])



in the end, i'm trying to select each item in a vector at some point in the nested

(def somedata {:node1 {:features [{:id             1
                                   :label          "feature one"
                                   :linked-feature 3}
                                  {:id             2
                                   :label          "feature two"
                                   :linked-feature 4}]}
               :node2 {:features [{:id             3
                                   :label          "feature three"
                                   :linked-feature 1}
                                  {:id             4
                                   :label          "feature four"
                                   :linked-feature 2}]}})

[
 [{:id 1 :label "feature one"} {:id 3 :label "feature three"}]
 [{:id 2 :label "feature two"} {:id 4 :label "feature four"}]
 [{:id 3 :label "feature three"} {:id 1 :label "feature one"}]
 [{:id 4 :label "feature four"} {:id 2 :label "feature two"}]
 ]

(->> somedata (s/select [:]))

