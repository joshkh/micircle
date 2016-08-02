// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__9201__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9202__i = 0, G__9202__a = new Array(arguments.length -  0);
while (G__9202__i < G__9202__a.length) {G__9202__a[G__9202__i] = arguments[G__9202__i + 0]; ++G__9202__i;}
  args = new cljs.core.IndexedSeq(G__9202__a,0);
} 
return G__9201__delegate.call(this,args);};
G__9201.cljs$lang$maxFixedArity = 0;
G__9201.cljs$lang$applyTo = (function (arglist__9203){
var args = cljs.core.seq(arglist__9203);
return G__9201__delegate(args);
});
G__9201.cljs$core$IFn$_invoke$arity$variadic = G__9201__delegate;
return G__9201;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9204__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9205__i = 0, G__9205__a = new Array(arguments.length -  0);
while (G__9205__i < G__9205__a.length) {G__9205__a[G__9205__i] = arguments[G__9205__i + 0]; ++G__9205__i;}
  args = new cljs.core.IndexedSeq(G__9205__a,0);
} 
return G__9204__delegate.call(this,args);};
G__9204.cljs$lang$maxFixedArity = 0;
G__9204.cljs$lang$applyTo = (function (arglist__9206){
var args = cljs.core.seq(arglist__9206);
return G__9204__delegate(args);
});
G__9204.cljs$core$IFn$_invoke$arity$variadic = G__9204__delegate;
return G__9204;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1470137658955