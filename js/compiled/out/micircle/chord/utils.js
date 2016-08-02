// Compiled by ClojureScript 1.9.89 {}
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
micircle.chord.utils.polar_to_cartesian = (function micircle$chord$utils$polar_to_cartesian(center_x,center_y,radius,angle_in_degrees){
var angle_in_radians = ((angle_in_degrees - (90)) * (micircle.chord.utils.pi / 180.0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(center_x + (radius * Math.cos(angle_in_radians))),new cljs.core.Keyword(null,"y","y",-1757859776),(center_y + (radius * Math.sin(angle_in_radians)))], null);
});
/**
 * Build an SVG path that describes a link between two arcs.
 */
micircle.chord.utils.describe_link = (function micircle$chord$utils$describe_link(x,y,radius,start_angle_1,end_angle_1,start_angle_2,end_angle_2){
var start_1 = micircle.chord.utils.polar_to_cartesian.call(null,x,y,radius,end_angle_1);
var end_1 = micircle.chord.utils.polar_to_cartesian.call(null,x,y,radius,start_angle_1);
var start_2 = micircle.chord.utils.polar_to_cartesian.call(null,x,y,radius,end_angle_2);
var end_2 = micircle.chord.utils.polar_to_cartesian.call(null,x,y,radius,start_angle_2);
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_1),"A",radius,radius,(0),(0),(1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_1),"Q",(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_2),"A",radius,radius,(0),(0),(1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_2),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_2),"Q",(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_1),"Z"], null));
});
/**
 * Build an SVG path that describes a circular arc. Arcs are drawn clockwise
 *   or counter-clockwise to remain upright (useful for things like textpaths).
 */
micircle.chord.utils.describe_arc = (function micircle$chord$utils$describe_arc(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14205 = arguments.length;
var i__7323__auto___14206 = (0);
while(true){
if((i__7323__auto___14206 < len__7322__auto___14205)){
args__7329__auto__.push((arguments[i__7323__auto___14206]));

var G__14207 = (i__7323__auto___14206 + (1));
i__7323__auto___14206 = G__14207;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((5) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((5)),(0),null)):null);
return micircle.chord.utils.describe_arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7330__auto__);
});

micircle.chord.utils.describe_arc.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,radius,start_angle,end_angle,p__14201){
var vec__14202 = p__14201;
var upright_QMARK_ = cljs.core.nth.call(null,vec__14202,(0),null);
var start = micircle.chord.utils.polar_to_cartesian.call(null,x,y,radius,start_angle);
var end = micircle.chord.utils.polar_to_cartesian.call(null,x,y,radius,end_angle);
var diff = (end_angle - start_angle);
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end),"A",radius,radius,(0),(0),(0),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start)], null));
});

micircle.chord.utils.describe_arc.cljs$lang$maxFixedArity = (5);

micircle.chord.utils.describe_arc.cljs$lang$applyTo = (function (seq14195){
var G__14196 = cljs.core.first.call(null,seq14195);
var seq14195__$1 = cljs.core.next.call(null,seq14195);
var G__14197 = cljs.core.first.call(null,seq14195__$1);
var seq14195__$2 = cljs.core.next.call(null,seq14195__$1);
var G__14198 = cljs.core.first.call(null,seq14195__$2);
var seq14195__$3 = cljs.core.next.call(null,seq14195__$2);
var G__14199 = cljs.core.first.call(null,seq14195__$3);
var seq14195__$4 = cljs.core.next.call(null,seq14195__$3);
var G__14200 = cljs.core.first.call(null,seq14195__$4);
var seq14195__$5 = cljs.core.next.call(null,seq14195__$4);
return micircle.chord.utils.describe_arc.cljs$core$IFn$_invoke$arity$variadic(G__14196,G__14197,G__14198,G__14199,G__14200,seq14195__$5);
});

micircle.chord.utils.trim_arc = (function micircle$chord$utils$trim_arc(center_x,center_y,radius,point_x,point_y,distance){
var current_theta = Math.atan2((point_x - center_x),(point_y - center_y));
var delta_theta = (distance / radius);
return micircle.chord.utils.polar_to_cartesian.call(null,(0),(0),radius,delta_theta);
});

//# sourceMappingURL=utils.js.map?rel=1470137666186