(ns micircle.views
  (:require [re-frame.core :as re-frame]
            [micircle.chord.main :as chord]
            [json-html.core :as json-html]
            [com.rpl.specter :as s]))


(defn chooser []
  (let [complex-id (re-frame/subscribe [:complex-id])]
    (fn []
      [:div
       [:ul
        [:li.button.-blue.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-9082861"])
                                  :class    (if (= "EBI-9082861" @complex-id) "active")} "EBI-9082861"]
        [:li.button.-blue.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-9008420"])
                                  :class    (if (= "EBI-9008420" @complex-id) "active")} "EBI-9008420"]
        #_[:li.button.-blue.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-9696567"])
                                    :class    (if (= "EBI-9696567" @complex-id) "active")} "EBI-9696567"]

        [:li.button.-blue.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-6554207"])
                                  :class    (if (= "EBI-6554207" @complex-id) "active")} "EBI-6554207"]
        [:li.button.-red.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-11509704"])
                                 :class    (if (= "EBI-11509704" @complex-id) "active")} "EBI-11509704"]
        [:li.button.-red.center {:on-click #(re-frame/dispatch [:set-complex-id "EBI-9997373"])
                                 :class    (if (= "EBI-9997373" @complex-id) "active")} "EBI-9997373"]]
       [:div.checkbox [:label
                       [:input {:type "checkbox"
                                :on-click #(re-frame/dispatch [:center-unknown])}]
                       "Center unknown binding regions?"]]])))

(defn x-labels [verticies]
  (into [:div.row [:div.cell.stressed]] (map (fn [x] [:div.cell.stressed (str x)]) verticies)))

(defn matrix-cell [value]
  [:div.cell {:class (if (= true value) "true")} ])

(defn matrix-row [values idx]
  (into [:div.row [:div.cell.stressed idx]] (map (fn [x] [matrix-cell x]) values)))

(defn feature-matrix []
  (let [d (re-frame/subscribe [:data])]
    (into [:div.matrix
           [x-labels (:vertices @d)]]
          (map-indexed (fn [i r] [matrix-row r (nth (:vertices @d) i)]) (:matrix @d)))))

(defn main-panel []
  (let [app-db (re-frame/subscribe [:app-db])]
    (fn []
      [:div
       [:div.row
        [:section [chooser]]]
       [:div.row
        ;[:div.col [feature-matrix]]
        [:div.col [chord/main]]]
       ;[:div.row [math/main]]

       ;[:div (json-html/edn->hiccup (:view @app-db))]
       [:br]
       ;[:div (json-html/edn->hiccup @app-db)]
       ])))

