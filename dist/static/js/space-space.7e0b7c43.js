(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./Space/Space.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),i=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),o=function(e){var a=e.bgColor,n=void 0===a?"transparent":a,t=e.height,r=void 0===t?10:t;return i.a.createElement("div",{style:{width:"100%",height:r+"px",background:n}})},m=o;o.__docgenInfo={description:"",methods:[],displayName:"Space",props:{bgColor:{type:{name:"string"},required:!1,description:""},height:{type:{name:"string"},required:!1,description:""}}};var s=n("./Image/index.js");function p(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}a.default=function(e){var a=e.components,n=p(e,["components"]);return i.a.createElement(r.MDXTag,{name:"wrapper",components:a},i.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"space"}},"Space"),i.a.createElement(c.PropsTable,{of:m}),i.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"\u7528\u4f8b"}},"\u7528\u4f8b"),i.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"simple"}},"simple"),i.a.createElement(c.Playground,{__codesandbox:"undefined",__position:1,__code:"() => {\n  const imgs = [\n    'https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_f7ff65b9ff0a75fa46a1909d1367e2ec.jpg',\n    'https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_2d617c90b7478b8cd1068678b699a90c.jpg',\n  ]\n  return (\n    <div>\n      <Image src={imgs[0]} />\n      <Space bgColor=\"#c41515\" />\n      <Image src={imgs[1]} />\n    </div>\n  )\n}",__scope:{props:n,Space:m,Image:s.a}},function(){var e=["https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_f7ff65b9ff0a75fa46a1909d1367e2ec.jpg","https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_2d617c90b7478b8cd1068678b699a90c.jpg"];return i.a.createElement("div",null,i.a.createElement(s.a,{src:e[0]}),i.a.createElement(m,{bgColor:"#c41515"}),i.a.createElement(s.a,{src:e[1]}))}),i.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"pattern"}},"Pattern"),i.a.createElement(c.Playground,{__codesandbox:"undefined",__position:2,__code:"() => {\n  const imgs = [\n    'https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_f7ff65b9ff0a75fa46a1909d1367e2ec.jpg',\n    'https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_2d617c90b7478b8cd1068678b699a90c.jpg',\n  ]\n  return (\n    <div>\n      <Image src={imgs[0]} />\n      <Space bgColor=\"#fff repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,0,0,.5) 35px, rgba(255,0,0,.5) 70px)\" />\n      <Image src={imgs[1]} />\n    </div>\n  )\n}",__scope:{props:n,Space:m,Image:s.a}},function(){var e=["https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_f7ff65b9ff0a75fa46a1909d1367e2ec.jpg","https://img-ucdn-static.helijia.com/zmw/upload/magic/images/original_2d617c90b7478b8cd1068678b699a90c.jpg"];return i.a.createElement("div",null,i.a.createElement(s.a,{src:e[0]}),i.a.createElement(m,{bgColor:"#fff repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,0,0,.5) 35px, rgba(255,0,0,.5) 70px)"}),i.a.createElement(s.a,{src:e[1]}))}))}}}]);