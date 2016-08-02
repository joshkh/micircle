// Compiled by ClojureScript 1.9.89 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.string');
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.call(null,e);

return e;
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1(paths);
} else {
var x__6910__auto__ = (((paths == null))?null:paths);
var m__6911__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,paths);
} else {
var m__6911__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.comp-paths*",paths);
}
}
}
});

com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.pr_str.call(null,o);
} else {
return [cljs.core.str(o)].join('');
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7595 = arguments.length;
var i__7323__auto___7596 = (0);
while(true){
if((i__7323__auto___7596 < len__7322__auto___7595)){
args__7329__auto__.push((arguments[i__7323__auto___7596]));

var G__7597 = (i__7323__auto___7596 + (1));
i__7323__auto___7596 = G__7597;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq7594){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7594));
});

com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7599 = arguments.length;
var i__7323__auto___7600 = (0);
while(true){
if((i__7323__auto___7600 < len__7322__auto___7599)){
args__7329__auto__.push((arguments[i__7323__auto___7600]));

var G__7601 = (i__7323__auto___7600 + (1));
i__7323__auto___7600 = G__7601;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq7598){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7598));
});

com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__7187__auto__ = cljs.core.system_time.call(null);
var ret__7188__auto__ = (function (){var n__7162__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__7162__auto__)){
afn.call(null);

var G__7602 = (_ + (1));
_ = G__7602;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__7187__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__7188__auto__;
});

/**
* @constructor
*/
com.rpl.specter.impl.ExecutorFunctions = (function (type,select_executor,transform_executor){
this.type = type;
this.select_executor = select_executor;
this.transform_executor = transform_executor;
})

com.rpl.specter.impl.ExecutorFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"select-executor","select-executor",140452237,null),new cljs.core.Symbol(null,"transform-executor","transform-executor",-31221519,null)], null);
});

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$type = true;

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorStr = "com.rpl.specter.impl/ExecutorFunctions";

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"com.rpl.specter.impl/ExecutorFunctions");
});

com.rpl.specter.impl.__GT_ExecutorFunctions = (function com$rpl$specter$impl$__GT_ExecutorFunctions(type,select_executor,transform_executor){
return (new com.rpl.specter.impl.ExecutorFunctions(type,select_executor,transform_executor));
});

