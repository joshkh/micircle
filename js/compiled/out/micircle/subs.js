// Compiled by ClojureScript 1.9.89 {}
goog.provide('micircle.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"interactors","interactors",1738679830),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.filter.call(null,(function (p1__15233_SHARP_){
return cljs.core._EQ_.call(null,"interactor",new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(p1__15233_SHARP_));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.filter.call(null,(function (p1__15234_SHARP_){
return cljs.core._EQ_.call(null,"interaction",new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(p1__15234_SHARP_));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,db);
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"view-defs","view-defs",-356123938),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"view-nodes","view-nodes",-190176378),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"view-links","view-links",-1364071053),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"ready?","ready?",-105765697),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"complex-id","complex-id",-728115735),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"complex-id","complex-id",-728115735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"data","data",-232669377),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1470137670900