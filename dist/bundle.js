(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["devOSTools"] = factory(require("react"));
	else
		root["devOSTools"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/generic-data-chamber/dist/bundle.js":
/*!**********************************************************!*\
  !*** ./node_modules/generic-data-chamber/dist/bundle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,\"a\",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=\"/\",r(r.s=0)}([function(e,t,r){\"use strict\";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(\"undefined\"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if(\"string\"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);\"Object\"===r&&e.constructor&&(r=e.constructor.name);if(\"Map\"===r||\"Set\"===r)return Array.from(r);if(\"Arguments\"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,\"Store\",(function(){return d}));var c={isPending:!1,isError:!1,error:null,shouldThrowErrors:!0,shouldTrackAsyncState:!0},a=function(e){return Object.entries(e).reduce((function(e,t){var r=u(t,2),n=r[0],o=r[1],s=\"function\"!=typeof o;return e[n]={configs:s?i({},c,{},o.configs):c,reducer:s?o.reducer:o},e}),{})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((function(e,t){var r=u(t,2),n=(r[0],r[1]),i=n.actions,o=void 0===i?{}:i,s=n.name,c=n.state,f=void 0===c?null:c;return e[s]={actions:a(o),state:f},e}),{})};function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(\"undefined\"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if(\"string\"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);\"Object\"===r&&e.constructor&&(r=e.constructor.name);if(\"Map\"===r||\"Set\"===r)return Array.from(r);if(\"Arguments\"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(t){var r=t.name,n=void 0===r?\"\":r,i=t.services,o=void 0===i?{}:i,u=t.types;!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.lastUid=0,this.name=n,this.services=o,this.subscribers={},this.types=f(u),this._typeConfigs=u}var t,r,n;return t=e,(r=[{key:\"dispatch\",value:function(e,t){var r=b(this._tokenizeAction(e),2),n=r[0],i=r[1],o=this.types[n],u=o.actions[i];return this._setState({typeName:n})(u.reducer({prevState:o.state,services:this.services},t)),this.types[n].state}},{key:\"dispatchAsync\",value:function(e,t){var r=b(this._tokenizeAction(e),2),n=r[0],i=r[1],o=this.types[n],u=o.actions[i],s=u.configs.shouldTrackAsyncState,c=this._setConfigs({actionName:i,typeName:n}),a=this._setState({typeName:n});return s&&c({isPending:!0,isError:!1,error:null}),Promise.resolve(u.reducer({prevState:o.state,services:this.services},t)).then((function(e){return s&&c({isPending:!1},!1),a(e),e})).catch((function(e){return s&&c({isPending:!1,isError:!0,error:e}),s?u.configs.shouldThrowErrors&&Promise.reject(e):Promise.reject(e)}))}},{key:\"getError\",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.error}},{key:\"getState\",value:function(e){return e?this.types[e].state:Object.entries(this.types).reduce((function(e,t){var r=b(t,2),n=r[0],i=r[1].state;return e[n]=i,e}),{})}},{key:\"isError\",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isError}},{key:\"isPending\",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isPending}},{key:\"subscribe\",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r=\"uid_\".concat(++this.lastUid);return this.subscribers[r]=t,t(this),{onNotify:t,token:r,unsubscribe:function(){return e._unsubscribe(r)}}}},{key:\"_notify\",value:function(){var e=this;Object.values(this.subscribers).forEach((function(t){return t(e)}))}},{key:\"reset\",value:function(){this.lastUid=0,this.subscribers={},this.types=f(this._typeConfigs)}},{key:\"_setConfigs\",value:function(e){var t=this,r=e.actionName,n=e.typeName;return function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.types[n].actions[r].configs;return t.types[n].actions[r].configs=y({},o,{},e),i&&t._notify()}}},{key:\"_setState\",value:function(e){var t=this,r=e.typeName;return function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.types[r].state=e,n&&t._notify()}}},{key:\"_tokenizeAction\",value:function(e){var t=b(e.split(\".\"),1)[0];return[t,e.slice(t.length+1)]}},{key:\"_unsubscribe\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;delete this.subscribers[e]}}])&&h(t.prototype,r),n&&h(t,n),e}()}])}));\n\n//# sourceURL=webpack://devOSTools/./node_modules/generic-data-chamber/dist/bundle.js?");

/***/ }),

