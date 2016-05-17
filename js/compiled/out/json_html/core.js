// Compiled by ClojureScript 1.7.228 {}
goog.provide('json_html.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hiccups.runtime');
json_html.core.escape_html = (function json_html$core$escape_html(s){
return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;",">","&gt;","<","&lt;","\"","&quot;"], null));
});
json_html.core.render_keyword = (function json_html$core$render_keyword(k){
return clojure.string.join.call(null,"/",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,k)));
});
json_html.core.str_compare = (function json_html$core$str_compare(k1,k2){
return cljs.core.compare.call(null,[cljs.core.str(k1)].join(''),[cljs.core.str(k2)].join(''));
});
json_html.core.sort_map = (function json_html$core$sort_map(m){
try{return cljs.core.into.call(null,cljs.core.sorted_map.call(null),m);
}catch (e24593){if((e24593 instanceof Error)){
var _ = e24593;
return cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,json_html.core.str_compare),m);
} else {
throw e24593;

}
}});
json_html.core.sort_set = (function json_html$core$sort_set(s){
try{return cljs.core.into.call(null,cljs.core.sorted_set.call(null),s);
}catch (e24595){if((e24595 instanceof Error)){
var _ = e24595;
return cljs.core.into.call(null,cljs.core.sorted_set_by.call(null,json_html.core.str_compare),s);
} else {
throw e24595;

}
}});
json_html.core.render_collection = (function json_html$core$render_collection(col){
if(cljs.core.empty_QMARK_.call(null,col)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-collection","span.jh-empty-collection",-107581393)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__19078__auto__ = (function json_html$core$render_collection_$_iter__24604(s__24605){
return (new cljs.core.LazySeq(null,(function (){
var s__24605__$1 = s__24605;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24605__$1);
if(temp__4425__auto__){
var s__24605__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24605__$2)){
var c__19076__auto__ = cljs.core.chunk_first.call(null,s__24605__$2);
var size__19077__auto__ = cljs.core.count.call(null,c__19076__auto__);
var b__24607 = cljs.core.chunk_buffer.call(null,size__19077__auto__);
if((function (){var i__24606 = (0);
while(true){
if((i__24606 < size__19077__auto__)){
var vec__24610 = cljs.core._nth.call(null,c__19076__auto__,i__24606);
var i = cljs.core.nth.call(null,vec__24610,(0),null);
var v = cljs.core.nth.call(null,vec__24610,(1),null);
cljs.core.chunk_append.call(null,b__24607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__24612 = (i__24606 + (1));
i__24606 = G__24612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24607),json_html$core$render_collection_$_iter__24604.call(null,cljs.core.chunk_rest.call(null,s__24605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24607),null);
}
} else {
var vec__24611 = cljs.core.first.call(null,s__24605__$2);
var i = cljs.core.nth.call(null,vec__24611,(0),null);
var v = cljs.core.nth.call(null,vec__24611,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),json_html$core$render_collection_$_iter__24604.call(null,cljs.core.rest.call(null,s__24605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19078__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,col));
})()], null)], null);
}
});
json_html.core.render_set = (function json_html$core$render_set(s){
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-set","div.jh-type-set",-367189823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-set","span.jh-empty-set",-1364654969)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19078__auto__ = (function json_html$core$render_set_$_iter__24617(s__24618){
return (new cljs.core.LazySeq(null,(function (){
var s__24618__$1 = s__24618;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24618__$1);
if(temp__4425__auto__){
var s__24618__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24618__$2)){
var c__19076__auto__ = cljs.core.chunk_first.call(null,s__24618__$2);
var size__19077__auto__ = cljs.core.count.call(null,c__19076__auto__);
var b__24620 = cljs.core.chunk_buffer.call(null,size__19077__auto__);
if((function (){var i__24619 = (0);
while(true){
if((i__24619 < size__19077__auto__)){
var item = cljs.core._nth.call(null,c__19076__auto__,i__24619);
cljs.core.chunk_append.call(null,b__24620,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null));

var G__24621 = (i__24619 + (1));
i__24619 = G__24621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24620),json_html$core$render_set_$_iter__24617.call(null,cljs.core.chunk_rest.call(null,s__24618__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24620),null);
}
} else {
var item = cljs.core.first.call(null,s__24618__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null),json_html$core$render_set_$_iter__24617.call(null,cljs.core.rest.call(null,s__24618__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19078__auto__.call(null,json_html.core.sort_set.call(null,s));
})()], null);
}
});
json_html.core.render_map = (function json_html$core$render_map(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-map","span.jh-empty-map",-2061532971)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__19078__auto__ = (function json_html$core$render_map_$_iter__24630(s__24631){
return (new cljs.core.LazySeq(null,(function (){
var s__24631__$1 = s__24631;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24631__$1);
if(temp__4425__auto__){
var s__24631__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24631__$2)){
var c__19076__auto__ = cljs.core.chunk_first.call(null,s__24631__$2);
var size__19077__auto__ = cljs.core.count.call(null,c__19076__auto__);
var b__24633 = cljs.core.chunk_buffer.call(null,size__19077__auto__);
if((function (){var i__24632 = (0);
while(true){
if((i__24632 < size__19077__auto__)){
var vec__24636 = cljs.core._nth.call(null,c__19076__auto__,i__24632);
var k = cljs.core.nth.call(null,vec__24636,(0),null);
var v = cljs.core.nth.call(null,vec__24636,(1),null);
cljs.core.chunk_append.call(null,b__24633,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__24638 = (i__24632 + (1));
i__24632 = G__24638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24633),json_html$core$render_map_$_iter__24630.call(null,cljs.core.chunk_rest.call(null,s__24631__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24633),null);
}
} else {
var vec__24637 = cljs.core.first.call(null,s__24631__$2);
var k = cljs.core.nth.call(null,vec__24637,(0),null);
var v = cljs.core.nth.call(null,vec__24637,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),json_html$core$render_map_$_iter__24630.call(null,cljs.core.rest.call(null,s__24631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19078__auto__.call(null,json_html.core.sort_map.call(null,m));
})()], null)], null);
}
});
json_html.core.render_string = (function json_html$core$render_string(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),((clojure.string.blank_QMARK_.call(null,s))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-string","span.jh-empty-string",1227187446)], null):json_html.core.escape_html.call(null,s))], null);
});
json_html.core.render = (function json_html$core$render(v){
var t = cljs.core.type.call(null,v);
if(cljs.core._EQ_.call(null,t,cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.render_keyword.call(null,v)], null);
} else {
if(cljs.core._EQ_.call(null,t,cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),[cljs.core.str(v)].join('')], null);
} else {
if(cljs.core._EQ_.call(null,t,String)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.escape_html.call(null,v)], null);
} else {
if(cljs.core._EQ_.call(null,t,Date)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-date","span.jh-type-date",-1243309956),v.toString()], null);
} else {
if(cljs.core._EQ_.call(null,t,Boolean)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-bool","span.jh-type-bool",53751640),[cljs.core.str(v)].join('')], null);
} else {
if(cljs.core._EQ_.call(null,t,Number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-number","span.jh-type-number",1495617844),v], null);
} else {
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (1024))) || (v.cljs$core$IMap$))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,v))){
return json_html.core.render_map.call(null,v);
} else {
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (4096))) || (v.cljs$core$ISet$))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,v))){
return json_html.core.render_set.call(null,v);
} else {
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (8))) || (v.cljs$core$ICollection$))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,v))){
return json_html.core.render_collection.call(null,v);
} else {
return null;

}
}
}
}
}
}
}
}
}
});
json_html.core.edn__GT_hiccup = (function json_html$core$edn__GT_hiccup(edn){
return json_html.core.render.call(null,edn);
});
json_html.core.edn__GT_html = (function json_html$core$edn__GT_html(edn){
return [cljs.core.str(hiccups.runtime.render_html.call(null,json_html.core.edn__GT_hiccup.call(null,edn)))].join('');
});
json_html.core.json__GT_hiccup = (function json_html$core$json__GT_hiccup(json){
return json_html.core.render.call(null,cljs.core.js__GT_clj.call(null,json));
});
json_html.core.json__GT_html = (function json_html$core$json__GT_html(json){
return [cljs.core.str(hiccups.runtime.render_html.call(null,json_html.core.json__GT_hiccup.call(null,json)))].join('');
});

//# sourceMappingURL=core.js.map?rel=1463475582498