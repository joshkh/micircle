// Compiled by ClojureScript 1.9.89 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__7329__auto__ = [];
var len__7322__auto___8971 = arguments.length;
var i__7323__auto___8972 = (0);
while(true){
if((i__7323__auto___8972 < len__7322__auto___8971)){
args__7329__auto__.push((arguments[i__7323__auto___8972]));

var G__8973 = (i__7323__auto___8972 + (1));
i__7323__auto___8972 = G__8973;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq8970){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8970));
});

/**
 * Version of select that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select = (function com$rpl$specter$select(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one = (function com$rpl$specter$compiled_select_one(path,structure){
var res = com.rpl.specter.compiled_select.call(null,path,structure);
if((cljs.core.count.call(null,res) > (1))){
com.rpl.specter.impl.throw_illegal.call(null,"More than one element found for params: ",path,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one = (function com$rpl$specter$select_one(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = (function com$rpl$specter$compiled_select_one_BANG_(path,structure){
var res = com.rpl.specter.compiled_select.call(null,path,structure);
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,res))){
com.rpl.specter.impl.throw_illegal.call(null,"Expected exactly one element for params: ",path,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG_ = (function com$rpl$specter$select_one_BANG_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_first = (function com$rpl$specter$compiled_select_first(path,structure){
return cljs.core.first.call(null,com.rpl.specter.compiled_select.call(null,path,structure));
});
/**
 * Returns first element found. Not any more efficient than select, just a convenience
 */
