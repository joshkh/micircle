(ns micircle.views
    (:require [re-frame.core :as re-frame]
              [micircle.chord.main :as chord]
              [json-html.core :as json-html]))

(defn main-panel []
  (let [app-db (re-frame/subscribe [:app-db])]
    (fn []
      [:div
       [chord/main]
       ;[:div (json-html/edn->hiccup (-> @app-db :view :nodes))]
       ])))
