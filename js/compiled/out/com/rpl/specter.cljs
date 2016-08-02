(ns com.rpl.specter
         (:require-macros
            [com.rpl.specter.macros
              :refer
              [pathed-collector
               variable-pathed-path
               fixed-pathed-path
               defcollector
               defpath
              ]]
            )
  (:use [com.rpl.specter.protocols :only [StructurePath]]
                                       
                             
                                 
                              
                         
                      
    )
  (:require [com.rpl.specter.impl :as i]
            [clojure.set :as set])
  )

(defn comp-paths [& paths]
  (i/comp-paths* (vec paths)))

;; Selection functions

(def ^{:doc "Version of select that takes in a path pre-compiled with comp-paths"}
  compiled-select i/compiled-select*)

(defn select
  "Navigates to and returns a sequence of all the elements specified by the path."
  [path structure]
  (compiled-select (i/comp-paths* path)
                   structure))

(defn compiled-select-one
  "Version of select-one that takes in a path pre-compiled with comp-paths"
  [path structure]
  (let [res (compiled-select path structure)]
    (when (> (count res) 1)
      (i/throw-illegal "More than one element found for params: " path structure))
    (first res)
    ))

(defn select-one
  "Like select, but returns either one element or nil. Throws exception if multiple elements found"
  [path structure]
  (compiled-select-one (i/comp-paths* path) structure))

(defn compiled-select-one!
  "Version of select-one! that takes in a path pre-compiled with comp-paths"
  [path structure]
  (let [res (compiled-select path structure)]
    (when (not= 1 (count res)) (i/throw-illegal "Expected exactly one element for params: " path structure))
    (first res)
    ))

(defn select-one!
  "Returns exactly one element, throws exception if zero or multiple elements found"
  [path structure]
  (compiled-select-one! (i/comp-paths* path) structure))

(defn compiled-select-first
  "Version of select-first that takes in a path pre-compiled with comp-paths"
  [path structure]
  (first (compiled-select path structure)))

(defn select-first
  "Returns first element found. Not any more efficient than select, just a convenience"
  [path structure]
  (compiled-select-first (i/comp-paths* path) structure))


;; Transformation functions

(def ^{:doc "Version of transform that takes in a path pre-compiled with comp-paths"}
  compiled-transform i/compiled-transform*)

(defn transform
  "Navigates to each value specified by the path and replaces it by the result of running
  the transform-fn on it"
  [path transform-fn structure]
  (compiled-transform (i/comp-paths* path) transform-fn structure))

(defn compiled-setval
  "Version of setval that takes in a path pre-compiled with comp-paths"
  [path val structure]
  (compiled-transform path (fn [_] val) structure))

(defn setval
  "Navigates to each value specified by the path and replaces it by val"
  [path val structure]
  (compiled-setval (i/comp-paths* path) val structure))

(defn compiled-replace-in
  "Version of replace-in that takes in a path pre-compiled with comp-paths"
  [path transform-fn structure & {:keys [merge-fn] :or {merge-fn concat}}]
  (let [state (i/mutable-cell nil)]
    [(compiled-transform path
             (fn [& args]
               (let [res (apply transform-fn args)]
                 (if res
                   (let [[ret user-ret] res]
                     (->> user-ret
                          (merge-fn (i/get-cell state))
                          (i/set-cell! state))
                     ret)
                   (last args)
                   )))
             structure)
     (i/get-cell state)]
    ))

(defn replace-in
  "Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
  The transform-fn in this case is expected to return [ret user-ret]. ret is
   what's used to transform the data structure, while user-ret will be added to the user-ret sequence
   in the final return. replace-in is useful for situations where you need to know the specific values
   of what was transformed in the data structure."
  [path transform-fn structure & {:keys [merge-fn] :or {merge-fn concat}}]
  (compiled-replace-in (i/comp-paths* path) transform-fn structure :merge-fn merge-fn))

;; Helpers for defining selectors and collectors with late-bound params