/***/ "./src/dev-tools/index.js":
/*!********************************!*\
  !*** ./src/dev-tools/index.js ***!
  \********************************/
/*! exports provided: terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminal */ \"./src/dev-tools/terminal/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"terminal\", function() { return _terminal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/CommandHistory/index.js":
/*!******************************************************************!*\
  !*** ./src/dev-tools/terminal/component/CommandHistory/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../library/ui */ \"./src/library/ui/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/dev-tools/terminal/component/CommandHistory/styles.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar CommandHistory = function CommandHistory(_ref) {\n  var style = _ref.style;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__[\"View\"], {\n    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2___default.a.view), style)\n  });\n};\n\nCommandHistory.defaultProps = {\n  style: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommandHistory);\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/CommandHistory/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/CommandHistory/styles.js":
/*!*******************************************************************!*\
  !*** ./src/dev-tools/terminal/component/CommandHistory/styles.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/CommandHistory/styles.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/CommandLine/helpers/index.js":
/*!***********************************************************************!*\
  !*** ./src/dev-tools/terminal/component/CommandLine/helpers/index.js ***!
  \***********************************************************************/
/*! exports provided: setTextAreaHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _set_text_area_height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-text-area-height */ \"./src/dev-tools/terminal/component/CommandLine/helpers/set-text-area-height/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setTextAreaHeight\", function() { return _set_text_area_height__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/CommandLine/helpers/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/CommandLine/helpers/set-text-area-height/index.js":
/*!********************************************************************************************!*\
  !*** ./src/dev-tools/terminal/component/CommandLine/helpers/set-text-area-height/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (textAreaRef, hiddenTextAreaRef) {\n  var textArea = textAreaRef.current;\n  var hiddenTextArea = hiddenTextAreaRef.current;\n\n  if (textArea && hiddenTextArea) {\n    var scrollHeight = hiddenTextArea.scrollHeight;\n    textArea.style.height = \"\".concat(scrollHeight, \"px\");\n  }\n});\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/CommandLine/helpers/set-text-area-height/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/CommandLine/index.js":
/*!***************************************************************!*\
  !*** ./src/dev-tools/terminal/component/CommandLine/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../library/ui */ \"./src/library/ui/index.js\");\n/* harmony import */ var _tools_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/hooks */ \"./src/dev-tools/terminal/tools/hooks/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/dev-tools/terminal/component/CommandLine/helpers/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/dev-tools/terminal/component/CommandLine/styles.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar CommandLine = function CommandLine(_ref) {\n  var style = _ref.style;\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  var hiddenTextAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var _useStore = Object(_tools_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(function (store) {\n    return store.getState(\"ui\");\n  }),\n      width = _useStore.width;\n\n  var handleChange = function handleChange(event) {\n    var trimmedInput = event.target.value.replace(/^\\s+/g, \"\");\n    setValue(trimmedInput);\n  };\n\n  var handleKeyDown = function handleKeyDown(event) {\n    var enterKeyCode = 13;\n    var keyCode = event.keyCode;\n\n    if (keyCode === enterKeyCode) {\n      event.preventDefault();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"setTextAreaHeight\"])(textAreaRef, hiddenTextAreaRef);\n  }, [value, width]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__[\"View\"], {\n    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].view), style)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__[\"View\"], {\n    style: _styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].prompt\n  }, \"DEV-OS: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    style: _styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].textArea,\n    onChange: handleChange,\n    onKeyDown: handleKeyDown,\n    ref: textAreaRef,\n    rows: 1,\n    spellCheck: \"false\",\n    value: \" \".repeat(8) + value\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].textArea), _styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hiddenTextArea),\n    onChange: function onChange() {},\n    ref: hiddenTextAreaRef,\n    rows: 1,\n    value: \" \".repeat(8) + value\n  }));\n};\n\nCommandLine.defaultProps = {\n  style: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommandLine);\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/CommandLine/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/CommandLine/styles.js":