com.rpl.specter.impl.RichPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"richpath","richpath",-150197948),(function (params,params_idx,selector,structure){
return selector.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(!(cljs.core.empty_QMARK_.call(null,vals))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,vals,structure__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(cljs.core.empty_QMARK_.call(null,vals)){
return transform_fn.call(null,structure__$1);
} else {
return cljs.core.apply.call(null,transform_fn,cljs.core.conj.call(null,vals,structure__$1));
}
}));
}));
com.rpl.specter.impl.StructurePathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"spath","spath",-1857758005),(function (params,params_idx,selector,structure){
return selector.call(null,structure,(function (structure__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,structure,transform_fn);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.TransformFunctions = (function (executors,selector,transformer,__meta,__extmap,__hash){
this.executors = executors;
this.selector = selector;
this.transformer = transformer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6869__auto__,k__6870__auto__){
var self__ = this;
var this__6869__auto____$1 = this;
return cljs.core._lookup.call(null,this__6869__auto____$1,k__6870__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6871__auto__,k7604,else__6872__auto__){
var self__ = this;
var this__6871__auto____$1 = this;
var G__7606 = (((k7604 instanceof cljs.core.Keyword))?k7604.fqn:null);
switch (G__7606) {
case "executors":
return self__.executors;

break;
case "selector":
return self__.selector;

break;
case "transformer":
return self__.transformer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7604,else__6872__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6883__auto__,writer__6884__auto__,opts__6885__auto__){
var self__ = this;
var this__6883__auto____$1 = this;
var pr_pair__6886__auto__ = ((function (this__6883__auto____$1){
return (function (keyval__6887__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6884__auto__,cljs.core.pr_writer,""," ","",opts__6885__auto__,keyval__6887__auto__);
});})(this__6883__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6884__auto__,pr_pair__6886__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__6885__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7603){
var self__ = this;
var G__7603__$1 = this;
return (new cljs.core.RecordIter((0),G__7603__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6867__auto__){
var self__ = this;
var this__6867__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6863__auto__){
var self__ = this;
var this__6863__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6873__auto__){
var self__ = this;
var this__6873__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6864__auto__){
var self__ = this;
var this__6864__auto____$1 = this;
var h__6682__auto__ = self__.__hash;
if(!((h__6682__auto__ == null))){
return h__6682__auto__;
} else {
var h__6682__auto____$1 = cljs.core.hash_imap.call(null,this__6864__auto____$1);
self__.__hash = h__6682__auto____$1;

return h__6682__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6865__auto__,other__6866__auto__){
var self__ = this;
var this__6865__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6235__auto__ = other__6866__auto__;
if(cljs.core.truth_(and__6235__auto__)){
var and__6235__auto____$1 = (this__6865__auto____$1.constructor === other__6866__auto__.constructor);
if(and__6235__auto____$1){
return cljs.core.equiv_map.call(null,this__6865__auto____$1,other__6866__auto__);
} else {
return and__6235__auto____$1;
}
} else {
return and__6235__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6878__auto__,k__6879__auto__){
var self__ = this;
var this__6878__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__6879__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6878__auto____$1),self__.__meta),k__6879__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6879__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6876__auto__,k__6877__auto__,G__7603){
var self__ = this;
var this__6876__auto____$1 = this;
var pred__7607 = cljs.core.keyword_identical_QMARK_;
var expr__7608 = k__6877__auto__;
if(cljs.core.truth_(pred__7607.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__7608))){
return (new com.rpl.specter.impl.TransformFunctions(G__7603,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7607.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__7608))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__7603,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7607.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__7608))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__7603,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6877__auto__,G__7603),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6881__auto__){
var self__ = this;
var this__6881__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6868__auto__,G__7603){
var self__ = this;
var this__6868__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__7603,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6874__auto__,entry__6875__auto__){
var self__ = this;
var this__6874__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6875__auto__)){
return cljs.core._assoc.call(null,this__6874__auto____$1,cljs.core._nth.call(null,entry__6875__auto__,(0)),cljs.core._nth.call(null,entry__6875__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6874__auto____$1,entry__6875__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__6903__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__6903__auto__,writer__6904__auto__){
return cljs.core._write.call(null,writer__6904__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__7605){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__7605),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__7605),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__7605),null,cljs.core.dissoc.call(null,G__7605,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CompiledPath = (function (transform_fns,params,params_idx,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.params = params;
this.params_idx = params_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6869__auto__,k__6870__auto__){
var self__ = this;
var this__6869__auto____$1 = this;
return cljs.core._lookup.call(null,this__6869__auto____$1,k__6870__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6871__auto__,k7612,else__6872__auto__){
var self__ = this;
var this__6871__auto____$1 = this;
var G__7614 = (((k7612 instanceof cljs.core.Keyword))?k7612.fqn:null);
switch (G__7614) {
case "transform-fns":
return self__.transform_fns;

break;
case "params":
return self__.params;

break;
case "params-idx":
return self__.params_idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7612,else__6872__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6883__auto__,writer__6884__auto__,opts__6885__auto__){
var self__ = this;
var this__6883__auto____$1 = this;
var pr_pair__6886__auto__ = ((function (this__6883__auto____$1){
return (function (keyval__6887__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6884__auto__,cljs.core.pr_writer,""," ","",opts__6885__auto__,keyval__6887__auto__);
});})(this__6883__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6884__auto__,pr_pair__6886__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__6885__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7611){
var self__ = this;
var G__7611__$1 = this;
return (new cljs.core.RecordIter((0),G__7611__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6867__auto__){
var self__ = this;
var this__6867__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6863__auto__){
var self__ = this;
var this__6863__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6873__auto__){
var self__ = this;
var this__6873__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6864__auto__){
var self__ = this;
var this__6864__auto____$1 = this;
var h__6682__auto__ = self__.__hash;
if(!((h__6682__auto__ == null))){
return h__6682__auto__;
} else {
var h__6682__auto____$1 = cljs.core.hash_imap.call(null,this__6864__auto____$1);
self__.__hash = h__6682__auto____$1;

return h__6682__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6865__auto__,other__6866__auto__){
var self__ = this;
var this__6865__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6235__auto__ = other__6866__auto__;
if(cljs.core.truth_(and__6235__auto__)){
var and__6235__auto____$1 = (this__6865__auto____$1.constructor === other__6866__auto__.constructor);
if(and__6235__auto____$1){
return cljs.core.equiv_map.call(null,this__6865__auto____$1,other__6866__auto__);
} else {
return and__6235__auto____$1;
}
} else {
return and__6235__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6878__auto__,k__6879__auto__){
var self__ = this;
var this__6878__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__6879__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6878__auto____$1),self__.__meta),k__6879__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6879__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6876__auto__,k__6877__auto__,G__7611){
var self__ = this;
var this__6876__auto____$1 = this;
var pred__7615 = cljs.core.keyword_identical_QMARK_;
var expr__7616 = k__6877__auto__;
if(cljs.core.truth_(pred__7615.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__7616))){
return (new com.rpl.specter.impl.CompiledPath(G__7611,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7615.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__7616))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__7611,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7615.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__7616))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__7611,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6877__auto__,G__7611),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6881__auto__){
var self__ = this;
var this__6881__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6868__auto__,G__7611){
var self__ = this;
var this__6868__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__7611,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6874__auto__,entry__6875__auto__){
var self__ = this;
var this__6874__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6875__auto__)){
return cljs.core._assoc.call(null,this__6874__auto____$1,cljs.core._nth.call(null,entry__6875__auto__,(0)),cljs.core._nth.call(null,entry__6875__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6874__auto____$1,entry__6875__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__6903__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__6903__auto__,writer__6904__auto__){
return cljs.core._write.call(null,writer__6904__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__7613){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__7613),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__7613),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__7613),null,cljs.core.dissoc.call(null,G__7613,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
});

com.rpl.specter.impl.compiled_path_QMARK_ = (function com$rpl$specter$impl$compiled_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.CompiledPath);
});
com.rpl.specter.impl.no_params_compiled_path = (function com$rpl$specter$impl$no_params_compiled_path(transform_fns){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,transform_fns,null,(0));
});
com.rpl.specter.impl.fast_object_array = (function com$rpl$specter$impl$fast_object_array(i){
return cljs.core.object_array.call(null,i);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.ParamsNeededPath = (function (transform_fns,num_needed_params,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.num_needed_params = num_needed_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6869__auto__,k__6870__auto__){
var self__ = this;
var this__6869__auto____$1 = this;
return cljs.core._lookup.call(null,this__6869__auto____$1,k__6870__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6871__auto__,k7831,else__6872__auto__){
var self__ = this;
var this__6871__auto____$1 = this;
var G__7834 = (((k7831 instanceof cljs.core.Keyword))?k7831.fqn:null);
switch (G__7834) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7831,else__6872__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6883__auto__,writer__6884__auto__,opts__6885__auto__){
var self__ = this;
var this__6883__auto____$1 = this;
var pr_pair__6886__auto__ = ((function (this__6883__auto____$1){
return (function (keyval__6887__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6884__auto__,cljs.core.pr_writer,""," ","",opts__6885__auto__,keyval__6887__auto__);
});})(this__6883__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6884__auto__,pr_pair__6886__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__6885__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7830){
var self__ = this;
var G__7830__$1 = this;
return (new cljs.core.RecordIter((0),G__7830__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__7839 = null;
var G__7839__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__2 = (function (self__,G__7620){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(1));
(array7619[(0)] = G__7620);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__3 = (function (self__,G__7621,G__7622){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(2));
(array7619[(0)] = G__7621);

(array7619[(1)] = G__7622);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__4 = (function (self__,G__7623,G__7624,G__7625){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(3));
(array7619[(0)] = G__7623);

(array7619[(1)] = G__7624);

(array7619[(2)] = G__7625);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__5 = (function (self__,G__7626,G__7627,G__7628,G__7629){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(4));
(array7619[(0)] = G__7626);

(array7619[(1)] = G__7627);

(array7619[(2)] = G__7628);

(array7619[(3)] = G__7629);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__6 = (function (self__,G__7630,G__7631,G__7632,G__7633,G__7634){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(5));
(array7619[(0)] = G__7630);

(array7619[(1)] = G__7631);

(array7619[(2)] = G__7632);

(array7619[(3)] = G__7633);

(array7619[(4)] = G__7634);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__7 = (function (self__,G__7635,G__7636,G__7637,G__7638,G__7639,G__7640){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(6));
(array7619[(0)] = G__7635);

(array7619[(1)] = G__7636);

(array7619[(2)] = G__7637);

(array7619[(3)] = G__7638);

(array7619[(4)] = G__7639);

(array7619[(5)] = G__7640);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__8 = (function (self__,G__7641,G__7642,G__7643,G__7644,G__7645,G__7646,G__7647){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(7));
(array7619[(0)] = G__7641);

(array7619[(1)] = G__7642);

(array7619[(2)] = G__7643);

(array7619[(3)] = G__7644);

(array7619[(4)] = G__7645);

(array7619[(5)] = G__7646);

(array7619[(6)] = G__7647);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__9 = (function (self__,G__7648,G__7649,G__7650,G__7651,G__7652,G__7653,G__7654,G__7655){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(8));
(array7619[(0)] = G__7648);

(array7619[(1)] = G__7649);

(array7619[(2)] = G__7650);

(array7619[(3)] = G__7651);

(array7619[(4)] = G__7652);

(array7619[(5)] = G__7653);

(array7619[(6)] = G__7654);

(array7619[(7)] = G__7655);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__10 = (function (self__,G__7656,G__7657,G__7658,G__7659,G__7660,G__7661,G__7662,G__7663,G__7664){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(9));
(array7619[(0)] = G__7656);

(array7619[(1)] = G__7657);

(array7619[(2)] = G__7658);

(array7619[(3)] = G__7659);

(array7619[(4)] = G__7660);

(array7619[(5)] = G__7661);

(array7619[(6)] = G__7662);

(array7619[(7)] = G__7663);

(array7619[(8)] = G__7664);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__11 = (function (self__,G__7665,G__7666,G__7667,G__7668,G__7669,G__7670,G__7671,G__7672,G__7673,G__7674){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(10));
(array7619[(0)] = G__7665);

(array7619[(1)] = G__7666);

(array7619[(2)] = G__7667);

(array7619[(3)] = G__7668);

(array7619[(4)] = G__7669);

(array7619[(5)] = G__7670);

(array7619[(6)] = G__7671);

(array7619[(7)] = G__7672);

(array7619[(8)] = G__7673);

(array7619[(9)] = G__7674);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__12 = (function (self__,G__7675,G__7676,G__7677,G__7678,G__7679,G__7680,G__7681,G__7682,G__7683,G__7684,G__7685){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(11));
(array7619[(0)] = G__7675);

(array7619[(1)] = G__7676);

(array7619[(2)] = G__7677);

(array7619[(3)] = G__7678);

(array7619[(4)] = G__7679);

(array7619[(5)] = G__7680);

(array7619[(6)] = G__7681);

(array7619[(7)] = G__7682);

(array7619[(8)] = G__7683);

(array7619[(9)] = G__7684);

(array7619[(10)] = G__7685);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__13 = (function (self__,G__7686,G__7687,G__7688,G__7689,G__7690,G__7691,G__7692,G__7693,G__7694,G__7695,G__7696,G__7697){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(12));
(array7619[(0)] = G__7686);

(array7619[(1)] = G__7687);

(array7619[(2)] = G__7688);

(array7619[(3)] = G__7689);

(array7619[(4)] = G__7690);

(array7619[(5)] = G__7691);

(array7619[(6)] = G__7692);

(array7619[(7)] = G__7693);

(array7619[(8)] = G__7694);

(array7619[(9)] = G__7695);

(array7619[(10)] = G__7696);

(array7619[(11)] = G__7697);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__14 = (function (self__,G__7698,G__7699,G__7700,G__7701,G__7702,G__7703,G__7704,G__7705,G__7706,G__7707,G__7708,G__7709,G__7710){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(13));
(array7619[(0)] = G__7698);

(array7619[(1)] = G__7699);

(array7619[(2)] = G__7700);

(array7619[(3)] = G__7701);

(array7619[(4)] = G__7702);

(array7619[(5)] = G__7703);

(array7619[(6)] = G__7704);

(array7619[(7)] = G__7705);

(array7619[(8)] = G__7706);

(array7619[(9)] = G__7707);

(array7619[(10)] = G__7708);

(array7619[(11)] = G__7709);

(array7619[(12)] = G__7710);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__15 = (function (self__,G__7711,G__7712,G__7713,G__7714,G__7715,G__7716,G__7717,G__7718,G__7719,G__7720,G__7721,G__7722,G__7723,G__7724){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(14));
(array7619[(0)] = G__7711);

(array7619[(1)] = G__7712);

(array7619[(2)] = G__7713);

(array7619[(3)] = G__7714);

(array7619[(4)] = G__7715);

(array7619[(5)] = G__7716);

(array7619[(6)] = G__7717);

(array7619[(7)] = G__7718);

(array7619[(8)] = G__7719);

(array7619[(9)] = G__7720);

(array7619[(10)] = G__7721);

(array7619[(11)] = G__7722);

(array7619[(12)] = G__7723);

(array7619[(13)] = G__7724);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__16 = (function (self__,G__7725,G__7726,G__7727,G__7728,G__7729,G__7730,G__7731,G__7732,G__7733,G__7734,G__7735,G__7736,G__7737,G__7738,G__7739){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(15));
(array7619[(0)] = G__7725);

(array7619[(1)] = G__7726);

(array7619[(2)] = G__7727);

(array7619[(3)] = G__7728);

(array7619[(4)] = G__7729);

(array7619[(5)] = G__7730);

(array7619[(6)] = G__7731);

(array7619[(7)] = G__7732);

(array7619[(8)] = G__7733);

(array7619[(9)] = G__7734);

(array7619[(10)] = G__7735);

(array7619[(11)] = G__7736);

(array7619[(12)] = G__7737);

(array7619[(13)] = G__7738);

(array7619[(14)] = G__7739);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__17 = (function (self__,G__7740,G__7741,G__7742,G__7743,G__7744,G__7745,G__7746,G__7747,G__7748,G__7749,G__7750,G__7751,G__7752,G__7753,G__7754,G__7755){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(16));
(array7619[(0)] = G__7740);

(array7619[(1)] = G__7741);

(array7619[(2)] = G__7742);

(array7619[(3)] = G__7743);

(array7619[(4)] = G__7744);

(array7619[(5)] = G__7745);

(array7619[(6)] = G__7746);

(array7619[(7)] = G__7747);

(array7619[(8)] = G__7748);

(array7619[(9)] = G__7749);

(array7619[(10)] = G__7750);

(array7619[(11)] = G__7751);

(array7619[(12)] = G__7752);

(array7619[(13)] = G__7753);

(array7619[(14)] = G__7754);

(array7619[(15)] = G__7755);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__18 = (function (self__,G__7756,G__7757,G__7758,G__7759,G__7760,G__7761,G__7762,G__7763,G__7764,G__7765,G__7766,G__7767,G__7768,G__7769,G__7770,G__7771,G__7772){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(17));
(array7619[(0)] = G__7756);

(array7619[(1)] = G__7757);

(array7619[(2)] = G__7758);

(array7619[(3)] = G__7759);

(array7619[(4)] = G__7760);

(array7619[(5)] = G__7761);

(array7619[(6)] = G__7762);

(array7619[(7)] = G__7763);

(array7619[(8)] = G__7764);

(array7619[(9)] = G__7765);

(array7619[(10)] = G__7766);

(array7619[(11)] = G__7767);

(array7619[(12)] = G__7768);

(array7619[(13)] = G__7769);

(array7619[(14)] = G__7770);

(array7619[(15)] = G__7771);

(array7619[(16)] = G__7772);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__19 = (function (self__,G__7773,G__7774,G__7775,G__7776,G__7777,G__7778,G__7779,G__7780,G__7781,G__7782,G__7783,G__7784,G__7785,G__7786,G__7787,G__7788,G__7789,G__7790){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(18));
(array7619[(0)] = G__7773);

(array7619[(1)] = G__7774);

(array7619[(2)] = G__7775);

(array7619[(3)] = G__7776);

(array7619[(4)] = G__7777);

(array7619[(5)] = G__7778);

(array7619[(6)] = G__7779);

(array7619[(7)] = G__7780);

(array7619[(8)] = G__7781);

(array7619[(9)] = G__7782);

(array7619[(10)] = G__7783);

(array7619[(11)] = G__7784);

(array7619[(12)] = G__7785);

(array7619[(13)] = G__7786);

(array7619[(14)] = G__7787);

(array7619[(15)] = G__7788);

(array7619[(16)] = G__7789);

(array7619[(17)] = G__7790);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__20 = (function (self__,G__7791,G__7792,G__7793,G__7794,G__7795,G__7796,G__7797,G__7798,G__7799,G__7800,G__7801,G__7802,G__7803,G__7804,G__7805,G__7806,G__7807,G__7808,G__7809){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(19));
(array7619[(0)] = G__7791);

(array7619[(1)] = G__7792);

(array7619[(2)] = G__7793);

(array7619[(3)] = G__7794);

(array7619[(4)] = G__7795);

(array7619[(5)] = G__7796);

(array7619[(6)] = G__7797);

(array7619[(7)] = G__7798);

(array7619[(8)] = G__7799);

(array7619[(9)] = G__7800);

(array7619[(10)] = G__7801);

(array7619[(11)] = G__7802);

(array7619[(12)] = G__7803);

(array7619[(13)] = G__7804);

(array7619[(14)] = G__7805);

(array7619[(15)] = G__7806);

(array7619[(16)] = G__7807);

(array7619[(17)] = G__7808);

(array7619[(18)] = G__7809);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__21 = (function (self__,G__7810,G__7811,G__7812,G__7813,G__7814,G__7815,G__7816,G__7817,G__7818,G__7819,G__7820,G__7821,G__7822,G__7823,G__7824,G__7825,G__7826,G__7827,G__7828,G__7829){
var self__ = this;
var self____$1 = this;
var this__7544__auto__ = self____$1;
var array7619 = cljs.core.object_array.call(null,(20));
(array7619[(0)] = G__7810);

(array7619[(1)] = G__7811);

(array7619[(2)] = G__7812);

(array7619[(3)] = G__7813);

(array7619[(4)] = G__7814);

(array7619[(5)] = G__7815);

(array7619[(6)] = G__7816);

(array7619[(7)] = G__7817);

(array7619[(8)] = G__7818);

(array7619[(9)] = G__7819);

(array7619[(10)] = G__7820);

(array7619[(11)] = G__7821);

(array7619[(12)] = G__7822);

(array7619[(13)] = G__7823);

(array7619[(14)] = G__7824);

(array7619[(15)] = G__7825);

(array7619[(16)] = G__7826);

(array7619[(17)] = G__7827);

(array7619[(18)] = G__7828);

(array7619[(19)] = G__7829);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});
var G__7839__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__7839 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__7839__1.call(this,self__);
case 2:
return G__7839__2.call(this,self__,p01);
case 3:
return G__7839__3.call(this,self__,p01,p02);
case 4:
return G__7839__4.call(this,self__,p01,p02,p03);
case 5:
return G__7839__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__7839__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__7839__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__7839__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__7839__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__7839__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__7839__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__7839__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__7839__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__7839__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__7839__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__7839__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__7839__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__7839__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__7839__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__7839__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__7839__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__7839__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7839.cljs$core$IFn$_invoke$arity$1 = G__7839__1;
G__7839.cljs$core$IFn$_invoke$arity$2 = G__7839__2;
G__7839.cljs$core$IFn$_invoke$arity$3 = G__7839__3;
G__7839.cljs$core$IFn$_invoke$arity$4 = G__7839__4;
G__7839.cljs$core$IFn$_invoke$arity$5 = G__7839__5;
G__7839.cljs$core$IFn$_invoke$arity$6 = G__7839__6;
G__7839.cljs$core$IFn$_invoke$arity$7 = G__7839__7;
G__7839.cljs$core$IFn$_invoke$arity$8 = G__7839__8;
G__7839.cljs$core$IFn$_invoke$arity$9 = G__7839__9;
G__7839.cljs$core$IFn$_invoke$arity$10 = G__7839__10;
G__7839.cljs$core$IFn$_invoke$arity$11 = G__7839__11;
G__7839.cljs$core$IFn$_invoke$arity$12 = G__7839__12;
G__7839.cljs$core$IFn$_invoke$arity$13 = G__7839__13;
G__7839.cljs$core$IFn$_invoke$arity$14 = G__7839__14;
G__7839.cljs$core$IFn$_invoke$arity$15 = G__7839__15;
G__7839.cljs$core$IFn$_invoke$arity$16 = G__7839__16;
G__7839.cljs$core$IFn$_invoke$arity$17 = G__7839__17;
G__7839.cljs$core$IFn$_invoke$arity$18 = G__7839__18;
G__7839.cljs$core$IFn$_invoke$arity$19 = G__7839__19;
G__7839.cljs$core$IFn$_invoke$arity$20 = G__7839__20;
G__7839.cljs$core$IFn$_invoke$arity$21 = G__7839__21;
G__7839.cljs$core$IFn$_invoke$arity$22 = G__7839__22;
return G__7839;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args7833){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7833)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__7620){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(1));
(array7619[(0)] = G__7620);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__7621,G__7622){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(2));
(array7619[(0)] = G__7621);

(array7619[(1)] = G__7622);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__7623,G__7624,G__7625){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(3));
(array7619[(0)] = G__7623);

(array7619[(1)] = G__7624);

(array7619[(2)] = G__7625);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__7626,G__7627,G__7628,G__7629){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(4));
(array7619[(0)] = G__7626);

(array7619[(1)] = G__7627);

(array7619[(2)] = G__7628);

(array7619[(3)] = G__7629);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__7630,G__7631,G__7632,G__7633,G__7634){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(5));
(array7619[(0)] = G__7630);

(array7619[(1)] = G__7631);

(array7619[(2)] = G__7632);

(array7619[(3)] = G__7633);

(array7619[(4)] = G__7634);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__7635,G__7636,G__7637,G__7638,G__7639,G__7640){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(6));
(array7619[(0)] = G__7635);

(array7619[(1)] = G__7636);

(array7619[(2)] = G__7637);

(array7619[(3)] = G__7638);

(array7619[(4)] = G__7639);

(array7619[(5)] = G__7640);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__7641,G__7642,G__7643,G__7644,G__7645,G__7646,G__7647){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(7));
(array7619[(0)] = G__7641);

(array7619[(1)] = G__7642);

(array7619[(2)] = G__7643);

(array7619[(3)] = G__7644);

(array7619[(4)] = G__7645);

(array7619[(5)] = G__7646);

(array7619[(6)] = G__7647);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__7648,G__7649,G__7650,G__7651,G__7652,G__7653,G__7654,G__7655){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(8));
(array7619[(0)] = G__7648);

(array7619[(1)] = G__7649);

(array7619[(2)] = G__7650);

(array7619[(3)] = G__7651);

(array7619[(4)] = G__7652);

(array7619[(5)] = G__7653);

(array7619[(6)] = G__7654);

(array7619[(7)] = G__7655);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__7656,G__7657,G__7658,G__7659,G__7660,G__7661,G__7662,G__7663,G__7664){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(9));
(array7619[(0)] = G__7656);

(array7619[(1)] = G__7657);

(array7619[(2)] = G__7658);

(array7619[(3)] = G__7659);

(array7619[(4)] = G__7660);

(array7619[(5)] = G__7661);

(array7619[(6)] = G__7662);

(array7619[(7)] = G__7663);

(array7619[(8)] = G__7664);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__7665,G__7666,G__7667,G__7668,G__7669,G__7670,G__7671,G__7672,G__7673,G__7674){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(10));
(array7619[(0)] = G__7665);

(array7619[(1)] = G__7666);

(array7619[(2)] = G__7667);

(array7619[(3)] = G__7668);

(array7619[(4)] = G__7669);

(array7619[(5)] = G__7670);

(array7619[(6)] = G__7671);

(array7619[(7)] = G__7672);

(array7619[(8)] = G__7673);

(array7619[(9)] = G__7674);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__7675,G__7676,G__7677,G__7678,G__7679,G__7680,G__7681,G__7682,G__7683,G__7684,G__7685){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(11));
(array7619[(0)] = G__7675);

(array7619[(1)] = G__7676);

(array7619[(2)] = G__7677);

(array7619[(3)] = G__7678);

(array7619[(4)] = G__7679);

(array7619[(5)] = G__7680);

(array7619[(6)] = G__7681);

(array7619[(7)] = G__7682);

(array7619[(8)] = G__7683);

(array7619[(9)] = G__7684);

(array7619[(10)] = G__7685);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__7686,G__7687,G__7688,G__7689,G__7690,G__7691,G__7692,G__7693,G__7694,G__7695,G__7696,G__7697){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(12));
(array7619[(0)] = G__7686);

(array7619[(1)] = G__7687);

(array7619[(2)] = G__7688);

(array7619[(3)] = G__7689);

(array7619[(4)] = G__7690);

(array7619[(5)] = G__7691);

(array7619[(6)] = G__7692);

(array7619[(7)] = G__7693);

(array7619[(8)] = G__7694);

(array7619[(9)] = G__7695);

(array7619[(10)] = G__7696);

(array7619[(11)] = G__7697);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__7698,G__7699,G__7700,G__7701,G__7702,G__7703,G__7704,G__7705,G__7706,G__7707,G__7708,G__7709,G__7710){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(13));
(array7619[(0)] = G__7698);

(array7619[(1)] = G__7699);

(array7619[(2)] = G__7700);

(array7619[(3)] = G__7701);

(array7619[(4)] = G__7702);

(array7619[(5)] = G__7703);

(array7619[(6)] = G__7704);

(array7619[(7)] = G__7705);

(array7619[(8)] = G__7706);

(array7619[(9)] = G__7707);

(array7619[(10)] = G__7708);

(array7619[(11)] = G__7709);

(array7619[(12)] = G__7710);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__7711,G__7712,G__7713,G__7714,G__7715,G__7716,G__7717,G__7718,G__7719,G__7720,G__7721,G__7722,G__7723,G__7724){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(14));
(array7619[(0)] = G__7711);

(array7619[(1)] = G__7712);

(array7619[(2)] = G__7713);

(array7619[(3)] = G__7714);

(array7619[(4)] = G__7715);

(array7619[(5)] = G__7716);

(array7619[(6)] = G__7717);

(array7619[(7)] = G__7718);

(array7619[(8)] = G__7719);

(array7619[(9)] = G__7720);

(array7619[(10)] = G__7721);

(array7619[(11)] = G__7722);

(array7619[(12)] = G__7723);

(array7619[(13)] = G__7724);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__7725,G__7726,G__7727,G__7728,G__7729,G__7730,G__7731,G__7732,G__7733,G__7734,G__7735,G__7736,G__7737,G__7738,G__7739){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(15));
(array7619[(0)] = G__7725);

(array7619[(1)] = G__7726);

(array7619[(2)] = G__7727);

(array7619[(3)] = G__7728);

(array7619[(4)] = G__7729);

(array7619[(5)] = G__7730);

(array7619[(6)] = G__7731);

(array7619[(7)] = G__7732);

(array7619[(8)] = G__7733);

(array7619[(9)] = G__7734);

(array7619[(10)] = G__7735);

(array7619[(11)] = G__7736);

(array7619[(12)] = G__7737);

(array7619[(13)] = G__7738);

(array7619[(14)] = G__7739);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__7740,G__7741,G__7742,G__7743,G__7744,G__7745,G__7746,G__7747,G__7748,G__7749,G__7750,G__7751,G__7752,G__7753,G__7754,G__7755){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(16));
(array7619[(0)] = G__7740);

(array7619[(1)] = G__7741);

(array7619[(2)] = G__7742);

(array7619[(3)] = G__7743);

(array7619[(4)] = G__7744);

(array7619[(5)] = G__7745);

(array7619[(6)] = G__7746);

(array7619[(7)] = G__7747);

(array7619[(8)] = G__7748);

(array7619[(9)] = G__7749);

(array7619[(10)] = G__7750);

(array7619[(11)] = G__7751);

(array7619[(12)] = G__7752);

(array7619[(13)] = G__7753);

(array7619[(14)] = G__7754);

(array7619[(15)] = G__7755);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__7756,G__7757,G__7758,G__7759,G__7760,G__7761,G__7762,G__7763,G__7764,G__7765,G__7766,G__7767,G__7768,G__7769,G__7770,G__7771,G__7772){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(17));
(array7619[(0)] = G__7756);

(array7619[(1)] = G__7757);

(array7619[(2)] = G__7758);

(array7619[(3)] = G__7759);

(array7619[(4)] = G__7760);

(array7619[(5)] = G__7761);

(array7619[(6)] = G__7762);

(array7619[(7)] = G__7763);

(array7619[(8)] = G__7764);

(array7619[(9)] = G__7765);

(array7619[(10)] = G__7766);

(array7619[(11)] = G__7767);

(array7619[(12)] = G__7768);

(array7619[(13)] = G__7769);

(array7619[(14)] = G__7770);

(array7619[(15)] = G__7771);

(array7619[(16)] = G__7772);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__7773,G__7774,G__7775,G__7776,G__7777,G__7778,G__7779,G__7780,G__7781,G__7782,G__7783,G__7784,G__7785,G__7786,G__7787,G__7788,G__7789,G__7790){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(18));
(array7619[(0)] = G__7773);

(array7619[(1)] = G__7774);

(array7619[(2)] = G__7775);

(array7619[(3)] = G__7776);

(array7619[(4)] = G__7777);

(array7619[(5)] = G__7778);

(array7619[(6)] = G__7779);

(array7619[(7)] = G__7780);

(array7619[(8)] = G__7781);

(array7619[(9)] = G__7782);

(array7619[(10)] = G__7783);

(array7619[(11)] = G__7784);

(array7619[(12)] = G__7785);

(array7619[(13)] = G__7786);

(array7619[(14)] = G__7787);

(array7619[(15)] = G__7788);

(array7619[(16)] = G__7789);

(array7619[(17)] = G__7790);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__7791,G__7792,G__7793,G__7794,G__7795,G__7796,G__7797,G__7798,G__7799,G__7800,G__7801,G__7802,G__7803,G__7804,G__7805,G__7806,G__7807,G__7808,G__7809){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(19));
(array7619[(0)] = G__7791);

(array7619[(1)] = G__7792);

(array7619[(2)] = G__7793);

(array7619[(3)] = G__7794);

(array7619[(4)] = G__7795);

(array7619[(5)] = G__7796);

(array7619[(6)] = G__7797);

(array7619[(7)] = G__7798);

(array7619[(8)] = G__7799);

(array7619[(9)] = G__7800);

(array7619[(10)] = G__7801);

(array7619[(11)] = G__7802);

(array7619[(12)] = G__7803);

(array7619[(13)] = G__7804);

(array7619[(14)] = G__7805);

(array7619[(15)] = G__7806);

(array7619[(16)] = G__7807);

(array7619[(17)] = G__7808);

(array7619[(18)] = G__7809);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__7810,G__7811,G__7812,G__7813,G__7814,G__7815,G__7816,G__7817,G__7818,G__7819,G__7820,G__7821,G__7822,G__7823,G__7824,G__7825,G__7826,G__7827,G__7828,G__7829){
var self__ = this;
var this__7544__auto__ = this;
var array7619 = cljs.core.object_array.call(null,(20));
(array7619[(0)] = G__7810);

(array7619[(1)] = G__7811);

(array7619[(2)] = G__7812);

(array7619[(3)] = G__7813);

(array7619[(4)] = G__7814);

(array7619[(5)] = G__7815);

(array7619[(6)] = G__7816);

(array7619[(7)] = G__7817);

(array7619[(8)] = G__7818);

(array7619[(9)] = G__7819);

(array7619[(10)] = G__7820);

(array7619[(11)] = G__7821);

(array7619[(12)] = G__7822);

(array7619[(13)] = G__7823);

(array7619[(14)] = G__7824);

(array7619[(15)] = G__7825);

(array7619[(16)] = G__7826);

(array7619[(17)] = G__7827);

(array7619[(18)] = G__7828);

(array7619[(19)] = G__7829);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__7544__auto__,array7619,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6867__auto__){
var self__ = this;
var this__6867__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6863__auto__){
var self__ = this;
var this__6863__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6873__auto__){
var self__ = this;
var this__6873__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6864__auto__){
var self__ = this;
var this__6864__auto____$1 = this;
var h__6682__auto__ = self__.__hash;
if(!((h__6682__auto__ == null))){
return h__6682__auto__;
} else {
var h__6682__auto____$1 = cljs.core.hash_imap.call(null,this__6864__auto____$1);
self__.__hash = h__6682__auto____$1;

return h__6682__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6865__auto__,other__6866__auto__){
var self__ = this;
var this__6865__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6235__auto__ = other__6866__auto__;
if(cljs.core.truth_(and__6235__auto__)){
var and__6235__auto____$1 = (this__6865__auto____$1.constructor === other__6866__auto__.constructor);
if(and__6235__auto____$1){
return cljs.core.equiv_map.call(null,this__6865__auto____$1,other__6866__auto__);
} else {
return and__6235__auto____$1;
}
} else {
return and__6235__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6878__auto__,k__6879__auto__){
var self__ = this;
var this__6878__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__6879__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6878__auto____$1),self__.__meta),k__6879__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6879__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6876__auto__,k__6877__auto__,G__7830){
var self__ = this;
var this__6876__auto____$1 = this;
var pred__7835 = cljs.core.keyword_identical_QMARK_;
var expr__7836 = k__6877__auto__;
if(cljs.core.truth_(pred__7835.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__7836))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__7830,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7835.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__7836))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__7830,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6877__auto__,G__7830),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6881__auto__){
var self__ = this;
var this__6881__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6868__auto__,G__7830){
var self__ = this;
var this__6868__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__7830,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6874__auto__,entry__6875__auto__){
var self__ = this;
var this__6874__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6875__auto__)){
return cljs.core._assoc.call(null,this__6874__auto____$1,cljs.core._nth.call(null,entry__6875__auto__,(0)),cljs.core._nth.call(null,entry__6875__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6874__auto____$1,entry__6875__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__6903__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__6903__auto__,writer__6904__auto__){
return cljs.core._write.call(null,writer__6904__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__7832){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__7832),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__7832),null,cljs.core.dissoc.call(null,G__7832,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
});

com.rpl.specter.impl.params_needed_path_QMARK_ = (function com$rpl$specter$impl$params_needed_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.ParamsNeededPath);
});
com.rpl.specter.impl.bind_params_STAR_ = (function com$rpl$specter$impl$bind_params_STAR_(params_needed_path,params,idx){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,params_needed_path.transform_fns,params,idx);
});
com.rpl.specter.impl.seq_contains_QMARK_ = (function com$rpl$specter$impl$seq_contains_QMARK_(aseq,val){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,val),aseq)));
});
com.rpl.specter.impl.no_prot_error_str = (function com$rpl$specter$impl$no_prot_error_str(obj){
return [cljs.core.str("Protocol implementation cannot be found for object.\n        Extending Specter protocols should not be done inline in a deftype definition\n        because that prevents Specter from finding the protocol implementations for\n        optimized performance. Instead, you should extend the protocols via an\n        explicit extend-protocol call. \n"),cljs.core.str(obj)].join('');
});
com.rpl.specter.impl.structure_path_impl = (function com$rpl$specter$impl$structure_path_impl(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__7848,G__7849,G__7850){
return com.rpl.specter.protocols.select_STAR_.call(null,G__7848,G__7849,G__7850);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__7852,G__7853,G__7854){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__7852,G__7853,G__7854);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__7859,G__7860){
return com.rpl.specter.protocols.collect_val.call(null,G__7859,G__7860);
}):com.rpl.specter.protocols.collect_val)], null);
});
com.rpl.specter.impl.coerce_collector = (function com$rpl$specter$impl$coerce_collector(this$){
var cfn = new cljs.core.Keyword(null,"collect-val","collect-val",801894069).cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.collector_impl.call(null,this$));
var afn = ((function (cfn){
return (function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.conj.call(null,vals,cfn.call(null,this$,structure)),structure);
});})(cfn))
;
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,afn,afn));
});
com.rpl.specter.impl.coerce_structure_path = (function com$rpl$specter$impl$coerce_structure_path(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return selector.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return transformer.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.coerce_structure_path_rich = (function com$rpl$specter$impl$coerce_structure_path_rich(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.structure_path_QMARK_ = (function com$rpl$specter$impl$structure_path_QMARK_(obj){
var or__6247__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__6247__auto__){
return or__6247__auto__;
} else {
if(!((obj == null))){
if((false) || (obj.com$rpl$specter$protocols$StructurePath$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__6910__auto__ = (((this$ == null))?null:this$);
var m__6911__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,this$);
} else {
var m__6911__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoercePath.coerce-path",this$);
}
}
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_structure_path.call(null,null);
}));

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.comp_paths_STAR_.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
if(cljs.core.truth_(com.rpl.specter.impl.structure_path_QMARK_.call(null,this$))){
return com.rpl.specter.impl.coerce_structure_path.call(null,this$);
} else {
if(((!((this$ == null)))?(((false) || (this$.com$rpl$specter$protocols$Collector$))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$))){
return com.rpl.specter.impl.coerce_collector.call(null,this$);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,com.rpl.specter.impl.no_prot_error_str.call(null,this$));

}
}
}));
com.rpl.specter.impl.extype = (function com$rpl$specter$impl$extype(f){
var exs = f.executors;
return exs.type;
});
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__7867){
var vec__7871 = p__7867;
var seq__7872 = cljs.core.seq.call(null,vec__7871);
var first__7873 = cljs.core.first.call(null,seq__7872);
var seq__7872__$1 = cljs.core.next.call(null,seq__7872);
var f = first__7873;
var _ = seq__7872__$1;
var all = vec__7871;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all))
);
});
;})(exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all))
});})(exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all))
:((function (exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all))
);
});
;})(exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all))
});})(exs,t,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__7871,seq__7872,first__7873,seq__7872__$1,f,_,all))
,all);
});
com.rpl.specter.impl.coerce_tfns_rich = (function com$rpl$specter$impl$coerce_tfns_rich(tfns){
if(cljs.core._EQ_.call(null,com.rpl.specter.impl.extype.call(null,tfns),new cljs.core.Keyword(null,"richpath","richpath",-150197948))){
return tfns;
} else {
var selector = tfns.selector;
var transformer = tfns.transformer;
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
);
}
});
com.rpl.specter.impl.capture_params_internally = (function com$rpl$specter$impl$capture_params_internally(path){
if(!((path instanceof com.rpl.specter.impl.CompiledPath))){
return path;
} else {
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(path);
var params_idx = new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(path);
var selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
var transformer = new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.empty_QMARK_.call(null,params)){
return path;
} else {
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return selector.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return transformer.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
));
}
}
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["null"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["_"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 = (function (structure_paths){
var structure_paths__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure_paths__$1)){
return com.rpl.specter.impl.coerce_path.call(null,null);
} else {
var coerced = cljs.core.map.call(null,com.rpl.specter.impl.capture_params_internally,cljs.core.map.call(null,com.rpl.specter.impl.coerce_path,structure_paths__$1));
var combined = cljs.core.map.call(null,com.rpl.specter.impl.combine_same_types,cljs.core.partition_by.call(null,com.rpl.specter.impl.extype,cljs.core.map.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),coerced)));
var result_tfn = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,combined)))?cljs.core.first.call(null,combined):com.rpl.specter.impl.combine_same_types.call(null,cljs.core.map.call(null,com.rpl.specter.impl.coerce_tfns_rich,combined)));
var needs_params_paths = cljs.core.filter.call(null,((function (coerced,combined,result_tfn,structure_paths__$1){
return (function (p1__7874_SHARP_){
return (p1__7874_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
});})(coerced,combined,result_tfn,structure_paths__$1))
,coerced);
if(cljs.core.empty_QMARK_.call(null,needs_params_paths)){
return com.rpl.specter.impl.no_params_compiled_path.call(null,result_tfn);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.coerce_tfns_rich.call(null,result_tfn),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),needs_params_paths)));
}
}
});
com.rpl.specter.impl.num_needed_params = (function com$rpl$specter$impl$num_needed_params(path){
if((path instanceof com.rpl.specter.impl.CompiledPath)){
return (0);
} else {
return new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(path);
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__6910__auto__ = (((cell == null))?null:cell);
var m__6911__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,cell,x);
} else {
var m__6911__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,cell,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
})
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = true;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args7875 = [];
var len__7322__auto___7878 = arguments.length;
var i__7323__auto___7879 = (0);
while(true){
if((i__7323__auto___7879 < len__7322__auto___7878)){
args7875.push((arguments[i__7323__auto___7879]));

var G__7880 = (i__7323__auto___7879 + (1));
i__7323__auto___7879 = G__7880;
continue;
} else {
}
break;
}

