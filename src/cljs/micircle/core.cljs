(ns micircle.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [micircle.handlers]
              [micircle.subs]
              [micircle.views :as views]
              [micircle.config :as config]
              [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(when config/debug?
  (println "dev mode"))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

(re-frame/dispatch [:set-complex-id "EBI-9082861"])


