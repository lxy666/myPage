(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./Toast/Toast.mdx":function(n,t,e){"use strict";e.r(t);var o=e("./node_modules/react/index.js"),r=e.n(o),u=e("./node_modules/@mdx-js/tag/dist/index.js"),c=e("./node_modules/docz/dist/index.m.js"),a=e("./Toast/index.js");function i(n){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function l(n,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function b(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},u=Object.keys(n);for(o=0;o<u.length;o++)e=u[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(o=0;o<u.length;o++)e=u[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}t.default=function(n){var t=n.components,e=b(n,["components"]);return r.a.createElement(u.MDXTag,{name:"wrapper",components:t},r.a.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"\u7528\u4f8b"}},"\u7528\u4f8b"),r.a.createElement(c.Playground,{__codesandbox:"undefined",__position:0,__code:"class App extends React.Component {\n  constructor() {\n    super()\n  }\n  onClick() {\n    Toast.show('\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u5c1d\u8bd5')\n  }\n  render() {\n    return (\n      <div>\n        <button type=\"button\" onClick={() => Toast.show('\u6211\u662fToast!')}>\n          \u70b9\u6211!\n        </button>\n        <button type=\"button\" onClick={() => Toast.show('\u7b49\u62115s\u6d88\u5931', 5)}>\n          \u65f6\u95f4\u957f\u4e00\u70b9\n        </button>\n        <button\n          type=\"button\"\n          onClick={() => {\n            Toast.show('\u81ea\u5b9a\u4e49\u6837\u5f0f', { className: 'exp-toast' })\n          }}\n        >\n          \u81ea\u5b9a\u4e49\u6837\u5f0f\n        </button>\n      </div>\n    )\n  }\n}",__scope:{props:e,Toast:a.a}},function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,p(t).call(this))}var e,o,u;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(t,r.a.Component),e=t,(o=[{key:"onClick",value:function(){a.a.show("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u5c1d\u8bd5")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return a.a.show("\u6211\u662fToast!")}},"\u70b9\u6211!"),r.a.createElement("button",{type:"button",onClick:function(){return a.a.show("\u7b49\u62115s\u6d88\u5931",5)}},"\u65f6\u95f4\u957f\u4e00\u70b9"),r.a.createElement("button",{type:"button",onClick:function(){a.a.show("\u81ea\u5b9a\u4e49\u6837\u5f0f",{className:"exp-toast"})}},"\u81ea\u5b9a\u4e49\u6837\u5f0f"))}}])&&s(e.prototype,o),u&&s(e,u),t}()))}}}]);