/*!****************************************************************!*\
  !*** ./src/dev-tools/terminal/component/CommandLine/styles.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  view: {\n    position: \"relative\",\n    display: \"flex\",\n    flex: 1\n  },\n  prompt: {\n    position: \"absolute\",\n    top: 0,\n    left: 0\n  },\n  textArea: {\n    height: \"21px\",\n    minHeight: \"100%\",\n    width: \"100%\",\n    border: \"none\",\n    overflow: \"hidden\",\n    wordBreak: \"break-all\",\n    padding: \"0px\",\n    outline: \"none\",\n    backgroundColor: \"transparent\",\n    color: \"#89ff00\",\n    resize: \"none\",\n    fontSize: \"14px\",\n    fontWeight: 600,\n    fontFamily: \"monospace\",\n    lineHeight: 1.5\n  },\n  hiddenTextArea: {\n    position: \"absolute\",\n    top: 0,\n    left: 0,\n    sIndex: \"-1000\",\n    minHeight: \"0px\",\n    maxHeight: \"none\",\n    height: \"0px\",\n    visibility: \"hidden\"\n  }\n});\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/CommandLine/styles.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/index.js":
/*!***************************************************!*\
  !*** ./src/dev-tools/terminal/component/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/ui */ \"./src/library/ui/index.js\");\n/* harmony import */ var _CommandHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommandHistory */ \"./src/dev-tools/terminal/component/CommandHistory/index.js\");\n/* harmony import */ var _CommandLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommandLine */ \"./src/dev-tools/terminal/component/CommandLine/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/dev-tools/terminal/component/styles.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar Terminal = function Terminal(_ref) {\n  var style = _ref.style;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__[\"View\"], {\n    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].view), style)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommandHistory__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommandLine__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\nTerminal.defaultProps = {\n  style: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Terminal);\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/component/styles.js":
/*!****************************************************!*\
  !*** ./src/dev-tools/terminal/component/styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  view: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    height: \"100%\",\n    width: \"100%\",\n    fontFamily: \"monospace\",\n    fontSize: \"14px\",\n    fontWeight: 600,\n    color: \"#89ff00\",\n    padding: \"6px\",\n    boxSizing: \"border-box\",\n    overflowY: \"auto\",\n    overflowX: \"hidden\",\n    lineHeight: 1.5\n  }\n});\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/component/styles.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/index.js":
/*!*****************************************!*\
  !*** ./src/dev-tools/terminal/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/dev-tools/terminal/component/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/dev-tools/terminal/store/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  label: \"Terminal\",\n  configs: {\n    component: _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    size: {\n      width: 700,\n      height: 350\n    },\n    title: \"Terminal\",\n    type: \"TERMINAL\",\n    events: {\n      onResize: function onResize(dimensions) {\n        return _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatch(\"ui.resizeWidth\", dimensions.size.width);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/store/commands/index.js":
/*!********************************************************!*\
  !*** ./src/dev-tools/terminal/store/commands/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  actions: {},\n  name: \"commands\",\n  state: {\n    history: []\n  }\n});\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/store/commands/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/store/index.js":
/*!***********************************************!*\
  !*** ./src/dev-tools/terminal/store/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var generic_data_chamber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generic-data-chamber */ \"./node_modules/generic-data-chamber/dist/bundle.js\");\n/* harmony import */ var generic_data_chamber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(generic_data_chamber__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ \"./src/dev-tools/terminal/store/commands/index.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/dev-tools/terminal/store/ui/index.js\");\n // Store Types //\n\n\n\nvar store = new generic_data_chamber__WEBPACK_IMPORTED_MODULE_0__[\"Store\"]({\n  name: \"terminal\",\n  types: {\n    commands: _commands__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ui: _ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/store/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/store/ui/index.js":