var G__7877 = args7875.length;
switch (G__7877) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7875.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.call(null,null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell.call(null,cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = afn.call(null,com.rpl.specter.impl.get_cell.call(null,cell));
com.rpl.specter.impl.set_cell_BANG_.call(null,cell,ret);

return ret;
});
com.rpl.specter.impl.append = (function com$rpl$specter$impl$append(coll,elem){
return cljs.core.conj.call(null,cljs.core.vec.call(null,coll),elem);
});

/**
 * @interface
 */
com.rpl.specter.impl.SetExtremes = function(){};

com.rpl.specter.impl.set_first = (function com$rpl$specter$impl$set_first(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_first$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_first$arity$2(s,val);
} else {
var x__6910__auto__ = (((s == null))?null:s);
var m__6911__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,s,val);
} else {
var m__6911__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-first",s);
}
}
}
});

com.rpl.specter.impl.set_last = (function com$rpl$specter$impl$set_last(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_last$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_last$arity$2(s,val);
} else {
var x__6910__auto__ = (((s == null))?null:s);
var m__6911__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,s,val);
} else {
var m__6911__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-last",s);
}
}
}
});

com.rpl.specter.impl.set_first_list = (function com$rpl$specter$impl$set_first_list(l,v){
return cljs.core.cons.call(null,v,cljs.core.rest.call(null,l));
});
com.rpl.specter.impl.set_last_list = (function com$rpl$specter$impl$set_last_list(l,v){
return com.rpl.specter.impl.append.call(null,cljs.core.butlast.call(null,l),v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_first$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(0),val);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_last$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(cljs.core.count.call(null,v__$1) - (1)),val);
});

