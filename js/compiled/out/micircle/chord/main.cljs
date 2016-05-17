(ns micircle.chord.main
  (:require [re-frame.core :as re-frame]
            [micircle.chord.utils :as utils]
            [micircle.chord.globals :as globals]))

(def data [{:length 90}
           {:length 45}
           {:length 45}])

(def radius 150)
(def padding 10)



(def link-group
  (fn []
    [:g.link-group
     [:path.link {:d (utils/describe-link 0 0 radius
                                          10 20
                                          130 160)}]

     [:path.link {:d (utils/describe-link 0 0 radius
                                          40 90
                                          200 210)}]

     [:path.link {:d (utils/describe-link 0 0 radius
                                          20 30
                                          240 290)}]]))

(defn arc-group []
  (let [view-nodes (re-frame/subscribe [:view-nodes])]
    (fn []
      (into [:g.arc-group] (map (fn [node]
                                  [:g.arc
                                   [:path
                                    (assoc globals/arc
                                      :d (utils/describe-arc 0 0 radius
                                                             (:start node)
                                                             (:end node)))]
                                   [:text.participant
                                    (merge (utils/polarToCartesian 0 0 (+ 20 radius) (:text-position node))
                                           {:class (if (<= 180 (:text-position node)) "right" "left")})
                                    (:label node)]
                                   [:line.tick
                                    (let [start (utils/polarToCartesian 0 0 (- radius 10) (:start node))
                                          end (utils/polarToCartesian 0 0 (+ radius 20) (:start node))]
                                      {:x1 (:x start) :y1 (:y start)
                                       :x2 (:x end) :y2 (:y end)})]
                                   [:line.tick
                                    (let [start (utils/polarToCartesian 0 0 (- radius 10) (:end node))
                                          end (utils/polarToCartesian 0 0 (+ radius 20) (:end node))]
                                      {:x1 (:x start) :y1 (:y start)
                                       :x2 (:x end) :y2 (:y end)})]]) @view-nodes)))))

(defn svg []
  (fn []
    [:svg.micircle
     [:g.centered (utils/center 800 500)
      [link-group]
      [arc-group]]]))

(defn main []
  (fn []
    [:div
     [svg]]))