// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18306__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18306__auto__){
return or__18306__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18306__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24885_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24885_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24890 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24891 = null;
var count__24892 = (0);
var i__24893 = (0);
while(true){
if((i__24893 < count__24892)){
var n = cljs.core._nth.call(null,chunk__24891,i__24893);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24894 = seq__24890;
var G__24895 = chunk__24891;
var G__24896 = count__24892;
var G__24897 = (i__24893 + (1));
seq__24890 = G__24894;
chunk__24891 = G__24895;
count__24892 = G__24896;
i__24893 = G__24897;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24890);
if(temp__4425__auto__){
var seq__24890__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24890__$1)){
var c__19109__auto__ = cljs.core.chunk_first.call(null,seq__24890__$1);
var G__24898 = cljs.core.chunk_rest.call(null,seq__24890__$1);
var G__24899 = c__19109__auto__;
var G__24900 = cljs.core.count.call(null,c__19109__auto__);
var G__24901 = (0);
seq__24890 = G__24898;
chunk__24891 = G__24899;
count__24892 = G__24900;
i__24893 = G__24901;
continue;
} else {
var n = cljs.core.first.call(null,seq__24890__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24902 = cljs.core.next.call(null,seq__24890__$1);
var G__24903 = null;
var G__24904 = (0);
var G__24905 = (0);
seq__24890 = G__24902;
chunk__24891 = G__24903;
count__24892 = G__24904;
i__24893 = G__24905;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24944_24951 = cljs.core.seq.call(null,deps);
var chunk__24945_24952 = null;
var count__24946_24953 = (0);
var i__24947_24954 = (0);
while(true){
if((i__24947_24954 < count__24946_24953)){
var dep_24955 = cljs.core._nth.call(null,chunk__24945_24952,i__24947_24954);
topo_sort_helper_STAR_.call(null,dep_24955,(depth + (1)),state);

var G__24956 = seq__24944_24951;
var G__24957 = chunk__24945_24952;
var G__24958 = count__24946_24953;
var G__24959 = (i__24947_24954 + (1));
seq__24944_24951 = G__24956;
chunk__24945_24952 = G__24957;
count__24946_24953 = G__24958;
i__24947_24954 = G__24959;
continue;
} else {
var temp__4425__auto___24960 = cljs.core.seq.call(null,seq__24944_24951);
if(temp__4425__auto___24960){
var seq__24944_24961__$1 = temp__4425__auto___24960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24944_24961__$1)){
var c__19109__auto___24962 = cljs.core.chunk_first.call(null,seq__24944_24961__$1);
var G__24963 = cljs.core.chunk_rest.call(null,seq__24944_24961__$1);
var G__24964 = c__19109__auto___24962;
var G__24965 = cljs.core.count.call(null,c__19109__auto___24962);
var G__24966 = (0);
seq__24944_24951 = G__24963;
chunk__24945_24952 = G__24964;
count__24946_24953 = G__24965;
i__24947_24954 = G__24966;
continue;
} else {
var dep_24967 = cljs.core.first.call(null,seq__24944_24961__$1);
topo_sort_helper_STAR_.call(null,dep_24967,(depth + (1)),state);

var G__24968 = cljs.core.next.call(null,seq__24944_24961__$1);
var G__24969 = null;
var G__24970 = (0);
var G__24971 = (0);
seq__24944_24951 = G__24968;
chunk__24945_24952 = G__24969;
count__24946_24953 = G__24970;
i__24947_24954 = G__24971;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24948){
var vec__24950 = p__24948;
var x = cljs.core.nth.call(null,vec__24950,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24950,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24950,x,xs,get_deps__$1){
return (function (p1__24906_SHARP_){
return clojure.set.difference.call(null,p1__24906_SHARP_,x);
});})(vec__24950,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24984 = cljs.core.seq.call(null,provides);
var chunk__24985 = null;
var count__24986 = (0);
var i__24987 = (0);
while(true){
if((i__24987 < count__24986)){
var prov = cljs.core._nth.call(null,chunk__24985,i__24987);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24988_24996 = cljs.core.seq.call(null,requires);
var chunk__24989_24997 = null;
var count__24990_24998 = (0);
var i__24991_24999 = (0);
while(true){
if((i__24991_24999 < count__24990_24998)){
var req_25000 = cljs.core._nth.call(null,chunk__24989_24997,i__24991_24999);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25000,prov);

var G__25001 = seq__24988_24996;
var G__25002 = chunk__24989_24997;
var G__25003 = count__24990_24998;
var G__25004 = (i__24991_24999 + (1));
seq__24988_24996 = G__25001;
chunk__24989_24997 = G__25002;
count__24990_24998 = G__25003;
i__24991_24999 = G__25004;
continue;
} else {
var temp__4425__auto___25005 = cljs.core.seq.call(null,seq__24988_24996);
if(temp__4425__auto___25005){
var seq__24988_25006__$1 = temp__4425__auto___25005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24988_25006__$1)){
var c__19109__auto___25007 = cljs.core.chunk_first.call(null,seq__24988_25006__$1);
var G__25008 = cljs.core.chunk_rest.call(null,seq__24988_25006__$1);
var G__25009 = c__19109__auto___25007;
var G__25010 = cljs.core.count.call(null,c__19109__auto___25007);
var G__25011 = (0);
seq__24988_24996 = G__25008;
chunk__24989_24997 = G__25009;
count__24990_24998 = G__25010;
i__24991_24999 = G__25011;
continue;
} else {
var req_25012 = cljs.core.first.call(null,seq__24988_25006__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25012,prov);

var G__25013 = cljs.core.next.call(null,seq__24988_25006__$1);
var G__25014 = null;
var G__25015 = (0);
var G__25016 = (0);
seq__24988_24996 = G__25013;
chunk__24989_24997 = G__25014;
count__24990_24998 = G__25015;
i__24991_24999 = G__25016;
continue;
}
} else {
}
}
break;
}

var G__25017 = seq__24984;
var G__25018 = chunk__24985;
var G__25019 = count__24986;
var G__25020 = (i__24987 + (1));
seq__24984 = G__25017;
chunk__24985 = G__25018;
count__24986 = G__25019;
i__24987 = G__25020;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24984);
if(temp__4425__auto__){
var seq__24984__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24984__$1)){
var c__19109__auto__ = cljs.core.chunk_first.call(null,seq__24984__$1);
var G__25021 = cljs.core.chunk_rest.call(null,seq__24984__$1);
var G__25022 = c__19109__auto__;
var G__25023 = cljs.core.count.call(null,c__19109__auto__);
var G__25024 = (0);
seq__24984 = G__25021;
chunk__24985 = G__25022;
count__24986 = G__25023;
i__24987 = G__25024;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24984__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24992_25025 = cljs.core.seq.call(null,requires);
var chunk__24993_25026 = null;
var count__24994_25027 = (0);
var i__24995_25028 = (0);
while(true){
if((i__24995_25028 < count__24994_25027)){
var req_25029 = cljs.core._nth.call(null,chunk__24993_25026,i__24995_25028);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25029,prov);

var G__25030 = seq__24992_25025;
var G__25031 = chunk__24993_25026;
var G__25032 = count__24994_25027;
var G__25033 = (i__24995_25028 + (1));
seq__24992_25025 = G__25030;
chunk__24993_25026 = G__25031;
count__24994_25027 = G__25032;
i__24995_25028 = G__25033;
continue;
} else {
var temp__4425__auto___25034__$1 = cljs.core.seq.call(null,seq__24992_25025);
if(temp__4425__auto___25034__$1){
var seq__24992_25035__$1 = temp__4425__auto___25034__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24992_25035__$1)){
var c__19109__auto___25036 = cljs.core.chunk_first.call(null,seq__24992_25035__$1);
var G__25037 = cljs.core.chunk_rest.call(null,seq__24992_25035__$1);
var G__25038 = c__19109__auto___25036;
var G__25039 = cljs.core.count.call(null,c__19109__auto___25036);
var G__25040 = (0);
seq__24992_25025 = G__25037;
chunk__24993_25026 = G__25038;
count__24994_25027 = G__25039;
i__24995_25028 = G__25040;
continue;
} else {
var req_25041 = cljs.core.first.call(null,seq__24992_25035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25041,prov);

var G__25042 = cljs.core.next.call(null,seq__24992_25035__$1);
var G__25043 = null;
var G__25044 = (0);
var G__25045 = (0);
seq__24992_25025 = G__25042;
chunk__24993_25026 = G__25043;
count__24994_25027 = G__25044;
i__24995_25028 = G__25045;
continue;
}
} else {
}
}
break;
}