(com.rpl.specter.impl.SetExtremes["_"] = true);

(com.rpl.specter.impl.set_first["_"] = (function (l,val){
return com.rpl.specter.impl.set_first_list.call(null,l,val);
}));

(com.rpl.specter.impl.set_last["_"] = (function (l,val){
return com.rpl.specter.impl.set_last_list.call(null,l,val);
}));
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
return clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof clojure.lang.Cons)) || ((f instanceof clojure.lang.LazySeq)) || (cljs.core.list_QMARK_.call(null,f));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__6235__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__6235__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__6235__auto__;
}
})())){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.conj_all_BANG_ = (function com$rpl$specter$impl$conj_all_BANG_(cell,elems){
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,cljs.core.concat.call(null,com.rpl.specter.impl.get_cell.call(null,cell),elems));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.select_executor.call(null,path.params,path.params_idx,tfns.selector,structure);
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(path,transform_fn,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.transform_executor.call(null,path.params,path.params_idx,tfns.transformer,transform_fn,structure);
});
com.rpl.specter.impl.not_selected_QMARK__STAR_ = (function com$rpl$specter$impl$not_selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.selected_QMARK__STAR_ = (function com$rpl$specter$impl$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.PersistentVector.EMPTY);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
return com.rpl.specter.impl.conj_all_BANG_.call(null,ret,continue_fn.call(null,structure__$1));
} else {
return clojure.walk.walk.call(null,com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker.call(null,structure);

return com.rpl.specter.impl.get_cell.call(null,ret);
});
com.rpl.specter.impl.key_select = (function com$rpl$specter$impl$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.impl.key_transform = (function com$rpl$specter$impl$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
});
com.rpl.specter.impl.all_select = (function com$rpl$specter$impl$all_select(structure,next_fn){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (p1__7882_SHARP_){
return next_fn.call(null,p1__7882_SHARP_);
})),structure);
});
com.rpl.specter.impl.queue_QMARK_ = (function com$rpl$specter$impl$queue_QMARK_(coll){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,coll),cljs.core.type.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});
com.rpl.specter.impl.all_transform = (function com$rpl$specter$impl$all_transform(structure,next_fn){
var empty_structure = cljs.core.empty.call(null,structure);
if((cljs.core.list_QMARK_.call(null,empty_structure)) && (cljs.core.not.call(null,com.rpl.specter.impl.queue_QMARK_.call(null,empty_structure)))){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,cljs.core.map.call(null,((function (empty_structure){
return (function (p1__7883_SHARP_){
return next_fn.call(null,p1__7883_SHARP_);
});})(empty_structure))
),structure);
}
});

