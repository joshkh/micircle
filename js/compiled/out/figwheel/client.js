// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26213 = cljs.core._EQ_;
var expr__26214 = (function (){var or__18306__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e26217){if((e26217 instanceof Error)){
var e = e26217;
return false;
} else {
throw e26217;

}
}})();
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26213.call(null,"true",expr__26214))){
return true;
} else {
if(cljs.core.truth_(pred__26213.call(null,"false",expr__26214))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26214)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e26219){if((e26219 instanceof Error)){
var e = e26219;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26219;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19371__auto__ = [];
var len__19364__auto___26221 = arguments.length;
var i__19365__auto___26222 = (0);
while(true){
if((i__19365__auto___26222 < len__19364__auto___26221)){
args__19371__auto__.push((arguments[i__19365__auto___26222]));

var G__26223 = (i__19365__auto___26222 + (1));
i__19365__auto___26222 = G__26223;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((0) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19372__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26220){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26220));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26224){
var map__26227 = p__26224;
var map__26227__$1 = ((((!((map__26227 == null)))?((((map__26227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26227):map__26227);
var message = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18306__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18294__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18294__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18294__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20994__auto___26389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___26389,ch){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___26389,ch){
return (function (state_26358){
var state_val_26359 = (state_26358[(1)]);
if((state_val_26359 === (7))){
var inst_26354 = (state_26358[(2)]);
var state_26358__$1 = state_26358;
var statearr_26360_26390 = state_26358__$1;
(statearr_26360_26390[(2)] = inst_26354);

(statearr_26360_26390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (1))){
var state_26358__$1 = state_26358;
var statearr_26361_26391 = state_26358__$1;
(statearr_26361_26391[(2)] = null);

(statearr_26361_26391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (4))){
var inst_26311 = (state_26358[(7)]);
var inst_26311__$1 = (state_26358[(2)]);
var state_26358__$1 = (function (){var statearr_26362 = state_26358;
(statearr_26362[(7)] = inst_26311__$1);

return statearr_26362;
})();
if(cljs.core.truth_(inst_26311__$1)){
var statearr_26363_26392 = state_26358__$1;
(statearr_26363_26392[(1)] = (5));

} else {
var statearr_26364_26393 = state_26358__$1;
(statearr_26364_26393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (15))){
var inst_26318 = (state_26358[(8)]);
var inst_26333 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26318);
var inst_26334 = cljs.core.first.call(null,inst_26333);
var inst_26335 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26334);
var inst_26336 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26335)].join('');
var inst_26337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26336);
var state_26358__$1 = state_26358;
var statearr_26365_26394 = state_26358__$1;
(statearr_26365_26394[(2)] = inst_26337);

(statearr_26365_26394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (13))){
var inst_26342 = (state_26358[(2)]);
var state_26358__$1 = state_26358;
var statearr_26366_26395 = state_26358__$1;
(statearr_26366_26395[(2)] = inst_26342);

(statearr_26366_26395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (6))){
var state_26358__$1 = state_26358;
var statearr_26367_26396 = state_26358__$1;
(statearr_26367_26396[(2)] = null);

(statearr_26367_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (17))){
var inst_26340 = (state_26358[(2)]);
var state_26358__$1 = state_26358;
var statearr_26368_26397 = state_26358__$1;
(statearr_26368_26397[(2)] = inst_26340);

(statearr_26368_26397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (3))){
var inst_26356 = (state_26358[(2)]);
var state_26358__$1 = state_26358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26358__$1,inst_26356);
} else {
if((state_val_26359 === (12))){
var inst_26317 = (state_26358[(9)]);
var inst_26331 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26317,opts);
var state_26358__$1 = state_26358;
if(cljs.core.truth_(inst_26331)){
var statearr_26369_26398 = state_26358__$1;
(statearr_26369_26398[(1)] = (15));

} else {
var statearr_26370_26399 = state_26358__$1;
(statearr_26370_26399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (2))){
var state_26358__$1 = state_26358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26358__$1,(4),ch);
} else {
if((state_val_26359 === (11))){
var inst_26318 = (state_26358[(8)]);
var inst_26323 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26324 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26318);
var inst_26325 = cljs.core.async.timeout.call(null,(1000));
var inst_26326 = [inst_26324,inst_26325];
var inst_26327 = (new cljs.core.PersistentVector(null,2,(5),inst_26323,inst_26326,null));
var state_26358__$1 = state_26358;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26358__$1,(14),inst_26327);
} else {
if((state_val_26359 === (9))){
var inst_26318 = (state_26358[(8)]);
var inst_26344 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26318);
var inst_26346 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26345);
var inst_26347 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26346)].join('');
var inst_26348 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26347);
var state_26358__$1 = (function (){var statearr_26371 = state_26358;
(statearr_26371[(10)] = inst_26344);

return statearr_26371;
})();
var statearr_26372_26400 = state_26358__$1;
(statearr_26372_26400[(2)] = inst_26348);

(statearr_26372_26400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (5))){
var inst_26311 = (state_26358[(7)]);
var inst_26313 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26314 = (new cljs.core.PersistentArrayMap(null,2,inst_26313,null));
var inst_26315 = (new cljs.core.PersistentHashSet(null,inst_26314,null));
var inst_26316 = figwheel.client.focus_msgs.call(null,inst_26315,inst_26311);
var inst_26317 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26316);
var inst_26318 = cljs.core.first.call(null,inst_26316);
var inst_26319 = figwheel.client.autoload_QMARK_.call(null);
var state_26358__$1 = (function (){var statearr_26373 = state_26358;
(statearr_26373[(8)] = inst_26318);

(statearr_26373[(9)] = inst_26317);

return statearr_26373;
})();
if(cljs.core.truth_(inst_26319)){
var statearr_26374_26401 = state_26358__$1;
(statearr_26374_26401[(1)] = (8));

} else {
var statearr_26375_26402 = state_26358__$1;
(statearr_26375_26402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (14))){
var inst_26329 = (state_26358[(2)]);
var state_26358__$1 = state_26358;
var statearr_26376_26403 = state_26358__$1;
(statearr_26376_26403[(2)] = inst_26329);

(statearr_26376_26403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (16))){
var state_26358__$1 = state_26358;
var statearr_26377_26404 = state_26358__$1;
(statearr_26377_26404[(2)] = null);

(statearr_26377_26404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (10))){
var inst_26350 = (state_26358[(2)]);
var state_26358__$1 = (function (){var statearr_26378 = state_26358;
(statearr_26378[(11)] = inst_26350);

return statearr_26378;
})();
var statearr_26379_26405 = state_26358__$1;
(statearr_26379_26405[(2)] = null);

(statearr_26379_26405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26359 === (8))){
var inst_26317 = (state_26358[(9)]);
var inst_26321 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26317,opts);
var state_26358__$1 = state_26358;
if(cljs.core.truth_(inst_26321)){
var statearr_26380_26406 = state_26358__$1;
(statearr_26380_26406[(1)] = (11));

} else {
var statearr_26381_26407 = state_26358__$1;
(statearr_26381_26407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__20994__auto___26389,ch))
;
return ((function (switch__20882__auto__,c__20994__auto___26389,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____0 = (function (){
var statearr_26385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26385[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__);

(statearr_26385[(1)] = (1));

return statearr_26385;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____1 = (function (state_26358){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26386){if((e26386 instanceof Object)){
var ex__20886__auto__ = e26386;
var statearr_26387_26408 = state_26358;
(statearr_26387_26408[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26409 = state_26358;
state_26358 = G__26409;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__ = function(state_26358){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____1.call(this,state_26358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20883__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___26389,ch))
})();
var state__20996__auto__ = (function (){var statearr_26388 = f__20995__auto__.call(null);
(statearr_26388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___26389);

return statearr_26388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___26389,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26410_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26410_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26417 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26417){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26415 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26416 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26416;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26415;
}}catch (e26414){if((e26414 instanceof Error)){
var e = e26414;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26417], null));
} else {
var e = e26414;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26417))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26418){
var map__26425 = p__26418;
var map__26425__$1 = ((((!((map__26425 == null)))?((((map__26425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26425):map__26425);
var opts = map__26425__$1;
var build_id = cljs.core.get.call(null,map__26425__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26425,map__26425__$1,opts,build_id){
return (function (p__26427){
var vec__26428 = p__26427;
var map__26429 = cljs.core.nth.call(null,vec__26428,(0),null);
var map__26429__$1 = ((((!((map__26429 == null)))?((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var msg = map__26429__$1;
var msg_name = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26428,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26428,map__26429,map__26429__$1,msg,msg_name,_,map__26425,map__26425__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26428,map__26429,map__26429__$1,msg,msg_name,_,map__26425,map__26425__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26425,map__26425__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26435){
var vec__26436 = p__26435;
var map__26437 = cljs.core.nth.call(null,vec__26436,(0),null);
var map__26437__$1 = ((((!((map__26437 == null)))?((((map__26437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26437):map__26437);
var msg = map__26437__$1;
var msg_name = cljs.core.get.call(null,map__26437__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26436,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26439){
var map__26449 = p__26439;
var map__26449__$1 = ((((!((map__26449 == null)))?((((map__26449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26449):map__26449);
var on_compile_warning = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26449,map__26449__$1,on_compile_warning,on_compile_fail){
return (function (p__26451){
var vec__26452 = p__26451;
var map__26453 = cljs.core.nth.call(null,vec__26452,(0),null);
var map__26453__$1 = ((((!((map__26453 == null)))?((((map__26453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26453):map__26453);
var msg = map__26453__$1;
var msg_name = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26452,(1));
var pred__26455 = cljs.core._EQ_;
var expr__26456 = msg_name;
if(cljs.core.truth_(pred__26455.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26456))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26455.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26456))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26449,map__26449__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__,msg_hist,msg_names,msg){
return (function (state_26672){
var state_val_26673 = (state_26672[(1)]);
if((state_val_26673 === (7))){
var inst_26596 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26596)){
var statearr_26674_26720 = state_26672__$1;
(statearr_26674_26720[(1)] = (8));

} else {
var statearr_26675_26721 = state_26672__$1;
(statearr_26675_26721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (20))){
var inst_26666 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26676_26722 = state_26672__$1;
(statearr_26676_26722[(2)] = inst_26666);

(statearr_26676_26722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (27))){
var inst_26662 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26677_26723 = state_26672__$1;
(statearr_26677_26723[(2)] = inst_26662);

(statearr_26677_26723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (1))){
var inst_26589 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26589)){
var statearr_26678_26724 = state_26672__$1;
(statearr_26678_26724[(1)] = (2));

} else {
var statearr_26679_26725 = state_26672__$1;
(statearr_26679_26725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (24))){
var inst_26664 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26680_26726 = state_26672__$1;
(statearr_26680_26726[(2)] = inst_26664);

(statearr_26680_26726[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (4))){
var inst_26670 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26672__$1,inst_26670);
} else {
if((state_val_26673 === (15))){
var inst_26668 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26681_26727 = state_26672__$1;
(statearr_26681_26727[(2)] = inst_26668);

(statearr_26681_26727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (21))){
var inst_26627 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26682_26728 = state_26672__$1;
(statearr_26682_26728[(2)] = inst_26627);

(statearr_26682_26728[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (31))){
var inst_26651 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26651)){
var statearr_26683_26729 = state_26672__$1;
(statearr_26683_26729[(1)] = (34));

} else {
var statearr_26684_26730 = state_26672__$1;
(statearr_26684_26730[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (32))){
var inst_26660 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26685_26731 = state_26672__$1;
(statearr_26685_26731[(2)] = inst_26660);

(statearr_26685_26731[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (33))){
var inst_26649 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26686_26732 = state_26672__$1;
(statearr_26686_26732[(2)] = inst_26649);

(statearr_26686_26732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (13))){
var inst_26610 = figwheel.client.heads_up.clear.call(null);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(16),inst_26610);
} else {
if((state_val_26673 === (22))){
var inst_26631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26632 = figwheel.client.heads_up.append_message.call(null,inst_26631);
var state_26672__$1 = state_26672;
var statearr_26687_26733 = state_26672__$1;
(statearr_26687_26733[(2)] = inst_26632);

(statearr_26687_26733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (36))){
var inst_26658 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26688_26734 = state_26672__$1;
(statearr_26688_26734[(2)] = inst_26658);

(statearr_26688_26734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (29))){
var inst_26642 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26689_26735 = state_26672__$1;
(statearr_26689_26735[(2)] = inst_26642);

(statearr_26689_26735[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (6))){
var inst_26591 = (state_26672[(7)]);
var state_26672__$1 = state_26672;
var statearr_26690_26736 = state_26672__$1;
(statearr_26690_26736[(2)] = inst_26591);

(statearr_26690_26736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (28))){
var inst_26638 = (state_26672[(2)]);
var inst_26639 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26640 = figwheel.client.heads_up.display_warning.call(null,inst_26639);
var state_26672__$1 = (function (){var statearr_26691 = state_26672;
(statearr_26691[(8)] = inst_26638);

return statearr_26691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(29),inst_26640);
} else {
if((state_val_26673 === (25))){
var inst_26636 = figwheel.client.heads_up.clear.call(null);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(28),inst_26636);
} else {
if((state_val_26673 === (34))){
var inst_26653 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(37),inst_26653);
} else {
if((state_val_26673 === (17))){
var inst_26618 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26692_26737 = state_26672__$1;
(statearr_26692_26737[(2)] = inst_26618);

(statearr_26692_26737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (3))){
var inst_26608 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26608)){
var statearr_26693_26738 = state_26672__$1;
(statearr_26693_26738[(1)] = (13));

} else {
var statearr_26694_26739 = state_26672__$1;
(statearr_26694_26739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (12))){
var inst_26604 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26695_26740 = state_26672__$1;
(statearr_26695_26740[(2)] = inst_26604);

(statearr_26695_26740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (2))){
var inst_26591 = (state_26672[(7)]);
var inst_26591__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26672__$1 = (function (){var statearr_26696 = state_26672;
(statearr_26696[(7)] = inst_26591__$1);

return statearr_26696;
})();
if(cljs.core.truth_(inst_26591__$1)){
var statearr_26697_26741 = state_26672__$1;
(statearr_26697_26741[(1)] = (5));

} else {
var statearr_26698_26742 = state_26672__$1;
(statearr_26698_26742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (23))){
var inst_26634 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26634)){
var statearr_26699_26743 = state_26672__$1;
(statearr_26699_26743[(1)] = (25));

} else {
var statearr_26700_26744 = state_26672__$1;
(statearr_26700_26744[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (35))){
var state_26672__$1 = state_26672;
var statearr_26701_26745 = state_26672__$1;
(statearr_26701_26745[(2)] = null);

(statearr_26701_26745[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (19))){
var inst_26629 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26629)){
var statearr_26702_26746 = state_26672__$1;
(statearr_26702_26746[(1)] = (22));

} else {
var statearr_26703_26747 = state_26672__$1;
(statearr_26703_26747[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (11))){
var inst_26600 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26704_26748 = state_26672__$1;
(statearr_26704_26748[(2)] = inst_26600);

(statearr_26704_26748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (9))){
var inst_26602 = figwheel.client.heads_up.clear.call(null);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(12),inst_26602);
} else {
if((state_val_26673 === (5))){
var inst_26593 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26672__$1 = state_26672;
var statearr_26705_26749 = state_26672__$1;
(statearr_26705_26749[(2)] = inst_26593);

(statearr_26705_26749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (14))){
var inst_26620 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26620)){
var statearr_26706_26750 = state_26672__$1;
(statearr_26706_26750[(1)] = (18));

} else {
var statearr_26707_26751 = state_26672__$1;
(statearr_26707_26751[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (26))){
var inst_26644 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26644)){
var statearr_26708_26752 = state_26672__$1;
(statearr_26708_26752[(1)] = (30));

} else {
var statearr_26709_26753 = state_26672__$1;
(statearr_26709_26753[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (16))){
var inst_26612 = (state_26672[(2)]);
var inst_26613 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26614 = figwheel.client.format_messages.call(null,inst_26613);
var inst_26615 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26616 = figwheel.client.heads_up.display_error.call(null,inst_26614,inst_26615);
var state_26672__$1 = (function (){var statearr_26710 = state_26672;
(statearr_26710[(9)] = inst_26612);

return statearr_26710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(17),inst_26616);
} else {
if((state_val_26673 === (30))){
var inst_26646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26647 = figwheel.client.heads_up.display_warning.call(null,inst_26646);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(33),inst_26647);
} else {
if((state_val_26673 === (10))){
var inst_26606 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26711_26754 = state_26672__$1;
(statearr_26711_26754[(2)] = inst_26606);

(statearr_26711_26754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (18))){
var inst_26622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26623 = figwheel.client.format_messages.call(null,inst_26622);
var inst_26624 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26625 = figwheel.client.heads_up.display_error.call(null,inst_26623,inst_26624);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(21),inst_26625);
} else {
if((state_val_26673 === (37))){
var inst_26655 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26712_26755 = state_26672__$1;
(statearr_26712_26755[(2)] = inst_26655);

(statearr_26712_26755[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (8))){
var inst_26598 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(11),inst_26598);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20994__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20882__auto__,c__20994__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____0 = (function (){
var statearr_26716 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26716[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__);

(statearr_26716[(1)] = (1));

return statearr_26716;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____1 = (function (state_26672){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26717){if((e26717 instanceof Object)){
var ex__20886__auto__ = e26717;
var statearr_26718_26756 = state_26672;
(statearr_26718_26756[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26757 = state_26672;
state_26672 = G__26757;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__,msg_hist,msg_names,msg))
})();
var state__20996__auto__ = (function (){var statearr_26719 = f__20995__auto__.call(null);
(statearr_26719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_26719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__,msg_hist,msg_names,msg))
);

return c__20994__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20994__auto___26820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___26820,ch){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___26820,ch){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (1))){
var state_26803__$1 = state_26803;
var statearr_26805_26821 = state_26803__$1;
(statearr_26805_26821[(2)] = null);

(statearr_26805_26821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (2))){
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26803__$1,(4),ch);
} else {
if((state_val_26804 === (3))){
var inst_26801 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26803__$1,inst_26801);
} else {
if((state_val_26804 === (4))){
var inst_26791 = (state_26803[(7)]);
var inst_26791__$1 = (state_26803[(2)]);
var state_26803__$1 = (function (){var statearr_26806 = state_26803;
(statearr_26806[(7)] = inst_26791__$1);

return statearr_26806;
})();
if(cljs.core.truth_(inst_26791__$1)){
var statearr_26807_26822 = state_26803__$1;
(statearr_26807_26822[(1)] = (5));

} else {
var statearr_26808_26823 = state_26803__$1;
(statearr_26808_26823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (5))){
var inst_26791 = (state_26803[(7)]);
var inst_26793 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26791);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26803__$1,(8),inst_26793);
} else {
if((state_val_26804 === (6))){
var state_26803__$1 = state_26803;
var statearr_26809_26824 = state_26803__$1;
(statearr_26809_26824[(2)] = null);

(statearr_26809_26824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (7))){
var inst_26799 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26810_26825 = state_26803__$1;
(statearr_26810_26825[(2)] = inst_26799);

(statearr_26810_26825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (8))){
var inst_26795 = (state_26803[(2)]);
var state_26803__$1 = (function (){var statearr_26811 = state_26803;
(statearr_26811[(8)] = inst_26795);

return statearr_26811;
})();
var statearr_26812_26826 = state_26803__$1;
(statearr_26812_26826[(2)] = null);

(statearr_26812_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20994__auto___26820,ch))
;
return ((function (switch__20882__auto__,c__20994__auto___26820,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20883__auto____0 = (function (){
var statearr_26816 = [null,null,null,null,null,null,null,null,null];
(statearr_26816[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20883__auto__);

(statearr_26816[(1)] = (1));

return statearr_26816;
});
var figwheel$client$heads_up_plugin_$_state_machine__20883__auto____1 = (function (state_26803){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26817){if((e26817 instanceof Object)){
var ex__20886__auto__ = e26817;
var statearr_26818_26827 = state_26803;
(statearr_26818_26827[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26828 = state_26803;
state_26803 = G__26828;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20883__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20883__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20883__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20883__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___26820,ch))
})();
var state__20996__auto__ = (function (){var statearr_26819 = f__20995__auto__.call(null);
(statearr_26819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___26820);

return statearr_26819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___26820,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_26849){
var state_val_26850 = (state_26849[(1)]);
if((state_val_26850 === (1))){
var inst_26844 = cljs.core.async.timeout.call(null,(3000));
var state_26849__$1 = state_26849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26849__$1,(2),inst_26844);
} else {
if((state_val_26850 === (2))){
var inst_26846 = (state_26849[(2)]);
var inst_26847 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26849__$1 = (function (){var statearr_26851 = state_26849;
(statearr_26851[(7)] = inst_26846);

return statearr_26851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26849__$1,inst_26847);
} else {
return null;
}
}
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____0 = (function (){
var statearr_26855 = [null,null,null,null,null,null,null,null];
(statearr_26855[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__);

(statearr_26855[(1)] = (1));

return statearr_26855;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____1 = (function (state_26849){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26856){if((e26856 instanceof Object)){
var ex__20886__auto__ = e26856;
var statearr_26857_26859 = state_26849;
(statearr_26857_26859[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26860 = state_26849;
state_26849 = G__26860;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__ = function(state_26849){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____1.call(this,state_26849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20883__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_26858 = f__20995__auto__.call(null);
(statearr_26858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_26858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26861){
var map__26868 = p__26861;
var map__26868__$1 = ((((!((map__26868 == null)))?((((map__26868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26868):map__26868);
var ed = map__26868__$1;
var formatted_exception = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26868__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26870_26874 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26871_26875 = null;
var count__26872_26876 = (0);
var i__26873_26877 = (0);
while(true){
if((i__26873_26877 < count__26872_26876)){
var msg_26878 = cljs.core._nth.call(null,chunk__26871_26875,i__26873_26877);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26878);

var G__26879 = seq__26870_26874;
var G__26880 = chunk__26871_26875;
var G__26881 = count__26872_26876;
var G__26882 = (i__26873_26877 + (1));
seq__26870_26874 = G__26879;
chunk__26871_26875 = G__26880;
count__26872_26876 = G__26881;
i__26873_26877 = G__26882;
continue;
} else {
var temp__4425__auto___26883 = cljs.core.seq.call(null,seq__26870_26874);
if(temp__4425__auto___26883){
var seq__26870_26884__$1 = temp__4425__auto___26883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26870_26884__$1)){
var c__19109__auto___26885 = cljs.core.chunk_first.call(null,seq__26870_26884__$1);
var G__26886 = cljs.core.chunk_rest.call(null,seq__26870_26884__$1);
var G__26887 = c__19109__auto___26885;
var G__26888 = cljs.core.count.call(null,c__19109__auto___26885);
var G__26889 = (0);
seq__26870_26874 = G__26886;
chunk__26871_26875 = G__26887;
count__26872_26876 = G__26888;
i__26873_26877 = G__26889;
continue;
} else {
var msg_26890 = cljs.core.first.call(null,seq__26870_26884__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26890);

var G__26891 = cljs.core.next.call(null,seq__26870_26884__$1);
var G__26892 = null;
var G__26893 = (0);
var G__26894 = (0);
seq__26870_26874 = G__26891;
chunk__26871_26875 = G__26892;
count__26872_26876 = G__26893;
i__26873_26877 = G__26894;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26895){
var map__26898 = p__26895;
var map__26898__$1 = ((((!((map__26898 == null)))?((((map__26898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26898):map__26898);
var w = map__26898__$1;
var message = cljs.core.get.call(null,map__26898__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18294__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18294__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18294__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26906 = cljs.core.seq.call(null,plugins);
var chunk__26907 = null;
var count__26908 = (0);
var i__26909 = (0);
while(true){
if((i__26909 < count__26908)){
var vec__26910 = cljs.core._nth.call(null,chunk__26907,i__26909);
var k = cljs.core.nth.call(null,vec__26910,(0),null);
var plugin = cljs.core.nth.call(null,vec__26910,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26912 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26906,chunk__26907,count__26908,i__26909,pl_26912,vec__26910,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26912.call(null,msg_hist);
});})(seq__26906,chunk__26907,count__26908,i__26909,pl_26912,vec__26910,k,plugin))
);
} else {
}

var G__26913 = seq__26906;
var G__26914 = chunk__26907;
var G__26915 = count__26908;
var G__26916 = (i__26909 + (1));
seq__26906 = G__26913;
chunk__26907 = G__26914;
count__26908 = G__26915;
i__26909 = G__26916;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26906);
if(temp__4425__auto__){
var seq__26906__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26906__$1)){
var c__19109__auto__ = cljs.core.chunk_first.call(null,seq__26906__$1);
var G__26917 = cljs.core.chunk_rest.call(null,seq__26906__$1);
var G__26918 = c__19109__auto__;
var G__26919 = cljs.core.count.call(null,c__19109__auto__);
var G__26920 = (0);
seq__26906 = G__26917;
chunk__26907 = G__26918;
count__26908 = G__26919;
i__26909 = G__26920;
continue;
} else {
var vec__26911 = cljs.core.first.call(null,seq__26906__$1);
var k = cljs.core.nth.call(null,vec__26911,(0),null);
var plugin = cljs.core.nth.call(null,vec__26911,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26921 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26906,chunk__26907,count__26908,i__26909,pl_26921,vec__26911,k,plugin,seq__26906__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26921.call(null,msg_hist);
});})(seq__26906,chunk__26907,count__26908,i__26909,pl_26921,vec__26911,k,plugin,seq__26906__$1,temp__4425__auto__))
);
} else {
}

var G__26922 = cljs.core.next.call(null,seq__26906__$1);
var G__26923 = null;
var G__26924 = (0);
var G__26925 = (0);
seq__26906 = G__26922;
chunk__26907 = G__26923;
count__26908 = G__26924;
i__26909 = G__26925;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26926 = [];
var len__19364__auto___26929 = arguments.length;
var i__19365__auto___26930 = (0);
while(true){
if((i__19365__auto___26930 < len__19364__auto___26929)){
args26926.push((arguments[i__19365__auto___26930]));

var G__26931 = (i__19365__auto___26930 + (1));
i__19365__auto___26930 = G__26931;
continue;
} else {
}
break;
}

var G__26928 = args26926.length;
switch (G__26928) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26926.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19371__auto__ = [];
var len__19364__auto___26937 = arguments.length;
var i__19365__auto___26938 = (0);
while(true){
if((i__19365__auto___26938 < len__19364__auto___26937)){
args__19371__auto__.push((arguments[i__19365__auto___26938]));

var G__26939 = (i__19365__auto___26938 + (1));
i__19365__auto___26938 = G__26939;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((0) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26934){
var map__26935 = p__26934;
var map__26935__$1 = ((((!((map__26935 == null)))?((((map__26935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26935):map__26935);
var opts = map__26935__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26933){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26933));
});

//# sourceMappingURL=client.js.map?rel=1463475584476