// Compiled by ClojureScript 1.9.89 {}
goog.provide('micircle.handlers');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('micircle.chord.utils');
goog.require('micircle.utils');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('micircle.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return micircle.db.default_db;
}));
/**
 * Finds the index of an item in a collection or nil if not found.
 */
micircle.handlers.get_index = (function micircle$handlers$get_index(col,e){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (idx,entity){
if(cljs.core._EQ_.call(null,entity,e)){
return idx;
} else {
return null;
}
}),col));
});
micircle.handlers.view_calculate_features = (function micircle$handlers$view_calculate_features(data){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"start","start",-355208981)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"end","end",-268185958)),com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"length","length",588987862)),new cljs.core.Keyword(null,"features","features",-1146962336),com.rpl.specter.ALL,new cljs.core.Keyword(null,"sequenceData","sequenceData",-1634607567),com.rpl.specter.ALL], null),(function (start_degree,end_degree,length,sequence_data){
if(cljs.core._EQ_.call(null,"?-?",new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(sequence_data))){
return cljs.core.assoc.call(null,sequence_data,new cljs.core.Keyword(null,"start","start",-355208981),start_degree,new cljs.core.Keyword(null,"end","end",-268185958),((1) + start_degree));
} else {
var pos = micircle.utils.parse_pos.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(sequence_data));
var scale = micircle.utils.radial_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),length], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_degree,end_degree], null));
var vec__15138 = cljs.core.map.call(null,cljs.core.partial.call(null,scale),pos);
var x = cljs.core.nth.call(null,vec__15138,(0),null);
var y = cljs.core.nth.call(null,vec__15138,(1),null);
return cljs.core.assoc.call(null,sequence_data,new cljs.core.Keyword(null,"start","start",-355208981),x,new cljs.core.Keyword(null,"end","end",-268185958),y);
}
}),data);
});
micircle.handlers.space_around_circle = (function micircle$handlers$space_around_circle(data){
return cljs.core.reduce.call(null,(function (total,next){
if(!(cljs.core.empty_QMARK_.call(null,total))){
var my_length = (new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(next) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(next));
return cljs.core.conj.call(null,total,cljs.core.assoc.call(null,next,new cljs.core.Keyword(null,"start","start",-355208981),(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,total)) + (0)),new cljs.core.Keyword(null,"end","end",-268185958),((new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,total)) + my_length) - (0))));
} else {
return cljs.core.conj.call(null,total,next);
}
}),cljs.core.PersistentVector.EMPTY,data);
});
micircle.handlers.pad_segment = (function micircle$handlers$pad_segment(padding,x){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(x) - padding));
});
micircle.handlers.divide_circle = (function micircle$handlers$divide_circle(data){
var total = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.comp.call(null,parseInt,new cljs.core.Keyword(null,"length","length",588987862)),data));
return cljs.core.reduce.call(null,((function (total){
return (function (col,next){
return cljs.core.conj.call(null,col,cljs.core.merge.call(null,next,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(next) * ((360) / total))], null)));
});})(total))
,cljs.core.PersistentVector.EMPTY,data);
});
/**
 * Return nodes that have features with an id.
 *   The :linkedFeatures key will only contain the matching features.
 */
