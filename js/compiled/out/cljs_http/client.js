// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__18294__auto__ = v;
if(cljs.core.truth_(and__18294__auto__)){
return (v > (0));
} else {
return and__18294__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__24650_SHARP_,p2__24649_SHARP_){
var vec__24652 = clojure.string.split.call(null,p2__24649_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__24652,(0),null);
var v = cljs.core.nth.call(null,vec__24652,(1),null);
return cljs.core.assoc.call(null,p1__24650_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__24653_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__24653_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__24654){
var vec__24656 = p__24654;
var k = cljs.core.nth.call(null,vec__24656,(0),null);
var v = cljs.core.nth.call(null,vec__24656,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__24657_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__24657_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__18294__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__18294__auto__){
var and__18294__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__18294__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__18294__auto____$1;
}
} else {
return and__18294__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__24658_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24658_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24663 = arguments.length;
var i__19365__auto___24664 = (0);
while(true){
if((i__19365__auto___24664 < len__19364__auto___24663)){
args__19371__auto__.push((arguments[i__19365__auto___24664]));

var G__24665 = (i__19365__auto___24664 + (1));
i__19365__auto___24664 = G__24665;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24661){
var vec__24662 = p__24661;
var default_headers = cljs.core.nth.call(null,vec__24662,(0),null);
return ((function (vec__24662,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__18306__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24662,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq24659){
var G__24660 = cljs.core.first.call(null,seq24659);
var seq24659__$1 = cljs.core.next.call(null,seq24659);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__24660,seq24659__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24670 = arguments.length;
var i__19365__auto___24671 = (0);
while(true){
if((i__19365__auto___24671 < len__19364__auto___24670)){
args__19371__auto__.push((arguments[i__19365__auto___24671]));

var G__24672 = (i__19365__auto___24671 + (1));
i__19365__auto___24671 = G__24672;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24668){
var vec__24669 = p__24668;
var accept = cljs.core.nth.call(null,vec__24669,(0),null);
return ((function (vec__24669,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__18306__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24669,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq24666){
var G__24667 = cljs.core.first.call(null,seq24666);
var seq24666__$1 = cljs.core.next.call(null,seq24666);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__24667,seq24666__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24677 = arguments.length;
var i__19365__auto___24678 = (0);
while(true){
if((i__19365__auto___24678 < len__19364__auto___24677)){
args__19371__auto__.push((arguments[i__19365__auto___24678]));

var G__24679 = (i__19365__auto___24678 + (1));
i__19365__auto___24678 = G__24679;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24675){
var vec__24676 = p__24675;
var content_type = cljs.core.nth.call(null,vec__24676,(0),null);
return ((function (vec__24676,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__18306__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24676,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq24673){
var G__24674 = cljs.core.first.call(null,seq24673);
var seq24673__$1 = cljs.core.next.call(null,seq24673);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__24674,seq24673__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__24682 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24682__$1 = ((((!((map__24682 == null)))?((((map__24682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24682):map__24682);
var encoding = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__24688 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24688__$1 = ((((!((map__24688 == null)))?((((map__24688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24688):map__24688);
var decoding = cljs.core.get.call(null,map__24688__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__24688__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__24688,map__24688__$1,decoding,decoding_opts){
return (function (p1__24684_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__24684_SHARP_,decoding,decoding_opts);
});})(map__24688,map__24688__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__24688,map__24688__$1,decoding,decoding_opts,transit_decode){
return (function (p1__24685_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24685_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__24688,map__24688__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__24690_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24690_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__24694){
var map__24695 = p__24694;
var map__24695__$1 = ((((!((map__24695 == null)))?((((map__24695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24695):map__24695);
var req = map__24695__$1;
var query_params = cljs.core.get.call(null,map__24695__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__24700){
var map__24701 = p__24700;
var map__24701__$1 = ((((!((map__24701 == null)))?((((map__24701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24701):map__24701);
var request = map__24701__$1;
var form_params = cljs.core.get.call(null,map__24701__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__24701__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__24701__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__18294__auto__ = form_params;
if(cljs.core.truth_(and__18294__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__18294__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__24709_24715 = cljs.core.seq.call(null,params);
var chunk__24710_24716 = null;
var count__24711_24717 = (0);
var i__24712_24718 = (0);
while(true){
if((i__24712_24718 < count__24711_24717)){
var vec__24713_24719 = cljs.core._nth.call(null,chunk__24710_24716,i__24712_24718);
var k_24720 = cljs.core.nth.call(null,vec__24713_24719,(0),null);
var v_24721 = cljs.core.nth.call(null,vec__24713_24719,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_24721)){
form_data.append(cljs.core.name.call(null,k_24720),cljs.core.first.call(null,v_24721),cljs.core.second.call(null,v_24721));
} else {
form_data.append(cljs.core.name.call(null,k_24720),v_24721);
}

var G__24722 = seq__24709_24715;
var G__24723 = chunk__24710_24716;
var G__24724 = count__24711_24717;
var G__24725 = (i__24712_24718 + (1));
seq__24709_24715 = G__24722;
chunk__24710_24716 = G__24723;
count__24711_24717 = G__24724;
i__24712_24718 = G__24725;
continue;
} else {
var temp__4425__auto___24726 = cljs.core.seq.call(null,seq__24709_24715);
if(temp__4425__auto___24726){
var seq__24709_24727__$1 = temp__4425__auto___24726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24709_24727__$1)){
var c__19109__auto___24728 = cljs.core.chunk_first.call(null,seq__24709_24727__$1);
var G__24729 = cljs.core.chunk_rest.call(null,seq__24709_24727__$1);
var G__24730 = c__19109__auto___24728;
var G__24731 = cljs.core.count.call(null,c__19109__auto___24728);
var G__24732 = (0);
seq__24709_24715 = G__24729;
chunk__24710_24716 = G__24730;
count__24711_24717 = G__24731;
i__24712_24718 = G__24732;
continue;
} else {
var vec__24714_24733 = cljs.core.first.call(null,seq__24709_24727__$1);
var k_24734 = cljs.core.nth.call(null,vec__24714_24733,(0),null);
var v_24735 = cljs.core.nth.call(null,vec__24714_24733,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_24735)){
form_data.append(cljs.core.name.call(null,k_24734),cljs.core.first.call(null,v_24735),cljs.core.second.call(null,v_24735));
} else {
form_data.append(cljs.core.name.call(null,k_24734),v_24735);
}

var G__24736 = cljs.core.next.call(null,seq__24709_24727__$1);
var G__24737 = null;
var G__24738 = (0);
var G__24739 = (0);
seq__24709_24715 = G__24736;
chunk__24710_24716 = G__24737;
count__24711_24717 = G__24738;
i__24712_24718 = G__24739;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__24743){
var map__24744 = p__24743;
var map__24744__$1 = ((((!((map__24744 == null)))?((((map__24744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24744):map__24744);
var request = map__24744__$1;
var multipart_params = cljs.core.get.call(null,map__24744__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__24744__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__18294__auto__ = multipart_params;
if(cljs.core.truth_(and__18294__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__18294__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__24746_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__24746_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__24751){
var map__24752 = p__24751;
var map__24752__$1 = ((((!((map__24752 == null)))?((((map__24752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24752):map__24752);
var req = map__24752__$1;
var query_params = cljs.core.get.call(null,map__24752__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__24752,map__24752__$1,req,query_params){
return (function (p1__24747_SHARP_){
return cljs.core.merge.call(null,p1__24747_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__24752,map__24752__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24758 = arguments.length;
var i__19365__auto___24759 = (0);
while(true){
if((i__19365__auto___24759 < len__19364__auto___24758)){
args__19371__auto__.push((arguments[i__19365__auto___24759]));

var G__24760 = (i__19365__auto___24759 + (1));
i__19365__auto___24759 = G__24760;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24756){
var vec__24757 = p__24756;
var credentials = cljs.core.nth.call(null,vec__24757,(0),null);
return ((function (vec__24757,credentials){
return (function (req){
var credentials__$1 = (function (){var or__18306__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__24757,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq24754){
var G__24755 = cljs.core.first.call(null,seq24754);
var seq24754__$1 = cljs.core.next.call(null,seq24754);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__24755,seq24754__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24765 = arguments.length;
var i__19365__auto___24766 = (0);
while(true){
if((i__19365__auto___24766 < len__19364__auto___24765)){
args__19371__auto__.push((arguments[i__19365__auto___24766]));

var G__24767 = (i__19365__auto___24766 + (1));
i__19365__auto___24766 = G__24767;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24763){
var vec__24764 = p__24763;
var req = cljs.core.nth.call(null,vec__24764,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq24761){
var G__24762 = cljs.core.first.call(null,seq24761);
var seq24761__$1 = cljs.core.next.call(null,seq24761);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__24762,seq24761__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24772 = arguments.length;
var i__19365__auto___24773 = (0);
while(true){
if((i__19365__auto___24773 < len__19364__auto___24772)){
args__19371__auto__.push((arguments[i__19365__auto___24773]));

var G__24774 = (i__19365__auto___24773 + (1));
i__19365__auto___24773 = G__24774;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24770){
var vec__24771 = p__24770;
var req = cljs.core.nth.call(null,vec__24771,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq24768){
var G__24769 = cljs.core.first.call(null,seq24768);
var seq24768__$1 = cljs.core.next.call(null,seq24768);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__24769,seq24768__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24779 = arguments.length;
var i__19365__auto___24780 = (0);
while(true){
if((i__19365__auto___24780 < len__19364__auto___24779)){
args__19371__auto__.push((arguments[i__19365__auto___24780]));

var G__24781 = (i__19365__auto___24780 + (1));
i__19365__auto___24780 = G__24781;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24777){
var vec__24778 = p__24777;
var req = cljs.core.nth.call(null,vec__24778,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq24775){
var G__24776 = cljs.core.first.call(null,seq24775);
var seq24775__$1 = cljs.core.next.call(null,seq24775);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__24776,seq24775__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24786 = arguments.length;
var i__19365__auto___24787 = (0);
while(true){
if((i__19365__auto___24787 < len__19364__auto___24786)){
args__19371__auto__.push((arguments[i__19365__auto___24787]));

var G__24788 = (i__19365__auto___24787 + (1));
i__19365__auto___24787 = G__24788;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24784){
var vec__24785 = p__24784;
var req = cljs.core.nth.call(null,vec__24785,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq24782){
var G__24783 = cljs.core.first.call(null,seq24782);
var seq24782__$1 = cljs.core.next.call(null,seq24782);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__24783,seq24782__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24793 = arguments.length;
var i__19365__auto___24794 = (0);
while(true){
if((i__19365__auto___24794 < len__19364__auto___24793)){
args__19371__auto__.push((arguments[i__19365__auto___24794]));

var G__24795 = (i__19365__auto___24794 + (1));
i__19365__auto___24794 = G__24795;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24791){
var vec__24792 = p__24791;
var req = cljs.core.nth.call(null,vec__24792,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq24789){
var G__24790 = cljs.core.first.call(null,seq24789);
var seq24789__$1 = cljs.core.next.call(null,seq24789);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__24790,seq24789__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24800 = arguments.length;
var i__19365__auto___24801 = (0);
while(true){
if((i__19365__auto___24801 < len__19364__auto___24800)){
args__19371__auto__.push((arguments[i__19365__auto___24801]));

var G__24802 = (i__19365__auto___24801 + (1));
i__19365__auto___24801 = G__24802;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24798){
var vec__24799 = p__24798;
var req = cljs.core.nth.call(null,vec__24799,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq24796){
var G__24797 = cljs.core.first.call(null,seq24796);
var seq24796__$1 = cljs.core.next.call(null,seq24796);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__24797,seq24796__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24807 = arguments.length;
var i__19365__auto___24808 = (0);
while(true){
if((i__19365__auto___24808 < len__19364__auto___24807)){
args__19371__auto__.push((arguments[i__19365__auto___24808]));

var G__24809 = (i__19365__auto___24808 + (1));
i__19365__auto___24808 = G__24809;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24805){
var vec__24806 = p__24805;
var req = cljs.core.nth.call(null,vec__24806,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq24803){
var G__24804 = cljs.core.first.call(null,seq24803);
var seq24803__$1 = cljs.core.next.call(null,seq24803);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__24804,seq24803__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24814 = arguments.length;
var i__19365__auto___24815 = (0);
while(true){
if((i__19365__auto___24815 < len__19364__auto___24814)){
args__19371__auto__.push((arguments[i__19365__auto___24815]));

var G__24816 = (i__19365__auto___24815 + (1));
i__19365__auto___24815 = G__24816;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24812){
var vec__24813 = p__24812;
var req = cljs.core.nth.call(null,vec__24813,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq24810){
var G__24811 = cljs.core.first.call(null,seq24810);
var seq24810__$1 = cljs.core.next.call(null,seq24810);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__24811,seq24810__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__19371__auto__ = [];
var len__19364__auto___24821 = arguments.length;
var i__19365__auto___24822 = (0);
while(true){
if((i__19365__auto___24822 < len__19364__auto___24821)){
args__19371__auto__.push((arguments[i__19365__auto___24822]));

var G__24823 = (i__19365__auto___24822 + (1));
i__19365__auto___24822 = G__24823;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24819){
var vec__24820 = p__24819;
var req = cljs.core.nth.call(null,vec__24820,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq24817){
var G__24818 = cljs.core.first.call(null,seq24817);
var seq24817__$1 = cljs.core.next.call(null,seq24817);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__24818,seq24817__$1);
});

//# sourceMappingURL=client.js.map?rel=1463475582780