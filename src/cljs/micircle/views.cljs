(ns micircle.views
  (:require [re-frame.core :as re-frame]
            [micircle.chord.main :as chord]
            [json-html.core :as json-html]
            [micircle.math.views :as math]))


(defn chooser []
  (let [complex-id (re-frame/subscribe [:complex-id])]
    (fn []
     [:ul
      [:li.button.-blue.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-9082861"])
                                :class (if (= "EBI-9082861" @complex-id) "active")} "EBI-9082861"]
      [:li.button.-blue.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-9008420"])
                                :class (if (= "EBI-9008420" @complex-id) "active")} "EBI-9008420"]])))

(defn main-panel []
  (let [app-db (re-frame/subscribe [:app-db])]
    (fn []
      (println "db" @app-db)
      [:div
       [:section.grid
        [chooser]
        [math/main]
        ;[chord/main]
        ]
       [:div (json-html/edn->hiccup @app-db)]])))







