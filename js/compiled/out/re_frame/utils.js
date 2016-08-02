// Compiled by ClojureScript 1.9.89 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__14675_SHARP_){
return console.log(p1__14675_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__14676_SHARP_){
return console.warn(p1__14676_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__14677_SHARP_){
return console.error(p1__14677_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__14678_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__14678_SHARP_);
} else {
return console.log(p1__14678_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14680 = arguments.length;
var i__7323__auto___14681 = (0);
while(true){
if((i__7323__auto___14681 < len__7322__auto___14680)){
args__7329__auto__.push((arguments[i__7323__auto___14681]));

var G__14682 = (i__7323__auto___14681 + (1));
i__7323__auto___14681 = G__14682;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq14679){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14679));
});

re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14684 = arguments.length;
var i__7323__auto___14685 = (0);
while(true){
if((i__7323__auto___14685 < len__7322__auto___14684)){
args__7329__auto__.push((arguments[i__7323__auto___14685]));

var G__14686 = (i__7323__auto___14685 + (1));
i__7323__auto___14685 = G__14686;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq14683){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14683));
});

re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14688 = arguments.length;
var i__7323__auto___14689 = (0);
while(true){
if((i__7323__auto___14689 < len__7322__auto___14688)){
args__7329__auto__.push((arguments[i__7323__auto___14689]));

var G__14690 = (i__7323__auto___14689 + (1));
i__7323__auto___14689 = G__14690;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq14687){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14687));
});

re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14692 = arguments.length;
var i__7323__auto___14693 = (0);
while(true){
if((i__7323__auto___14693 < len__7322__auto___14692)){
args__7329__auto__.push((arguments[i__7323__auto___14693]));

var G__14694 = (i__7323__auto___14693 + (1));
i__7323__auto___14693 = G__14694;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq14691){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14691));
});

re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14696 = arguments.length;
var i__7323__auto___14697 = (0);
while(true){
if((i__7323__auto___14697 < len__7322__auto___14696)){
args__7329__auto__.push((arguments[i__7323__auto___14697]));

var G__14698 = (i__7323__auto___14697 + (1));
i__7323__auto___14697 = G__14698;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq14695){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14695));
});

re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1470137667288