/**
* @constructor
*/
com.rpl.specter.impl.AllStructurePath = (function (){
})

com.rpl.specter.impl.AllStructurePath.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.AllStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/AllStructurePath";

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"com.rpl.specter.impl/AllStructurePath");
});

com.rpl.specter.impl.__GT_AllStructurePath = (function com$rpl$specter$impl$__GT_AllStructurePath(){
return (new com.rpl.specter.impl.AllStructurePath());
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return com.rpl.specter.impl.all_select.call(null,structure,next_fn);
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return com.rpl.specter.impl.all_transform.call(null,structure,next_fn);
});

/**
* @constructor
*/
com.rpl.specter.impl.ValCollect = (function (){
})

com.rpl.specter.impl.ValCollect.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.ValCollect.cljs$lang$type = true;

com.rpl.specter.impl.ValCollect.cljs$lang$ctorStr = "com.rpl.specter.impl/ValCollect";

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"com.rpl.specter.impl/ValCollect");
});

com.rpl.specter.impl.__GT_ValCollect = (function com$rpl$specter$impl$__GT_ValCollect(){
return (new com.rpl.specter.impl.ValCollect());
});

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$ = true;

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$collect_val$arity$2 = (function (this$,structure){
var this$__$1 = this;
return structure;
});

/**
* @constructor
*/
com.rpl.specter.impl.PosStructurePath = (function (getter,setter){
this.getter = getter;
this.setter = setter;
})

