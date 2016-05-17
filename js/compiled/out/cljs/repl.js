// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25909_25923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25910_25924 = null;
var count__25911_25925 = (0);
var i__25912_25926 = (0);
while(true){
if((i__25912_25926 < count__25911_25925)){
var f_25927 = cljs.core._nth.call(null,chunk__25910_25924,i__25912_25926);
cljs.core.println.call(null,"  ",f_25927);

var G__25928 = seq__25909_25923;
var G__25929 = chunk__25910_25924;
var G__25930 = count__25911_25925;
var G__25931 = (i__25912_25926 + (1));
seq__25909_25923 = G__25928;
chunk__25910_25924 = G__25929;
count__25911_25925 = G__25930;
i__25912_25926 = G__25931;
continue;
} else {
var temp__4425__auto___25932 = cljs.core.seq.call(null,seq__25909_25923);
if(temp__4425__auto___25932){
var seq__25909_25933__$1 = temp__4425__auto___25932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25909_25933__$1)){
var c__19109__auto___25934 = cljs.core.chunk_first.call(null,seq__25909_25933__$1);
var G__25935 = cljs.core.chunk_rest.call(null,seq__25909_25933__$1);
var G__25936 = c__19109__auto___25934;
var G__25937 = cljs.core.count.call(null,c__19109__auto___25934);
var G__25938 = (0);
seq__25909_25923 = G__25935;
chunk__25910_25924 = G__25936;
count__25911_25925 = G__25937;
i__25912_25926 = G__25938;
continue;
} else {
var f_25939 = cljs.core.first.call(null,seq__25909_25933__$1);
cljs.core.println.call(null,"  ",f_25939);

var G__25940 = cljs.core.next.call(null,seq__25909_25933__$1);
var G__25941 = null;
var G__25942 = (0);
var G__25943 = (0);
seq__25909_25923 = G__25940;
chunk__25910_25924 = G__25941;
count__25911_25925 = G__25942;
i__25912_25926 = G__25943;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25944 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18306__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25944);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25944)))?cljs.core.second.call(null,arglists_25944):arglists_25944));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25913 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25914 = null;
var count__25915 = (0);
var i__25916 = (0);
while(true){
if((i__25916 < count__25915)){
var vec__25917 = cljs.core._nth.call(null,chunk__25914,i__25916);
var name = cljs.core.nth.call(null,vec__25917,(0),null);
var map__25918 = cljs.core.nth.call(null,vec__25917,(1),null);
var map__25918__$1 = ((((!((map__25918 == null)))?((((map__25918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25918):map__25918);
var doc = cljs.core.get.call(null,map__25918__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25918__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25945 = seq__25913;
var G__25946 = chunk__25914;
var G__25947 = count__25915;
var G__25948 = (i__25916 + (1));
seq__25913 = G__25945;
chunk__25914 = G__25946;
count__25915 = G__25947;
i__25916 = G__25948;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25913);
if(temp__4425__auto__){
var seq__25913__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25913__$1)){
var c__19109__auto__ = cljs.core.chunk_first.call(null,seq__25913__$1);
var G__25949 = cljs.core.chunk_rest.call(null,seq__25913__$1);
var G__25950 = c__19109__auto__;
var G__25951 = cljs.core.count.call(null,c__19109__auto__);
var G__25952 = (0);
seq__25913 = G__25949;
chunk__25914 = G__25950;
count__25915 = G__25951;
i__25916 = G__25952;
continue;
} else {
var vec__25920 = cljs.core.first.call(null,seq__25913__$1);
var name = cljs.core.nth.call(null,vec__25920,(0),null);
var map__25921 = cljs.core.nth.call(null,vec__25920,(1),null);
var map__25921__$1 = ((((!((map__25921 == null)))?((((map__25921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25921):map__25921);
var doc = cljs.core.get.call(null,map__25921__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25921__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25953 = cljs.core.next.call(null,seq__25913__$1);
var G__25954 = null;
var G__25955 = (0);
var G__25956 = (0);
seq__25913 = G__25953;
chunk__25914 = G__25954;
count__25915 = G__25955;
i__25916 = G__25956;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1463475583647