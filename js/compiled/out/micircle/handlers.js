// Compiled by ClojureScript 1.7.228 {}
goog.provide('micircle.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('micircle.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return micircle.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-data","handle-data",1782621981),(function (db,p__26942){
var vec__26943 = p__26942;
var _ = cljs.core.nth.call(null,vec__26943,(0),null);
var data = cljs.core.nth.call(null,vec__26943,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-data","shape-data",-722449843)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calculate-pieces","calculate-pieces",87001693)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calculate-view","calculate-view",-785138849)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833),data);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"shape-data","shape-data",-722449843),(function (db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"interactors","interactors",1738679830),cljs.core.reduce.call(null,(function (total,next){
return cljs.core.assoc.call(null,total,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next)),next);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.butlast.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833),new cljs.core.Keyword(null,"data","data",-232669377)], null)))));
}));
micircle.handlers.padding = (0);
micircle.handlers.space_around_circle = (function micircle$handlers$space_around_circle(data){
return cljs.core.reduce.call(null,(function (total,next){
if(!(cljs.core.empty_QMARK_.call(null,total))){
var my_length = (new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(next) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(next));
return cljs.core.conj.call(null,total,cljs.core.assoc.call(null,next,new cljs.core.Keyword(null,"start","start",-355208981),(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,total)) + micircle.handlers.padding),new cljs.core.Keyword(null,"end","end",-268185958),((new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,total)) + my_length) - micircle.handlers.padding)));
} else {
return cljs.core.conj.call(null,total,next);
}
}),cljs.core.PersistentVector.EMPTY,data);
});
micircle.handlers.divide_circle = (function micircle$handlers$divide_circle(data){
var total = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.comp.call(null,parseInt,new cljs.core.Keyword(null,"length","length",588987862)),data));
return cljs.core.reduce.call(null,((function (total){
return (function (col,next){
return cljs.core.conj.call(null,col,cljs.core.merge.call(null,next,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(next) * ((360) / total))], null)));
});})(total))
,cljs.core.PersistentVector.EMPTY,data);
});
micircle.handlers.space_text = (function micircle$handlers$space_text(data){
return cljs.core.reduce.call(null,(function (total,next){
return cljs.core.conj.call(null,total,cljs.core.assoc.call(null,next,new cljs.core.Keyword(null,"text-position","text-position",122855101),((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(next) + new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(next)) / (2))));
}),cljs.core.PersistentVector.EMPTY,data);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"calculate-view","calculate-view",-785138849),(function (db){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.comp.call(null,micircle.handlers.space_text,micircle.handlers.space_around_circle,micircle.handlers.divide_circle));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-data","load-data",-1806350928),(function (db){
var c__20994__auto___26965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___26965){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___26965){
return (function (state_26956){
var state_val_26957 = (state_26956[(1)]);
if((state_val_26957 === (1))){
var inst_26944 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26945 = [false];
var inst_26946 = cljs.core.PersistentHashMap.fromArrays(inst_26944,inst_26945);
var inst_26947 = cljs_http.client.get.call(null,"demo.json",inst_26946);
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26956__$1,(2),inst_26947);
} else {
if((state_val_26957 === (2))){
var inst_26949 = (state_26956[(2)]);
var inst_26950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26951 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26949);
var inst_26952 = [new cljs.core.Keyword(null,"handle-data","handle-data",1782621981),inst_26951];
var inst_26953 = (new cljs.core.PersistentVector(null,2,(5),inst_26950,inst_26952,null));
var inst_26954 = re_frame.core.dispatch.call(null,inst_26953);
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26956__$1,inst_26954);
} else {
return null;
}
}
});})(c__20994__auto___26965))
;
return ((function (switch__20882__auto__,c__20994__auto___26965){
return (function() {
var micircle$handlers$state_machine__20883__auto__ = null;
var micircle$handlers$state_machine__20883__auto____0 = (function (){
var statearr_26961 = [null,null,null,null,null,null,null];
(statearr_26961[(0)] = micircle$handlers$state_machine__20883__auto__);

(statearr_26961[(1)] = (1));

return statearr_26961;
});
var micircle$handlers$state_machine__20883__auto____1 = (function (state_26956){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26962){if((e26962 instanceof Object)){
var ex__20886__auto__ = e26962;
var statearr_26963_26966 = state_26956;
(statearr_26963_26966[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26967 = state_26956;
state_26956 = G__26967;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
micircle$handlers$state_machine__20883__auto__ = function(state_26956){
switch(arguments.length){
case 0:
return micircle$handlers$state_machine__20883__auto____0.call(this);
case 1:
return micircle$handlers$state_machine__20883__auto____1.call(this,state_26956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
micircle$handlers$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = micircle$handlers$state_machine__20883__auto____0;
micircle$handlers$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = micircle$handlers$state_machine__20883__auto____1;
return micircle$handlers$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___26965))
})();
var state__20996__auto__ = (function (){var statearr_26964 = f__20995__auto__.call(null);
(statearr_26964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___26965);

return statearr_26964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___26965))
);


return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"calculate-pieces","calculate-pieces",87001693),(function (db){
var participants = new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jamiobj","jamiobj",-1315346833).cljs$core$IFn$_invoke$arity$1(db))));
var interactors = new cljs.core.Keyword(null,"interactors","interactors",1738679830).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (participants,interactors){
return (function (participant){
return cljs.core.assoc.call(null,participant,new cljs.core.Keyword(null,"length","length",588987862),cljs.core.get_in.call(null,interactors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"interactorRef","interactorRef",-1025023158).cljs$core$IFn$_invoke$arity$1(participant)),new cljs.core.Keyword(null,"length","length",588987862)], null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.get_in.call(null,interactors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"interactorRef","interactorRef",-1025023158).cljs$core$IFn$_invoke$arity$1(participant)),new cljs.core.Keyword(null,"label","label",1718410804)], null)));
});})(participants,interactors))
,participants)));
}));

//# sourceMappingURL=handlers.js.map?rel=1463475584564