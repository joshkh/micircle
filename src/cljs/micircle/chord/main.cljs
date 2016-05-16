(ns micircle.chord.main
  (:require [re-frame.core :as re-frame]
            [micircle.chord.utils :as utils]
            [micircle.chord.globals :as globals]))

(def data [{:length 90}
           {:length 45}
           {:length 45}])

(def padding 10)

(defn space-around-circle [data]
  (reduce
    (fn [total next]
      (if-not (empty? total)
        (let [my-length (- (:end next) (:start next))]
          (conj total (assoc next
                        :start (+ (:end (last total)) padding)
                        :end (- (+ (:end (last total)) my-length) padding))))

        (conj total next))) [] data))

(defn divide-circle [data]
  (let [total (reduce + (map :length data))]
    (reduce (fn [col next]
              (conj col
                    {:start 0
                     :end (* (:length next) (/ 360 total)) })) [] data )))

(def arc-group
  (fn []
    [:g.arc-group
     (for [a (space-around-circle (divide-circle data))]
       [:path.arc (assoc globals/arc
                    :d (utils/describe-arc 0 0 100 (:start a) (:end a))) ])
     ]))

(defn svg []
  [:svg.micircle
   [:g.centered (utils/center 500 500)
    [arc-group]]])

(defn main []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div
       [:button {:on-click (fn []
                             (println (space-around-circle (divide-circle data))))} "X"]
       [svg]])))
