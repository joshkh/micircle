(ns micircle.chord.main
  (:require [re-frame.core :as re-frame]
            [micircle.chord.utils :as utils]
            [micircle.utils :as u]
            [micircle.chord.globals :as globals]))

(def radius 150)

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

(defn features []
  (fn [node]
    (let [scale (u/radial-scale [1 (:length node)] [(:start node) (:end node)])]
      (into [:g.features]
            (map (fn [feature]
                   (map (fn [sequence-data]
                          (let [[feature-start feature-end] (clojure.string/split (:pos sequence-data) "-")]
                            [:g
                             [:line.tick
                              (let [start (utils/polar-to-cartesian 0 0 (- radius 20) (scale feature-start) )
                                    end (utils/polar-to-cartesian 0 0 radius (scale feature-start))]
                                {:x1 (:x start) :y1 (:y start)
                                 :x2 (:x end) :y2 (:y end)})]
                             [:line.tick
                              (let [start (utils/polar-to-cartesian 0 0 (- radius 20) (scale feature-end))
                                    end (utils/polar-to-cartesian 0 0 radius (scale feature-end))]
                                {:x1 (:x start) :y1 (:y start)
                                 :x2 (:x end) :y2 (:y end)})]])) (:sequenceData feature))

                   ) (:features node))))
    ; SPACERS


    ))

(defn arc-group []
  (let [view-nodes (re-frame/subscribe [:view-nodes])]
    (fn []
      (into [:g.arc-group] (map (fn [node]
                                  [:g.arc

                                   ; ARC BODY
                                   [:path
                                    (assoc globals/arc
                                      :d (utils/describe-arc 0 0 radius
                                                                  (:start node)
                                                                  (:end node)))]

                                   ;ARC LABEL
                                   [:text.participant
                                    [:textPath
                                     {:startOffset "50%"
                                      :xlinkHref (str "#" (:interactorRef node))}
                                     (:label node)]]

                                   ; SPACERS
                                   ;[:line.tick
                                   ; (let [start (utils/polar-to-cartesian 0 0 (- radius 10) (:start node))
                                   ;       end (utils/polar-to-cartesian 0 0 (+ radius 30) (:start node))]
                                   ;   {:x1 (:x start) :y1 (:y start)
                                   ;    :x2 (:x end) :y2 (:y end)})]
                                   ;[:line.tick
                                   ; (let [start (utils/polar-to-cartesian 0 0 (- radius 10) (:end node))
                                   ;       end (utils/polar-to-cartesian 0 0 (+ radius 30) (:end node))]
                                   ;   {:x1 (:x start) :y1 (:y start)
                                   ;    :x2 (:x end) :y2 (:y end)})]

                                   [features node]

                                   ]) @view-nodes)))))


(defn defs []
  (let [view-defs (re-frame/subscribe [:view-defs])]
    (fn []
      (into [:defs] (map (fn [def] [:path def]) @view-defs)))))

(defn svg []
  (fn []
    [:svg.micircle
     [defs]
     [:g.centered (utils/center 800 500)
      [link-group]
      [arc-group]]]))

(defn main []
  (fn []
    [:div
     [svg]]))