com.rpl.specter.select_first = (function com$rpl$specter$select_first(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of transform that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform = (function com$rpl$specter$transform(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of setval that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_setval = (function com$rpl$specter$compiled_setval(path,val,structure){
return com.rpl.specter.compiled_transform.call(null,path,(function (_){
return val;
}),structure);
});
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval = (function com$rpl$specter$setval(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = (function com$rpl$specter$compiled_replace_in(var_args){
var args__7329__auto__ = [];
var len__7322__auto___8984 = arguments.length;
var i__7323__auto___8985 = (0);
while(true){
if((i__7323__auto___8985 < len__7322__auto___8984)){
args__7329__auto__.push((arguments[i__7323__auto___8985]));

var G__8986 = (i__7323__auto___8985 + (1));
i__7323__auto___8985 = G__8986;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((3) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7330__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__8978){
var map__8979 = p__8978;
var map__8979__$1 = ((((!((map__8979 == null)))?((((map__8979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8979):map__8979);
var merge_fn = cljs.core.get.call(null,map__8979__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,path,((function (state,map__8979,map__8979__$1,merge_fn){
return (function() { 
var G__8987__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__8981 = res;
var ret = cljs.core.nth.call(null,vec__8981,(0),null);
var user_ret = cljs.core.nth.call(null,vec__8981,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__8987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8988__i = 0, G__8988__a = new Array(arguments.length -  0);
while (G__8988__i < G__8988__a.length) {G__8988__a[G__8988__i] = arguments[G__8988__i + 0]; ++G__8988__i;}
  args = new cljs.core.IndexedSeq(G__8988__a,0);
} 
return G__8987__delegate.call(this,args);};
G__8987.cljs$lang$maxFixedArity = 0;
G__8987.cljs$lang$applyTo = (function (arglist__8989){
var args = cljs.core.seq(arglist__8989);
return G__8987__delegate(args);
});
G__8987.cljs$core$IFn$_invoke$arity$variadic = G__8987__delegate;
return G__8987;
})()
;})(state,map__8979,map__8979__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq8974){
var G__8975 = cljs.core.first.call(null,seq8974);
var seq8974__$1 = cljs.core.next.call(null,seq8974);
var G__8976 = cljs.core.first.call(null,seq8974__$1);
var seq8974__$2 = cljs.core.next.call(null,seq8974__$1);
var G__8977 = cljs.core.first.call(null,seq8974__$2);
var seq8974__$3 = cljs.core.next.call(null,seq8974__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__8975,G__8976,G__8977,seq8974__$3);
});

/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__7329__auto__ = [];
var len__7322__auto___8997 = arguments.length;
var i__7323__auto___8998 = (0);
while(true){
if((i__7323__auto___8998 < len__7322__auto___8997)){
args__7329__auto__.push((arguments[i__7323__auto___8998]));

var G__8999 = (i__7323__auto___8998 + (1));
i__7323__auto___8998 = G__8999;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((3) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7330__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__8994){
var map__8995 = p__8994;
var map__8995__$1 = ((((!((map__8995 == null)))?((((map__8995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8995):map__8995);
var merge_fn = cljs.core.get.call(null,map__8995__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq8990){
var G__8991 = cljs.core.first.call(null,seq8990);
var seq8990__$1 = cljs.core.next.call(null,seq8990);
var G__8992 = cljs.core.first.call(null,seq8990__$1);
var seq8990__$2 = cljs.core.next.call(null,seq8990__$1);
var G__8993 = cljs.core.first.call(null,seq8990__$2);
var seq8990__$3 = cljs.core.next.call(null,seq8990__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__8991,G__8992,G__8993,seq8990__$3);
});

/**
 * Takes a compiled path that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
com.rpl.specter.params_reset = (function com$rpl$specter$params_reset(params_path){
var s = com.rpl.specter.impl.params_needed_selector.call(null,params_path);
var t = com.rpl.specter.impl.params_needed_transformer.call(null,params_path);
var needed = com.rpl.specter.impl.num_needed_params.call(null,params_path);
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (s,t,needed){
return (function (params,params_idx,vals,structure,next_fn){
return s.call(null,params,(params_idx - needed),vals,structure,next_fn);
});})(s,t,needed))
,((function (s,t,needed){
return (function (params,params_idx,vals,structure,next_fn){
return t.call(null,params,(params_idx - needed),vals,structure,next_fn);
});})(s,t,needed))
),(0));
});
/**
 * Stops navigation at this point. For selection returns nothing and for 
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return null;
}),(function (structure,next_fn){
return structure;
})));
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return next_fn.call(null,structure);
}),(function (structure,next_fn){
return next_fn.call(null,structure);
})));
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllStructurePath.call(null));
com.rpl.specter.VAL = com.rpl.specter.impl.__GT_ValCollect.call(null);
com.rpl.specter.LAST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.last,com.rpl.specter.impl.set_last));
com.rpl.specter.FIRST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.first,com.rpl.specter.impl.set_first));
/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 2),vals__8852__auto__,structure__8854__auto__);
});
var start_fn = (params8850[(params_idx8851 + (0))]);
var end_fn = (params8850[(params_idx8851 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 2),vals__8852__auto__,structure__8854__auto__);
});
var start_fn = (params8850[(params_idx8851 + (0))]);
var end_fn = (params8850[(params_idx8851 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 2),vals__8852__auto__,structure__8854__auto__);
});
var start = (params8850[(params_idx8851 + (0))]);
var end = (params8850[(params_idx8851 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 2),vals__8852__auto__,structure__8854__auto__);
});
var start = (params8850[(params_idx8851 + (0))]);
var end = (params8850[(params_idx8851 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var aset = (params8850[(params_idx8851 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var aset = (params8850[(params_idx8851 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var m_keys = (params8850[(params_idx8851 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var m_keys = (params8850[(params_idx8851 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 */
com.rpl.specter.subselect = (function com$rpl$specter$subselect(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9007 = arguments.length;
var i__7323__auto___9008 = (0);
while(true){
if((i__7323__auto___9008 < len__7322__auto___9007)){
args__7329__auto__.push((arguments[i__7323__auto___9008]));

var G__9009 = (i__7323__auto___9008 + (1));
i__7323__auto___9008 = G__9009;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9003 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9001 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003))
,offsets__8873__auto__,paths__8871__auto__);
var vec__9004 = latefns9001;
var G__9002 = cljs.core.nth.call(null,vec__9004,(0),null);
var ret__8879__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9003),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002))
;
var late = G__9002.call(null,params8850,params_idx8851);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002))
,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9003),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002))
;
var late = G__9002.call(null,params8850,params_idx8851);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002))
,structure);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9003,latefns9001,vec__9004,G__9002))
),num_params9003);
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq9000){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9000));
});

com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var key = (params8850[(params_idx8851 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var key = (params8850[(params_idx8851 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 2),vals__8852__auto__,structure__8854__auto__);
});
var parse_fn = (params8850[(params_idx8851 + (0))]);
var unparse_fn = (params8850[(params_idx8851 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 2),vals__8852__auto__,structure__8854__auto__);
});
var parse_fn = (params8850[(params_idx8851 + (0))]);
var unparse_fn = (params8850[(params_idx8851 + (1))]);
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
})),2);
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 * 
 *   The input path may be parameterized, in which case the result of selected?
 *   will be parameterized in the order of which the parameterized navigators
 *   were declared.
 */
com.rpl.specter.selected_QMARK_ = (function com$rpl$specter$selected_QMARK_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9019 = arguments.length;
var i__7323__auto___9020 = (0);
while(true){
if((i__7323__auto___9020 < len__7322__auto___9019)){
args__7329__auto__.push((arguments[i__7323__auto___9020]));

var G__9021 = (i__7323__auto___9020 + (1));
i__7323__auto___9020 = G__9021;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9015 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9013 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015))
,offsets__8873__auto__,paths__8871__auto__);
var vec__9016 = latefns9013;
var G__9014 = cljs.core.nth.call(null,vec__9016,(0),null);
var ret__8879__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9015),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014))
;
var late = G__9014.call(null,params8850,params_idx8851);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014){
return (function (p1__9010_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__9010_SHARP_);
});})(next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014))
,structure,next_fn);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014))
,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9015),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014))
;
var late = G__9014.call(null,params8850,params_idx8851);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014){
return (function (p1__9011_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__9011_SHARP_);
});})(next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014))
,structure,next_fn);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9015,latefns9013,vec__9016,G__9014))
),num_params9015);
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq9012){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9012));
});

