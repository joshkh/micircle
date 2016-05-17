// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__19823_19827 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19824_19828 = null;
var count__19825_19829 = (0);
var i__19826_19830 = (0);
while(true){
if((i__19826_19830 < count__19825_19829)){
var k_19831 = cljs.core._nth.call(null,chunk__19824_19828,i__19826_19830);
var v_19832 = (b[k_19831]);
(a[k_19831] = v_19832);

var G__19833 = seq__19823_19827;
var G__19834 = chunk__19824_19828;
var G__19835 = count__19825_19829;
var G__19836 = (i__19826_19830 + (1));
seq__19823_19827 = G__19833;
chunk__19824_19828 = G__19834;
count__19825_19829 = G__19835;
i__19826_19830 = G__19836;
continue;
} else {
var temp__4425__auto___19837 = cljs.core.seq.call(null,seq__19823_19827);
if(temp__4425__auto___19837){
var seq__19823_19838__$1 = temp__4425__auto___19837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19823_19838__$1)){
var c__19109__auto___19839 = cljs.core.chunk_first.call(null,seq__19823_19838__$1);
var G__19840 = cljs.core.chunk_rest.call(null,seq__19823_19838__$1);
var G__19841 = c__19109__auto___19839;
var G__19842 = cljs.core.count.call(null,c__19109__auto___19839);
var G__19843 = (0);
seq__19823_19827 = G__19840;
chunk__19824_19828 = G__19841;
count__19825_19829 = G__19842;
i__19826_19830 = G__19843;
continue;
} else {
var k_19844 = cljs.core.first.call(null,seq__19823_19838__$1);
var v_19845 = (b[k_19844]);
(a[k_19844] = v_19845);

var G__19846 = cljs.core.next.call(null,seq__19823_19838__$1);
var G__19847 = null;
var G__19848 = (0);
var G__19849 = (0);
seq__19823_19827 = G__19846;
chunk__19824_19828 = G__19847;
count__19825_19829 = G__19848;
i__19826_19830 = G__19849;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args19850 = [];
var len__19364__auto___19853 = arguments.length;
var i__19365__auto___19854 = (0);
while(true){
if((i__19365__auto___19854 < len__19364__auto___19853)){
args19850.push((arguments[i__19365__auto___19854]));

var G__19855 = (i__19365__auto___19854 + (1));
i__19365__auto___19854 = G__19855;
continue;
} else {
}
break;
}

var G__19852 = args19850.length;
switch (G__19852) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19850.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__19857 = (i + (2));
var G__19858 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19857;
ret = G__19858;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19859_19863 = cljs.core.seq.call(null,v);
var chunk__19860_19864 = null;
var count__19861_19865 = (0);
var i__19862_19866 = (0);
while(true){
if((i__19862_19866 < count__19861_19865)){
var x_19867 = cljs.core._nth.call(null,chunk__19860_19864,i__19862_19866);
ret.push(x_19867);

var G__19868 = seq__19859_19863;
var G__19869 = chunk__19860_19864;
var G__19870 = count__19861_19865;
var G__19871 = (i__19862_19866 + (1));
seq__19859_19863 = G__19868;
chunk__19860_19864 = G__19869;
count__19861_19865 = G__19870;
i__19862_19866 = G__19871;
continue;
} else {
var temp__4425__auto___19872 = cljs.core.seq.call(null,seq__19859_19863);
if(temp__4425__auto___19872){
var seq__19859_19873__$1 = temp__4425__auto___19872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19859_19873__$1)){
var c__19109__auto___19874 = cljs.core.chunk_first.call(null,seq__19859_19873__$1);
var G__19875 = cljs.core.chunk_rest.call(null,seq__19859_19873__$1);
var G__19876 = c__19109__auto___19874;
var G__19877 = cljs.core.count.call(null,c__19109__auto___19874);
var G__19878 = (0);
seq__19859_19863 = G__19875;
chunk__19860_19864 = G__19876;
count__19861_19865 = G__19877;
i__19862_19866 = G__19878;
continue;
} else {
var x_19879 = cljs.core.first.call(null,seq__19859_19873__$1);
ret.push(x_19879);

var G__19880 = cljs.core.next.call(null,seq__19859_19873__$1);
var G__19881 = null;
var G__19882 = (0);
var G__19883 = (0);
seq__19859_19863 = G__19880;
chunk__19860_19864 = G__19881;
count__19861_19865 = G__19882;
i__19862_19866 = G__19883;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19884_19888 = cljs.core.seq.call(null,v);
var chunk__19885_19889 = null;
var count__19886_19890 = (0);
var i__19887_19891 = (0);
while(true){
if((i__19887_19891 < count__19886_19890)){
var x_19892 = cljs.core._nth.call(null,chunk__19885_19889,i__19887_19891);
ret.push(x_19892);

var G__19893 = seq__19884_19888;
var G__19894 = chunk__19885_19889;
var G__19895 = count__19886_19890;
var G__19896 = (i__19887_19891 + (1));
seq__19884_19888 = G__19893;
chunk__19885_19889 = G__19894;
count__19886_19890 = G__19895;
i__19887_19891 = G__19896;
continue;
} else {
var temp__4425__auto___19897 = cljs.core.seq.call(null,seq__19884_19888);
if(temp__4425__auto___19897){
var seq__19884_19898__$1 = temp__4425__auto___19897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19884_19898__$1)){
var c__19109__auto___19899 = cljs.core.chunk_first.call(null,seq__19884_19898__$1);
var G__19900 = cljs.core.chunk_rest.call(null,seq__19884_19898__$1);
var G__19901 = c__19109__auto___19899;
var G__19902 = cljs.core.count.call(null,c__19109__auto___19899);
var G__19903 = (0);
seq__19884_19888 = G__19900;
chunk__19885_19889 = G__19901;
count__19886_19890 = G__19902;
i__19887_19891 = G__19903;
continue;
} else {
var x_19904 = cljs.core.first.call(null,seq__19884_19898__$1);
ret.push(x_19904);

var G__19905 = cljs.core.next.call(null,seq__19884_19898__$1);
var G__19906 = null;
var G__19907 = (0);
var G__19908 = (0);
seq__19884_19888 = G__19905;
chunk__19885_19889 = G__19906;
count__19886_19890 = G__19907;
i__19887_19891 = G__19908;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19909_19913 = cljs.core.seq.call(null,v);
var chunk__19910_19914 = null;
var count__19911_19915 = (0);
var i__19912_19916 = (0);
while(true){
if((i__19912_19916 < count__19911_19915)){
var x_19917 = cljs.core._nth.call(null,chunk__19910_19914,i__19912_19916);
ret.push(x_19917);

var G__19918 = seq__19909_19913;
var G__19919 = chunk__19910_19914;
var G__19920 = count__19911_19915;
var G__19921 = (i__19912_19916 + (1));
seq__19909_19913 = G__19918;
chunk__19910_19914 = G__19919;
count__19911_19915 = G__19920;
i__19912_19916 = G__19921;
continue;
} else {
var temp__4425__auto___19922 = cljs.core.seq.call(null,seq__19909_19913);
if(temp__4425__auto___19922){
var seq__19909_19923__$1 = temp__4425__auto___19922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19909_19923__$1)){
var c__19109__auto___19924 = cljs.core.chunk_first.call(null,seq__19909_19923__$1);
var G__19925 = cljs.core.chunk_rest.call(null,seq__19909_19923__$1);
var G__19926 = c__19109__auto___19924;
var G__19927 = cljs.core.count.call(null,c__19109__auto___19924);
var G__19928 = (0);
seq__19909_19913 = G__19925;
chunk__19910_19914 = G__19926;
count__19911_19915 = G__19927;
i__19912_19916 = G__19928;
continue;
} else {
var x_19929 = cljs.core.first.call(null,seq__19909_19923__$1);
ret.push(x_19929);

var G__19930 = cljs.core.next.call(null,seq__19909_19923__$1);
var G__19931 = null;
var G__19932 = (0);
var G__19933 = (0);
seq__19909_19913 = G__19930;
chunk__19910_19914 = G__19931;
count__19911_19915 = G__19932;
i__19912_19916 = G__19933;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args19934 = [];
var len__19364__auto___19945 = arguments.length;
var i__19365__auto___19946 = (0);
while(true){
if((i__19365__auto___19946 < len__19364__auto___19945)){
args19934.push((arguments[i__19365__auto___19946]));

var G__19947 = (i__19365__auto___19946 + (1));
i__19365__auto___19946 = G__19947;
continue;
} else {
}
break;
}

var G__19936 = args19934.length;
switch (G__19936) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19934.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__19937 = obj;
G__19937.push(kfn.call(null,k),vfn.call(null,v));

return G__19937;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19938 = cljs.core.clone.call(null,handlers);
x19938.forEach = ((function (x19938,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19939 = cljs.core.seq.call(null,coll);
var chunk__19940 = null;
var count__19941 = (0);
var i__19942 = (0);
while(true){
if((i__19942 < count__19941)){
var vec__19943 = cljs.core._nth.call(null,chunk__19940,i__19942);
var k = cljs.core.nth.call(null,vec__19943,(0),null);
var v = cljs.core.nth.call(null,vec__19943,(1),null);
f.call(null,v,k);

var G__19949 = seq__19939;
var G__19950 = chunk__19940;
var G__19951 = count__19941;
var G__19952 = (i__19942 + (1));
seq__19939 = G__19949;
chunk__19940 = G__19950;
count__19941 = G__19951;
i__19942 = G__19952;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19939);
if(temp__4425__auto__){
var seq__19939__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19939__$1)){
var c__19109__auto__ = cljs.core.chunk_first.call(null,seq__19939__$1);
var G__19953 = cljs.core.chunk_rest.call(null,seq__19939__$1);
var G__19954 = c__19109__auto__;
var G__19955 = cljs.core.count.call(null,c__19109__auto__);
var G__19956 = (0);
seq__19939 = G__19953;
chunk__19940 = G__19954;
count__19941 = G__19955;
i__19942 = G__19956;
continue;
} else {
var vec__19944 = cljs.core.first.call(null,seq__19939__$1);
var k = cljs.core.nth.call(null,vec__19944,(0),null);
var v = cljs.core.nth.call(null,vec__19944,(1),null);
f.call(null,v,k);

var G__19957 = cljs.core.next.call(null,seq__19939__$1);
var G__19958 = null;
var G__19959 = (0);
var G__19960 = (0);
seq__19939 = G__19957;
chunk__19940 = G__19958;
count__19941 = G__19959;
i__19942 = G__19960;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19938,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19938;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args19961 = [];
var len__19364__auto___19967 = arguments.length;
var i__19365__auto___19968 = (0);
while(true){
if((i__19365__auto___19968 < len__19364__auto___19967)){
args19961.push((arguments[i__19365__auto___19968]));

var G__19969 = (i__19365__auto___19968 + (1));
i__19365__auto___19968 = G__19969;
continue;
} else {
}
break;
}

var G__19963 = args19961.length;
switch (G__19963) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19961.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit19964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit19964 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19965){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta19965 = meta19965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit19964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19966,meta19965__$1){
var self__ = this;
var _19966__$1 = this;
return (new cognitect.transit.t_cognitect$transit19964(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19965__$1));
});

cognitect.transit.t_cognitect$transit19964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19966){
var self__ = this;
var _19966__$1 = this;
return self__.meta19965;
});

cognitect.transit.t_cognitect$transit19964.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19964.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19964.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19964.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19965","meta19965",-311695617,null)], null);
});

cognitect.transit.t_cognitect$transit19964.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19964.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19964";

cognitect.transit.t_cognitect$transit19964.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cognitect.transit/t_cognitect$transit19964");
});

cognitect.transit.__GT_t_cognitect$transit19964 = (function cognitect$transit$__GT_t_cognitect$transit19964(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19965){
return (new cognitect.transit.t_cognitect$transit19964(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19965));
});

}

return (new cognitect.transit.t_cognitect$transit19964(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18306__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1463475578572