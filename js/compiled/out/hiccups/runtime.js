// Compiled by ClojureScript 1.9.89 {}
goog.provide('hiccups.runtime');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
hiccups.runtime.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * Characters to replace when escaping HTML
 */
hiccups.runtime.character_escapes = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
/**
 * A list of tags that need an explicit ending tag when rendered.
 */
hiccups.runtime.container_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 33, ["table",null,"canvas",null,"body",null,"h3",null,"dt",null,"label",null,"fieldset",null,"form",null,"em",null,"option",null,"h2",null,"h4",null,"style",null,"span",null,"script",null,"ol",null,"dd",null,"a",null,"head",null,"textarea",null,"i",null,"div",null,"b",null,"h5",null,"pre",null,"ul",null,"iframe",null,"strong",null,"html",null,"h1",null,"li",null,"dl",null,"h6",null], null), null);
hiccups.runtime.as_str = (function hiccups$runtime$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});
hiccups.runtime._STAR_html_mode_STAR_ = new cljs.core.Keyword(null,"xml","xml",-1170142052);
hiccups.runtime.xml_mode_QMARK_ = (function hiccups$runtime$xml_mode_QMARK_(){
return cljs.core._EQ_.call(null,hiccups.runtime._STAR_html_mode_STAR_,new cljs.core.Keyword(null,"xml","xml",-1170142052));
});
hiccups.runtime.in_mode = (function hiccups$runtime$in_mode(mode,f){
var _STAR_html_mode_STAR_14211 = hiccups.runtime._STAR_html_mode_STAR_;
hiccups.runtime._STAR_html_mode_STAR_ = mode;

try{return f.call(null);
}finally {hiccups.runtime._STAR_html_mode_STAR_ = _STAR_html_mode_STAR_14211;
}});
/**
 * Change special characters into HTML character entities.
 */
hiccups.runtime.escape_html = (function hiccups$runtime$escape_html(text){
return clojure.string.escape.call(null,hiccups.runtime.as_str.call(null,text),hiccups.runtime.character_escapes);
});
hiccups.runtime.h = hiccups.runtime.escape_html;
hiccups.runtime.end_tag = (function hiccups$runtime$end_tag(){
if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_.call(null))){
return " />";
} else {
return ">";
}
});
hiccups.runtime.xml_attribute = (function hiccups$runtime$xml_attribute(name,value){
return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str.call(null,name)),cljs.core.str("=\""),cljs.core.str(hiccups.runtime.escape_html.call(null,value)),cljs.core.str("\"")].join('');
});
hiccups.runtime.render_attribute = (function hiccups$runtime$render_attribute(p__14212){
var vec__14216 = p__14212;
var name = cljs.core.nth.call(null,vec__14216,(0),null);
var value = cljs.core.nth.call(null,vec__14216,(1),null);
if(value === true){
if(cljs.core.truth_(hiccups.runtime.xml_mode_QMARK_.call(null))){
return hiccups.runtime.xml_attribute.call(null,name,name);
} else {
return [cljs.core.str(" "),cljs.core.str(hiccups.runtime.as_str.call(null,name))].join('');
}
} else {
if(cljs.core.not.call(null,value)){
return "";
} else {
return hiccups.runtime.xml_attribute.call(null,name,value);

}
}
});
hiccups.runtime.render_attr_map = (function hiccups$runtime$render_attr_map(attrs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.sort.call(null,cljs.core.map.call(null,hiccups.runtime.render_attribute,attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
hiccups.runtime.normalize_element = (function hiccups$runtime$normalize_element(p__14219){
var vec__14226 = p__14219;
var seq__14227 = cljs.core.seq.call(null,vec__14226);
var first__14228 = cljs.core.first.call(null,seq__14227);
var seq__14227__$1 = cljs.core.next.call(null,seq__14227);
var tag = first__14228;
var content = seq__14227__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name")].join('');
} else {
}

var vec__14229 = cljs.core.re_matches.call(null,hiccups.runtime.re_tag,hiccups.runtime.as_str.call(null,tag));
var _ = cljs.core.nth.call(null,vec__14229,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__14229,(1),null);
var id = cljs.core.nth.call(null,vec__14229,(2),null);
var class$ = cljs.core.nth.call(null,vec__14229,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,"."," "):null)], null);
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * Render a tag vector as a HTML element.
 */
hiccups.runtime.render_element = (function hiccups$runtime$render_element(element){
var vec__14235 = hiccups.runtime.normalize_element.call(null,element);
var tag = cljs.core.nth.call(null,vec__14235,(0),null);
var attrs = cljs.core.nth.call(null,vec__14235,(1),null);
var content = cljs.core.nth.call(null,vec__14235,(2),null);
if(cljs.core.truth_((function (){var or__6247__auto__ = content;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return hiccups.runtime.container_tags.call(null,tag);
}
})())){
return [cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(hiccups.runtime.render_attr_map.call(null,attrs)),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,content)),cljs.core.str("</"),cljs.core.str(tag),cljs.core.str(">")].join('');
} else {
return [cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(hiccups.runtime.render_attr_map.call(null,attrs)),cljs.core.str(hiccups.runtime.end_tag.call(null))].join('');
}
});
/**
 * Turn a Clojure data type into a string of HTML.
 */
hiccups.runtime.render_html = (function hiccups$runtime$render_html(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return hiccups.runtime.render_element.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hiccups$runtime$render_html,x));
} else {
return hiccups.runtime.as_str.call(null,x);

}
}
});

//# sourceMappingURL=runtime.js.map?rel=1470137666385