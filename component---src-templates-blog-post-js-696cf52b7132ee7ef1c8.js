(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0jh0":function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},"2klF":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Ck4i:function(t,e,r){var n=r("Q83E"),o=r("2klF");function c(e,r,u){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c},Q83E:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},R7tm:function(t,e,r){var n=r("qHws"),o=r("gC2u"),c=r("dQcQ"),u=r("m7BV");t.exports=function(t){return n(t)||o(t)||c(t)||u()}},X8hv:function(t,e,r){var n=r("Ck4i"),o=r("R7tm"),c=r("0jh0"),u=r("uDP2");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=r("q1tI"),f=r("7ljp").mdx,p=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,c=u(t,["scope","children"]),a=p(e),s=l.useMemo((function(){if(!r)return null;var t=i({React:l,mdx:f},a),e=Object.keys(t),c=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,e]);return l.createElement(s,i({},c))}},dQcQ:function(t,e,r){var n=r("hMe3");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},gC2u:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},m7BV:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(t,e,r){var n=r("hMe3");t.exports=function(t){if(Array.isArray(t))return n(t)}},yZlL:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return f})),r.d(e,"pageQuery",(function(){return p}));var n=r("q1tI"),o=r.n(n),c=r("qhky"),u=r("A2+M"),a=r("5CWz"),i=r("Ji2X"),l=r("aCnj");function f(t){var e=t.data.mdx;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),o.a.createElement(c.a,{title:e.frontmatter.title+" - Alfa's Blog"}),o.a.createElement(i.a,{maxWidth:"lg"},o.a.createElement(l.a,{title:"Alfa's Blog"}),o.a.createElement("main",null,o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement(u.MDXRenderer,null,e.body))))}var p="608557214"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-696cf52b7132ee7ef1c8.js.map