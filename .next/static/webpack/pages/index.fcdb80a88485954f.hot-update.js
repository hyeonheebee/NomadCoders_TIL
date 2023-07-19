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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n/* harmony import */ var _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useTweet */ \"./lib/client/useTweet.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    var ref8, ref1, ref2;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cookie = ref3[0], setCookie = ref3[1];\n    var ref4 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/main\"), 2), tokenFn = ref4[0], mainState = ref4[1];\n    var ref5 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/tweet\"), 2), tweetFn = ref5[0], userTweet = ref5[1];\n    var ref6 = (0,_lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), tweets = ref6.data, mutate = ref6.mutate;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref7 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref7.register, handleSubmit = ref7.handleSubmit;\n    var onLikeClick = function() {};\n    var onValid = function(data) {\n        var ref;\n        tweetFn({\n            data: data,\n            user: (ref = mainState.fetchData) === null || ref === void 0 ? void 0 : ref.user\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        setCookie(document.cookie);\n        tokenFn(cookie);\n        mutate(true);\n        if (((ref = mainState.fetchData) === null || ref === void 0 ? void 0 : ref.success) && !cookie) {\n            router.push(\"/log-in\");\n            setCookie(\"\");\n        }\n    }, [\n        router,\n        (ref8 = mainState.fetchData) === null || ref8 === void 0 ? void 0 : ref8.success,\n        userTweet\n    ]);\n    console.log(\"this is home success\", mainState.fetchData);\n    console.log(userTweet.fetchData, \"fetchData\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"home~\",\n            ((ref1 = mainState.fetchData) === null || ref1 === void 0 ? void 0 : ref1.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            (ref2 = mainState.fetchData) === null || ref2 === void 0 ? void 0 : ref2.name,\n                            \" \\uB2D8, \\uC5B4\\uC11C\\uC624\\uC138\\uC694 \\u2728\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit(onValid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                register: register(\"text\", {\n                                    required: false\n                                }),\n                                label: \"Tweeeeeets\",\n                                name: \"text\",\n                                type: \"text\",\n                                kind: \"text\",\n                                placeholder: \"Tweeeeeets\"\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: \"submit\"\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text:  true ? \"Unlike\" : 0,\n                        onClick: onLikeClick\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"please waiting..\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            tweets ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: tweets.tweets.map(function(tweet) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: tweet === null || tweet === void 0 ? void 0 : tweet.tweet\n                        }, void 0, false, {\n                            fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"j4O2ptRYMJD9hqQRcZwrd5wtAz8=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Ozs7O29CQUNFLEdBQ0osSUFBSTs7Ozs7O1lBQ0osQ0FDTjtDQUNIO0dBL0R1QnBDLEdBQUc7O1FBRUlGLCtEQUFXO1FBQ1hBLCtEQUFXO1FBQ1BDLDREQUFRO1FBRTFCUixrREFBUztRQUNXSSxvREFBTzs7O0FBUHBCSyxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCB1c2VGZXRjaGluZyBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VGZXRjaGluZ1wiO1xuaW1wb3J0IHVzZVR3ZWV0IGZyb20gXCIuLi9saWIvY2xpZW50L3VzZVR3ZWV0XCI7XG5cbmludGVyZmFjZSBJVGV4dEZvcm0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGxpa2U/OiBib29sZWFuO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbY29va2llLCBzZXRDb29raWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihcIlwiKTtcbiAgY29uc3QgW3Rva2VuRm4sIG1haW5TdGF0ZV0gPSB1c2VGZXRjaGluZyhcIi9hcGkvdXNlci9tYWluXCIpO1xuICBjb25zdCBbdHdlZXRGbiwgdXNlclR3ZWV0XSA9IHVzZUZldGNoaW5nKFwiL2FwaS91c2VyL3R3ZWV0XCIpO1xuICBjb25zdCB7IGRhdGE6IHR3ZWV0cywgbXV0YXRlIH0gPSB1c2VUd2VldCgpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08SVRleHRGb3JtPigpO1xuXG4gIGNvbnN0IG9uTGlrZUNsaWNrID0gKCkgPT4ge307XG4gIGNvbnN0IG9uVmFsaWQgPSAoZGF0YTogSVRleHRGb3JtKSA9PiB7XG4gICAgdHdlZXRGbih7IGRhdGEsIHVzZXI6IG1haW5TdGF0ZS5mZXRjaERhdGE/LnVzZXIgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb29raWUoZG9jdW1lbnQuY29va2llKTtcbiAgICB0b2tlbkZuKGNvb2tpZSk7XG4gICAgbXV0YXRlKHRydWUpO1xuICAgIGlmIChtYWluU3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmICFjb29raWUpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZy1pblwiKTtcbiAgICAgIHNldENvb2tpZShcIlwiKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIG1haW5TdGF0ZS5mZXRjaERhdGE/LnN1Y2Nlc3MsIHVzZXJUd2VldF0pO1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgaG9tZSBzdWNjZXNzXCIsIG1haW5TdGF0ZS5mZXRjaERhdGEpO1xuICBjb25zb2xlLmxvZyh1c2VyVHdlZXQuZmV0Y2hEYXRhLCBcImZldGNoRGF0YVwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgaG9tZX5cbiAgICAgIHttYWluU3RhdGUuZmV0Y2hEYXRhPy51c2VyID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMj57bWFpblN0YXRlLmZldGNoRGF0YT8ubmFtZX0g64uYLCDslrTshJzsmKTshLjsmpQg4pyoPC9oMj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoXCJ0ZXh0XCIsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBsYWJlbD1cIlR3ZWVlZWVldHNcIlxuICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAga2luZD1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR3ZWVlZWVldHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cInN1Ym1pdFwiPjwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0ZXh0PXt0cnVlID8gXCJVbmxpa2VcIiA6IFwibGlrZVwifVxuICAgICAgICAgICAgb25DbGljaz17b25MaWtlQ2xpY2t9XG4gICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuPnBsZWFzZSB3YWl0aW5nLi48L3NwYW4+XG4gICAgICApfVxuICAgICAge3R3ZWV0cyA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dHdlZXRzLnR3ZWV0cy5tYXAoKHR3ZWV0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuPnt0d2VldD8udHdlZXR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJCdXR0b24iLCJJbnB1dCIsInVzZUZldGNoaW5nIiwidXNlVHdlZXQiLCJBcHAiLCJtYWluU3RhdGUiLCJjb29raWUiLCJzZXRDb29raWUiLCJ0b2tlbkZuIiwidHdlZXRGbiIsInVzZXJUd2VldCIsImRhdGEiLCJ0d2VldHMiLCJtdXRhdGUiLCJyb3V0ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIm9uTGlrZUNsaWNrIiwib25WYWxpZCIsInVzZXIiLCJmZXRjaERhdGEiLCJkb2N1bWVudCIsInN1Y2Nlc3MiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgyIiwibmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibGFiZWwiLCJ0eXBlIiwia2luZCIsInBsYWNlaG9sZGVyIiwidGV4dCIsIm9uQ2xpY2siLCJzcGFuIiwibWFwIiwidHdlZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});