com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9031 = arguments.length;
var i__7323__auto___9032 = (0);
while(true){
if((i__7323__auto___9032 < len__7322__auto___9031)){
args__7329__auto__.push((arguments[i__7323__auto___9032]));

var G__9033 = (i__7323__auto___9032 + (1));
i__7323__auto___9032 = G__9033;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9027 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9025 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027))
,offsets__8873__auto__,paths__8871__auto__);
var vec__9028 = latefns9025;
var G__9026 = cljs.core.nth.call(null,vec__9028,(0),null);
var ret__8879__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9027),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026))
;
var late = G__9026.call(null,params8850,params_idx8851);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026){
return (function (p1__9022_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__9022_SHARP_);
});})(next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026))
,structure,next_fn);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026))
,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9027),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026))
;
var late = G__9026.call(null,params8850,params_idx8851);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026){
return (function (p1__9023_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__9023_SHARP_);
});})(next_fn,late,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026))
,structure,next_fn);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9027,latefns9025,vec__9028,G__9026))
),num_params9027);
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq9024){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9024));
});

/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 * The input path may be parameterized, in which case the result of filterer
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.filterer = (function com$rpl$specter$filterer(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9035 = arguments.length;
var i__7323__auto___9036 = (0);
while(true){
if((i__7323__auto___9036 < len__7322__auto___9035)){
args__7329__auto__.push((arguments[i__7323__auto___9036]));

var G__9037 = (i__7323__auto___9036 + (1));
i__7323__auto___9036 = G__9037;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq9034){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9034));
});

/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 * 
 * The input path may be parameterized, in which case the result of transformed
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.transformed = (function com$rpl$specter$transformed(path,update_fn){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9046 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9044 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046))
,offsets__8873__auto__,paths__8871__auto__);
var vec__9047 = latefns9044;
var G__9045 = cljs.core.nth.call(null,vec__9047,(0),null);
var ret__8879__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9046),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045))
;
var late = G__9045.call(null,params8850,params_idx8851);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045))
,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9046),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045))
;
var late = G__9045.call(null,params8850,params_idx8851);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9046,latefns9044,vec__9047,G__9045))
),num_params9046);
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});
cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return next_fn.call(null,cljs.core.get.call(null,structure,kw__$1));
});

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return cljs.core.assoc.call(null,structure,kw__$1,next_fn.call(null,cljs.core.get.call(null,structure,kw__$1)));
});
(com.rpl.specter.protocols.StructurePath["function"] = true);

