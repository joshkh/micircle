// Compiled by ClojureScript 1.9.89 {}
goog.provide('micircle.utils');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
micircle.utils.radial_scale = (function micircle$utils$radial_scale(p__14463,p__14464){
var vec__14471 = p__14463;
var lower_domain = cljs.core.nth.call(null,vec__14471,(0),null);
var upper_domain = cljs.core.nth.call(null,vec__14471,(1),null);
var vec__14474 = p__14464;
var lower_range = cljs.core.nth.call(null,vec__14474,(0),null);
var upper_range = cljs.core.nth.call(null,vec__14474,(1),null);
return ((function (vec__14471,lower_domain,upper_domain,vec__14474,lower_range,upper_range){
return (function (input){
var percent = (input / (upper_domain - lower_domain));
return (lower_range + (percent * (upper_range - lower_range)));
});
;})(vec__14471,lower_domain,upper_domain,vec__14474,lower_range,upper_range))
});
micircle.utils.parse_pos = (function micircle$utils$parse_pos(pos){
return cljs.core.map.call(null,parseInt,clojure.string.split.call(null,pos,"-"));
});
/**
 * Fetches the length of a protein.
 */
micircle.utils.protein_length = (function micircle$utils$protein_length(accession){
var c__10991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto__){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto__){
return (function (state_14529){
var state_val_14530 = (state_14529[(1)]);
if((state_val_14530 === (1))){
var inst_14510 = [cljs.core.str("http://www.uniprot.org/uniprot/?format=tab&query=accession:"),cljs.core.str(accession),cljs.core.str("&columns=length")].join('');
var inst_14511 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_14512 = [false];
var inst_14513 = cljs.core.PersistentHashMap.fromArrays(inst_14511,inst_14512);
var inst_14514 = cljs_http.client.get.call(null,inst_14510,inst_14513);
var state_14529__$1 = state_14529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14529__$1,(2),inst_14514);
} else {
if((state_val_14530 === (2))){
var inst_14519 = (state_14529[(7)]);
var inst_14516 = (state_14529[(2)]);
var inst_14517 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14516);
var inst_14518 = clojure.string.split_lines.call(null,inst_14517);
var inst_14519__$1 = cljs.core.last.call(null,inst_14518);
var inst_14520 = [new cljs.core.Keyword(null,"accession","accession",-1015325932),new cljs.core.Keyword(null,"length","length",588987862)];
var inst_14521 = isNaN(inst_14519__$1);
var state_14529__$1 = (function (){var statearr_14531 = state_14529;
(statearr_14531[(7)] = inst_14519__$1);

(statearr_14531[(8)] = inst_14520);

return statearr_14531;
})();
if(cljs.core.truth_(inst_14521)){
var statearr_14532_14543 = state_14529__$1;
(statearr_14532_14543[(1)] = (3));

} else {
var statearr_14533_14544 = state_14529__$1;
(statearr_14533_14544[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (3))){
var state_14529__$1 = state_14529;
var statearr_14534_14545 = state_14529__$1;
(statearr_14534_14545[(2)] = null);

(statearr_14534_14545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (4))){
var inst_14519 = (state_14529[(7)]);
var state_14529__$1 = state_14529;
var statearr_14535_14546 = state_14529__$1;
(statearr_14535_14546[(2)] = inst_14519);

(statearr_14535_14546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14530 === (5))){
var inst_14520 = (state_14529[(8)]);
var inst_14525 = (state_14529[(2)]);
var inst_14526 = [accession,inst_14525];
var inst_14527 = cljs.core.PersistentHashMap.fromArrays(inst_14520,inst_14526);
var state_14529__$1 = state_14529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14529__$1,inst_14527);
} else {
return null;
}
}
}
}
}
});})(c__10991__auto__))
;
return ((function (switch__10879__auto__,c__10991__auto__){
return (function() {
var micircle$utils$protein_length_$_state_machine__10880__auto__ = null;
var micircle$utils$protein_length_$_state_machine__10880__auto____0 = (function (){
var statearr_14539 = [null,null,null,null,null,null,null,null,null];
(statearr_14539[(0)] = micircle$utils$protein_length_$_state_machine__10880__auto__);

(statearr_14539[(1)] = (1));

return statearr_14539;
});
var micircle$utils$protein_length_$_state_machine__10880__auto____1 = (function (state_14529){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_14529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e14540){if((e14540 instanceof Object)){
var ex__10883__auto__ = e14540;
var statearr_14541_14547 = state_14529;
(statearr_14541_14547[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14548 = state_14529;
state_14529 = G__14548;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
micircle$utils$protein_length_$_state_machine__10880__auto__ = function(state_14529){
switch(arguments.length){
case 0:
return micircle$utils$protein_length_$_state_machine__10880__auto____0.call(this);
case 1:
return micircle$utils$protein_length_$_state_machine__10880__auto____1.call(this,state_14529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
micircle$utils$protein_length_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = micircle$utils$protein_length_$_state_machine__10880__auto____0;
micircle$utils$protein_length_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = micircle$utils$protein_length_$_state_machine__10880__auto____1;
return micircle$utils$protein_length_$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto__))
})();
var state__10993__auto__ = (function (){var statearr_14542 = f__10992__auto__.call(null);
(statearr_14542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto__);

return statearr_14542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto__))
);

return c__10991__auto__;
});

//# sourceMappingURL=utils.js.map?rel=1470137666834