"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./lib/client/utils.tsx":
/*!******************************!*\
  !*** ./lib/client/utils.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decodeURIToken\": function() { return /* binding */ decodeURIToken; },\n/* harmony export */   \"deleteCookie\": function() { return /* binding */ deleteCookie; },\n/* harmony export */   \"findTokenString\": function() { return /* binding */ findTokenString; },\n/* harmony export */   \"getName\": function() { return /* binding */ getName; },\n/* harmony export */   \"getPassword\": function() { return /* binding */ getPassword; },\n/* harmony export */   \"setTokenCookie\": function() { return /* binding */ setTokenCookie; }\n/* harmony export */ });\n/* harmony import */ var _root_develope_carrot_final_carrot_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _root_develope_carrot_final_carrot_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_root_develope_carrot_final_carrot_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nfunction getName(url) {\n    return _getName.apply(this, arguments);\n}\nfunction _getName() {\n    _getName = _asyncToGenerator(_root_develope_carrot_final_carrot_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var data, name;\n        return _root_develope_carrot_final_carrot_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url);\n                case 2:\n                    _ctx.next = 4;\n                    return _ctx.sent.json();\n                case 4:\n                    data = _ctx.sent;\n                    name = data.words[0];\n                    return _ctx.abrupt(\"return\", name);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getName.apply(this, arguments);\n}\nfunction getPassword() {\n    var charset = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()\";\n    var password = \"\";\n    for(var i = 0; i < 24; i++){\n        var randomIndex = Math.floor(Math.random() * charset.length);\n        password += charset.charAt(randomIndex);\n    }\n    return password;\n}\nfunction deleteCookie(token) {\n    var expiredDate = new Date();\n    expiredDate.setTime(expiredDate.getTime() - 1);\n    document.cookie = \"token=;expires=\".concat(expiredDate.toUTCString(), \";path=/\");\n}\nfunction setTokenCookie(token) {\n    var expires = new Date();\n    expires.setDate(expires.getDate() + 7);\n    document.cookie = \"token=\".concat(encodeURIComponent(token), \";expires=\").concat(expires.toUTCString(), \"; path=/\");\n}\nfunction findTokenString(cookie) {\n    var index = cookie.indexOf(\"token\");\n    var token;\n    if (index !== -1) {\n        token = cookie.substring(index + 6);\n    }\n    console.log(\"findTOKEN STRING\");\n    return token;\n}\nfunction decodeURIToken(encodeToken) {\n    var token = decodeURIComponent(encodeToken ? encodeToken : \"\");\n    return token;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3V0aWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFlQSxPQUFPLENBQUNDLEdBQVc7V0FBbkJELFFBQU87Q0FJNUI7U0FKcUJBLFFBQU87SUFBUEEsUUFBTyxHQUF0Qix1TEFBdUJDLEdBQVcsRUFBbUI7WUFDcERDLElBQUksRUFDSkMsSUFBSTs7Ozs7MkJBRGdCQyxLQUFLLENBQUNILEdBQUcsQ0FBQzs7OzJCQUFqQixVQUFtQkksSUFBSSxFQUFFOztvQkFBdENILElBQUksWUFBa0M7b0JBQ3RDQyxJQUFJLEdBQUdELElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lEQUNwQkgsSUFBSTs7Ozs7O0tBQ1o7V0FKcUJILFFBQU87O0FBS3RCLFNBQVNPLFdBQVcsR0FBRztJQUM1QixJQUFNQyxPQUFPLEdBQ1gsMEVBQTBFO0lBQzVFLElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLENBQUU7UUFDM0IsSUFBSUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR04sT0FBTyxDQUFDTyxNQUFNLENBQUM7UUFDNUROLFFBQVEsSUFBSUQsT0FBTyxDQUFDUSxNQUFNLENBQUNMLFdBQVcsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsT0FBT0YsUUFBUSxDQUFDO0NBQ2pCO0FBQ00sU0FBU1EsWUFBWSxDQUFDQyxLQUFhLEVBQUU7SUFDMUMsSUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUksRUFBRTtJQUM5QkQsV0FBVyxDQUFDRSxPQUFPLENBQUNGLFdBQVcsQ0FBQ0csT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0NDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLGlCQUFnQixDQUE0QixNQUFPLENBQWpDTCxXQUFXLENBQUNNLFdBQVcsRUFBRSxFQUFDLFNBQU8sQ0FBQyxDQUFDO0NBQ3hFO0FBQ00sU0FBU0MsY0FBYyxDQUFDUixLQUFhLEVBQUU7SUFDNUMsSUFBTVMsT0FBTyxHQUFHLElBQUlQLElBQUksRUFBRTtJQUMxQk8sT0FBTyxDQUFDQyxPQUFPLENBQUNELE9BQU8sQ0FBQ0UsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkNOLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLFFBQU8sQ0FFWkcsTUFBcUIsQ0FGUEcsa0JBQWtCLENBQzNDWixLQUFLLENBQ04sRUFBQyxXQUFTLENBQXdCLE9BQVEsQ0FBOUJTLE9BQU8sQ0FBQ0YsV0FBVyxFQUFFLEVBQUMsVUFBUSxDQUFDLENBQUM7Q0FDOUM7QUFFTSxTQUFTTSxlQUFlLENBQUNQLE1BQWMsRUFBRTtJQUM5QyxJQUFNUSxLQUFLLEdBQUdSLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNyQyxJQUFJZixLQUFLO0lBQ1QsSUFBSWMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2hCZCxLQUFLLEdBQUdNLE1BQU0sQ0FBQ1UsU0FBUyxDQUFDRixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDckM7SUFDREcsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNoQyxPQUFPbEIsS0FBSyxDQUFDO0NBQ2Q7QUFDTSxTQUFTbUIsY0FBYyxDQUFDQyxXQUErQixFQUFFO0lBQzlELElBQU1wQixLQUFLLEdBQUdxQixrQkFBa0IsQ0FBQ0QsV0FBVyxHQUFHQSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2hFLE9BQU9wQixLQUFLLENBQUM7Q0FDZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50L3V0aWxzLnRzeD9iYWMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROYW1lKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IChhd2FpdCBmZXRjaCh1cmwpKS5qc29uKCk7XG4gIGNvbnN0IG5hbWUgPSBkYXRhLndvcmRzWzBdO1xuICByZXR1cm4gbmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXNzd29yZCgpIHtcbiAgY29uc3QgY2hhcnNldCA9XG4gICAgXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OSFAIyQlXiYqKClcIjtcbiAgbGV0IHBhc3N3b3JkID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnNldC5sZW5ndGgpO1xuICAgIHBhc3N3b3JkICs9IGNoYXJzZXQuY2hhckF0KHJhbmRvbUluZGV4KTtcbiAgfVxuICByZXR1cm4gcGFzc3dvcmQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKHRva2VuOiBzdHJpbmcpIHtcbiAgY29uc3QgZXhwaXJlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICBleHBpcmVkRGF0ZS5zZXRUaW1lKGV4cGlyZWREYXRlLmdldFRpbWUoKSAtIDEpO1xuICBkb2N1bWVudC5jb29raWUgPSBgdG9rZW49O2V4cGlyZXM9JHtleHBpcmVkRGF0ZS50b1VUQ1N0cmluZygpfTtwYXRoPS9gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuQ29va2llKHRva2VuOiBzdHJpbmcpIHtcbiAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gIGV4cGlyZXMuc2V0RGF0ZShleHBpcmVzLmdldERhdGUoKSArIDcpO1xuICBkb2N1bWVudC5jb29raWUgPSBgdG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgdG9rZW5cbiAgKX07ZXhwaXJlcz0ke2V4cGlyZXMudG9VVENTdHJpbmcoKX07IHBhdGg9L2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVG9rZW5TdHJpbmcoY29va2llOiBzdHJpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBjb29raWUuaW5kZXhPZihcInRva2VuXCIpO1xuICBsZXQgdG9rZW47XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0b2tlbiA9IGNvb2tpZS5zdWJzdHJpbmcoaW5kZXggKyA2KTtcbiAgfVxuICBjb25zb2xlLmxvZyhcImZpbmRUT0tFTiBTVFJJTkdcIik7XG4gIHJldHVybiB0b2tlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVVUklUb2tlbihlbmNvZGVUb2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gIGNvbnN0IHRva2VuID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVRva2VuID8gZW5jb2RlVG9rZW4gOiBcIlwiKTtcbiAgcmV0dXJuIHRva2VuO1xufVxuIl0sIm5hbWVzIjpbImdldE5hbWUiLCJ1cmwiLCJkYXRhIiwibmFtZSIsImZldGNoIiwianNvbiIsIndvcmRzIiwiZ2V0UGFzc3dvcmQiLCJjaGFyc2V0IiwicGFzc3dvcmQiLCJpIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjaGFyQXQiLCJkZWxldGVDb29raWUiLCJ0b2tlbiIsImV4cGlyZWREYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZG9jdW1lbnQiLCJjb29raWUiLCJ0b1VUQ1N0cmluZyIsInNldFRva2VuQ29va2llIiwiZXhwaXJlcyIsInNldERhdGUiLCJnZXREYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmluZFRva2VuU3RyaW5nIiwiaW5kZXgiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwiY29uc29sZSIsImxvZyIsImRlY29kZVVSSVRva2VuIiwiZW5jb2RlVG9rZW4iLCJkZWNvZGVVUklDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client/utils.tsx\n");

/***/ })

});