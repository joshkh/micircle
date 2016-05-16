(ns micircle.chord.utils)

(def pi (.-PI js/Math))

(defn center
  "Return a CSS transformation for centering an element."
  [width height]
  {:transform (str "translate(" (/ width 2) "," (/ height 2) ")")})

(defn polarToCartesian
  "Convert polar coordinates to cartesian coordinates.
  TODO: confirm that x and y should not be reversed."
  [center-x center-y radius angle-in-degrees]
  (let [angle-in-radians (* (- angle-in-degrees 90) (/ pi 180.0))]
    {:x (+ center-x (* radius (.cos js/Math angle-in-radians)))
     :y (+ center-y (* radius (.sin js/Math angle-in-radians)))}))

(defn describe-arc
  "Build an SVG path that describes a circular arc."
  [x y radius start-angle end-angle]
  (let [start (polarToCartesian x y radius end-angle)
        end (polarToCartesian x y radius start-angle)
        arc-sweep (if (<= (- end-angle start-angle) 180) 0 1)]
    (clojure.string/join " " ["M" (:x start) (:y start)
                              "A" radius radius 0 arc-sweep 0 (:x end) (:y end)])))