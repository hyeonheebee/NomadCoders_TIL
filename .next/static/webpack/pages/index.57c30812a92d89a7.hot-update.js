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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n/* harmony import */ var _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useTweet */ \"./lib/client/useTweet.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    var ref8, ref1, ref2;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cookie = ref3[0], setCookie = ref3[1];\n    var ref4 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/main\"), 2), tokenFn = ref4[0], mainState = ref4[1];\n    var ref5 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/tweet\"), 2), tweetFn = ref5[0], userTweet = ref5[1];\n    var ref6 = (0,_lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), tweets = ref6.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref7 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref7.register, handleSubmit = ref7.handleSubmit;\n    var onLikeClick = function() {};\n    var onValid = function(data) {\n        var ref;\n        tweetFn({\n            data: data,\n            user: (ref = mainState.fetchData) === null || ref === void 0 ? void 0 : ref.user\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref9, ref10;\n        setCookie(document.cookie);\n        tokenFn(cookie);\n        if (!cookie && ((ref = mainState.fetchData) === null || ref === void 0 ? void 0 : ref.success)) {\n            router.push(\"/log-in\");\n        }\n        if (!((ref9 = mainState.fetchData) === null || ref9 === void 0 ? void 0 : ref9.success) && !((ref10 = mainState.fetchData) === null || ref10 === void 0 ? void 0 : ref10.user)) {\n            router.push(\"/log-in\");\n        }\n    }, [\n        (ref8 = mainState.fetchData) === null || ref8 === void 0 ? void 0 : ref8.success,\n        router\n    ]);\n    console.log(\"this is home success\", mainState.fetchData);\n    console.log(userTweet.fetchData, \"fetchData\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"home~\",\n            ((ref1 = mainState.fetchData) === null || ref1 === void 0 ? void 0 : ref1.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            (ref2 = mainState.fetchData) === null || ref2 === void 0 ? void 0 : ref2.name,\n                            \" \\uB2D8, \\uC5B4\\uC11C\\uC624\\uC138\\uC694 \\u2728\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit(onValid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                register: register(\"text\", {\n                                    required: false\n                                }),\n                                label: \"Tweeeeeets\",\n                                name: \"text\",\n                                type: \"text\",\n                                kind: \"text\",\n                                placeholder: \"Tweeeeeets\"\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text:  true ? \"Unlike\" : 0,\n                                onClick: onLikeClick\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"please waiting..\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            tweets ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: tweets.tweets.map(function(tweet) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: tweet === null || tweet === void 0 ? void 0 : tweet.tweet\n                        }, void 0, false, {\n                            fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"FKv+NQWaX+1aNibHHGEgHbCrVHg=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsU0FBQ0MsS0FBVTtrQ0FDNUIscUVBQUNkLEtBQUc7a0NBQ0YsNEVBQUNZLE1BQUk7c0NBQUVFLEtBQUssYUFBTEEsS0FBSyxXQUFPLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsS0FBSyxDQUFFQSxLQUFLOzs7OztpQ0FBUTs7Ozs7NkJBQ3ZCO2lCQUNQLENBQUM7Ozs7O29CQUNFLEdBQ0osSUFBSTs7Ozs7O1lBQ0osQ0FDTjtDQUNIO0dBL0R1Qm5DLEdBQUc7O1FBRUlGLCtEQUFXO1FBQ1hBLCtEQUFXO1FBQ2ZDLDREQUFRO1FBRWxCUixrREFBUztRQUNXSSxvREFBTzs7O0FBUHBCSyxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCB1c2VGZXRjaGluZyBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VGZXRjaGluZ1wiO1xuaW1wb3J0IHVzZVR3ZWV0IGZyb20gXCIuLi9saWIvY2xpZW50L3VzZVR3ZWV0XCI7XG5cbmludGVyZmFjZSBJVGV4dEZvcm0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGxpa2U/OiBib29sZWFuO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbY29va2llLCBzZXRDb29raWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihcIlwiKTtcbiAgY29uc3QgW3Rva2VuRm4sIG1haW5TdGF0ZV0gPSB1c2VGZXRjaGluZyhcIi9hcGkvdXNlci9tYWluXCIpO1xuICBjb25zdCBbdHdlZXRGbiwgdXNlclR3ZWV0XSA9IHVzZUZldGNoaW5nKFwiL2FwaS91c2VyL3R3ZWV0XCIpO1xuICBjb25zdCB7IGRhdGE6IHR3ZWV0cyB9ID0gdXNlVHdlZXQoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPElUZXh0Rm9ybT4oKTtcblxuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHt9O1xuICBjb25zdCBvblZhbGlkID0gKGRhdGE6IElUZXh0Rm9ybSkgPT4ge1xuICAgIHR3ZWV0Rm4oeyBkYXRhLCB1c2VyOiBtYWluU3RhdGUuZmV0Y2hEYXRhPy51c2VyIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29va2llKGRvY3VtZW50LmNvb2tpZSk7XG4gICAgdG9rZW5Gbihjb29raWUpO1xuICAgIGlmICghY29va2llICYmIG1haW5TdGF0ZS5mZXRjaERhdGE/LnN1Y2Nlc3MpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZy1pblwiKTtcbiAgICB9XG4gICAgaWYgKCFtYWluU3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmICFtYWluU3RhdGUuZmV0Y2hEYXRhPy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2ctaW5cIik7XG4gICAgfVxuICB9LCBbbWFpblN0YXRlLmZldGNoRGF0YT8uc3VjY2Vzcywgcm91dGVyXSk7XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyBob21lIHN1Y2Nlc3NcIiwgbWFpblN0YXRlLmZldGNoRGF0YSk7XG4gIGNvbnNvbGUubG9nKHVzZXJUd2VldC5mZXRjaERhdGEsIFwiZmV0Y2hEYXRhXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBob21lflxuICAgICAge21haW5TdGF0ZS5mZXRjaERhdGE/LnVzZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPnttYWluU3RhdGUuZmV0Y2hEYXRhPy5uYW1lfSDri5gsIOyWtOyEnOyYpOyEuOyalCDinKg8L2gyPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZCl9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3RlcihcInRleHRcIiwge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiVHdlZWVlZWV0c1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBraW5kPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHdlZWVlZWV0c1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0ZXh0PXt0cnVlID8gXCJVbmxpa2VcIiA6IFwibGlrZVwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4+cGxlYXNlIHdhaXRpbmcuLjwvc3Bhbj5cbiAgICAgICl9XG4gICAgICB7dHdlZXRzID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0d2VldHMudHdlZXRzLm1hcCgodHdlZXQ6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+e3R3ZWV0Py50d2VldH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwidXNlRmV0Y2hpbmciLCJ1c2VUd2VldCIsIkFwcCIsIm1haW5TdGF0ZSIsImNvb2tpZSIsInNldENvb2tpZSIsInRva2VuRm4iLCJ0d2VldEZuIiwidXNlclR3ZWV0IiwiZGF0YSIsInR3ZWV0cyIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwib25MaWtlQ2xpY2siLCJvblZhbGlkIiwidXNlciIsImZldGNoRGF0YSIsImRvY3VtZW50Iiwic3VjY2VzcyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDIiLCJuYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJsYWJlbCIsInR5cGUiLCJraW5kIiwicGxhY2Vob2xkZXIiLCJ0ZXh0Iiwib25DbGljayIsInNwYW4iLCJtYXAiLCJ0d2VldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});