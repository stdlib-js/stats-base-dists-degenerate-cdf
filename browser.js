// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function c(e){return e!=e}function f(e,t){return c(e)||c(t)?NaN:e<t?0:1}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},e(f,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e){return c(e)?(t=NaN,function(){return t}):function(t){return c(t)?NaN:t<e?0:1};var t}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cdf=t();
//# sourceMappingURL=browser.js.map
