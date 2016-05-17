// Compiled by ClojureScript 1.7.228 {}
goog.provide('micircle.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('micircle.chord.main');
goog.require('json_html.core');
micircle.views.main_panel = (function micircle$views$main_panel(){
var app_db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302)], null));
return ((function (app_db){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.chord.main.main], null)], null);
});
;})(app_db))
});

//# sourceMappingURL=views.js.map?rel=1463475620388