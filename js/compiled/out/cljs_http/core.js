// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__13791){
var vec__13792 = p__13791;
var k = cljs.core.nth.call(null,vec__13792,(0),null);
var v = cljs.core.nth.call(null,vec__13792,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__13796 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__13796)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__13796)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__13796)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__13796)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__13796)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__13796)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__13797){
var map__13801 = p__13797;
var map__13801__$1 = ((((!((map__13801 == null)))?((((map__13801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13801):map__13801);
var request = map__13801__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__13803 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__13803,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__13803,response_type);

G__13803.setTimeoutInterval(timeout);

G__13803.setWithCredentials(send_credentials);

return G__13803;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__13804){
var map__13831 = p__13804;
var map__13831__$1 = ((((!((map__13831 == null)))?((((map__13831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13831):map__13831);
var request = map__13831__$1;
var request_method = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__6247__auto__ = request_method;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__10991__auto___13857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13857,channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13857,channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_13843){
var state_val_13844 = (state_13843[(1)]);
if((state_val_13844 === (1))){
var state_13843__$1 = state_13843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13843__$1,(2),cancel);
} else {
if((state_val_13844 === (2))){
var inst_13834 = (state_13843[(2)]);
var inst_13835 = xhr__$1.isComplete();
var inst_13836 = cljs.core.not.call(null,inst_13835);
var state_13843__$1 = (function (){var statearr_13845 = state_13843;
(statearr_13845[(7)] = inst_13834);

return statearr_13845;
})();
if(inst_13836){
var statearr_13846_13858 = state_13843__$1;
(statearr_13846_13858[(1)] = (3));

} else {
var statearr_13847_13859 = state_13843__$1;
(statearr_13847_13859[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13844 === (3))){
var inst_13838 = xhr__$1.abort();
var state_13843__$1 = state_13843;
var statearr_13848_13860 = state_13843__$1;
(statearr_13848_13860[(2)] = inst_13838);

(statearr_13848_13860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13844 === (4))){
var state_13843__$1 = state_13843;
var statearr_13849_13861 = state_13843__$1;
(statearr_13849_13861[(2)] = null);

(statearr_13849_13861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13844 === (5))){
var inst_13841 = (state_13843[(2)]);
var state_13843__$1 = state_13843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13843__$1,inst_13841);
} else {
return null;
}
}
}
}
}
});})(c__10991__auto___13857,channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__10879__auto__,c__10991__auto___13857,channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__10880__auto__ = null;
var cljs_http$core$xhr_$_state_machine__10880__auto____0 = (function (){
var statearr_13853 = [null,null,null,null,null,null,null,null];
(statearr_13853[(0)] = cljs_http$core$xhr_$_state_machine__10880__auto__);

(statearr_13853[(1)] = (1));

return statearr_13853;
});
var cljs_http$core$xhr_$_state_machine__10880__auto____1 = (function (state_13843){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13854){if((e13854 instanceof Object)){
var ex__10883__auto__ = e13854;
var statearr_13855_13862 = state_13843;
(statearr_13855_13862[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13863 = state_13843;
state_13843 = G__13863;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__10880__auto__ = function(state_13843){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__10880__auto____1.call(this,state_13843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__10880__auto____0;
cljs_http$core$xhr_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__10880__auto____1;
return cljs_http$core$xhr_$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13857,channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__10993__auto__ = (function (){var statearr_13856 = f__10992__auto__.call(null);
(statearr_13856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13857);

return statearr_13856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13857,channel,request_url,method,headers__$1,xhr__$1,map__13831,map__13831__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__13864){
var map__13881 = p__13864;
var map__13881__$1 = ((((!((map__13881 == null)))?((((map__13881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13881):map__13881);
var request = map__13881__$1;
var timeout = cljs.core.get.call(null,map__13881__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__13881__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__13881__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__13881__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_13897 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_13897], null));

if(cljs.core.truth_(cancel)){
var c__10991__auto___13898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13898,req_13897,channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13898,req_13897,channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_13887){
var state_val_13888 = (state_13887[(1)]);
if((state_val_13888 === (1))){
var state_13887__$1 = state_13887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13887__$1,(2),cancel);
} else {
if((state_val_13888 === (2))){
var inst_13884 = (state_13887[(2)]);
var inst_13885 = jsonp__$1.cancel(req_13897);
var state_13887__$1 = (function (){var statearr_13889 = state_13887;
(statearr_13889[(7)] = inst_13884);

return statearr_13889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13887__$1,inst_13885);
} else {
return null;
}
}
});})(c__10991__auto___13898,req_13897,channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__10879__auto__,c__10991__auto___13898,req_13897,channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__10880__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__10880__auto____0 = (function (){
var statearr_13893 = [null,null,null,null,null,null,null,null];
(statearr_13893[(0)] = cljs_http$core$jsonp_$_state_machine__10880__auto__);

(statearr_13893[(1)] = (1));

return statearr_13893;
});
var cljs_http$core$jsonp_$_state_machine__10880__auto____1 = (function (state_13887){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13894){if((e13894 instanceof Object)){
var ex__10883__auto__ = e13894;
var statearr_13895_13899 = state_13887;
(statearr_13895_13899[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13900 = state_13887;
state_13887 = G__13900;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__10880__auto__ = function(state_13887){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__10880__auto____1.call(this,state_13887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__10880__auto____0;
cljs_http$core$jsonp_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__10880__auto____1;
return cljs_http$core$jsonp_$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13898,req_13897,channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__10993__auto__ = (function (){var statearr_13896 = f__10992__auto__.call(null);
(statearr_13896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13898);

return statearr_13896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13898,req_13897,channel,jsonp__$1,map__13881,map__13881__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__13901){
var map__13904 = p__13901;
var map__13904__$1 = ((((!((map__13904 == null)))?((((map__13904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13904):map__13904);
var request__$1 = map__13904__$1;
var request_method = cljs.core.get.call(null,map__13904__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1470137664805