var G__25046 = cljs.core.next.call(null,seq__24984__$1);
var G__25047 = null;
var G__25048 = (0);
var G__25049 = (0);
seq__24984 = G__25046;
chunk__24985 = G__25047;
count__24986 = G__25048;
i__24987 = G__25049;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25054_25058 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25055_25059 = null;
var count__25056_25060 = (0);
var i__25057_25061 = (0);
while(true){
if((i__25057_25061 < count__25056_25060)){
var ns_25062 = cljs.core._nth.call(null,chunk__25055_25059,i__25057_25061);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25062);

var G__25063 = seq__25054_25058;
var G__25064 = chunk__25055_25059;
var G__25065 = count__25056_25060;
var G__25066 = (i__25057_25061 + (1));
seq__25054_25058 = G__25063;
chunk__25055_25059 = G__25064;
count__25056_25060 = G__25065;
i__25057_25061 = G__25066;
continue;
} else {
var temp__4425__auto___25067 = cljs.core.seq.call(null,seq__25054_25058);
if(temp__4425__auto___25067){
var seq__25054_25068__$1 = temp__4425__auto___25067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25054_25068__$1)){
var c__19109__auto___25069 = cljs.core.chunk_first.call(null,seq__25054_25068__$1);
var G__25070 = cljs.core.chunk_rest.call(null,seq__25054_25068__$1);
var G__25071 = c__19109__auto___25069;
var G__25072 = cljs.core.count.call(null,c__19109__auto___25069);
var G__25073 = (0);
seq__25054_25058 = G__25070;
chunk__25055_25059 = G__25071;
count__25056_25060 = G__25072;
i__25057_25061 = G__25073;
continue;
} else {
var ns_25074 = cljs.core.first.call(null,seq__25054_25068__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25074);

var G__25075 = cljs.core.next.call(null,seq__25054_25068__$1);
var G__25076 = null;
var G__25077 = (0);
var G__25078 = (0);
seq__25054_25058 = G__25075;
chunk__25055_25059 = G__25076;
count__25056_25060 = G__25077;
i__25057_25061 = G__25078;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18306__auto__ = goog.require__;
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25079__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25080__i = 0, G__25080__a = new Array(arguments.length -  0);
while (G__25080__i < G__25080__a.length) {G__25080__a[G__25080__i] = arguments[G__25080__i + 0]; ++G__25080__i;}
  args = new cljs.core.IndexedSeq(G__25080__a,0);
} 
return G__25079__delegate.call(this,args);};
G__25079.cljs$lang$maxFixedArity = 0;
G__25079.cljs$lang$applyTo = (function (arglist__25081){
var args = cljs.core.seq(arglist__25081);
return G__25079__delegate(args);
});
G__25079.cljs$core$IFn$_invoke$arity$variadic = G__25079__delegate;
return G__25079;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25083 = cljs.core._EQ_;
var expr__25084 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25083.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25084))){
var path_parts = ((function (pred__25083,expr__25084){
return (function (p1__25082_SHARP_){
return clojure.string.split.call(null,p1__25082_SHARP_,/[\/\\]/);
});})(pred__25083,expr__25084))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25083,expr__25084){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25086){if((e25086 instanceof Error)){
var e = e25086;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25086;

}
}})());
});
;})(path_parts,sep,root,pred__25083,expr__25084))
} else {
if(cljs.core.truth_(pred__25083.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25084))){
return ((function (pred__25083,expr__25084){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25083,expr__25084){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25083,expr__25084))
);

return deferred.addErrback(((function (deferred,pred__25083,expr__25084){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25083,expr__25084))
);
});
;})(pred__25083,expr__25084))
} else {
return ((function (pred__25083,expr__25084){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25083,expr__25084))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25087,callback){
var map__25090 = p__25087;
var map__25090__$1 = ((((!((map__25090 == null)))?((((map__25090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25090):map__25090);
var file_msg = map__25090__$1;
var request_url = cljs.core.get.call(null,map__25090__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25090,map__25090__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25090,map__25090__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_25114){
var state_val_25115 = (state_25114[(1)]);
if((state_val_25115 === (7))){
var inst_25110 = (state_25114[(2)]);
var state_25114__$1 = state_25114;
var statearr_25116_25136 = state_25114__$1;
(statearr_25116_25136[(2)] = inst_25110);

(statearr_25116_25136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25115 === (1))){
var state_25114__$1 = state_25114;
var statearr_25117_25137 = state_25114__$1;
(statearr_25117_25137[(2)] = null);

(statearr_25117_25137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25115 === (4))){
var inst_25094 = (state_25114[(7)]);
var inst_25094__$1 = (state_25114[(2)]);
var state_25114__$1 = (function (){var statearr_25118 = state_25114;
(statearr_25118[(7)] = inst_25094__$1);

return statearr_25118;
})();
if(cljs.core.truth_(inst_25094__$1)){
var statearr_25119_25138 = state_25114__$1;
(statearr_25119_25138[(1)] = (5));

} else {
var statearr_25120_25139 = state_25114__$1;
(statearr_25120_25139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25115 === (6))){
var state_25114__$1 = state_25114;
var statearr_25121_25140 = state_25114__$1;
(statearr_25121_25140[(2)] = null);

(statearr_25121_25140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25115 === (3))){
var inst_25112 = (state_25114[(2)]);
var state_25114__$1 = state_25114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25114__$1,inst_25112);
} else {
if((state_val_25115 === (2))){
var state_25114__$1 = state_25114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25114__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25115 === (11))){
var inst_25106 = (state_25114[(2)]);
var state_25114__$1 = (function (){var statearr_25122 = state_25114;
(statearr_25122[(8)] = inst_25106);

return statearr_25122;
})();
var statearr_25123_25141 = state_25114__$1;
(statearr_25123_25141[(2)] = null);

(statearr_25123_25141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25115 === (9))){
var inst_25100 = (state_25114[(9)]);
var inst_25098 = (state_25114[(10)]);
var inst_25102 = inst_25100.call(null,inst_25098);
var state_25114__$1 = state_25114;
var statearr_25124_25142 = state_25114__$1;
(statearr_25124_25142[(2)] = inst_25102);

(statearr_25124_25142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25115 === (5))){
var inst_25094 = (state_25114[(7)]);
var inst_25096 = figwheel.client.file_reloading.blocking_load.call(null,inst_25094);
var state_25114__$1 = state_25114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25114__$1,(8),inst_25096);
} else {
if((state_val_25115 === (10))){
var inst_25098 = (state_25114[(10)]);
var inst_25104 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25098);
var state_25114__$1 = state_25114;
var statearr_25125_25143 = state_25114__$1;
(statearr_25125_25143[(2)] = inst_25104);

(statearr_25125_25143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25115 === (8))){
var inst_25094 = (state_25114[(7)]);
var inst_25100 = (state_25114[(9)]);
var inst_25098 = (state_25114[(2)]);
var inst_25099 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25100__$1 = cljs.core.get.call(null,inst_25099,inst_25094);
var state_25114__$1 = (function (){var statearr_25126 = state_25114;
(statearr_25126[(9)] = inst_25100__$1);

(statearr_25126[(10)] = inst_25098);

return statearr_25126;
})();
if(cljs.core.truth_(inst_25100__$1)){
var statearr_25127_25144 = state_25114__$1;
(statearr_25127_25144[(1)] = (9));

} else {
var statearr_25128_25145 = state_25114__$1;
(statearr_25128_25145[(1)] = (10));

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
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20883__auto__ = null;
var figwheel$client$file_reloading$state_machine__20883__auto____0 = (function (){
var statearr_25132 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25132[(0)] = figwheel$client$file_reloading$state_machine__20883__auto__);

(statearr_25132[(1)] = (1));

return statearr_25132;
});
var figwheel$client$file_reloading$state_machine__20883__auto____1 = (function (state_25114){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_25114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e25133){if((e25133 instanceof Object)){
var ex__20886__auto__ = e25133;
var statearr_25134_25146 = state_25114;
(statearr_25134_25146[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25147 = state_25114;
state_25114 = G__25147;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20883__auto__ = function(state_25114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20883__auto____1.call(this,state_25114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20883__auto____0;
figwheel$client$file_reloading$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20883__auto____1;
return figwheel$client$file_reloading$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_25135 = f__20995__auto__.call(null);
(statearr_25135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_25135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25148,callback){
var map__25151 = p__25148;
var map__25151__$1 = ((((!((map__25151 == null)))?((((map__25151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25151):map__25151);
var file_msg = map__25151__$1;
var namespace = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25151,map__25151__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25151,map__25151__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25153){
var map__25156 = p__25153;
var map__25156__$1 = ((((!((map__25156 == null)))?((((map__25156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25156):map__25156);
var file_msg = map__25156__$1;
var namespace = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18294__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18294__auto__){
var or__18306__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
var or__18306__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18306__auto____$1)){
return or__18306__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18294__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25158,callback){
var map__25161 = p__25158;
var map__25161__$1 = ((((!((map__25161 == null)))?((((map__25161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25161):map__25161);
var file_msg = map__25161__$1;
var request_url = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20994__auto___25249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___25249,out){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___25249,out){
return (function (state_25231){
var state_val_25232 = (state_25231[(1)]);
if((state_val_25232 === (1))){
var inst_25209 = cljs.core.nth.call(null,files,(0),null);
var inst_25210 = cljs.core.nthnext.call(null,files,(1));
var inst_25211 = files;
var state_25231__$1 = (function (){var statearr_25233 = state_25231;
(statearr_25233[(7)] = inst_25210);

(statearr_25233[(8)] = inst_25211);

(statearr_25233[(9)] = inst_25209);

return statearr_25233;
})();
var statearr_25234_25250 = state_25231__$1;
(statearr_25234_25250[(2)] = null);

(statearr_25234_25250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25232 === (2))){
var inst_25214 = (state_25231[(10)]);
var inst_25211 = (state_25231[(8)]);
var inst_25214__$1 = cljs.core.nth.call(null,inst_25211,(0),null);
var inst_25215 = cljs.core.nthnext.call(null,inst_25211,(1));
var inst_25216 = (inst_25214__$1 == null);
var inst_25217 = cljs.core.not.call(null,inst_25216);
var state_25231__$1 = (function (){var statearr_25235 = state_25231;
(statearr_25235[(10)] = inst_25214__$1);

(statearr_25235[(11)] = inst_25215);

return statearr_25235;
})();
if(inst_25217){
var statearr_25236_25251 = state_25231__$1;
(statearr_25236_25251[(1)] = (4));

} else {
var statearr_25237_25252 = state_25231__$1;
(statearr_25237_25252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25232 === (3))){
var inst_25229 = (state_25231[(2)]);
var state_25231__$1 = state_25231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25231__$1,inst_25229);
} else {
if((state_val_25232 === (4))){
var inst_25214 = (state_25231[(10)]);
var inst_25219 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25214);
var state_25231__$1 = state_25231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25231__$1,(7),inst_25219);
} else {
if((state_val_25232 === (5))){
var inst_25225 = cljs.core.async.close_BANG_.call(null,out);
var state_25231__$1 = state_25231;
var statearr_25238_25253 = state_25231__$1;
(statearr_25238_25253[(2)] = inst_25225);

(statearr_25238_25253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25232 === (6))){
var inst_25227 = (state_25231[(2)]);
var state_25231__$1 = state_25231;
var statearr_25239_25254 = state_25231__$1;
(statearr_25239_25254[(2)] = inst_25227);

(statearr_25239_25254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25232 === (7))){
var inst_25215 = (state_25231[(11)]);
var inst_25221 = (state_25231[(2)]);
var inst_25222 = cljs.core.async.put_BANG_.call(null,out,inst_25221);
var inst_25211 = inst_25215;
var state_25231__$1 = (function (){var statearr_25240 = state_25231;
(statearr_25240[(8)] = inst_25211);

(statearr_25240[(12)] = inst_25222);

return statearr_25240;
})();
var statearr_25241_25255 = state_25231__$1;
(statearr_25241_25255[(2)] = null);

(statearr_25241_25255[(1)] = (2));


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
});})(c__20994__auto___25249,out))
;
return ((function (switch__20882__auto__,c__20994__auto___25249,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____0 = (function (){
var statearr_25245 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25245[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__);

(statearr_25245[(1)] = (1));

return statearr_25245;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____1 = (function (state_25231){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_25231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e25246){if((e25246 instanceof Object)){
var ex__20886__auto__ = e25246;
var statearr_25247_25256 = state_25231;
(statearr_25247_25256[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25257 = state_25231;
state_25231 = G__25257;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__ = function(state_25231){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____1.call(this,state_25231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___25249,out))
})();
var state__20996__auto__ = (function (){var statearr_25248 = f__20995__auto__.call(null);
(statearr_25248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___25249);

return statearr_25248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___25249,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25258,opts){
var map__25262 = p__25258;
var map__25262__$1 = ((((!((map__25262 == null)))?((((map__25262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25262):map__25262);
var eval_body__$1 = cljs.core.get.call(null,map__25262__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25262__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18294__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18294__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18294__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25264){var e = e25264;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25265_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25265_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25270){
var vec__25271 = p__25270;
var k = cljs.core.nth.call(null,vec__25271,(0),null);
var v = cljs.core.nth.call(null,vec__25271,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25272){
var vec__25273 = p__25272;
var k = cljs.core.nth.call(null,vec__25273,(0),null);
var v = cljs.core.nth.call(null,vec__25273,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25277,p__25278){
var map__25525 = p__25277;
var map__25525__$1 = ((((!((map__25525 == null)))?((((map__25525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25525):map__25525);
var opts = map__25525__$1;
var before_jsload = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25526 = p__25278;
var map__25526__$1 = ((((!((map__25526 == null)))?((((map__25526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25526):map__25526);
var msg = map__25526__$1;
var files = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25679){
var state_val_25680 = (state_25679[(1)]);
if((state_val_25680 === (7))){
var inst_25541 = (state_25679[(7)]);
var inst_25543 = (state_25679[(8)]);
var inst_25542 = (state_25679[(9)]);
var inst_25540 = (state_25679[(10)]);
var inst_25548 = cljs.core._nth.call(null,inst_25541,inst_25543);
var inst_25549 = figwheel.client.file_reloading.eval_body.call(null,inst_25548,opts);
var inst_25550 = (inst_25543 + (1));
var tmp25681 = inst_25541;
var tmp25682 = inst_25542;
var tmp25683 = inst_25540;
var inst_25540__$1 = tmp25683;
var inst_25541__$1 = tmp25681;
var inst_25542__$1 = tmp25682;
var inst_25543__$1 = inst_25550;
var state_25679__$1 = (function (){var statearr_25684 = state_25679;
(statearr_25684[(7)] = inst_25541__$1);

(statearr_25684[(8)] = inst_25543__$1);

(statearr_25684[(9)] = inst_25542__$1);

(statearr_25684[(10)] = inst_25540__$1);

(statearr_25684[(11)] = inst_25549);

return statearr_25684;
})();
var statearr_25685_25771 = state_25679__$1;
(statearr_25685_25771[(2)] = null);

(statearr_25685_25771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (20))){
var inst_25583 = (state_25679[(12)]);
var inst_25591 = figwheel.client.file_reloading.sort_files.call(null,inst_25583);
var state_25679__$1 = state_25679;
var statearr_25686_25772 = state_25679__$1;
(statearr_25686_25772[(2)] = inst_25591);

(statearr_25686_25772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (27))){
var state_25679__$1 = state_25679;
var statearr_25687_25773 = state_25679__$1;
(statearr_25687_25773[(2)] = null);

(statearr_25687_25773[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (1))){
var inst_25532 = (state_25679[(13)]);
var inst_25529 = before_jsload.call(null,files);
var inst_25530 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25531 = (function (){return ((function (inst_25532,inst_25529,inst_25530,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25274_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25274_SHARP_);
});
;})(inst_25532,inst_25529,inst_25530,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25532__$1 = cljs.core.filter.call(null,inst_25531,files);
var inst_25533 = cljs.core.not_empty.call(null,inst_25532__$1);
var state_25679__$1 = (function (){var statearr_25688 = state_25679;
(statearr_25688[(13)] = inst_25532__$1);

(statearr_25688[(14)] = inst_25530);

(statearr_25688[(15)] = inst_25529);

return statearr_25688;
})();
if(cljs.core.truth_(inst_25533)){
var statearr_25689_25774 = state_25679__$1;
(statearr_25689_25774[(1)] = (2));

} else {
var statearr_25690_25775 = state_25679__$1;
(statearr_25690_25775[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (24))){
var state_25679__$1 = state_25679;
var statearr_25691_25776 = state_25679__$1;
(statearr_25691_25776[(2)] = null);

(statearr_25691_25776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (39))){
var inst_25633 = (state_25679[(16)]);
var state_25679__$1 = state_25679;
var statearr_25692_25777 = state_25679__$1;
(statearr_25692_25777[(2)] = inst_25633);

(statearr_25692_25777[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (46))){
var inst_25674 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
var statearr_25693_25778 = state_25679__$1;
(statearr_25693_25778[(2)] = inst_25674);

(statearr_25693_25778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (4))){
var inst_25577 = (state_25679[(2)]);
var inst_25578 = cljs.core.List.EMPTY;
var inst_25579 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25578);
var inst_25580 = (function (){return ((function (inst_25577,inst_25578,inst_25579,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25275_SHARP_){
var and__18294__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25275_SHARP_);
if(cljs.core.truth_(and__18294__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25275_SHARP_));
} else {
return and__18294__auto__;
}
});
;})(inst_25577,inst_25578,inst_25579,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25581 = cljs.core.filter.call(null,inst_25580,files);
var inst_25582 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25583 = cljs.core.concat.call(null,inst_25581,inst_25582);
var state_25679__$1 = (function (){var statearr_25694 = state_25679;
(statearr_25694[(17)] = inst_25577);

(statearr_25694[(18)] = inst_25579);

(statearr_25694[(12)] = inst_25583);

return statearr_25694;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25695_25779 = state_25679__$1;
(statearr_25695_25779[(1)] = (16));

} else {
var statearr_25696_25780 = state_25679__$1;
(statearr_25696_25780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (15))){
var inst_25567 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
var statearr_25697_25781 = state_25679__$1;
(statearr_25697_25781[(2)] = inst_25567);

(statearr_25697_25781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (21))){
var inst_25593 = (state_25679[(19)]);
var inst_25593__$1 = (state_25679[(2)]);
var inst_25594 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25593__$1);
var state_25679__$1 = (function (){var statearr_25698 = state_25679;
(statearr_25698[(19)] = inst_25593__$1);

return statearr_25698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25679__$1,(22),inst_25594);
} else {
if((state_val_25680 === (31))){
var inst_25677 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25679__$1,inst_25677);
} else {
if((state_val_25680 === (32))){
var inst_25633 = (state_25679[(16)]);
var inst_25638 = inst_25633.cljs$lang$protocol_mask$partition0$;
var inst_25639 = (inst_25638 & (64));
var inst_25640 = inst_25633.cljs$core$ISeq$;
var inst_25641 = (inst_25639) || (inst_25640);
var state_25679__$1 = state_25679;
if(cljs.core.truth_(inst_25641)){
var statearr_25699_25782 = state_25679__$1;
(statearr_25699_25782[(1)] = (35));

} else {
var statearr_25700_25783 = state_25679__$1;
(statearr_25700_25783[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (40))){
var inst_25654 = (state_25679[(20)]);
var inst_25653 = (state_25679[(2)]);
var inst_25654__$1 = cljs.core.get.call(null,inst_25653,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25655 = cljs.core.get.call(null,inst_25653,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25656 = cljs.core.not_empty.call(null,inst_25654__$1);
var state_25679__$1 = (function (){var statearr_25701 = state_25679;
(statearr_25701[(21)] = inst_25655);

(statearr_25701[(20)] = inst_25654__$1);

return statearr_25701;
})();
if(cljs.core.truth_(inst_25656)){
var statearr_25702_25784 = state_25679__$1;
(statearr_25702_25784[(1)] = (41));

} else {
var statearr_25703_25785 = state_25679__$1;
(statearr_25703_25785[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (33))){
var state_25679__$1 = state_25679;
var statearr_25704_25786 = state_25679__$1;
(statearr_25704_25786[(2)] = false);

(statearr_25704_25786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (13))){
var inst_25553 = (state_25679[(22)]);
var inst_25557 = cljs.core.chunk_first.call(null,inst_25553);
var inst_25558 = cljs.core.chunk_rest.call(null,inst_25553);
var inst_25559 = cljs.core.count.call(null,inst_25557);
var inst_25540 = inst_25558;
var inst_25541 = inst_25557;
var inst_25542 = inst_25559;
var inst_25543 = (0);
var state_25679__$1 = (function (){var statearr_25705 = state_25679;
(statearr_25705[(7)] = inst_25541);

(statearr_25705[(8)] = inst_25543);

(statearr_25705[(9)] = inst_25542);

(statearr_25705[(10)] = inst_25540);

return statearr_25705;
})();
var statearr_25706_25787 = state_25679__$1;
(statearr_25706_25787[(2)] = null);

(statearr_25706_25787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (22))){
var inst_25601 = (state_25679[(23)]);
var inst_25593 = (state_25679[(19)]);
var inst_25597 = (state_25679[(24)]);
var inst_25596 = (state_25679[(25)]);
var inst_25596__$1 = (state_25679[(2)]);
var inst_25597__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25596__$1);
var inst_25598 = (function (){var all_files = inst_25593;
var res_SINGLEQUOTE_ = inst_25596__$1;
var res = inst_25597__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25601,inst_25593,inst_25597,inst_25596,inst_25596__$1,inst_25597__$1,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25276_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25276_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25601,inst_25593,inst_25597,inst_25596,inst_25596__$1,inst_25597__$1,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25599 = cljs.core.filter.call(null,inst_25598,inst_25596__$1);
var inst_25600 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25601__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25600);
var inst_25602 = cljs.core.not_empty.call(null,inst_25601__$1);
var state_25679__$1 = (function (){var statearr_25707 = state_25679;
(statearr_25707[(23)] = inst_25601__$1);

(statearr_25707[(24)] = inst_25597__$1);

(statearr_25707[(26)] = inst_25599);

(statearr_25707[(25)] = inst_25596__$1);

return statearr_25707;
})();
if(cljs.core.truth_(inst_25602)){
var statearr_25708_25788 = state_25679__$1;
(statearr_25708_25788[(1)] = (23));

} else {
var statearr_25709_25789 = state_25679__$1;
(statearr_25709_25789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (36))){
var state_25679__$1 = state_25679;
var statearr_25710_25790 = state_25679__$1;
(statearr_25710_25790[(2)] = false);

(statearr_25710_25790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (41))){
var inst_25654 = (state_25679[(20)]);
var inst_25658 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25659 = cljs.core.map.call(null,inst_25658,inst_25654);
var inst_25660 = cljs.core.pr_str.call(null,inst_25659);
var inst_25661 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25660)].join('');
var inst_25662 = figwheel.client.utils.log.call(null,inst_25661);
var state_25679__$1 = state_25679;
var statearr_25711_25791 = state_25679__$1;
(statearr_25711_25791[(2)] = inst_25662);

(statearr_25711_25791[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (43))){
var inst_25655 = (state_25679[(21)]);
var inst_25665 = (state_25679[(2)]);
var inst_25666 = cljs.core.not_empty.call(null,inst_25655);
var state_25679__$1 = (function (){var statearr_25712 = state_25679;
(statearr_25712[(27)] = inst_25665);

return statearr_25712;
})();
if(cljs.core.truth_(inst_25666)){
var statearr_25713_25792 = state_25679__$1;
(statearr_25713_25792[(1)] = (44));

} else {
var statearr_25714_25793 = state_25679__$1;
(statearr_25714_25793[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (29))){
var inst_25601 = (state_25679[(23)]);
var inst_25593 = (state_25679[(19)]);
var inst_25597 = (state_25679[(24)]);
var inst_25633 = (state_25679[(16)]);
var inst_25599 = (state_25679[(26)]);
var inst_25596 = (state_25679[(25)]);
var inst_25629 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25632 = (function (){var all_files = inst_25593;
var res_SINGLEQUOTE_ = inst_25596;
var res = inst_25597;
var files_not_loaded = inst_25599;
var dependencies_that_loaded = inst_25601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25633,inst_25599,inst_25596,inst_25629,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25631){
var map__25715 = p__25631;
var map__25715__$1 = ((((!((map__25715 == null)))?((((map__25715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25715):map__25715);
var namespace = cljs.core.get.call(null,map__25715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25633,inst_25599,inst_25596,inst_25629,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25633__$1 = cljs.core.group_by.call(null,inst_25632,inst_25599);
var inst_25635 = (inst_25633__$1 == null);
var inst_25636 = cljs.core.not.call(null,inst_25635);
var state_25679__$1 = (function (){var statearr_25717 = state_25679;
(statearr_25717[(28)] = inst_25629);

(statearr_25717[(16)] = inst_25633__$1);

return statearr_25717;
})();
if(inst_25636){
var statearr_25718_25794 = state_25679__$1;
(statearr_25718_25794[(1)] = (32));

} else {
var statearr_25719_25795 = state_25679__$1;
(statearr_25719_25795[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (44))){
var inst_25655 = (state_25679[(21)]);
var inst_25668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25655);
var inst_25669 = cljs.core.pr_str.call(null,inst_25668);
var inst_25670 = [cljs.core.str("not required: "),cljs.core.str(inst_25669)].join('');
var inst_25671 = figwheel.client.utils.log.call(null,inst_25670);
var state_25679__$1 = state_25679;
var statearr_25720_25796 = state_25679__$1;
(statearr_25720_25796[(2)] = inst_25671);

(statearr_25720_25796[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (6))){
var inst_25574 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
var statearr_25721_25797 = state_25679__$1;
(statearr_25721_25797[(2)] = inst_25574);

(statearr_25721_25797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (28))){
var inst_25599 = (state_25679[(26)]);
var inst_25626 = (state_25679[(2)]);
var inst_25627 = cljs.core.not_empty.call(null,inst_25599);
var state_25679__$1 = (function (){var statearr_25722 = state_25679;
(statearr_25722[(29)] = inst_25626);

return statearr_25722;
})();
if(cljs.core.truth_(inst_25627)){
var statearr_25723_25798 = state_25679__$1;
(statearr_25723_25798[(1)] = (29));

} else {
var statearr_25724_25799 = state_25679__$1;
(statearr_25724_25799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (25))){
var inst_25597 = (state_25679[(24)]);
var inst_25613 = (state_25679[(2)]);
var inst_25614 = cljs.core.not_empty.call(null,inst_25597);
var state_25679__$1 = (function (){var statearr_25725 = state_25679;
(statearr_25725[(30)] = inst_25613);

return statearr_25725;
})();
if(cljs.core.truth_(inst_25614)){
var statearr_25726_25800 = state_25679__$1;
(statearr_25726_25800[(1)] = (26));

} else {
var statearr_25727_25801 = state_25679__$1;
(statearr_25727_25801[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (34))){
var inst_25648 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
if(cljs.core.truth_(inst_25648)){
var statearr_25728_25802 = state_25679__$1;
(statearr_25728_25802[(1)] = (38));

} else {
var statearr_25729_25803 = state_25679__$1;
(statearr_25729_25803[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (17))){
var state_25679__$1 = state_25679;
var statearr_25730_25804 = state_25679__$1;
(statearr_25730_25804[(2)] = recompile_dependents);

(statearr_25730_25804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (3))){
var state_25679__$1 = state_25679;
var statearr_25731_25805 = state_25679__$1;
(statearr_25731_25805[(2)] = null);

(statearr_25731_25805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (12))){
var inst_25570 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
var statearr_25732_25806 = state_25679__$1;
(statearr_25732_25806[(2)] = inst_25570);

(statearr_25732_25806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (2))){
var inst_25532 = (state_25679[(13)]);
var inst_25539 = cljs.core.seq.call(null,inst_25532);
var inst_25540 = inst_25539;
var inst_25541 = null;
var inst_25542 = (0);
var inst_25543 = (0);
var state_25679__$1 = (function (){var statearr_25733 = state_25679;
(statearr_25733[(7)] = inst_25541);

(statearr_25733[(8)] = inst_25543);

(statearr_25733[(9)] = inst_25542);

(statearr_25733[(10)] = inst_25540);

return statearr_25733;
})();
var statearr_25734_25807 = state_25679__$1;
(statearr_25734_25807[(2)] = null);

(statearr_25734_25807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (23))){
var inst_25601 = (state_25679[(23)]);
var inst_25593 = (state_25679[(19)]);
var inst_25597 = (state_25679[(24)]);
var inst_25599 = (state_25679[(26)]);
var inst_25596 = (state_25679[(25)]);
var inst_25604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25606 = (function (){var all_files = inst_25593;
var res_SINGLEQUOTE_ = inst_25596;
var res = inst_25597;
var files_not_loaded = inst_25599;
var dependencies_that_loaded = inst_25601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25599,inst_25596,inst_25604,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25605){
var map__25735 = p__25605;
var map__25735__$1 = ((((!((map__25735 == null)))?((((map__25735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25735):map__25735);
var request_url = cljs.core.get.call(null,map__25735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25599,inst_25596,inst_25604,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25607 = cljs.core.reverse.call(null,inst_25601);
var inst_25608 = cljs.core.map.call(null,inst_25606,inst_25607);
var inst_25609 = cljs.core.pr_str.call(null,inst_25608);
var inst_25610 = figwheel.client.utils.log.call(null,inst_25609);
var state_25679__$1 = (function (){var statearr_25737 = state_25679;
(statearr_25737[(31)] = inst_25604);

return statearr_25737;
})();
var statearr_25738_25808 = state_25679__$1;
(statearr_25738_25808[(2)] = inst_25610);

(statearr_25738_25808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (35))){
var state_25679__$1 = state_25679;
var statearr_25739_25809 = state_25679__$1;
(statearr_25739_25809[(2)] = true);

(statearr_25739_25809[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (19))){
var inst_25583 = (state_25679[(12)]);
var inst_25589 = figwheel.client.file_reloading.expand_files.call(null,inst_25583);
var state_25679__$1 = state_25679;
var statearr_25740_25810 = state_25679__$1;
(statearr_25740_25810[(2)] = inst_25589);

(statearr_25740_25810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (11))){
var state_25679__$1 = state_25679;
var statearr_25741_25811 = state_25679__$1;
(statearr_25741_25811[(2)] = null);

(statearr_25741_25811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (9))){
var inst_25572 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
var statearr_25742_25812 = state_25679__$1;
(statearr_25742_25812[(2)] = inst_25572);

(statearr_25742_25812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (5))){
var inst_25543 = (state_25679[(8)]);
var inst_25542 = (state_25679[(9)]);
var inst_25545 = (inst_25543 < inst_25542);
var inst_25546 = inst_25545;
var state_25679__$1 = state_25679;
if(cljs.core.truth_(inst_25546)){
var statearr_25743_25813 = state_25679__$1;
(statearr_25743_25813[(1)] = (7));

} else {
var statearr_25744_25814 = state_25679__$1;
(statearr_25744_25814[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (14))){
var inst_25553 = (state_25679[(22)]);
var inst_25562 = cljs.core.first.call(null,inst_25553);
var inst_25563 = figwheel.client.file_reloading.eval_body.call(null,inst_25562,opts);
var inst_25564 = cljs.core.next.call(null,inst_25553);
var inst_25540 = inst_25564;
var inst_25541 = null;
var inst_25542 = (0);
var inst_25543 = (0);
var state_25679__$1 = (function (){var statearr_25745 = state_25679;
(statearr_25745[(7)] = inst_25541);

(statearr_25745[(8)] = inst_25543);

(statearr_25745[(9)] = inst_25542);

(statearr_25745[(10)] = inst_25540);

(statearr_25745[(32)] = inst_25563);

return statearr_25745;
})();
var statearr_25746_25815 = state_25679__$1;
(statearr_25746_25815[(2)] = null);

(statearr_25746_25815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (45))){
var state_25679__$1 = state_25679;
var statearr_25747_25816 = state_25679__$1;
(statearr_25747_25816[(2)] = null);

(statearr_25747_25816[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (26))){
var inst_25601 = (state_25679[(23)]);
var inst_25593 = (state_25679[(19)]);
var inst_25597 = (state_25679[(24)]);
var inst_25599 = (state_25679[(26)]);
var inst_25596 = (state_25679[(25)]);
var inst_25616 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25618 = (function (){var all_files = inst_25593;
var res_SINGLEQUOTE_ = inst_25596;
var res = inst_25597;
var files_not_loaded = inst_25599;
var dependencies_that_loaded = inst_25601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25599,inst_25596,inst_25616,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25617){
var map__25748 = p__25617;
var map__25748__$1 = ((((!((map__25748 == null)))?((((map__25748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25748):map__25748);
var namespace = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25599,inst_25596,inst_25616,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25619 = cljs.core.map.call(null,inst_25618,inst_25597);
var inst_25620 = cljs.core.pr_str.call(null,inst_25619);
var inst_25621 = figwheel.client.utils.log.call(null,inst_25620);
var inst_25622 = (function (){var all_files = inst_25593;
var res_SINGLEQUOTE_ = inst_25596;
var res = inst_25597;
var files_not_loaded = inst_25599;
var dependencies_that_loaded = inst_25601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25599,inst_25596,inst_25616,inst_25618,inst_25619,inst_25620,inst_25621,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25593,inst_25597,inst_25599,inst_25596,inst_25616,inst_25618,inst_25619,inst_25620,inst_25621,state_val_25680,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25623 = setTimeout(inst_25622,(10));
var state_25679__$1 = (function (){var statearr_25750 = state_25679;
(statearr_25750[(33)] = inst_25616);

(statearr_25750[(34)] = inst_25621);

return statearr_25750;
})();
var statearr_25751_25817 = state_25679__$1;
(statearr_25751_25817[(2)] = inst_25623);

(statearr_25751_25817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (16))){
var state_25679__$1 = state_25679;
var statearr_25752_25818 = state_25679__$1;
(statearr_25752_25818[(2)] = reload_dependents);

(statearr_25752_25818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (38))){
var inst_25633 = (state_25679[(16)]);
var inst_25650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25633);
var state_25679__$1 = state_25679;
var statearr_25753_25819 = state_25679__$1;
(statearr_25753_25819[(2)] = inst_25650);

(statearr_25753_25819[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (30))){
var state_25679__$1 = state_25679;
var statearr_25754_25820 = state_25679__$1;
(statearr_25754_25820[(2)] = null);

(statearr_25754_25820[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (10))){
var inst_25553 = (state_25679[(22)]);
var inst_25555 = cljs.core.chunked_seq_QMARK_.call(null,inst_25553);
var state_25679__$1 = state_25679;
if(inst_25555){
var statearr_25755_25821 = state_25679__$1;
(statearr_25755_25821[(1)] = (13));

} else {
var statearr_25756_25822 = state_25679__$1;
(statearr_25756_25822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (18))){
var inst_25587 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
if(cljs.core.truth_(inst_25587)){
var statearr_25757_25823 = state_25679__$1;
(statearr_25757_25823[(1)] = (19));

} else {
var statearr_25758_25824 = state_25679__$1;
(statearr_25758_25824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (42))){
var state_25679__$1 = state_25679;
var statearr_25759_25825 = state_25679__$1;
(statearr_25759_25825[(2)] = null);

(statearr_25759_25825[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (37))){
var inst_25645 = (state_25679[(2)]);
var state_25679__$1 = state_25679;
var statearr_25760_25826 = state_25679__$1;
(statearr_25760_25826[(2)] = inst_25645);

(statearr_25760_25826[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25680 === (8))){
var inst_25540 = (state_25679[(10)]);
var inst_25553 = (state_25679[(22)]);
var inst_25553__$1 = cljs.core.seq.call(null,inst_25540);
var state_25679__$1 = (function (){var statearr_25761 = state_25679;
(statearr_25761[(22)] = inst_25553__$1);

return statearr_25761;
})();
if(inst_25553__$1){
var statearr_25762_25827 = state_25679__$1;
(statearr_25762_25827[(1)] = (10));

} else {
var statearr_25763_25828 = state_25679__$1;
(statearr_25763_25828[(1)] = (11));

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
});})(c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20882__auto__,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____0 = (function (){
var statearr_25767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25767[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__);

(statearr_25767[(1)] = (1));

return statearr_25767;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____1 = (function (state_25679){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_25679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e25768){if((e25768 instanceof Object)){
var ex__20886__auto__ = e25768;
var statearr_25769_25829 = state_25679;
(statearr_25769_25829[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25830 = state_25679;
state_25679 = G__25830;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__ = function(state_25679){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____1.call(this,state_25679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20996__auto__ = (function (){var statearr_25770 = f__20995__auto__.call(null);
(statearr_25770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_25770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__,map__25525,map__25525__$1,opts,before_jsload,on_jsload,reload_dependents,map__25526,map__25526__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20994__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25833,link){
var map__25836 = p__25833;
var map__25836__$1 = ((((!((map__25836 == null)))?((((map__25836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25836):map__25836);
var file = cljs.core.get.call(null,map__25836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25836,map__25836__$1,file){
return (function (p1__25831_SHARP_,p2__25832_SHARP_){
if(cljs.core._EQ_.call(null,p1__25831_SHARP_,p2__25832_SHARP_)){
return p1__25831_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25836,map__25836__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25842){
var map__25843 = p__25842;
var map__25843__$1 = ((((!((map__25843 == null)))?((((map__25843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25843):map__25843);
var match_length = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25838_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25838_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25845 = [];
var len__19364__auto___25848 = arguments.length;
var i__19365__auto___25849 = (0);
while(true){
if((i__19365__auto___25849 < len__19364__auto___25848)){
args25845.push((arguments[i__19365__auto___25849]));

var G__25850 = (i__19365__auto___25849 + (1));
i__19365__auto___25849 = G__25850;
continue;
} else {
}
break;
}

var G__25847 = args25845.length;
switch (G__25847) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25845.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25852_SHARP_,p2__25853_SHARP_){
return cljs.core.assoc.call(null,p1__25852_SHARP_,cljs.core.get.call(null,p2__25853_SHARP_,key),p2__25853_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25854){
var map__25857 = p__25854;
var map__25857__$1 = ((((!((map__25857 == null)))?((((map__25857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25857):map__25857);
var f_data = map__25857__$1;
var file = cljs.core.get.call(null,map__25857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25859,files_msg){
var map__25866 = p__25859;
var map__25866__$1 = ((((!((map__25866 == null)))?((((map__25866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25866):map__25866);
var opts = map__25866__$1;
var on_cssload = cljs.core.get.call(null,map__25866__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25868_25872 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25869_25873 = null;
var count__25870_25874 = (0);
var i__25871_25875 = (0);
while(true){
if((i__25871_25875 < count__25870_25874)){
var f_25876 = cljs.core._nth.call(null,chunk__25869_25873,i__25871_25875);
figwheel.client.file_reloading.reload_css_file.call(null,f_25876);

var G__25877 = seq__25868_25872;
var G__25878 = chunk__25869_25873;
var G__25879 = count__25870_25874;
var G__25880 = (i__25871_25875 + (1));
seq__25868_25872 = G__25877;
chunk__25869_25873 = G__25878;
count__25870_25874 = G__25879;
i__25871_25875 = G__25880;
continue;
} else {
var temp__4425__auto___25881 = cljs.core.seq.call(null,seq__25868_25872);
if(temp__4425__auto___25881){
var seq__25868_25882__$1 = temp__4425__auto___25881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25868_25882__$1)){
var c__19109__auto___25883 = cljs.core.chunk_first.call(null,seq__25868_25882__$1);
var G__25884 = cljs.core.chunk_rest.call(null,seq__25868_25882__$1);
var G__25885 = c__19109__auto___25883;
var G__25886 = cljs.core.count.call(null,c__19109__auto___25883);
var G__25887 = (0);
seq__25868_25872 = G__25884;
chunk__25869_25873 = G__25885;
count__25870_25874 = G__25886;
i__25871_25875 = G__25887;
continue;
} else {
var f_25888 = cljs.core.first.call(null,seq__25868_25882__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25888);

var G__25889 = cljs.core.next.call(null,seq__25868_25882__$1);
var G__25890 = null;
var G__25891 = (0);
var G__25892 = (0);
seq__25868_25872 = G__25889;
chunk__25869_25873 = G__25890;
count__25870_25874 = G__25891;
i__25871_25875 = G__25892;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25866,map__25866__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25866,map__25866__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1463475583479