/*!**************************************************!*\
  !*** ./src/dev-tools/terminal/store/ui/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resize_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize-width */ \"./src/dev-tools/terminal/store/ui/resize-width/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  actions: {\n    resizeWidth: _resize_width__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  name: \"ui\",\n  state: {\n    width: 0\n  }\n});\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/store/ui/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/store/ui/resize-width/index.js":
/*!***************************************************************!*\
  !*** ./src/dev-tools/terminal/store/ui/resize-width/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref, width) {\n  var prevState = _ref.prevState;\n  return _objectSpread(_objectSpread({}, prevState), {}, {\n    width: width\n  });\n});\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/store/ui/resize-width/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/tools/hooks/index.js":
/*!*****************************************************!*\
  !*** ./src/dev-tools/terminal/tools/hooks/index.js ***!
  \*****************************************************/
/*! exports provided: useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _use_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-store */ \"./src/dev-tools/terminal/tools/hooks/use-store/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return _use_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/tools/hooks/index.js?");

/***/ }),

/***/ "./src/dev-tools/terminal/tools/hooks/use-store/index.js":
/*!***************************************************************!*\
  !*** ./src/dev-tools/terminal/tools/hooks/use-store/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ \"./src/dev-tools/terminal/store/index.js\");\n/* harmony import */ var _library_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../library/hooks */ \"./src/library/hooks/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_library_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useStore\"])(_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n//# sourceURL=webpack://devOSTools/./src/dev-tools/terminal/tools/hooks/use-store/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dev_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev-tools */ \"./src/dev-tools/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"terminal\", function() { return _dev_tools__WEBPACK_IMPORTED_MODULE_0__[\"terminal\"]; });\n\n\n\n//# sourceURL=webpack://devOSTools/./src/index.js?");

/***/ }),

/***/ "./src/library/hooks/index.js":
/*!************************************!*\
  !*** ./src/library/hooks/index.js ***!
  \************************************/
/*! exports provided: useHover, useMergeState, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _use_hover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-hover */ \"./src/library/hooks/use-hover/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useHover\", function() { return _use_hover__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _use_merge_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-merge-state */ \"./src/library/hooks/use-merge-state/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useMergeState\", function() { return _use_merge_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _use_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-store */ \"./src/library/hooks/use-store/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return _use_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://devOSTools/./src/library/hooks/index.js?");

/***/ }),

/***/ "./src/library/hooks/use-hover/index.js":
/*!**********************************************!*\
  !*** ./src/library/hooks/use-hover/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isHovered = _useState2[0],\n      setIsHovered = _useState2[1];\n\n  var handleMouseOver = function handleMouseOver() {\n    return setIsHovered(true);\n  };\n\n  var handleMouseLeave = function handleMouseLeave() {\n    return setIsHovered(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var elem = ref.current;\n\n    if (elem) {\n      elem.addEventListener(\"mouseover\", handleMouseOver);\n      elem.addEventListener(\"mouseleave\", handleMouseLeave);\n      return function () {\n        elem.removeEventListener(\"mouseover\", handleMouseOver);\n        elem.removeEventListener(\"mouseleave\", handleMouseLeave);\n      };\n    }\n  }, [ref.current]);\n  return {\n    isHovered: isHovered,\n    ref: ref,\n    setIsHovered: setIsHovered\n  };\n});\n\n//# sourceURL=webpack://devOSTools/./src/library/hooks/use-hover/index.js?");

/***/ }),