(com.rpl.specter.protocols.select_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}));

(com.rpl.specter.protocols.transform_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,aset__$1,structure,next_fn);
});

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,aset__$1,structure,next_fn);
});
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var afn = (params8850[(params_idx8851 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var v = (params8850[(params_idx8851 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + 1),vals__8852__auto__,structure__8854__auto__);
});
var v = (params8850[(params_idx8851 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9057 = arguments.length;
var i__7323__auto___9058 = (0);
while(true){
if((i__7323__auto___9058 < len__7322__auto___9057)){
args__7329__auto__.push((arguments[i__7323__auto___9058]));

var G__9059 = (i__7323__auto___9058 + (1));
i__7323__auto___9058 = G__9059;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9053 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9051 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053))
,offsets__8873__auto__,paths__8871__auto__);
var vec__9054 = latefns9051;
var latefn9052 = cljs.core.nth.call(null,vec__9054,(0),null);
var ret__8879__auto__ = (function (){var collector__8863__auto__ = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053,latefns9051,vec__9054,latefn9052){
return (function (params8850,params_idx8851,vals__8864__auto__,structure,next_fn__8865__auto__){
var late = latefn9052.call(null,params8850,params_idx8851);
var c__8866__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__8865__auto__.call(null,params8850,(params_idx8851 + num_params9053),cljs.core.conj.call(null,vals__8864__auto__,c__8866__auto__),structure);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9053,latefns9051,vec__9054,latefn9052))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__8863__auto__,collector__8863__auto__),num_params9053);
})();
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq9050){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9050));
});

com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9067 = arguments.length;
var i__7323__auto___9068 = (0);
while(true){
if((i__7323__auto___9068 < len__7322__auto___9067)){
args__7329__auto__.push((arguments[i__7323__auto___9068]));

var G__9069 = (i__7323__auto___9068 + (1));
i__7323__auto___9068 = G__9069;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9063 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9061 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063))
,offsets__8873__auto__,paths__8871__auto__);
var vec__9064 = latefns9061;
var latefn9062 = cljs.core.nth.call(null,vec__9064,(0),null);
var ret__8879__auto__ = (function (){var collector__8863__auto__ = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063,latefns9061,vec__9064,latefn9062){
return (function (params8850,params_idx8851,vals__8864__auto__,structure,next_fn__8865__auto__){
var late = latefn9062.call(null,params8850,params_idx8851);
var c__8866__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__8865__auto__.call(null,params8850,(params_idx8851 + num_params9063),cljs.core.conj.call(null,vals__8864__auto__,c__8866__auto__),structure);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9063,latefns9061,vec__9064,latefn9062))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__8863__auto__,collector__8863__auto__),num_params9063);
})();
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq9060){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9060));
});

/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__8863__auto__ = (function (params8850,params_idx8851,vals__8864__auto__,structure,next_fn__8865__auto__){
var val = (params8850[(params_idx8851 + (0))]);
var c__8866__auto__ = val;
return next_fn__8865__auto__.call(null,params8850,(params_idx8851 + 1),cljs.core.conj.call(null,vals__8864__auto__,c__8866__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__8863__auto__,collector__8863__auto__),1);
})();
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.cond_path = (function com$rpl$specter$cond_path(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9073 = arguments.length;
var i__7323__auto___9074 = (0);
while(true){
if((i__7323__auto___9074 < len__7322__auto___9073)){
args__7329__auto__.push((arguments[i__7323__auto___9074]));

var G__9075 = (i__7323__auto___9074 + (1));
i__7323__auto___9074 = G__9075;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9072 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9071 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072))
,offsets__8873__auto__,paths__8871__auto__);
var ret__8879__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9072),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071){
return (function (l__8922__auto__){
return l__8922__auto__.call(null,params8850,params_idx8851);
});})(next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071))
,latefns9071);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071))
,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9072),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071){
return (function (l__8922__auto__){
return l__8922__auto__.call(null,params8850,params_idx8851);
});})(next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071))
,latefns9071);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9072,latefns9071))
),num_params9072);
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq9070){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9070));
});

