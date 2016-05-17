// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21039 = [];
var len__19364__auto___21045 = arguments.length;
var i__19365__auto___21046 = (0);
while(true){
if((i__19365__auto___21046 < len__19364__auto___21045)){
args21039.push((arguments[i__19365__auto___21046]));

var G__21047 = (i__19365__auto___21046 + (1));
i__19365__auto___21046 = G__21047;
continue;
} else {
}
break;
}

var G__21041 = args21039.length;
switch (G__21041) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21039.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21042 = (function (f,blockable,meta21043){
this.f = f;
this.blockable = blockable;
this.meta21043 = meta21043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21044,meta21043__$1){
var self__ = this;
var _21044__$1 = this;
return (new cljs.core.async.t_cljs$core$async21042(self__.f,self__.blockable,meta21043__$1));
});

cljs.core.async.t_cljs$core$async21042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21044){
var self__ = this;
var _21044__$1 = this;
return self__.meta21043;
});

cljs.core.async.t_cljs$core$async21042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21043","meta21043",-1025341490,null)], null);
});

cljs.core.async.t_cljs$core$async21042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21042";

cljs.core.async.t_cljs$core$async21042.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async21042");
});

cljs.core.async.__GT_t_cljs$core$async21042 = (function cljs$core$async$__GT_t_cljs$core$async21042(f__$1,blockable__$1,meta21043){
return (new cljs.core.async.t_cljs$core$async21042(f__$1,blockable__$1,meta21043));
});

}

return (new cljs.core.async.t_cljs$core$async21042(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21051 = [];
var len__19364__auto___21054 = arguments.length;
var i__19365__auto___21055 = (0);
while(true){
if((i__19365__auto___21055 < len__19364__auto___21054)){
args21051.push((arguments[i__19365__auto___21055]));

var G__21056 = (i__19365__auto___21055 + (1));
i__19365__auto___21055 = G__21056;
continue;
} else {
}
break;
}

var G__21053 = args21051.length;
switch (G__21053) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21051.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21058 = [];
var len__19364__auto___21061 = arguments.length;
var i__19365__auto___21062 = (0);
while(true){
if((i__19365__auto___21062 < len__19364__auto___21061)){
args21058.push((arguments[i__19365__auto___21062]));

var G__21063 = (i__19365__auto___21062 + (1));
i__19365__auto___21062 = G__21063;
continue;
} else {
}
break;
}

var G__21060 = args21058.length;
switch (G__21060) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21058.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21065 = [];
var len__19364__auto___21068 = arguments.length;
var i__19365__auto___21069 = (0);
while(true){
if((i__19365__auto___21069 < len__19364__auto___21068)){
args21065.push((arguments[i__19365__auto___21069]));

var G__21070 = (i__19365__auto___21069 + (1));
i__19365__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var G__21067 = args21065.length;
switch (G__21067) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21065.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21072 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21072);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21072,ret){
return (function (){
return fn1.call(null,val_21072);
});})(val_21072,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21073 = [];
var len__19364__auto___21076 = arguments.length;
var i__19365__auto___21077 = (0);
while(true){
if((i__19365__auto___21077 < len__19364__auto___21076)){
args21073.push((arguments[i__19365__auto___21077]));

var G__21078 = (i__19365__auto___21077 + (1));
i__19365__auto___21077 = G__21078;
continue;
} else {
}
break;
}

var G__21075 = args21073.length;
switch (G__21075) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21073.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19209__auto___21080 = n;
var x_21081 = (0);
while(true){
if((x_21081 < n__19209__auto___21080)){
(a[x_21081] = (0));

var G__21082 = (x_21081 + (1));
x_21081 = G__21082;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21083 = (i + (1));
i = G__21083;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21087 = (function (alt_flag,flag,meta21088){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21088 = meta21088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21089,meta21088__$1){
var self__ = this;
var _21089__$1 = this;
return (new cljs.core.async.t_cljs$core$async21087(self__.alt_flag,self__.flag,meta21088__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21089){
var self__ = this;
var _21089__$1 = this;
return self__.meta21088;
});})(flag))
;

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21087.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21088","meta21088",2124648828,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21087";

cljs.core.async.t_cljs$core$async21087.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async21087");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21087 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21087(alt_flag__$1,flag__$1,meta21088){
return (new cljs.core.async.t_cljs$core$async21087(alt_flag__$1,flag__$1,meta21088));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21087(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21093 = (function (alt_handler,flag,cb,meta21094){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21094 = meta21094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21095,meta21094__$1){
var self__ = this;
var _21095__$1 = this;
return (new cljs.core.async.t_cljs$core$async21093(self__.alt_handler,self__.flag,self__.cb,meta21094__$1));
});

cljs.core.async.t_cljs$core$async21093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21095){
var self__ = this;
var _21095__$1 = this;
return self__.meta21094;
});

cljs.core.async.t_cljs$core$async21093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21094","meta21094",17724791,null)], null);
});

cljs.core.async.t_cljs$core$async21093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21093";

cljs.core.async.t_cljs$core$async21093.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async21093");
});

cljs.core.async.__GT_t_cljs$core$async21093 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21093(alt_handler__$1,flag__$1,cb__$1,meta21094){
return (new cljs.core.async.t_cljs$core$async21093(alt_handler__$1,flag__$1,cb__$1,meta21094));
});

}

