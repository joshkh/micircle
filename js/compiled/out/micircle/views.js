// Compiled by ClojureScript 1.9.89 {}
goog.provide('micircle.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('micircle.chord.main');
goog.require('json_html.core');
goog.require('com.rpl.specter');
micircle.views.chooser = (function micircle$views$chooser(){
var complex_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complex-id","complex-id",-728115735)], null));
return ((function (complex_id){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.button.-blue.center","li.button.-blue.center",1958324756),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complex_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-complex-id","set-complex-id",-1821675567),"EBI-9082861"], null));
});})(complex_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"EBI-9082861",cljs.core.deref.call(null,complex_id)))?"active":null)], null),"EBI-9082861"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.button.-blue.center","li.button.-blue.center",1958324756),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complex_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-complex-id","set-complex-id",-1821675567),"EBI-9008420"], null));
});})(complex_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"EBI-9008420",cljs.core.deref.call(null,complex_id)))?"active":null)], null),"EBI-9008420"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.button.-blue.center","li.button.-blue.center",1958324756),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complex_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-complex-id","set-complex-id",-1821675567),"EBI-6554207"], null));
});})(complex_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"EBI-6554207",cljs.core.deref.call(null,complex_id)))?"active":null)], null),"EBI-6554207"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.button.-red.center","li.button.-red.center",1192501614),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complex_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-complex-id","set-complex-id",-1821675567),"EBI-11509704"], null));
});})(complex_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"EBI-11509704",cljs.core.deref.call(null,complex_id)))?"active":null)], null),"EBI-11509704"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.button.-red.center","li.button.-red.center",1192501614),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complex_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-complex-id","set-complex-id",-1821675567),"EBI-9997373"], null));
});})(complex_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"EBI-9997373",cljs.core.deref.call(null,complex_id)))?"active":null)], null),"EBI-9997373"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkbox","div.checkbox",389009838),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (complex_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-unknown","center-unknown",-1017035800)], null));
});})(complex_id))
], null)], null),"Center unknown binding regions?"], null)], null)], null);
});
;})(complex_id))
});
micircle.views.x_labels = (function micircle$views$x_labels(verticies){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.stressed","div.cell.stressed",662402655)], null)], null),cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.stressed","div.cell.stressed",662402655),[cljs.core.str(x)].join('')], null);
}),verticies));
});
micircle.views.matrix_cell = (function micircle$views$matrix_cell(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell","div.cell",1471979620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,true,value))?"true":null)], null)], null);
});
micircle.views.matrix_row = (function micircle$views$matrix_row(values,idx){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.stressed","div.cell.stressed",662402655),idx], null)], null),cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.views.matrix_cell,x], null);
}),values));
});
micircle.views.feature_matrix = (function micircle$views$feature_matrix(){
var d = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.matrix","div.matrix",-807944621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.views.x_labels,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d))], null)], null),cljs.core.map_indexed.call(null,((function (d){
return (function (i,r){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.views.matrix_row,r,cljs.core.nth.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d)),i)], null);
});})(d))
,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d))));
});
micircle.views.main_panel = (function micircle$views$main_panel(){
var app_db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302)], null));
return ((function (app_db){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.views.chooser], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.chord.main.main], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
;})(app_db))
});

//# sourceMappingURL=views.js.map?rel=1470137670599