micircle.handlers.get_nodes_with_features = (function micircle$handlers$get_nodes_with_features(nodes,id){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,new cljs.core.Keyword(null,"features","features",-1146962336)], null),(function (p1__15142_SHARP_){
return cljs.core.filter.call(null,(function (feature){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(feature));
}),p1__15142_SHARP_);
}),com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,new cljs.core.Keyword(null,"features","features",-1146962336),com.rpl.specter.ALL,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__15141_SHARP_){
return cljs.core._EQ_.call(null,id,p1__15141_SHARP_);
}))], null),nodes));
});
micircle.handlers.zero_if_nan = (function micircle$handlers$zero_if_nan(p__15143){
var vec__15147 = p__15143;
var x = cljs.core.nth.call(null,vec__15147,(0),null);
var y = cljs.core.nth.call(null,vec__15147,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(isNaN(x))?(1):x),(cljs.core.truth_(isNaN(y))?(12):y)], null);
});
micircle.handlers.calculate_link_path = (function micircle$handlers$calculate_link_path(from_feature,to_feature,center_QMARK_){
var from_feature_scale = micircle.utils.radial_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(from_feature)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(from_feature),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(from_feature)], null));
var to_feature_scale = micircle.utils.radial_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(to_feature)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(to_feature),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(to_feature)], null));
var from_pos = micircle.utils.parse_pos.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"sequenceData","sequenceData",-1634607567).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(from_feature))))));
var to_pos = micircle.utils.parse_pos.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"sequenceData","sequenceData",-1634607567).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(to_feature))))));
var vec__15156 = (cljs.core.truth_(isNaN(cljs.core.first.call(null,from_pos)))?(cljs.core.truth_(center_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(from_feature) + new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(from_feature)) / (2)) - (2)),((2) + ((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(from_feature) + new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(from_feature)) / (2)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(from_feature),((2) + new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(from_feature))], null)):cljs.core.map.call(null,cljs.core.partial.call(null,from_feature_scale),from_pos));
var x1 = cljs.core.nth.call(null,vec__15156,(0),null);
var y1 = cljs.core.nth.call(null,vec__15156,(1),null);
var vec__15159 = (cljs.core.truth_(isNaN(cljs.core.first.call(null,to_pos)))?(cljs.core.truth_(center_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(to_feature) + new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(to_feature)) / (2)) - (2)),((2) + ((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(to_feature) + new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(to_feature)) / (2)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(to_feature),((2) + new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(to_feature))], null)):micircle.handlers.zero_if_nan.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,to_feature_scale),to_pos)));
var x2 = cljs.core.nth.call(null,vec__15159,(0),null);
var y2 = cljs.core.nth.call(null,vec__15159,(1),null);
return micircle.chord.utils.describe_link.call(null,(0),(0),(150),x1,y1,x2,y2);
});
micircle.handlers.view_calculate_links = (function micircle$handlers$view_calculate_links(db){
var nodes = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,((function (nodes){
return (function (node){
return cljs.core.map.call(null,((function (nodes){
return (function (feature){
return micircle.handlers.calculate_link_path.call(null,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature], null)),cljs.core.first.call(null,micircle.handlers.get_nodes_with_features.call(null,nodes,cljs.core.first.call(null,new cljs.core.Keyword(null,"linkedFeatures","linkedFeatures",-1870710652).cljs$core$IFn$_invoke$arity$1(feature)))),new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(db)));
});})(nodes))
,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(node));
});})(nodes))
,nodes)));
});
micircle.handlers.generate_textpath_defs = (function micircle$handlers$generate_textpath_defs(db){
var nodes = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (nodes){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"d","d",1972142424),micircle.chord.utils.describe_arc.call(null,(0),(0),(175),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(node),true)], null);
});})(nodes))
,nodes)));
});
micircle.handlers.convert_strings_to_ints = (function micircle$handlers$convert_strings_to_ints(db){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,new cljs.core.Keyword(null,"features","features",-1146962336),com.rpl.specter.ALL,new cljs.core.Keyword(null,"linkedFeatures","linkedFeatures",-1870710652),com.rpl.specter.ALL], null),(function (p1__15163_SHARP_){
return parseInt(p1__15163_SHARP_);
}),com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,new cljs.core.Keyword(null,"features","features",-1146962336),com.rpl.specter.ALL,new cljs.core.Keyword(null,"id","id",-1388402092)], null),(function (p1__15162_SHARP_){
return parseInt(p1__15162_SHARP_);
}),db));
});
micircle.handlers.view_parse_nodes = (function micircle$handlers$view_parse_nodes(db){
var participants = new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833).cljs$core$IFn$_invoke$arity$1(db))));
var interactors = new cljs.core.Keyword(null,"interactors","interactors",1738679830).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (participants,interactors){
return (function (participant){
return cljs.core.assoc.call(null,participant,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"length","length",588987862),(function (){var temp__4655__auto__ = cljs.core.get_in.call(null,interactors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"interactorRef","interactorRef",-1025023158).cljs$core$IFn$_invoke$arity$1(participant)),new cljs.core.Keyword(null,"length","length",588987862)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var found = temp__4655__auto__;
return found;
} else {
return (8888);
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.get_in.call(null,interactors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"interactorRef","interactorRef",-1025023158).cljs$core$IFn$_invoke$arity$1(participant)),new cljs.core.Keyword(null,"label","label",1718410804)], null)));
});})(participants,interactors))
,participants)));
});
micircle.handlers.parse_interactors_and_features = (function micircle$handlers$parse_interactors_and_features(db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"interactors","interactors",1738679830),cljs.core.reduce.call(null,(function (total,next){
return cljs.core.assoc.call(null,total,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next)),next);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.butlast.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833),new cljs.core.Keyword(null,"data","data",-232669377)], null)))),new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.reduce.call(null,(function (total,next){
return cljs.core.assoc.call(null,total,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next)),next);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.butlast.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833),new cljs.core.Keyword(null,"data","data",-232669377)], null)))));
});
micircle.handlers.interaction_QMARK_ = (function micircle$handlers$interaction_QMARK_(e){
return cljs.core._EQ_.call(null,"interaction",new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(e));
});
micircle.handlers.interactor_QMARK_ = (function micircle$handlers$interactor_QMARK_(e){
return cljs.core._EQ_.call(null,"interactor",new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(e));
});
micircle.handlers.features = (function micircle$handlers$features(data){
return com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),com.rpl.specter.ALL,micircle.handlers.interaction_QMARK_,new cljs.core.Keyword(null,"participants","participants",673603367),com.rpl.specter.ALL,new cljs.core.Keyword(null,"features","features",-1146962336),com.rpl.specter.ALL], null),data);
});
micircle.handlers.participants = (function micircle$handlers$participants(data){
return cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.gensym.call(null));
}),com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),com.rpl.specter.ALL,micircle.handlers.interaction_QMARK_,new cljs.core.Keyword(null,"participants","participants",673603367),com.rpl.specter.ALL], null),data));
});
micircle.handlers.interactors = (function micircle$handlers$interactors(data){
return com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),com.rpl.specter.ALL,micircle.handlers.interactor_QMARK_], null),data);
});
micircle.handlers.feature = (function micircle$handlers$feature(features,id){
return cljs.core.filter.call(null,(function (x){
cljs.core.println.call(null,x);

return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),id);
}),features);
});
micircle.handlers.index_map = (function micircle$handlers$index_map(feature_ids){
return cljs.core.reduce.call(null,(function (p1__15164_SHARP_,p2__15165_SHARP_){
return cljs.core.assoc.call(null,p1__15164_SHARP_,p2__15165_SHARP_,micircle.handlers.get_index.call(null,feature_ids,p2__15165_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,feature_ids);
});
micircle.handlers.square_matrix = (function micircle$handlers$square_matrix(size,fill){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,size,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,size,fill))));
});
micircle.handlers.feature_matrix = (function micircle$handlers$feature_matrix(features){
var vertices = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),features);
var indices = micircle.handlers.index_map.call(null,vertices);
var m = micircle.handlers.square_matrix.call(null,cljs.core.count.call(null,features),null);
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"matrix","matrix",803137200),cljs.core.reduce.call(null,((function (vertices,indices,m){
return (function (total,next){
return cljs.core.reduce.call(null,((function (vertices,indices,m){
return (function (total__$1,linked_feature){
return cljs.core.assoc_in.call(null,total__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,indices,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next)),cljs.core.get.call(null,indices,linked_feature)], null),true);
});})(vertices,indices,m))
,total,new cljs.core.Keyword(null,"linkedFeatures","linkedFeatures",-1870710652).cljs$core$IFn$_invoke$arity$1(next));
});})(vertices,indices,m))
,m,features),new cljs.core.Keyword(null,"vertices","vertices",2008905731),vertices,new cljs.core.Keyword(null,"indices","indices",-1218138343),indices);
});
micircle.handlers.handle_all = (function micircle$handlers$handle_all(db,data){
cljs.core.println.call(null,"handling data");

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"raw","raw",1604651272),data),new cljs.core.Keyword(null,"data","data",-232669377),micircle.handlers.feature_matrix.call(null,micircle.handlers.features.call(null,data))),new cljs.core.Keyword(null,"interactors","interactors",1738679830),micircle.handlers.interactors.call(null,data)),new cljs.core.Keyword(null,"participants","participants",673603367),micircle.handlers.participants.call(null,data)),new cljs.core.Keyword(null,"features","features",-1146962336),micircle.handlers.features.call(null,data));
});
micircle.handlers.interactor = (function micircle$handlers$interactor(db,id){
return com.rpl.specter.select_one.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interactors","interactors",1738679830),com.rpl.specter.filterer.call(null,(function (p1__15166_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15166_SHARP_),id);
})),com.rpl.specter.ALL], null),db);
});
micircle.handlers.make_ticks = (function micircle$handlers$make_ticks(node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(node),(5)));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"calculate-view","calculate-view",-785138849),(function (db){
return micircle.handlers.view_calculate_links.call(null,micircle.handlers.generate_textpath_defs.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.map.call(null,(function (p1__15167_SHARP_){
return cljs.core.select_keys.call(null,p1__15167_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"interactorRef","interactorRef",-1025023158)], null));
}),new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.partial.call(null,cljs.core.map,(function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count.call(null,new cljs.core.Keyword(null,"sequence","sequence",926807414).cljs$core$IFn$_invoke$arity$1(micircle.handlers.interactor.call(null,db,new cljs.core.Keyword(null,"interactorRef","interactorRef",-1025023158).cljs$core$IFn$_invoke$arity$1(node)))));
}))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.partial.call(null,cljs.core.map,(function (node){
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"length","length",588987862),(20),new cljs.core.Keyword(null,"small-molecule","small-molecule",-1421390134),true);
} else {
return node;
}
}))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),micircle.handlers.divide_circle),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),micircle.handlers.space_around_circle),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,micircle.handlers.pad_segment,(5)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.partial.call(null,cljs.core.map,micircle.handlers.make_ticks))));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-data","handle-data",1782621981),(function (db,p__15168){
var vec__15169 = p__15168;
var _ = cljs.core.nth.call(null,vec__15169,(0),null);
var data = cljs.core.nth.call(null,vec__15169,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calculate-view","calculate-view",-785138849)], null));

return micircle.handlers.handle_all.call(null,db,data);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"center-unknown","center-unknown",-1017035800),(function (db){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calculate-view","calculate-view",-785138849)], null));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"center","center",-748944368)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-complex-id","set-complex-id",-1821675567),re_frame.core.trim_v,(function (db,p__15172){
var vec__15173 = p__15172;
var id = cljs.core.nth.call(null,vec__15173,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"complex-id","complex-id",-728115735),id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-data","load-data",-1806350928),re_frame.core.trim_v,(function (db){
var c__10991__auto___15226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___15226){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___15226){
return (function (state_15209){
var state_val_15210 = (state_15209[(1)]);
if((state_val_15210 === (1))){
var inst_15177 = new cljs.core.Keyword(null,"complex-id","complex-id",-728115735).cljs$core$IFn$_invoke$arity$1(db);
var inst_15178 = [cljs.core.str("http://www.ebi.ac.uk/intact/complex-ws/export/"),cljs.core.str(inst_15177)].join('');
var inst_15179 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_15180 = [false];
var inst_15181 = cljs.core.PersistentHashMap.fromArrays(inst_15179,inst_15180);
var inst_15182 = cljs_http.client.get.call(null,inst_15178,inst_15181);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15209__$1,(2),inst_15182);
} else {
if((state_val_15210 === (2))){
var inst_15184 = (state_15209[(2)]);
var inst_15185 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_15184);
var inst_15186 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15187 = [new cljs.core.Keyword(null,"data","data",-232669377),com.rpl.specter.ALL,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.some_QMARK_];
var inst_15188 = (new cljs.core.PersistentVector(null,5,(5),inst_15186,inst_15187,null));
var inst_15189 = com.rpl.specter.select.call(null,inst_15188,inst_15185);
var inst_15190 = cljs.core.map.call(null,micircle.utils.protein_length,inst_15189);
var inst_15205 = cljs.core.async.chan.call(null,(1));
var inst_15206 = (function (){var result = inst_15185;
var interactor_ids = inst_15189;
var channels = inst_15190;
var c__10991__auto____$1 = inst_15205;
return ((function (result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226){
return (function (state_15203){
var state_val_15204 = (state_15203[(1)]);
if((state_val_15204 === (1))){
var inst_15191 = cljs.core.PersistentVector.EMPTY;
var inst_15192 = cljs.core.async.merge.call(null,channels);
var inst_15193 = cljs.core.async.reduce.call(null,cljs.core.conj,inst_15191,inst_15192);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15203__$1,(2),inst_15193);
} else {
if((state_val_15204 === (2))){
var inst_15195 = (state_15203[(2)]);
var inst_15196 = (function (){var lengths = inst_15195;
return ((function (lengths,inst_15195,state_val_15204,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226){
return (function (total,next){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),com.rpl.specter.filterer.call(null,((function (lengths,inst_15195,state_val_15204,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226){
return (function (p1__15176_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accession","accession",-1015325932).cljs$core$IFn$_invoke$arity$1(next),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(p1__15176_SHARP_)));
});})(lengths,inst_15195,state_val_15204,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226))
),com.rpl.specter.ALL], null),((function (lengths,inst_15195,state_val_15204,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226){
return (function (x){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"length","length",588987862),(((new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(next) == null))?(100):new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(next)));
});})(lengths,inst_15195,state_val_15204,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226))
,total);
});
;})(lengths,inst_15195,state_val_15204,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226))
})();
var inst_15197 = cljs.core.reduce.call(null,inst_15196,result,inst_15195);
var inst_15198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15199 = [new cljs.core.Keyword(null,"handle-data","handle-data",1782621981),inst_15197];
var inst_15200 = (new cljs.core.PersistentVector(null,2,(5),inst_15198,inst_15199,null));
var inst_15201 = re_frame.core.dispatch.call(null,inst_15200);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15203__$1,inst_15201);
} else {
return null;
}
}
});})(result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226))
;
return ((function (switch__10879__auto__,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226){
return (function() {
var micircle$handlers$state_machine__10880__auto__ = null;
var micircle$handlers$state_machine__10880__auto____0 = (function (){
var statearr_15214 = [null,null,null,null,null,null,null];
(statearr_15214[(0)] = micircle$handlers$state_machine__10880__auto__);

(statearr_15214[(1)] = (1));

return statearr_15214;
});
var micircle$handlers$state_machine__10880__auto____1 = (function (state_15203){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_15203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e15215){if((e15215 instanceof Object)){
var ex__10883__auto__ = e15215;
var statearr_15216_15227 = state_15203;
(statearr_15216_15227[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15228 = state_15203;
state_15203 = G__15228;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
micircle$handlers$state_machine__10880__auto__ = function(state_15203){
switch(arguments.length){
case 0:
return micircle$handlers$state_machine__10880__auto____0.call(this);
case 1:
return micircle$handlers$state_machine__10880__auto____1.call(this,state_15203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
micircle$handlers$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = micircle$handlers$state_machine__10880__auto____0;
micircle$handlers$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = micircle$handlers$state_machine__10880__auto____1;
return micircle$handlers$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226))
})();
var state__10993__auto__ = (function (){var statearr_15217 = f__10992__auto__.call(null);
(statearr_15217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto____$1);

return statearr_15217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});
;})(result,interactor_ids,channels,c__10991__auto____$1,inst_15184,inst_15185,inst_15186,inst_15187,inst_15188,inst_15189,inst_15190,inst_15205,state_val_15210,c__10991__auto___15226))
})();
var inst_15207 = cljs.core.async.impl.dispatch.run.call(null,inst_15206);
var state_15209__$1 = (function (){var statearr_15218 = state_15209;
(statearr_15218[(7)] = inst_15207);

return statearr_15218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15209__$1,inst_15205);
} else {
return null;
}
}
});})(c__10991__auto___15226))
;
return ((function (switch__10879__auto__,c__10991__auto___15226){
return (function() {
var micircle$handlers$state_machine__10880__auto__ = null;
var micircle$handlers$state_machine__10880__auto____0 = (function (){
var statearr_15222 = [null,null,null,null,null,null,null,null];
(statearr_15222[(0)] = micircle$handlers$state_machine__10880__auto__);

(statearr_15222[(1)] = (1));

return statearr_15222;
});
var micircle$handlers$state_machine__10880__auto____1 = (function (state_15209){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_15209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e15223){if((e15223 instanceof Object)){
var ex__10883__auto__ = e15223;
var statearr_15224_15229 = state_15209;
(statearr_15224_15229[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15230 = state_15209;
state_15209 = G__15230;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
micircle$handlers$state_machine__10880__auto__ = function(state_15209){
switch(arguments.length){
case 0:
return micircle$handlers$state_machine__10880__auto____0.call(this);
case 1:
return micircle$handlers$state_machine__10880__auto____1.call(this,state_15209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
micircle$handlers$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = micircle$handlers$state_machine__10880__auto____0;
micircle$handlers$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = micircle$handlers$state_machine__10880__auto____1;
return micircle$handlers$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___15226))
})();
var state__10993__auto__ = (function (){var statearr_15225 = f__10992__auto__.call(null);
(statearr_15225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___15226);

return statearr_15225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___15226))
);


return db;
}));

//# sourceMappingURL=handlers.js.map?rel=1470137670777