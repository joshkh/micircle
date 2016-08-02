// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args11036 = [];
var len__7322__auto___11042 = arguments.length;
var i__7323__auto___11043 = (0);
while(true){
if((i__7323__auto___11043 < len__7322__auto___11042)){
args11036.push((arguments[i__7323__auto___11043]));

var G__11044 = (i__7323__auto___11043 + (1));
i__7323__auto___11043 = G__11044;
continue;
} else {
}
break;
}

var G__11038 = args11036.length;
switch (G__11038) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11036.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11039 = (function (f,blockable,meta11040){
this.f = f;
this.blockable = blockable;
this.meta11040 = meta11040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11041,meta11040__$1){
var self__ = this;
var _11041__$1 = this;
return (new cljs.core.async.t_cljs$core$async11039(self__.f,self__.blockable,meta11040__$1));
});

cljs.core.async.t_cljs$core$async11039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11041){
var self__ = this;
var _11041__$1 = this;
return self__.meta11040;
});

cljs.core.async.t_cljs$core$async11039.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11040","meta11040",1450434294,null)], null);
});

cljs.core.async.t_cljs$core$async11039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11039";

cljs.core.async.t_cljs$core$async11039.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11039");
});

cljs.core.async.__GT_t_cljs$core$async11039 = (function cljs$core$async$__GT_t_cljs$core$async11039(f__$1,blockable__$1,meta11040){
return (new cljs.core.async.t_cljs$core$async11039(f__$1,blockable__$1,meta11040));
});

}

return (new cljs.core.async.t_cljs$core$async11039(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args11048 = [];
var len__7322__auto___11051 = arguments.length;
var i__7323__auto___11052 = (0);
while(true){
if((i__7323__auto___11052 < len__7322__auto___11051)){
args11048.push((arguments[i__7323__auto___11052]));

var G__11053 = (i__7323__auto___11052 + (1));
i__7323__auto___11052 = G__11053;
continue;
} else {
}
break;
}

var G__11050 = args11048.length;
switch (G__11050) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11048.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args11055 = [];
var len__7322__auto___11058 = arguments.length;
var i__7323__auto___11059 = (0);
while(true){
if((i__7323__auto___11059 < len__7322__auto___11058)){
args11055.push((arguments[i__7323__auto___11059]));

var G__11060 = (i__7323__auto___11059 + (1));
i__7323__auto___11059 = G__11060;
continue;
} else {
}
break;
}

var G__11057 = args11055.length;
switch (G__11057) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11055.length)].join('')));

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
var args11062 = [];
var len__7322__auto___11065 = arguments.length;
var i__7323__auto___11066 = (0);
while(true){
if((i__7323__auto___11066 < len__7322__auto___11065)){
args11062.push((arguments[i__7323__auto___11066]));

var G__11067 = (i__7323__auto___11066 + (1));
i__7323__auto___11066 = G__11067;
continue;
} else {
}
break;
}

var G__11064 = args11062.length;
switch (G__11064) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11062.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11069 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11069);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11069,ret){
return (function (){
return fn1.call(null,val_11069);
});})(val_11069,ret))
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
var args11070 = [];
var len__7322__auto___11073 = arguments.length;
var i__7323__auto___11074 = (0);
while(true){
if((i__7323__auto___11074 < len__7322__auto___11073)){
args11070.push((arguments[i__7323__auto___11074]));

var G__11075 = (i__7323__auto___11074 + (1));
i__7323__auto___11074 = G__11075;
continue;
} else {
}
break;
}

var G__11072 = args11070.length;
switch (G__11072) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11070.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__7162__auto___11077 = n;
var x_11078 = (0);
while(true){
if((x_11078 < n__7162__auto___11077)){
(a[x_11078] = (0));

var G__11079 = (x_11078 + (1));
x_11078 = G__11079;
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

var G__11080 = (i + (1));
i = G__11080;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11084 = (function (alt_flag,flag,meta11085){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11085 = meta11085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11086,meta11085__$1){
var self__ = this;
var _11086__$1 = this;
return (new cljs.core.async.t_cljs$core$async11084(self__.alt_flag,self__.flag,meta11085__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11086){
var self__ = this;
var _11086__$1 = this;
return self__.meta11085;
});})(flag))
;

cljs.core.async.t_cljs$core$async11084.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11084.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11085","meta11085",825265301,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11084";

cljs.core.async.t_cljs$core$async11084.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11084");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11084 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11084(alt_flag__$1,flag__$1,meta11085){
return (new cljs.core.async.t_cljs$core$async11084(alt_flag__$1,flag__$1,meta11085));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11084(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11090 = (function (alt_handler,flag,cb,meta11091){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11091 = meta11091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11092,meta11091__$1){
var self__ = this;
var _11092__$1 = this;
return (new cljs.core.async.t_cljs$core$async11090(self__.alt_handler,self__.flag,self__.cb,meta11091__$1));
});

cljs.core.async.t_cljs$core$async11090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11092){
var self__ = this;
var _11092__$1 = this;
return self__.meta11091;
});

cljs.core.async.t_cljs$core$async11090.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11091","meta11091",461677986,null)], null);
});

cljs.core.async.t_cljs$core$async11090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11090";

cljs.core.async.t_cljs$core$async11090.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11090");
});

cljs.core.async.__GT_t_cljs$core$async11090 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11090(alt_handler__$1,flag__$1,cb__$1,meta11091){
return (new cljs.core.async.t_cljs$core$async11090(alt_handler__$1,flag__$1,cb__$1,meta11091));
});

}