return (new cljs.core.async.t_cljs$core$async21093(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21096_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21096_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21097_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21097_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18306__auto__ = wport;
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21098 = (i + (1));
i = G__21098;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18306__auto__ = ret;
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18294__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18294__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18294__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19371__auto__ = [];
var len__19364__auto___21104 = arguments.length;
var i__19365__auto___21105 = (0);
while(true){
if((i__19365__auto___21105 < len__19364__auto___21104)){
args__19371__auto__.push((arguments[i__19365__auto___21105]));

var G__21106 = (i__19365__auto___21105 + (1));
i__19365__auto___21105 = G__21106;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((1) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21101){
var map__21102 = p__21101;
var map__21102__$1 = ((((!((map__21102 == null)))?((((map__21102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21102):map__21102);
var opts = map__21102__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21099){
var G__21100 = cljs.core.first.call(null,seq21099);
var seq21099__$1 = cljs.core.next.call(null,seq21099);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21100,seq21099__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21107 = [];
var len__19364__auto___21157 = arguments.length;
var i__19365__auto___21158 = (0);
while(true){
if((i__19365__auto___21158 < len__19364__auto___21157)){
args21107.push((arguments[i__19365__auto___21158]));

var G__21159 = (i__19365__auto___21158 + (1));
i__19365__auto___21158 = G__21159;
continue;
} else {
}
break;
}

var G__21109 = args21107.length;
switch (G__21109) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21107.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20994__auto___21161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___21161){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___21161){
return (function (state_21133){
var state_val_21134 = (state_21133[(1)]);
if((state_val_21134 === (7))){
var inst_21129 = (state_21133[(2)]);
var state_21133__$1 = state_21133;
var statearr_21135_21162 = state_21133__$1;
(statearr_21135_21162[(2)] = inst_21129);

(statearr_21135_21162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (1))){
var state_21133__$1 = state_21133;
var statearr_21136_21163 = state_21133__$1;
(statearr_21136_21163[(2)] = null);

(statearr_21136_21163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (4))){
var inst_21112 = (state_21133[(7)]);
var inst_21112__$1 = (state_21133[(2)]);
var inst_21113 = (inst_21112__$1 == null);
var state_21133__$1 = (function (){var statearr_21137 = state_21133;
(statearr_21137[(7)] = inst_21112__$1);

return statearr_21137;
})();
if(cljs.core.truth_(inst_21113)){
var statearr_21138_21164 = state_21133__$1;
(statearr_21138_21164[(1)] = (5));

} else {
var statearr_21139_21165 = state_21133__$1;
(statearr_21139_21165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (13))){
var state_21133__$1 = state_21133;
var statearr_21140_21166 = state_21133__$1;
(statearr_21140_21166[(2)] = null);

(statearr_21140_21166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (6))){
var inst_21112 = (state_21133[(7)]);
var state_21133__$1 = state_21133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21133__$1,(11),to,inst_21112);
} else {
if((state_val_21134 === (3))){
var inst_21131 = (state_21133[(2)]);
var state_21133__$1 = state_21133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21133__$1,inst_21131);
} else {
if((state_val_21134 === (12))){
var state_21133__$1 = state_21133;
var statearr_21141_21167 = state_21133__$1;
(statearr_21141_21167[(2)] = null);

(statearr_21141_21167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (2))){
var state_21133__$1 = state_21133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21133__$1,(4),from);
} else {
if((state_val_21134 === (11))){
var inst_21122 = (state_21133[(2)]);
var state_21133__$1 = state_21133;
if(cljs.core.truth_(inst_21122)){
var statearr_21142_21168 = state_21133__$1;
(statearr_21142_21168[(1)] = (12));

} else {
var statearr_21143_21169 = state_21133__$1;
(statearr_21143_21169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (9))){
var state_21133__$1 = state_21133;
var statearr_21144_21170 = state_21133__$1;
(statearr_21144_21170[(2)] = null);

(statearr_21144_21170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (5))){
var state_21133__$1 = state_21133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21145_21171 = state_21133__$1;
(statearr_21145_21171[(1)] = (8));

} else {
var statearr_21146_21172 = state_21133__$1;
(statearr_21146_21172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (14))){
var inst_21127 = (state_21133[(2)]);
var state_21133__$1 = state_21133;
var statearr_21147_21173 = state_21133__$1;
(statearr_21147_21173[(2)] = inst_21127);

(statearr_21147_21173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (10))){
var inst_21119 = (state_21133[(2)]);
var state_21133__$1 = state_21133;
var statearr_21148_21174 = state_21133__$1;
(statearr_21148_21174[(2)] = inst_21119);

(statearr_21148_21174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21134 === (8))){
var inst_21116 = cljs.core.async.close_BANG_.call(null,to);
var state_21133__$1 = state_21133;
var statearr_21149_21175 = state_21133__$1;
(statearr_21149_21175[(2)] = inst_21116);

(statearr_21149_21175[(1)] = (10));


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
});})(c__20994__auto___21161))
;
return ((function (switch__20882__auto__,c__20994__auto___21161){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_21153 = [null,null,null,null,null,null,null,null];
(statearr_21153[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_21153[(1)] = (1));

return statearr_21153;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_21133){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21154){if((e21154 instanceof Object)){
var ex__20886__auto__ = e21154;
var statearr_21155_21176 = state_21133;
(statearr_21155_21176[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21177 = state_21133;
state_21133 = G__21177;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_21133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_21133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___21161))
})();
var state__20996__auto__ = (function (){var statearr_21156 = f__20995__auto__.call(null);
(statearr_21156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___21161);

return statearr_21156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___21161))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21361){
var vec__21362 = p__21361;
var v = cljs.core.nth.call(null,vec__21362,(0),null);
var p = cljs.core.nth.call(null,vec__21362,(1),null);
var job = vec__21362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20994__auto___21544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___21544,res,vec__21362,v,p,job,jobs,results){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___21544,res,vec__21362,v,p,job,jobs,results){
return (function (state_21367){
var state_val_21368 = (state_21367[(1)]);
if((state_val_21368 === (1))){
var state_21367__$1 = state_21367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21367__$1,(2),res,v);
} else {
if((state_val_21368 === (2))){
var inst_21364 = (state_21367[(2)]);
var inst_21365 = cljs.core.async.close_BANG_.call(null,res);
var state_21367__$1 = (function (){var statearr_21369 = state_21367;
(statearr_21369[(7)] = inst_21364);

return statearr_21369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21367__$1,inst_21365);
} else {
return null;
}
}
});})(c__20994__auto___21544,res,vec__21362,v,p,job,jobs,results))
;
return ((function (switch__20882__auto__,c__20994__auto___21544,res,vec__21362,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0 = (function (){
var statearr_21373 = [null,null,null,null,null,null,null,null];
(statearr_21373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__);

(statearr_21373[(1)] = (1));

return statearr_21373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1 = (function (state_21367){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21374){if((e21374 instanceof Object)){
var ex__20886__auto__ = e21374;
var statearr_21375_21545 = state_21367;
(statearr_21375_21545[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21546 = state_21367;
state_21367 = G__21546;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = function(state_21367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1.call(this,state_21367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___21544,res,vec__21362,v,p,job,jobs,results))
})();
var state__20996__auto__ = (function (){var statearr_21376 = f__20995__auto__.call(null);
(statearr_21376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___21544);

return statearr_21376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___21544,res,vec__21362,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21377){
var vec__21378 = p__21377;
var v = cljs.core.nth.call(null,vec__21378,(0),null);
var p = cljs.core.nth.call(null,vec__21378,(1),null);
var job = vec__21378;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19209__auto___21547 = n;
var __21548 = (0);
while(true){
if((__21548 < n__19209__auto___21547)){
var G__21379_21549 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21379_21549) {
case "compute":
var c__20994__auto___21551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21548,c__20994__auto___21551,G__21379_21549,n__19209__auto___21547,jobs,results,process,async){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (__21548,c__20994__auto___21551,G__21379_21549,n__19209__auto___21547,jobs,results,process,async){
return (function (state_21392){
var state_val_21393 = (state_21392[(1)]);
if((state_val_21393 === (1))){
var state_21392__$1 = state_21392;
var statearr_21394_21552 = state_21392__$1;
(statearr_21394_21552[(2)] = null);

(statearr_21394_21552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21393 === (2))){
var state_21392__$1 = state_21392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21392__$1,(4),jobs);
} else {
if((state_val_21393 === (3))){
var inst_21390 = (state_21392[(2)]);
var state_21392__$1 = state_21392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21392__$1,inst_21390);
} else {
if((state_val_21393 === (4))){
var inst_21382 = (state_21392[(2)]);
var inst_21383 = process.call(null,inst_21382);
var state_21392__$1 = state_21392;
if(cljs.core.truth_(inst_21383)){
var statearr_21395_21553 = state_21392__$1;
(statearr_21395_21553[(1)] = (5));

} else {
var statearr_21396_21554 = state_21392__$1;
(statearr_21396_21554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21393 === (5))){
var state_21392__$1 = state_21392;
var statearr_21397_21555 = state_21392__$1;
(statearr_21397_21555[(2)] = null);

(statearr_21397_21555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21393 === (6))){
var state_21392__$1 = state_21392;
var statearr_21398_21556 = state_21392__$1;
(statearr_21398_21556[(2)] = null);

(statearr_21398_21556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21393 === (7))){
var inst_21388 = (state_21392[(2)]);
var state_21392__$1 = state_21392;
var statearr_21399_21557 = state_21392__$1;
(statearr_21399_21557[(2)] = inst_21388);

(statearr_21399_21557[(1)] = (3));


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
});})(__21548,c__20994__auto___21551,G__21379_21549,n__19209__auto___21547,jobs,results,process,async))
;
return ((function (__21548,switch__20882__auto__,c__20994__auto___21551,G__21379_21549,n__19209__auto___21547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0 = (function (){
var statearr_21403 = [null,null,null,null,null,null,null];
(statearr_21403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__);

(statearr_21403[(1)] = (1));

return statearr_21403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1 = (function (state_21392){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21404){if((e21404 instanceof Object)){
var ex__20886__auto__ = e21404;
var statearr_21405_21558 = state_21392;
(statearr_21405_21558[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21559 = state_21392;
state_21392 = G__21559;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = function(state_21392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1.call(this,state_21392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__;
})()
;})(__21548,switch__20882__auto__,c__20994__auto___21551,G__21379_21549,n__19209__auto___21547,jobs,results,process,async))
})();
var state__20996__auto__ = (function (){var statearr_21406 = f__20995__auto__.call(null);
(statearr_21406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___21551);

return statearr_21406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(__21548,c__20994__auto___21551,G__21379_21549,n__19209__auto___21547,jobs,results,process,async))
);


break;
case "async":
var c__20994__auto___21560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21548,c__20994__auto___21560,G__21379_21549,n__19209__auto___21547,jobs,results,process,async){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (__21548,c__20994__auto___21560,G__21379_21549,n__19209__auto___21547,jobs,results,process,async){
return (function (state_21419){
var state_val_21420 = (state_21419[(1)]);
if((state_val_21420 === (1))){
var state_21419__$1 = state_21419;
var statearr_21421_21561 = state_21419__$1;
(statearr_21421_21561[(2)] = null);

(statearr_21421_21561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (2))){
var state_21419__$1 = state_21419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21419__$1,(4),jobs);
} else {
if((state_val_21420 === (3))){
var inst_21417 = (state_21419[(2)]);
var state_21419__$1 = state_21419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21419__$1,inst_21417);
} else {
if((state_val_21420 === (4))){
var inst_21409 = (state_21419[(2)]);
var inst_21410 = async.call(null,inst_21409);
var state_21419__$1 = state_21419;
if(cljs.core.truth_(inst_21410)){
var statearr_21422_21562 = state_21419__$1;
(statearr_21422_21562[(1)] = (5));

} else {
var statearr_21423_21563 = state_21419__$1;
(statearr_21423_21563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (5))){
var state_21419__$1 = state_21419;
var statearr_21424_21564 = state_21419__$1;
(statearr_21424_21564[(2)] = null);

(statearr_21424_21564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (6))){
var state_21419__$1 = state_21419;
var statearr_21425_21565 = state_21419__$1;
(statearr_21425_21565[(2)] = null);

(statearr_21425_21565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (7))){
var inst_21415 = (state_21419[(2)]);
var state_21419__$1 = state_21419;
var statearr_21426_21566 = state_21419__$1;
(statearr_21426_21566[(2)] = inst_21415);

(statearr_21426_21566[(1)] = (3));


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
});})(__21548,c__20994__auto___21560,G__21379_21549,n__19209__auto___21547,jobs,results,process,async))
;
return ((function (__21548,switch__20882__auto__,c__20994__auto___21560,G__21379_21549,n__19209__auto___21547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0 = (function (){
var statearr_21430 = [null,null,null,null,null,null,null];
(statearr_21430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__);

(statearr_21430[(1)] = (1));

return statearr_21430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1 = (function (state_21419){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21431){if((e21431 instanceof Object)){
var ex__20886__auto__ = e21431;
var statearr_21432_21567 = state_21419;
(statearr_21432_21567[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21568 = state_21419;
state_21419 = G__21568;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = function(state_21419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1.call(this,state_21419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__;
})()
;})(__21548,switch__20882__auto__,c__20994__auto___21560,G__21379_21549,n__19209__auto___21547,jobs,results,process,async))
})();
var state__20996__auto__ = (function (){var statearr_21433 = f__20995__auto__.call(null);
(statearr_21433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___21560);

return statearr_21433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(__21548,c__20994__auto___21560,G__21379_21549,n__19209__auto___21547,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21569 = (__21548 + (1));
__21548 = G__21569;
continue;
} else {
}
break;
}

var c__20994__auto___21570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___21570,jobs,results,process,async){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___21570,jobs,results,process,async){
return (function (state_21455){
var state_val_21456 = (state_21455[(1)]);
if((state_val_21456 === (1))){
var state_21455__$1 = state_21455;
var statearr_21457_21571 = state_21455__$1;
(statearr_21457_21571[(2)] = null);

(statearr_21457_21571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21456 === (2))){
var state_21455__$1 = state_21455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21455__$1,(4),from);
} else {
if((state_val_21456 === (3))){
var inst_21453 = (state_21455[(2)]);
var state_21455__$1 = state_21455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21455__$1,inst_21453);
} else {
if((state_val_21456 === (4))){
var inst_21436 = (state_21455[(7)]);
var inst_21436__$1 = (state_21455[(2)]);
var inst_21437 = (inst_21436__$1 == null);
var state_21455__$1 = (function (){var statearr_21458 = state_21455;
(statearr_21458[(7)] = inst_21436__$1);

return statearr_21458;
})();
if(cljs.core.truth_(inst_21437)){
var statearr_21459_21572 = state_21455__$1;
(statearr_21459_21572[(1)] = (5));

} else {
var statearr_21460_21573 = state_21455__$1;
(statearr_21460_21573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21456 === (5))){
var inst_21439 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21455__$1 = state_21455;
var statearr_21461_21574 = state_21455__$1;
(statearr_21461_21574[(2)] = inst_21439);

(statearr_21461_21574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21456 === (6))){
var inst_21441 = (state_21455[(8)]);
var inst_21436 = (state_21455[(7)]);
var inst_21441__$1 = cljs.core.async.chan.call(null,(1));
var inst_21442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21443 = [inst_21436,inst_21441__$1];
var inst_21444 = (new cljs.core.PersistentVector(null,2,(5),inst_21442,inst_21443,null));
var state_21455__$1 = (function (){var statearr_21462 = state_21455;
(statearr_21462[(8)] = inst_21441__$1);

return statearr_21462;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21455__$1,(8),jobs,inst_21444);
} else {
if((state_val_21456 === (7))){
var inst_21451 = (state_21455[(2)]);
var state_21455__$1 = state_21455;
var statearr_21463_21575 = state_21455__$1;
(statearr_21463_21575[(2)] = inst_21451);

(statearr_21463_21575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21456 === (8))){
var inst_21441 = (state_21455[(8)]);
var inst_21446 = (state_21455[(2)]);
var state_21455__$1 = (function (){var statearr_21464 = state_21455;
(statearr_21464[(9)] = inst_21446);

return statearr_21464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21455__$1,(9),results,inst_21441);
} else {
if((state_val_21456 === (9))){
var inst_21448 = (state_21455[(2)]);
var state_21455__$1 = (function (){var statearr_21465 = state_21455;
(statearr_21465[(10)] = inst_21448);

return statearr_21465;
})();
var statearr_21466_21576 = state_21455__$1;
(statearr_21466_21576[(2)] = null);

(statearr_21466_21576[(1)] = (2));


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
});})(c__20994__auto___21570,jobs,results,process,async))
;
return ((function (switch__20882__auto__,c__20994__auto___21570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0 = (function (){
var statearr_21470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__);

(statearr_21470[(1)] = (1));

return statearr_21470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1 = (function (state_21455){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21471){if((e21471 instanceof Object)){
var ex__20886__auto__ = e21471;
var statearr_21472_21577 = state_21455;
(statearr_21472_21577[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21578 = state_21455;
state_21455 = G__21578;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = function(state_21455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1.call(this,state_21455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___21570,jobs,results,process,async))
})();
var state__20996__auto__ = (function (){var statearr_21473 = f__20995__auto__.call(null);
(statearr_21473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___21570);

return statearr_21473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___21570,jobs,results,process,async))
);


var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__,jobs,results,process,async){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__,jobs,results,process,async){
return (function (state_21511){
var state_val_21512 = (state_21511[(1)]);
if((state_val_21512 === (7))){
var inst_21507 = (state_21511[(2)]);
var state_21511__$1 = state_21511;
var statearr_21513_21579 = state_21511__$1;
(statearr_21513_21579[(2)] = inst_21507);

(statearr_21513_21579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (20))){
var state_21511__$1 = state_21511;
var statearr_21514_21580 = state_21511__$1;
(statearr_21514_21580[(2)] = null);

(statearr_21514_21580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (1))){
var state_21511__$1 = state_21511;
var statearr_21515_21581 = state_21511__$1;
(statearr_21515_21581[(2)] = null);

(statearr_21515_21581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (4))){
var inst_21476 = (state_21511[(7)]);
var inst_21476__$1 = (state_21511[(2)]);
var inst_21477 = (inst_21476__$1 == null);
var state_21511__$1 = (function (){var statearr_21516 = state_21511;
(statearr_21516[(7)] = inst_21476__$1);

return statearr_21516;
})();
if(cljs.core.truth_(inst_21477)){
var statearr_21517_21582 = state_21511__$1;
(statearr_21517_21582[(1)] = (5));

} else {
var statearr_21518_21583 = state_21511__$1;
(statearr_21518_21583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (15))){
var inst_21489 = (state_21511[(8)]);
var state_21511__$1 = state_21511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21511__$1,(18),to,inst_21489);
} else {
if((state_val_21512 === (21))){
var inst_21502 = (state_21511[(2)]);
var state_21511__$1 = state_21511;
var statearr_21519_21584 = state_21511__$1;
(statearr_21519_21584[(2)] = inst_21502);

(statearr_21519_21584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (13))){
var inst_21504 = (state_21511[(2)]);
var state_21511__$1 = (function (){var statearr_21520 = state_21511;
(statearr_21520[(9)] = inst_21504);

return statearr_21520;
})();
var statearr_21521_21585 = state_21511__$1;
(statearr_21521_21585[(2)] = null);

(statearr_21521_21585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (6))){
var inst_21476 = (state_21511[(7)]);
var state_21511__$1 = state_21511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21511__$1,(11),inst_21476);
} else {
if((state_val_21512 === (17))){
var inst_21497 = (state_21511[(2)]);
var state_21511__$1 = state_21511;
if(cljs.core.truth_(inst_21497)){
var statearr_21522_21586 = state_21511__$1;
(statearr_21522_21586[(1)] = (19));

} else {
var statearr_21523_21587 = state_21511__$1;
(statearr_21523_21587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (3))){
var inst_21509 = (state_21511[(2)]);
var state_21511__$1 = state_21511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21511__$1,inst_21509);
} else {
if((state_val_21512 === (12))){
var inst_21486 = (state_21511[(10)]);
var state_21511__$1 = state_21511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21511__$1,(14),inst_21486);
} else {
if((state_val_21512 === (2))){
var state_21511__$1 = state_21511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21511__$1,(4),results);
} else {
if((state_val_21512 === (19))){
var state_21511__$1 = state_21511;
var statearr_21524_21588 = state_21511__$1;
(statearr_21524_21588[(2)] = null);

(statearr_21524_21588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (11))){
var inst_21486 = (state_21511[(2)]);
var state_21511__$1 = (function (){var statearr_21525 = state_21511;
(statearr_21525[(10)] = inst_21486);

return statearr_21525;
})();
var statearr_21526_21589 = state_21511__$1;
(statearr_21526_21589[(2)] = null);

(statearr_21526_21589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (9))){
var state_21511__$1 = state_21511;
var statearr_21527_21590 = state_21511__$1;
(statearr_21527_21590[(2)] = null);

(statearr_21527_21590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (5))){
var state_21511__$1 = state_21511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21528_21591 = state_21511__$1;
(statearr_21528_21591[(1)] = (8));

} else {
var statearr_21529_21592 = state_21511__$1;
(statearr_21529_21592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (14))){
var inst_21489 = (state_21511[(8)]);
var inst_21491 = (state_21511[(11)]);
var inst_21489__$1 = (state_21511[(2)]);
var inst_21490 = (inst_21489__$1 == null);
var inst_21491__$1 = cljs.core.not.call(null,inst_21490);
var state_21511__$1 = (function (){var statearr_21530 = state_21511;
(statearr_21530[(8)] = inst_21489__$1);

(statearr_21530[(11)] = inst_21491__$1);

return statearr_21530;
})();
if(inst_21491__$1){
var statearr_21531_21593 = state_21511__$1;
(statearr_21531_21593[(1)] = (15));

} else {
var statearr_21532_21594 = state_21511__$1;
(statearr_21532_21594[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (16))){
var inst_21491 = (state_21511[(11)]);
var state_21511__$1 = state_21511;
var statearr_21533_21595 = state_21511__$1;
(statearr_21533_21595[(2)] = inst_21491);

(statearr_21533_21595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (10))){
var inst_21483 = (state_21511[(2)]);
var state_21511__$1 = state_21511;
var statearr_21534_21596 = state_21511__$1;
(statearr_21534_21596[(2)] = inst_21483);

(statearr_21534_21596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (18))){
var inst_21494 = (state_21511[(2)]);
var state_21511__$1 = state_21511;
var statearr_21535_21597 = state_21511__$1;
(statearr_21535_21597[(2)] = inst_21494);

(statearr_21535_21597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21512 === (8))){
var inst_21480 = cljs.core.async.close_BANG_.call(null,to);
var state_21511__$1 = state_21511;
var statearr_21536_21598 = state_21511__$1;
(statearr_21536_21598[(2)] = inst_21480);

(statearr_21536_21598[(1)] = (10));


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
});})(c__20994__auto__,jobs,results,process,async))
;
return ((function (switch__20882__auto__,c__20994__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0 = (function (){
var statearr_21540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__);

(statearr_21540[(1)] = (1));

return statearr_21540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1 = (function (state_21511){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21541){if((e21541 instanceof Object)){
var ex__20886__auto__ = e21541;
var statearr_21542_21599 = state_21511;
(statearr_21542_21599[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21600 = state_21511;
state_21511 = G__21600;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__ = function(state_21511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1.call(this,state_21511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__,jobs,results,process,async))
})();
var state__20996__auto__ = (function (){var statearr_21543 = f__20995__auto__.call(null);
(statearr_21543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_21543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__,jobs,results,process,async))
);

return c__20994__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21601 = [];
var len__19364__auto___21604 = arguments.length;
var i__19365__auto___21605 = (0);
while(true){
if((i__19365__auto___21605 < len__19364__auto___21604)){
args21601.push((arguments[i__19365__auto___21605]));

var G__21606 = (i__19365__auto___21605 + (1));
i__19365__auto___21605 = G__21606;
continue;
} else {
}
break;
}

var G__21603 = args21601.length;
switch (G__21603) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21601.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21608 = [];
var len__19364__auto___21611 = arguments.length;
var i__19365__auto___21612 = (0);
while(true){
if((i__19365__auto___21612 < len__19364__auto___21611)){
args21608.push((arguments[i__19365__auto___21612]));

var G__21613 = (i__19365__auto___21612 + (1));
i__19365__auto___21612 = G__21613;
continue;
} else {
}
break;
}

var G__21610 = args21608.length;
switch (G__21610) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21608.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21615 = [];
var len__19364__auto___21668 = arguments.length;
var i__19365__auto___21669 = (0);
while(true){
if((i__19365__auto___21669 < len__19364__auto___21668)){
args21615.push((arguments[i__19365__auto___21669]));

var G__21670 = (i__19365__auto___21669 + (1));
i__19365__auto___21669 = G__21670;
continue;
} else {
}
break;
}

var G__21617 = args21615.length;
switch (G__21617) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21615.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20994__auto___21672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___21672,tc,fc){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___21672,tc,fc){
return (function (state_21643){
var state_val_21644 = (state_21643[(1)]);
if((state_val_21644 === (7))){
var inst_21639 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
var statearr_21645_21673 = state_21643__$1;
(statearr_21645_21673[(2)] = inst_21639);

(statearr_21645_21673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (1))){
var state_21643__$1 = state_21643;
var statearr_21646_21674 = state_21643__$1;
(statearr_21646_21674[(2)] = null);

(statearr_21646_21674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (4))){
var inst_21620 = (state_21643[(7)]);
var inst_21620__$1 = (state_21643[(2)]);
var inst_21621 = (inst_21620__$1 == null);
var state_21643__$1 = (function (){var statearr_21647 = state_21643;
(statearr_21647[(7)] = inst_21620__$1);

return statearr_21647;
})();
if(cljs.core.truth_(inst_21621)){
var statearr_21648_21675 = state_21643__$1;
(statearr_21648_21675[(1)] = (5));

} else {
var statearr_21649_21676 = state_21643__$1;
(statearr_21649_21676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (13))){
var state_21643__$1 = state_21643;
var statearr_21650_21677 = state_21643__$1;
(statearr_21650_21677[(2)] = null);

(statearr_21650_21677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (6))){
var inst_21620 = (state_21643[(7)]);
var inst_21626 = p.call(null,inst_21620);
var state_21643__$1 = state_21643;
if(cljs.core.truth_(inst_21626)){
var statearr_21651_21678 = state_21643__$1;
(statearr_21651_21678[(1)] = (9));

} else {
var statearr_21652_21679 = state_21643__$1;
(statearr_21652_21679[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (3))){
var inst_21641 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21643__$1,inst_21641);
} else {
if((state_val_21644 === (12))){
var state_21643__$1 = state_21643;
var statearr_21653_21680 = state_21643__$1;
(statearr_21653_21680[(2)] = null);

(statearr_21653_21680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (2))){
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21643__$1,(4),ch);
} else {
if((state_val_21644 === (11))){
var inst_21620 = (state_21643[(7)]);
var inst_21630 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21643__$1,(8),inst_21630,inst_21620);
} else {
if((state_val_21644 === (9))){
var state_21643__$1 = state_21643;
var statearr_21654_21681 = state_21643__$1;
(statearr_21654_21681[(2)] = tc);

(statearr_21654_21681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (5))){
var inst_21623 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21624 = cljs.core.async.close_BANG_.call(null,fc);
var state_21643__$1 = (function (){var statearr_21655 = state_21643;
(statearr_21655[(8)] = inst_21623);

return statearr_21655;
})();
var statearr_21656_21682 = state_21643__$1;
(statearr_21656_21682[(2)] = inst_21624);

(statearr_21656_21682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (14))){
var inst_21637 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
var statearr_21657_21683 = state_21643__$1;
(statearr_21657_21683[(2)] = inst_21637);

(statearr_21657_21683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (10))){
var state_21643__$1 = state_21643;
var statearr_21658_21684 = state_21643__$1;
(statearr_21658_21684[(2)] = fc);

(statearr_21658_21684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (8))){
var inst_21632 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
if(cljs.core.truth_(inst_21632)){
var statearr_21659_21685 = state_21643__$1;
(statearr_21659_21685[(1)] = (12));

} else {
var statearr_21660_21686 = state_21643__$1;
(statearr_21660_21686[(1)] = (13));

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
});})(c__20994__auto___21672,tc,fc))
;
return ((function (switch__20882__auto__,c__20994__auto___21672,tc,fc){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_21664 = [null,null,null,null,null,null,null,null,null];
(statearr_21664[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_21664[(1)] = (1));

return statearr_21664;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_21643){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21665){if((e21665 instanceof Object)){
var ex__20886__auto__ = e21665;
var statearr_21666_21687 = state_21643;
(statearr_21666_21687[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21688 = state_21643;
state_21643 = G__21688;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_21643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_21643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___21672,tc,fc))
})();
var state__20996__auto__ = (function (){var statearr_21667 = f__20995__auto__.call(null);
(statearr_21667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___21672);

return statearr_21667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___21672,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_21752){
var state_val_21753 = (state_21752[(1)]);
if((state_val_21753 === (7))){
var inst_21748 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
var statearr_21754_21775 = state_21752__$1;
(statearr_21754_21775[(2)] = inst_21748);

(statearr_21754_21775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (1))){
var inst_21732 = init;
var state_21752__$1 = (function (){var statearr_21755 = state_21752;
(statearr_21755[(7)] = inst_21732);

return statearr_21755;
})();
var statearr_21756_21776 = state_21752__$1;
(statearr_21756_21776[(2)] = null);

(statearr_21756_21776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (4))){
var inst_21735 = (state_21752[(8)]);
var inst_21735__$1 = (state_21752[(2)]);
var inst_21736 = (inst_21735__$1 == null);
var state_21752__$1 = (function (){var statearr_21757 = state_21752;
(statearr_21757[(8)] = inst_21735__$1);

return statearr_21757;
})();
if(cljs.core.truth_(inst_21736)){
var statearr_21758_21777 = state_21752__$1;
(statearr_21758_21777[(1)] = (5));

} else {
var statearr_21759_21778 = state_21752__$1;
(statearr_21759_21778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (6))){
var inst_21739 = (state_21752[(9)]);
var inst_21735 = (state_21752[(8)]);
var inst_21732 = (state_21752[(7)]);
var inst_21739__$1 = f.call(null,inst_21732,inst_21735);
var inst_21740 = cljs.core.reduced_QMARK_.call(null,inst_21739__$1);
var state_21752__$1 = (function (){var statearr_21760 = state_21752;
(statearr_21760[(9)] = inst_21739__$1);

return statearr_21760;
})();
if(inst_21740){
var statearr_21761_21779 = state_21752__$1;
(statearr_21761_21779[(1)] = (8));

} else {
var statearr_21762_21780 = state_21752__$1;
(statearr_21762_21780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (3))){
var inst_21750 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21752__$1,inst_21750);
} else {
if((state_val_21753 === (2))){
var state_21752__$1 = state_21752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21752__$1,(4),ch);
} else {
if((state_val_21753 === (9))){
var inst_21739 = (state_21752[(9)]);
var inst_21732 = inst_21739;
var state_21752__$1 = (function (){var statearr_21763 = state_21752;
(statearr_21763[(7)] = inst_21732);

return statearr_21763;
})();
var statearr_21764_21781 = state_21752__$1;
(statearr_21764_21781[(2)] = null);

(statearr_21764_21781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (5))){
var inst_21732 = (state_21752[(7)]);
var state_21752__$1 = state_21752;
var statearr_21765_21782 = state_21752__$1;
(statearr_21765_21782[(2)] = inst_21732);

(statearr_21765_21782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (10))){
var inst_21746 = (state_21752[(2)]);
var state_21752__$1 = state_21752;
var statearr_21766_21783 = state_21752__$1;
(statearr_21766_21783[(2)] = inst_21746);

(statearr_21766_21783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21753 === (8))){
var inst_21739 = (state_21752[(9)]);
var inst_21742 = cljs.core.deref.call(null,inst_21739);
var state_21752__$1 = state_21752;
var statearr_21767_21784 = state_21752__$1;
(statearr_21767_21784[(2)] = inst_21742);

(statearr_21767_21784[(1)] = (10));


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
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20883__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20883__auto____0 = (function (){
var statearr_21771 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21771[(0)] = cljs$core$async$reduce_$_state_machine__20883__auto__);

(statearr_21771[(1)] = (1));

return statearr_21771;
});
var cljs$core$async$reduce_$_state_machine__20883__auto____1 = (function (state_21752){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21772){if((e21772 instanceof Object)){
var ex__20886__auto__ = e21772;
var statearr_21773_21785 = state_21752;
(statearr_21773_21785[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21786 = state_21752;
state_21752 = G__21786;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20883__auto__ = function(state_21752){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20883__auto____1.call(this,state_21752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20883__auto____0;
cljs$core$async$reduce_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20883__auto____1;
return cljs$core$async$reduce_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_21774 = f__20995__auto__.call(null);
(statearr_21774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_21774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21787 = [];
var len__19364__auto___21839 = arguments.length;
var i__19365__auto___21840 = (0);
while(true){
if((i__19365__auto___21840 < len__19364__auto___21839)){
args21787.push((arguments[i__19365__auto___21840]));

var G__21841 = (i__19365__auto___21840 + (1));
i__19365__auto___21840 = G__21841;
continue;
} else {
}
break;
}

var G__21789 = args21787.length;
switch (G__21789) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21787.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_21814){
var state_val_21815 = (state_21814[(1)]);
if((state_val_21815 === (7))){
var inst_21796 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
var statearr_21816_21843 = state_21814__$1;
(statearr_21816_21843[(2)] = inst_21796);

(statearr_21816_21843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (1))){
var inst_21790 = cljs.core.seq.call(null,coll);
var inst_21791 = inst_21790;
var state_21814__$1 = (function (){var statearr_21817 = state_21814;
(statearr_21817[(7)] = inst_21791);

return statearr_21817;
})();
var statearr_21818_21844 = state_21814__$1;
(statearr_21818_21844[(2)] = null);

(statearr_21818_21844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (4))){
var inst_21791 = (state_21814[(7)]);
var inst_21794 = cljs.core.first.call(null,inst_21791);
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21814__$1,(7),ch,inst_21794);
} else {
if((state_val_21815 === (13))){
var inst_21808 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
var statearr_21819_21845 = state_21814__$1;
(statearr_21819_21845[(2)] = inst_21808);

(statearr_21819_21845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (6))){
var inst_21799 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
if(cljs.core.truth_(inst_21799)){
var statearr_21820_21846 = state_21814__$1;
(statearr_21820_21846[(1)] = (8));

} else {
var statearr_21821_21847 = state_21814__$1;
(statearr_21821_21847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (3))){
var inst_21812 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21814__$1,inst_21812);
} else {
if((state_val_21815 === (12))){
var state_21814__$1 = state_21814;
var statearr_21822_21848 = state_21814__$1;
(statearr_21822_21848[(2)] = null);

(statearr_21822_21848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (2))){
var inst_21791 = (state_21814[(7)]);
var state_21814__$1 = state_21814;
if(cljs.core.truth_(inst_21791)){
var statearr_21823_21849 = state_21814__$1;
(statearr_21823_21849[(1)] = (4));

} else {
var statearr_21824_21850 = state_21814__$1;
(statearr_21824_21850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (11))){
var inst_21805 = cljs.core.async.close_BANG_.call(null,ch);
var state_21814__$1 = state_21814;
var statearr_21825_21851 = state_21814__$1;
(statearr_21825_21851[(2)] = inst_21805);

(statearr_21825_21851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (9))){
var state_21814__$1 = state_21814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21826_21852 = state_21814__$1;
(statearr_21826_21852[(1)] = (11));

} else {
var statearr_21827_21853 = state_21814__$1;
(statearr_21827_21853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (5))){
var inst_21791 = (state_21814[(7)]);
var state_21814__$1 = state_21814;
var statearr_21828_21854 = state_21814__$1;
(statearr_21828_21854[(2)] = inst_21791);

(statearr_21828_21854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (10))){
var inst_21810 = (state_21814[(2)]);
var state_21814__$1 = state_21814;
var statearr_21829_21855 = state_21814__$1;
(statearr_21829_21855[(2)] = inst_21810);

(statearr_21829_21855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21815 === (8))){
var inst_21791 = (state_21814[(7)]);
var inst_21801 = cljs.core.next.call(null,inst_21791);
var inst_21791__$1 = inst_21801;
var state_21814__$1 = (function (){var statearr_21830 = state_21814;
(statearr_21830[(7)] = inst_21791__$1);

return statearr_21830;
})();
var statearr_21831_21856 = state_21814__$1;
(statearr_21831_21856[(2)] = null);

(statearr_21831_21856[(1)] = (2));


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
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_21835 = [null,null,null,null,null,null,null,null];
(statearr_21835[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_21835[(1)] = (1));

return statearr_21835;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_21814){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_21814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e21836){if((e21836 instanceof Object)){
var ex__20886__auto__ = e21836;
var statearr_21837_21857 = state_21814;
(statearr_21837_21857[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21858 = state_21814;
state_21814 = G__21858;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_21814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_21814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_21838 = f__20995__auto__.call(null);
(statearr_21838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_21838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18961__auto__ = (((_ == null))?null:_);
var m__18962__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,_);
} else {
var m__18962__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18962__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m,ch);
} else {
var m__18962__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m);
} else {
var m__18962__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22080 = (function (mult,ch,cs,meta22081){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22081 = meta22081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22082,meta22081__$1){
var self__ = this;
var _22082__$1 = this;
return (new cljs.core.async.t_cljs$core$async22080(self__.mult,self__.ch,self__.cs,meta22081__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22082){
var self__ = this;
var _22082__$1 = this;
return self__.meta22081;
});})(cs))
;

cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22080.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22081","meta22081",-1816459638,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22080";

cljs.core.async.t_cljs$core$async22080.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async22080");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22080 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22080(mult__$1,ch__$1,cs__$1,meta22081){
return (new cljs.core.async.t_cljs$core$async22080(mult__$1,ch__$1,cs__$1,meta22081));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22080(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20994__auto___22301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___22301,cs,m,dchan,dctr,done){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___22301,cs,m,dchan,dctr,done){
return (function (state_22213){
var state_val_22214 = (state_22213[(1)]);
if((state_val_22214 === (7))){
var inst_22209 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22215_22302 = state_22213__$1;
(statearr_22215_22302[(2)] = inst_22209);

(statearr_22215_22302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (20))){
var inst_22114 = (state_22213[(7)]);
var inst_22124 = cljs.core.first.call(null,inst_22114);
var inst_22125 = cljs.core.nth.call(null,inst_22124,(0),null);
var inst_22126 = cljs.core.nth.call(null,inst_22124,(1),null);
var state_22213__$1 = (function (){var statearr_22216 = state_22213;
(statearr_22216[(8)] = inst_22125);

return statearr_22216;
})();
if(cljs.core.truth_(inst_22126)){
var statearr_22217_22303 = state_22213__$1;
(statearr_22217_22303[(1)] = (22));

} else {
var statearr_22218_22304 = state_22213__$1;
(statearr_22218_22304[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (27))){
var inst_22156 = (state_22213[(9)]);
var inst_22154 = (state_22213[(10)]);
var inst_22161 = (state_22213[(11)]);
var inst_22085 = (state_22213[(12)]);
var inst_22161__$1 = cljs.core._nth.call(null,inst_22154,inst_22156);
var inst_22162 = cljs.core.async.put_BANG_.call(null,inst_22161__$1,inst_22085,done);
var state_22213__$1 = (function (){var statearr_22219 = state_22213;
(statearr_22219[(11)] = inst_22161__$1);

return statearr_22219;
})();
if(cljs.core.truth_(inst_22162)){
var statearr_22220_22305 = state_22213__$1;
(statearr_22220_22305[(1)] = (30));

} else {
var statearr_22221_22306 = state_22213__$1;
(statearr_22221_22306[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (1))){
var state_22213__$1 = state_22213;
var statearr_22222_22307 = state_22213__$1;
(statearr_22222_22307[(2)] = null);

(statearr_22222_22307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (24))){
var inst_22114 = (state_22213[(7)]);
var inst_22131 = (state_22213[(2)]);
var inst_22132 = cljs.core.next.call(null,inst_22114);
var inst_22094 = inst_22132;
var inst_22095 = null;
var inst_22096 = (0);
var inst_22097 = (0);
var state_22213__$1 = (function (){var statearr_22223 = state_22213;
(statearr_22223[(13)] = inst_22095);

(statearr_22223[(14)] = inst_22096);

(statearr_22223[(15)] = inst_22097);

(statearr_22223[(16)] = inst_22094);

(statearr_22223[(17)] = inst_22131);

return statearr_22223;
})();
var statearr_22224_22308 = state_22213__$1;
(statearr_22224_22308[(2)] = null);

(statearr_22224_22308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (39))){
var state_22213__$1 = state_22213;
var statearr_22228_22309 = state_22213__$1;
(statearr_22228_22309[(2)] = null);

(statearr_22228_22309[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (4))){
var inst_22085 = (state_22213[(12)]);
var inst_22085__$1 = (state_22213[(2)]);
var inst_22086 = (inst_22085__$1 == null);
var state_22213__$1 = (function (){var statearr_22229 = state_22213;
(statearr_22229[(12)] = inst_22085__$1);

return statearr_22229;
})();
if(cljs.core.truth_(inst_22086)){
var statearr_22230_22310 = state_22213__$1;
(statearr_22230_22310[(1)] = (5));

} else {
var statearr_22231_22311 = state_22213__$1;
(statearr_22231_22311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (15))){
var inst_22095 = (state_22213[(13)]);
var inst_22096 = (state_22213[(14)]);
var inst_22097 = (state_22213[(15)]);
var inst_22094 = (state_22213[(16)]);
var inst_22110 = (state_22213[(2)]);
var inst_22111 = (inst_22097 + (1));
var tmp22225 = inst_22095;
var tmp22226 = inst_22096;
var tmp22227 = inst_22094;
var inst_22094__$1 = tmp22227;
var inst_22095__$1 = tmp22225;
var inst_22096__$1 = tmp22226;
var inst_22097__$1 = inst_22111;
var state_22213__$1 = (function (){var statearr_22232 = state_22213;
(statearr_22232[(13)] = inst_22095__$1);

(statearr_22232[(14)] = inst_22096__$1);

(statearr_22232[(15)] = inst_22097__$1);

(statearr_22232[(16)] = inst_22094__$1);

(statearr_22232[(18)] = inst_22110);

return statearr_22232;
})();
var statearr_22233_22312 = state_22213__$1;
(statearr_22233_22312[(2)] = null);

(statearr_22233_22312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (21))){
var inst_22135 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22237_22313 = state_22213__$1;
(statearr_22237_22313[(2)] = inst_22135);

(statearr_22237_22313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (31))){
var inst_22161 = (state_22213[(11)]);
var inst_22165 = done.call(null,null);
var inst_22166 = cljs.core.async.untap_STAR_.call(null,m,inst_22161);
var state_22213__$1 = (function (){var statearr_22238 = state_22213;
(statearr_22238[(19)] = inst_22165);

return statearr_22238;
})();
var statearr_22239_22314 = state_22213__$1;
(statearr_22239_22314[(2)] = inst_22166);

(statearr_22239_22314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (32))){
var inst_22156 = (state_22213[(9)]);
var inst_22154 = (state_22213[(10)]);
var inst_22155 = (state_22213[(20)]);
var inst_22153 = (state_22213[(21)]);
var inst_22168 = (state_22213[(2)]);
var inst_22169 = (inst_22156 + (1));
var tmp22234 = inst_22154;
var tmp22235 = inst_22155;
var tmp22236 = inst_22153;
var inst_22153__$1 = tmp22236;
var inst_22154__$1 = tmp22234;
var inst_22155__$1 = tmp22235;
var inst_22156__$1 = inst_22169;
var state_22213__$1 = (function (){var statearr_22240 = state_22213;
(statearr_22240[(9)] = inst_22156__$1);

(statearr_22240[(10)] = inst_22154__$1);

(statearr_22240[(20)] = inst_22155__$1);

(statearr_22240[(22)] = inst_22168);

(statearr_22240[(21)] = inst_22153__$1);

return statearr_22240;
})();
var statearr_22241_22315 = state_22213__$1;
(statearr_22241_22315[(2)] = null);

(statearr_22241_22315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (40))){
var inst_22181 = (state_22213[(23)]);
var inst_22185 = done.call(null,null);
var inst_22186 = cljs.core.async.untap_STAR_.call(null,m,inst_22181);
var state_22213__$1 = (function (){var statearr_22242 = state_22213;
(statearr_22242[(24)] = inst_22185);

return statearr_22242;
})();
var statearr_22243_22316 = state_22213__$1;
(statearr_22243_22316[(2)] = inst_22186);

(statearr_22243_22316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (33))){
var inst_22172 = (state_22213[(25)]);
var inst_22174 = cljs.core.chunked_seq_QMARK_.call(null,inst_22172);
var state_22213__$1 = state_22213;
if(inst_22174){
var statearr_22244_22317 = state_22213__$1;
(statearr_22244_22317[(1)] = (36));

} else {
var statearr_22245_22318 = state_22213__$1;
(statearr_22245_22318[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (13))){
var inst_22104 = (state_22213[(26)]);
var inst_22107 = cljs.core.async.close_BANG_.call(null,inst_22104);
var state_22213__$1 = state_22213;
var statearr_22246_22319 = state_22213__$1;
(statearr_22246_22319[(2)] = inst_22107);

(statearr_22246_22319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (22))){
var inst_22125 = (state_22213[(8)]);
var inst_22128 = cljs.core.async.close_BANG_.call(null,inst_22125);
var state_22213__$1 = state_22213;
var statearr_22247_22320 = state_22213__$1;
(statearr_22247_22320[(2)] = inst_22128);

(statearr_22247_22320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (36))){
var inst_22172 = (state_22213[(25)]);
var inst_22176 = cljs.core.chunk_first.call(null,inst_22172);
var inst_22177 = cljs.core.chunk_rest.call(null,inst_22172);
var inst_22178 = cljs.core.count.call(null,inst_22176);
var inst_22153 = inst_22177;
var inst_22154 = inst_22176;
var inst_22155 = inst_22178;
var inst_22156 = (0);
var state_22213__$1 = (function (){var statearr_22248 = state_22213;
(statearr_22248[(9)] = inst_22156);

(statearr_22248[(10)] = inst_22154);

(statearr_22248[(20)] = inst_22155);

(statearr_22248[(21)] = inst_22153);

return statearr_22248;
})();
var statearr_22249_22321 = state_22213__$1;
(statearr_22249_22321[(2)] = null);

(statearr_22249_22321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (41))){
var inst_22172 = (state_22213[(25)]);
var inst_22188 = (state_22213[(2)]);
var inst_22189 = cljs.core.next.call(null,inst_22172);
var inst_22153 = inst_22189;
var inst_22154 = null;
var inst_22155 = (0);
var inst_22156 = (0);
var state_22213__$1 = (function (){var statearr_22250 = state_22213;
(statearr_22250[(9)] = inst_22156);

(statearr_22250[(10)] = inst_22154);

(statearr_22250[(20)] = inst_22155);

(statearr_22250[(27)] = inst_22188);

(statearr_22250[(21)] = inst_22153);

return statearr_22250;
})();
var statearr_22251_22322 = state_22213__$1;
(statearr_22251_22322[(2)] = null);

(statearr_22251_22322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (43))){
var state_22213__$1 = state_22213;
var statearr_22252_22323 = state_22213__$1;
(statearr_22252_22323[(2)] = null);

(statearr_22252_22323[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (29))){
var inst_22197 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22253_22324 = state_22213__$1;
(statearr_22253_22324[(2)] = inst_22197);

(statearr_22253_22324[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (44))){
var inst_22206 = (state_22213[(2)]);
var state_22213__$1 = (function (){var statearr_22254 = state_22213;
(statearr_22254[(28)] = inst_22206);

return statearr_22254;
})();
var statearr_22255_22325 = state_22213__$1;
(statearr_22255_22325[(2)] = null);

(statearr_22255_22325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (6))){
var inst_22145 = (state_22213[(29)]);
var inst_22144 = cljs.core.deref.call(null,cs);
var inst_22145__$1 = cljs.core.keys.call(null,inst_22144);
var inst_22146 = cljs.core.count.call(null,inst_22145__$1);
var inst_22147 = cljs.core.reset_BANG_.call(null,dctr,inst_22146);
var inst_22152 = cljs.core.seq.call(null,inst_22145__$1);
var inst_22153 = inst_22152;
var inst_22154 = null;
var inst_22155 = (0);
var inst_22156 = (0);
var state_22213__$1 = (function (){var statearr_22256 = state_22213;
(statearr_22256[(9)] = inst_22156);

(statearr_22256[(30)] = inst_22147);

(statearr_22256[(10)] = inst_22154);

(statearr_22256[(20)] = inst_22155);

(statearr_22256[(21)] = inst_22153);

(statearr_22256[(29)] = inst_22145__$1);

return statearr_22256;
})();
var statearr_22257_22326 = state_22213__$1;
(statearr_22257_22326[(2)] = null);

(statearr_22257_22326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (28))){
var inst_22172 = (state_22213[(25)]);
var inst_22153 = (state_22213[(21)]);
var inst_22172__$1 = cljs.core.seq.call(null,inst_22153);
var state_22213__$1 = (function (){var statearr_22258 = state_22213;
(statearr_22258[(25)] = inst_22172__$1);

return statearr_22258;
})();
if(inst_22172__$1){
var statearr_22259_22327 = state_22213__$1;
(statearr_22259_22327[(1)] = (33));

} else {
var statearr_22260_22328 = state_22213__$1;
(statearr_22260_22328[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (25))){
var inst_22156 = (state_22213[(9)]);
var inst_22155 = (state_22213[(20)]);
var inst_22158 = (inst_22156 < inst_22155);
var inst_22159 = inst_22158;
var state_22213__$1 = state_22213;
if(cljs.core.truth_(inst_22159)){
var statearr_22261_22329 = state_22213__$1;
(statearr_22261_22329[(1)] = (27));

} else {
var statearr_22262_22330 = state_22213__$1;
(statearr_22262_22330[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (34))){
var state_22213__$1 = state_22213;
var statearr_22263_22331 = state_22213__$1;
(statearr_22263_22331[(2)] = null);

(statearr_22263_22331[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (17))){
var state_22213__$1 = state_22213;
var statearr_22264_22332 = state_22213__$1;
(statearr_22264_22332[(2)] = null);

(statearr_22264_22332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (3))){
var inst_22211 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22213__$1,inst_22211);
} else {
if((state_val_22214 === (12))){
var inst_22140 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22265_22333 = state_22213__$1;
(statearr_22265_22333[(2)] = inst_22140);

(statearr_22265_22333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (2))){
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22213__$1,(4),ch);
} else {
if((state_val_22214 === (23))){
var state_22213__$1 = state_22213;
var statearr_22266_22334 = state_22213__$1;
(statearr_22266_22334[(2)] = null);

(statearr_22266_22334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (35))){
var inst_22195 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22267_22335 = state_22213__$1;
(statearr_22267_22335[(2)] = inst_22195);

(statearr_22267_22335[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (19))){
var inst_22114 = (state_22213[(7)]);
var inst_22118 = cljs.core.chunk_first.call(null,inst_22114);
var inst_22119 = cljs.core.chunk_rest.call(null,inst_22114);
var inst_22120 = cljs.core.count.call(null,inst_22118);
var inst_22094 = inst_22119;
var inst_22095 = inst_22118;
var inst_22096 = inst_22120;
var inst_22097 = (0);
var state_22213__$1 = (function (){var statearr_22268 = state_22213;
(statearr_22268[(13)] = inst_22095);

(statearr_22268[(14)] = inst_22096);

(statearr_22268[(15)] = inst_22097);

(statearr_22268[(16)] = inst_22094);

return statearr_22268;
})();
var statearr_22269_22336 = state_22213__$1;
(statearr_22269_22336[(2)] = null);

(statearr_22269_22336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (11))){
var inst_22094 = (state_22213[(16)]);
var inst_22114 = (state_22213[(7)]);
var inst_22114__$1 = cljs.core.seq.call(null,inst_22094);
var state_22213__$1 = (function (){var statearr_22270 = state_22213;
(statearr_22270[(7)] = inst_22114__$1);

return statearr_22270;
})();
if(inst_22114__$1){
var statearr_22271_22337 = state_22213__$1;
(statearr_22271_22337[(1)] = (16));

} else {
var statearr_22272_22338 = state_22213__$1;
(statearr_22272_22338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (9))){
var inst_22142 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22273_22339 = state_22213__$1;
(statearr_22273_22339[(2)] = inst_22142);

(statearr_22273_22339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (5))){
var inst_22092 = cljs.core.deref.call(null,cs);
var inst_22093 = cljs.core.seq.call(null,inst_22092);
var inst_22094 = inst_22093;
var inst_22095 = null;
var inst_22096 = (0);
var inst_22097 = (0);
var state_22213__$1 = (function (){var statearr_22274 = state_22213;
(statearr_22274[(13)] = inst_22095);

(statearr_22274[(14)] = inst_22096);

(statearr_22274[(15)] = inst_22097);

(statearr_22274[(16)] = inst_22094);

return statearr_22274;
})();
var statearr_22275_22340 = state_22213__$1;
(statearr_22275_22340[(2)] = null);

(statearr_22275_22340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (14))){
var state_22213__$1 = state_22213;
var statearr_22276_22341 = state_22213__$1;
(statearr_22276_22341[(2)] = null);

(statearr_22276_22341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (45))){
var inst_22203 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22277_22342 = state_22213__$1;
(statearr_22277_22342[(2)] = inst_22203);

(statearr_22277_22342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (26))){
var inst_22145 = (state_22213[(29)]);
var inst_22199 = (state_22213[(2)]);
var inst_22200 = cljs.core.seq.call(null,inst_22145);
var state_22213__$1 = (function (){var statearr_22278 = state_22213;
(statearr_22278[(31)] = inst_22199);

return statearr_22278;
})();
if(inst_22200){
var statearr_22279_22343 = state_22213__$1;
(statearr_22279_22343[(1)] = (42));

} else {
var statearr_22280_22344 = state_22213__$1;
(statearr_22280_22344[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (16))){
var inst_22114 = (state_22213[(7)]);
var inst_22116 = cljs.core.chunked_seq_QMARK_.call(null,inst_22114);
var state_22213__$1 = state_22213;
if(inst_22116){
var statearr_22281_22345 = state_22213__$1;
(statearr_22281_22345[(1)] = (19));

} else {
var statearr_22282_22346 = state_22213__$1;
(statearr_22282_22346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (38))){
var inst_22192 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22283_22347 = state_22213__$1;
(statearr_22283_22347[(2)] = inst_22192);

(statearr_22283_22347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (30))){
var state_22213__$1 = state_22213;
var statearr_22284_22348 = state_22213__$1;
(statearr_22284_22348[(2)] = null);

(statearr_22284_22348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (10))){
var inst_22095 = (state_22213[(13)]);
var inst_22097 = (state_22213[(15)]);
var inst_22103 = cljs.core._nth.call(null,inst_22095,inst_22097);
var inst_22104 = cljs.core.nth.call(null,inst_22103,(0),null);
var inst_22105 = cljs.core.nth.call(null,inst_22103,(1),null);
var state_22213__$1 = (function (){var statearr_22285 = state_22213;
(statearr_22285[(26)] = inst_22104);

return statearr_22285;
})();
if(cljs.core.truth_(inst_22105)){
var statearr_22286_22349 = state_22213__$1;
(statearr_22286_22349[(1)] = (13));

} else {
var statearr_22287_22350 = state_22213__$1;
(statearr_22287_22350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (18))){
var inst_22138 = (state_22213[(2)]);
var state_22213__$1 = state_22213;
var statearr_22288_22351 = state_22213__$1;
(statearr_22288_22351[(2)] = inst_22138);

(statearr_22288_22351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (42))){
var state_22213__$1 = state_22213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22213__$1,(45),dchan);
} else {
if((state_val_22214 === (37))){
var inst_22181 = (state_22213[(23)]);
var inst_22085 = (state_22213[(12)]);
var inst_22172 = (state_22213[(25)]);
var inst_22181__$1 = cljs.core.first.call(null,inst_22172);
var inst_22182 = cljs.core.async.put_BANG_.call(null,inst_22181__$1,inst_22085,done);
var state_22213__$1 = (function (){var statearr_22289 = state_22213;
(statearr_22289[(23)] = inst_22181__$1);

return statearr_22289;
})();
if(cljs.core.truth_(inst_22182)){
var statearr_22290_22352 = state_22213__$1;
(statearr_22290_22352[(1)] = (39));

} else {
var statearr_22291_22353 = state_22213__$1;
(statearr_22291_22353[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22214 === (8))){
var inst_22096 = (state_22213[(14)]);
var inst_22097 = (state_22213[(15)]);
var inst_22099 = (inst_22097 < inst_22096);
var inst_22100 = inst_22099;
var state_22213__$1 = state_22213;
if(cljs.core.truth_(inst_22100)){
var statearr_22292_22354 = state_22213__$1;
(statearr_22292_22354[(1)] = (10));

} else {
var statearr_22293_22355 = state_22213__$1;
(statearr_22293_22355[(1)] = (11));

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
});})(c__20994__auto___22301,cs,m,dchan,dctr,done))
;
return ((function (switch__20882__auto__,c__20994__auto___22301,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20883__auto__ = null;
var cljs$core$async$mult_$_state_machine__20883__auto____0 = (function (){
var statearr_22297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22297[(0)] = cljs$core$async$mult_$_state_machine__20883__auto__);

(statearr_22297[(1)] = (1));

return statearr_22297;
});
var cljs$core$async$mult_$_state_machine__20883__auto____1 = (function (state_22213){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_22213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e22298){if((e22298 instanceof Object)){
var ex__20886__auto__ = e22298;
var statearr_22299_22356 = state_22213;
(statearr_22299_22356[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22357 = state_22213;
state_22213 = G__22357;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20883__auto__ = function(state_22213){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20883__auto____1.call(this,state_22213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20883__auto____0;
cljs$core$async$mult_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20883__auto____1;
return cljs$core$async$mult_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___22301,cs,m,dchan,dctr,done))
})();
var state__20996__auto__ = (function (){var statearr_22300 = f__20995__auto__.call(null);
(statearr_22300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___22301);

return statearr_22300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___22301,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22358 = [];
var len__19364__auto___22361 = arguments.length;
var i__19365__auto___22362 = (0);
while(true){
if((i__19365__auto___22362 < len__19364__auto___22361)){
args22358.push((arguments[i__19365__auto___22362]));

var G__22363 = (i__19365__auto___22362 + (1));
i__19365__auto___22362 = G__22363;
continue;
} else {
}
break;
}

var G__22360 = args22358.length;
switch (G__22360) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22358.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m,ch);
} else {
var m__18962__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m,ch);
} else {
var m__18962__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m);
} else {
var m__18962__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m,state_map);
} else {
var m__18962__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18961__auto__ = (((m == null))?null:m);
var m__18962__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,m,mode);
} else {
var m__18962__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19371__auto__ = [];
var len__19364__auto___22375 = arguments.length;
var i__19365__auto___22376 = (0);
while(true){
if((i__19365__auto___22376 < len__19364__auto___22375)){
args__19371__auto__.push((arguments[i__19365__auto___22376]));

var G__22377 = (i__19365__auto___22376 + (1));
i__19365__auto___22376 = G__22377;
continue;
} else {
}
break;
}

var argseq__19372__auto__ = ((((3) < args__19371__auto__.length))?(new cljs.core.IndexedSeq(args__19371__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22369){
var map__22370 = p__22369;
var map__22370__$1 = ((((!((map__22370 == null)))?((((map__22370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22370):map__22370);
var opts = map__22370__$1;
var statearr_22372_22378 = state;
(statearr_22372_22378[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22370,map__22370__$1,opts){
return (function (val){
var statearr_22373_22379 = state;
(statearr_22373_22379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22370,map__22370__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22374_22380 = state;
(statearr_22374_22380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22365){
var G__22366 = cljs.core.first.call(null,seq22365);
var seq22365__$1 = cljs.core.next.call(null,seq22365);
var G__22367 = cljs.core.first.call(null,seq22365__$1);
var seq22365__$2 = cljs.core.next.call(null,seq22365__$1);
var G__22368 = cljs.core.first.call(null,seq22365__$2);
var seq22365__$3 = cljs.core.next.call(null,seq22365__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22366,G__22367,G__22368,seq22365__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22544 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22545){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22545 = meta22545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22546,meta22545__$1){
var self__ = this;
var _22546__$1 = this;
return (new cljs.core.async.t_cljs$core$async22544(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22545__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22546){
var self__ = this;
var _22546__$1 = this;
return self__.meta22545;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22545","meta22545",-1882498715,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22544";

cljs.core.async.t_cljs$core$async22544.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async22544");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22544 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22544(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22545){
return (new cljs.core.async.t_cljs$core$async22544(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22545));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22544(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20994__auto___22707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___22707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___22707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22644){
var state_val_22645 = (state_22644[(1)]);
if((state_val_22645 === (7))){
var inst_22562 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
var statearr_22646_22708 = state_22644__$1;
(statearr_22646_22708[(2)] = inst_22562);

(statearr_22646_22708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (20))){
var inst_22574 = (state_22644[(7)]);
var state_22644__$1 = state_22644;
var statearr_22647_22709 = state_22644__$1;
(statearr_22647_22709[(2)] = inst_22574);

(statearr_22647_22709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (27))){
var state_22644__$1 = state_22644;
var statearr_22648_22710 = state_22644__$1;
(statearr_22648_22710[(2)] = null);

(statearr_22648_22710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (1))){
var inst_22550 = (state_22644[(8)]);
var inst_22550__$1 = calc_state.call(null);
var inst_22552 = (inst_22550__$1 == null);
var inst_22553 = cljs.core.not.call(null,inst_22552);
var state_22644__$1 = (function (){var statearr_22649 = state_22644;
(statearr_22649[(8)] = inst_22550__$1);

return statearr_22649;
})();
if(inst_22553){
var statearr_22650_22711 = state_22644__$1;
(statearr_22650_22711[(1)] = (2));

} else {
var statearr_22651_22712 = state_22644__$1;
(statearr_22651_22712[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (24))){
var inst_22618 = (state_22644[(9)]);
var inst_22597 = (state_22644[(10)]);
var inst_22604 = (state_22644[(11)]);
var inst_22618__$1 = inst_22597.call(null,inst_22604);
var state_22644__$1 = (function (){var statearr_22652 = state_22644;
(statearr_22652[(9)] = inst_22618__$1);

return statearr_22652;
})();
if(cljs.core.truth_(inst_22618__$1)){
var statearr_22653_22713 = state_22644__$1;
(statearr_22653_22713[(1)] = (29));

} else {
var statearr_22654_22714 = state_22644__$1;
(statearr_22654_22714[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (4))){
var inst_22565 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
if(cljs.core.truth_(inst_22565)){
var statearr_22655_22715 = state_22644__$1;
(statearr_22655_22715[(1)] = (8));

} else {
var statearr_22656_22716 = state_22644__$1;
(statearr_22656_22716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (15))){
var inst_22591 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
if(cljs.core.truth_(inst_22591)){
var statearr_22657_22717 = state_22644__$1;
(statearr_22657_22717[(1)] = (19));

} else {
var statearr_22658_22718 = state_22644__$1;
(statearr_22658_22718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (21))){
var inst_22596 = (state_22644[(12)]);
var inst_22596__$1 = (state_22644[(2)]);
var inst_22597 = cljs.core.get.call(null,inst_22596__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22598 = cljs.core.get.call(null,inst_22596__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22599 = cljs.core.get.call(null,inst_22596__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22644__$1 = (function (){var statearr_22659 = state_22644;
(statearr_22659[(13)] = inst_22598);

(statearr_22659[(10)] = inst_22597);

(statearr_22659[(12)] = inst_22596__$1);

return statearr_22659;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22644__$1,(22),inst_22599);
} else {
if((state_val_22645 === (31))){
var inst_22626 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
if(cljs.core.truth_(inst_22626)){
var statearr_22660_22719 = state_22644__$1;
(statearr_22660_22719[(1)] = (32));

} else {
var statearr_22661_22720 = state_22644__$1;
(statearr_22661_22720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (32))){
var inst_22603 = (state_22644[(14)]);
var state_22644__$1 = state_22644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22644__$1,(35),out,inst_22603);
} else {
if((state_val_22645 === (33))){
var inst_22596 = (state_22644[(12)]);
var inst_22574 = inst_22596;
var state_22644__$1 = (function (){var statearr_22662 = state_22644;
(statearr_22662[(7)] = inst_22574);

return statearr_22662;
})();
var statearr_22663_22721 = state_22644__$1;
(statearr_22663_22721[(2)] = null);

(statearr_22663_22721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (13))){
var inst_22574 = (state_22644[(7)]);
var inst_22581 = inst_22574.cljs$lang$protocol_mask$partition0$;
var inst_22582 = (inst_22581 & (64));
var inst_22583 = inst_22574.cljs$core$ISeq$;
var inst_22584 = (inst_22582) || (inst_22583);
var state_22644__$1 = state_22644;
if(cljs.core.truth_(inst_22584)){
var statearr_22664_22722 = state_22644__$1;
(statearr_22664_22722[(1)] = (16));

} else {
var statearr_22665_22723 = state_22644__$1;
(statearr_22665_22723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (22))){
var inst_22604 = (state_22644[(11)]);
var inst_22603 = (state_22644[(14)]);
var inst_22602 = (state_22644[(2)]);
var inst_22603__$1 = cljs.core.nth.call(null,inst_22602,(0),null);
var inst_22604__$1 = cljs.core.nth.call(null,inst_22602,(1),null);
var inst_22605 = (inst_22603__$1 == null);
var inst_22606 = cljs.core._EQ_.call(null,inst_22604__$1,change);
var inst_22607 = (inst_22605) || (inst_22606);
var state_22644__$1 = (function (){var statearr_22666 = state_22644;
(statearr_22666[(11)] = inst_22604__$1);

(statearr_22666[(14)] = inst_22603__$1);

return statearr_22666;
})();
if(cljs.core.truth_(inst_22607)){
var statearr_22667_22724 = state_22644__$1;
(statearr_22667_22724[(1)] = (23));

} else {
var statearr_22668_22725 = state_22644__$1;
(statearr_22668_22725[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (36))){
var inst_22596 = (state_22644[(12)]);
var inst_22574 = inst_22596;
var state_22644__$1 = (function (){var statearr_22669 = state_22644;
(statearr_22669[(7)] = inst_22574);

return statearr_22669;
})();
var statearr_22670_22726 = state_22644__$1;
(statearr_22670_22726[(2)] = null);

(statearr_22670_22726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (29))){
var inst_22618 = (state_22644[(9)]);
var state_22644__$1 = state_22644;
var statearr_22671_22727 = state_22644__$1;
(statearr_22671_22727[(2)] = inst_22618);

(statearr_22671_22727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (6))){
var state_22644__$1 = state_22644;
var statearr_22672_22728 = state_22644__$1;
(statearr_22672_22728[(2)] = false);

(statearr_22672_22728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (28))){
var inst_22614 = (state_22644[(2)]);
var inst_22615 = calc_state.call(null);
var inst_22574 = inst_22615;
var state_22644__$1 = (function (){var statearr_22673 = state_22644;
(statearr_22673[(7)] = inst_22574);

(statearr_22673[(15)] = inst_22614);

return statearr_22673;
})();
var statearr_22674_22729 = state_22644__$1;
(statearr_22674_22729[(2)] = null);

(statearr_22674_22729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (25))){
var inst_22640 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
var statearr_22675_22730 = state_22644__$1;
(statearr_22675_22730[(2)] = inst_22640);

(statearr_22675_22730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (34))){
var inst_22638 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
var statearr_22676_22731 = state_22644__$1;
(statearr_22676_22731[(2)] = inst_22638);

(statearr_22676_22731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (17))){
var state_22644__$1 = state_22644;
var statearr_22677_22732 = state_22644__$1;
(statearr_22677_22732[(2)] = false);

(statearr_22677_22732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (3))){
var state_22644__$1 = state_22644;
var statearr_22678_22733 = state_22644__$1;
(statearr_22678_22733[(2)] = false);

(statearr_22678_22733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (12))){
var inst_22642 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22644__$1,inst_22642);
} else {
if((state_val_22645 === (2))){
var inst_22550 = (state_22644[(8)]);
var inst_22555 = inst_22550.cljs$lang$protocol_mask$partition0$;
var inst_22556 = (inst_22555 & (64));
var inst_22557 = inst_22550.cljs$core$ISeq$;
var inst_22558 = (inst_22556) || (inst_22557);
var state_22644__$1 = state_22644;
if(cljs.core.truth_(inst_22558)){
var statearr_22679_22734 = state_22644__$1;
(statearr_22679_22734[(1)] = (5));

} else {
var statearr_22680_22735 = state_22644__$1;
(statearr_22680_22735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (23))){
var inst_22603 = (state_22644[(14)]);
var inst_22609 = (inst_22603 == null);
var state_22644__$1 = state_22644;
if(cljs.core.truth_(inst_22609)){
var statearr_22681_22736 = state_22644__$1;
(statearr_22681_22736[(1)] = (26));

} else {
var statearr_22682_22737 = state_22644__$1;
(statearr_22682_22737[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (35))){
var inst_22629 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
if(cljs.core.truth_(inst_22629)){
var statearr_22683_22738 = state_22644__$1;
(statearr_22683_22738[(1)] = (36));

} else {
var statearr_22684_22739 = state_22644__$1;
(statearr_22684_22739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (19))){
var inst_22574 = (state_22644[(7)]);
var inst_22593 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22574);
var state_22644__$1 = state_22644;
var statearr_22685_22740 = state_22644__$1;
(statearr_22685_22740[(2)] = inst_22593);

(statearr_22685_22740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (11))){
var inst_22574 = (state_22644[(7)]);
var inst_22578 = (inst_22574 == null);
var inst_22579 = cljs.core.not.call(null,inst_22578);
var state_22644__$1 = state_22644;
if(inst_22579){
var statearr_22686_22741 = state_22644__$1;
(statearr_22686_22741[(1)] = (13));

} else {
var statearr_22687_22742 = state_22644__$1;
(statearr_22687_22742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (9))){
var inst_22550 = (state_22644[(8)]);
var state_22644__$1 = state_22644;
var statearr_22688_22743 = state_22644__$1;
(statearr_22688_22743[(2)] = inst_22550);

(statearr_22688_22743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (5))){
var state_22644__$1 = state_22644;
var statearr_22689_22744 = state_22644__$1;
(statearr_22689_22744[(2)] = true);

(statearr_22689_22744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (14))){
var state_22644__$1 = state_22644;
var statearr_22690_22745 = state_22644__$1;
(statearr_22690_22745[(2)] = false);

(statearr_22690_22745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (26))){
var inst_22604 = (state_22644[(11)]);
var inst_22611 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22604);
var state_22644__$1 = state_22644;
var statearr_22691_22746 = state_22644__$1;
(statearr_22691_22746[(2)] = inst_22611);

(statearr_22691_22746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (16))){
var state_22644__$1 = state_22644;
var statearr_22692_22747 = state_22644__$1;
(statearr_22692_22747[(2)] = true);

(statearr_22692_22747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (38))){
var inst_22634 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
var statearr_22693_22748 = state_22644__$1;
(statearr_22693_22748[(2)] = inst_22634);

(statearr_22693_22748[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (30))){
var inst_22598 = (state_22644[(13)]);
var inst_22597 = (state_22644[(10)]);
var inst_22604 = (state_22644[(11)]);
var inst_22621 = cljs.core.empty_QMARK_.call(null,inst_22597);
var inst_22622 = inst_22598.call(null,inst_22604);
var inst_22623 = cljs.core.not.call(null,inst_22622);
var inst_22624 = (inst_22621) && (inst_22623);
var state_22644__$1 = state_22644;
var statearr_22694_22749 = state_22644__$1;
(statearr_22694_22749[(2)] = inst_22624);

(statearr_22694_22749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (10))){
var inst_22550 = (state_22644[(8)]);
var inst_22570 = (state_22644[(2)]);
var inst_22571 = cljs.core.get.call(null,inst_22570,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22572 = cljs.core.get.call(null,inst_22570,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22573 = cljs.core.get.call(null,inst_22570,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22574 = inst_22550;
var state_22644__$1 = (function (){var statearr_22695 = state_22644;
(statearr_22695[(16)] = inst_22571);

(statearr_22695[(17)] = inst_22572);

(statearr_22695[(7)] = inst_22574);

(statearr_22695[(18)] = inst_22573);

return statearr_22695;
})();
var statearr_22696_22750 = state_22644__$1;
(statearr_22696_22750[(2)] = null);

(statearr_22696_22750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (18))){
var inst_22588 = (state_22644[(2)]);
var state_22644__$1 = state_22644;
var statearr_22697_22751 = state_22644__$1;
(statearr_22697_22751[(2)] = inst_22588);

(statearr_22697_22751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (37))){
var state_22644__$1 = state_22644;
var statearr_22698_22752 = state_22644__$1;
(statearr_22698_22752[(2)] = null);

(statearr_22698_22752[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22645 === (8))){
var inst_22550 = (state_22644[(8)]);
var inst_22567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22550);
var state_22644__$1 = state_22644;
var statearr_22699_22753 = state_22644__$1;
(statearr_22699_22753[(2)] = inst_22567);

(statearr_22699_22753[(1)] = (10));


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
});})(c__20994__auto___22707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20882__auto__,c__20994__auto___22707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20883__auto__ = null;
var cljs$core$async$mix_$_state_machine__20883__auto____0 = (function (){
var statearr_22703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22703[(0)] = cljs$core$async$mix_$_state_machine__20883__auto__);

(statearr_22703[(1)] = (1));

return statearr_22703;
});
var cljs$core$async$mix_$_state_machine__20883__auto____1 = (function (state_22644){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_22644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e22704){if((e22704 instanceof Object)){
var ex__20886__auto__ = e22704;
var statearr_22705_22754 = state_22644;
(statearr_22705_22754[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22755 = state_22644;
state_22644 = G__22755;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20883__auto__ = function(state_22644){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20883__auto____1.call(this,state_22644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20883__auto____0;
cljs$core$async$mix_$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20883__auto____1;
return cljs$core$async$mix_$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___22707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20996__auto__ = (function (){var statearr_22706 = f__20995__auto__.call(null);
(statearr_22706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___22707);

return statearr_22706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___22707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18961__auto__ = (((p == null))?null:p);
var m__18962__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18962__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18961__auto__ = (((p == null))?null:p);
var m__18962__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,p,v,ch);
} else {
var m__18962__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22756 = [];
var len__19364__auto___22759 = arguments.length;
var i__19365__auto___22760 = (0);
while(true){
if((i__19365__auto___22760 < len__19364__auto___22759)){
args22756.push((arguments[i__19365__auto___22760]));

var G__22761 = (i__19365__auto___22760 + (1));
i__19365__auto___22760 = G__22761;
continue;
} else {
}
break;
}

var G__22758 = args22756.length;
switch (G__22758) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22756.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18961__auto__ = (((p == null))?null:p);
var m__18962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,p);
} else {
var m__18962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18961__auto__ = (((p == null))?null:p);
var m__18962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18961__auto__)]);
if(!((m__18962__auto__ == null))){
return m__18962__auto__.call(null,p,v);
} else {
var m__18962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18962__auto____$1 == null))){
return m__18962__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22764 = [];
var len__19364__auto___22889 = arguments.length;
var i__19365__auto___22890 = (0);
while(true){
if((i__19365__auto___22890 < len__19364__auto___22889)){
args22764.push((arguments[i__19365__auto___22890]));

var G__22891 = (i__19365__auto___22890 + (1));
i__19365__auto___22890 = G__22891;
continue;
} else {
}
break;
}

var G__22766 = args22764.length;
switch (G__22766) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22764.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18306__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18306__auto__)){
return or__18306__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18306__auto__,mults){
return (function (p1__22763_SHARP_){
if(cljs.core.truth_(p1__22763_SHARP_.call(null,topic))){
return p1__22763_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22763_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18306__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22767 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22768){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22768 = meta22768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22769,meta22768__$1){
var self__ = this;
var _22769__$1 = this;
return (new cljs.core.async.t_cljs$core$async22767(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22768__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22769){
var self__ = this;
var _22769__$1 = this;
return self__.meta22768;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22768","meta22768",1369887963,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22767";

cljs.core.async.t_cljs$core$async22767.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async22767");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22767 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22768){
return (new cljs.core.async.t_cljs$core$async22767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22768));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22767(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20994__auto___22893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___22893,mults,ensure_mult,p){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___22893,mults,ensure_mult,p){
return (function (state_22841){
var state_val_22842 = (state_22841[(1)]);
if((state_val_22842 === (7))){
var inst_22837 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22843_22894 = state_22841__$1;
(statearr_22843_22894[(2)] = inst_22837);

(statearr_22843_22894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (20))){
var state_22841__$1 = state_22841;
var statearr_22844_22895 = state_22841__$1;
(statearr_22844_22895[(2)] = null);

(statearr_22844_22895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (1))){
var state_22841__$1 = state_22841;
var statearr_22845_22896 = state_22841__$1;
(statearr_22845_22896[(2)] = null);

(statearr_22845_22896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (24))){
var inst_22820 = (state_22841[(7)]);
var inst_22829 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22820);
var state_22841__$1 = state_22841;
var statearr_22846_22897 = state_22841__$1;
(statearr_22846_22897[(2)] = inst_22829);

(statearr_22846_22897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (4))){
var inst_22772 = (state_22841[(8)]);
var inst_22772__$1 = (state_22841[(2)]);
var inst_22773 = (inst_22772__$1 == null);
var state_22841__$1 = (function (){var statearr_22847 = state_22841;
(statearr_22847[(8)] = inst_22772__$1);

return statearr_22847;
})();
if(cljs.core.truth_(inst_22773)){
var statearr_22848_22898 = state_22841__$1;
(statearr_22848_22898[(1)] = (5));

} else {
var statearr_22849_22899 = state_22841__$1;
(statearr_22849_22899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (15))){
var inst_22814 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22850_22900 = state_22841__$1;
(statearr_22850_22900[(2)] = inst_22814);

(statearr_22850_22900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (21))){
var inst_22834 = (state_22841[(2)]);
var state_22841__$1 = (function (){var statearr_22851 = state_22841;
(statearr_22851[(9)] = inst_22834);

return statearr_22851;
})();
var statearr_22852_22901 = state_22841__$1;
(statearr_22852_22901[(2)] = null);

(statearr_22852_22901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (13))){
var inst_22796 = (state_22841[(10)]);
var inst_22798 = cljs.core.chunked_seq_QMARK_.call(null,inst_22796);
var state_22841__$1 = state_22841;
if(inst_22798){
var statearr_22853_22902 = state_22841__$1;
(statearr_22853_22902[(1)] = (16));

} else {
var statearr_22854_22903 = state_22841__$1;
(statearr_22854_22903[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (22))){
var inst_22826 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
if(cljs.core.truth_(inst_22826)){
var statearr_22855_22904 = state_22841__$1;
(statearr_22855_22904[(1)] = (23));

} else {
var statearr_22856_22905 = state_22841__$1;
(statearr_22856_22905[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (6))){
var inst_22822 = (state_22841[(11)]);
var inst_22772 = (state_22841[(8)]);
var inst_22820 = (state_22841[(7)]);
var inst_22820__$1 = topic_fn.call(null,inst_22772);
var inst_22821 = cljs.core.deref.call(null,mults);
var inst_22822__$1 = cljs.core.get.call(null,inst_22821,inst_22820__$1);
var state_22841__$1 = (function (){var statearr_22857 = state_22841;
(statearr_22857[(11)] = inst_22822__$1);

(statearr_22857[(7)] = inst_22820__$1);

return statearr_22857;
})();
if(cljs.core.truth_(inst_22822__$1)){
var statearr_22858_22906 = state_22841__$1;
(statearr_22858_22906[(1)] = (19));

} else {
var statearr_22859_22907 = state_22841__$1;
(statearr_22859_22907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (25))){
var inst_22831 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22860_22908 = state_22841__$1;
(statearr_22860_22908[(2)] = inst_22831);

(statearr_22860_22908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (17))){
var inst_22796 = (state_22841[(10)]);
var inst_22805 = cljs.core.first.call(null,inst_22796);
var inst_22806 = cljs.core.async.muxch_STAR_.call(null,inst_22805);
var inst_22807 = cljs.core.async.close_BANG_.call(null,inst_22806);
var inst_22808 = cljs.core.next.call(null,inst_22796);
var inst_22782 = inst_22808;
var inst_22783 = null;
var inst_22784 = (0);
var inst_22785 = (0);
var state_22841__$1 = (function (){var statearr_22861 = state_22841;
(statearr_22861[(12)] = inst_22782);

(statearr_22861[(13)] = inst_22783);

(statearr_22861[(14)] = inst_22784);

(statearr_22861[(15)] = inst_22807);

(statearr_22861[(16)] = inst_22785);

return statearr_22861;
})();
var statearr_22862_22909 = state_22841__$1;
(statearr_22862_22909[(2)] = null);

(statearr_22862_22909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (3))){
var inst_22839 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22841__$1,inst_22839);
} else {
if((state_val_22842 === (12))){
var inst_22816 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22863_22910 = state_22841__$1;
(statearr_22863_22910[(2)] = inst_22816);

(statearr_22863_22910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (2))){
var state_22841__$1 = state_22841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22841__$1,(4),ch);
} else {
if((state_val_22842 === (23))){
var state_22841__$1 = state_22841;
var statearr_22864_22911 = state_22841__$1;
(statearr_22864_22911[(2)] = null);

(statearr_22864_22911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (19))){
var inst_22822 = (state_22841[(11)]);
var inst_22772 = (state_22841[(8)]);
var inst_22824 = cljs.core.async.muxch_STAR_.call(null,inst_22822);
var state_22841__$1 = state_22841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22841__$1,(22),inst_22824,inst_22772);
} else {
if((state_val_22842 === (11))){
var inst_22782 = (state_22841[(12)]);
var inst_22796 = (state_22841[(10)]);
var inst_22796__$1 = cljs.core.seq.call(null,inst_22782);
var state_22841__$1 = (function (){var statearr_22865 = state_22841;
(statearr_22865[(10)] = inst_22796__$1);

return statearr_22865;
})();
if(inst_22796__$1){
var statearr_22866_22912 = state_22841__$1;
(statearr_22866_22912[(1)] = (13));

} else {
var statearr_22867_22913 = state_22841__$1;
(statearr_22867_22913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (9))){
var inst_22818 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22868_22914 = state_22841__$1;
(statearr_22868_22914[(2)] = inst_22818);

(statearr_22868_22914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (5))){
var inst_22779 = cljs.core.deref.call(null,mults);
var inst_22780 = cljs.core.vals.call(null,inst_22779);
var inst_22781 = cljs.core.seq.call(null,inst_22780);
var inst_22782 = inst_22781;
var inst_22783 = null;
var inst_22784 = (0);
var inst_22785 = (0);
var state_22841__$1 = (function (){var statearr_22869 = state_22841;
(statearr_22869[(12)] = inst_22782);

(statearr_22869[(13)] = inst_22783);

(statearr_22869[(14)] = inst_22784);

(statearr_22869[(16)] = inst_22785);

return statearr_22869;
})();
var statearr_22870_22915 = state_22841__$1;
(statearr_22870_22915[(2)] = null);

(statearr_22870_22915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (14))){
var state_22841__$1 = state_22841;
var statearr_22874_22916 = state_22841__$1;
(statearr_22874_22916[(2)] = null);

(statearr_22874_22916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (16))){
var inst_22796 = (state_22841[(10)]);
var inst_22800 = cljs.core.chunk_first.call(null,inst_22796);
var inst_22801 = cljs.core.chunk_rest.call(null,inst_22796);
var inst_22802 = cljs.core.count.call(null,inst_22800);
var inst_22782 = inst_22801;
var inst_22783 = inst_22800;
var inst_22784 = inst_22802;
var inst_22785 = (0);
var state_22841__$1 = (function (){var statearr_22875 = state_22841;
(statearr_22875[(12)] = inst_22782);

(statearr_22875[(13)] = inst_22783);

(statearr_22875[(14)] = inst_22784);

(statearr_22875[(16)] = inst_22785);

return statearr_22875;
})();
var statearr_22876_22917 = state_22841__$1;
(statearr_22876_22917[(2)] = null);

(statearr_22876_22917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (10))){
var inst_22782 = (state_22841[(12)]);
var inst_22783 = (state_22841[(13)]);
var inst_22784 = (state_22841[(14)]);
var inst_22785 = (state_22841[(16)]);
var inst_22790 = cljs.core._nth.call(null,inst_22783,inst_22785);
var inst_22791 = cljs.core.async.muxch_STAR_.call(null,inst_22790);
var inst_22792 = cljs.core.async.close_BANG_.call(null,inst_22791);
var inst_22793 = (inst_22785 + (1));
var tmp22871 = inst_22782;
var tmp22872 = inst_22783;
var tmp22873 = inst_22784;
var inst_22782__$1 = tmp22871;
var inst_22783__$1 = tmp22872;
var inst_22784__$1 = tmp22873;
var inst_22785__$1 = inst_22793;
var state_22841__$1 = (function (){var statearr_22877 = state_22841;
(statearr_22877[(12)] = inst_22782__$1);

(statearr_22877[(13)] = inst_22783__$1);

(statearr_22877[(17)] = inst_22792);

(statearr_22877[(14)] = inst_22784__$1);

(statearr_22877[(16)] = inst_22785__$1);

return statearr_22877;
})();
var statearr_22878_22918 = state_22841__$1;
(statearr_22878_22918[(2)] = null);

(statearr_22878_22918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (18))){
var inst_22811 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22879_22919 = state_22841__$1;
(statearr_22879_22919[(2)] = inst_22811);

(statearr_22879_22919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (8))){
var inst_22784 = (state_22841[(14)]);
var inst_22785 = (state_22841[(16)]);
var inst_22787 = (inst_22785 < inst_22784);
var inst_22788 = inst_22787;
var state_22841__$1 = state_22841;
if(cljs.core.truth_(inst_22788)){
var statearr_22880_22920 = state_22841__$1;
(statearr_22880_22920[(1)] = (10));

} else {
var statearr_22881_22921 = state_22841__$1;
(statearr_22881_22921[(1)] = (11));

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
});})(c__20994__auto___22893,mults,ensure_mult,p))
;
return ((function (switch__20882__auto__,c__20994__auto___22893,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_22885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22885[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_22885[(1)] = (1));

return statearr_22885;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_22841){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_22841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e22886){if((e22886 instanceof Object)){
var ex__20886__auto__ = e22886;
var statearr_22887_22922 = state_22841;
(statearr_22887_22922[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22923 = state_22841;
state_22841 = G__22923;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_22841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_22841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___22893,mults,ensure_mult,p))
})();
var state__20996__auto__ = (function (){var statearr_22888 = f__20995__auto__.call(null);
(statearr_22888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___22893);

return statearr_22888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___22893,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22924 = [];
var len__19364__auto___22927 = arguments.length;
var i__19365__auto___22928 = (0);
while(true){
if((i__19365__auto___22928 < len__19364__auto___22927)){
args22924.push((arguments[i__19365__auto___22928]));

var G__22929 = (i__19365__auto___22928 + (1));
i__19365__auto___22928 = G__22929;
continue;
} else {
}
break;
}

var G__22926 = args22924.length;
switch (G__22926) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22924.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22931 = [];
var len__19364__auto___22934 = arguments.length;
var i__19365__auto___22935 = (0);
while(true){
if((i__19365__auto___22935 < len__19364__auto___22934)){
args22931.push((arguments[i__19365__auto___22935]));

var G__22936 = (i__19365__auto___22935 + (1));
i__19365__auto___22935 = G__22936;
continue;
} else {
}
break;
}

var G__22933 = args22931.length;
switch (G__22933) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22931.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22938 = [];
var len__19364__auto___23009 = arguments.length;
var i__19365__auto___23010 = (0);
while(true){
if((i__19365__auto___23010 < len__19364__auto___23009)){
args22938.push((arguments[i__19365__auto___23010]));

var G__23011 = (i__19365__auto___23010 + (1));
i__19365__auto___23010 = G__23011;
continue;
} else {
}
break;
}

var G__22940 = args22938.length;
switch (G__22940) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22938.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20994__auto___23013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___23013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___23013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22979){
var state_val_22980 = (state_22979[(1)]);
if((state_val_22980 === (7))){
var state_22979__$1 = state_22979;
var statearr_22981_23014 = state_22979__$1;
(statearr_22981_23014[(2)] = null);

(statearr_22981_23014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (1))){
var state_22979__$1 = state_22979;
var statearr_22982_23015 = state_22979__$1;
(statearr_22982_23015[(2)] = null);

(statearr_22982_23015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (4))){
var inst_22943 = (state_22979[(7)]);
var inst_22945 = (inst_22943 < cnt);
var state_22979__$1 = state_22979;
if(cljs.core.truth_(inst_22945)){
var statearr_22983_23016 = state_22979__$1;
(statearr_22983_23016[(1)] = (6));

} else {
var statearr_22984_23017 = state_22979__$1;
(statearr_22984_23017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (15))){
var inst_22975 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
var statearr_22985_23018 = state_22979__$1;
(statearr_22985_23018[(2)] = inst_22975);

(statearr_22985_23018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (13))){
var inst_22968 = cljs.core.async.close_BANG_.call(null,out);
var state_22979__$1 = state_22979;
var statearr_22986_23019 = state_22979__$1;
(statearr_22986_23019[(2)] = inst_22968);

(statearr_22986_23019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (6))){
var state_22979__$1 = state_22979;
var statearr_22987_23020 = state_22979__$1;
(statearr_22987_23020[(2)] = null);

(statearr_22987_23020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (3))){
var inst_22977 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22979__$1,inst_22977);
} else {
if((state_val_22980 === (12))){
var inst_22965 = (state_22979[(8)]);
var inst_22965__$1 = (state_22979[(2)]);
var inst_22966 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22965__$1);
var state_22979__$1 = (function (){var statearr_22988 = state_22979;
(statearr_22988[(8)] = inst_22965__$1);

return statearr_22988;
})();
if(cljs.core.truth_(inst_22966)){
var statearr_22989_23021 = state_22979__$1;
(statearr_22989_23021[(1)] = (13));

} else {
var statearr_22990_23022 = state_22979__$1;
(statearr_22990_23022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (2))){
var inst_22942 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22943 = (0);
var state_22979__$1 = (function (){var statearr_22991 = state_22979;
(statearr_22991[(9)] = inst_22942);

(statearr_22991[(7)] = inst_22943);

return statearr_22991;
})();
var statearr_22992_23023 = state_22979__$1;
(statearr_22992_23023[(2)] = null);

(statearr_22992_23023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (11))){
var inst_22943 = (state_22979[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22979,(10),Object,null,(9));
var inst_22952 = chs__$1.call(null,inst_22943);
var inst_22953 = done.call(null,inst_22943);
var inst_22954 = cljs.core.async.take_BANG_.call(null,inst_22952,inst_22953);
var state_22979__$1 = state_22979;
var statearr_22993_23024 = state_22979__$1;
(statearr_22993_23024[(2)] = inst_22954);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (9))){
var inst_22943 = (state_22979[(7)]);
var inst_22956 = (state_22979[(2)]);
var inst_22957 = (inst_22943 + (1));
var inst_22943__$1 = inst_22957;
var state_22979__$1 = (function (){var statearr_22994 = state_22979;
(statearr_22994[(10)] = inst_22956);

(statearr_22994[(7)] = inst_22943__$1);

return statearr_22994;
})();
var statearr_22995_23025 = state_22979__$1;
(statearr_22995_23025[(2)] = null);

(statearr_22995_23025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (5))){
var inst_22963 = (state_22979[(2)]);
var state_22979__$1 = (function (){var statearr_22996 = state_22979;
(statearr_22996[(11)] = inst_22963);

return statearr_22996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22979__$1,(12),dchan);
} else {
if((state_val_22980 === (14))){
var inst_22965 = (state_22979[(8)]);
var inst_22970 = cljs.core.apply.call(null,f,inst_22965);
var state_22979__$1 = state_22979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22979__$1,(16),out,inst_22970);
} else {
if((state_val_22980 === (16))){
var inst_22972 = (state_22979[(2)]);
var state_22979__$1 = (function (){var statearr_22997 = state_22979;
(statearr_22997[(12)] = inst_22972);

return statearr_22997;
})();
var statearr_22998_23026 = state_22979__$1;
(statearr_22998_23026[(2)] = null);

(statearr_22998_23026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (10))){
var inst_22947 = (state_22979[(2)]);
var inst_22948 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22979__$1 = (function (){var statearr_22999 = state_22979;
(statearr_22999[(13)] = inst_22947);

return statearr_22999;
})();
var statearr_23000_23027 = state_22979__$1;
(statearr_23000_23027[(2)] = inst_22948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (8))){
var inst_22961 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
var statearr_23001_23028 = state_22979__$1;
(statearr_23001_23028[(2)] = inst_22961);

(statearr_23001_23028[(1)] = (5));


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
});})(c__20994__auto___23013,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20882__auto__,c__20994__auto___23013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_23005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23005[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_23005[(1)] = (1));

return statearr_23005;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_22979){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_22979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23006){if((e23006 instanceof Object)){
var ex__20886__auto__ = e23006;
var statearr_23007_23029 = state_22979;
(statearr_23007_23029[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23030 = state_22979;
state_22979 = G__23030;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_22979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_22979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___23013,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20996__auto__ = (function (){var statearr_23008 = f__20995__auto__.call(null);
(statearr_23008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___23013);

return statearr_23008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___23013,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23032 = [];
var len__19364__auto___23088 = arguments.length;
var i__19365__auto___23089 = (0);
while(true){
if((i__19365__auto___23089 < len__19364__auto___23088)){
args23032.push((arguments[i__19365__auto___23089]));

var G__23090 = (i__19365__auto___23089 + (1));
i__19365__auto___23089 = G__23090;
continue;
} else {
}
break;
}

var G__23034 = args23032.length;
switch (G__23034) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23032.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20994__auto___23092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___23092,out){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___23092,out){
return (function (state_23064){
var state_val_23065 = (state_23064[(1)]);
if((state_val_23065 === (7))){
var inst_23044 = (state_23064[(7)]);
var inst_23043 = (state_23064[(8)]);
var inst_23043__$1 = (state_23064[(2)]);
var inst_23044__$1 = cljs.core.nth.call(null,inst_23043__$1,(0),null);
var inst_23045 = cljs.core.nth.call(null,inst_23043__$1,(1),null);
var inst_23046 = (inst_23044__$1 == null);
var state_23064__$1 = (function (){var statearr_23066 = state_23064;
(statearr_23066[(9)] = inst_23045);

(statearr_23066[(7)] = inst_23044__$1);

(statearr_23066[(8)] = inst_23043__$1);

return statearr_23066;
})();
if(cljs.core.truth_(inst_23046)){
var statearr_23067_23093 = state_23064__$1;
(statearr_23067_23093[(1)] = (8));

} else {
var statearr_23068_23094 = state_23064__$1;
(statearr_23068_23094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (1))){
var inst_23035 = cljs.core.vec.call(null,chs);
var inst_23036 = inst_23035;
var state_23064__$1 = (function (){var statearr_23069 = state_23064;
(statearr_23069[(10)] = inst_23036);

return statearr_23069;
})();
var statearr_23070_23095 = state_23064__$1;
(statearr_23070_23095[(2)] = null);

(statearr_23070_23095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (4))){
var inst_23036 = (state_23064[(10)]);
var state_23064__$1 = state_23064;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23064__$1,(7),inst_23036);
} else {
if((state_val_23065 === (6))){
var inst_23060 = (state_23064[(2)]);
var state_23064__$1 = state_23064;
var statearr_23071_23096 = state_23064__$1;
(statearr_23071_23096[(2)] = inst_23060);

(statearr_23071_23096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (3))){
var inst_23062 = (state_23064[(2)]);
var state_23064__$1 = state_23064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23064__$1,inst_23062);
} else {
if((state_val_23065 === (2))){
var inst_23036 = (state_23064[(10)]);
var inst_23038 = cljs.core.count.call(null,inst_23036);
var inst_23039 = (inst_23038 > (0));
var state_23064__$1 = state_23064;
if(cljs.core.truth_(inst_23039)){
var statearr_23073_23097 = state_23064__$1;
(statearr_23073_23097[(1)] = (4));

} else {
var statearr_23074_23098 = state_23064__$1;
(statearr_23074_23098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (11))){
var inst_23036 = (state_23064[(10)]);
var inst_23053 = (state_23064[(2)]);
var tmp23072 = inst_23036;
var inst_23036__$1 = tmp23072;
var state_23064__$1 = (function (){var statearr_23075 = state_23064;
(statearr_23075[(11)] = inst_23053);

(statearr_23075[(10)] = inst_23036__$1);

return statearr_23075;
})();
var statearr_23076_23099 = state_23064__$1;
(statearr_23076_23099[(2)] = null);

(statearr_23076_23099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (9))){
var inst_23044 = (state_23064[(7)]);
var state_23064__$1 = state_23064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23064__$1,(11),out,inst_23044);
} else {
if((state_val_23065 === (5))){
var inst_23058 = cljs.core.async.close_BANG_.call(null,out);
var state_23064__$1 = state_23064;
var statearr_23077_23100 = state_23064__$1;
(statearr_23077_23100[(2)] = inst_23058);

(statearr_23077_23100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (10))){
var inst_23056 = (state_23064[(2)]);
var state_23064__$1 = state_23064;
var statearr_23078_23101 = state_23064__$1;
(statearr_23078_23101[(2)] = inst_23056);

(statearr_23078_23101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23065 === (8))){
var inst_23045 = (state_23064[(9)]);
var inst_23044 = (state_23064[(7)]);
var inst_23036 = (state_23064[(10)]);
var inst_23043 = (state_23064[(8)]);
var inst_23048 = (function (){var cs = inst_23036;
var vec__23041 = inst_23043;
var v = inst_23044;
var c = inst_23045;
return ((function (cs,vec__23041,v,c,inst_23045,inst_23044,inst_23036,inst_23043,state_val_23065,c__20994__auto___23092,out){
return (function (p1__23031_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23031_SHARP_);
});
;})(cs,vec__23041,v,c,inst_23045,inst_23044,inst_23036,inst_23043,state_val_23065,c__20994__auto___23092,out))
})();
var inst_23049 = cljs.core.filterv.call(null,inst_23048,inst_23036);
var inst_23036__$1 = inst_23049;
var state_23064__$1 = (function (){var statearr_23079 = state_23064;
(statearr_23079[(10)] = inst_23036__$1);

return statearr_23079;
})();
var statearr_23080_23102 = state_23064__$1;
(statearr_23080_23102[(2)] = null);

(statearr_23080_23102[(1)] = (2));


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
});})(c__20994__auto___23092,out))
;
return ((function (switch__20882__auto__,c__20994__auto___23092,out){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_23084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23084[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_23084[(1)] = (1));

return statearr_23084;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_23064){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23085){if((e23085 instanceof Object)){
var ex__20886__auto__ = e23085;
var statearr_23086_23103 = state_23064;
(statearr_23086_23103[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23104 = state_23064;
state_23064 = G__23104;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_23064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_23064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___23092,out))
})();
var state__20996__auto__ = (function (){var statearr_23087 = f__20995__auto__.call(null);
(statearr_23087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___23092);

return statearr_23087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___23092,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23105 = [];
var len__19364__auto___23154 = arguments.length;
var i__19365__auto___23155 = (0);
while(true){
if((i__19365__auto___23155 < len__19364__auto___23154)){
args23105.push((arguments[i__19365__auto___23155]));

var G__23156 = (i__19365__auto___23155 + (1));
i__19365__auto___23155 = G__23156;
continue;
} else {
}
break;
}

var G__23107 = args23105.length;
switch (G__23107) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23105.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20994__auto___23158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___23158,out){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___23158,out){
return (function (state_23131){
var state_val_23132 = (state_23131[(1)]);
if((state_val_23132 === (7))){
var inst_23113 = (state_23131[(7)]);
var inst_23113__$1 = (state_23131[(2)]);
var inst_23114 = (inst_23113__$1 == null);
var inst_23115 = cljs.core.not.call(null,inst_23114);
var state_23131__$1 = (function (){var statearr_23133 = state_23131;
(statearr_23133[(7)] = inst_23113__$1);

return statearr_23133;
})();
if(inst_23115){
var statearr_23134_23159 = state_23131__$1;
(statearr_23134_23159[(1)] = (8));

} else {
var statearr_23135_23160 = state_23131__$1;
(statearr_23135_23160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (1))){
var inst_23108 = (0);
var state_23131__$1 = (function (){var statearr_23136 = state_23131;
(statearr_23136[(8)] = inst_23108);

return statearr_23136;
})();
var statearr_23137_23161 = state_23131__$1;
(statearr_23137_23161[(2)] = null);

(statearr_23137_23161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (4))){
var state_23131__$1 = state_23131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23131__$1,(7),ch);
} else {
if((state_val_23132 === (6))){
var inst_23126 = (state_23131[(2)]);
var state_23131__$1 = state_23131;
var statearr_23138_23162 = state_23131__$1;
(statearr_23138_23162[(2)] = inst_23126);

(statearr_23138_23162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (3))){
var inst_23128 = (state_23131[(2)]);
var inst_23129 = cljs.core.async.close_BANG_.call(null,out);
var state_23131__$1 = (function (){var statearr_23139 = state_23131;
(statearr_23139[(9)] = inst_23128);

return statearr_23139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23131__$1,inst_23129);
} else {
if((state_val_23132 === (2))){
var inst_23108 = (state_23131[(8)]);
var inst_23110 = (inst_23108 < n);
var state_23131__$1 = state_23131;
if(cljs.core.truth_(inst_23110)){
var statearr_23140_23163 = state_23131__$1;
(statearr_23140_23163[(1)] = (4));

} else {
var statearr_23141_23164 = state_23131__$1;
(statearr_23141_23164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (11))){
var inst_23108 = (state_23131[(8)]);
var inst_23118 = (state_23131[(2)]);
var inst_23119 = (inst_23108 + (1));
var inst_23108__$1 = inst_23119;
var state_23131__$1 = (function (){var statearr_23142 = state_23131;
(statearr_23142[(10)] = inst_23118);

(statearr_23142[(8)] = inst_23108__$1);

return statearr_23142;
})();
var statearr_23143_23165 = state_23131__$1;
(statearr_23143_23165[(2)] = null);

(statearr_23143_23165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (9))){
var state_23131__$1 = state_23131;
var statearr_23144_23166 = state_23131__$1;
(statearr_23144_23166[(2)] = null);

(statearr_23144_23166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (5))){
var state_23131__$1 = state_23131;
var statearr_23145_23167 = state_23131__$1;
(statearr_23145_23167[(2)] = null);

(statearr_23145_23167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (10))){
var inst_23123 = (state_23131[(2)]);
var state_23131__$1 = state_23131;
var statearr_23146_23168 = state_23131__$1;
(statearr_23146_23168[(2)] = inst_23123);

(statearr_23146_23168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23132 === (8))){
var inst_23113 = (state_23131[(7)]);
var state_23131__$1 = state_23131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23131__$1,(11),out,inst_23113);
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
});})(c__20994__auto___23158,out))
;
return ((function (switch__20882__auto__,c__20994__auto___23158,out){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_23150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23150[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_23150[(1)] = (1));

return statearr_23150;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_23131){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23151){if((e23151 instanceof Object)){
var ex__20886__auto__ = e23151;
var statearr_23152_23169 = state_23131;
(statearr_23152_23169[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23170 = state_23131;
state_23131 = G__23170;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_23131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_23131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___23158,out))
})();
var state__20996__auto__ = (function (){var statearr_23153 = f__20995__auto__.call(null);
(statearr_23153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___23158);

return statearr_23153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___23158,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23178 = (function (map_LT_,f,ch,meta23179){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23179 = meta23179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23180,meta23179__$1){
var self__ = this;
var _23180__$1 = this;
return (new cljs.core.async.t_cljs$core$async23178(self__.map_LT_,self__.f,self__.ch,meta23179__$1));
});

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23180){
var self__ = this;
var _23180__$1 = this;
return self__.meta23179;
});

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23181 = (function (map_LT_,f,ch,meta23179,_,fn1,meta23182){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23179 = meta23179;
this._ = _;
this.fn1 = fn1;
this.meta23182 = meta23182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23183,meta23182__$1){
var self__ = this;
var _23183__$1 = this;
return (new cljs.core.async.t_cljs$core$async23181(self__.map_LT_,self__.f,self__.ch,self__.meta23179,self__._,self__.fn1,meta23182__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23183){
var self__ = this;
var _23183__$1 = this;
return self__.meta23182;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23171_SHARP_){
return f1.call(null,(((p1__23171_SHARP_ == null))?null:self__.f.call(null,p1__23171_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23181.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23179","meta23179",-232559100,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23178","cljs.core.async/t_cljs$core$async23178",632424437,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23182","meta23182",-28611202,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23181";

cljs.core.async.t_cljs$core$async23181.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async23181");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23181 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23181(map_LT___$1,f__$1,ch__$1,meta23179__$1,___$2,fn1__$1,meta23182){
return (new cljs.core.async.t_cljs$core$async23181(map_LT___$1,f__$1,ch__$1,meta23179__$1,___$2,fn1__$1,meta23182));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23181(self__.map_LT_,self__.f,self__.ch,self__.meta23179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18294__auto__ = ret;
if(cljs.core.truth_(and__18294__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18294__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23179","meta23179",-232559100,null)], null);
});

cljs.core.async.t_cljs$core$async23178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23178";

cljs.core.async.t_cljs$core$async23178.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async23178");
});

cljs.core.async.__GT_t_cljs$core$async23178 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23178(map_LT___$1,f__$1,ch__$1,meta23179){
return (new cljs.core.async.t_cljs$core$async23178(map_LT___$1,f__$1,ch__$1,meta23179));
});

}

return (new cljs.core.async.t_cljs$core$async23178(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23187 = (function (map_GT_,f,ch,meta23188){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23188 = meta23188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23189,meta23188__$1){
var self__ = this;
var _23189__$1 = this;
return (new cljs.core.async.t_cljs$core$async23187(self__.map_GT_,self__.f,self__.ch,meta23188__$1));
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23189){
var self__ = this;
var _23189__$1 = this;
return self__.meta23188;
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23188","meta23188",-111341327,null)], null);
});

cljs.core.async.t_cljs$core$async23187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23187";

cljs.core.async.t_cljs$core$async23187.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async23187");
});

cljs.core.async.__GT_t_cljs$core$async23187 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23187(map_GT___$1,f__$1,ch__$1,meta23188){
return (new cljs.core.async.t_cljs$core$async23187(map_GT___$1,f__$1,ch__$1,meta23188));
});

}

return (new cljs.core.async.t_cljs$core$async23187(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23193 = (function (filter_GT_,p,ch,meta23194){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23194 = meta23194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23195,meta23194__$1){
var self__ = this;
var _23195__$1 = this;
return (new cljs.core.async.t_cljs$core$async23193(self__.filter_GT_,self__.p,self__.ch,meta23194__$1));
});

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23195){
var self__ = this;
var _23195__$1 = this;
return self__.meta23194;
});

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23194","meta23194",1995356351,null)], null);
});

cljs.core.async.t_cljs$core$async23193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23193";

cljs.core.async.t_cljs$core$async23193.cljs$lang$ctorPrWriter = (function (this__18904__auto__,writer__18905__auto__,opt__18906__auto__){
return cljs.core._write.call(null,writer__18905__auto__,"cljs.core.async/t_cljs$core$async23193");
});

cljs.core.async.__GT_t_cljs$core$async23193 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23193(filter_GT___$1,p__$1,ch__$1,meta23194){
return (new cljs.core.async.t_cljs$core$async23193(filter_GT___$1,p__$1,ch__$1,meta23194));
});

}

return (new cljs.core.async.t_cljs$core$async23193(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23196 = [];
var len__19364__auto___23240 = arguments.length;
var i__19365__auto___23241 = (0);
while(true){
if((i__19365__auto___23241 < len__19364__auto___23240)){
args23196.push((arguments[i__19365__auto___23241]));

var G__23242 = (i__19365__auto___23241 + (1));
i__19365__auto___23241 = G__23242;
continue;
} else {
}
break;
}

var G__23198 = args23196.length;
switch (G__23198) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23196.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20994__auto___23244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___23244,out){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___23244,out){
return (function (state_23219){
var state_val_23220 = (state_23219[(1)]);
if((state_val_23220 === (7))){
var inst_23215 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23221_23245 = state_23219__$1;
(statearr_23221_23245[(2)] = inst_23215);

(statearr_23221_23245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (1))){
var state_23219__$1 = state_23219;
var statearr_23222_23246 = state_23219__$1;
(statearr_23222_23246[(2)] = null);

(statearr_23222_23246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (4))){
var inst_23201 = (state_23219[(7)]);
var inst_23201__$1 = (state_23219[(2)]);
var inst_23202 = (inst_23201__$1 == null);
var state_23219__$1 = (function (){var statearr_23223 = state_23219;
(statearr_23223[(7)] = inst_23201__$1);

return statearr_23223;
})();
if(cljs.core.truth_(inst_23202)){
var statearr_23224_23247 = state_23219__$1;
(statearr_23224_23247[(1)] = (5));

} else {
var statearr_23225_23248 = state_23219__$1;
(statearr_23225_23248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (6))){
var inst_23201 = (state_23219[(7)]);
var inst_23206 = p.call(null,inst_23201);
var state_23219__$1 = state_23219;
if(cljs.core.truth_(inst_23206)){
var statearr_23226_23249 = state_23219__$1;
(statearr_23226_23249[(1)] = (8));

} else {
var statearr_23227_23250 = state_23219__$1;
(statearr_23227_23250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (3))){
var inst_23217 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23219__$1,inst_23217);
} else {
if((state_val_23220 === (2))){
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23219__$1,(4),ch);
} else {
if((state_val_23220 === (11))){
var inst_23209 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23228_23251 = state_23219__$1;
(statearr_23228_23251[(2)] = inst_23209);

(statearr_23228_23251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (9))){
var state_23219__$1 = state_23219;
var statearr_23229_23252 = state_23219__$1;
(statearr_23229_23252[(2)] = null);

(statearr_23229_23252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (5))){
var inst_23204 = cljs.core.async.close_BANG_.call(null,out);
var state_23219__$1 = state_23219;
var statearr_23230_23253 = state_23219__$1;
(statearr_23230_23253[(2)] = inst_23204);

(statearr_23230_23253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (10))){
var inst_23212 = (state_23219[(2)]);
var state_23219__$1 = (function (){var statearr_23231 = state_23219;
(statearr_23231[(8)] = inst_23212);

return statearr_23231;
})();
var statearr_23232_23254 = state_23219__$1;
(statearr_23232_23254[(2)] = null);

(statearr_23232_23254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (8))){
var inst_23201 = (state_23219[(7)]);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23219__$1,(11),out,inst_23201);
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
});})(c__20994__auto___23244,out))
;
return ((function (switch__20882__auto__,c__20994__auto___23244,out){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_23236 = [null,null,null,null,null,null,null,null,null];
(statearr_23236[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_23236[(1)] = (1));

return statearr_23236;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_23219){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23237){if((e23237 instanceof Object)){
var ex__20886__auto__ = e23237;
var statearr_23238_23255 = state_23219;
(statearr_23238_23255[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23256 = state_23219;
state_23219 = G__23256;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_23219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_23219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___23244,out))
})();
var state__20996__auto__ = (function (){var statearr_23239 = f__20995__auto__.call(null);
(statearr_23239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___23244);

return statearr_23239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___23244,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23257 = [];
var len__19364__auto___23260 = arguments.length;
var i__19365__auto___23261 = (0);
while(true){
if((i__19365__auto___23261 < len__19364__auto___23260)){
args23257.push((arguments[i__19365__auto___23261]));

var G__23262 = (i__19365__auto___23261 + (1));
i__19365__auto___23261 = G__23262;
continue;
} else {
}
break;
}

var G__23259 = args23257.length;
switch (G__23259) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23257.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto__){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto__){
return (function (state_23429){
var state_val_23430 = (state_23429[(1)]);
if((state_val_23430 === (7))){
var inst_23425 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
var statearr_23431_23472 = state_23429__$1;
(statearr_23431_23472[(2)] = inst_23425);

(statearr_23431_23472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (20))){
var inst_23395 = (state_23429[(7)]);
var inst_23406 = (state_23429[(2)]);
var inst_23407 = cljs.core.next.call(null,inst_23395);
var inst_23381 = inst_23407;
var inst_23382 = null;
var inst_23383 = (0);
var inst_23384 = (0);
var state_23429__$1 = (function (){var statearr_23432 = state_23429;
(statearr_23432[(8)] = inst_23406);

(statearr_23432[(9)] = inst_23382);

(statearr_23432[(10)] = inst_23381);

(statearr_23432[(11)] = inst_23384);

(statearr_23432[(12)] = inst_23383);

return statearr_23432;
})();
var statearr_23433_23473 = state_23429__$1;
(statearr_23433_23473[(2)] = null);

(statearr_23433_23473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (1))){
var state_23429__$1 = state_23429;
var statearr_23434_23474 = state_23429__$1;
(statearr_23434_23474[(2)] = null);

(statearr_23434_23474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (4))){
var inst_23370 = (state_23429[(13)]);
var inst_23370__$1 = (state_23429[(2)]);
var inst_23371 = (inst_23370__$1 == null);
var state_23429__$1 = (function (){var statearr_23435 = state_23429;
(statearr_23435[(13)] = inst_23370__$1);

return statearr_23435;
})();
if(cljs.core.truth_(inst_23371)){
var statearr_23436_23475 = state_23429__$1;
(statearr_23436_23475[(1)] = (5));

} else {
var statearr_23437_23476 = state_23429__$1;
(statearr_23437_23476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (15))){
var state_23429__$1 = state_23429;
var statearr_23441_23477 = state_23429__$1;
(statearr_23441_23477[(2)] = null);

(statearr_23441_23477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (21))){
var state_23429__$1 = state_23429;
var statearr_23442_23478 = state_23429__$1;
(statearr_23442_23478[(2)] = null);

(statearr_23442_23478[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (13))){
var inst_23382 = (state_23429[(9)]);
var inst_23381 = (state_23429[(10)]);
var inst_23384 = (state_23429[(11)]);
var inst_23383 = (state_23429[(12)]);
var inst_23391 = (state_23429[(2)]);
var inst_23392 = (inst_23384 + (1));
var tmp23438 = inst_23382;
var tmp23439 = inst_23381;
var tmp23440 = inst_23383;
var inst_23381__$1 = tmp23439;
var inst_23382__$1 = tmp23438;
var inst_23383__$1 = tmp23440;
var inst_23384__$1 = inst_23392;
var state_23429__$1 = (function (){var statearr_23443 = state_23429;
(statearr_23443[(9)] = inst_23382__$1);

(statearr_23443[(10)] = inst_23381__$1);

(statearr_23443[(14)] = inst_23391);

(statearr_23443[(11)] = inst_23384__$1);

(statearr_23443[(12)] = inst_23383__$1);

return statearr_23443;
})();
var statearr_23444_23479 = state_23429__$1;
(statearr_23444_23479[(2)] = null);

(statearr_23444_23479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (22))){
var state_23429__$1 = state_23429;
var statearr_23445_23480 = state_23429__$1;
(statearr_23445_23480[(2)] = null);

(statearr_23445_23480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (6))){
var inst_23370 = (state_23429[(13)]);
var inst_23379 = f.call(null,inst_23370);
var inst_23380 = cljs.core.seq.call(null,inst_23379);
var inst_23381 = inst_23380;
var inst_23382 = null;
var inst_23383 = (0);
var inst_23384 = (0);
var state_23429__$1 = (function (){var statearr_23446 = state_23429;
(statearr_23446[(9)] = inst_23382);

(statearr_23446[(10)] = inst_23381);

(statearr_23446[(11)] = inst_23384);

(statearr_23446[(12)] = inst_23383);

return statearr_23446;
})();
var statearr_23447_23481 = state_23429__$1;
(statearr_23447_23481[(2)] = null);

(statearr_23447_23481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (17))){
var inst_23395 = (state_23429[(7)]);
var inst_23399 = cljs.core.chunk_first.call(null,inst_23395);
var inst_23400 = cljs.core.chunk_rest.call(null,inst_23395);
var inst_23401 = cljs.core.count.call(null,inst_23399);
var inst_23381 = inst_23400;
var inst_23382 = inst_23399;
var inst_23383 = inst_23401;
var inst_23384 = (0);
var state_23429__$1 = (function (){var statearr_23448 = state_23429;
(statearr_23448[(9)] = inst_23382);

(statearr_23448[(10)] = inst_23381);

(statearr_23448[(11)] = inst_23384);

(statearr_23448[(12)] = inst_23383);

return statearr_23448;
})();
var statearr_23449_23482 = state_23429__$1;
(statearr_23449_23482[(2)] = null);

(statearr_23449_23482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (3))){
var inst_23427 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23429__$1,inst_23427);
} else {
if((state_val_23430 === (12))){
var inst_23415 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
var statearr_23450_23483 = state_23429__$1;
(statearr_23450_23483[(2)] = inst_23415);

(statearr_23450_23483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (2))){
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23429__$1,(4),in$);
} else {
if((state_val_23430 === (23))){
var inst_23423 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
var statearr_23451_23484 = state_23429__$1;
(statearr_23451_23484[(2)] = inst_23423);

(statearr_23451_23484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (19))){
var inst_23410 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
var statearr_23452_23485 = state_23429__$1;
(statearr_23452_23485[(2)] = inst_23410);

(statearr_23452_23485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (11))){
var inst_23381 = (state_23429[(10)]);
var inst_23395 = (state_23429[(7)]);
var inst_23395__$1 = cljs.core.seq.call(null,inst_23381);
var state_23429__$1 = (function (){var statearr_23453 = state_23429;
(statearr_23453[(7)] = inst_23395__$1);

return statearr_23453;
})();
if(inst_23395__$1){
var statearr_23454_23486 = state_23429__$1;
(statearr_23454_23486[(1)] = (14));

} else {
var statearr_23455_23487 = state_23429__$1;
(statearr_23455_23487[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (9))){
var inst_23417 = (state_23429[(2)]);
var inst_23418 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23429__$1 = (function (){var statearr_23456 = state_23429;
(statearr_23456[(15)] = inst_23417);

return statearr_23456;
})();
if(cljs.core.truth_(inst_23418)){
var statearr_23457_23488 = state_23429__$1;
(statearr_23457_23488[(1)] = (21));

} else {
var statearr_23458_23489 = state_23429__$1;
(statearr_23458_23489[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (5))){
var inst_23373 = cljs.core.async.close_BANG_.call(null,out);
var state_23429__$1 = state_23429;
var statearr_23459_23490 = state_23429__$1;
(statearr_23459_23490[(2)] = inst_23373);

(statearr_23459_23490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (14))){
var inst_23395 = (state_23429[(7)]);
var inst_23397 = cljs.core.chunked_seq_QMARK_.call(null,inst_23395);
var state_23429__$1 = state_23429;
if(inst_23397){
var statearr_23460_23491 = state_23429__$1;
(statearr_23460_23491[(1)] = (17));

} else {
var statearr_23461_23492 = state_23429__$1;
(statearr_23461_23492[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (16))){
var inst_23413 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
var statearr_23462_23493 = state_23429__$1;
(statearr_23462_23493[(2)] = inst_23413);

(statearr_23462_23493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (10))){
var inst_23382 = (state_23429[(9)]);
var inst_23384 = (state_23429[(11)]);
var inst_23389 = cljs.core._nth.call(null,inst_23382,inst_23384);
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23429__$1,(13),out,inst_23389);
} else {
if((state_val_23430 === (18))){
var inst_23395 = (state_23429[(7)]);
var inst_23404 = cljs.core.first.call(null,inst_23395);
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23429__$1,(20),out,inst_23404);
} else {
if((state_val_23430 === (8))){
var inst_23384 = (state_23429[(11)]);
var inst_23383 = (state_23429[(12)]);
var inst_23386 = (inst_23384 < inst_23383);
var inst_23387 = inst_23386;
var state_23429__$1 = state_23429;
if(cljs.core.truth_(inst_23387)){
var statearr_23463_23494 = state_23429__$1;
(statearr_23463_23494[(1)] = (10));

} else {
var statearr_23464_23495 = state_23429__$1;
(statearr_23464_23495[(1)] = (11));

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
});})(c__20994__auto__))
;
return ((function (switch__20882__auto__,c__20994__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20883__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20883__auto____0 = (function (){
var statearr_23468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23468[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20883__auto__);

(statearr_23468[(1)] = (1));

return statearr_23468;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20883__auto____1 = (function (state_23429){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23469){if((e23469 instanceof Object)){
var ex__20886__auto__ = e23469;
var statearr_23470_23496 = state_23429;
(statearr_23470_23496[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23497 = state_23429;
state_23429 = G__23497;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20883__auto__ = function(state_23429){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20883__auto____1.call(this,state_23429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20883__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20883__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto__))
})();
var state__20996__auto__ = (function (){var statearr_23471 = f__20995__auto__.call(null);
(statearr_23471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto__);

return statearr_23471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto__))
);

return c__20994__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23498 = [];
var len__19364__auto___23501 = arguments.length;
var i__19365__auto___23502 = (0);
while(true){
if((i__19365__auto___23502 < len__19364__auto___23501)){
args23498.push((arguments[i__19365__auto___23502]));

var G__23503 = (i__19365__auto___23502 + (1));
i__19365__auto___23502 = G__23503;
continue;
} else {
}
break;
}

var G__23500 = args23498.length;
switch (G__23500) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23498.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23505 = [];
var len__19364__auto___23508 = arguments.length;
var i__19365__auto___23509 = (0);
while(true){
if((i__19365__auto___23509 < len__19364__auto___23508)){
args23505.push((arguments[i__19365__auto___23509]));

var G__23510 = (i__19365__auto___23509 + (1));
i__19365__auto___23509 = G__23510;
continue;
} else {
}
break;
}

var G__23507 = args23505.length;
switch (G__23507) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23505.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23512 = [];
var len__19364__auto___23563 = arguments.length;
var i__19365__auto___23564 = (0);
while(true){
if((i__19365__auto___23564 < len__19364__auto___23563)){
args23512.push((arguments[i__19365__auto___23564]));

var G__23565 = (i__19365__auto___23564 + (1));
i__19365__auto___23564 = G__23565;
continue;
} else {
}
break;
}

var G__23514 = args23512.length;
switch (G__23514) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23512.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20994__auto___23567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___23567,out){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___23567,out){
return (function (state_23538){
var state_val_23539 = (state_23538[(1)]);
if((state_val_23539 === (7))){
var inst_23533 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
var statearr_23540_23568 = state_23538__$1;
(statearr_23540_23568[(2)] = inst_23533);

(statearr_23540_23568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (1))){
var inst_23515 = null;
var state_23538__$1 = (function (){var statearr_23541 = state_23538;
(statearr_23541[(7)] = inst_23515);

return statearr_23541;
})();
var statearr_23542_23569 = state_23538__$1;
(statearr_23542_23569[(2)] = null);

(statearr_23542_23569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (4))){
var inst_23518 = (state_23538[(8)]);
var inst_23518__$1 = (state_23538[(2)]);
var inst_23519 = (inst_23518__$1 == null);
var inst_23520 = cljs.core.not.call(null,inst_23519);
var state_23538__$1 = (function (){var statearr_23543 = state_23538;
(statearr_23543[(8)] = inst_23518__$1);

return statearr_23543;
})();
if(inst_23520){
var statearr_23544_23570 = state_23538__$1;
(statearr_23544_23570[(1)] = (5));

} else {
var statearr_23545_23571 = state_23538__$1;
(statearr_23545_23571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (6))){
var state_23538__$1 = state_23538;
var statearr_23546_23572 = state_23538__$1;
(statearr_23546_23572[(2)] = null);

(statearr_23546_23572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (3))){
var inst_23535 = (state_23538[(2)]);
var inst_23536 = cljs.core.async.close_BANG_.call(null,out);
var state_23538__$1 = (function (){var statearr_23547 = state_23538;
(statearr_23547[(9)] = inst_23535);

return statearr_23547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23538__$1,inst_23536);
} else {
if((state_val_23539 === (2))){
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23538__$1,(4),ch);
} else {
if((state_val_23539 === (11))){
var inst_23518 = (state_23538[(8)]);
var inst_23527 = (state_23538[(2)]);
var inst_23515 = inst_23518;
var state_23538__$1 = (function (){var statearr_23548 = state_23538;
(statearr_23548[(10)] = inst_23527);

(statearr_23548[(7)] = inst_23515);

return statearr_23548;
})();
var statearr_23549_23573 = state_23538__$1;
(statearr_23549_23573[(2)] = null);

(statearr_23549_23573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (9))){
var inst_23518 = (state_23538[(8)]);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23538__$1,(11),out,inst_23518);
} else {
if((state_val_23539 === (5))){
var inst_23518 = (state_23538[(8)]);
var inst_23515 = (state_23538[(7)]);
var inst_23522 = cljs.core._EQ_.call(null,inst_23518,inst_23515);
var state_23538__$1 = state_23538;
if(inst_23522){
var statearr_23551_23574 = state_23538__$1;
(statearr_23551_23574[(1)] = (8));

} else {
var statearr_23552_23575 = state_23538__$1;
(statearr_23552_23575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (10))){
var inst_23530 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
var statearr_23553_23576 = state_23538__$1;
(statearr_23553_23576[(2)] = inst_23530);

(statearr_23553_23576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23539 === (8))){
var inst_23515 = (state_23538[(7)]);
var tmp23550 = inst_23515;
var inst_23515__$1 = tmp23550;
var state_23538__$1 = (function (){var statearr_23554 = state_23538;
(statearr_23554[(7)] = inst_23515__$1);

return statearr_23554;
})();
var statearr_23555_23577 = state_23538__$1;
(statearr_23555_23577[(2)] = null);

(statearr_23555_23577[(1)] = (2));


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
});})(c__20994__auto___23567,out))
;
return ((function (switch__20882__auto__,c__20994__auto___23567,out){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_23559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23559[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_23559[(1)] = (1));

return statearr_23559;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_23538){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23560){if((e23560 instanceof Object)){
var ex__20886__auto__ = e23560;
var statearr_23561_23578 = state_23538;
(statearr_23561_23578[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23579 = state_23538;
state_23538 = G__23579;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___23567,out))
})();
var state__20996__auto__ = (function (){var statearr_23562 = f__20995__auto__.call(null);
(statearr_23562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___23567);

return statearr_23562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___23567,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23580 = [];
var len__19364__auto___23650 = arguments.length;
var i__19365__auto___23651 = (0);
while(true){
if((i__19365__auto___23651 < len__19364__auto___23650)){
args23580.push((arguments[i__19365__auto___23651]));

var G__23652 = (i__19365__auto___23651 + (1));
i__19365__auto___23651 = G__23652;
continue;
} else {
}
break;
}

var G__23582 = args23580.length;
switch (G__23582) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23580.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20994__auto___23654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___23654,out){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___23654,out){
return (function (state_23620){
var state_val_23621 = (state_23620[(1)]);
if((state_val_23621 === (7))){
var inst_23616 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23622_23655 = state_23620__$1;
(statearr_23622_23655[(2)] = inst_23616);

(statearr_23622_23655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (1))){
var inst_23583 = (new Array(n));
var inst_23584 = inst_23583;
var inst_23585 = (0);
var state_23620__$1 = (function (){var statearr_23623 = state_23620;
(statearr_23623[(7)] = inst_23584);

(statearr_23623[(8)] = inst_23585);

return statearr_23623;
})();
var statearr_23624_23656 = state_23620__$1;
(statearr_23624_23656[(2)] = null);

(statearr_23624_23656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (4))){
var inst_23588 = (state_23620[(9)]);
var inst_23588__$1 = (state_23620[(2)]);
var inst_23589 = (inst_23588__$1 == null);
var inst_23590 = cljs.core.not.call(null,inst_23589);
var state_23620__$1 = (function (){var statearr_23625 = state_23620;
(statearr_23625[(9)] = inst_23588__$1);

return statearr_23625;
})();
if(inst_23590){
var statearr_23626_23657 = state_23620__$1;
(statearr_23626_23657[(1)] = (5));

} else {
var statearr_23627_23658 = state_23620__$1;
(statearr_23627_23658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (15))){
var inst_23610 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23628_23659 = state_23620__$1;
(statearr_23628_23659[(2)] = inst_23610);

(statearr_23628_23659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (13))){
var state_23620__$1 = state_23620;
var statearr_23629_23660 = state_23620__$1;
(statearr_23629_23660[(2)] = null);

(statearr_23629_23660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (6))){
var inst_23585 = (state_23620[(8)]);
var inst_23606 = (inst_23585 > (0));
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23606)){
var statearr_23630_23661 = state_23620__$1;
(statearr_23630_23661[(1)] = (12));

} else {
var statearr_23631_23662 = state_23620__$1;
(statearr_23631_23662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (3))){
var inst_23618 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23620__$1,inst_23618);
} else {
if((state_val_23621 === (12))){
var inst_23584 = (state_23620[(7)]);
var inst_23608 = cljs.core.vec.call(null,inst_23584);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23620__$1,(15),out,inst_23608);
} else {
if((state_val_23621 === (2))){
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23620__$1,(4),ch);
} else {
if((state_val_23621 === (11))){
var inst_23600 = (state_23620[(2)]);
var inst_23601 = (new Array(n));
var inst_23584 = inst_23601;
var inst_23585 = (0);
var state_23620__$1 = (function (){var statearr_23632 = state_23620;
(statearr_23632[(10)] = inst_23600);

(statearr_23632[(7)] = inst_23584);

(statearr_23632[(8)] = inst_23585);

return statearr_23632;
})();
var statearr_23633_23663 = state_23620__$1;
(statearr_23633_23663[(2)] = null);

(statearr_23633_23663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (9))){
var inst_23584 = (state_23620[(7)]);
var inst_23598 = cljs.core.vec.call(null,inst_23584);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23620__$1,(11),out,inst_23598);
} else {
if((state_val_23621 === (5))){
var inst_23588 = (state_23620[(9)]);
var inst_23584 = (state_23620[(7)]);
var inst_23593 = (state_23620[(11)]);
var inst_23585 = (state_23620[(8)]);
var inst_23592 = (inst_23584[inst_23585] = inst_23588);
var inst_23593__$1 = (inst_23585 + (1));
var inst_23594 = (inst_23593__$1 < n);
var state_23620__$1 = (function (){var statearr_23634 = state_23620;
(statearr_23634[(12)] = inst_23592);

(statearr_23634[(11)] = inst_23593__$1);

return statearr_23634;
})();
if(cljs.core.truth_(inst_23594)){
var statearr_23635_23664 = state_23620__$1;
(statearr_23635_23664[(1)] = (8));

} else {
var statearr_23636_23665 = state_23620__$1;
(statearr_23636_23665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (14))){
var inst_23613 = (state_23620[(2)]);
var inst_23614 = cljs.core.async.close_BANG_.call(null,out);
var state_23620__$1 = (function (){var statearr_23638 = state_23620;
(statearr_23638[(13)] = inst_23613);

return statearr_23638;
})();
var statearr_23639_23666 = state_23620__$1;
(statearr_23639_23666[(2)] = inst_23614);

(statearr_23639_23666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (10))){
var inst_23604 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23640_23667 = state_23620__$1;
(statearr_23640_23667[(2)] = inst_23604);

(statearr_23640_23667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (8))){
var inst_23584 = (state_23620[(7)]);
var inst_23593 = (state_23620[(11)]);
var tmp23637 = inst_23584;
var inst_23584__$1 = tmp23637;
var inst_23585 = inst_23593;
var state_23620__$1 = (function (){var statearr_23641 = state_23620;
(statearr_23641[(7)] = inst_23584__$1);

(statearr_23641[(8)] = inst_23585);

return statearr_23641;
})();
var statearr_23642_23668 = state_23620__$1;
(statearr_23642_23668[(2)] = null);

(statearr_23642_23668[(1)] = (2));


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
});})(c__20994__auto___23654,out))
;
return ((function (switch__20882__auto__,c__20994__auto___23654,out){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_23646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23646[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_23646[(1)] = (1));

return statearr_23646;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_23620){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23647){if((e23647 instanceof Object)){
var ex__20886__auto__ = e23647;
var statearr_23648_23669 = state_23620;
(statearr_23648_23669[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23670 = state_23620;
state_23620 = G__23670;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_23620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_23620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___23654,out))
})();
var state__20996__auto__ = (function (){var statearr_23649 = f__20995__auto__.call(null);
(statearr_23649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___23654);

return statearr_23649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___23654,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23671 = [];
var len__19364__auto___23745 = arguments.length;
var i__19365__auto___23746 = (0);
while(true){
if((i__19365__auto___23746 < len__19364__auto___23745)){
args23671.push((arguments[i__19365__auto___23746]));

var G__23747 = (i__19365__auto___23746 + (1));
i__19365__auto___23746 = G__23747;
continue;
} else {
}
break;
}

var G__23673 = args23671.length;
switch (G__23673) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23671.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20994__auto___23749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20994__auto___23749,out){
return (function (){
var f__20995__auto__ = (function (){var switch__20882__auto__ = ((function (c__20994__auto___23749,out){
return (function (state_23715){
var state_val_23716 = (state_23715[(1)]);
if((state_val_23716 === (7))){
var inst_23711 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23717_23750 = state_23715__$1;
(statearr_23717_23750[(2)] = inst_23711);

(statearr_23717_23750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (1))){
var inst_23674 = [];
var inst_23675 = inst_23674;
var inst_23676 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23715__$1 = (function (){var statearr_23718 = state_23715;
(statearr_23718[(7)] = inst_23676);

(statearr_23718[(8)] = inst_23675);

return statearr_23718;
})();
var statearr_23719_23751 = state_23715__$1;
(statearr_23719_23751[(2)] = null);

(statearr_23719_23751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (4))){
var inst_23679 = (state_23715[(9)]);
var inst_23679__$1 = (state_23715[(2)]);
var inst_23680 = (inst_23679__$1 == null);
var inst_23681 = cljs.core.not.call(null,inst_23680);
var state_23715__$1 = (function (){var statearr_23720 = state_23715;
(statearr_23720[(9)] = inst_23679__$1);

return statearr_23720;
})();
if(inst_23681){
var statearr_23721_23752 = state_23715__$1;
(statearr_23721_23752[(1)] = (5));

} else {
var statearr_23722_23753 = state_23715__$1;
(statearr_23722_23753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (15))){
var inst_23705 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23723_23754 = state_23715__$1;
(statearr_23723_23754[(2)] = inst_23705);

(statearr_23723_23754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (13))){
var state_23715__$1 = state_23715;
var statearr_23724_23755 = state_23715__$1;
(statearr_23724_23755[(2)] = null);

(statearr_23724_23755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (6))){
var inst_23675 = (state_23715[(8)]);
var inst_23700 = inst_23675.length;
var inst_23701 = (inst_23700 > (0));
var state_23715__$1 = state_23715;
if(cljs.core.truth_(inst_23701)){
var statearr_23725_23756 = state_23715__$1;
(statearr_23725_23756[(1)] = (12));

} else {
var statearr_23726_23757 = state_23715__$1;
(statearr_23726_23757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (3))){
var inst_23713 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23715__$1,inst_23713);
} else {
if((state_val_23716 === (12))){
var inst_23675 = (state_23715[(8)]);
var inst_23703 = cljs.core.vec.call(null,inst_23675);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(15),out,inst_23703);
} else {
if((state_val_23716 === (2))){
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23715__$1,(4),ch);
} else {
if((state_val_23716 === (11))){
var inst_23679 = (state_23715[(9)]);
var inst_23683 = (state_23715[(10)]);
var inst_23693 = (state_23715[(2)]);
var inst_23694 = [];
var inst_23695 = inst_23694.push(inst_23679);
var inst_23675 = inst_23694;
var inst_23676 = inst_23683;
var state_23715__$1 = (function (){var statearr_23727 = state_23715;
(statearr_23727[(7)] = inst_23676);

(statearr_23727[(8)] = inst_23675);

(statearr_23727[(11)] = inst_23695);

(statearr_23727[(12)] = inst_23693);

return statearr_23727;
})();
var statearr_23728_23758 = state_23715__$1;
(statearr_23728_23758[(2)] = null);

(statearr_23728_23758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (9))){
var inst_23675 = (state_23715[(8)]);
var inst_23691 = cljs.core.vec.call(null,inst_23675);
var state_23715__$1 = state_23715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23715__$1,(11),out,inst_23691);
} else {
if((state_val_23716 === (5))){
var inst_23676 = (state_23715[(7)]);
var inst_23679 = (state_23715[(9)]);
var inst_23683 = (state_23715[(10)]);
var inst_23683__$1 = f.call(null,inst_23679);
var inst_23684 = cljs.core._EQ_.call(null,inst_23683__$1,inst_23676);
var inst_23685 = cljs.core.keyword_identical_QMARK_.call(null,inst_23676,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23686 = (inst_23684) || (inst_23685);
var state_23715__$1 = (function (){var statearr_23729 = state_23715;
(statearr_23729[(10)] = inst_23683__$1);

return statearr_23729;
})();
if(cljs.core.truth_(inst_23686)){
var statearr_23730_23759 = state_23715__$1;
(statearr_23730_23759[(1)] = (8));

} else {
var statearr_23731_23760 = state_23715__$1;
(statearr_23731_23760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (14))){
var inst_23708 = (state_23715[(2)]);
var inst_23709 = cljs.core.async.close_BANG_.call(null,out);
var state_23715__$1 = (function (){var statearr_23733 = state_23715;
(statearr_23733[(13)] = inst_23708);

return statearr_23733;
})();
var statearr_23734_23761 = state_23715__$1;
(statearr_23734_23761[(2)] = inst_23709);

(statearr_23734_23761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (10))){
var inst_23698 = (state_23715[(2)]);
var state_23715__$1 = state_23715;
var statearr_23735_23762 = state_23715__$1;
(statearr_23735_23762[(2)] = inst_23698);

(statearr_23735_23762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23716 === (8))){
var inst_23679 = (state_23715[(9)]);
var inst_23675 = (state_23715[(8)]);
var inst_23683 = (state_23715[(10)]);
var inst_23688 = inst_23675.push(inst_23679);
var tmp23732 = inst_23675;
var inst_23675__$1 = tmp23732;
var inst_23676 = inst_23683;
var state_23715__$1 = (function (){var statearr_23736 = state_23715;
(statearr_23736[(7)] = inst_23676);

(statearr_23736[(14)] = inst_23688);

(statearr_23736[(8)] = inst_23675__$1);

return statearr_23736;
})();
var statearr_23737_23763 = state_23715__$1;
(statearr_23737_23763[(2)] = null);

(statearr_23737_23763[(1)] = (2));


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
});})(c__20994__auto___23749,out))
;
return ((function (switch__20882__auto__,c__20994__auto___23749,out){
return (function() {
var cljs$core$async$state_machine__20883__auto__ = null;
var cljs$core$async$state_machine__20883__auto____0 = (function (){
var statearr_23741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23741[(0)] = cljs$core$async$state_machine__20883__auto__);

(statearr_23741[(1)] = (1));

return statearr_23741;
});
var cljs$core$async$state_machine__20883__auto____1 = (function (state_23715){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_23715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e23742){if((e23742 instanceof Object)){
var ex__20886__auto__ = e23742;
var statearr_23743_23764 = state_23715;
(statearr_23743_23764[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23765 = state_23715;
state_23715 = G__23765;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
cljs$core$async$state_machine__20883__auto__ = function(state_23715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20883__auto____1.call(this,state_23715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20883__auto____0;
cljs$core$async$state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20883__auto____1;
return cljs$core$async$state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20994__auto___23749,out))
})();
var state__20996__auto__ = (function (){var statearr_23744 = f__20995__auto__.call(null);
(statearr_23744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20994__auto___23749);

return statearr_23744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20996__auto__);
});})(c__20994__auto___23749,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1463475580666