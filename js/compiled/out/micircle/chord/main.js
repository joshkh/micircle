// Compiled by ClojureScript 1.9.89 {}
goog.provide('micircle.chord.main');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('micircle.chord.utils');
goog.require('micircle.utils');
goog.require('micircle.chord.globals');
micircle.chord.main.radius = (150);
micircle.chord.main.link_group = (function micircle$chord$main$link_group(){
var links = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-links","view-links",-1364071053)], null));
return ((function (links){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.link-group","g.link-group",1982293013)], null),(function (){var iter__7027__auto__ = ((function (links){
return (function micircle$chord$main$link_group_$_iter__14843(s__14844){
return (new cljs.core.LazySeq(null,((function (links){
return (function (){
var s__14844__$1 = s__14844;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14844__$1);
if(temp__4657__auto__){
var s__14844__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14844__$2)){
var c__7025__auto__ = cljs.core.chunk_first.call(null,s__14844__$2);
var size__7026__auto__ = cljs.core.count.call(null,c__7025__auto__);
var b__14846 = cljs.core.chunk_buffer.call(null,size__7026__auto__);
if((function (){var i__14845 = (0);
while(true){
if((i__14845 < size__7026__auto__)){
var l = cljs.core._nth.call(null,c__7025__auto__,i__14845);
cljs.core.chunk_append.call(null,b__14846,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.link","path.link",565392937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),l,new cljs.core.Keyword(null,"fill","fill",883462889),"url(#rgrad)"], null)], null));

var G__14847 = (i__14845 + (1));
i__14845 = G__14847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14846),micircle$chord$main$link_group_$_iter__14843.call(null,cljs.core.chunk_rest.call(null,s__14844__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14846),null);
}
} else {
var l = cljs.core.first.call(null,s__14844__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.link","path.link",565392937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),l,new cljs.core.Keyword(null,"fill","fill",883462889),"url(#rgrad)"], null)], null),micircle$chord$main$link_group_$_iter__14843.call(null,cljs.core.rest.call(null,s__14844__$2)));
}
} else {
return null;
}
break;
}
});})(links))
,null,null));
});})(links))
;
return iter__7027__auto__.call(null,cljs.core.deref.call(null,links));
})());
});
;})(links))
});
micircle.chord.main.features = (function micircle$chord$main$features(){
return (function (node){
var scale = micircle.utils.radial_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(node)], null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.features","g.features",-685141777)], null),cljs.core.map.call(null,((function (scale){
return (function (feature){
return cljs.core.map.call(null,((function (scale){
return (function (sequence_data){
var vec__14851 = clojure.string.split.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(sequence_data),"-");
var feature_start = cljs.core.nth.call(null,vec__14851,(0),null);
var feature_end = cljs.core.nth.call(null,vec__14851,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.tick","line.tick",122626657),(function (){var start = micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),(micircle.chord.main.radius - (100)),scale.call(null,feature_start));
var end = micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),micircle.chord.main.radius,scale.call(null,feature_start));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)], null);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.tick","line.tick",122626657),(function (){var start = micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),(micircle.chord.main.radius - (100)),scale.call(null,feature_end));
var end = micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),micircle.chord.main.radius,scale.call(null,feature_end));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)], null);
})()], null)], null);
});})(scale))
,new cljs.core.Keyword(null,"sequenceData","sequenceData",-1634607567).cljs$core$IFn$_invoke$arity$1(feature));
});})(scale))
,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(node)));
});
});
micircle.chord.main.arc_group = (function micircle$chord$main$arc_group(){
var view_nodes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-nodes","view-nodes",-190176378)], null));
return ((function (view_nodes){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.arc-group","g.arc-group",1043619779)], null),cljs.core.map.call(null,((function (view_nodes){
return (function (node){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.arc","g.arc",-989014651),(cljs.core.truth_(new cljs.core.Keyword(null,"small-molecule","small-molecule",-1421390134).cljs$core$IFn$_invoke$arity$1(node))?(function (){var pos = micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),micircle.chord.main.radius,((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(node) + new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(node)) / (2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.small-molecule","circle.small-molecule",586604122),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)], null)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.assoc.call(null,micircle.chord.globals.arc,new cljs.core.Keyword(null,"d","d",1972142424),micircle.chord.utils.describe_arc.call(null,(0),(0),micircle.chord.main.radius,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(node),true))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text.participant","text.participant",-1366671591),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textPath","textPath",269260449),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"startOffset","startOffset",-590231263),"50%",new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),[cljs.core.str("#"),cljs.core.str(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(node))].join('')], null),new cljs.core.Keyword(null,"interactorRef","interactorRef",-1025023158).cljs$core$IFn$_invoke$arity$1(node)], null)], null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"small-molecule","small-molecule",-1421390134).cljs$core$IFn$_invoke$arity$1(node)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.tickers","g.tickers",-1980907112)], null),cljs.core.map.call(null,((function (view_nodes){
return (function (tick){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.ticker","line.ticker",69502361),(function (){var start = micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),(micircle.chord.main.radius - (10)),tick);
var end = micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),(micircle.chord.main.radius + (0)),tick);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)], null);
})()], null);
});})(view_nodes))
,new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(node)))], null):null)], null);
});})(view_nodes))
,cljs.core.deref.call(null,view_nodes)));
});
;})(view_nodes))
});
micircle.chord.main.defs = (function micircle$chord$main$defs(){
var view_defs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-defs","view-defs",-356123938)], null));
return ((function (view_defs){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.conj.call(null,cljs.core.map.call(null,((function (view_defs){
return (function (def){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),def], null);
});})(view_defs))
,cljs.core.deref.call(null,view_defs)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient#grad","linearGradient#grad",2118179775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"75%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),(0),new cljs.core.Keyword(null,"offset","offset",296498311),"10%",new cljs.core.Keyword(null,"stop-color","stop-color",316173955),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"100%",new cljs.core.Keyword(null,"stop-color","stop-color",316173955),"magenta"], null)], null)], null)));
});
;})(view_defs))
});
micircle.chord.main.svg = (function micircle$chord$main$svg(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.micircle","svg.micircle",1052494938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.chord.main.defs], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.centered","g.centered",-1357236812),micircle.chord.utils.center.call(null,(800),(500)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.chord.main.link_group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.chord.main.arc_group], null)], null)], null);
});
});
micircle.chord.main.loading = (function micircle$chord$main$loading(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"loading..."], null);
});
});
micircle.chord.main.main = (function micircle$chord$main$main(){
var ready_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null));
return ((function (ready_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref.call(null,ready_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.chord.main.svg], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.chord.main.loading], null))], null);
});
;})(ready_QMARK_))
});

//# sourceMappingURL=main.js.map?rel=1470137670367