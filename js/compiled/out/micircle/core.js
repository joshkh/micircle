// Compiled by ClojureScript 1.7.228 {}
goog.provide('micircle.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('micircle.views');
goog.require('micircle.config');
goog.require('micircle.handlers');
goog.require('micircle.subs');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
if(cljs.core.truth_(micircle.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");
} else {
}
micircle.core.mount_root = (function micircle$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [micircle.views.main_panel], null),document.getElementById("app"));
});
micircle.core.init = (function micircle$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return micircle.core.mount_root.call(null);
});
goog.exportSymbol('micircle.core.init', micircle.core.init);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-data","load-data",-1806350928)], null));

//# sourceMappingURL=core.js.map?rel=1463475620409