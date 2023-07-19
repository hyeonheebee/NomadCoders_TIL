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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n/* harmony import */ var _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useTweet */ \"./lib/client/useTweet.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    var ref8, ref1, ref2;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cookie = ref3[0], setCookie = ref3[1];\n    var ref4 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/main\"), 2), tokenFn = ref4[0], state = ref4[1];\n    var ref5 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/tweet\"), 2), tweetFn = ref5[0], userTweet = ref5[1];\n    var ref6 = (0,_lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), tweets = ref6.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref7 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref7.register, handleSubmit = ref7.handleSubmit;\n    var onLikeClick = function() {};\n    var onValid = function(data) {\n        var ref;\n        tweetFn({\n            data: data,\n            user: (ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.user\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref9, ref10, ref11;\n        setCookie(document.cookie);\n        tokenFn(cookie);\n        console.log(state);\n        if (((ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.success) && !((ref9 = state.fetchData) === null || ref9 === void 0 ? void 0 : ref9.user)) {\n            router.push(\"/log-in\");\n        } else if (((ref10 = state.fetchData) === null || ref10 === void 0 ? void 0 : ref10.success) && ((ref11 = state.fetchData) === null || ref11 === void 0 ? void 0 : ref11.user)) {\n            console.log(\"this is home success\", state.fetchData);\n        }\n    }, [\n        (ref8 = state.fetchData) === null || ref8 === void 0 ? void 0 : ref8.success,\n        cookie,\n        userTweet.fetchData\n    ]);\n    console.log(userTweet.fetchData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"home~\",\n            ((ref1 = state.fetchData) === null || ref1 === void 0 ? void 0 : ref1.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            (ref2 = state.fetchData) === null || ref2 === void 0 ? void 0 : ref2.name,\n                            \" \\uB2D8, \\uC5B4\\uC11C\\uC624\\uC138\\uC694 \\u2728\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit(onValid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                register: register(\"text\", {\n                                    required: false\n                                }),\n                                label: \"Tweeeeeets\",\n                                name: \"text\",\n                                type: \"text\",\n                                kind: \"text\",\n                                placeholder: \"Tweeeeeets\"\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text:  true ? \"Unlike\" : 0,\n                                onClick: onLikeClick\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"please waiting..\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            tweets ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: tweets.tweets.map(function(tweet) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: tweet === null || tweet === void 0 ? void 0 : tweet.tweet\n                        }, void 0, false, {\n                            fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"LqxdULXkKiJgVMsGSflqWXnRm20=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUJ6QixNQUFNLGlCQUNMLDhEQUFDYSxLQUFHOzBCQUNEYixNQUFNLENBQUNBLE1BQU0sQ0FBQzBCLEdBQUcsQ0FBQyxTQUFDQyxLQUFVO2tDQUM1QixxRUFBQ2QsS0FBRztrQ0FDRiw0RUFBQ1ksTUFBSTtzQ0FBRUUsS0FBSyxhQUFMQSxLQUFLLFdBQU8sR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxLQUFLLENBQUVBLEtBQUs7Ozs7O2lDQUFROzs7Ozs2QkFDdkI7aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0UsR0FDSixJQUFJOzs7Ozs7WUFDSixDQUNOO0NBQ0g7R0E5RHVCbkMsR0FBRzs7UUFFQUYsK0RBQVc7UUFDUEEsK0RBQVc7UUFDZkMsNERBQVE7UUFFbEJSLGtEQUFTO1FBQ1dJLG9EQUFPOzs7QUFQcEJLLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgdXNlRmV0Y2hpbmcgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlRmV0Y2hpbmdcIjtcbmltcG9ydCB1c2VUd2VldCBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VUd2VldFwiO1xuXG5pbnRlcmZhY2UgSVRleHRGb3JtIHtcbiAgdGV4dDogc3RyaW5nO1xuICBsaWtlPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oXCJcIik7XG4gIGNvbnN0IFt0b2tlbkZuLCBzdGF0ZV0gPSB1c2VGZXRjaGluZyhcIi9hcGkvdXNlci9tYWluXCIpO1xuICBjb25zdCBbdHdlZXRGbiwgdXNlclR3ZWV0XSA9IHVzZUZldGNoaW5nKFwiL2FwaS91c2VyL3R3ZWV0XCIpO1xuICBjb25zdCB7IGRhdGE6IHR3ZWV0cyB9ID0gdXNlVHdlZXQoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPElUZXh0Rm9ybT4oKTtcblxuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHt9O1xuICBjb25zdCBvblZhbGlkID0gKGRhdGE6IElUZXh0Rm9ybSkgPT4ge1xuICAgIHR3ZWV0Rm4oeyBkYXRhLCB1c2VyOiBzdGF0ZS5mZXRjaERhdGE/LnVzZXIgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb29raWUoZG9jdW1lbnQuY29va2llKTtcbiAgICB0b2tlbkZuKGNvb2tpZSk7XG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIGlmIChzdGF0ZS5mZXRjaERhdGE/LnN1Y2Nlc3MgJiYgIXN0YXRlLmZldGNoRGF0YT8udXNlcikge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9nLWluXCIpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmIHN0YXRlLmZldGNoRGF0YT8udXNlcikge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGhvbWUgc3VjY2Vzc1wiLCBzdGF0ZS5mZXRjaERhdGEpO1xuICAgIH1cbiAgfSwgW3N0YXRlLmZldGNoRGF0YT8uc3VjY2VzcywgY29va2llLCB1c2VyVHdlZXQuZmV0Y2hEYXRhXSk7XG4gIGNvbnNvbGUubG9nKHVzZXJUd2VldC5mZXRjaERhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBob21lflxuICAgICAge3N0YXRlLmZldGNoRGF0YT8udXNlciA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDI+e3N0YXRlLmZldGNoRGF0YT8ubmFtZX0g64uYLCDslrTshJzsmKTshLjsmpQg4pyoPC9oMj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoXCJ0ZXh0XCIsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBsYWJlbD1cIlR3ZWVlZWVldHNcIlxuICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAga2luZD1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR3ZWVlZWVldHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdGV4dD17dHJ1ZSA/IFwiVW5saWtlXCIgOiBcImxpa2VcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17b25MaWtlQ2xpY2t9XG4gICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuPnBsZWFzZSB3YWl0aW5nLi48L3NwYW4+XG4gICAgICApfVxuICAgICAge3R3ZWV0cyA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dHdlZXRzLnR3ZWV0cy5tYXAoKHR3ZWV0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuPnt0d2VldD8udHdlZXR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJCdXR0b24iLCJJbnB1dCIsInVzZUZldGNoaW5nIiwidXNlVHdlZXQiLCJBcHAiLCJzdGF0ZSIsImNvb2tpZSIsInNldENvb2tpZSIsInRva2VuRm4iLCJ0d2VldEZuIiwidXNlclR3ZWV0IiwiZGF0YSIsInR3ZWV0cyIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwib25MaWtlQ2xpY2siLCJvblZhbGlkIiwidXNlciIsImZldGNoRGF0YSIsImRvY3VtZW50IiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJwdXNoIiwiZGl2IiwiaDIiLCJuYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJsYWJlbCIsInR5cGUiLCJraW5kIiwicGxhY2Vob2xkZXIiLCJ0ZXh0Iiwib25DbGljayIsInNwYW4iLCJtYXAiLCJ0d2VldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});