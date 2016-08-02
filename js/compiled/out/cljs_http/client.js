// Compiled by ClojureScript 1.9.89 {}
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
if(cljs.core.truth_((function (){var and__6235__auto__ = v;
if(cljs.core.truth_(and__6235__auto__)){
return (v > (0));
} else {
return and__6235__auto__;
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
return cljs.core.reduce.call(null,(function (p1__14245_SHARP_,p2__14244_SHARP_){
var vec__14249 = clojure.string.split.call(null,p2__14244_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__14249,(0),null);
var v = cljs.core.nth.call(null,vec__14249,(1),null);
return cljs.core.assoc.call(null,p1__14245_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__14252_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__14252_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__14253){
var vec__14257 = p__14253;
var k = cljs.core.nth.call(null,vec__14257,(0),null);
var v = cljs.core.nth.call(null,vec__14257,(1),null);
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
return (function (p1__14260_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__14260_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__6235__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6235__auto__){
var and__6235__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6235__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6235__auto____$1;
}
} else {
return and__6235__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__14261_SHARP_){
return cljs_http.client.decode_body.call(null,p1__14261_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14268 = arguments.length;
var i__7323__auto___14269 = (0);
while(true){
if((i__7323__auto___14269 < len__7322__auto___14268)){
args__7329__auto__.push((arguments[i__7323__auto___14269]));

var G__14270 = (i__7323__auto___14269 + (1));
i__7323__auto___14269 = G__14270;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__14264){
var vec__14265 = p__14264;
var default_headers = cljs.core.nth.call(null,vec__14265,(0),null);
return ((function (vec__14265,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__14265,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq14262){
var G__14263 = cljs.core.first.call(null,seq14262);
var seq14262__$1 = cljs.core.next.call(null,seq14262);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__14263,seq14262__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14277 = arguments.length;
var i__7323__auto___14278 = (0);
while(true){
if((i__7323__auto___14278 < len__7322__auto___14277)){
args__7329__auto__.push((arguments[i__7323__auto___14278]));

var G__14279 = (i__7323__auto___14278 + (1));
i__7323__auto___14278 = G__14279;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__14273){
var vec__14274 = p__14273;
var accept = cljs.core.nth.call(null,vec__14274,(0),null);
return ((function (vec__14274,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__14274,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq14271){
var G__14272 = cljs.core.first.call(null,seq14271);
var seq14271__$1 = cljs.core.next.call(null,seq14271);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__14272,seq14271__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14286 = arguments.length;
var i__7323__auto___14287 = (0);
while(true){
if((i__7323__auto___14287 < len__7322__auto___14286)){
args__7329__auto__.push((arguments[i__7323__auto___14287]));

var G__14288 = (i__7323__auto___14287 + (1));
i__7323__auto___14287 = G__14288;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__14282){
var vec__14283 = p__14282;
var content_type = cljs.core.nth.call(null,vec__14283,(0),null);
return ((function (vec__14283,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__14283,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq14280){
var G__14281 = cljs.core.first.call(null,seq14280);
var seq14280__$1 = cljs.core.next.call(null,seq14280);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__14281,seq14280__$1);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__14291 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__14291__$1 = ((((!((map__14291 == null)))?((((map__14291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14291):map__14291);
var encoding = cljs.core.get.call(null,map__14291__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__14291__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__14297 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__14297__$1 = ((((!((map__14297 == null)))?((((map__14297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14297):map__14297);
var decoding = cljs.core.get.call(null,map__14297__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__14297__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__14297,map__14297__$1,decoding,decoding_opts){
return (function (p1__14293_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__14293_SHARP_,decoding,decoding_opts);
});})(map__14297,map__14297__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__14297,map__14297__$1,decoding,decoding_opts,transit_decode){
return (function (p1__14294_SHARP_){
return cljs_http.client.decode_body.call(null,p1__14294_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__14297,map__14297__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__14299_SHARP_){
return cljs_http.client.decode_body.call(null,p1__14299_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__14303){
var map__14304 = p__14303;
var map__14304__$1 = ((((!((map__14304 == null)))?((((map__14304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14304):map__14304);
var req = map__14304__$1;
var query_params = cljs.core.get.call(null,map__14304__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__14309){
var map__14310 = p__14309;
var map__14310__$1 = ((((!((map__14310 == null)))?((((map__14310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14310):map__14310);
var request = map__14310__$1;
var form_params = cljs.core.get.call(null,map__14310__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__14310__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__14310__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6235__auto__ = form_params;
if(cljs.core.truth_(and__6235__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6235__auto__;
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
var seq__14322_14332 = cljs.core.seq.call(null,params);
var chunk__14323_14333 = null;
var count__14324_14334 = (0);
var i__14325_14335 = (0);
while(true){
if((i__14325_14335 < count__14324_14334)){
var vec__14326_14336 = cljs.core._nth.call(null,chunk__14323_14333,i__14325_14335);
var k_14337 = cljs.core.nth.call(null,vec__14326_14336,(0),null);
var v_14338 = cljs.core.nth.call(null,vec__14326_14336,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_14338)){
form_data.append(cljs.core.name.call(null,k_14337),cljs.core.first.call(null,v_14338),cljs.core.second.call(null,v_14338));
} else {
form_data.append(cljs.core.name.call(null,k_14337),v_14338);
}

var G__14339 = seq__14322_14332;
var G__14340 = chunk__14323_14333;
var G__14341 = count__14324_14334;
var G__14342 = (i__14325_14335 + (1));
seq__14322_14332 = G__14339;
chunk__14323_14333 = G__14340;
count__14324_14334 = G__14341;
i__14325_14335 = G__14342;
continue;
} else {
var temp__4657__auto___14343 = cljs.core.seq.call(null,seq__14322_14332);
if(temp__4657__auto___14343){
var seq__14322_14344__$1 = temp__4657__auto___14343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14322_14344__$1)){
var c__7058__auto___14345 = cljs.core.chunk_first.call(null,seq__14322_14344__$1);
var G__14346 = cljs.core.chunk_rest.call(null,seq__14322_14344__$1);
var G__14347 = c__7058__auto___14345;
var G__14348 = cljs.core.count.call(null,c__7058__auto___14345);
var G__14349 = (0);
seq__14322_14332 = G__14346;
chunk__14323_14333 = G__14347;
count__14324_14334 = G__14348;
i__14325_14335 = G__14349;
continue;
} else {
var vec__14329_14350 = cljs.core.first.call(null,seq__14322_14344__$1);
var k_14351 = cljs.core.nth.call(null,vec__14329_14350,(0),null);
var v_14352 = cljs.core.nth.call(null,vec__14329_14350,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_14352)){
form_data.append(cljs.core.name.call(null,k_14351),cljs.core.first.call(null,v_14352),cljs.core.second.call(null,v_14352));
} else {
form_data.append(cljs.core.name.call(null,k_14351),v_14352);
}

var G__14353 = cljs.core.next.call(null,seq__14322_14344__$1);
var G__14354 = null;
var G__14355 = (0);
var G__14356 = (0);
seq__14322_14332 = G__14353;
chunk__14323_14333 = G__14354;
count__14324_14334 = G__14355;
i__14325_14335 = G__14356;
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
return (function (p__14360){
var map__14361 = p__14360;
var map__14361__$1 = ((((!((map__14361 == null)))?((((map__14361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14361):map__14361);
var request = map__14361__$1;
var multipart_params = cljs.core.get.call(null,map__14361__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__14361__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6235__auto__ = multipart_params;
if(cljs.core.truth_(and__6235__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6235__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__14363_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__14363_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__14368){
var map__14369 = p__14368;
var map__14369__$1 = ((((!((map__14369 == null)))?((((map__14369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14369):map__14369);
var req = map__14369__$1;
var query_params = cljs.core.get.call(null,map__14369__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__14369,map__14369__$1,req,query_params){
return (function (p1__14364_SHARP_){
return cljs.core.merge.call(null,p1__14364_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__14369,map__14369__$1,req,query_params))
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
var args__7329__auto__ = [];
var len__7322__auto___14377 = arguments.length;
var i__7323__auto___14378 = (0);
while(true){
if((i__7323__auto___14378 < len__7322__auto___14377)){
args__7329__auto__.push((arguments[i__7323__auto___14378]));

var G__14379 = (i__7323__auto___14378 + (1));
i__7323__auto___14378 = G__14379;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__14373){
var vec__14374 = p__14373;
var credentials = cljs.core.nth.call(null,vec__14374,(0),null);
return ((function (vec__14374,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
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
;})(vec__14374,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq14371){
var G__14372 = cljs.core.first.call(null,seq14371);
var seq14371__$1 = cljs.core.next.call(null,seq14371);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__14372,seq14371__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
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
var args__7329__auto__ = [];
var len__7322__auto___14386 = arguments.length;
var i__7323__auto___14387 = (0);
while(true){
if((i__7323__auto___14387 < len__7322__auto___14386)){
args__7329__auto__.push((arguments[i__7323__auto___14387]));

var G__14388 = (i__7323__auto___14387 + (1));
i__7323__auto___14387 = G__14388;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14382){
var vec__14383 = p__14382;
var req = cljs.core.nth.call(null,vec__14383,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq14380){
var G__14381 = cljs.core.first.call(null,seq14380);
var seq14380__$1 = cljs.core.next.call(null,seq14380);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__14381,seq14380__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14395 = arguments.length;
var i__7323__auto___14396 = (0);
while(true){
if((i__7323__auto___14396 < len__7322__auto___14395)){
args__7329__auto__.push((arguments[i__7323__auto___14396]));

var G__14397 = (i__7323__auto___14396 + (1));
i__7323__auto___14396 = G__14397;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14391){
var vec__14392 = p__14391;
var req = cljs.core.nth.call(null,vec__14392,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq14389){
var G__14390 = cljs.core.first.call(null,seq14389);
var seq14389__$1 = cljs.core.next.call(null,seq14389);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__14390,seq14389__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14404 = arguments.length;
var i__7323__auto___14405 = (0);
while(true){
if((i__7323__auto___14405 < len__7322__auto___14404)){
args__7329__auto__.push((arguments[i__7323__auto___14405]));

var G__14406 = (i__7323__auto___14405 + (1));
i__7323__auto___14405 = G__14406;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14400){
var vec__14401 = p__14400;
var req = cljs.core.nth.call(null,vec__14401,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq14398){
var G__14399 = cljs.core.first.call(null,seq14398);
var seq14398__$1 = cljs.core.next.call(null,seq14398);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__14399,seq14398__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14413 = arguments.length;
var i__7323__auto___14414 = (0);
while(true){
if((i__7323__auto___14414 < len__7322__auto___14413)){
args__7329__auto__.push((arguments[i__7323__auto___14414]));

var G__14415 = (i__7323__auto___14414 + (1));
i__7323__auto___14414 = G__14415;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14409){
var vec__14410 = p__14409;
var req = cljs.core.nth.call(null,vec__14410,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq14407){
var G__14408 = cljs.core.first.call(null,seq14407);
var seq14407__$1 = cljs.core.next.call(null,seq14407);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__14408,seq14407__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14422 = arguments.length;
var i__7323__auto___14423 = (0);
while(true){
if((i__7323__auto___14423 < len__7322__auto___14422)){
args__7329__auto__.push((arguments[i__7323__auto___14423]));

var G__14424 = (i__7323__auto___14423 + (1));
i__7323__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14418){
var vec__14419 = p__14418;
var req = cljs.core.nth.call(null,vec__14419,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq14416){
var G__14417 = cljs.core.first.call(null,seq14416);
var seq14416__$1 = cljs.core.next.call(null,seq14416);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__14417,seq14416__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14431 = arguments.length;
var i__7323__auto___14432 = (0);
while(true){
if((i__7323__auto___14432 < len__7322__auto___14431)){
args__7329__auto__.push((arguments[i__7323__auto___14432]));

var G__14433 = (i__7323__auto___14432 + (1));
i__7323__auto___14432 = G__14433;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14427){
var vec__14428 = p__14427;
var req = cljs.core.nth.call(null,vec__14428,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq14425){
var G__14426 = cljs.core.first.call(null,seq14425);
var seq14425__$1 = cljs.core.next.call(null,seq14425);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__14426,seq14425__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14440 = arguments.length;
var i__7323__auto___14441 = (0);
while(true){
if((i__7323__auto___14441 < len__7322__auto___14440)){
args__7329__auto__.push((arguments[i__7323__auto___14441]));

var G__14442 = (i__7323__auto___14441 + (1));
i__7323__auto___14441 = G__14442;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14436){
var vec__14437 = p__14436;
var req = cljs.core.nth.call(null,vec__14437,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq14434){
var G__14435 = cljs.core.first.call(null,seq14434);
var seq14434__$1 = cljs.core.next.call(null,seq14434);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__14435,seq14434__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14449 = arguments.length;
var i__7323__auto___14450 = (0);
while(true){
if((i__7323__auto___14450 < len__7322__auto___14449)){
args__7329__auto__.push((arguments[i__7323__auto___14450]));

var G__14451 = (i__7323__auto___14450 + (1));
i__7323__auto___14450 = G__14451;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14445){
var vec__14446 = p__14445;
var req = cljs.core.nth.call(null,vec__14446,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq14443){
var G__14444 = cljs.core.first.call(null,seq14443);
var seq14443__$1 = cljs.core.next.call(null,seq14443);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__14444,seq14443__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14458 = arguments.length;
var i__7323__auto___14459 = (0);
while(true){
if((i__7323__auto___14459 < len__7322__auto___14458)){
args__7329__auto__.push((arguments[i__7323__auto___14459]));

var G__14460 = (i__7323__auto___14459 + (1));
i__7323__auto___14459 = G__14460;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14454){
var vec__14455 = p__14454;
var req = cljs.core.nth.call(null,vec__14455,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq14452){
var G__14453 = cljs.core.first.call(null,seq14452);
var seq14452__$1 = cljs.core.next.call(null,seq14452);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__14453,seq14452__$1);
});


//# sourceMappingURL=client.js.map?rel=1470137666763