/*! For license information please see principal.js.LICENSE.txt */
!function(_){var s={};function e(r){if(s[r])return s[r].exports;var c=s[r]={i:r,l:!1,exports:{}};return _[r].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=_,e.c=s,e.d=function(_,s,r){e.o(_,s)||Object.defineProperty(_,s,{configurable:!1,enumerable:!0,get:r})},e.r=function(_){Object.defineProperty(_,"__esModule",{value:!0})},e.n=function(_){var s=_&&_.__esModule?function(){return _.default}:function(){return _};return e.d(s,"a",s),s},e.o=function(_,s){return Object.prototype.hasOwnProperty.call(_,s)},e.p="",e(e.s="./src/principal.js")}({"./src/assets/css/estilo.css":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?")},"./src/assets/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilo.css */ "./src/assets/css/estilo.css");\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ "./src/assets/scss/index.scss");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/assets/index.js?')},"./src/assets/scss/index.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?")},"./src/pessoa.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\nclass Pessoa {\r\n    cumprimentar() {\r\n        return 'Bom dia!'\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?")},"./src/principal.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ "./src/pessoa.js");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ "./src/assets/index.js");\n\r\n\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__["default"]\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?')}});