"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var ref6;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cookie = ref1[0], setCookie = ref1[1];\n    var ref2 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/user/main\"), 2), tokenFn = ref2[0], state = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(\"\\uB0B4\\uAC00\\uB9CC\\uB4E0\\uCFE0\\uD0A4~\", cookie);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref3, ref4, ref5;\n        setCookie(document.cookie);\n        tokenFn(cookie);\n        //   if (state) {\n        if (((ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.success) && !((ref3 = state.fetchData) === null || ref3 === void 0 ? void 0 : ref3.user)) {\n            router.push(\"/log-in\");\n        } else if (((ref4 = state.fetchData) === null || ref4 === void 0 ? void 0 : ref4.success) && ((ref5 = state.fetchData) === null || ref5 === void 0 ? void 0 : ref5.user)) {\n            console.log(\"this is home success\", state.fetchData);\n        }\n    }, [\n        (ref6 = state.fetchData) === null || ref6 === void 0 ? void 0 : ref6.user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"home~\"\n    }, void 0, false, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n};\n_s(App, \"Gz1nyAqex6DDM/rOSwqvTwLnGjk=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRztBQUVDOztBQUtyQyxTQUFTSyxHQUFHLEdBQUc7UUFnQnhCQyxJQUFlOztJQWZuQixJQUE0QkgsSUFBZ0MsR0FBaENBLCtDQUFRLENBQXFCLEVBQUUsQ0FBQyxFQVQ5RCxNQVNlLEdBQWVBLElBQWdDLEdBQS9DLEVBVGYsU0FTMEIsR0FBSUEsSUFBZ0MsR0FBcEM7SUFDeEIsSUFBeUJDLElBQTZCLGtCQUE3QkEsbUVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUEvQ0ssT0FBTyxHQUFXTCxJQUE2QixHQUF4QyxFQUFFRSxLQUFLLEdBQUlGLElBQTZCLEdBQWpDO0lBQ3JCLElBQU1NLE1BQU0sR0FBR1Ysc0RBQVMsRUFBRTtJQUUxQlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQVMsRUFBRUwsTUFBTSxDQUFDLENBQUM7SUFFL0JMLGdEQUFTLENBQUMsV0FBTTtZQUlWSSxHQUFlLEVBQWNBLElBQWUsRUFFckNBLElBQWUsRUFBYUEsSUFBZTtRQUx0REUsU0FBUyxDQUFDSyxRQUFRLENBQUNOLE1BQU0sQ0FBQyxDQUFDO1FBQzNCRSxPQUFPLENBQUNGLE1BQU0sQ0FBQyxDQUFDO1FBQ2hCLGlCQUFpQjtRQUNqQixJQUFJRCxDQUFBQSxDQUFBQSxHQUFlLEdBQWZBLEtBQUssQ0FBQ1EsU0FBUyxjQUFmUixHQUFlLFdBQVMsR0FBeEJBLEtBQUFBLENBQXdCLEdBQXhCQSxHQUFlLENBQUVTLE9BQU8sS0FBSSxDQUFDVCxDQUFBQSxDQUFBQSxJQUFlLEdBQWZBLEtBQUssQ0FBQ1EsU0FBUyxjQUFmUixJQUFlLFdBQU0sR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxJQUFlLENBQUVVLElBQUksR0FBRTtZQUN0RE4sTUFBTSxDQUFDTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEIsTUFBTSxJQUFJWCxDQUFBQSxDQUFBQSxJQUFlLEdBQWZBLEtBQUssQ0FBQ1EsU0FBUyxjQUFmUixJQUFlLFdBQVMsR0FBeEJBLEtBQUFBLENBQXdCLEdBQXhCQSxJQUFlLENBQUVTLE9BQU8sS0FBSVQsQ0FBQUEsQ0FBQUEsSUFBZSxHQUFmQSxLQUFLLENBQUNRLFNBQVMsY0FBZlIsSUFBZSxXQUFNLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsSUFBZSxDQUFFVSxJQUFJLEdBQUU7WUFDNURMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixFQUFFTixLQUFLLENBQUNRLFNBQVMsQ0FBQyxDQUFDO1NBQ3REO0tBQ0YsRUFBRTtRQUFDUixDQUFBQSxJQUFlLEdBQWZBLEtBQUssQ0FBQ1EsU0FBUyxjQUFmUixJQUFlLFdBQU0sR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxJQUFlLENBQUVVLElBQUk7S0FBQyxDQUFDLENBQUM7SUFFNUIscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsT0FBSzs7Ozs7WUFBTSxDQUFDO0NBQ3pCO0dBbkJ1QmIsR0FBRzs7UUFFQUQsK0RBQVc7UUFDckJKLGtEQUFTOzs7QUFIRkssS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCB1c2VGZXRjaGluZyBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VGZXRjaGluZ1wiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlVXNlclwiO1xuXG5pbXBvcnQgeyBmaW5kVG9rZW5TdHJpbmcgfSBmcm9tIFwiLi4vbGliL2NsaWVudC91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KFwiXCIpO1xuICBjb25zdCBbdG9rZW5Gbiwgc3RhdGVdID0gdXNlRmV0Y2hpbmcoXCIvYXBpL3VzZXIvbWFpblwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc29sZS5sb2coXCLrgrTqsIDrp4zrk6Dsv6DtgqR+XCIsIGNvb2tpZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb29raWUoZG9jdW1lbnQuY29va2llKTtcbiAgICB0b2tlbkZuKGNvb2tpZSk7XG4gICAgLy8gICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmICFzdGF0ZS5mZXRjaERhdGE/LnVzZXIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZy1pblwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZldGNoRGF0YT8uc3VjY2VzcyAmJiBzdGF0ZS5mZXRjaERhdGE/LnVzZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBob21lIHN1Y2Nlc3NcIiwgc3RhdGUuZmV0Y2hEYXRhKTtcbiAgICB9XG4gIH0sIFtzdGF0ZS5mZXRjaERhdGE/LnVzZXJdKTtcblxuICByZXR1cm4gPGRpdj5ob21lfjwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRmV0Y2hpbmciLCJBcHAiLCJzdGF0ZSIsImNvb2tpZSIsInNldENvb2tpZSIsInRva2VuRm4iLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJmZXRjaERhdGEiLCJzdWNjZXNzIiwidXNlciIsInB1c2giLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});