return (new cljs.core.async.t_cljs$core$async11090(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11093_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11094_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11094_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6247__auto__ = wport;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11095 = (i + (1));
i = G__11095;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6247__auto__ = ret;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6235__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6235__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6235__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__7329__auto__ = [];
var len__7322__auto___11101 = arguments.length;
var i__7323__auto___11102 = (0);
while(true){
if((i__7323__auto___11102 < len__7322__auto___11101)){
args__7329__auto__.push((arguments[i__7323__auto___11102]));

var G__11103 = (i__7323__auto___11102 + (1));
i__7323__auto___11102 = G__11103;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11098){
var map__11099 = p__11098;
var map__11099__$1 = ((((!((map__11099 == null)))?((((map__11099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11099):map__11099);
var opts = map__11099__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11096){
var G__11097 = cljs.core.first.call(null,seq11096);
var seq11096__$1 = cljs.core.next.call(null,seq11096);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11097,seq11096__$1);
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
var args11104 = [];
var len__7322__auto___11154 = arguments.length;
var i__7323__auto___11155 = (0);
while(true){
if((i__7323__auto___11155 < len__7322__auto___11154)){
args11104.push((arguments[i__7323__auto___11155]));

var G__11156 = (i__7323__auto___11155 + (1));
i__7323__auto___11155 = G__11156;
continue;
} else {
}
break;
}

var G__11106 = args11104.length;
switch (G__11106) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11104.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10991__auto___11158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___11158){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___11158){
return (function (state_11130){
var state_val_11131 = (state_11130[(1)]);
if((state_val_11131 === (7))){
var inst_11126 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11132_11159 = state_11130__$1;
(statearr_11132_11159[(2)] = inst_11126);

(statearr_11132_11159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (1))){
var state_11130__$1 = state_11130;
var statearr_11133_11160 = state_11130__$1;
(statearr_11133_11160[(2)] = null);

(statearr_11133_11160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (4))){
var inst_11109 = (state_11130[(7)]);
var inst_11109__$1 = (state_11130[(2)]);
var inst_11110 = (inst_11109__$1 == null);
var state_11130__$1 = (function (){var statearr_11134 = state_11130;
(statearr_11134[(7)] = inst_11109__$1);

return statearr_11134;
})();
if(cljs.core.truth_(inst_11110)){
var statearr_11135_11161 = state_11130__$1;
(statearr_11135_11161[(1)] = (5));

} else {
var statearr_11136_11162 = state_11130__$1;
(statearr_11136_11162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (13))){
var state_11130__$1 = state_11130;
var statearr_11137_11163 = state_11130__$1;
(statearr_11137_11163[(2)] = null);

(statearr_11137_11163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (6))){
var inst_11109 = (state_11130[(7)]);
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11130__$1,(11),to,inst_11109);
} else {
if((state_val_11131 === (3))){
var inst_11128 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11130__$1,inst_11128);
} else {
if((state_val_11131 === (12))){
var state_11130__$1 = state_11130;
var statearr_11138_11164 = state_11130__$1;
(statearr_11138_11164[(2)] = null);

(statearr_11138_11164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (2))){
var state_11130__$1 = state_11130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11130__$1,(4),from);
} else {
if((state_val_11131 === (11))){
var inst_11119 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
if(cljs.core.truth_(inst_11119)){
var statearr_11139_11165 = state_11130__$1;
(statearr_11139_11165[(1)] = (12));

} else {
var statearr_11140_11166 = state_11130__$1;
(statearr_11140_11166[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (9))){
var state_11130__$1 = state_11130;
var statearr_11141_11167 = state_11130__$1;
(statearr_11141_11167[(2)] = null);

(statearr_11141_11167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (5))){
var state_11130__$1 = state_11130;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11142_11168 = state_11130__$1;
(statearr_11142_11168[(1)] = (8));

} else {
var statearr_11143_11169 = state_11130__$1;
(statearr_11143_11169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (14))){
var inst_11124 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11144_11170 = state_11130__$1;
(statearr_11144_11170[(2)] = inst_11124);

(statearr_11144_11170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (10))){
var inst_11116 = (state_11130[(2)]);
var state_11130__$1 = state_11130;
var statearr_11145_11171 = state_11130__$1;
(statearr_11145_11171[(2)] = inst_11116);

(statearr_11145_11171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11131 === (8))){
var inst_11113 = cljs.core.async.close_BANG_.call(null,to);
var state_11130__$1 = state_11130;
var statearr_11146_11172 = state_11130__$1;
(statearr_11146_11172[(2)] = inst_11113);

(statearr_11146_11172[(1)] = (10));


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
});})(c__10991__auto___11158))
;
return ((function (switch__10879__auto__,c__10991__auto___11158){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_11150 = [null,null,null,null,null,null,null,null];
(statearr_11150[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11150[(1)] = (1));

return statearr_11150;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11130){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11151){if((e11151 instanceof Object)){
var ex__10883__auto__ = e11151;
var statearr_11152_11173 = state_11130;
(statearr_11152_11173[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11174 = state_11130;
state_11130 = G__11174;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___11158))
})();
var state__10993__auto__ = (function (){var statearr_11153 = f__10992__auto__.call(null);
(statearr_11153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___11158);

return statearr_11153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___11158))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11362){
var vec__11363 = p__11362;
var v = cljs.core.nth.call(null,vec__11363,(0),null);
var p = cljs.core.nth.call(null,vec__11363,(1),null);
var job = vec__11363;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10991__auto___11549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___11549,res,vec__11363,v,p,job,jobs,results){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___11549,res,vec__11363,v,p,job,jobs,results){
return (function (state_11370){
var state_val_11371 = (state_11370[(1)]);
if((state_val_11371 === (1))){
var state_11370__$1 = state_11370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11370__$1,(2),res,v);
} else {
if((state_val_11371 === (2))){
var inst_11367 = (state_11370[(2)]);
var inst_11368 = cljs.core.async.close_BANG_.call(null,res);
var state_11370__$1 = (function (){var statearr_11372 = state_11370;
(statearr_11372[(7)] = inst_11367);

return statearr_11372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11370__$1,inst_11368);
} else {
return null;
}
}
});})(c__10991__auto___11549,res,vec__11363,v,p,job,jobs,results))
;
return ((function (switch__10879__auto__,c__10991__auto___11549,res,vec__11363,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11376 = [null,null,null,null,null,null,null,null];
(statearr_11376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11376[(1)] = (1));

return statearr_11376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11370){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11377){if((e11377 instanceof Object)){
var ex__10883__auto__ = e11377;
var statearr_11378_11550 = state_11370;
(statearr_11378_11550[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11551 = state_11370;
state_11370 = G__11551;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___11549,res,vec__11363,v,p,job,jobs,results))
})();
var state__10993__auto__ = (function (){var statearr_11379 = f__10992__auto__.call(null);
(statearr_11379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___11549);

return statearr_11379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___11549,res,vec__11363,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11380){
var vec__11381 = p__11380;
var v = cljs.core.nth.call(null,vec__11381,(0),null);
var p = cljs.core.nth.call(null,vec__11381,(1),null);
var job = vec__11381;
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
var n__7162__auto___11552 = n;
var __11553 = (0);
while(true){
if((__11553 < n__7162__auto___11552)){
var G__11384_11554 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11384_11554) {
case "compute":
var c__10991__auto___11556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11553,c__10991__auto___11556,G__11384_11554,n__7162__auto___11552,jobs,results,process,async){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (__11553,c__10991__auto___11556,G__11384_11554,n__7162__auto___11552,jobs,results,process,async){
return (function (state_11397){
var state_val_11398 = (state_11397[(1)]);
if((state_val_11398 === (1))){
var state_11397__$1 = state_11397;
var statearr_11399_11557 = state_11397__$1;
(statearr_11399_11557[(2)] = null);

(statearr_11399_11557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11398 === (2))){
var state_11397__$1 = state_11397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11397__$1,(4),jobs);
} else {
if((state_val_11398 === (3))){
var inst_11395 = (state_11397[(2)]);
var state_11397__$1 = state_11397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11397__$1,inst_11395);
} else {
if((state_val_11398 === (4))){
var inst_11387 = (state_11397[(2)]);
var inst_11388 = process.call(null,inst_11387);
var state_11397__$1 = state_11397;
if(cljs.core.truth_(inst_11388)){
var statearr_11400_11558 = state_11397__$1;
(statearr_11400_11558[(1)] = (5));

} else {
var statearr_11401_11559 = state_11397__$1;
(statearr_11401_11559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11398 === (5))){
var state_11397__$1 = state_11397;
var statearr_11402_11560 = state_11397__$1;
(statearr_11402_11560[(2)] = null);

(statearr_11402_11560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11398 === (6))){
var state_11397__$1 = state_11397;
var statearr_11403_11561 = state_11397__$1;
(statearr_11403_11561[(2)] = null);

(statearr_11403_11561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11398 === (7))){
var inst_11393 = (state_11397[(2)]);
var state_11397__$1 = state_11397;
var statearr_11404_11562 = state_11397__$1;
(statearr_11404_11562[(2)] = inst_11393);

(statearr_11404_11562[(1)] = (3));


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
});})(__11553,c__10991__auto___11556,G__11384_11554,n__7162__auto___11552,jobs,results,process,async))
;
return ((function (__11553,switch__10879__auto__,c__10991__auto___11556,G__11384_11554,n__7162__auto___11552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11408 = [null,null,null,null,null,null,null];
(statearr_11408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11408[(1)] = (1));

return statearr_11408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11397){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11409){if((e11409 instanceof Object)){
var ex__10883__auto__ = e11409;
var statearr_11410_11563 = state_11397;
(statearr_11410_11563[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11564 = state_11397;
state_11397 = G__11564;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(__11553,switch__10879__auto__,c__10991__auto___11556,G__11384_11554,n__7162__auto___11552,jobs,results,process,async))
})();
var state__10993__auto__ = (function (){var statearr_11411 = f__10992__auto__.call(null);
(statearr_11411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___11556);

return statearr_11411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(__11553,c__10991__auto___11556,G__11384_11554,n__7162__auto___11552,jobs,results,process,async))
);


break;
case "async":
var c__10991__auto___11565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11553,c__10991__auto___11565,G__11384_11554,n__7162__auto___11552,jobs,results,process,async){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (__11553,c__10991__auto___11565,G__11384_11554,n__7162__auto___11552,jobs,results,process,async){
return (function (state_11424){
var state_val_11425 = (state_11424[(1)]);
if((state_val_11425 === (1))){
var state_11424__$1 = state_11424;
var statearr_11426_11566 = state_11424__$1;
(statearr_11426_11566[(2)] = null);

(statearr_11426_11566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (2))){
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11424__$1,(4),jobs);
} else {
if((state_val_11425 === (3))){
var inst_11422 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11424__$1,inst_11422);
} else {
if((state_val_11425 === (4))){
var inst_11414 = (state_11424[(2)]);
var inst_11415 = async.call(null,inst_11414);
var state_11424__$1 = state_11424;
if(cljs.core.truth_(inst_11415)){
var statearr_11427_11567 = state_11424__$1;
(statearr_11427_11567[(1)] = (5));

} else {
var statearr_11428_11568 = state_11424__$1;
(statearr_11428_11568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (5))){
var state_11424__$1 = state_11424;
var statearr_11429_11569 = state_11424__$1;
(statearr_11429_11569[(2)] = null);

(statearr_11429_11569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (6))){
var state_11424__$1 = state_11424;
var statearr_11430_11570 = state_11424__$1;
(statearr_11430_11570[(2)] = null);

(statearr_11430_11570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (7))){
var inst_11420 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11431_11571 = state_11424__$1;
(statearr_11431_11571[(2)] = inst_11420);

(statearr_11431_11571[(1)] = (3));


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
});})(__11553,c__10991__auto___11565,G__11384_11554,n__7162__auto___11552,jobs,results,process,async))
;
return ((function (__11553,switch__10879__auto__,c__10991__auto___11565,G__11384_11554,n__7162__auto___11552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11435 = [null,null,null,null,null,null,null];
(statearr_11435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11435[(1)] = (1));

return statearr_11435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11424){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11436){if((e11436 instanceof Object)){
var ex__10883__auto__ = e11436;
var statearr_11437_11572 = state_11424;
(statearr_11437_11572[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11573 = state_11424;
state_11424 = G__11573;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(__11553,switch__10879__auto__,c__10991__auto___11565,G__11384_11554,n__7162__auto___11552,jobs,results,process,async))
})();
var state__10993__auto__ = (function (){var statearr_11438 = f__10992__auto__.call(null);
(statearr_11438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___11565);

return statearr_11438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(__11553,c__10991__auto___11565,G__11384_11554,n__7162__auto___11552,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11574 = (__11553 + (1));
__11553 = G__11574;
continue;
} else {
}
break;
}

var c__10991__auto___11575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___11575,jobs,results,process,async){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___11575,jobs,results,process,async){
return (function (state_11460){
var state_val_11461 = (state_11460[(1)]);
if((state_val_11461 === (1))){
var state_11460__$1 = state_11460;
var statearr_11462_11576 = state_11460__$1;
(statearr_11462_11576[(2)] = null);

(statearr_11462_11576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (2))){
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11460__$1,(4),from);
} else {
if((state_val_11461 === (3))){
var inst_11458 = (state_11460[(2)]);
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11460__$1,inst_11458);
} else {
if((state_val_11461 === (4))){
var inst_11441 = (state_11460[(7)]);
var inst_11441__$1 = (state_11460[(2)]);
var inst_11442 = (inst_11441__$1 == null);
var state_11460__$1 = (function (){var statearr_11463 = state_11460;
(statearr_11463[(7)] = inst_11441__$1);

return statearr_11463;
})();
if(cljs.core.truth_(inst_11442)){
var statearr_11464_11577 = state_11460__$1;
(statearr_11464_11577[(1)] = (5));

} else {
var statearr_11465_11578 = state_11460__$1;
(statearr_11465_11578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (5))){
var inst_11444 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11460__$1 = state_11460;
var statearr_11466_11579 = state_11460__$1;
(statearr_11466_11579[(2)] = inst_11444);

(statearr_11466_11579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (6))){
var inst_11441 = (state_11460[(7)]);
var inst_11446 = (state_11460[(8)]);
var inst_11446__$1 = cljs.core.async.chan.call(null,(1));
var inst_11447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11448 = [inst_11441,inst_11446__$1];
var inst_11449 = (new cljs.core.PersistentVector(null,2,(5),inst_11447,inst_11448,null));
var state_11460__$1 = (function (){var statearr_11467 = state_11460;
(statearr_11467[(8)] = inst_11446__$1);

return statearr_11467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11460__$1,(8),jobs,inst_11449);
} else {
if((state_val_11461 === (7))){
var inst_11456 = (state_11460[(2)]);
var state_11460__$1 = state_11460;
var statearr_11468_11580 = state_11460__$1;
(statearr_11468_11580[(2)] = inst_11456);

(statearr_11468_11580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11461 === (8))){
var inst_11446 = (state_11460[(8)]);
var inst_11451 = (state_11460[(2)]);
var state_11460__$1 = (function (){var statearr_11469 = state_11460;
(statearr_11469[(9)] = inst_11451);

return statearr_11469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11460__$1,(9),results,inst_11446);
} else {
if((state_val_11461 === (9))){
var inst_11453 = (state_11460[(2)]);
var state_11460__$1 = (function (){var statearr_11470 = state_11460;
(statearr_11470[(10)] = inst_11453);

return statearr_11470;
})();
var statearr_11471_11581 = state_11460__$1;
(statearr_11471_11581[(2)] = null);

(statearr_11471_11581[(1)] = (2));


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
});})(c__10991__auto___11575,jobs,results,process,async))
;
return ((function (switch__10879__auto__,c__10991__auto___11575,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11475[(1)] = (1));

return statearr_11475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11460){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11476){if((e11476 instanceof Object)){
var ex__10883__auto__ = e11476;
var statearr_11477_11582 = state_11460;
(statearr_11477_11582[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11583 = state_11460;
state_11460 = G__11583;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___11575,jobs,results,process,async))
})();
var state__10993__auto__ = (function (){var statearr_11478 = f__10992__auto__.call(null);
(statearr_11478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___11575);

return statearr_11478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___11575,jobs,results,process,async))
);


var c__10991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto__,jobs,results,process,async){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto__,jobs,results,process,async){
return (function (state_11516){
var state_val_11517 = (state_11516[(1)]);
if((state_val_11517 === (7))){
var inst_11512 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11518_11584 = state_11516__$1;
(statearr_11518_11584[(2)] = inst_11512);

(statearr_11518_11584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (20))){
var state_11516__$1 = state_11516;
var statearr_11519_11585 = state_11516__$1;
(statearr_11519_11585[(2)] = null);

(statearr_11519_11585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (1))){
var state_11516__$1 = state_11516;
var statearr_11520_11586 = state_11516__$1;
(statearr_11520_11586[(2)] = null);

(statearr_11520_11586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (4))){
var inst_11481 = (state_11516[(7)]);
var inst_11481__$1 = (state_11516[(2)]);
var inst_11482 = (inst_11481__$1 == null);
var state_11516__$1 = (function (){var statearr_11521 = state_11516;
(statearr_11521[(7)] = inst_11481__$1);

return statearr_11521;
})();
if(cljs.core.truth_(inst_11482)){
var statearr_11522_11587 = state_11516__$1;
(statearr_11522_11587[(1)] = (5));

} else {
var statearr_11523_11588 = state_11516__$1;
(statearr_11523_11588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (15))){
var inst_11494 = (state_11516[(8)]);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11516__$1,(18),to,inst_11494);
} else {
if((state_val_11517 === (21))){
var inst_11507 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11524_11589 = state_11516__$1;
(statearr_11524_11589[(2)] = inst_11507);

(statearr_11524_11589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (13))){
var inst_11509 = (state_11516[(2)]);
var state_11516__$1 = (function (){var statearr_11525 = state_11516;
(statearr_11525[(9)] = inst_11509);

return statearr_11525;
})();
var statearr_11526_11590 = state_11516__$1;
(statearr_11526_11590[(2)] = null);

(statearr_11526_11590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (6))){
var inst_11481 = (state_11516[(7)]);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11516__$1,(11),inst_11481);
} else {
if((state_val_11517 === (17))){
var inst_11502 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
if(cljs.core.truth_(inst_11502)){
var statearr_11527_11591 = state_11516__$1;
(statearr_11527_11591[(1)] = (19));

} else {
var statearr_11528_11592 = state_11516__$1;
(statearr_11528_11592[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (3))){
var inst_11514 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11516__$1,inst_11514);
} else {
if((state_val_11517 === (12))){
var inst_11491 = (state_11516[(10)]);
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11516__$1,(14),inst_11491);
} else {
if((state_val_11517 === (2))){
var state_11516__$1 = state_11516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11516__$1,(4),results);
} else {
if((state_val_11517 === (19))){
var state_11516__$1 = state_11516;
var statearr_11529_11593 = state_11516__$1;
(statearr_11529_11593[(2)] = null);

(statearr_11529_11593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (11))){
var inst_11491 = (state_11516[(2)]);
var state_11516__$1 = (function (){var statearr_11530 = state_11516;
(statearr_11530[(10)] = inst_11491);

return statearr_11530;
})();
var statearr_11531_11594 = state_11516__$1;
(statearr_11531_11594[(2)] = null);

(statearr_11531_11594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (9))){
var state_11516__$1 = state_11516;
var statearr_11532_11595 = state_11516__$1;
(statearr_11532_11595[(2)] = null);

(statearr_11532_11595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (5))){
var state_11516__$1 = state_11516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11533_11596 = state_11516__$1;
(statearr_11533_11596[(1)] = (8));

} else {
var statearr_11534_11597 = state_11516__$1;
(statearr_11534_11597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (14))){
var inst_11496 = (state_11516[(11)]);
var inst_11494 = (state_11516[(8)]);
var inst_11494__$1 = (state_11516[(2)]);
var inst_11495 = (inst_11494__$1 == null);
var inst_11496__$1 = cljs.core.not.call(null,inst_11495);
var state_11516__$1 = (function (){var statearr_11535 = state_11516;
(statearr_11535[(11)] = inst_11496__$1);

(statearr_11535[(8)] = inst_11494__$1);

return statearr_11535;
})();
if(inst_11496__$1){
var statearr_11536_11598 = state_11516__$1;
(statearr_11536_11598[(1)] = (15));

} else {
var statearr_11537_11599 = state_11516__$1;
(statearr_11537_11599[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (16))){
var inst_11496 = (state_11516[(11)]);
var state_11516__$1 = state_11516;
var statearr_11538_11600 = state_11516__$1;
(statearr_11538_11600[(2)] = inst_11496);

(statearr_11538_11600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (10))){
var inst_11488 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11539_11601 = state_11516__$1;
(statearr_11539_11601[(2)] = inst_11488);

(statearr_11539_11601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (18))){
var inst_11499 = (state_11516[(2)]);
var state_11516__$1 = state_11516;
var statearr_11540_11602 = state_11516__$1;
(statearr_11540_11602[(2)] = inst_11499);

(statearr_11540_11602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11517 === (8))){
var inst_11485 = cljs.core.async.close_BANG_.call(null,to);
var state_11516__$1 = state_11516;
var statearr_11541_11603 = state_11516__$1;
(statearr_11541_11603[(2)] = inst_11485);

(statearr_11541_11603[(1)] = (10));


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
});})(c__10991__auto__,jobs,results,process,async))
;
return ((function (switch__10879__auto__,c__10991__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_11545 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__);

(statearr_11545[(1)] = (1));

return statearr_11545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1 = (function (state_11516){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11546){if((e11546 instanceof Object)){
var ex__10883__auto__ = e11546;
var statearr_11547_11604 = state_11516;
(statearr_11547_11604[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11605 = state_11516;
state_11516 = G__11605;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__ = function(state_11516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1.call(this,state_11516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto__,jobs,results,process,async))
})();
var state__10993__auto__ = (function (){var statearr_11548 = f__10992__auto__.call(null);
(statearr_11548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto__);

return statearr_11548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto__,jobs,results,process,async))
);

return c__10991__auto__;
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
var args11606 = [];
var len__7322__auto___11609 = arguments.length;
var i__7323__auto___11610 = (0);
while(true){
if((i__7323__auto___11610 < len__7322__auto___11609)){
args11606.push((arguments[i__7323__auto___11610]));

var G__11611 = (i__7323__auto___11610 + (1));
i__7323__auto___11610 = G__11611;
continue;
} else {
}
break;
}

var G__11608 = args11606.length;
switch (G__11608) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11606.length)].join('')));

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
var args11613 = [];
var len__7322__auto___11616 = arguments.length;
var i__7323__auto___11617 = (0);
while(true){
if((i__7323__auto___11617 < len__7322__auto___11616)){
args11613.push((arguments[i__7323__auto___11617]));

var G__11618 = (i__7323__auto___11617 + (1));
i__7323__auto___11617 = G__11618;
continue;
} else {
}
break;
}

var G__11615 = args11613.length;
switch (G__11615) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11613.length)].join('')));

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
var args11620 = [];
var len__7322__auto___11673 = arguments.length;
var i__7323__auto___11674 = (0);
while(true){
if((i__7323__auto___11674 < len__7322__auto___11673)){
args11620.push((arguments[i__7323__auto___11674]));

var G__11675 = (i__7323__auto___11674 + (1));
i__7323__auto___11674 = G__11675;
continue;
} else {
}
break;
}

var G__11622 = args11620.length;
switch (G__11622) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11620.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10991__auto___11677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___11677,tc,fc){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___11677,tc,fc){
return (function (state_11648){
var state_val_11649 = (state_11648[(1)]);
if((state_val_11649 === (7))){
var inst_11644 = (state_11648[(2)]);
var state_11648__$1 = state_11648;
var statearr_11650_11678 = state_11648__$1;
(statearr_11650_11678[(2)] = inst_11644);

(statearr_11650_11678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (1))){
var state_11648__$1 = state_11648;
var statearr_11651_11679 = state_11648__$1;
(statearr_11651_11679[(2)] = null);

(statearr_11651_11679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (4))){
var inst_11625 = (state_11648[(7)]);
var inst_11625__$1 = (state_11648[(2)]);
var inst_11626 = (inst_11625__$1 == null);
var state_11648__$1 = (function (){var statearr_11652 = state_11648;
(statearr_11652[(7)] = inst_11625__$1);

return statearr_11652;
})();
if(cljs.core.truth_(inst_11626)){
var statearr_11653_11680 = state_11648__$1;
(statearr_11653_11680[(1)] = (5));

} else {
var statearr_11654_11681 = state_11648__$1;
(statearr_11654_11681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (13))){
var state_11648__$1 = state_11648;
var statearr_11655_11682 = state_11648__$1;
(statearr_11655_11682[(2)] = null);

(statearr_11655_11682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (6))){
var inst_11625 = (state_11648[(7)]);
var inst_11631 = p.call(null,inst_11625);
var state_11648__$1 = state_11648;
if(cljs.core.truth_(inst_11631)){
var statearr_11656_11683 = state_11648__$1;
(statearr_11656_11683[(1)] = (9));

} else {
var statearr_11657_11684 = state_11648__$1;
(statearr_11657_11684[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (3))){
var inst_11646 = (state_11648[(2)]);
var state_11648__$1 = state_11648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11648__$1,inst_11646);
} else {
if((state_val_11649 === (12))){
var state_11648__$1 = state_11648;
var statearr_11658_11685 = state_11648__$1;
(statearr_11658_11685[(2)] = null);

(statearr_11658_11685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (2))){
var state_11648__$1 = state_11648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11648__$1,(4),ch);
} else {
if((state_val_11649 === (11))){
var inst_11625 = (state_11648[(7)]);
var inst_11635 = (state_11648[(2)]);
var state_11648__$1 = state_11648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11648__$1,(8),inst_11635,inst_11625);
} else {
if((state_val_11649 === (9))){
var state_11648__$1 = state_11648;
var statearr_11659_11686 = state_11648__$1;
(statearr_11659_11686[(2)] = tc);

(statearr_11659_11686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (5))){
var inst_11628 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11629 = cljs.core.async.close_BANG_.call(null,fc);
var state_11648__$1 = (function (){var statearr_11660 = state_11648;
(statearr_11660[(8)] = inst_11628);

return statearr_11660;
})();
var statearr_11661_11687 = state_11648__$1;
(statearr_11661_11687[(2)] = inst_11629);

(statearr_11661_11687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (14))){
var inst_11642 = (state_11648[(2)]);
var state_11648__$1 = state_11648;
var statearr_11662_11688 = state_11648__$1;
(statearr_11662_11688[(2)] = inst_11642);

(statearr_11662_11688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (10))){
var state_11648__$1 = state_11648;
var statearr_11663_11689 = state_11648__$1;
(statearr_11663_11689[(2)] = fc);

(statearr_11663_11689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (8))){
var inst_11637 = (state_11648[(2)]);
var state_11648__$1 = state_11648;
if(cljs.core.truth_(inst_11637)){
var statearr_11664_11690 = state_11648__$1;
(statearr_11664_11690[(1)] = (12));

} else {
var statearr_11665_11691 = state_11648__$1;
(statearr_11665_11691[(1)] = (13));

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
});})(c__10991__auto___11677,tc,fc))
;
return ((function (switch__10879__auto__,c__10991__auto___11677,tc,fc){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_11669 = [null,null,null,null,null,null,null,null,null];
(statearr_11669[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11669[(1)] = (1));

return statearr_11669;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11648){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11670){if((e11670 instanceof Object)){
var ex__10883__auto__ = e11670;
var statearr_11671_11692 = state_11648;
(statearr_11671_11692[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11693 = state_11648;
state_11648 = G__11693;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___11677,tc,fc))
})();
var state__10993__auto__ = (function (){var statearr_11672 = f__10992__auto__.call(null);
(statearr_11672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___11677);

return statearr_11672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___11677,tc,fc))
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
var c__10991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto__){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto__){
return (function (state_11757){
var state_val_11758 = (state_11757[(1)]);
if((state_val_11758 === (7))){
var inst_11753 = (state_11757[(2)]);
var state_11757__$1 = state_11757;
var statearr_11759_11780 = state_11757__$1;
(statearr_11759_11780[(2)] = inst_11753);

(statearr_11759_11780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11758 === (1))){
var inst_11737 = init;
var state_11757__$1 = (function (){var statearr_11760 = state_11757;
(statearr_11760[(7)] = inst_11737);

return statearr_11760;
})();
var statearr_11761_11781 = state_11757__$1;
(statearr_11761_11781[(2)] = null);

(statearr_11761_11781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11758 === (4))){
var inst_11740 = (state_11757[(8)]);
var inst_11740__$1 = (state_11757[(2)]);
var inst_11741 = (inst_11740__$1 == null);
var state_11757__$1 = (function (){var statearr_11762 = state_11757;
(statearr_11762[(8)] = inst_11740__$1);

return statearr_11762;
})();
if(cljs.core.truth_(inst_11741)){
var statearr_11763_11782 = state_11757__$1;
(statearr_11763_11782[(1)] = (5));

} else {
var statearr_11764_11783 = state_11757__$1;
(statearr_11764_11783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11758 === (6))){
var inst_11737 = (state_11757[(7)]);
var inst_11744 = (state_11757[(9)]);
var inst_11740 = (state_11757[(8)]);
var inst_11744__$1 = f.call(null,inst_11737,inst_11740);
var inst_11745 = cljs.core.reduced_QMARK_.call(null,inst_11744__$1);
var state_11757__$1 = (function (){var statearr_11765 = state_11757;
(statearr_11765[(9)] = inst_11744__$1);

return statearr_11765;
})();
if(inst_11745){
var statearr_11766_11784 = state_11757__$1;
(statearr_11766_11784[(1)] = (8));

} else {
var statearr_11767_11785 = state_11757__$1;
(statearr_11767_11785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11758 === (3))){
var inst_11755 = (state_11757[(2)]);
var state_11757__$1 = state_11757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11757__$1,inst_11755);
} else {
if((state_val_11758 === (2))){
var state_11757__$1 = state_11757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11757__$1,(4),ch);
} else {
if((state_val_11758 === (9))){
var inst_11744 = (state_11757[(9)]);
var inst_11737 = inst_11744;
var state_11757__$1 = (function (){var statearr_11768 = state_11757;
(statearr_11768[(7)] = inst_11737);

return statearr_11768;
})();
var statearr_11769_11786 = state_11757__$1;
(statearr_11769_11786[(2)] = null);

(statearr_11769_11786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11758 === (5))){
var inst_11737 = (state_11757[(7)]);
var state_11757__$1 = state_11757;
var statearr_11770_11787 = state_11757__$1;
(statearr_11770_11787[(2)] = inst_11737);

(statearr_11770_11787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11758 === (10))){
var inst_11751 = (state_11757[(2)]);
var state_11757__$1 = state_11757;
var statearr_11771_11788 = state_11757__$1;
(statearr_11771_11788[(2)] = inst_11751);

(statearr_11771_11788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11758 === (8))){
var inst_11744 = (state_11757[(9)]);
var inst_11747 = cljs.core.deref.call(null,inst_11744);
var state_11757__$1 = state_11757;
var statearr_11772_11789 = state_11757__$1;
(statearr_11772_11789[(2)] = inst_11747);

(statearr_11772_11789[(1)] = (10));


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
});})(c__10991__auto__))
;
return ((function (switch__10879__auto__,c__10991__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10880__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10880__auto____0 = (function (){
var statearr_11776 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11776[(0)] = cljs$core$async$reduce_$_state_machine__10880__auto__);

(statearr_11776[(1)] = (1));

return statearr_11776;
});
var cljs$core$async$reduce_$_state_machine__10880__auto____1 = (function (state_11757){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11777){if((e11777 instanceof Object)){
var ex__10883__auto__ = e11777;
var statearr_11778_11790 = state_11757;
(statearr_11778_11790[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11791 = state_11757;
state_11757 = G__11791;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10880__auto__ = function(state_11757){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10880__auto____1.call(this,state_11757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10880__auto____0;
cljs$core$async$reduce_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10880__auto____1;
return cljs$core$async$reduce_$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto__))
})();
var state__10993__auto__ = (function (){var statearr_11779 = f__10992__auto__.call(null);
(statearr_11779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto__);

return statearr_11779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto__))
);

return c__10991__auto__;
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
var args11792 = [];
var len__7322__auto___11844 = arguments.length;
var i__7323__auto___11845 = (0);
while(true){
if((i__7323__auto___11845 < len__7322__auto___11844)){
args11792.push((arguments[i__7323__auto___11845]));

var G__11846 = (i__7323__auto___11845 + (1));
i__7323__auto___11845 = G__11846;
continue;
} else {
}
break;
}

var G__11794 = args11792.length;
switch (G__11794) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11792.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto__){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto__){
return (function (state_11819){
var state_val_11820 = (state_11819[(1)]);
if((state_val_11820 === (7))){
var inst_11801 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11821_11848 = state_11819__$1;
(statearr_11821_11848[(2)] = inst_11801);

(statearr_11821_11848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (1))){
var inst_11795 = cljs.core.seq.call(null,coll);
var inst_11796 = inst_11795;
var state_11819__$1 = (function (){var statearr_11822 = state_11819;
(statearr_11822[(7)] = inst_11796);

return statearr_11822;
})();
var statearr_11823_11849 = state_11819__$1;
(statearr_11823_11849[(2)] = null);

(statearr_11823_11849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (4))){
var inst_11796 = (state_11819[(7)]);
var inst_11799 = cljs.core.first.call(null,inst_11796);
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11819__$1,(7),ch,inst_11799);
} else {
if((state_val_11820 === (13))){
var inst_11813 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11824_11850 = state_11819__$1;
(statearr_11824_11850[(2)] = inst_11813);

(statearr_11824_11850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (6))){
var inst_11804 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
if(cljs.core.truth_(inst_11804)){
var statearr_11825_11851 = state_11819__$1;
(statearr_11825_11851[(1)] = (8));

} else {
var statearr_11826_11852 = state_11819__$1;
(statearr_11826_11852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (3))){
var inst_11817 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11819__$1,inst_11817);
} else {
if((state_val_11820 === (12))){
var state_11819__$1 = state_11819;
var statearr_11827_11853 = state_11819__$1;
(statearr_11827_11853[(2)] = null);

(statearr_11827_11853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (2))){
var inst_11796 = (state_11819[(7)]);
var state_11819__$1 = state_11819;
if(cljs.core.truth_(inst_11796)){
var statearr_11828_11854 = state_11819__$1;
(statearr_11828_11854[(1)] = (4));

} else {
var statearr_11829_11855 = state_11819__$1;
(statearr_11829_11855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (11))){
var inst_11810 = cljs.core.async.close_BANG_.call(null,ch);
var state_11819__$1 = state_11819;
var statearr_11830_11856 = state_11819__$1;
(statearr_11830_11856[(2)] = inst_11810);

(statearr_11830_11856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (9))){
var state_11819__$1 = state_11819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11831_11857 = state_11819__$1;
(statearr_11831_11857[(1)] = (11));

} else {
var statearr_11832_11858 = state_11819__$1;
(statearr_11832_11858[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (5))){
var inst_11796 = (state_11819[(7)]);
var state_11819__$1 = state_11819;
var statearr_11833_11859 = state_11819__$1;
(statearr_11833_11859[(2)] = inst_11796);

(statearr_11833_11859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (10))){
var inst_11815 = (state_11819[(2)]);
var state_11819__$1 = state_11819;
var statearr_11834_11860 = state_11819__$1;
(statearr_11834_11860[(2)] = inst_11815);

(statearr_11834_11860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11820 === (8))){
var inst_11796 = (state_11819[(7)]);
var inst_11806 = cljs.core.next.call(null,inst_11796);
var inst_11796__$1 = inst_11806;
var state_11819__$1 = (function (){var statearr_11835 = state_11819;
(statearr_11835[(7)] = inst_11796__$1);

return statearr_11835;
})();
var statearr_11836_11861 = state_11819__$1;
(statearr_11836_11861[(2)] = null);

(statearr_11836_11861[(1)] = (2));


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
});})(c__10991__auto__))
;
return ((function (switch__10879__auto__,c__10991__auto__){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_11840 = [null,null,null,null,null,null,null,null];
(statearr_11840[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_11840[(1)] = (1));

return statearr_11840;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_11819){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_11819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e11841){if((e11841 instanceof Object)){
var ex__10883__auto__ = e11841;
var statearr_11842_11862 = state_11819;
(statearr_11842_11862[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11863 = state_11819;
state_11819 = G__11863;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_11819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_11819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto__))
})();
var state__10993__auto__ = (function (){var statearr_11843 = f__10992__auto__.call(null);
(statearr_11843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto__);

return statearr_11843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto__))
);

return c__10991__auto__;
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
var x__6910__auto__ = (((_ == null))?null:_);
var m__6911__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,_);
} else {
var m__6911__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,_);
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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6911__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch);
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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m);
} else {
var m__6911__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async12089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12089 = (function (mult,ch,cs,meta12090){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12090 = meta12090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12091,meta12090__$1){
var self__ = this;
var _12091__$1 = this;
return (new cljs.core.async.t_cljs$core$async12089(self__.mult,self__.ch,self__.cs,meta12090__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12091){
var self__ = this;
var _12091__$1 = this;
return self__.meta12090;
});})(cs))
;

cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12089.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12089.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12090","meta12090",-693968982,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12089";

cljs.core.async.t_cljs$core$async12089.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async12089");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12089 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12089(mult__$1,ch__$1,cs__$1,meta12090){
return (new cljs.core.async.t_cljs$core$async12089(mult__$1,ch__$1,cs__$1,meta12090));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12089(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10991__auto___12314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___12314,cs,m,dchan,dctr,done){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___12314,cs,m,dchan,dctr,done){
return (function (state_12226){
var state_val_12227 = (state_12226[(1)]);
if((state_val_12227 === (7))){
var inst_12222 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12228_12315 = state_12226__$1;
(statearr_12228_12315[(2)] = inst_12222);

(statearr_12228_12315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (20))){
var inst_12125 = (state_12226[(7)]);
var inst_12137 = cljs.core.first.call(null,inst_12125);
var inst_12138 = cljs.core.nth.call(null,inst_12137,(0),null);
var inst_12139 = cljs.core.nth.call(null,inst_12137,(1),null);
var state_12226__$1 = (function (){var statearr_12229 = state_12226;
(statearr_12229[(8)] = inst_12138);

return statearr_12229;
})();
if(cljs.core.truth_(inst_12139)){
var statearr_12230_12316 = state_12226__$1;
(statearr_12230_12316[(1)] = (22));

} else {
var statearr_12231_12317 = state_12226__$1;
(statearr_12231_12317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (27))){
var inst_12174 = (state_12226[(9)]);
var inst_12094 = (state_12226[(10)]);
var inst_12167 = (state_12226[(11)]);
var inst_12169 = (state_12226[(12)]);
var inst_12174__$1 = cljs.core._nth.call(null,inst_12167,inst_12169);
var inst_12175 = cljs.core.async.put_BANG_.call(null,inst_12174__$1,inst_12094,done);
var state_12226__$1 = (function (){var statearr_12232 = state_12226;
(statearr_12232[(9)] = inst_12174__$1);

return statearr_12232;
})();
if(cljs.core.truth_(inst_12175)){
var statearr_12233_12318 = state_12226__$1;
(statearr_12233_12318[(1)] = (30));

} else {
var statearr_12234_12319 = state_12226__$1;
(statearr_12234_12319[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (1))){
var state_12226__$1 = state_12226;
var statearr_12235_12320 = state_12226__$1;
(statearr_12235_12320[(2)] = null);

(statearr_12235_12320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (24))){
var inst_12125 = (state_12226[(7)]);
var inst_12144 = (state_12226[(2)]);
var inst_12145 = cljs.core.next.call(null,inst_12125);
var inst_12103 = inst_12145;
var inst_12104 = null;
var inst_12105 = (0);
var inst_12106 = (0);
var state_12226__$1 = (function (){var statearr_12236 = state_12226;
(statearr_12236[(13)] = inst_12106);

(statearr_12236[(14)] = inst_12103);

(statearr_12236[(15)] = inst_12105);

(statearr_12236[(16)] = inst_12104);

(statearr_12236[(17)] = inst_12144);

return statearr_12236;
})();
var statearr_12237_12321 = state_12226__$1;
(statearr_12237_12321[(2)] = null);

(statearr_12237_12321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (39))){
var state_12226__$1 = state_12226;
var statearr_12241_12322 = state_12226__$1;
(statearr_12241_12322[(2)] = null);

(statearr_12241_12322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (4))){
var inst_12094 = (state_12226[(10)]);
var inst_12094__$1 = (state_12226[(2)]);
var inst_12095 = (inst_12094__$1 == null);
var state_12226__$1 = (function (){var statearr_12242 = state_12226;
(statearr_12242[(10)] = inst_12094__$1);

return statearr_12242;
})();
if(cljs.core.truth_(inst_12095)){
var statearr_12243_12323 = state_12226__$1;
(statearr_12243_12323[(1)] = (5));

} else {
var statearr_12244_12324 = state_12226__$1;
(statearr_12244_12324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (15))){
var inst_12106 = (state_12226[(13)]);
var inst_12103 = (state_12226[(14)]);
var inst_12105 = (state_12226[(15)]);
var inst_12104 = (state_12226[(16)]);
var inst_12121 = (state_12226[(2)]);
var inst_12122 = (inst_12106 + (1));
var tmp12238 = inst_12103;
var tmp12239 = inst_12105;
var tmp12240 = inst_12104;
var inst_12103__$1 = tmp12238;
var inst_12104__$1 = tmp12240;
var inst_12105__$1 = tmp12239;
var inst_12106__$1 = inst_12122;
var state_12226__$1 = (function (){var statearr_12245 = state_12226;
(statearr_12245[(13)] = inst_12106__$1);

(statearr_12245[(14)] = inst_12103__$1);

(statearr_12245[(18)] = inst_12121);

(statearr_12245[(15)] = inst_12105__$1);

(statearr_12245[(16)] = inst_12104__$1);

return statearr_12245;
})();
var statearr_12246_12325 = state_12226__$1;
(statearr_12246_12325[(2)] = null);

(statearr_12246_12325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (21))){
var inst_12148 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12250_12326 = state_12226__$1;
(statearr_12250_12326[(2)] = inst_12148);

(statearr_12250_12326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (31))){
var inst_12174 = (state_12226[(9)]);
var inst_12178 = done.call(null,null);
var inst_12179 = cljs.core.async.untap_STAR_.call(null,m,inst_12174);
var state_12226__$1 = (function (){var statearr_12251 = state_12226;
(statearr_12251[(19)] = inst_12178);

return statearr_12251;
})();
var statearr_12252_12327 = state_12226__$1;
(statearr_12252_12327[(2)] = inst_12179);

(statearr_12252_12327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (32))){
var inst_12168 = (state_12226[(20)]);
var inst_12167 = (state_12226[(11)]);
var inst_12166 = (state_12226[(21)]);
var inst_12169 = (state_12226[(12)]);
var inst_12181 = (state_12226[(2)]);
var inst_12182 = (inst_12169 + (1));
var tmp12247 = inst_12168;
var tmp12248 = inst_12167;
var tmp12249 = inst_12166;
var inst_12166__$1 = tmp12249;
var inst_12167__$1 = tmp12248;
var inst_12168__$1 = tmp12247;
var inst_12169__$1 = inst_12182;
var state_12226__$1 = (function (){var statearr_12253 = state_12226;
(statearr_12253[(22)] = inst_12181);

(statearr_12253[(20)] = inst_12168__$1);

(statearr_12253[(11)] = inst_12167__$1);

(statearr_12253[(21)] = inst_12166__$1);

(statearr_12253[(12)] = inst_12169__$1);

return statearr_12253;
})();
var statearr_12254_12328 = state_12226__$1;
(statearr_12254_12328[(2)] = null);

(statearr_12254_12328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (40))){
var inst_12194 = (state_12226[(23)]);
var inst_12198 = done.call(null,null);
var inst_12199 = cljs.core.async.untap_STAR_.call(null,m,inst_12194);
var state_12226__$1 = (function (){var statearr_12255 = state_12226;
(statearr_12255[(24)] = inst_12198);

return statearr_12255;
})();
var statearr_12256_12329 = state_12226__$1;
(statearr_12256_12329[(2)] = inst_12199);

(statearr_12256_12329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (33))){
var inst_12185 = (state_12226[(25)]);
var inst_12187 = cljs.core.chunked_seq_QMARK_.call(null,inst_12185);
var state_12226__$1 = state_12226;
if(inst_12187){
var statearr_12257_12330 = state_12226__$1;
(statearr_12257_12330[(1)] = (36));

} else {
var statearr_12258_12331 = state_12226__$1;
(statearr_12258_12331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (13))){
var inst_12115 = (state_12226[(26)]);
var inst_12118 = cljs.core.async.close_BANG_.call(null,inst_12115);
var state_12226__$1 = state_12226;
var statearr_12259_12332 = state_12226__$1;
(statearr_12259_12332[(2)] = inst_12118);

(statearr_12259_12332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (22))){
var inst_12138 = (state_12226[(8)]);
var inst_12141 = cljs.core.async.close_BANG_.call(null,inst_12138);
var state_12226__$1 = state_12226;
var statearr_12260_12333 = state_12226__$1;
(statearr_12260_12333[(2)] = inst_12141);

(statearr_12260_12333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (36))){
var inst_12185 = (state_12226[(25)]);
var inst_12189 = cljs.core.chunk_first.call(null,inst_12185);
var inst_12190 = cljs.core.chunk_rest.call(null,inst_12185);
var inst_12191 = cljs.core.count.call(null,inst_12189);
var inst_12166 = inst_12190;
var inst_12167 = inst_12189;
var inst_12168 = inst_12191;
var inst_12169 = (0);
var state_12226__$1 = (function (){var statearr_12261 = state_12226;
(statearr_12261[(20)] = inst_12168);

(statearr_12261[(11)] = inst_12167);

(statearr_12261[(21)] = inst_12166);

(statearr_12261[(12)] = inst_12169);

return statearr_12261;
})();
var statearr_12262_12334 = state_12226__$1;
(statearr_12262_12334[(2)] = null);

(statearr_12262_12334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (41))){
var inst_12185 = (state_12226[(25)]);
var inst_12201 = (state_12226[(2)]);
var inst_12202 = cljs.core.next.call(null,inst_12185);
var inst_12166 = inst_12202;
var inst_12167 = null;
var inst_12168 = (0);
var inst_12169 = (0);
var state_12226__$1 = (function (){var statearr_12263 = state_12226;
(statearr_12263[(27)] = inst_12201);

(statearr_12263[(20)] = inst_12168);

(statearr_12263[(11)] = inst_12167);

(statearr_12263[(21)] = inst_12166);

(statearr_12263[(12)] = inst_12169);

return statearr_12263;
})();
var statearr_12264_12335 = state_12226__$1;
(statearr_12264_12335[(2)] = null);

(statearr_12264_12335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (43))){
var state_12226__$1 = state_12226;
var statearr_12265_12336 = state_12226__$1;
(statearr_12265_12336[(2)] = null);

(statearr_12265_12336[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (29))){
var inst_12210 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12266_12337 = state_12226__$1;
(statearr_12266_12337[(2)] = inst_12210);

(statearr_12266_12337[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (44))){
var inst_12219 = (state_12226[(2)]);
var state_12226__$1 = (function (){var statearr_12267 = state_12226;
(statearr_12267[(28)] = inst_12219);

return statearr_12267;
})();
var statearr_12268_12338 = state_12226__$1;
(statearr_12268_12338[(2)] = null);

(statearr_12268_12338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (6))){
var inst_12158 = (state_12226[(29)]);
var inst_12157 = cljs.core.deref.call(null,cs);
var inst_12158__$1 = cljs.core.keys.call(null,inst_12157);
var inst_12159 = cljs.core.count.call(null,inst_12158__$1);
var inst_12160 = cljs.core.reset_BANG_.call(null,dctr,inst_12159);
var inst_12165 = cljs.core.seq.call(null,inst_12158__$1);
var inst_12166 = inst_12165;
var inst_12167 = null;
var inst_12168 = (0);
var inst_12169 = (0);
var state_12226__$1 = (function (){var statearr_12269 = state_12226;
(statearr_12269[(30)] = inst_12160);

(statearr_12269[(20)] = inst_12168);

(statearr_12269[(11)] = inst_12167);

(statearr_12269[(21)] = inst_12166);

(statearr_12269[(29)] = inst_12158__$1);

(statearr_12269[(12)] = inst_12169);

return statearr_12269;
})();
var statearr_12270_12339 = state_12226__$1;
(statearr_12270_12339[(2)] = null);

(statearr_12270_12339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (28))){
var inst_12185 = (state_12226[(25)]);
var inst_12166 = (state_12226[(21)]);
var inst_12185__$1 = cljs.core.seq.call(null,inst_12166);
var state_12226__$1 = (function (){var statearr_12271 = state_12226;
(statearr_12271[(25)] = inst_12185__$1);

return statearr_12271;
})();
if(inst_12185__$1){
var statearr_12272_12340 = state_12226__$1;
(statearr_12272_12340[(1)] = (33));

} else {
var statearr_12273_12341 = state_12226__$1;
(statearr_12273_12341[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (25))){
var inst_12168 = (state_12226[(20)]);
var inst_12169 = (state_12226[(12)]);
var inst_12171 = (inst_12169 < inst_12168);
var inst_12172 = inst_12171;
var state_12226__$1 = state_12226;
if(cljs.core.truth_(inst_12172)){
var statearr_12274_12342 = state_12226__$1;
(statearr_12274_12342[(1)] = (27));

} else {
var statearr_12275_12343 = state_12226__$1;
(statearr_12275_12343[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (34))){
var state_12226__$1 = state_12226;
var statearr_12276_12344 = state_12226__$1;
(statearr_12276_12344[(2)] = null);

(statearr_12276_12344[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (17))){
var state_12226__$1 = state_12226;
var statearr_12277_12345 = state_12226__$1;
(statearr_12277_12345[(2)] = null);

(statearr_12277_12345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (3))){
var inst_12224 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12226__$1,inst_12224);
} else {
if((state_val_12227 === (12))){
var inst_12153 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12278_12346 = state_12226__$1;
(statearr_12278_12346[(2)] = inst_12153);

(statearr_12278_12346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (2))){
var state_12226__$1 = state_12226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12226__$1,(4),ch);
} else {
if((state_val_12227 === (23))){
var state_12226__$1 = state_12226;
var statearr_12279_12347 = state_12226__$1;
(statearr_12279_12347[(2)] = null);

(statearr_12279_12347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (35))){
var inst_12208 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12280_12348 = state_12226__$1;
(statearr_12280_12348[(2)] = inst_12208);

(statearr_12280_12348[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (19))){
var inst_12125 = (state_12226[(7)]);
var inst_12129 = cljs.core.chunk_first.call(null,inst_12125);
var inst_12130 = cljs.core.chunk_rest.call(null,inst_12125);
var inst_12131 = cljs.core.count.call(null,inst_12129);
var inst_12103 = inst_12130;
var inst_12104 = inst_12129;
var inst_12105 = inst_12131;
var inst_12106 = (0);
var state_12226__$1 = (function (){var statearr_12281 = state_12226;
(statearr_12281[(13)] = inst_12106);

(statearr_12281[(14)] = inst_12103);

(statearr_12281[(15)] = inst_12105);

(statearr_12281[(16)] = inst_12104);

return statearr_12281;
})();
var statearr_12282_12349 = state_12226__$1;
(statearr_12282_12349[(2)] = null);

(statearr_12282_12349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (11))){
var inst_12103 = (state_12226[(14)]);
var inst_12125 = (state_12226[(7)]);
var inst_12125__$1 = cljs.core.seq.call(null,inst_12103);
var state_12226__$1 = (function (){var statearr_12283 = state_12226;
(statearr_12283[(7)] = inst_12125__$1);

return statearr_12283;
})();
if(inst_12125__$1){
var statearr_12284_12350 = state_12226__$1;
(statearr_12284_12350[(1)] = (16));

} else {
var statearr_12285_12351 = state_12226__$1;
(statearr_12285_12351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (9))){
var inst_12155 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12286_12352 = state_12226__$1;
(statearr_12286_12352[(2)] = inst_12155);

(statearr_12286_12352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (5))){
var inst_12101 = cljs.core.deref.call(null,cs);
var inst_12102 = cljs.core.seq.call(null,inst_12101);
var inst_12103 = inst_12102;
var inst_12104 = null;
var inst_12105 = (0);
var inst_12106 = (0);
var state_12226__$1 = (function (){var statearr_12287 = state_12226;
(statearr_12287[(13)] = inst_12106);

(statearr_12287[(14)] = inst_12103);

(statearr_12287[(15)] = inst_12105);

(statearr_12287[(16)] = inst_12104);

return statearr_12287;
})();
var statearr_12288_12353 = state_12226__$1;
(statearr_12288_12353[(2)] = null);

(statearr_12288_12353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (14))){
var state_12226__$1 = state_12226;
var statearr_12289_12354 = state_12226__$1;
(statearr_12289_12354[(2)] = null);

(statearr_12289_12354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (45))){
var inst_12216 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12290_12355 = state_12226__$1;
(statearr_12290_12355[(2)] = inst_12216);

(statearr_12290_12355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (26))){
var inst_12158 = (state_12226[(29)]);
var inst_12212 = (state_12226[(2)]);
var inst_12213 = cljs.core.seq.call(null,inst_12158);
var state_12226__$1 = (function (){var statearr_12291 = state_12226;
(statearr_12291[(31)] = inst_12212);

return statearr_12291;
})();
if(inst_12213){
var statearr_12292_12356 = state_12226__$1;
(statearr_12292_12356[(1)] = (42));

} else {
var statearr_12293_12357 = state_12226__$1;
(statearr_12293_12357[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (16))){
var inst_12125 = (state_12226[(7)]);
var inst_12127 = cljs.core.chunked_seq_QMARK_.call(null,inst_12125);
var state_12226__$1 = state_12226;
if(inst_12127){
var statearr_12294_12358 = state_12226__$1;
(statearr_12294_12358[(1)] = (19));

} else {
var statearr_12295_12359 = state_12226__$1;
(statearr_12295_12359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (38))){
var inst_12205 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12296_12360 = state_12226__$1;
(statearr_12296_12360[(2)] = inst_12205);

(statearr_12296_12360[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (30))){
var state_12226__$1 = state_12226;
var statearr_12297_12361 = state_12226__$1;
(statearr_12297_12361[(2)] = null);

(statearr_12297_12361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (10))){
var inst_12106 = (state_12226[(13)]);
var inst_12104 = (state_12226[(16)]);
var inst_12114 = cljs.core._nth.call(null,inst_12104,inst_12106);
var inst_12115 = cljs.core.nth.call(null,inst_12114,(0),null);
var inst_12116 = cljs.core.nth.call(null,inst_12114,(1),null);
var state_12226__$1 = (function (){var statearr_12298 = state_12226;
(statearr_12298[(26)] = inst_12115);

return statearr_12298;
})();
if(cljs.core.truth_(inst_12116)){
var statearr_12299_12362 = state_12226__$1;
(statearr_12299_12362[(1)] = (13));

} else {
var statearr_12300_12363 = state_12226__$1;
(statearr_12300_12363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (18))){
var inst_12151 = (state_12226[(2)]);
var state_12226__$1 = state_12226;
var statearr_12301_12364 = state_12226__$1;
(statearr_12301_12364[(2)] = inst_12151);

(statearr_12301_12364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (42))){
var state_12226__$1 = state_12226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12226__$1,(45),dchan);
} else {
if((state_val_12227 === (37))){
var inst_12185 = (state_12226[(25)]);
var inst_12094 = (state_12226[(10)]);
var inst_12194 = (state_12226[(23)]);
var inst_12194__$1 = cljs.core.first.call(null,inst_12185);
var inst_12195 = cljs.core.async.put_BANG_.call(null,inst_12194__$1,inst_12094,done);
var state_12226__$1 = (function (){var statearr_12302 = state_12226;
(statearr_12302[(23)] = inst_12194__$1);

return statearr_12302;
})();
if(cljs.core.truth_(inst_12195)){
var statearr_12303_12365 = state_12226__$1;
(statearr_12303_12365[(1)] = (39));

} else {
var statearr_12304_12366 = state_12226__$1;
(statearr_12304_12366[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12227 === (8))){
var inst_12106 = (state_12226[(13)]);
var inst_12105 = (state_12226[(15)]);
var inst_12108 = (inst_12106 < inst_12105);
var inst_12109 = inst_12108;
var state_12226__$1 = state_12226;
if(cljs.core.truth_(inst_12109)){
var statearr_12305_12367 = state_12226__$1;
(statearr_12305_12367[(1)] = (10));

} else {
var statearr_12306_12368 = state_12226__$1;
(statearr_12306_12368[(1)] = (11));

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
});})(c__10991__auto___12314,cs,m,dchan,dctr,done))
;
return ((function (switch__10879__auto__,c__10991__auto___12314,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10880__auto__ = null;
var cljs$core$async$mult_$_state_machine__10880__auto____0 = (function (){
var statearr_12310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12310[(0)] = cljs$core$async$mult_$_state_machine__10880__auto__);

(statearr_12310[(1)] = (1));

return statearr_12310;
});
var cljs$core$async$mult_$_state_machine__10880__auto____1 = (function (state_12226){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_12226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12311){if((e12311 instanceof Object)){
var ex__10883__auto__ = e12311;
var statearr_12312_12369 = state_12226;
(statearr_12312_12369[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12370 = state_12226;
state_12226 = G__12370;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10880__auto__ = function(state_12226){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10880__auto____1.call(this,state_12226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10880__auto____0;
cljs$core$async$mult_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10880__auto____1;
return cljs$core$async$mult_$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___12314,cs,m,dchan,dctr,done))
})();
var state__10993__auto__ = (function (){var statearr_12313 = f__10992__auto__.call(null);
(statearr_12313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___12314);

return statearr_12313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___12314,cs,m,dchan,dctr,done))
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
var args12371 = [];
var len__7322__auto___12374 = arguments.length;
var i__7323__auto___12375 = (0);
while(true){
if((i__7323__auto___12375 < len__7322__auto___12374)){
args12371.push((arguments[i__7323__auto___12375]));

var G__12376 = (i__7323__auto___12375 + (1));
i__7323__auto___12375 = G__12376;
continue;
} else {
}
break;
}

var G__12373 = args12371.length;
switch (G__12373) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12371.length)].join('')));

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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch);
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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch);
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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m);
} else {
var m__6911__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m);
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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,state_map);
} else {
var m__6911__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,state_map);
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
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,mode);
} else {
var m__6911__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___12388 = arguments.length;
var i__7323__auto___12389 = (0);
while(true){
if((i__7323__auto___12389 < len__7322__auto___12388)){
args__7329__auto__.push((arguments[i__7323__auto___12389]));

var G__12390 = (i__7323__auto___12389 + (1));
i__7323__auto___12389 = G__12390;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((3) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7330__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12382){
var map__12383 = p__12382;
var map__12383__$1 = ((((!((map__12383 == null)))?((((map__12383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12383):map__12383);
var opts = map__12383__$1;
var statearr_12385_12391 = state;
(statearr_12385_12391[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__12383,map__12383__$1,opts){
return (function (val){
var statearr_12386_12392 = state;
(statearr_12386_12392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12383,map__12383__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_12387_12393 = state;
(statearr_12387_12393[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12378){
var G__12379 = cljs.core.first.call(null,seq12378);
var seq12378__$1 = cljs.core.next.call(null,seq12378);
var G__12380 = cljs.core.first.call(null,seq12378__$1);
var seq12378__$2 = cljs.core.next.call(null,seq12378__$1);
var G__12381 = cljs.core.first.call(null,seq12378__$2);
var seq12378__$3 = cljs.core.next.call(null,seq12378__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12379,G__12380,G__12381,seq12378__$3);
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
if(typeof cljs.core.async.t_cljs$core$async12559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12559 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12560){
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
this.meta12560 = meta12560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12561,meta12560__$1){
var self__ = this;
var _12561__$1 = this;
return (new cljs.core.async.t_cljs$core$async12559(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12560__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12561){
var self__ = this;
var _12561__$1 = this;
return self__.meta12560;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12560","meta12560",-1795378817,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12559";

cljs.core.async.t_cljs$core$async12559.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async12559");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12559 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12559(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12560){
return (new cljs.core.async.t_cljs$core$async12559(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12560));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12559(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10991__auto___12724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___12724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___12724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12661){
var state_val_12662 = (state_12661[(1)]);
if((state_val_12662 === (7))){
var inst_12577 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
var statearr_12663_12725 = state_12661__$1;
(statearr_12663_12725[(2)] = inst_12577);

(statearr_12663_12725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (20))){
var inst_12589 = (state_12661[(7)]);
var state_12661__$1 = state_12661;
var statearr_12664_12726 = state_12661__$1;
(statearr_12664_12726[(2)] = inst_12589);

(statearr_12664_12726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (27))){
var state_12661__$1 = state_12661;
var statearr_12665_12727 = state_12661__$1;
(statearr_12665_12727[(2)] = null);

(statearr_12665_12727[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (1))){
var inst_12565 = (state_12661[(8)]);
var inst_12565__$1 = calc_state.call(null);
var inst_12567 = (inst_12565__$1 == null);
var inst_12568 = cljs.core.not.call(null,inst_12567);
var state_12661__$1 = (function (){var statearr_12666 = state_12661;
(statearr_12666[(8)] = inst_12565__$1);

return statearr_12666;
})();
if(inst_12568){
var statearr_12667_12728 = state_12661__$1;
(statearr_12667_12728[(1)] = (2));

} else {
var statearr_12668_12729 = state_12661__$1;
(statearr_12668_12729[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (24))){
var inst_12621 = (state_12661[(9)]);
var inst_12635 = (state_12661[(10)]);
var inst_12612 = (state_12661[(11)]);
var inst_12635__$1 = inst_12612.call(null,inst_12621);
var state_12661__$1 = (function (){var statearr_12669 = state_12661;
(statearr_12669[(10)] = inst_12635__$1);

return statearr_12669;
})();
if(cljs.core.truth_(inst_12635__$1)){
var statearr_12670_12730 = state_12661__$1;
(statearr_12670_12730[(1)] = (29));

} else {
var statearr_12671_12731 = state_12661__$1;
(statearr_12671_12731[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (4))){
var inst_12580 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
if(cljs.core.truth_(inst_12580)){
var statearr_12672_12732 = state_12661__$1;
(statearr_12672_12732[(1)] = (8));

} else {
var statearr_12673_12733 = state_12661__$1;
(statearr_12673_12733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (15))){
var inst_12606 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
if(cljs.core.truth_(inst_12606)){
var statearr_12674_12734 = state_12661__$1;
(statearr_12674_12734[(1)] = (19));

} else {
var statearr_12675_12735 = state_12661__$1;
(statearr_12675_12735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (21))){
var inst_12611 = (state_12661[(12)]);
var inst_12611__$1 = (state_12661[(2)]);
var inst_12612 = cljs.core.get.call(null,inst_12611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12613 = cljs.core.get.call(null,inst_12611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12614 = cljs.core.get.call(null,inst_12611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12661__$1 = (function (){var statearr_12676 = state_12661;
(statearr_12676[(13)] = inst_12613);

(statearr_12676[(12)] = inst_12611__$1);

(statearr_12676[(11)] = inst_12612);

return statearr_12676;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12661__$1,(22),inst_12614);
} else {
if((state_val_12662 === (31))){
var inst_12643 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
if(cljs.core.truth_(inst_12643)){
var statearr_12677_12736 = state_12661__$1;
(statearr_12677_12736[(1)] = (32));

} else {
var statearr_12678_12737 = state_12661__$1;
(statearr_12678_12737[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (32))){
var inst_12620 = (state_12661[(14)]);
var state_12661__$1 = state_12661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12661__$1,(35),out,inst_12620);
} else {
if((state_val_12662 === (33))){
var inst_12611 = (state_12661[(12)]);
var inst_12589 = inst_12611;
var state_12661__$1 = (function (){var statearr_12679 = state_12661;
(statearr_12679[(7)] = inst_12589);

return statearr_12679;
})();
var statearr_12680_12738 = state_12661__$1;
(statearr_12680_12738[(2)] = null);

(statearr_12680_12738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (13))){
var inst_12589 = (state_12661[(7)]);
var inst_12596 = inst_12589.cljs$lang$protocol_mask$partition0$;
var inst_12597 = (inst_12596 & (64));
var inst_12598 = inst_12589.cljs$core$ISeq$;
var inst_12599 = (inst_12597) || (inst_12598);
var state_12661__$1 = state_12661;
if(cljs.core.truth_(inst_12599)){
var statearr_12681_12739 = state_12661__$1;
(statearr_12681_12739[(1)] = (16));

} else {
var statearr_12682_12740 = state_12661__$1;
(statearr_12682_12740[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (22))){
var inst_12621 = (state_12661[(9)]);
var inst_12620 = (state_12661[(14)]);
var inst_12619 = (state_12661[(2)]);
var inst_12620__$1 = cljs.core.nth.call(null,inst_12619,(0),null);
var inst_12621__$1 = cljs.core.nth.call(null,inst_12619,(1),null);
var inst_12622 = (inst_12620__$1 == null);
var inst_12623 = cljs.core._EQ_.call(null,inst_12621__$1,change);
var inst_12624 = (inst_12622) || (inst_12623);
var state_12661__$1 = (function (){var statearr_12683 = state_12661;
(statearr_12683[(9)] = inst_12621__$1);

(statearr_12683[(14)] = inst_12620__$1);

return statearr_12683;
})();
if(cljs.core.truth_(inst_12624)){
var statearr_12684_12741 = state_12661__$1;
(statearr_12684_12741[(1)] = (23));

} else {
var statearr_12685_12742 = state_12661__$1;
(statearr_12685_12742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (36))){
var inst_12611 = (state_12661[(12)]);
var inst_12589 = inst_12611;
var state_12661__$1 = (function (){var statearr_12686 = state_12661;
(statearr_12686[(7)] = inst_12589);

return statearr_12686;
})();
var statearr_12687_12743 = state_12661__$1;
(statearr_12687_12743[(2)] = null);

(statearr_12687_12743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (29))){
var inst_12635 = (state_12661[(10)]);
var state_12661__$1 = state_12661;
var statearr_12688_12744 = state_12661__$1;
(statearr_12688_12744[(2)] = inst_12635);

(statearr_12688_12744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (6))){
var state_12661__$1 = state_12661;
var statearr_12689_12745 = state_12661__$1;
(statearr_12689_12745[(2)] = false);

(statearr_12689_12745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (28))){
var inst_12631 = (state_12661[(2)]);
var inst_12632 = calc_state.call(null);
var inst_12589 = inst_12632;
var state_12661__$1 = (function (){var statearr_12690 = state_12661;
(statearr_12690[(7)] = inst_12589);

(statearr_12690[(15)] = inst_12631);

return statearr_12690;
})();
var statearr_12691_12746 = state_12661__$1;
(statearr_12691_12746[(2)] = null);

(statearr_12691_12746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (25))){
var inst_12657 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
var statearr_12692_12747 = state_12661__$1;
(statearr_12692_12747[(2)] = inst_12657);

(statearr_12692_12747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (34))){
var inst_12655 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
var statearr_12693_12748 = state_12661__$1;
(statearr_12693_12748[(2)] = inst_12655);

(statearr_12693_12748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (17))){
var state_12661__$1 = state_12661;
var statearr_12694_12749 = state_12661__$1;
(statearr_12694_12749[(2)] = false);

(statearr_12694_12749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (3))){
var state_12661__$1 = state_12661;
var statearr_12695_12750 = state_12661__$1;
(statearr_12695_12750[(2)] = false);

(statearr_12695_12750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (12))){
var inst_12659 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12661__$1,inst_12659);
} else {
if((state_val_12662 === (2))){
var inst_12565 = (state_12661[(8)]);
var inst_12570 = inst_12565.cljs$lang$protocol_mask$partition0$;
var inst_12571 = (inst_12570 & (64));
var inst_12572 = inst_12565.cljs$core$ISeq$;
var inst_12573 = (inst_12571) || (inst_12572);
var state_12661__$1 = state_12661;
if(cljs.core.truth_(inst_12573)){
var statearr_12696_12751 = state_12661__$1;
(statearr_12696_12751[(1)] = (5));

} else {
var statearr_12697_12752 = state_12661__$1;
(statearr_12697_12752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (23))){
var inst_12620 = (state_12661[(14)]);
var inst_12626 = (inst_12620 == null);
var state_12661__$1 = state_12661;
if(cljs.core.truth_(inst_12626)){
var statearr_12698_12753 = state_12661__$1;
(statearr_12698_12753[(1)] = (26));

} else {
var statearr_12699_12754 = state_12661__$1;
(statearr_12699_12754[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (35))){
var inst_12646 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
if(cljs.core.truth_(inst_12646)){
var statearr_12700_12755 = state_12661__$1;
(statearr_12700_12755[(1)] = (36));

} else {
var statearr_12701_12756 = state_12661__$1;
(statearr_12701_12756[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (19))){
var inst_12589 = (state_12661[(7)]);
var inst_12608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12589);
var state_12661__$1 = state_12661;
var statearr_12702_12757 = state_12661__$1;
(statearr_12702_12757[(2)] = inst_12608);

(statearr_12702_12757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (11))){
var inst_12589 = (state_12661[(7)]);
var inst_12593 = (inst_12589 == null);
var inst_12594 = cljs.core.not.call(null,inst_12593);
var state_12661__$1 = state_12661;
if(inst_12594){
var statearr_12703_12758 = state_12661__$1;
(statearr_12703_12758[(1)] = (13));

} else {
var statearr_12704_12759 = state_12661__$1;
(statearr_12704_12759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (9))){
var inst_12565 = (state_12661[(8)]);
var state_12661__$1 = state_12661;
var statearr_12705_12760 = state_12661__$1;
(statearr_12705_12760[(2)] = inst_12565);

(statearr_12705_12760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (5))){
var state_12661__$1 = state_12661;
var statearr_12706_12761 = state_12661__$1;
(statearr_12706_12761[(2)] = true);

(statearr_12706_12761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (14))){
var state_12661__$1 = state_12661;
var statearr_12707_12762 = state_12661__$1;
(statearr_12707_12762[(2)] = false);

(statearr_12707_12762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (26))){
var inst_12621 = (state_12661[(9)]);
var inst_12628 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12621);
var state_12661__$1 = state_12661;
var statearr_12708_12763 = state_12661__$1;
(statearr_12708_12763[(2)] = inst_12628);

(statearr_12708_12763[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (16))){
var state_12661__$1 = state_12661;
var statearr_12709_12764 = state_12661__$1;
(statearr_12709_12764[(2)] = true);

(statearr_12709_12764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (38))){
var inst_12651 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
var statearr_12710_12765 = state_12661__$1;
(statearr_12710_12765[(2)] = inst_12651);

(statearr_12710_12765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (30))){
var inst_12613 = (state_12661[(13)]);
var inst_12621 = (state_12661[(9)]);
var inst_12612 = (state_12661[(11)]);
var inst_12638 = cljs.core.empty_QMARK_.call(null,inst_12612);
var inst_12639 = inst_12613.call(null,inst_12621);
var inst_12640 = cljs.core.not.call(null,inst_12639);
var inst_12641 = (inst_12638) && (inst_12640);
var state_12661__$1 = state_12661;
var statearr_12711_12766 = state_12661__$1;
(statearr_12711_12766[(2)] = inst_12641);

(statearr_12711_12766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (10))){
var inst_12565 = (state_12661[(8)]);
var inst_12585 = (state_12661[(2)]);
var inst_12586 = cljs.core.get.call(null,inst_12585,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12587 = cljs.core.get.call(null,inst_12585,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12588 = cljs.core.get.call(null,inst_12585,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12589 = inst_12565;
var state_12661__$1 = (function (){var statearr_12712 = state_12661;
(statearr_12712[(16)] = inst_12587);

(statearr_12712[(17)] = inst_12588);

(statearr_12712[(7)] = inst_12589);

(statearr_12712[(18)] = inst_12586);

return statearr_12712;
})();
var statearr_12713_12767 = state_12661__$1;
(statearr_12713_12767[(2)] = null);

(statearr_12713_12767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (18))){
var inst_12603 = (state_12661[(2)]);
var state_12661__$1 = state_12661;
var statearr_12714_12768 = state_12661__$1;
(statearr_12714_12768[(2)] = inst_12603);

(statearr_12714_12768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (37))){
var state_12661__$1 = state_12661;
var statearr_12715_12769 = state_12661__$1;
(statearr_12715_12769[(2)] = null);

(statearr_12715_12769[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12662 === (8))){
var inst_12565 = (state_12661[(8)]);
var inst_12582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12565);
var state_12661__$1 = state_12661;
var statearr_12716_12770 = state_12661__$1;
(statearr_12716_12770[(2)] = inst_12582);

(statearr_12716_12770[(1)] = (10));


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
});})(c__10991__auto___12724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10879__auto__,c__10991__auto___12724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10880__auto__ = null;
var cljs$core$async$mix_$_state_machine__10880__auto____0 = (function (){
var statearr_12720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12720[(0)] = cljs$core$async$mix_$_state_machine__10880__auto__);

(statearr_12720[(1)] = (1));

return statearr_12720;
});
var cljs$core$async$mix_$_state_machine__10880__auto____1 = (function (state_12661){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_12661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12721){if((e12721 instanceof Object)){
var ex__10883__auto__ = e12721;
var statearr_12722_12771 = state_12661;
(statearr_12722_12771[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12772 = state_12661;
state_12661 = G__12772;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10880__auto__ = function(state_12661){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10880__auto____1.call(this,state_12661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10880__auto____0;
cljs$core$async$mix_$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10880__auto____1;
return cljs$core$async$mix_$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___12724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10993__auto__ = (function (){var statearr_12723 = f__10992__auto__.call(null);
(statearr_12723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___12724);

return statearr_12723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___12724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6911__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p,v,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12773 = [];
var len__7322__auto___12776 = arguments.length;
var i__7323__auto___12777 = (0);
while(true){
if((i__7323__auto___12777 < len__7322__auto___12776)){
args12773.push((arguments[i__7323__auto___12777]));

var G__12778 = (i__7323__auto___12777 + (1));
i__7323__auto___12777 = G__12778;
continue;
} else {
}
break;
}

var G__12775 = args12773.length;
switch (G__12775) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12773.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p);
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p);
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
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p,v);
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p,v);
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
var args12781 = [];
var len__7322__auto___12906 = arguments.length;
var i__7323__auto___12907 = (0);
while(true){
if((i__7323__auto___12907 < len__7322__auto___12906)){
args12781.push((arguments[i__7323__auto___12907]));

var G__12908 = (i__7323__auto___12907 + (1));
i__7323__auto___12907 = G__12908;
continue;
} else {
}
break;
}

var G__12783 = args12781.length;
switch (G__12783) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12781.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6247__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6247__auto__,mults){
return (function (p1__12780_SHARP_){
if(cljs.core.truth_(p1__12780_SHARP_.call(null,topic))){
return p1__12780_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12780_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6247__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12784 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12785){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12785 = meta12785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12786,meta12785__$1){
var self__ = this;
var _12786__$1 = this;
return (new cljs.core.async.t_cljs$core$async12784(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12785__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12786){
var self__ = this;
var _12786__$1 = this;
return self__.meta12785;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12785","meta12785",1496618455,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12784";

cljs.core.async.t_cljs$core$async12784.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async12784");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12784 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12785){
return (new cljs.core.async.t_cljs$core$async12784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12785));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12784(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10991__auto___12910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___12910,mults,ensure_mult,p){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___12910,mults,ensure_mult,p){
return (function (state_12858){
var state_val_12859 = (state_12858[(1)]);
if((state_val_12859 === (7))){
var inst_12854 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12860_12911 = state_12858__$1;
(statearr_12860_12911[(2)] = inst_12854);

(statearr_12860_12911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (20))){
var state_12858__$1 = state_12858;
var statearr_12861_12912 = state_12858__$1;
(statearr_12861_12912[(2)] = null);

(statearr_12861_12912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (1))){
var state_12858__$1 = state_12858;
var statearr_12862_12913 = state_12858__$1;
(statearr_12862_12913[(2)] = null);

(statearr_12862_12913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (24))){
var inst_12837 = (state_12858[(7)]);
var inst_12846 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12837);
var state_12858__$1 = state_12858;
var statearr_12863_12914 = state_12858__$1;
(statearr_12863_12914[(2)] = inst_12846);

(statearr_12863_12914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (4))){
var inst_12789 = (state_12858[(8)]);
var inst_12789__$1 = (state_12858[(2)]);
var inst_12790 = (inst_12789__$1 == null);
var state_12858__$1 = (function (){var statearr_12864 = state_12858;
(statearr_12864[(8)] = inst_12789__$1);

return statearr_12864;
})();
if(cljs.core.truth_(inst_12790)){
var statearr_12865_12915 = state_12858__$1;
(statearr_12865_12915[(1)] = (5));

} else {
var statearr_12866_12916 = state_12858__$1;
(statearr_12866_12916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (15))){
var inst_12831 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12867_12917 = state_12858__$1;
(statearr_12867_12917[(2)] = inst_12831);

(statearr_12867_12917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (21))){
var inst_12851 = (state_12858[(2)]);
var state_12858__$1 = (function (){var statearr_12868 = state_12858;
(statearr_12868[(9)] = inst_12851);

return statearr_12868;
})();
var statearr_12869_12918 = state_12858__$1;
(statearr_12869_12918[(2)] = null);

(statearr_12869_12918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (13))){
var inst_12813 = (state_12858[(10)]);
var inst_12815 = cljs.core.chunked_seq_QMARK_.call(null,inst_12813);
var state_12858__$1 = state_12858;
if(inst_12815){
var statearr_12870_12919 = state_12858__$1;
(statearr_12870_12919[(1)] = (16));

} else {
var statearr_12871_12920 = state_12858__$1;
(statearr_12871_12920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (22))){
var inst_12843 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
if(cljs.core.truth_(inst_12843)){
var statearr_12872_12921 = state_12858__$1;
(statearr_12872_12921[(1)] = (23));

} else {
var statearr_12873_12922 = state_12858__$1;
(statearr_12873_12922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (6))){
var inst_12839 = (state_12858[(11)]);
var inst_12789 = (state_12858[(8)]);
var inst_12837 = (state_12858[(7)]);
var inst_12837__$1 = topic_fn.call(null,inst_12789);
var inst_12838 = cljs.core.deref.call(null,mults);
var inst_12839__$1 = cljs.core.get.call(null,inst_12838,inst_12837__$1);
var state_12858__$1 = (function (){var statearr_12874 = state_12858;
(statearr_12874[(11)] = inst_12839__$1);

(statearr_12874[(7)] = inst_12837__$1);

return statearr_12874;
})();
if(cljs.core.truth_(inst_12839__$1)){
var statearr_12875_12923 = state_12858__$1;
(statearr_12875_12923[(1)] = (19));

} else {
var statearr_12876_12924 = state_12858__$1;
(statearr_12876_12924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (25))){
var inst_12848 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12877_12925 = state_12858__$1;
(statearr_12877_12925[(2)] = inst_12848);

(statearr_12877_12925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (17))){
var inst_12813 = (state_12858[(10)]);
var inst_12822 = cljs.core.first.call(null,inst_12813);
var inst_12823 = cljs.core.async.muxch_STAR_.call(null,inst_12822);
var inst_12824 = cljs.core.async.close_BANG_.call(null,inst_12823);
var inst_12825 = cljs.core.next.call(null,inst_12813);
var inst_12799 = inst_12825;
var inst_12800 = null;
var inst_12801 = (0);
var inst_12802 = (0);
var state_12858__$1 = (function (){var statearr_12878 = state_12858;
(statearr_12878[(12)] = inst_12799);

(statearr_12878[(13)] = inst_12801);

(statearr_12878[(14)] = inst_12800);

(statearr_12878[(15)] = inst_12802);

(statearr_12878[(16)] = inst_12824);

return statearr_12878;
})();
var statearr_12879_12926 = state_12858__$1;
(statearr_12879_12926[(2)] = null);

(statearr_12879_12926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (3))){
var inst_12856 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12858__$1,inst_12856);
} else {
if((state_val_12859 === (12))){
var inst_12833 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12880_12927 = state_12858__$1;
(statearr_12880_12927[(2)] = inst_12833);

(statearr_12880_12927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (2))){
var state_12858__$1 = state_12858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12858__$1,(4),ch);
} else {
if((state_val_12859 === (23))){
var state_12858__$1 = state_12858;
var statearr_12881_12928 = state_12858__$1;
(statearr_12881_12928[(2)] = null);

(statearr_12881_12928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (19))){
var inst_12839 = (state_12858[(11)]);
var inst_12789 = (state_12858[(8)]);
var inst_12841 = cljs.core.async.muxch_STAR_.call(null,inst_12839);
var state_12858__$1 = state_12858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12858__$1,(22),inst_12841,inst_12789);
} else {
if((state_val_12859 === (11))){
var inst_12799 = (state_12858[(12)]);
var inst_12813 = (state_12858[(10)]);
var inst_12813__$1 = cljs.core.seq.call(null,inst_12799);
var state_12858__$1 = (function (){var statearr_12882 = state_12858;
(statearr_12882[(10)] = inst_12813__$1);

return statearr_12882;
})();
if(inst_12813__$1){
var statearr_12883_12929 = state_12858__$1;
(statearr_12883_12929[(1)] = (13));

} else {
var statearr_12884_12930 = state_12858__$1;
(statearr_12884_12930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (9))){
var inst_12835 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12885_12931 = state_12858__$1;
(statearr_12885_12931[(2)] = inst_12835);

(statearr_12885_12931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (5))){
var inst_12796 = cljs.core.deref.call(null,mults);
var inst_12797 = cljs.core.vals.call(null,inst_12796);
var inst_12798 = cljs.core.seq.call(null,inst_12797);
var inst_12799 = inst_12798;
var inst_12800 = null;
var inst_12801 = (0);
var inst_12802 = (0);
var state_12858__$1 = (function (){var statearr_12886 = state_12858;
(statearr_12886[(12)] = inst_12799);

(statearr_12886[(13)] = inst_12801);

(statearr_12886[(14)] = inst_12800);

(statearr_12886[(15)] = inst_12802);

return statearr_12886;
})();
var statearr_12887_12932 = state_12858__$1;
(statearr_12887_12932[(2)] = null);

(statearr_12887_12932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (14))){
var state_12858__$1 = state_12858;
var statearr_12891_12933 = state_12858__$1;
(statearr_12891_12933[(2)] = null);

(statearr_12891_12933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (16))){
var inst_12813 = (state_12858[(10)]);
var inst_12817 = cljs.core.chunk_first.call(null,inst_12813);
var inst_12818 = cljs.core.chunk_rest.call(null,inst_12813);
var inst_12819 = cljs.core.count.call(null,inst_12817);
var inst_12799 = inst_12818;
var inst_12800 = inst_12817;
var inst_12801 = inst_12819;
var inst_12802 = (0);
var state_12858__$1 = (function (){var statearr_12892 = state_12858;
(statearr_12892[(12)] = inst_12799);

(statearr_12892[(13)] = inst_12801);

(statearr_12892[(14)] = inst_12800);

(statearr_12892[(15)] = inst_12802);

return statearr_12892;
})();
var statearr_12893_12934 = state_12858__$1;
(statearr_12893_12934[(2)] = null);

(statearr_12893_12934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (10))){
var inst_12799 = (state_12858[(12)]);
var inst_12801 = (state_12858[(13)]);
var inst_12800 = (state_12858[(14)]);
var inst_12802 = (state_12858[(15)]);
var inst_12807 = cljs.core._nth.call(null,inst_12800,inst_12802);
var inst_12808 = cljs.core.async.muxch_STAR_.call(null,inst_12807);
var inst_12809 = cljs.core.async.close_BANG_.call(null,inst_12808);
var inst_12810 = (inst_12802 + (1));
var tmp12888 = inst_12799;
var tmp12889 = inst_12801;
var tmp12890 = inst_12800;
var inst_12799__$1 = tmp12888;
var inst_12800__$1 = tmp12890;
var inst_12801__$1 = tmp12889;
var inst_12802__$1 = inst_12810;
var state_12858__$1 = (function (){var statearr_12894 = state_12858;
(statearr_12894[(12)] = inst_12799__$1);

(statearr_12894[(17)] = inst_12809);

(statearr_12894[(13)] = inst_12801__$1);

(statearr_12894[(14)] = inst_12800__$1);

(statearr_12894[(15)] = inst_12802__$1);

return statearr_12894;
})();
var statearr_12895_12935 = state_12858__$1;
(statearr_12895_12935[(2)] = null);

(statearr_12895_12935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (18))){
var inst_12828 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12896_12936 = state_12858__$1;
(statearr_12896_12936[(2)] = inst_12828);

(statearr_12896_12936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (8))){
var inst_12801 = (state_12858[(13)]);
var inst_12802 = (state_12858[(15)]);
var inst_12804 = (inst_12802 < inst_12801);
var inst_12805 = inst_12804;
var state_12858__$1 = state_12858;
if(cljs.core.truth_(inst_12805)){
var statearr_12897_12937 = state_12858__$1;
(statearr_12897_12937[(1)] = (10));

} else {
var statearr_12898_12938 = state_12858__$1;
(statearr_12898_12938[(1)] = (11));

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
});})(c__10991__auto___12910,mults,ensure_mult,p))
;
return ((function (switch__10879__auto__,c__10991__auto___12910,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_12902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12902[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_12902[(1)] = (1));

return statearr_12902;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12858){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_12858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e12903){if((e12903 instanceof Object)){
var ex__10883__auto__ = e12903;
var statearr_12904_12939 = state_12858;
(statearr_12904_12939[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12940 = state_12858;
state_12858 = G__12940;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___12910,mults,ensure_mult,p))
})();
var state__10993__auto__ = (function (){var statearr_12905 = f__10992__auto__.call(null);
(statearr_12905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___12910);

return statearr_12905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___12910,mults,ensure_mult,p))
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
var args12941 = [];
var len__7322__auto___12944 = arguments.length;
var i__7323__auto___12945 = (0);
while(true){
if((i__7323__auto___12945 < len__7322__auto___12944)){
args12941.push((arguments[i__7323__auto___12945]));

var G__12946 = (i__7323__auto___12945 + (1));
i__7323__auto___12945 = G__12946;
continue;
} else {
}
break;
}

var G__12943 = args12941.length;
switch (G__12943) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12941.length)].join('')));

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
var args12948 = [];
var len__7322__auto___12951 = arguments.length;
var i__7323__auto___12952 = (0);
while(true){
if((i__7323__auto___12952 < len__7322__auto___12951)){
args12948.push((arguments[i__7323__auto___12952]));

var G__12953 = (i__7323__auto___12952 + (1));
i__7323__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var G__12950 = args12948.length;
switch (G__12950) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12948.length)].join('')));

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
var args12955 = [];
var len__7322__auto___13026 = arguments.length;
var i__7323__auto___13027 = (0);
while(true){
if((i__7323__auto___13027 < len__7322__auto___13026)){
args12955.push((arguments[i__7323__auto___13027]));

var G__13028 = (i__7323__auto___13027 + (1));
i__7323__auto___13027 = G__13028;
continue;
} else {
}
break;
}

var G__12957 = args12955.length;
switch (G__12957) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12955.length)].join('')));

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
var c__10991__auto___13030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12996){
var state_val_12997 = (state_12996[(1)]);
if((state_val_12997 === (7))){
var state_12996__$1 = state_12996;
var statearr_12998_13031 = state_12996__$1;
(statearr_12998_13031[(2)] = null);

(statearr_12998_13031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (1))){
var state_12996__$1 = state_12996;
var statearr_12999_13032 = state_12996__$1;
(statearr_12999_13032[(2)] = null);

(statearr_12999_13032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (4))){
var inst_12960 = (state_12996[(7)]);
var inst_12962 = (inst_12960 < cnt);
var state_12996__$1 = state_12996;
if(cljs.core.truth_(inst_12962)){
var statearr_13000_13033 = state_12996__$1;
(statearr_13000_13033[(1)] = (6));

} else {
var statearr_13001_13034 = state_12996__$1;
(statearr_13001_13034[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (15))){
var inst_12992 = (state_12996[(2)]);
var state_12996__$1 = state_12996;
var statearr_13002_13035 = state_12996__$1;
(statearr_13002_13035[(2)] = inst_12992);

(statearr_13002_13035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (13))){
var inst_12985 = cljs.core.async.close_BANG_.call(null,out);
var state_12996__$1 = state_12996;
var statearr_13003_13036 = state_12996__$1;
(statearr_13003_13036[(2)] = inst_12985);

(statearr_13003_13036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (6))){
var state_12996__$1 = state_12996;
var statearr_13004_13037 = state_12996__$1;
(statearr_13004_13037[(2)] = null);

(statearr_13004_13037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (3))){
var inst_12994 = (state_12996[(2)]);
var state_12996__$1 = state_12996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12996__$1,inst_12994);
} else {
if((state_val_12997 === (12))){
var inst_12982 = (state_12996[(8)]);
var inst_12982__$1 = (state_12996[(2)]);
var inst_12983 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12982__$1);
var state_12996__$1 = (function (){var statearr_13005 = state_12996;
(statearr_13005[(8)] = inst_12982__$1);

return statearr_13005;
})();
if(cljs.core.truth_(inst_12983)){
var statearr_13006_13038 = state_12996__$1;
(statearr_13006_13038[(1)] = (13));

} else {
var statearr_13007_13039 = state_12996__$1;
(statearr_13007_13039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (2))){
var inst_12959 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12960 = (0);
var state_12996__$1 = (function (){var statearr_13008 = state_12996;
(statearr_13008[(7)] = inst_12960);

(statearr_13008[(9)] = inst_12959);

return statearr_13008;
})();
var statearr_13009_13040 = state_12996__$1;
(statearr_13009_13040[(2)] = null);

(statearr_13009_13040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (11))){
var inst_12960 = (state_12996[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12996,(10),Object,null,(9));
var inst_12969 = chs__$1.call(null,inst_12960);
var inst_12970 = done.call(null,inst_12960);
var inst_12971 = cljs.core.async.take_BANG_.call(null,inst_12969,inst_12970);
var state_12996__$1 = state_12996;
var statearr_13010_13041 = state_12996__$1;
(statearr_13010_13041[(2)] = inst_12971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (9))){
var inst_12960 = (state_12996[(7)]);
var inst_12973 = (state_12996[(2)]);
var inst_12974 = (inst_12960 + (1));
var inst_12960__$1 = inst_12974;
var state_12996__$1 = (function (){var statearr_13011 = state_12996;
(statearr_13011[(7)] = inst_12960__$1);

(statearr_13011[(10)] = inst_12973);

return statearr_13011;
})();
var statearr_13012_13042 = state_12996__$1;
(statearr_13012_13042[(2)] = null);

(statearr_13012_13042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (5))){
var inst_12980 = (state_12996[(2)]);
var state_12996__$1 = (function (){var statearr_13013 = state_12996;
(statearr_13013[(11)] = inst_12980);

return statearr_13013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12996__$1,(12),dchan);
} else {
if((state_val_12997 === (14))){
var inst_12982 = (state_12996[(8)]);
var inst_12987 = cljs.core.apply.call(null,f,inst_12982);
var state_12996__$1 = state_12996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12996__$1,(16),out,inst_12987);
} else {
if((state_val_12997 === (16))){
var inst_12989 = (state_12996[(2)]);
var state_12996__$1 = (function (){var statearr_13014 = state_12996;
(statearr_13014[(12)] = inst_12989);

return statearr_13014;
})();
var statearr_13015_13043 = state_12996__$1;
(statearr_13015_13043[(2)] = null);

(statearr_13015_13043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (10))){
var inst_12964 = (state_12996[(2)]);
var inst_12965 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12996__$1 = (function (){var statearr_13016 = state_12996;
(statearr_13016[(13)] = inst_12964);

return statearr_13016;
})();
var statearr_13017_13044 = state_12996__$1;
(statearr_13017_13044[(2)] = inst_12965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12997 === (8))){
var inst_12978 = (state_12996[(2)]);
var state_12996__$1 = state_12996;
var statearr_13018_13045 = state_12996__$1;
(statearr_13018_13045[(2)] = inst_12978);

(statearr_13018_13045[(1)] = (5));


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
});})(c__10991__auto___13030,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10879__auto__,c__10991__auto___13030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_13022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13022[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_13022[(1)] = (1));

return statearr_13022;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_12996){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_12996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13023){if((e13023 instanceof Object)){
var ex__10883__auto__ = e13023;
var statearr_13024_13046 = state_12996;
(statearr_13024_13046[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13047 = state_12996;
state_12996 = G__13047;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_12996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_12996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13030,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10993__auto__ = (function (){var statearr_13025 = f__10992__auto__.call(null);
(statearr_13025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13030);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13030,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13049 = [];
var len__7322__auto___13107 = arguments.length;
var i__7323__auto___13108 = (0);
while(true){
if((i__7323__auto___13108 < len__7322__auto___13107)){
args13049.push((arguments[i__7323__auto___13108]));

var G__13109 = (i__7323__auto___13108 + (1));
i__7323__auto___13108 = G__13109;
continue;
} else {
}
break;
}

var G__13051 = args13049.length;
switch (G__13051) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13049.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10991__auto___13111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13111,out){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13111,out){
return (function (state_13083){
var state_val_13084 = (state_13083[(1)]);
if((state_val_13084 === (7))){
var inst_13063 = (state_13083[(7)]);
var inst_13062 = (state_13083[(8)]);
var inst_13062__$1 = (state_13083[(2)]);
var inst_13063__$1 = cljs.core.nth.call(null,inst_13062__$1,(0),null);
var inst_13064 = cljs.core.nth.call(null,inst_13062__$1,(1),null);
var inst_13065 = (inst_13063__$1 == null);
var state_13083__$1 = (function (){var statearr_13085 = state_13083;
(statearr_13085[(9)] = inst_13064);

(statearr_13085[(7)] = inst_13063__$1);

(statearr_13085[(8)] = inst_13062__$1);

return statearr_13085;
})();
if(cljs.core.truth_(inst_13065)){
var statearr_13086_13112 = state_13083__$1;
(statearr_13086_13112[(1)] = (8));

} else {
var statearr_13087_13113 = state_13083__$1;
(statearr_13087_13113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (1))){
var inst_13052 = cljs.core.vec.call(null,chs);
var inst_13053 = inst_13052;
var state_13083__$1 = (function (){var statearr_13088 = state_13083;
(statearr_13088[(10)] = inst_13053);

return statearr_13088;
})();
var statearr_13089_13114 = state_13083__$1;
(statearr_13089_13114[(2)] = null);

(statearr_13089_13114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (4))){
var inst_13053 = (state_13083[(10)]);
var state_13083__$1 = state_13083;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13083__$1,(7),inst_13053);
} else {
if((state_val_13084 === (6))){
var inst_13079 = (state_13083[(2)]);
var state_13083__$1 = state_13083;
var statearr_13090_13115 = state_13083__$1;
(statearr_13090_13115[(2)] = inst_13079);

(statearr_13090_13115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (3))){
var inst_13081 = (state_13083[(2)]);
var state_13083__$1 = state_13083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13083__$1,inst_13081);
} else {
if((state_val_13084 === (2))){
var inst_13053 = (state_13083[(10)]);
var inst_13055 = cljs.core.count.call(null,inst_13053);
var inst_13056 = (inst_13055 > (0));
var state_13083__$1 = state_13083;
if(cljs.core.truth_(inst_13056)){
var statearr_13092_13116 = state_13083__$1;
(statearr_13092_13116[(1)] = (4));

} else {
var statearr_13093_13117 = state_13083__$1;
(statearr_13093_13117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (11))){
var inst_13053 = (state_13083[(10)]);
var inst_13072 = (state_13083[(2)]);
var tmp13091 = inst_13053;
var inst_13053__$1 = tmp13091;
var state_13083__$1 = (function (){var statearr_13094 = state_13083;
(statearr_13094[(10)] = inst_13053__$1);

(statearr_13094[(11)] = inst_13072);

return statearr_13094;
})();
var statearr_13095_13118 = state_13083__$1;
(statearr_13095_13118[(2)] = null);

(statearr_13095_13118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (9))){
var inst_13063 = (state_13083[(7)]);
var state_13083__$1 = state_13083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13083__$1,(11),out,inst_13063);
} else {
if((state_val_13084 === (5))){
var inst_13077 = cljs.core.async.close_BANG_.call(null,out);
var state_13083__$1 = state_13083;
var statearr_13096_13119 = state_13083__$1;
(statearr_13096_13119[(2)] = inst_13077);

(statearr_13096_13119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (10))){
var inst_13075 = (state_13083[(2)]);
var state_13083__$1 = state_13083;
var statearr_13097_13120 = state_13083__$1;
(statearr_13097_13120[(2)] = inst_13075);

(statearr_13097_13120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (8))){
var inst_13053 = (state_13083[(10)]);
var inst_13064 = (state_13083[(9)]);
var inst_13063 = (state_13083[(7)]);
var inst_13062 = (state_13083[(8)]);
var inst_13067 = (function (){var cs = inst_13053;
var vec__13058 = inst_13062;
var v = inst_13063;
var c = inst_13064;
return ((function (cs,vec__13058,v,c,inst_13053,inst_13064,inst_13063,inst_13062,state_val_13084,c__10991__auto___13111,out){
return (function (p1__13048_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13048_SHARP_);
});
;})(cs,vec__13058,v,c,inst_13053,inst_13064,inst_13063,inst_13062,state_val_13084,c__10991__auto___13111,out))
})();
var inst_13068 = cljs.core.filterv.call(null,inst_13067,inst_13053);
var inst_13053__$1 = inst_13068;
var state_13083__$1 = (function (){var statearr_13098 = state_13083;
(statearr_13098[(10)] = inst_13053__$1);

return statearr_13098;
})();
var statearr_13099_13121 = state_13083__$1;
(statearr_13099_13121[(2)] = null);

(statearr_13099_13121[(1)] = (2));


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
});})(c__10991__auto___13111,out))
;
return ((function (switch__10879__auto__,c__10991__auto___13111,out){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_13103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13103[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_13103[(1)] = (1));

return statearr_13103;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_13083){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13104){if((e13104 instanceof Object)){
var ex__10883__auto__ = e13104;
var statearr_13105_13122 = state_13083;
(statearr_13105_13122[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13123 = state_13083;
state_13083 = G__13123;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_13083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_13083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13111,out))
})();
var state__10993__auto__ = (function (){var statearr_13106 = f__10992__auto__.call(null);
(statearr_13106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13111);

return statearr_13106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13111,out))
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
var args13124 = [];
var len__7322__auto___13173 = arguments.length;
var i__7323__auto___13174 = (0);
while(true){
if((i__7323__auto___13174 < len__7322__auto___13173)){
args13124.push((arguments[i__7323__auto___13174]));

var G__13175 = (i__7323__auto___13174 + (1));
i__7323__auto___13174 = G__13175;
continue;
} else {
}
break;
}

var G__13126 = args13124.length;
switch (G__13126) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13124.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10991__auto___13177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13177,out){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13177,out){
return (function (state_13150){
var state_val_13151 = (state_13150[(1)]);
if((state_val_13151 === (7))){
var inst_13132 = (state_13150[(7)]);
var inst_13132__$1 = (state_13150[(2)]);
var inst_13133 = (inst_13132__$1 == null);
var inst_13134 = cljs.core.not.call(null,inst_13133);
var state_13150__$1 = (function (){var statearr_13152 = state_13150;
(statearr_13152[(7)] = inst_13132__$1);

return statearr_13152;
})();
if(inst_13134){
var statearr_13153_13178 = state_13150__$1;
(statearr_13153_13178[(1)] = (8));

} else {
var statearr_13154_13179 = state_13150__$1;
(statearr_13154_13179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (1))){
var inst_13127 = (0);
var state_13150__$1 = (function (){var statearr_13155 = state_13150;
(statearr_13155[(8)] = inst_13127);

return statearr_13155;
})();
var statearr_13156_13180 = state_13150__$1;
(statearr_13156_13180[(2)] = null);

(statearr_13156_13180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (4))){
var state_13150__$1 = state_13150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13150__$1,(7),ch);
} else {
if((state_val_13151 === (6))){
var inst_13145 = (state_13150[(2)]);
var state_13150__$1 = state_13150;
var statearr_13157_13181 = state_13150__$1;
(statearr_13157_13181[(2)] = inst_13145);

(statearr_13157_13181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (3))){
var inst_13147 = (state_13150[(2)]);
var inst_13148 = cljs.core.async.close_BANG_.call(null,out);
var state_13150__$1 = (function (){var statearr_13158 = state_13150;
(statearr_13158[(9)] = inst_13147);

return statearr_13158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13150__$1,inst_13148);
} else {
if((state_val_13151 === (2))){
var inst_13127 = (state_13150[(8)]);
var inst_13129 = (inst_13127 < n);
var state_13150__$1 = state_13150;
if(cljs.core.truth_(inst_13129)){
var statearr_13159_13182 = state_13150__$1;
(statearr_13159_13182[(1)] = (4));

} else {
var statearr_13160_13183 = state_13150__$1;
(statearr_13160_13183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (11))){
var inst_13127 = (state_13150[(8)]);
var inst_13137 = (state_13150[(2)]);
var inst_13138 = (inst_13127 + (1));
var inst_13127__$1 = inst_13138;
var state_13150__$1 = (function (){var statearr_13161 = state_13150;
(statearr_13161[(8)] = inst_13127__$1);

(statearr_13161[(10)] = inst_13137);

return statearr_13161;
})();
var statearr_13162_13184 = state_13150__$1;
(statearr_13162_13184[(2)] = null);

(statearr_13162_13184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (9))){
var state_13150__$1 = state_13150;
var statearr_13163_13185 = state_13150__$1;
(statearr_13163_13185[(2)] = null);

(statearr_13163_13185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (5))){
var state_13150__$1 = state_13150;
var statearr_13164_13186 = state_13150__$1;
(statearr_13164_13186[(2)] = null);

(statearr_13164_13186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (10))){
var inst_13142 = (state_13150[(2)]);
var state_13150__$1 = state_13150;
var statearr_13165_13187 = state_13150__$1;
(statearr_13165_13187[(2)] = inst_13142);

(statearr_13165_13187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13151 === (8))){
var inst_13132 = (state_13150[(7)]);
var state_13150__$1 = state_13150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13150__$1,(11),out,inst_13132);
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
});})(c__10991__auto___13177,out))
;
return ((function (switch__10879__auto__,c__10991__auto___13177,out){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_13169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13169[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_13169[(1)] = (1));

return statearr_13169;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_13150){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13170){if((e13170 instanceof Object)){
var ex__10883__auto__ = e13170;
var statearr_13171_13188 = state_13150;
(statearr_13171_13188[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13189 = state_13150;
state_13150 = G__13189;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_13150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_13150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13177,out))
})();
var state__10993__auto__ = (function (){var statearr_13172 = f__10992__auto__.call(null);
(statearr_13172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13177);

return statearr_13172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13177,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13197 = (function (map_LT_,f,ch,meta13198){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13198 = meta13198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13199,meta13198__$1){
var self__ = this;
var _13199__$1 = this;
return (new cljs.core.async.t_cljs$core$async13197(self__.map_LT_,self__.f,self__.ch,meta13198__$1));
});

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13199){
var self__ = this;
var _13199__$1 = this;
return self__.meta13198;
});

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13200 = (function (map_LT_,f,ch,meta13198,_,fn1,meta13201){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13198 = meta13198;
this._ = _;
this.fn1 = fn1;
this.meta13201 = meta13201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13202,meta13201__$1){
var self__ = this;
var _13202__$1 = this;
return (new cljs.core.async.t_cljs$core$async13200(self__.map_LT_,self__.f,self__.ch,self__.meta13198,self__._,self__.fn1,meta13201__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13202){
var self__ = this;
var _13202__$1 = this;
return self__.meta13201;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13190_SHARP_){
return f1.call(null,(((p1__13190_SHARP_ == null))?null:self__.f.call(null,p1__13190_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13200.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13198","meta13198",-735074910,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13197","cljs.core.async/t_cljs$core$async13197",114991151,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13201","meta13201",1436629583,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13200";

cljs.core.async.t_cljs$core$async13200.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async13200");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13200 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13200(map_LT___$1,f__$1,ch__$1,meta13198__$1,___$2,fn1__$1,meta13201){
return (new cljs.core.async.t_cljs$core$async13200(map_LT___$1,f__$1,ch__$1,meta13198__$1,___$2,fn1__$1,meta13201));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13200(self__.map_LT_,self__.f,self__.ch,self__.meta13198,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6235__auto__ = ret;
if(cljs.core.truth_(and__6235__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6235__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13198","meta13198",-735074910,null)], null);
});

cljs.core.async.t_cljs$core$async13197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13197";

cljs.core.async.t_cljs$core$async13197.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async13197");
});

cljs.core.async.__GT_t_cljs$core$async13197 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13197(map_LT___$1,f__$1,ch__$1,meta13198){
return (new cljs.core.async.t_cljs$core$async13197(map_LT___$1,f__$1,ch__$1,meta13198));
});

}

return (new cljs.core.async.t_cljs$core$async13197(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13206 = (function (map_GT_,f,ch,meta13207){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13207 = meta13207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13208,meta13207__$1){
var self__ = this;
var _13208__$1 = this;
return (new cljs.core.async.t_cljs$core$async13206(self__.map_GT_,self__.f,self__.ch,meta13207__$1));
});

cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13208){
var self__ = this;
var _13208__$1 = this;
return self__.meta13207;
});

cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13207","meta13207",-1052081601,null)], null);
});

cljs.core.async.t_cljs$core$async13206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13206";

cljs.core.async.t_cljs$core$async13206.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async13206");
});

cljs.core.async.__GT_t_cljs$core$async13206 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13206(map_GT___$1,f__$1,ch__$1,meta13207){
return (new cljs.core.async.t_cljs$core$async13206(map_GT___$1,f__$1,ch__$1,meta13207));
});

}

return (new cljs.core.async.t_cljs$core$async13206(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13212 = (function (filter_GT_,p,ch,meta13213){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13213 = meta13213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13214,meta13213__$1){
var self__ = this;
var _13214__$1 = this;
return (new cljs.core.async.t_cljs$core$async13212(self__.filter_GT_,self__.p,self__.ch,meta13213__$1));
});

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13214){
var self__ = this;
var _13214__$1 = this;
return self__.meta13213;
});

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13213","meta13213",495049144,null)], null);
});

cljs.core.async.t_cljs$core$async13212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13212";

cljs.core.async.t_cljs$core$async13212.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async13212");
});

cljs.core.async.__GT_t_cljs$core$async13212 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13212(filter_GT___$1,p__$1,ch__$1,meta13213){
return (new cljs.core.async.t_cljs$core$async13212(filter_GT___$1,p__$1,ch__$1,meta13213));
});

}

return (new cljs.core.async.t_cljs$core$async13212(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args13215 = [];
var len__7322__auto___13259 = arguments.length;
var i__7323__auto___13260 = (0);
while(true){
if((i__7323__auto___13260 < len__7322__auto___13259)){
args13215.push((arguments[i__7323__auto___13260]));

var G__13261 = (i__7323__auto___13260 + (1));
i__7323__auto___13260 = G__13261;
continue;
} else {
}
break;
}

var G__13217 = args13215.length;
switch (G__13217) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13215.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10991__auto___13263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13263,out){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13263,out){
return (function (state_13238){
var state_val_13239 = (state_13238[(1)]);
if((state_val_13239 === (7))){
var inst_13234 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
var statearr_13240_13264 = state_13238__$1;
(statearr_13240_13264[(2)] = inst_13234);

(statearr_13240_13264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (1))){
var state_13238__$1 = state_13238;
var statearr_13241_13265 = state_13238__$1;
(statearr_13241_13265[(2)] = null);

(statearr_13241_13265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (4))){
var inst_13220 = (state_13238[(7)]);
var inst_13220__$1 = (state_13238[(2)]);
var inst_13221 = (inst_13220__$1 == null);
var state_13238__$1 = (function (){var statearr_13242 = state_13238;
(statearr_13242[(7)] = inst_13220__$1);

return statearr_13242;
})();
if(cljs.core.truth_(inst_13221)){
var statearr_13243_13266 = state_13238__$1;
(statearr_13243_13266[(1)] = (5));

} else {
var statearr_13244_13267 = state_13238__$1;
(statearr_13244_13267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (6))){
var inst_13220 = (state_13238[(7)]);
var inst_13225 = p.call(null,inst_13220);
var state_13238__$1 = state_13238;
if(cljs.core.truth_(inst_13225)){
var statearr_13245_13268 = state_13238__$1;
(statearr_13245_13268[(1)] = (8));

} else {
var statearr_13246_13269 = state_13238__$1;
(statearr_13246_13269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (3))){
var inst_13236 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13238__$1,inst_13236);
} else {
if((state_val_13239 === (2))){
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13238__$1,(4),ch);
} else {
if((state_val_13239 === (11))){
var inst_13228 = (state_13238[(2)]);
var state_13238__$1 = state_13238;
var statearr_13247_13270 = state_13238__$1;
(statearr_13247_13270[(2)] = inst_13228);

(statearr_13247_13270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (9))){
var state_13238__$1 = state_13238;
var statearr_13248_13271 = state_13238__$1;
(statearr_13248_13271[(2)] = null);

(statearr_13248_13271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (5))){
var inst_13223 = cljs.core.async.close_BANG_.call(null,out);
var state_13238__$1 = state_13238;
var statearr_13249_13272 = state_13238__$1;
(statearr_13249_13272[(2)] = inst_13223);

(statearr_13249_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (10))){
var inst_13231 = (state_13238[(2)]);
var state_13238__$1 = (function (){var statearr_13250 = state_13238;
(statearr_13250[(8)] = inst_13231);

return statearr_13250;
})();
var statearr_13251_13273 = state_13238__$1;
(statearr_13251_13273[(2)] = null);

(statearr_13251_13273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13239 === (8))){
var inst_13220 = (state_13238[(7)]);
var state_13238__$1 = state_13238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13238__$1,(11),out,inst_13220);
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
});})(c__10991__auto___13263,out))
;
return ((function (switch__10879__auto__,c__10991__auto___13263,out){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_13255 = [null,null,null,null,null,null,null,null,null];
(statearr_13255[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_13255[(1)] = (1));

return statearr_13255;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_13238){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13256){if((e13256 instanceof Object)){
var ex__10883__auto__ = e13256;
var statearr_13257_13274 = state_13238;
(statearr_13257_13274[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13275 = state_13238;
state_13238 = G__13275;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_13238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_13238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13263,out))
})();
var state__10993__auto__ = (function (){var statearr_13258 = f__10992__auto__.call(null);
(statearr_13258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13263);

return statearr_13258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13263,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13276 = [];
var len__7322__auto___13279 = arguments.length;
var i__7323__auto___13280 = (0);
while(true){
if((i__7323__auto___13280 < len__7322__auto___13279)){
args13276.push((arguments[i__7323__auto___13280]));

var G__13281 = (i__7323__auto___13280 + (1));
i__7323__auto___13280 = G__13281;
continue;
} else {
}
break;
}

var G__13278 = args13276.length;
switch (G__13278) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13276.length)].join('')));

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
var c__10991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto__){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto__){
return (function (state_13448){
var state_val_13449 = (state_13448[(1)]);
if((state_val_13449 === (7))){
var inst_13444 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13450_13491 = state_13448__$1;
(statearr_13450_13491[(2)] = inst_13444);

(statearr_13450_13491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (20))){
var inst_13414 = (state_13448[(7)]);
var inst_13425 = (state_13448[(2)]);
var inst_13426 = cljs.core.next.call(null,inst_13414);
var inst_13400 = inst_13426;
var inst_13401 = null;
var inst_13402 = (0);
var inst_13403 = (0);
var state_13448__$1 = (function (){var statearr_13451 = state_13448;
(statearr_13451[(8)] = inst_13402);

(statearr_13451[(9)] = inst_13400);

(statearr_13451[(10)] = inst_13403);

(statearr_13451[(11)] = inst_13401);

(statearr_13451[(12)] = inst_13425);

return statearr_13451;
})();
var statearr_13452_13492 = state_13448__$1;
(statearr_13452_13492[(2)] = null);

(statearr_13452_13492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (1))){
var state_13448__$1 = state_13448;
var statearr_13453_13493 = state_13448__$1;
(statearr_13453_13493[(2)] = null);

(statearr_13453_13493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (4))){
var inst_13389 = (state_13448[(13)]);
var inst_13389__$1 = (state_13448[(2)]);
var inst_13390 = (inst_13389__$1 == null);
var state_13448__$1 = (function (){var statearr_13454 = state_13448;
(statearr_13454[(13)] = inst_13389__$1);

return statearr_13454;
})();
if(cljs.core.truth_(inst_13390)){
var statearr_13455_13494 = state_13448__$1;
(statearr_13455_13494[(1)] = (5));

} else {
var statearr_13456_13495 = state_13448__$1;
(statearr_13456_13495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (15))){
var state_13448__$1 = state_13448;
var statearr_13460_13496 = state_13448__$1;
(statearr_13460_13496[(2)] = null);

(statearr_13460_13496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (21))){
var state_13448__$1 = state_13448;
var statearr_13461_13497 = state_13448__$1;
(statearr_13461_13497[(2)] = null);

(statearr_13461_13497[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (13))){
var inst_13402 = (state_13448[(8)]);
var inst_13400 = (state_13448[(9)]);
var inst_13403 = (state_13448[(10)]);
var inst_13401 = (state_13448[(11)]);
var inst_13410 = (state_13448[(2)]);
var inst_13411 = (inst_13403 + (1));
var tmp13457 = inst_13402;
var tmp13458 = inst_13400;
var tmp13459 = inst_13401;
var inst_13400__$1 = tmp13458;
var inst_13401__$1 = tmp13459;
var inst_13402__$1 = tmp13457;
var inst_13403__$1 = inst_13411;
var state_13448__$1 = (function (){var statearr_13462 = state_13448;
(statearr_13462[(8)] = inst_13402__$1);

(statearr_13462[(9)] = inst_13400__$1);

(statearr_13462[(10)] = inst_13403__$1);

(statearr_13462[(14)] = inst_13410);

(statearr_13462[(11)] = inst_13401__$1);

return statearr_13462;
})();
var statearr_13463_13498 = state_13448__$1;
(statearr_13463_13498[(2)] = null);

(statearr_13463_13498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (22))){
var state_13448__$1 = state_13448;
var statearr_13464_13499 = state_13448__$1;
(statearr_13464_13499[(2)] = null);

(statearr_13464_13499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (6))){
var inst_13389 = (state_13448[(13)]);
var inst_13398 = f.call(null,inst_13389);
var inst_13399 = cljs.core.seq.call(null,inst_13398);
var inst_13400 = inst_13399;
var inst_13401 = null;
var inst_13402 = (0);
var inst_13403 = (0);
var state_13448__$1 = (function (){var statearr_13465 = state_13448;
(statearr_13465[(8)] = inst_13402);

(statearr_13465[(9)] = inst_13400);

(statearr_13465[(10)] = inst_13403);

(statearr_13465[(11)] = inst_13401);

return statearr_13465;
})();
var statearr_13466_13500 = state_13448__$1;
(statearr_13466_13500[(2)] = null);

(statearr_13466_13500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (17))){
var inst_13414 = (state_13448[(7)]);
var inst_13418 = cljs.core.chunk_first.call(null,inst_13414);
var inst_13419 = cljs.core.chunk_rest.call(null,inst_13414);
var inst_13420 = cljs.core.count.call(null,inst_13418);
var inst_13400 = inst_13419;
var inst_13401 = inst_13418;
var inst_13402 = inst_13420;
var inst_13403 = (0);
var state_13448__$1 = (function (){var statearr_13467 = state_13448;
(statearr_13467[(8)] = inst_13402);

(statearr_13467[(9)] = inst_13400);

(statearr_13467[(10)] = inst_13403);

(statearr_13467[(11)] = inst_13401);

return statearr_13467;
})();
var statearr_13468_13501 = state_13448__$1;
(statearr_13468_13501[(2)] = null);

(statearr_13468_13501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (3))){
var inst_13446 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13448__$1,inst_13446);
} else {
if((state_val_13449 === (12))){
var inst_13434 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13469_13502 = state_13448__$1;
(statearr_13469_13502[(2)] = inst_13434);

(statearr_13469_13502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (2))){
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13448__$1,(4),in$);
} else {
if((state_val_13449 === (23))){
var inst_13442 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13470_13503 = state_13448__$1;
(statearr_13470_13503[(2)] = inst_13442);

(statearr_13470_13503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (19))){
var inst_13429 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13471_13504 = state_13448__$1;
(statearr_13471_13504[(2)] = inst_13429);

(statearr_13471_13504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (11))){
var inst_13400 = (state_13448[(9)]);
var inst_13414 = (state_13448[(7)]);
var inst_13414__$1 = cljs.core.seq.call(null,inst_13400);
var state_13448__$1 = (function (){var statearr_13472 = state_13448;
(statearr_13472[(7)] = inst_13414__$1);

return statearr_13472;
})();
if(inst_13414__$1){
var statearr_13473_13505 = state_13448__$1;
(statearr_13473_13505[(1)] = (14));

} else {
var statearr_13474_13506 = state_13448__$1;
(statearr_13474_13506[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (9))){
var inst_13436 = (state_13448[(2)]);
var inst_13437 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13448__$1 = (function (){var statearr_13475 = state_13448;
(statearr_13475[(15)] = inst_13436);

return statearr_13475;
})();
if(cljs.core.truth_(inst_13437)){
var statearr_13476_13507 = state_13448__$1;
(statearr_13476_13507[(1)] = (21));

} else {
var statearr_13477_13508 = state_13448__$1;
(statearr_13477_13508[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (5))){
var inst_13392 = cljs.core.async.close_BANG_.call(null,out);
var state_13448__$1 = state_13448;
var statearr_13478_13509 = state_13448__$1;
(statearr_13478_13509[(2)] = inst_13392);

(statearr_13478_13509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (14))){
var inst_13414 = (state_13448[(7)]);
var inst_13416 = cljs.core.chunked_seq_QMARK_.call(null,inst_13414);
var state_13448__$1 = state_13448;
if(inst_13416){
var statearr_13479_13510 = state_13448__$1;
(statearr_13479_13510[(1)] = (17));

} else {
var statearr_13480_13511 = state_13448__$1;
(statearr_13480_13511[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (16))){
var inst_13432 = (state_13448[(2)]);
var state_13448__$1 = state_13448;
var statearr_13481_13512 = state_13448__$1;
(statearr_13481_13512[(2)] = inst_13432);

(statearr_13481_13512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13449 === (10))){
var inst_13403 = (state_13448[(10)]);
var inst_13401 = (state_13448[(11)]);
var inst_13408 = cljs.core._nth.call(null,inst_13401,inst_13403);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13448__$1,(13),out,inst_13408);
} else {
if((state_val_13449 === (18))){
var inst_13414 = (state_13448[(7)]);
var inst_13423 = cljs.core.first.call(null,inst_13414);
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13448__$1,(20),out,inst_13423);
} else {
if((state_val_13449 === (8))){
var inst_13402 = (state_13448[(8)]);
var inst_13403 = (state_13448[(10)]);
var inst_13405 = (inst_13403 < inst_13402);
var inst_13406 = inst_13405;
var state_13448__$1 = state_13448;
if(cljs.core.truth_(inst_13406)){
var statearr_13482_13513 = state_13448__$1;
(statearr_13482_13513[(1)] = (10));

} else {
var statearr_13483_13514 = state_13448__$1;
(statearr_13483_13514[(1)] = (11));

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
});})(c__10991__auto__))
;
return ((function (switch__10879__auto__,c__10991__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0 = (function (){
var statearr_13487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13487[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__);

(statearr_13487[(1)] = (1));

return statearr_13487;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1 = (function (state_13448){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13488){if((e13488 instanceof Object)){
var ex__10883__auto__ = e13488;
var statearr_13489_13515 = state_13448;
(statearr_13489_13515[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13516 = state_13448;
state_13448 = G__13516;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__ = function(state_13448){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1.call(this,state_13448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto__))
})();
var state__10993__auto__ = (function (){var statearr_13490 = f__10992__auto__.call(null);
(statearr_13490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto__);

return statearr_13490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto__))
);

return c__10991__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13517 = [];
var len__7322__auto___13520 = arguments.length;
var i__7323__auto___13521 = (0);
while(true){
if((i__7323__auto___13521 < len__7322__auto___13520)){
args13517.push((arguments[i__7323__auto___13521]));

var G__13522 = (i__7323__auto___13521 + (1));
i__7323__auto___13521 = G__13522;
continue;
} else {
}
break;
}

var G__13519 = args13517.length;
switch (G__13519) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13517.length)].join('')));

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
var args13524 = [];
var len__7322__auto___13527 = arguments.length;
var i__7323__auto___13528 = (0);
while(true){
if((i__7323__auto___13528 < len__7322__auto___13527)){
args13524.push((arguments[i__7323__auto___13528]));

var G__13529 = (i__7323__auto___13528 + (1));
i__7323__auto___13528 = G__13529;
continue;
} else {
}
break;
}

var G__13526 = args13524.length;
switch (G__13526) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13524.length)].join('')));

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
var args13531 = [];
var len__7322__auto___13582 = arguments.length;
var i__7323__auto___13583 = (0);
while(true){
if((i__7323__auto___13583 < len__7322__auto___13582)){
args13531.push((arguments[i__7323__auto___13583]));

var G__13584 = (i__7323__auto___13583 + (1));
i__7323__auto___13583 = G__13584;
continue;
} else {
}
break;
}

var G__13533 = args13531.length;
switch (G__13533) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13531.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10991__auto___13586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13586,out){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13586,out){
return (function (state_13557){
var state_val_13558 = (state_13557[(1)]);
if((state_val_13558 === (7))){
var inst_13552 = (state_13557[(2)]);
var state_13557__$1 = state_13557;
var statearr_13559_13587 = state_13557__$1;
(statearr_13559_13587[(2)] = inst_13552);

(statearr_13559_13587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (1))){
var inst_13534 = null;
var state_13557__$1 = (function (){var statearr_13560 = state_13557;
(statearr_13560[(7)] = inst_13534);

return statearr_13560;
})();
var statearr_13561_13588 = state_13557__$1;
(statearr_13561_13588[(2)] = null);

(statearr_13561_13588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (4))){
var inst_13537 = (state_13557[(8)]);
var inst_13537__$1 = (state_13557[(2)]);
var inst_13538 = (inst_13537__$1 == null);
var inst_13539 = cljs.core.not.call(null,inst_13538);
var state_13557__$1 = (function (){var statearr_13562 = state_13557;
(statearr_13562[(8)] = inst_13537__$1);

return statearr_13562;
})();
if(inst_13539){
var statearr_13563_13589 = state_13557__$1;
(statearr_13563_13589[(1)] = (5));

} else {
var statearr_13564_13590 = state_13557__$1;
(statearr_13564_13590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (6))){
var state_13557__$1 = state_13557;
var statearr_13565_13591 = state_13557__$1;
(statearr_13565_13591[(2)] = null);

(statearr_13565_13591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (3))){
var inst_13554 = (state_13557[(2)]);
var inst_13555 = cljs.core.async.close_BANG_.call(null,out);
var state_13557__$1 = (function (){var statearr_13566 = state_13557;
(statearr_13566[(9)] = inst_13554);

return statearr_13566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13557__$1,inst_13555);
} else {
if((state_val_13558 === (2))){
var state_13557__$1 = state_13557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13557__$1,(4),ch);
} else {
if((state_val_13558 === (11))){
var inst_13537 = (state_13557[(8)]);
var inst_13546 = (state_13557[(2)]);
var inst_13534 = inst_13537;
var state_13557__$1 = (function (){var statearr_13567 = state_13557;
(statearr_13567[(10)] = inst_13546);

(statearr_13567[(7)] = inst_13534);

return statearr_13567;
})();
var statearr_13568_13592 = state_13557__$1;
(statearr_13568_13592[(2)] = null);

(statearr_13568_13592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (9))){
var inst_13537 = (state_13557[(8)]);
var state_13557__$1 = state_13557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13557__$1,(11),out,inst_13537);
} else {
if((state_val_13558 === (5))){
var inst_13534 = (state_13557[(7)]);
var inst_13537 = (state_13557[(8)]);
var inst_13541 = cljs.core._EQ_.call(null,inst_13537,inst_13534);
var state_13557__$1 = state_13557;
if(inst_13541){
var statearr_13570_13593 = state_13557__$1;
(statearr_13570_13593[(1)] = (8));

} else {
var statearr_13571_13594 = state_13557__$1;
(statearr_13571_13594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (10))){
var inst_13549 = (state_13557[(2)]);
var state_13557__$1 = state_13557;
var statearr_13572_13595 = state_13557__$1;
(statearr_13572_13595[(2)] = inst_13549);

(statearr_13572_13595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13558 === (8))){
var inst_13534 = (state_13557[(7)]);
var tmp13569 = inst_13534;
var inst_13534__$1 = tmp13569;
var state_13557__$1 = (function (){var statearr_13573 = state_13557;
(statearr_13573[(7)] = inst_13534__$1);

return statearr_13573;
})();
var statearr_13574_13596 = state_13557__$1;
(statearr_13574_13596[(2)] = null);

(statearr_13574_13596[(1)] = (2));


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
});})(c__10991__auto___13586,out))
;
return ((function (switch__10879__auto__,c__10991__auto___13586,out){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_13578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13578[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_13578[(1)] = (1));

return statearr_13578;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_13557){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13579){if((e13579 instanceof Object)){
var ex__10883__auto__ = e13579;
var statearr_13580_13597 = state_13557;
(statearr_13580_13597[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13598 = state_13557;
state_13557 = G__13598;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_13557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_13557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13586,out))
})();
var state__10993__auto__ = (function (){var statearr_13581 = f__10992__auto__.call(null);
(statearr_13581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13586);

return statearr_13581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13586,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13599 = [];
var len__7322__auto___13669 = arguments.length;
var i__7323__auto___13670 = (0);
while(true){
if((i__7323__auto___13670 < len__7322__auto___13669)){
args13599.push((arguments[i__7323__auto___13670]));

var G__13671 = (i__7323__auto___13670 + (1));
i__7323__auto___13670 = G__13671;
continue;
} else {
}
break;
}

var G__13601 = args13599.length;
switch (G__13601) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13599.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10991__auto___13673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13673,out){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13673,out){
return (function (state_13639){
var state_val_13640 = (state_13639[(1)]);
if((state_val_13640 === (7))){
var inst_13635 = (state_13639[(2)]);
var state_13639__$1 = state_13639;
var statearr_13641_13674 = state_13639__$1;
(statearr_13641_13674[(2)] = inst_13635);

(statearr_13641_13674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (1))){
var inst_13602 = (new Array(n));
var inst_13603 = inst_13602;
var inst_13604 = (0);
var state_13639__$1 = (function (){var statearr_13642 = state_13639;
(statearr_13642[(7)] = inst_13603);

(statearr_13642[(8)] = inst_13604);

return statearr_13642;
})();
var statearr_13643_13675 = state_13639__$1;
(statearr_13643_13675[(2)] = null);

(statearr_13643_13675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (4))){
var inst_13607 = (state_13639[(9)]);
var inst_13607__$1 = (state_13639[(2)]);
var inst_13608 = (inst_13607__$1 == null);
var inst_13609 = cljs.core.not.call(null,inst_13608);
var state_13639__$1 = (function (){var statearr_13644 = state_13639;
(statearr_13644[(9)] = inst_13607__$1);

return statearr_13644;
})();
if(inst_13609){
var statearr_13645_13676 = state_13639__$1;
(statearr_13645_13676[(1)] = (5));

} else {
var statearr_13646_13677 = state_13639__$1;
(statearr_13646_13677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (15))){
var inst_13629 = (state_13639[(2)]);
var state_13639__$1 = state_13639;
var statearr_13647_13678 = state_13639__$1;
(statearr_13647_13678[(2)] = inst_13629);

(statearr_13647_13678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (13))){
var state_13639__$1 = state_13639;
var statearr_13648_13679 = state_13639__$1;
(statearr_13648_13679[(2)] = null);

(statearr_13648_13679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (6))){
var inst_13604 = (state_13639[(8)]);
var inst_13625 = (inst_13604 > (0));
var state_13639__$1 = state_13639;
if(cljs.core.truth_(inst_13625)){
var statearr_13649_13680 = state_13639__$1;
(statearr_13649_13680[(1)] = (12));

} else {
var statearr_13650_13681 = state_13639__$1;
(statearr_13650_13681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (3))){
var inst_13637 = (state_13639[(2)]);
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13639__$1,inst_13637);
} else {
if((state_val_13640 === (12))){
var inst_13603 = (state_13639[(7)]);
var inst_13627 = cljs.core.vec.call(null,inst_13603);
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13639__$1,(15),out,inst_13627);
} else {
if((state_val_13640 === (2))){
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13639__$1,(4),ch);
} else {
if((state_val_13640 === (11))){
var inst_13619 = (state_13639[(2)]);
var inst_13620 = (new Array(n));
var inst_13603 = inst_13620;
var inst_13604 = (0);
var state_13639__$1 = (function (){var statearr_13651 = state_13639;
(statearr_13651[(7)] = inst_13603);

(statearr_13651[(10)] = inst_13619);

(statearr_13651[(8)] = inst_13604);

return statearr_13651;
})();
var statearr_13652_13682 = state_13639__$1;
(statearr_13652_13682[(2)] = null);

(statearr_13652_13682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (9))){
var inst_13603 = (state_13639[(7)]);
var inst_13617 = cljs.core.vec.call(null,inst_13603);
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13639__$1,(11),out,inst_13617);
} else {
if((state_val_13640 === (5))){
var inst_13603 = (state_13639[(7)]);
var inst_13604 = (state_13639[(8)]);
var inst_13607 = (state_13639[(9)]);
var inst_13612 = (state_13639[(11)]);
var inst_13611 = (inst_13603[inst_13604] = inst_13607);
var inst_13612__$1 = (inst_13604 + (1));
var inst_13613 = (inst_13612__$1 < n);
var state_13639__$1 = (function (){var statearr_13653 = state_13639;
(statearr_13653[(12)] = inst_13611);

(statearr_13653[(11)] = inst_13612__$1);

return statearr_13653;
})();
if(cljs.core.truth_(inst_13613)){
var statearr_13654_13683 = state_13639__$1;
(statearr_13654_13683[(1)] = (8));

} else {
var statearr_13655_13684 = state_13639__$1;
(statearr_13655_13684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (14))){
var inst_13632 = (state_13639[(2)]);
var inst_13633 = cljs.core.async.close_BANG_.call(null,out);
var state_13639__$1 = (function (){var statearr_13657 = state_13639;
(statearr_13657[(13)] = inst_13632);

return statearr_13657;
})();
var statearr_13658_13685 = state_13639__$1;
(statearr_13658_13685[(2)] = inst_13633);

(statearr_13658_13685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (10))){
var inst_13623 = (state_13639[(2)]);
var state_13639__$1 = state_13639;
var statearr_13659_13686 = state_13639__$1;
(statearr_13659_13686[(2)] = inst_13623);

(statearr_13659_13686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13640 === (8))){
var inst_13603 = (state_13639[(7)]);
var inst_13612 = (state_13639[(11)]);
var tmp13656 = inst_13603;
var inst_13603__$1 = tmp13656;
var inst_13604 = inst_13612;
var state_13639__$1 = (function (){var statearr_13660 = state_13639;
(statearr_13660[(7)] = inst_13603__$1);

(statearr_13660[(8)] = inst_13604);

return statearr_13660;
})();
var statearr_13661_13687 = state_13639__$1;
(statearr_13661_13687[(2)] = null);

(statearr_13661_13687[(1)] = (2));


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
});})(c__10991__auto___13673,out))
;
return ((function (switch__10879__auto__,c__10991__auto___13673,out){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_13665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13665[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_13665[(1)] = (1));

return statearr_13665;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_13639){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13666){if((e13666 instanceof Object)){
var ex__10883__auto__ = e13666;
var statearr_13667_13688 = state_13639;
(statearr_13667_13688[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13689 = state_13639;
state_13639 = G__13689;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_13639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_13639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13673,out))
})();
var state__10993__auto__ = (function (){var statearr_13668 = f__10992__auto__.call(null);
(statearr_13668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13673);

return statearr_13668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13673,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13690 = [];
var len__7322__auto___13764 = arguments.length;
var i__7323__auto___13765 = (0);
while(true){
if((i__7323__auto___13765 < len__7322__auto___13764)){
args13690.push((arguments[i__7323__auto___13765]));

var G__13766 = (i__7323__auto___13765 + (1));
i__7323__auto___13765 = G__13766;
continue;
} else {
}
break;
}

var G__13692 = args13690.length;
switch (G__13692) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13690.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10991__auto___13768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10991__auto___13768,out){
return (function (){
var f__10992__auto__ = (function (){var switch__10879__auto__ = ((function (c__10991__auto___13768,out){
return (function (state_13734){
var state_val_13735 = (state_13734[(1)]);
if((state_val_13735 === (7))){
var inst_13730 = (state_13734[(2)]);
var state_13734__$1 = state_13734;
var statearr_13736_13769 = state_13734__$1;
(statearr_13736_13769[(2)] = inst_13730);

(statearr_13736_13769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (1))){
var inst_13693 = [];
var inst_13694 = inst_13693;
var inst_13695 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13734__$1 = (function (){var statearr_13737 = state_13734;
(statearr_13737[(7)] = inst_13695);

(statearr_13737[(8)] = inst_13694);

return statearr_13737;
})();
var statearr_13738_13770 = state_13734__$1;
(statearr_13738_13770[(2)] = null);

(statearr_13738_13770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (4))){
var inst_13698 = (state_13734[(9)]);
var inst_13698__$1 = (state_13734[(2)]);
var inst_13699 = (inst_13698__$1 == null);
var inst_13700 = cljs.core.not.call(null,inst_13699);
var state_13734__$1 = (function (){var statearr_13739 = state_13734;
(statearr_13739[(9)] = inst_13698__$1);

return statearr_13739;
})();
if(inst_13700){
var statearr_13740_13771 = state_13734__$1;
(statearr_13740_13771[(1)] = (5));

} else {
var statearr_13741_13772 = state_13734__$1;
(statearr_13741_13772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (15))){
var inst_13724 = (state_13734[(2)]);
var state_13734__$1 = state_13734;
var statearr_13742_13773 = state_13734__$1;
(statearr_13742_13773[(2)] = inst_13724);

(statearr_13742_13773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (13))){
var state_13734__$1 = state_13734;
var statearr_13743_13774 = state_13734__$1;
(statearr_13743_13774[(2)] = null);

(statearr_13743_13774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (6))){
var inst_13694 = (state_13734[(8)]);
var inst_13719 = inst_13694.length;
var inst_13720 = (inst_13719 > (0));
var state_13734__$1 = state_13734;
if(cljs.core.truth_(inst_13720)){
var statearr_13744_13775 = state_13734__$1;
(statearr_13744_13775[(1)] = (12));

} else {
var statearr_13745_13776 = state_13734__$1;
(statearr_13745_13776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (3))){
var inst_13732 = (state_13734[(2)]);
var state_13734__$1 = state_13734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13734__$1,inst_13732);
} else {
if((state_val_13735 === (12))){
var inst_13694 = (state_13734[(8)]);
var inst_13722 = cljs.core.vec.call(null,inst_13694);
var state_13734__$1 = state_13734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13734__$1,(15),out,inst_13722);
} else {
if((state_val_13735 === (2))){
var state_13734__$1 = state_13734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13734__$1,(4),ch);
} else {
if((state_val_13735 === (11))){
var inst_13702 = (state_13734[(10)]);
var inst_13698 = (state_13734[(9)]);
var inst_13712 = (state_13734[(2)]);
var inst_13713 = [];
var inst_13714 = inst_13713.push(inst_13698);
var inst_13694 = inst_13713;
var inst_13695 = inst_13702;
var state_13734__$1 = (function (){var statearr_13746 = state_13734;
(statearr_13746[(7)] = inst_13695);

(statearr_13746[(11)] = inst_13714);

(statearr_13746[(8)] = inst_13694);

(statearr_13746[(12)] = inst_13712);

return statearr_13746;
})();
var statearr_13747_13777 = state_13734__$1;
(statearr_13747_13777[(2)] = null);

(statearr_13747_13777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (9))){
var inst_13694 = (state_13734[(8)]);
var inst_13710 = cljs.core.vec.call(null,inst_13694);
var state_13734__$1 = state_13734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13734__$1,(11),out,inst_13710);
} else {
if((state_val_13735 === (5))){
var inst_13695 = (state_13734[(7)]);
var inst_13702 = (state_13734[(10)]);
var inst_13698 = (state_13734[(9)]);
var inst_13702__$1 = f.call(null,inst_13698);
var inst_13703 = cljs.core._EQ_.call(null,inst_13702__$1,inst_13695);
var inst_13704 = cljs.core.keyword_identical_QMARK_.call(null,inst_13695,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13705 = (inst_13703) || (inst_13704);
var state_13734__$1 = (function (){var statearr_13748 = state_13734;
(statearr_13748[(10)] = inst_13702__$1);

return statearr_13748;
})();
if(cljs.core.truth_(inst_13705)){
var statearr_13749_13778 = state_13734__$1;
(statearr_13749_13778[(1)] = (8));

} else {
var statearr_13750_13779 = state_13734__$1;
(statearr_13750_13779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (14))){
var inst_13727 = (state_13734[(2)]);
var inst_13728 = cljs.core.async.close_BANG_.call(null,out);
var state_13734__$1 = (function (){var statearr_13752 = state_13734;
(statearr_13752[(13)] = inst_13727);

return statearr_13752;
})();
var statearr_13753_13780 = state_13734__$1;
(statearr_13753_13780[(2)] = inst_13728);

(statearr_13753_13780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (10))){
var inst_13717 = (state_13734[(2)]);
var state_13734__$1 = state_13734;
var statearr_13754_13781 = state_13734__$1;
(statearr_13754_13781[(2)] = inst_13717);

(statearr_13754_13781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13735 === (8))){
var inst_13702 = (state_13734[(10)]);
var inst_13698 = (state_13734[(9)]);
var inst_13694 = (state_13734[(8)]);
var inst_13707 = inst_13694.push(inst_13698);
var tmp13751 = inst_13694;
var inst_13694__$1 = tmp13751;
var inst_13695 = inst_13702;
var state_13734__$1 = (function (){var statearr_13755 = state_13734;
(statearr_13755[(7)] = inst_13695);

(statearr_13755[(8)] = inst_13694__$1);

(statearr_13755[(14)] = inst_13707);

return statearr_13755;
})();
var statearr_13756_13782 = state_13734__$1;
(statearr_13756_13782[(2)] = null);

(statearr_13756_13782[(1)] = (2));


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
});})(c__10991__auto___13768,out))
;
return ((function (switch__10879__auto__,c__10991__auto___13768,out){
return (function() {
var cljs$core$async$state_machine__10880__auto__ = null;
var cljs$core$async$state_machine__10880__auto____0 = (function (){
var statearr_13760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13760[(0)] = cljs$core$async$state_machine__10880__auto__);

(statearr_13760[(1)] = (1));

return statearr_13760;
});
var cljs$core$async$state_machine__10880__auto____1 = (function (state_13734){
while(true){
var ret_value__10881__auto__ = (function (){try{while(true){
var result__10882__auto__ = switch__10879__auto__.call(null,state_13734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10882__auto__;
}
break;
}
}catch (e13761){if((e13761 instanceof Object)){
var ex__10883__auto__ = e13761;
var statearr_13762_13783 = state_13734;
(statearr_13762_13783[(5)] = ex__10883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13784 = state_13734;
state_13734 = G__13784;
continue;
} else {
return ret_value__10881__auto__;
}
break;
}
});
cljs$core$async$state_machine__10880__auto__ = function(state_13734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10880__auto____1.call(this,state_13734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10880__auto____0;
cljs$core$async$state_machine__10880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10880__auto____1;
return cljs$core$async$state_machine__10880__auto__;
})()
;})(switch__10879__auto__,c__10991__auto___13768,out))
})();
var state__10993__auto__ = (function (){var statearr_13763 = f__10992__auto__.call(null);
(statearr_13763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10991__auto___13768);

return statearr_13763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10993__auto__);
});})(c__10991__auto___13768,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1470137664388