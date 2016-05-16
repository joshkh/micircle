(ns micircle.views
    (:require [re-frame.core :as re-frame]
              [micircle.chord.main :as chord]))

(defn main-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div
       [chord/main]])))
