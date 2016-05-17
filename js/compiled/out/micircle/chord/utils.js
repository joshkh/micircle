// Compiled by ClojureScript 1.7.228 {}
goog.provide('micircle.chord.utils');
goog.require('cljs.core');
micircle.chord.utils.pi = Math.PI;
/**
 * Return a CSS transformation for centering an element.
 */
micircle.chord.utils.center = (function micircle$chord$utils$center(width,height){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((width / (2))),cljs.core.str(","),cljs.core.str((height / (2))),cljs.core.str(")")].join('')], null);
});
/**
 * Convert polar coordinates to cartesian coordinates.
 *   TODO: confirm that x and y should not be reversed.
 */
micircle.chord.utils.polarToCartesian = (function micircle$chord$utils$polarToCartesian(center_x,center_y,radius,angle_in_degrees){
var angle_in_radians = ((angle_in_degrees - (90)) * (micircle.chord.utils.pi / 180.0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(center_x + (radius * Math.cos(angle_in_radians))),new cljs.core.Keyword(null,"y","y",-1757859776),(center_y + (radius * Math.sin(angle_in_radians)))], null);
});
/**
 * Build an SVG path that describes a link between two arcs.
 */
micircle.chord.utils.describe_link = (function micircle$chord$utils$describe_link(x,y,radius,start_angle_1,end_angle_1,start_angle_2,end_angle_2){
var start_1 = micircle.chord.utils.polarToCartesian.call(null,x,y,radius,end_angle_1);
var end_1 = micircle.chord.utils.polarToCartesian.call(null,x,y,radius,start_angle_1);
var start_2 = micircle.chord.utils.polarToCartesian.call(null,x,y,radius,end_angle_2);
var end_2 = micircle.chord.utils.polarToCartesian.call(null,x,y,radius,start_angle_2);
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_1),"A",radius,radius,(0),(0),(1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_1),"Q",(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_2),"A",radius,radius,(0),(0),(1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_2),"Q",(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_1),"Z"], null));
});
/**
 * Build an SVG path that describes a circular arc.
 */
micircle.chord.utils.describe_arc = (function micircle$chord$utils$describe_arc(x,y,radius,start_angle,end_angle){
var start = micircle.chord.utils.polarToCartesian.call(null,x,y,radius,end_angle);
var end = micircle.chord.utils.polarToCartesian.call(null,x,y,radius,start_angle);
var arc_sweep = ((((end_angle - start_angle) <= (180)))?(0):(1));
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start),"A",radius,radius,(0),arc_sweep,(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end)], null));
});

//# sourceMappingURL=utils.js.map?rel=1463475580946