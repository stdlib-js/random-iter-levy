// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.0-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-levy@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function g(f,c,b){var x,y,w,N,P;if(!o(f)||d(f))throw new TypeError(v("invalid argument. First argument must be a number and not NaN. Value: `%s`.",f));if(!a(c))throw new TypeError(v("invalid argument. Second argument must be a positive number. Value: `%s`.",c));if(arguments.length>2){if(!m(b))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",b));if(x=r({},b),u(x,"iter")){if(!l(x.iter))throw new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",x.iter))}else x.iter=p;w=j(f,c,x),void 0===x.prng&&!1!==x.copy&&(x.state=w.state)}else w=j(f,c),x={iter:p,state:w.state};return P=0,e(y={},"next",L),e(y,"return",G),x&&x.prng?(e(y,"seed",null),e(y,"seedLength",null),s(y,"state",n(null),i),e(y,"stateLength",null),e(y,"byteLength",null)):(t(y,"seed",E),t(y,"seedLength",T),s(y,"state",F,S),t(y,"stateLength",V),t(y,"byteLength",O)),e(y,"PRNG",w.PRNG),h&&e(y,h,R),y;function L(){return P+=1,N||P>x.iter?{done:!0}:{value:w(),done:!1}}function G(e){return N=!0,arguments.length?{value:e,done:!0}:{done:!0}}function R(){return g(f,c,x)}function E(){return w.PRNG.seed}function T(){return w.PRNG.seedLength}function V(){return w.PRNG.stateLength}function O(){return w.PRNG.byteLength}function F(){return w.PRNG.state}function S(e){w.PRNG.state=e}}export{g as default};
//# sourceMappingURL=index.mjs.map
