(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./Select/Select.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/classnames/index.js"),s=n.n(i),c=n("./node_modules/is-equal/index.js"),u=n.n(c);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===p(Symbol.iterator)?function(e){return p(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":p(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n("./Select/Select.scss");var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,h(t).call(this,e))).state={value:n.props.value},n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.getChildren();return r.a.createElement("ul",{className:s()("ui-select-component",this.props.className)},e?Array.from(e).map(this.renderChild.bind(this)):null)}},{key:"getChildren",value:function(){var e=this.props.children;return e&&e.reduce(function(e,t){return e.concat(t)},[])}},{key:"renderChild",value:function(e,t){var n=e.props.value,o=this.isSelected(n);return void 0===n?e:r.a.createElement("li",{className:s()("option",{active:o}),onClick:this.select.bind(this,n,null),key:t},e)}},{key:"isSelected",value:function(e){var t=this.state.value;return this.props.multiple?this.isAllSelected(t)?!e:t&&t.length>0?!!t.find(function(t){return u()(t,e)}):!e:t?u()(t,e):!e}},{key:"select",value:function(e){if(!this.props.multiple)return this.setState({value:e},this.onChange);if(!e)return this.setState({value:null},this.onChange);var t=this.state.value;this.isAllSelected(t)&&(t=[]);var n=(t=t&&Array.isArray(t)?t.slice():[]).indexOf(e);-1!==n?t.splice(n,1):t.push(e),t=this.trySelectAll(t),this.setState({value:t},this.onChange)}},{key:"trySelectAll",value:function(e){return this.isAllSelected(e)?null:e}},{key:"isAllSelected",value:function(e){if(!e)return!0;var t=this.getChildren().filter(function(e){return e.props&&e.props.value}).length;return e.length>=t}},{key:"onChange",value:function(){var e=this.props.onChange;e&&e(this.props.name,this.state.value)}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}}])&&d(n.prototype,o),a&&d(n,a),t}(),b=function(e){var t=e.children;return r.a.createElement("span",null,t)};y.defaultProps={multiple:!1,name:"",value:null},y.displayName="UiSelectComponent";var A=y;function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),e}function j(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}b.__docgenInfo={description:"",methods:[],displayName:"Option",props:{children:{type:{name:"any"},required:!1,description:""}}};t.default=function(e){var t=e.components,n=k(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"select"}},"Select"),r.a.createElement(l.PropsTable,{of:A}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"\u7528\u4f8b"}},"\u7528\u4f8b"),r.a.createElement(a.MDXTag,{name:"h4",components:t,props:{id:"\u5355\u9009"}},"\u5355\u9009"),r.a.createElement(l.Playground,{__codesandbox:"undefined",__position:1,__code:'class BasicSelect extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      category: null,\n      artisanLevels: null,\n    }\n  }\n  render() {\n    return (\n      <div>\n        <label>\u7c7b\u76ee</label>\n        <Select\n          name="category"\n          value={this.state.category}\n          onChange={this.changeHandler.bind(this)}\n        >\n          <Option value="">\u4e0d\u9650</Option>\n          <Option value="meijia">\u7f8e\u7532</Option>\n          <Option value="meirong">\u7f8e\u5bb9</Option>\n          <Option value="meifa">\u7f8e\u53d1</Option>\n          <Option value="jianshen">\u5065\u8eab</Option>\n          <Option value="gaoyanzhi">\u9ad8\u989c\u503c</Option>\n          <Option value={[\'meijia\', \'jianshen\']}>\u7f8e\u7532+\u5065\u8eab</Option>\n        </Select>\n        <p>selection: {JSON.stringify(this.state.category)}</p>\n      </div>\n    )\n  }\n  changeHandler(name, value) {\n    this.setState(state => ({ [name]: value }))\n  }\n}',__scope:{props:n,Select:A,Option:b}},function(e){function t(){var e;return O(this,t),(e=j(this,w(t).call(this))).state={category:null,artisanLevels:null},e}return x(t,r.a.Component),_(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"\u7c7b\u76ee"),r.a.createElement(A,{name:"category",value:this.state.category,onChange:this.changeHandler.bind(this)},r.a.createElement(b,{value:""},"\u4e0d\u9650"),r.a.createElement(b,{value:"meijia"},"\u7f8e\u7532"),r.a.createElement(b,{value:"meirong"},"\u7f8e\u5bb9"),r.a.createElement(b,{value:"meifa"},"\u7f8e\u53d1"),r.a.createElement(b,{value:"jianshen"},"\u5065\u8eab"),r.a.createElement(b,{value:"gaoyanzhi"},"\u9ad8\u989c\u503c"),r.a.createElement(b,{value:["meijia","jianshen"]},"\u7f8e\u7532+\u5065\u8eab")),r.a.createElement("p",null,"selection: ",JSON.stringify(this.state.category)))}},{key:"changeHandler",value:function(e,t){this.setState(function(n){return S({},e,t)})}}]),t}()),r.a.createElement(a.MDXTag,{name:"h4",components:t,props:{id:"\u591a\u9009"}},"\u591a\u9009"),r.a.createElement(l.Playground,{__codesandbox:"undefined",__position:2,__code:'class BasicSelect extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      category: null,\n      artisanLevel: [1, 2, 3, 4],\n    }\n  }\n  render() {\n    return (\n      <div>\n        <label>\u661f\u7ea7</label>\n        <Select\n          name="artisanLevel"\n          value={this.state.artisanLevel}\n          multiple={true}\n          onChange={this.changeHandler.bind(this)}\n        >\n          <Option value="">\u4e0d\u9650</Option>\n          <Option value={1}>\u4e00\u661f</Option>\n          <Option value={2}>\u4e8c\u661f</Option>\n          <Option value={3}>\u4e09\u661f</Option>\n          <Option value={4}>\u56db\u661f</Option>\n        </Select>\n        <p>selection: {JSON.stringify(this.state.artisanLevel)}</p>\n      </div>\n    )\n  }\n  changeHandler(name, value) {\n    this.setState(state => ({ [name]: value }))\n  }\n}',__scope:{props:n,Select:A,Option:b}},function(e){function t(){var e;return O(this,t),(e=j(this,w(t).call(this))).state={category:null,artisanLevel:[1,2,3,4]},e}return x(t,r.a.Component),_(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"\u661f\u7ea7"),r.a.createElement(A,{name:"artisanLevel",value:this.state.artisanLevel,multiple:!0,onChange:this.changeHandler.bind(this)},r.a.createElement(b,{value:""},"\u4e0d\u9650"),r.a.createElement(b,{value:1},"\u4e00\u661f"),r.a.createElement(b,{value:2},"\u4e8c\u661f"),r.a.createElement(b,{value:3},"\u4e09\u661f"),r.a.createElement(b,{value:4},"\u56db\u661f")),r.a.createElement("p",null,"selection: ",JSON.stringify(this.state.artisanLevel)))}},{key:"changeHandler",value:function(e,t){this.setState(function(n){return S({},e,t)})}}]),t}()))}},"./Select/Select.scss":function(e,t,n){var o=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./Select/Select.scss");"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./Select/img/selected-mark.png":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAgElEQVQ4y63RwQ2AMAgF0I+bdJfOpDN0Jp1FR9ETplbaQikXEhIeBIBJce7rTbMgAHBjDLmxHHJhJTSMSdAQVoPMWAsyYT1IjWkgAFi8UIhJhzGUN0gQZ7JA17GJG3GdWlCtsTaAepAEStAPsxy7hD6Y9v0hJhF6MS3UC5oFAcADVBNS13w8UDwAAAAASUVORK5CYII="},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./Select/Select.scss":function(e,t,n){var o=n("./node_modules/css-loader/lib/url/escape.js");(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'ul.ui-select-component {\n  overflow: auto; }\n  ul.ui-select-component li {\n    position: relative;\n    float: left;\n    background: #fff;\n    color: #666;\n    border: 1px solid transparent;\n    line-height: 35px;\n    width: 70px;\n    margin: 0 6px 6px 0;\n    text-align: center;\n    cursor: default;\n    font-size: 14px; }\n    ul.ui-select-component li:hover {\n      border-color: #DEBB76; }\n    ul.ui-select-component li.active {\n      border-color: #DEBB76; }\n      ul.ui-select-component li.active:after {\n        content: "";\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        width: 9px;\n        height: 9px;\n        background: url('+o(n("./Select/img/selected-mark.png"))+") no-repeat right bottom;\n        background-size: cover; }\n",""])}}]);