(def ^{:doc "Takes a compiled path that needs late-bound params and supplies it with
             an array of params and a position in the array from which to begin reading
             params. The return value is an executable selector."}
  bind-params* i/bind-params*)

(defn params-reset [params-path]
  ;; TODO: error if not paramsneededpath
  (let [s (i/params-needed-selector params-path)
        t (i/params-needed-transformer params-path)
        needed (i/num-needed-params params-path)]
    (i/->ParamsNeededPath
      (i/->TransformFunctions
        i/RichPathExecutor
        (fn [params params-idx vals structure next-fn]
          (s params (- params-idx needed) vals structure next-fn)
          )
        (fn [params params-idx vals structure next-fn]
          (t params (- params-idx needed) vals structure next-fn)
          ))
      0)))

;; Built-in pathing and context operations

(defpath
  ^{:doc "Stops navigation at this point. For selection returns nothing and for 
          transformation returns the structure unchanged"}
  STOP
  []
  (select* [this structure next-fn]
    nil )
  (transform* [this structure next-fn]
    structure
    ))

(defpath
  ^{:doc "Stays navigated at the current point. Essentially a no-op navigator."}
  STAY
  []
  (select* [this structure next-fn]
    (next-fn structure))
  (transform* [this structure next-fn]
    (next-fn structure)))

(def ALL (comp-paths (i/->AllStructurePath)))

(def VAL (i/->ValCollect))

(def LAST (comp-paths (i/->PosStructurePath last i/set-last)))

(def FIRST (comp-paths (i/->PosStructurePath first i/set-first)))

(defpath
  ^{:doc "Uses start-fn and end-fn to determine the bounds of the subsequence
          to select when navigating. Each function takes in the structure as input."}
  srange-dynamic
  [start-fn end-fn]
  (select* [this structure next-fn]
    (i/srange-select structure (start-fn structure) (end-fn structure) next-fn))
  (transform* [this structure next-fn]
    (i/srange-transform structure (start-fn structure) (end-fn structure) next-fn)
    ))

(defpath
  ^{:doc "Navigates to the subsequence bound by the indexes start (inclusive)
          and end (exclusive)"}
  srange
  [start end]
  (select* [this structure next-fn]
    (i/srange-select structure start end next-fn))
  (transform* [this structure next-fn]
    (i/srange-transform structure start end next-fn)
    ))

(def BEGINNING (srange 0 0))

(def END (srange-dynamic count count))

(defpath
  ^{:doc "Navigates to the specified subset (by taking an intersection).
          In a transform, that subset in the original set is changed to the
          new value of the subset."}
  subset
  [aset]
  (select* [this structure next-fn]
    (next-fn (set/intersection structure aset)))
  (transform* [this structure next-fn]
    (let [subset (set/intersection structure aset)
          newset (next-fn subset)]
      (-> structure
          (set/difference subset)
          (set/union newset))
          )))

(defpath
  ^{:doc "Navigates to the specified submap (using select-keys).
          In a transform, that submap in the original map is changed to the new
          value of the submap."}
  submap
  [m-keys]
  (select* [this structure next-fn]
    (next-fn (select-keys structure m-keys)))

  (transform* [this structure next-fn]
    (let [submap (select-keys structure m-keys)
          newmap (next-fn submap)]
      (merge (reduce dissoc structure m-keys)
             newmap))))

(defpath
  walker
  [afn]
  (select* [this structure next-fn]
    (i/walk-select afn next-fn structure))
  (transform* [this structure next-fn]
    (i/walk-until afn next-fn structure)))

(defpath
  codewalker
  [afn]
  (select* [this structure next-fn]
    (i/walk-select afn next-fn structure))
  (transform* [this structure next-fn]
    (i/codewalk-until afn next-fn structure)))

(defn subselect
  "Navigates to a sequence that contains the results of (select ...),
  but is a view to the original structure that can be transformed.

  Requires that the input navigators will walk the structure's
  children in the same order when executed on \"select\" and then
  \"transform\"."
  [& path]
  (fixed-pathed-path [late path]
    (select* [this structure next-fn]
             (next-fn (compiled-select late structure)))
    (transform* [this structure next-fn]
      (let [select-result (compiled-select late structure)
            transformed (next-fn select-result)
            values-to-insert (i/mutable-cell transformed)]
        (compiled-transform late
                            (fn [_] (let [next-val (first (i/get-cell values-to-insert))]
                                      (i/update-cell! values-to-insert rest)
                                      next-val))
                            structure)))))

(defpath keypath [key]
  (select* [this structure next-fn]
    (next-fn (get structure key)))
  (transform* [this structure next-fn]
    (assoc structure key (next-fn (get structure key)))
    ))

(defpath view [afn]
  (select* [this structure next-fn]
    (next-fn (afn structure)))
  (transform* [this structure next-fn]
    (next-fn (afn structure))
    ))

(defpath parser [parse-fn unparse-fn]
  (select* [this structure next-fn]
    (next-fn (parse-fn structure)))
  (transform* [this structure next-fn]
    (unparse-fn (next-fn (parse-fn structure)))
    ))

(defn selected?
  "Filters the current value based on whether a path finds anything.
  e.g. (selected? :vals ALL even?) keeps the current element only if an
  even number exists for the :vals key.

  The input path may be parameterized, in which case the result of selected?
  will be parameterized in the order of which the parameterized navigators
  were declared."
  [& path]
  (fixed-pathed-path [late path]
    (select* [this structure next-fn]
      (i/filter-select
        #(i/selected?* late %)
        structure
        next-fn))
    (transform* [this structure next-fn]
      (i/filter-transform
        #(i/selected?* late %)
        structure
        next-fn))))

(defn not-selected? [& path]
  (fixed-pathed-path [late path]
    (select* [this structure next-fn]
      (i/filter-select
        #(i/not-selected?* late %)
        structure
        next-fn))
    (transform* [this structure next-fn]
      (i/filter-transform
        #(i/not-selected?* late %)
        structure
        next-fn))))

(defn filterer
  "Navigates to a view of the current sequence that only contains elements that
  match the given path. An element matches the selector path if calling select
  on that element with the path yields anything other than an empty sequence.

   The input path may be parameterized, in which case the result of filterer
   will be parameterized in the order of which the parameterized selectors
   were declared."
  [& path]
  (subselect ALL (selected? path)))

(defn transformed
  "Navigates to a view of the current value by transforming it with the
   specified path and update-fn.

   The input path may be parameterized, in which case the result of transformed
   will be parameterized in the order of which the parameterized navigators
   were declared."
  [path update-fn]
  (fixed-pathed-path [late path]
    (select* [this structure next-fn]
      (next-fn (compiled-transform late update-fn structure)))
    (transform* [this structure next-fn]
      (next-fn (compiled-transform late update-fn structure)))))

(extend-type                                   cljs.core/Keyword
  StructurePath
  (select* [kw structure next-fn]
    (next-fn (get structure kw)))
  (transform* [kw structure next-fn]
    (assoc structure kw (next-fn (get structure kw)))
    ))

(extend-type                               function
  StructurePath
  (select* [afn structure next-fn]
    (i/filter-select afn structure next-fn))
  (transform* [afn structure next-fn]
    (i/filter-transform afn structure next-fn)))

(extend-type                                             cljs.core/PersistentHashSet
  StructurePath
  (select* [aset structure next-fn]
    (i/filter-select aset structure next-fn))
  (transform* [aset structure next-fn]
    (i/filter-transform aset structure next-fn)))

(defpath
  ^{:doc "Keeps the element only if it matches the supplied predicate. This is the
          late-bound parameterized version of using a function directly in a path."}
  pred
  [afn]
  (select* [this structure next-fn]
    (i/filter-select afn structure next-fn))
  (transform* [this structure next-fn]
    (i/filter-transform afn structure next-fn)))

(defpath
  ^{:doc "Navigates to the provided val if the structure is nil. Otherwise it stays
          navigated at the structure."}
  nil->val
  [v]
  (select* [this structure next-fn]
    (next-fn (if structure structure v)))
  (transform* [this structure next-fn]
    (next-fn (if structure structure v))))

(def NIL->SET (nil->val #{}))
(def NIL->LIST (nil->val '()))
(def NIL->VECTOR (nil->val []))

(defn collect [& path]
  (pathed-collector [late path]
    (collect-val [this structure]
      (compiled-select late structure)
      )))

(defn collect-one [& path]
  (pathed-collector [late path]
    (collect-val [this structure]
      (compiled-select-one late structure)
      )))

(defcollector
  ^{:doc
    "Adds an external value to the collected vals. Useful when additional arguments
     are required to the transform function that would otherwise require partial
     application or a wrapper function.

     e.g., incrementing val at path [:a :b] by 3:
     (transform [:a :b (putval 3)] + some-map)"}
  putval
  [val]
  (collect-val [this structure]
    val ))

(defn cond-path
  "Takes in alternating cond-path path cond-path path...
   Tests the structure if selecting with cond-path returns anything.
   If so, it uses the following path for this portion of the navigation.
   Otherwise, it tries the next cond-path. If nothing matches, then the structure
   is not selected.

   The input paths may be parameterized, in which case the result of cond-path
   will be parameterized in the order of which the parameterized navigators
   were declared."
  [& conds]
  (variable-pathed-path [compiled-paths conds]
    (select* [this structure next-fn]
      (if-let [selector (i/retrieve-cond-selector compiled-paths structure)]
        (->> (compiled-select selector structure)
             (mapcat next-fn)
             doall)))
    (transform* [this structure next-fn]
      (if-let [selector (i/retrieve-cond-selector compiled-paths structure)]
        (compiled-transform selector next-fn structure)
        structure
        ))))

(defn if-path
  "Like cond-path, but with if semantics."
  ([cond-p if-path] (cond-path cond-p if-path))
  ([cond-p if-path else-path]
    (cond-path cond-p if-path nil else-path)))

(defn multi-path
  "A path that branches on multiple paths. For updates,
   applies updates to the paths in order."
  [& paths]
  (variable-pathed-path [compiled-paths paths]
    (select* [this structure next-fn]
      (->> compiled-paths
           (mapcat #(compiled-select % structure))
           (mapcat next-fn)
           doall
           ))
    (transform* [this structure next-fn]
      (reduce
        (fn [structure path]
          (compiled-transform path next-fn structure))
        structure
        compiled-paths
        ))))

(defn stay-then-continue
  "Navigates to the current element and then navigates via the provided path.
   This can be used to implement pre-order traversal."
  [& path]
  (multi-path STAY path))

(defn continue-then-stay
  "Navigates to the provided path and then to the current element. This can be used
   to implement post-order traversal."
  [& path]
  (multi-path path STAY))

;;;;;;;;;;;; This file autogenerated from src/clj/com/rpl/specter.cljx
