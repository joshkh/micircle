(ns micircle.chord.main
  (:require [re-frame.core :as re-frame]
            [micircle.chord.utils :as utils]
            [micircle.chord.globals :as globals]))

(def data [{:length 90}
           {:length 45}
           {:length 45}])

(def radius 200)
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
     ;(for [a (space-around-circle (divide-circle data))]
     ;  [:path.arc (assoc globals/arc
     ;               :d (utils/describe-arc 0 0 100 (:start a) (:end a))) ])
     [:path.link {:d (utils/describe-link 0 0 radius
                                          10 20
                                          130 180)}]

     [:path.link {:d (utils/describe-link 0 0 radius
                                          50 90
                                          200 210)}]

     [:path.link {:d (utils/describe-link 0 0 radius
                                          20 35
                                          220 290)}]
     [:path.arc (assoc globals/arc
                  :d (utils/describe-arc 0 0 radius 0 90))]
     [:path.arc (assoc globals/arc
                  :d (utils/describe-arc 0 0 radius 90 180))]
     [:path.arc (assoc globals/arc
                  :d (utils/describe-arc 0 0 radius 200 300))]]))

(defn svg []
  [:svg.micircle
   [:g.centered (utils/center 500 500)
    [arc-group]]])

(defn main []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div
       [svg]])))