/***/ "./src/library/hooks/use-merge-state/index.js":
/*!****************************************************!*\
  !*** ./src/library/hooks/use-merge-state/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var defaultState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultState),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var mergeState = function mergeState(updatedState) {\n    if (updatedState instanceof Function) {\n      setState(function (prevState) {\n        return _objectSpread(_objectSpread({}, prevState), updatedState(prevState));\n      });\n    } else {\n      setState(function (prevState) {\n        return _objectSpread(_objectSpread({}, prevState), updatedState);\n      });\n    }\n  };\n\n  return [state, mergeState];\n});\n\n//# sourceURL=webpack://devOSTools/./src/library/hooks/use-merge-state/index.js?");

/***/ }),

/***/ "./src/library/hooks/use-store/index.js":
/*!**********************************************!*\
  !*** ./src/library/hooks/use-store/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (store) {\n  return function (mapStoreToState, defaultState) {\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultState === undefined ? mapStoreToState(store) : defaultState),\n        _useState2 = _slicedToArray(_useState, 2),\n        state = _useState2[0],\n        setState = _useState2[1];\n\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n      var isCanceled = false;\n      var subscriber = store.subscribe(function (currentStore) {\n        !isCanceled && setState(mapStoreToState(currentStore));\n      });\n      return function () {\n        isCanceled = true;\n        subscriber.unsubscribe();\n      };\n    }, []);\n    return state;\n  };\n});\n\n//# sourceURL=webpack://devOSTools/./src/library/hooks/use-store/index.js?");

/***/ }),

/***/ "./src/library/ui/common/Text/index.js":
/*!*********************************************!*\
  !*** ./src/library/ui/common/Text/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/library/ui/common/Text/styles.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Text = function Text(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_1___default.a.container), props.style),\n    title: props.title\n  }, props.children);\n};\n\nText.defaultProps = {\n  children: null,\n  title: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Text);\n\n//# sourceURL=webpack://devOSTools/./src/library/ui/common/Text/index.js?");

/***/ }),

/***/ "./src/library/ui/common/Text/styles.js":
/*!**********************************************!*\
  !*** ./src/library/ui/common/Text/styles.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://devOSTools/./src/library/ui/common/Text/styles.js?");

/***/ }),

/***/ "./src/library/ui/common/index.js":
/*!****************************************!*\
  !*** ./src/library/ui/common/index.js ***!
  \****************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ \"./src/library/ui/common/Text/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return _Text__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://devOSTools/./src/library/ui/common/index.js?");

/***/ }),

/***/ "./src/library/ui/index.js":
/*!*********************************!*\
  !*** ./src/library/ui/index.js ***!
  \*********************************/
/*! exports provided: Text, View, ViewRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/library/ui/common/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return _common__WEBPACK_IMPORTED_MODULE_0__[\"Text\"]; });\n\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ \"./src/library/ui/views/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return _views__WEBPACK_IMPORTED_MODULE_1__[\"View\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ViewRef\", function() { return _views__WEBPACK_IMPORTED_MODULE_1__[\"ViewRef\"]; });\n\n\n\n\n//# sourceURL=webpack://devOSTools/./src/library/ui/index.js?");

/***/ }),

/***/ "./src/library/ui/views/View/index.js":
/*!********************************************!*\
  !*** ./src/library/ui/views/View/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar View = function View(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack://devOSTools/./src/library/ui/views/View/index.js?");

/***/ }),

/***/ "./src/library/ui/views/ViewRef/index.js":
/*!***********************************************!*\
  !*** ./src/library/ui/views/ViewRef/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nvar ViewRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", _extends({}, props, {\n    ref: ref\n  }));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewRef);\n\n//# sourceURL=webpack://devOSTools/./src/library/ui/views/ViewRef/index.js?");

/***/ }),

/***/ "./src/library/ui/views/index.js":
/*!***************************************!*\
  !*** ./src/library/ui/views/index.js ***!
  \***************************************/
/*! exports provided: View, ViewRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/library/ui/views/View/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _ViewRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewRef */ \"./src/library/ui/views/ViewRef/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ViewRef\", function() { return _ViewRef__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack://devOSTools/./src/library/ui/views/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://devOSTools/external_%22react%22?");

/***/ })

/******/ });
});