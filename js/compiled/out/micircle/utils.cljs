(ns micircle.utils
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn radial-scale [[lower-domain upper-domain] [lower-range upper-range]]
  (fn [input]
    (let [percent (/ input (- upper-domain lower-domain))]
      (+ lower-range (* percent (- upper-range lower-range))))))

(defn parse-pos [pos]
  (map js/parseInt (clojure.string/split pos "-")))

;http://www.uniprot.org/uniprot/?format=tab&query=accession:P16234&columns=length

(defn protein-length
  "Fetches the length of a protein."
  [accession]
  (go
    (let [response (<! (http/get (str "http://www.uniprot.org/uniprot/?format=tab&query=accession:"
                                      accession
                                      "&columns=length")
                                 {:with-credentials? false}))]
      (let [parsed (-> response :body (clojure.string/split-lines) last)]
        {:accession accession
         :length (if (js/isNaN parsed) nil parsed)}))))

;(go (println "THE LENGTH" (<! (protein-length "P16234"))))