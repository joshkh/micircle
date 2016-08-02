// Compiled by ClojureScript 1.9.89 {}
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
}catch (e15047){if((e15047 instanceof Error)){
var _ = e15047;
return cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,json_html.core.str_compare),m);
} else {
throw e15047;

}
}});
json_html.core.sort_set = (function json_html$core$sort_set(s){
try{return cljs.core.into.call(null,cljs.core.sorted_set.call(null),s);
}catch (e15049){if((e15049 instanceof Error)){
var _ = e15049;
return cljs.core.into.call(null,cljs.core.sorted_set_by.call(null,json_html.core.str_compare),s);
} else {
throw e15049;

}
}});
json_html.core.render_collection = (function json_html$core$render_collection(col){
if(cljs.core.empty_QMARK_.call(null,col)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-collection","span.jh-empty-collection",-107581393)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__7027__auto__ = (function json_html$core$render_collection_$_iter__15066(s__15067){
return (new cljs.core.LazySeq(null,(function (){
var s__15067__$1 = s__15067;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15067__$1);
if(temp__4657__auto__){
var s__15067__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15067__$2)){
var c__7025__auto__ = cljs.core.chunk_first.call(null,s__15067__$2);
var size__7026__auto__ = cljs.core.count.call(null,c__7025__auto__);
var b__15069 = cljs.core.chunk_buffer.call(null,size__7026__auto__);
if((function (){var i__15068 = (0);
while(true){
if((i__15068 < size__7026__auto__)){
var vec__15076 = cljs.core._nth.call(null,c__7025__auto__,i__15068);
var i = cljs.core.nth.call(null,vec__15076,(0),null);
var v = cljs.core.nth.call(null,vec__15076,(1),null);
cljs.core.chunk_append.call(null,b__15069,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15082 = (i__15068 + (1));
i__15068 = G__15082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15069),json_html$core$render_collection_$_iter__15066.call(null,cljs.core.chunk_rest.call(null,s__15067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15069),null);
}
} else {
var vec__15079 = cljs.core.first.call(null,s__15067__$2);
var i = cljs.core.nth.call(null,vec__15079,(0),null);
var v = cljs.core.nth.call(null,vec__15079,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),json_html$core$render_collection_$_iter__15066.call(null,cljs.core.rest.call(null,s__15067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7027__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,col));
})()], null)], null);
}
});
json_html.core.render_set = (function json_html$core$render_set(s){
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-set","div.jh-type-set",-367189823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-set","span.jh-empty-set",-1364654969)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7027__auto__ = (function json_html$core$render_set_$_iter__15087(s__15088){
return (new cljs.core.LazySeq(null,(function (){
var s__15088__$1 = s__15088;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15088__$1);
if(temp__4657__auto__){
var s__15088__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15088__$2)){
var c__7025__auto__ = cljs.core.chunk_first.call(null,s__15088__$2);
var size__7026__auto__ = cljs.core.count.call(null,c__7025__auto__);
var b__15090 = cljs.core.chunk_buffer.call(null,size__7026__auto__);
if((function (){var i__15089 = (0);
while(true){
if((i__15089 < size__7026__auto__)){
var item = cljs.core._nth.call(null,c__7025__auto__,i__15089);
cljs.core.chunk_append.call(null,b__15090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null));

var G__15091 = (i__15089 + (1));
i__15089 = G__15091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15090),json_html$core$render_set_$_iter__15087.call(null,cljs.core.chunk_rest.call(null,s__15088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15090),null);
}
} else {
var item = cljs.core.first.call(null,s__15088__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null),json_html$core$render_set_$_iter__15087.call(null,cljs.core.rest.call(null,s__15088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7027__auto__.call(null,json_html.core.sort_set.call(null,s));
})()], null);
}
});
json_html.core.render_map = (function json_html$core$render_map(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-map","span.jh-empty-map",-2061532971)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__7027__auto__ = (function json_html$core$render_map_$_iter__15108(s__15109){
return (new cljs.core.LazySeq(null,(function (){
var s__15109__$1 = s__15109;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15109__$1);
if(temp__4657__auto__){
var s__15109__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15109__$2)){
var c__7025__auto__ = cljs.core.chunk_first.call(null,s__15109__$2);
var size__7026__auto__ = cljs.core.count.call(null,c__7025__auto__);
var b__15111 = cljs.core.chunk_buffer.call(null,size__7026__auto__);
if((function (){var i__15110 = (0);
while(true){
if((i__15110 < size__7026__auto__)){
var vec__15118 = cljs.core._nth.call(null,c__7025__auto__,i__15110);
var k = cljs.core.nth.call(null,vec__15118,(0),null);
var v = cljs.core.nth.call(null,vec__15118,(1),null);
cljs.core.chunk_append.call(null,b__15111,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__15124 = (i__15110 + (1));
i__15110 = G__15124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15111),json_html$core$render_map_$_iter__15108.call(null,cljs.core.chunk_rest.call(null,s__15109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15111),null);
}
} else {
var vec__15121 = cljs.core.first.call(null,s__15109__$2);
var k = cljs.core.nth.call(null,vec__15121,(0),null);
var v = cljs.core.nth.call(null,vec__15121,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),json_html$core$render_map_$_iter__15108.call(null,cljs.core.rest.call(null,s__15109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7027__auto__.call(null,json_html.core.sort_map.call(null,m));
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

//# sourceMappingURL=core.js.map?rel=1470137670533