/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args9076 = [];
var len__7322__auto___9079 = arguments.length;
var i__7323__auto___9080 = (0);
while(true){
if((i__7323__auto___9080 < len__7322__auto___9079)){
args9076.push((arguments[i__7323__auto___9080]));

var G__9081 = (i__7323__auto___9080 + (1));
i__7323__auto___9080 = G__9081;
continue;
} else {
}
break;
}

var G__9078 = args9076.length;
switch (G__9078) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9076.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,if_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,if_path,else_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path,null,else_path);
});

com.rpl.specter.if_path.cljs$lang$maxFixedArity = 3;

/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9087 = arguments.length;
var i__7323__auto___9088 = (0);
while(true){
if((i__7323__auto___9088 < len__7322__auto___9087)){
args__7329__auto__.push((arguments[i__7323__auto___9088]));

var G__9089 = (i__7323__auto___9088 + (1));
i__7323__auto___9088 = G__9089;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__8871__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__8872__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__8871__auto__);
var offsets__8873__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__8872__auto__));
var any_params_needed_QMARK___8874__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__8871__auto__)));
var num_params9086 = cljs.core.last.call(null,offsets__8873__auto__);
var latefns9085 = cljs.core.map.call(null,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086){
return (function (o__8875__auto__,p__8876__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__8876__auto__))){
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086){
return (function (params__8877__auto__,params_idx__8878__auto__){
return p__8876__auto__;
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086))
} else {
return ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086){
return (function (params__8877__auto__,params_idx__8878__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__8876__auto__,params__8877__auto__,(params_idx__8878__auto__ + o__8875__auto__));
});
;})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086))
}
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086))
,offsets__8873__auto__,paths__8871__auto__);
var ret__8879__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9086),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (l__8922__auto__){
return l__8922__auto__.call(null,params8850,params_idx8851);
});})(next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
,latefns9085);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (p1__9083_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__9083_SHARP_,structure);
});})(next_fn,compiled_paths,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
,compiled_paths)));
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
,((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (params8850,params_idx8851,vals__8852__auto__,structure,next_fn__8853__auto__){
var next_fn = ((function (paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (structure__8854__auto__){
return next_fn__8853__auto__.call(null,params8850,(params_idx8851 + num_params9086),vals__8852__auto__,structure__8854__auto__);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (l__8922__auto__){
return l__8922__auto__.call(null,params8850,params_idx8851);
});})(next_fn,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
,latefns9085);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085){
return (function (structure__$1,path){
return com.rpl.specter.compiled_transform.call(null,path,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
,structure,compiled_paths);
});})(paths__8871__auto__,needed_params__8872__auto__,offsets__8873__auto__,any_params_needed_QMARK___8874__auto__,num_params9086,latefns9085))
),num_params9086);
if(!(any_params_needed_QMARK___8874__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__8879__auto__,null,(0));
} else {
return ret__8879__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq9084){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9084));
});

/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9091 = arguments.length;
var i__7323__auto___9092 = (0);
while(true){
if((i__7323__auto___9092 < len__7322__auto___9091)){
args__7329__auto__.push((arguments[i__7323__auto___9092]));

var G__9093 = (i__7323__auto___9092 + (1));
i__7323__auto___9092 = G__9093;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
});

com.rpl.specter.stay_then_continue.cljs$lang$maxFixedArity = (0);

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq9090){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9090));
});

/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9095 = arguments.length;
var i__7323__auto___9096 = (0);
while(true){
if((i__7323__auto___9096 < len__7322__auto___9095)){
args__7329__auto__.push((arguments[i__7323__auto___9096]));

var G__9097 = (i__7323__auto___9096 + (1));
i__7323__auto___9096 = G__9097;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
});

com.rpl.specter.continue_then_stay.cljs$lang$maxFixedArity = (0);

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq9094){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9094));
});


//# sourceMappingURL=specter.js.map?rel=1470137658796