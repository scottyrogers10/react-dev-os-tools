!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.devOSTools=t(require("react")):e.devOSTools=t(e.react)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=4)}([function(t,r){t.exports=e},function(e,t){},function(e,t){},function(e,t,r){window,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,"Store",(function(){return d}));var a={isPending:!1,isError:!1,error:null,shouldThrowErrors:!0,shouldTrackAsyncState:!0},s=function(e){return Object.entries(e).reduce((function(e,t){var r=c(t,2),n=r[0],i=r[1],u="function"!=typeof i;return e[n]={configs:u?o({},a,{},i.configs):a,reducer:u?i.reducer:i},e}),{})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((function(e,t){var r=c(t,2),n=(r[0],r[1]),o=n.actions,i=void 0===o?{}:o,u=n.name,a=n.state,l=void 0===a?null:a;return e[u]={actions:s(i),state:l},e}),{})};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(t){var r=t.name,n=void 0===r?"":r,o=t.services,i=void 0===o?{}:o,c=t.types;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lastUid=0,this.name=n,this.services=i,this.subscribers={},this.types=l(c),this._typeConfigs=c}var t,r;return t=e,(r=[{key:"dispatch",value:function(e,t){var r=b(this._tokenizeAction(e),2),n=r[0],o=r[1],i=this.types[n],c=i.actions[o];return this._setState({typeName:n})(c.reducer({prevState:i.state,services:this.services},t)),this.types[n].state}},{key:"dispatchAsync",value:function(e,t){var r=b(this._tokenizeAction(e),2),n=r[0],o=r[1],i=this.types[n],c=i.actions[o],u=c.configs.shouldTrackAsyncState,a=this._setConfigs({actionName:o,typeName:n}),s=this._setState({typeName:n});return u&&a({isPending:!0,isError:!1,error:null}),Promise.resolve(c.reducer({prevState:i.state,services:this.services},t)).then((function(e){return u&&a({isPending:!1},!1),s(e),e})).catch((function(e){return u&&a({isPending:!1,isError:!0,error:e}),u?c.configs.shouldThrowErrors&&Promise.reject(e):Promise.reject(e)}))}},{key:"getError",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.error}},{key:"getState",value:function(e){return e?this.types[e].state:Object.entries(this.types).reduce((function(e,t){var r=b(t,2),n=r[0],o=r[1].state;return e[n]=o,e}),{})}},{key:"isError",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isError}},{key:"isPending",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isPending}},{key:"subscribe",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r="uid_".concat(++this.lastUid);return this.subscribers[r]=t,t(this),{onNotify:t,token:r,unsubscribe:function(){return e._unsubscribe(r)}}}},{key:"_notify",value:function(){var e=this;Object.values(this.subscribers).forEach((function(t){return t(e)}))}},{key:"reset",value:function(){this.lastUid=0,this.subscribers={},this.types=l(this._typeConfigs)}},{key:"_setConfigs",value:function(e){var t=this,r=e.actionName,n=e.typeName;return function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t.types[n].actions[r].configs;return t.types[n].actions[r].configs=p({},i,{},e),o&&t._notify()}}},{key:"_setState",value:function(e){var t=this,r=e.typeName;return function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.types[r].state=e,n&&t._notify()}}},{key:"_tokenizeAction",value:function(e){var t=b(e.split("."),1)[0];return[t,e.slice(t.length+1)]}},{key:"_unsubscribe",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;delete this.subscribers[e]}}])&&v(t.prototype,r),e}()}])},function(e,t,r){"use strict";r.r(t),r.d(t,"terminal",(function(){return Oe}));var n=r(0),o=r.n(n),i=r(1),c=r.n(i);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return o.a.createElement("div",{style:a(a({},c.a.container),e.style),title:e.title},e.children)};l.defaultProps={children:null,title:null};var f=o.a.createContext({});f.displayName="StoreContext";var p=f,y=function(e){return o.a.createElement("div",e)};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){return function(t,r){var o=b(Object(n.useState)(void 0===r?t(e):r),2),i=o[0],c=o[1];return Object(n.useEffect)((function(){var r=!1,n=e.subscribe((function(e){!r&&c(t(e))}));return function(){r=!0,n.unsubscribe()}}),[]),i}},d={prompt:{float:"left",paddingRight:"8px"},value:{wordBreak:"break-all"}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){var t=e.printStyles,r=e.style,n=e.type,i=e.value;return o.a.createElement(y,{style:g(g({},d.view),r)},"COMMAND"===n&&o.a.createElement(y,{style:d.prompt},"DEV-OS:"),o.a.createElement(y,{style:g(g({},d.value),t)},i))};j.defaultProps={printStyles:{},style:{},type:"",value:""};var w=j,P=r(2),S=r.n(P);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){var t=e.style,r=Object(n.useContext)(p),i=v(r)((function(e){return e.getState("history")}));return o.a.createElement(y,{style:D(D({},S.a.view),t)},i.map((function(e,t){return o.a.createElement(w,E({key:"HISTORY_ITEM_".concat(t)},e))})))};k.defaultProps={style:{}};var _=k,T={echo:function(e){var t=e.input;(0,e.print)(t.replace(/echo /g,""),{color:"#fff"})}},I=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.dispatch("history.addLine",{printStyles:r,type:"PRINT",value:t})}};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var H={view:{position:"relative",display:"flex",flex:1},prompt:{position:"absolute",top:0,left:0},textArea:{height:"21px",minHeight:"100%",width:"100%",border:"none",overflow:"hidden",wordBreak:"break-all",padding:"0px",outline:"none",backgroundColor:"transparent",color:"#89ff00",resize:"none",fontSize:"14px",fontWeight:600,fontFamily:"monospace",lineHeight:1.5},hiddenTextArea:{position:"absolute",top:0,left:0,sIndex:"-1000",minHeight:"0px",maxHeight:"none",height:"0px",visibility:"hidden"}};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var B=function(e){var t=e.style,r=Object(n.useRef)(null),i=Object(n.useRef)(null),c=W(Object(n.useState)(""),2),u=c[0],a=c[1],s=Object(n.useContext)(p),l=v(s)((function(e){return e.getState("ui")})).width;return Object(n.useEffect)((function(){!function(e,t){var r=e.current,n=t.current;if(r&&n){var o=n.scrollHeight;r.style.height!==o&&(r.style.height="".concat(o,"px"))}}(r,i)}),[u,l]),o.a.createElement(y,{style:$($({},H.view),t)},o.a.createElement(y,{style:H.prompt},"DEV-OS: "),o.a.createElement("textarea",{style:H.textArea,onChange:function(e){var t=e.target.value.replace(/^\s+/g,"");a(t)},onKeyDown:function(e){13===e.keyCode&&(s.dispatch("history.addLine",{type:"COMMAND",value:u}),function(e,t){var r=t.getState("commands"),n=e.trim(),o=N(n.split(" "),1)[0];M(M({},r),T)[o]({input:n,print:I(t)})}(u,s),a(""),e.preventDefault())},ref:r,rows:1,spellCheck:"false",value:" ".repeat(8)+u}),o.a.createElement("textarea",{style:$($({},H.textArea),H.hiddenTextArea),onChange:function(){},ref:i,rows:1,value:" ".repeat(8)+u}))};B.defaultProps={style:{}};var F=B,V={display:"flex",flexDirection:"column",height:"100%",width:"100%",fontFamily:"monospace",fontSize:"14px",fontWeight:600,color:"#89ff00",padding:"6px",boxSizing:"border-box",overflowY:"auto",overflowX:"hidden",lineHeight:1.5};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=function(e){var t=e.commands,r=e.store,i=e.style;return Object(n.useEffect)((function(){r.dispatch("commands.add",t)}),[]),o.a.createElement(y,{style:K(K({},V),i)},o.a.createElement(p.Provider,{value:r},o.a.createElement(_,null),o.a.createElement(F,null)))};G.defaultProps={commands:{},store:{},style:{}};var J=G,Q=r(3);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re={actions:{add:function(e,t){return ee(ee({},e.prevState),t)}},name:"commands",state:{}};function ne(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return oe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ie={actions:{addLine:function(e,t){var r=e.prevState;return[].concat(ne(r),[t])}},name:"history",state:[]};function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var se={actions:{resizeWidth:function(e,t){return ue(ue({},e.prevState),{},{width:t})}},name:"ui",state:{width:0}},le=function(){return new Q.Store({name:"terminal",types:{commands:re,history:ie,ui:se}})};function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){ye(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=le();return{label:"Terminal",configs:{component:function(r){return J(pe(pe({},r),{},{commands:e,store:t}))},size:{width:700,height:350},title:"Terminal",type:"TERMINAL",events:{onResize:function(e){return t.dispatch("ui.resizeWidth",e.size.width)}}}}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.commands,r=void 0===t?{}:t;return Object.values(r).length>0?function(){return be(r)}:be()}}])}));