// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('micircle.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20691__delegate = function (x){
if(cljs.core.truth_(micircle.core.mount_root)){
return cljs.core.apply.call(null,micircle.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'micircle.core/mount-root' is missing");
}
};
var G__20691 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20692__i = 0, G__20692__a = new Array(arguments.length -  0);
while (G__20692__i < G__20692__a.length) {G__20692__a[G__20692__i] = arguments[G__20692__i + 0]; ++G__20692__i;}
  x = new cljs.core.IndexedSeq(G__20692__a,0);
} 
return G__20691__delegate.call(this,x);};
G__20691.cljs$lang$maxFixedArity = 0;
G__20691.cljs$lang$applyTo = (function (arglist__20693){
var x = cljs.core.seq(arglist__20693);
return G__20691__delegate(x);
});
G__20691.cljs$core$IFn$_invoke$arity$variadic = G__20691__delegate;
return G__20691;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1463475909812