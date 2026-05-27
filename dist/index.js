"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(l,a){
var i=require('@stdlib/math-base-assert-is-nan/dist');function q(e,r){return i(e)||i(r)?NaN:e<r?0:1}a.exports=q
});var f=n(function(x,s){
var v=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-nan/dist');function N(e){if(c(e))return v(NaN);return r;function r(t){return c(t)?NaN:t<e?0:1}}s.exports=N
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),d=f();y(o,"factory",d);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
