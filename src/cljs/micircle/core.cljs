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

(re-frame/dispatch [:load-data])


