(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style/example.scss":function(e,n,i){(e.exports=i("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * \u7b80\u53551px\u89e3\u51b3\u65b9\u6848\n */\n/**\n * \u6e05\u9664\u6d6e\u52a8\n */\n/**\n * \u5c06px\u8f6c\u5316\u6210rem\n * \u6ce8\u610fretina\u5c4f\u4e2d\u7684\u5c3a\u7801\u8981\u5148\u9664\u4ee52\n */\n.ex-style .case-em {\n  width: 25rem;\n  height: 5rem;\n  background: #ff4; }\n\n.ex-style .line-top {\n  position: relative;\n  background: #efefef;\n  padding: 20px; }\n  .ex-style .line-top:before {\n    height: 0;\n    border-top: 1px solid #ff3636;\n    position: absolute;\n    content: "";\n    left: 0;\n    top: 0;\n    width: 100%;\n    transform-origin: left top;\n    -webkit-transform-origin: left top; }\n    @media (-webkit-min-device-pixel-ratio: 2) {\n      .ex-style .line-top:before {\n        width: 200%;\n        transform: scale(0.5);\n        -webkit-transform: scale(0.5); } }\n    @media (-webkit-min-device-pixel-ratio: 3) {\n      .ex-style .line-top:before {\n        width: 300%;\n        transform: scale(0.333);\n        -webkit-transform: scale(0.333); } }\n\n.ex-style .line-box {\n  position: relative;\n  position: relative; }\n  .ex-style .line-box:before {\n    height: 0;\n    border-top: 1px solid #ddd;\n    position: absolute;\n    content: "";\n    left: 0;\n    top: 0;\n    width: 100%;\n    transform-origin: left top;\n    -webkit-transform-origin: left top; }\n    @media (-webkit-min-device-pixel-ratio: 2) {\n      .ex-style .line-box:before {\n        width: 200%;\n        transform: scale(0.5);\n        -webkit-transform: scale(0.5); } }\n    @media (-webkit-min-device-pixel-ratio: 3) {\n      .ex-style .line-box:before {\n        width: 300%;\n        transform: scale(0.333);\n        -webkit-transform: scale(0.333); } }\n  .ex-style .line-box:after {\n    height: 0;\n    border-bottom: 1px solid #ddd;\n    position: absolute;\n    content: "";\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    transform-origin: left bottom;\n    -webkit-transform-origin: left bottom; }\n    @media (-webkit-min-device-pixel-ratio: 2) {\n      .ex-style .line-box:after {\n        width: 200%;\n        transform: scale(0.5);\n        -webkit-transform: scale(0.5); } }\n    @media (-webkit-min-device-pixel-ratio: 3) {\n      .ex-style .line-box:after {\n        width: 300%;\n        transform: scale(0.333);\n        -webkit-transform: scale(0.333); } }\n  .ex-style .line-box > div {\n    position: relative;\n    position: relative; }\n    .ex-style .line-box > div:before {\n      width: 0;\n      border-left: 1px solid #ddd;\n      position: absolute;\n      content: "";\n      left: 0;\n      top: 0;\n      height: 100%;\n      transform-origin: left top;\n      -webkit-transform-origin: left top; }\n      @media (-webkit-min-device-pixel-ratio: 2) {\n        .ex-style .line-box > div:before {\n          height: 200%;\n          transform: scale(0.5);\n          -webkit-transform: scale(0.5); } }\n      @media (-webkit-min-device-pixel-ratio: 3) {\n        .ex-style .line-box > div:before {\n          height: 300%;\n          transform: scale(0.333);\n          -webkit-transform: scale(0.333); } }\n    .ex-style .line-box > div:after {\n      width: 0;\n      border-right: 1px solid #ddd;\n      position: absolute;\n      content: "";\n      right: 0;\n      top: 0;\n      height: 100%;\n      transform-origin: right top;\n      -webkit-transform-origin: right top; }\n      @media (-webkit-min-device-pixel-ratio: 2) {\n        .ex-style .line-box > div:after {\n          height: 200%;\n          transform: scale(0.5);\n          -webkit-transform: scale(0.5); } }\n      @media (-webkit-min-device-pixel-ratio: 3) {\n        .ex-style .line-box > div:after {\n          height: 300%;\n          transform: scale(0.333);\n          -webkit-transform: scale(0.333); } }\n\n.ex-style .ellipsis-single {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap;\n  width: 200px;\n  margin-bottom: 10px; }\n\n.ex-style .ellipsis-mutiline {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  flex-direction: column;\n  width: 200px; }\n',""])},"./style/Style.mdx":function(e,n,i){"use strict";i.r(n);var t=i("./node_modules/react/index.js"),o=i.n(t),l=i("./node_modules/@mdx-js/tag/dist/index.js"),s=i("./node_modules/docz/dist/index.m.js");function r(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}i("./style/example.scss"),n.default=function(e){var n=e.components,i=r(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:n},o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"\u7528\u4f8b"}},"\u7528\u4f8b"),o.a.createElement(s.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPNNXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnMiABYaPYAA2Gi6PWMBQIAMR9aBEjI_hnEORFHUwdgAAUhH4JYiGoSg4EYxFeLrfiaGcCA0MudgAEZWPo-RVSDVBkKmABBOZcPYaNgA2aB0Ejdh5E5XCxAcuMZHYVFsJgbhgGPDCsOxeRd3rYByBsKBXOCAAyRLxkSeZKGaWKXLc7hcvlMBQksvtUHadgAH5nPiyNo08q4sqquh5DjfdZDMT8zFhDVjhgMAwigKYaq8ny60YWy1zrCxBu4byCIm-sugIPpzFjOb6wbPzyCgfw4AAOR9IL-GwC0AtgcR1zW5M8EMsRAHvlQBYTUACldAHYLQB4fWra7zou-NWtWi7LoAJjEGAiGjGjPItGEiEAVWVAFl5QAjY0AdO9q0Bz6_u-notrgXb9r4HRKQtYHxC6EGAFZyPIzyfGJ6NDPJlcWqiv69xkRmme-1mmYbPBAcMwB5hUAAl9AE74wAxC2Rjm2Y2zHsdPXGoDQGALQiGZxAAATQTbQhkvwIAEOWXUVygZmjABiMAwFTTiLfplnUa-yXtr2mX-D1hXqjO37OfZ23PaHGBxc5taCN4YpbZwap8O99g1csqBNe6bXdflg2jeNnt0G_SPo41rXXB1l2LS8G5IhNtOM49-tvL82aA_rLPY5zvOk9gMACBLnsy5riw67j6ZG_1_oUkINv0_MmumvL8fOd4YPJ87tbVy6f22YZyPmYTSOpBtuaN63ueU0BwB1bUAMm9AFDYwAvxUAPjNAC5PHBb7F1f1rYDGHZxw6EggO5bGOgpTpAJe_sAIhGgB6MyhoAGQjADhpgfYBYDIHQIgQfB-m917b3LvPe2WNHYHRAEuOWn84AWiIOEaA8t3ZzwsMAwAWJrwModQoBVDIEP3IXQ2h9CoHMIYagi6NDYHsLYawxBK9OFIJ-p7QRf1PxrVnlIMatZOS_hAOpbYrg0hAWoGQHQoF9AMGruwfgqB9r8CuPwIExIqjeAyATLAPpyRMhAPRCw_BWAZHyNQQxuiQDkRwJ48iil1j8HKOQfoMxipuP4NZfyAobEwisQBbq5JKCJALHkAo04tQWhMSCcxAhfF1n4FENAoSVBRg0HAHJDiQCYHmFGSyEB4BuJ0eUs0UpCkAD1DKcS8V4sp9Z-BNMtNaVp7TOk-JAOsce8h5GmOqB8agkAUiqNQOo3QYEDAQQIiAWgvosiGOMWaWgFo-kWlmMrBQCh5DyCAA",__position:0,__code:'() => {\n  return (\n    <div className="ex-style">\n      <h1>\u53ef\u590d\u7528\u6837\u5f0f</h1>\n      <div>\n        <h2>em(px) - em\u5355\u4f4d\u6362\u7b97</h2>\n        <div className="case-em">rem(500) x rem(100)</div>\n      </div>\n      <div>\n        <h2>1\u50cf\u7d20\u8fb9\u6846</h2>\n        <div className="line-top">@include hairline-top(#ff3636)</div>\n        <div className="line-box">\n          <div>\n            <pre>\n              {`\n    .box {\n      @include hairline-top(#ddd);\n      @include hairline-bottom(#ddd);\n      > div {\n        @include hairline-left(#ddd);\n        @include hairline-right(#ddd);\n      }\n    }\n    `}\n            </pre>\n          </div>\n        </div>\n      </div>\n\n      <div>\n        <h2>\u5b57\u7b26\u8d85\u51fa\u663e\u793a...</h2>\n        <div className="ellipsis-single">\n          \u6211\u662f\u5355\u884c\u6587\u5b57\u6211\u662f\u5355\u884c\u6587\u5b57\u6211\u662f\u5355\u884c\u6587\u5b57\n        </div>\n\n        <div className="ellipsis-mutiline">\n          \u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\n          \u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\n          \u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\n        </div>\n      </div>\n    </div>\n  )\n}',__scope:{props:i}},function(){return o.a.createElement("div",{className:"ex-style"},o.a.createElement("h1",null,"\u53ef\u590d\u7528\u6837\u5f0f"),o.a.createElement("div",null,o.a.createElement("h2",null,"em(px) - em\u5355\u4f4d\u6362\u7b97"),o.a.createElement("div",{className:"case-em"},"rem(500) x  rem(100)")),o.a.createElement("div",null,o.a.createElement("h2",null,"1\u50cf\u7d20\u8fb9\u6846"),o.a.createElement("div",{className:"line-top"},"@include hairline-top(#ff3636)"),o.a.createElement("div",{className:"line-box"},o.a.createElement("div",null,o.a.createElement("pre",null,"\n      .box {\n        @include hairline-top(#ddd);\n        @include hairline-bottom(#ddd);\n        > div {\n          @include hairline-left(#ddd);\n          @include hairline-right(#ddd);\n        }\n      }\n      ")))),o.a.createElement("div",null,o.a.createElement("h2",null,"\u5b57\u7b26\u8d85\u51fa\u663e\u793a..."),o.a.createElement("div",{className:"ellipsis-single"},"\u6211\u662f\u5355\u884c\u6587\u5b57\u6211\u662f\u5355\u884c\u6587\u5b57\u6211\u662f\u5355\u884c\u6587\u5b57"),o.a.createElement("div",{className:"ellipsis-mutiline"},"\u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57 \u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57 \u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57\u6211\u662f\u591a\u884c\u6587\u5b57")))}))}},"./style/example.scss":function(e,n,i){var t=i("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style/example.scss");"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0};i("./node_modules/style-loader/lib/addStyles.js")(t,o);t.locals&&(e.exports=t.locals)}}]);