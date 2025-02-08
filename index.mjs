// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function s(t,e){return n(t)||n(e)?NaN:t<e?0:1}function r(t){return n(t)?e(NaN):function(e){if(n(e))return NaN;return e<t?0:1}}t(s,"factory",r);export{s as default,r as factory};
//# sourceMappingURL=index.mjs.map
