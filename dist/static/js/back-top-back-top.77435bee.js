(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./BackTop/BackTop.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/react/index.js"),r=o.n(t),i=o("./node_modules/@mdx-js/tag/dist/index.js"),s=o("./node_modules/docz/dist/index.m.js"),c=o("./node_modules/prop-types/index.js"),a=o.n(c),l=o("./Icon/index.js"),u=o("./BackTop/img/icon-backtop.svg"),p=o.n(u);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.125;return new Promise(function(n){!function n(o){var t=document.documentElement.scrollTop||document.body.scrollTop;if(t>e)return window.requestAnimationFrame(function(){return n(o)}),void window.scrollTo(0,t-t*e);window.scrollTo(0,0);o()}(n)})}o("./BackTop/BackTop.scss");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){return(b="function"===typeof Symbol&&"symbol"===f(Symbol.iterator)?function(e){return f(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":f(e)})(e)}function m(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var w=function(e){function n(e){var o,t,r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,(o=!(r=y(n).call(this,e))||"object"!==b(r)&&"function"!==typeof r?h(t):r).state={visible:o.isVisible()},o.onScroll=o.onScroll.bind(h(h(o))),o}var o,t,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,r.a.Component),o=n,(t=[{key:"componentDidMount",value:function(){this.subscribe()}},{key:"subscribe",value:function(){window.addEventListener("scroll",this.onScroll,!1)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"unsubscribe",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"onScroll",value:function(){this.setState({visible:this.isVisible()})}},{key:"scrollToTop",value:function(){var e=this;this.unsubscribe(),d().then(function(){e.subscribe(),e.onScroll()})}},{key:"isVisible",value:function(){return this.props.viewportHeight<window.scrollY}},{key:"render",value:function(){return this.state.visible?r.a.createElement("div",{className:"ui-backtop",onClick:this.scrollToTop.bind(this)},r.a.createElement("div",{className:"ui-backtop-icon"},r.a.createElement(l.a,{svg:p.a,width:"2rem",height:"2rem"}))):null}}])&&m(o.prototype,t),i&&m(o,i),n}();function g(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}k(w,"propTypes",{viewportHeight:a.a.number}),k(w,"defaultProps",{viewportHeight:1.5*window.innerHeight});n.default=function(e){var n=e.components,o=g(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"backtop"}},"BackTop"),r.a.createElement(s.PropsTable,{of:w}),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"\u7528\u4f8b"}},"\u7528\u4f8b"),r.a.createElement(s.Playground,{__codesandbox:"undefined",__position:1,__code:"() => {\n  const style = {\n    background: '#eee',\n    height: '3000px',\n  }\n  return (\n    <div className=\"app\">\n      <div style={style}>\u5f80\u4e0b\u62c9\u8bd5\u8bd5\uff01</div>\n      <BackTop />\n    </div>\n  )\n}",__scope:{props:o,BackTop:w}},function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{style:{background:"#eee",height:"3000px"}},"\u5f80\u4e0b\u62c9\u8bd5\u8bd5\uff01"),r.a.createElement(w,null))}))}},"./BackTop/BackTop.scss":function(e,n,o){var t=o("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./BackTop/BackTop.scss");"string"===typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0};o("./node_modules/style-loader/lib/addStyles.js")(t,r);t.locals&&(e.exports=t.locals)},"./BackTop/img/icon-backtop.svg":function(e,n,o){e.exports=o.p+"static/img/icon-backtop.53ffcdd1.svg"},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./BackTop/BackTop.scss":function(e,n,o){(e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".ui-backtop {\n  position: fixed;\n  z-index: 2000;\n  right: 1rem;\n  bottom: 3rem;\n  width: 2rem;\n  height: 2rem;\n  text-align: center; }\n  .ui-backtop .ui-backtop-icon {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateY(-50%) translateX(-50%); }\n",""])}}]);