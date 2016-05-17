// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19371__auto__ = [];
var len__19364__auto___25979 = arguments.length;
var i__19365__auto___25980 = (0);
while(true){
if((i__19365__auto___25980 < len__19364__auto___25979)){
args__19371__auto__.push((arguments[i__19365__auto___25980]));

var G__25981 = (i__19365__auto___25980 + (1));
i__19365__auto___25980 = G__25981;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((2) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19372__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25971_25982 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25972_25983 = null;
var count__25973_25984 = (0);
var i__25974_25985 = (0);
while(true){
if((i__25974_25985 < count__25973_25984)){
var k_25986 = cljs.core._nth.call(null,chunk__25972_25983,i__25974_25985);
e.setAttribute(cljs.core.name.call(null,k_25986),cljs.core.get.call(null,attrs,k_25986));

var G__25987 = seq__25971_25982;
var G__25988 = chunk__25972_25983;
var G__25989 = count__25973_25984;
var G__25990 = (i__25974_25985 + (1));
seq__25971_25982 = G__25987;
chunk__25972_25983 = G__25988;
count__25973_25984 = G__25989;
i__25974_25985 = G__25990;
continue;
} else {
var temp__4425__auto___25991 = cljs.core.seq.call(null,seq__25971_25982);
if(temp__4425__auto___25991){
var seq__25971_25992__$1 = temp__4425__auto___25991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25971_25992__$1)){
var c__19109__auto___25993 = cljs.core.chunk_first.call(null,seq__25971_25992__$1);
var G__25994 = cljs.core.chunk_rest.call(null,seq__25971_25992__$1);
var G__25995 = c__19109__auto___25993;
var G__25996 = cljs.core.count.call(null,c__19109__auto___25993);
var G__25997 = (0);
seq__25971_25982 = G__25994;
chunk__25972_25983 = G__25995;
count__25973_25984 = G__25996;
i__25974_25985 = G__25997;
continue;
} else {
var k_25998 = cljs.core.first.call(null,seq__25971_25992__$1);
e.setAttribute(cljs.core.name.call(null,k_25998),cljs.core.get.call(null,attrs,k_25998));

var G__25999 = cljs.core.next.call(null,seq__25971_25992__$1);
var G__26000 = null;
var G__26001 = (0);
var G__26002 = (0);
seq__25971_25982 = G__25999;
chunk__25972_25983 = G__26000;
count__25973_25984 = G__26001;
i__25974_25985 = G__26002;
continue;
}
} else {
}
}
break;
}

var seq__25975_26003 = cljs.core.seq.call(null,children);
var chunk__25976_26004 = null;
var count__25977_26005 = (0);
var i__25978_26006 = (0);
while(true){
if((i__25978_26006 < count__25977_26005)){
var ch_26007 = cljs.core._nth.call(null,chunk__25976_26004,i__25978_26006);
e.appendChild(ch_26007);

var G__26008 = seq__25975_26003;
var G__26009 = chunk__25976_26004;
var G__26010 = count__25977_26005;
var G__26011 = (i__25978_26006 + (1));
seq__25975_26003 = G__26008;
chunk__25976_26004 = G__26009;
count__25977_26005 = G__26010;
i__25978_26006 = G__26011;
continue;
} else {
var temp__4425__auto___26012 = cljs.core.seq.call(null,seq__25975_26003);
if(temp__4425__auto___26012){
var seq__25975_26013__$1 = temp__4425__auto___26012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25975_26013__$1)){
var c__19109__auto___26014 = cljs.core.chunk_first.call(null,seq__25975_26013__$1);
var G__26015 = cljs.core.chunk_rest.call(null,seq__25975_26013__$1);
var G__26016 = c__19109__auto___26014;
var G__26017 = cljs.core.count.call(null,c__19109__auto___26014);
var G__26018 = (0);
seq__25975_26003 = G__26015;
chunk__25976_26004 = G__26016;
count__25977_26005 = G__26017;
i__25978_26006 = G__26018;
continue;
} else {
var ch_26019 = cljs.core.first.call(null,seq__25975_26013__$1);
e.appendChild(ch_26019);

var G__26020 = cljs.core.next.call(null,seq__25975_26013__$1);
var G__26021 = null;
var G__26022 = (0);
var G__26023 = (0);
seq__25975_26003 = G__26020;
chunk__25976_26004 = G__26021;
count__25977_26005 = G__26022;
i__25978_26006 = G__26023;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25968){
var G__25969 = cljs.core.first.call(null,seq25968);
var seq25968__$1 = cljs.core.next.call(null,seq25968);
var G__25970 = cljs.core.first.call(null,seq25968__$1);
var seq25968__$2 = cljs.core.next.call(null,seq25968__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25969,G__25970,seq25968__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19219__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19223__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19219__auto__,prefer_table__19220__auto__,method_cache__19221__auto__,cached_hierarchy__19222__auto__,hierarchy__19223__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19219__auto__,prefer_table__19220__auto__,method_cache__19221__auto__,cached_hierarchy__19222__auto__,hierarchy__19223__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19223__auto__,method_table__19219__auto__,prefer_table__19220__auto__,method_cache__19221__auto__,cached_hierarchy__19222__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26024 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26024.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26024.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26024.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26024);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26025,st_map){
var map__26030 = p__26025;
var map__26030__$1 = ((((!((map__26030 == null)))?((((map__26030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26030):map__26030);
var container_el = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26030,map__26030__$1,container_el){
return (function (p__26032){
var vec__26033 = p__26032;
var k = cljs.core.nth.call(null,vec__26033,(0),null);
var v = cljs.core.nth.call(null,vec__26033,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26030,map__26030__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26034,dom_str){
var map__26037 = p__26034;
var map__26037__$1 = ((((!((map__26037 == null)))?((((map__26037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26037):map__26037);
var c = map__26037__$1;
var content_area_el = cljs.core.get.call(null,map__26037__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26039){
var map__26042 = p__26039;
var map__26042__$1 = ((((!((map__26042 == null)))?((((map__26042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26042):map__26042);
var content_area_el = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_26085){
var state_val_26086 = (state_26085[(1)]);
if((state_val_26086 === (1))){
var inst_26070 = (state_26085[(7)]);
var inst_26070__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26071 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26072 = ["10px","10px","100%","68px","1.0"];
var inst_26073 = cljs.core.PersistentHashMap.fromArrays(inst_26071,inst_26072);
var inst_26074 = cljs.core.merge.call(null,inst_26073,style);
var inst_26075 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26070__$1,inst_26074);
var inst_26076 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26070__$1,msg);
var inst_26077 = cljs.core.async.timeout.call(null,(300));
var state_26085__$1 = (function (){var statearr_26087 = state_26085;
(statearr_26087[(8)] = inst_26076);

(statearr_26087[(7)] = inst_26070__$1);

(statearr_26087[(9)] = inst_26075);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26085__$1,(2),inst_26077);
} else {
if((state_val_26086 === (2))){
var inst_26070 = (state_26085[(7)]);
var inst_26079 = (state_26085[(2)]);
var inst_26080 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26081 = ["auto"];
var inst_26082 = cljs.core.PersistentHashMap.fromArrays(inst_26080,inst_26081);
var inst_26083 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26070,inst_26082);
var state_26085__$1 = (function (){var statearr_26088 = state_26085;
(statearr_26088[(10)] = inst_26079);

return statearr_26088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26085__$1,inst_26083);
} else {
return null;
}
}
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____0 = (function (){
var statearr_26092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26092[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__);

(statearr_26092[(1)] = (1));

return statearr_26092;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____1 = (function (state_26085){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26093){if((e26093 instanceof Object)){
var ex__20886__auto__ = e26093;
var statearr_26094_26096 = state_26085;
(statearr_26094_26096[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26097 = state_26085;
state_26085 = G__26097;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__ = function(state_26085){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____1.call(this,state_26085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_26095 = f__20995__auto__.call(null);
(statearr_26095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_26095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26099 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26099,(0),null);
var ln = cljs.core.nth.call(null,vec__26099,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26102 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26102,(0),null);
var file_line = cljs.core.nth.call(null,vec__26102,(1),null);
var file_column = cljs.core.nth.call(null,vec__26102,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26102,file_name,file_line,file_column){
return (function (p1__26100_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26100_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26102,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18306__auto__ = file_line;
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
var and__18294__auto__ = cause;
if(cljs.core.truth_(and__18294__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18294__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26105 = figwheel.client.heads_up.ensure_container.call(null);
var map__26105__$1 = ((((!((map__26105 == null)))?((((map__26105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26105):map__26105);
var content_area_el = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_26153){
var state_val_26154 = (state_26153[(1)]);
if((state_val_26154 === (1))){
var inst_26136 = (state_26153[(7)]);
var inst_26136__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26137 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26138 = ["0.0"];
var inst_26139 = cljs.core.PersistentHashMap.fromArrays(inst_26137,inst_26138);
var inst_26140 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26136__$1,inst_26139);
var inst_26141 = cljs.core.async.timeout.call(null,(300));
var state_26153__$1 = (function (){var statearr_26155 = state_26153;
(statearr_26155[(8)] = inst_26140);

(statearr_26155[(7)] = inst_26136__$1);

return statearr_26155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26153__$1,(2),inst_26141);
} else {
if((state_val_26154 === (2))){
var inst_26136 = (state_26153[(7)]);
var inst_26143 = (state_26153[(2)]);
var inst_26144 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26145 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26146 = cljs.core.PersistentHashMap.fromArrays(inst_26144,inst_26145);
var inst_26147 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26136,inst_26146);
var inst_26148 = cljs.core.async.timeout.call(null,(200));
var state_26153__$1 = (function (){var statearr_26156 = state_26153;
(statearr_26156[(9)] = inst_26147);

(statearr_26156[(10)] = inst_26143);

return statearr_26156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26153__$1,(3),inst_26148);
} else {
if((state_val_26154 === (3))){
var inst_26136 = (state_26153[(7)]);
var inst_26150 = (state_26153[(2)]);
var inst_26151 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26136,"");
var state_26153__$1 = (function (){var statearr_26157 = state_26153;
(statearr_26157[(11)] = inst_26150);

return statearr_26157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26153__$1,inst_26151);
} else {
return null;
}
}
}
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20883__auto____0 = (function (){
var statearr_26161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26161[(0)] = figwheel$client$heads_up$clear_$_state_machine__20883__auto__);

(statearr_26161[(1)] = (1));

return statearr_26161;
});
var figwheel$client$heads_up$clear_$_state_machine__20883__auto____1 = (function (state_26153){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26162){if((e26162 instanceof Object)){
var ex__20886__auto__ = e26162;
var statearr_26163_26165 = state_26153;
(statearr_26163_26165[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26166 = state_26153;
state_26153 = G__26166;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20883__auto__ = function(state_26153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20883__auto____1.call(this,state_26153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20883__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20883__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_26164 = f__20995__auto__.call(null);
(statearr_26164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_26164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_26198){
var state_val_26199 = (state_26198[(1)]);
if((state_val_26199 === (1))){
var inst_26188 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26198__$1,(2),inst_26188);
} else {
if((state_val_26199 === (2))){
var inst_26190 = (state_26198[(2)]);
var inst_26191 = cljs.core.async.timeout.call(null,(400));
var state_26198__$1 = (function (){var statearr_26200 = state_26198;
(statearr_26200[(7)] = inst_26190);

return statearr_26200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26198__$1,(3),inst_26191);
} else {
if((state_val_26199 === (3))){
var inst_26193 = (state_26198[(2)]);
var inst_26194 = figwheel.client.heads_up.clear.call(null);
var state_26198__$1 = (function (){var statearr_26201 = state_26198;
(statearr_26201[(8)] = inst_26193);

return statearr_26201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26198__$1,(4),inst_26194);
} else {
if((state_val_26199 === (4))){
var inst_26196 = (state_26198[(2)]);
var state_26198__$1 = state_26198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26198__$1,inst_26196);
} else {
return null;
}
}
}
}
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____0 = (function (){
var statearr_26205 = [null,null,null,null,null,null,null,null,null];
(statearr_26205[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__);

(statearr_26205[(1)] = (1));

return statearr_26205;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____1 = (function (state_26198){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_26198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e26206){if((e26206 instanceof Object)){
var ex__20886__auto__ = e26206;
var statearr_26207_26209 = state_26198;
(statearr_26207_26209[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26210 = state_26198;
state_26198 = G__26210;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__ = function(state_26198){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____1.call(this,state_26198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_26208 = f__20995__auto__.call(null);
(statearr_26208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_26208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1463475583930