com.rpl.specter.impl.PosStructurePath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

com.rpl.specter.impl.PosStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/PosStructurePath";

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"com.rpl.specter.impl/PosStructurePath");
});

com.rpl.specter.impl.__GT_PosStructurePath = (function com$rpl$specter$impl$__GT_PosStructurePath(getter,setter){
return (new com.rpl.specter.impl.PosStructurePath(getter,setter));
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(!(cljs.core.empty_QMARK_.call(null,structure))){
return next_fn.call(null,this$__$1.getter.call(null,structure));
} else {
return null;
}
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure)){
return structure;
} else {
return this$__$1.setter.call(null,structure,next_fn.call(null,this$__$1.getter.call(null,structure)));
}
});
com.rpl.specter.impl.srange_select = (function com$rpl$specter$impl$srange_select(structure,start,end,next_fn){
return next_fn.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end));
});
com.rpl.specter.impl.srange_transform = (function com$rpl$specter$impl$srange_transform(structure,start,end,next_fn){
var structurev = cljs.core.vec.call(null,structure);
var newpart = next_fn.call(null,cljs.core.subvec.call(null,structurev,start,end));
var res = cljs.core.concat.call(null,cljs.core.subvec.call(null,structurev,(0),start),newpart,cljs.core.subvec.call(null,structurev,end,cljs.core.count.call(null,structure)));
if(cljs.core.vector_QMARK_.call(null,structure)){
return cljs.core.vec.call(null,res);
} else {
return res;
}
});
(com.rpl.specter.protocols.StructurePath["null"] = true);

(com.rpl.specter.protocols.select_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));

(com.rpl.specter.protocols.transform_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));
com.rpl.specter.impl.retrieve_cond_selector = (function com$rpl$specter$impl$retrieve_cond_selector(cond_paths,structure){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__7888){
var vec__7889 = p__7888;
var c_selector = cljs.core.nth.call(null,vec__7889,(0),null);
var _ = cljs.core.nth.call(null,vec__7889,(1),null);
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,c_selector,structure));
}),cljs.core.partition.call(null,(2),cond_paths))));
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return null;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return structure;
}
});
com.rpl.specter.impl.compiled_selector = (function com$rpl$specter$impl$compiled_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.compiled_transformer = (function com$rpl$specter$impl$compiled_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});
com.rpl.specter.impl.params_needed_selector = (function com$rpl$specter$impl$params_needed_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.params_needed_transformer = (function com$rpl$specter$impl$params_needed_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});

//# sourceMappingURL=impl.js.map?rel=1470137656966