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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n/* harmony import */ var _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useTweet */ \"./lib/client/useTweet.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    var ref7, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cookie = ref2[0], setCookie = ref2[1];\n    var ref3 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/main\"), 2), tokenFn = ref3[0], state = ref3[1];\n    var ref4 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/tweet\"), 2), tweetFn = ref4[0], tweet1 = ref4[1];\n    var ref5 = (0,_lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), tweets = ref5.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref6 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref6.register, handleSubmit = ref6.handleSubmit;\n    var onLikeClick = function() {};\n    var onValid = function(data) {\n        var ref;\n        tweetFn({\n            data: data,\n            user: (ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.user\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref8, ref9, ref10;\n        setCookie(document.cookie);\n        tokenFn(cookie);\n        if (((ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.success) && !((ref8 = state.fetchData) === null || ref8 === void 0 ? void 0 : ref8.user)) {\n            var ref11;\n            router.push(\"/log-in\");\n            console.log((ref11 = state.fetchData) === null || ref11 === void 0 ? void 0 : ref11.user);\n        } else if (((ref9 = state.fetchData) === null || ref9 === void 0 ? void 0 : ref9.success) && ((ref10 = state.fetchData) === null || ref10 === void 0 ? void 0 : ref10.user)) {\n            console.log(\"this is home success\", state.fetchData);\n        }\n    }, [\n        (ref7 = state.fetchData) === null || ref7 === void 0 ? void 0 : ref7.success,\n        cookie\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"home~\",\n            ((ref1 = state.fetchData) === null || ref1 === void 0 ? void 0 : ref1.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        register: register(\"text\", {\n                            required: false\n                        }),\n                        label: \"Tweeeeeets\",\n                        name: \"text\",\n                        type: \"text\",\n                        kind: \"text\",\n                        placeholder: \"Tweeeeeets\"\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text:  true ? \"Unlike\" : 0,\n                        onClick: onLikeClick\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"please waiting..\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            tweets ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: tweets.map(function(tweet) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: tweet === null || tweet === void 0 ? void 0 : tweet.tweet\n                        }, void 0, false, {\n                            fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"Y11fJZx7rgHnmRx3n/nB7b+K0rw=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLEdBQVpBLEtBQUssQ0FBRUEsS0FBSzs7Ozs7aUNBQVE7Ozs7OzZCQUN2QjtpQkFDUCxDQUFDOzs7OztvQkFDRSxHQUNKLElBQUk7Ozs7OztZQUNKLENBQ047Q0FDSDtHQTNEdUJOLEdBQUc7O1FBRUFGLCtEQUFXO1FBQ1hBLCtEQUFXO1FBQ1hDLDREQUFRO1FBRWxCUixrREFBUztRQUNXSSxvREFBTzs7O0FBUHBCSyxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IHVzZUZldGNoaW5nIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZUZldGNoaW5nXCI7XG5pbXBvcnQgdXNlVHdlZXQgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlVHdlZXRcIjtcblxuaW50ZXJmYWNlIElUZXh0Rm9ybSB7XG4gIHRleHQ6IHN0cmluZztcbiAgbGlrZT86IGJvb2xlYW47XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KFwiXCIpO1xuICBjb25zdCBbdG9rZW5Gbiwgc3RhdGVdID0gdXNlRmV0Y2hpbmcoXCIvYXBpL3VzZXIvbWFpblwiKTtcbiAgY29uc3QgW3R3ZWV0Rm4sIHR3ZWV0XSA9IHVzZUZldGNoaW5nKFwiL2FwaS91c2VyL3R3ZWV0XCIpO1xuICBjb25zdCB7IGRhdGE6IHR3ZWV0cyB9ID0gdXNlVHdlZXQoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPElUZXh0Rm9ybT4oKTtcblxuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHt9O1xuICBjb25zdCBvblZhbGlkID0gKGRhdGE6IElUZXh0Rm9ybSkgPT4ge1xuICAgIHR3ZWV0Rm4oeyBkYXRhLCB1c2VyOiBzdGF0ZS5mZXRjaERhdGE/LnVzZXIgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb29raWUoZG9jdW1lbnQuY29va2llKTtcbiAgICB0b2tlbkZuKGNvb2tpZSk7XG4gICAgaWYgKHN0YXRlLmZldGNoRGF0YT8uc3VjY2VzcyAmJiAhc3RhdGUuZmV0Y2hEYXRhPy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2ctaW5cIik7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS5mZXRjaERhdGE/LnVzZXIpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmIHN0YXRlLmZldGNoRGF0YT8udXNlcikge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGhvbWUgc3VjY2Vzc1wiLCBzdGF0ZS5mZXRjaERhdGEpO1xuICAgIH1cbiAgfSwgW3N0YXRlLmZldGNoRGF0YT8uc3VjY2VzcywgY29va2llXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgaG9tZX5cbiAgICAgIHtzdGF0ZS5mZXRjaERhdGE/LnVzZXIgPyAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZCl9PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwidGV4dFwiLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgbGFiZWw9XCJUd2VlZWVlZXRzXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGtpbmQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHdlZWVlZWV0c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0ZXh0PXt0cnVlID8gXCJVbmxpa2VcIiA6IFwibGlrZVwifVxuICAgICAgICAgICAgb25DbGljaz17b25MaWtlQ2xpY2t9XG4gICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApIDogKFxuICAgICAgICA8c3Bhbj5wbGVhc2Ugd2FpdGluZy4uPC9zcGFuPlxuICAgICAgKX1cbiAgICAgIHt0d2VldHMgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3R3ZWV0cy5tYXAoKHR3ZWV0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuPnt0d2VldD8udHdlZXR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJCdXR0b24iLCJJbnB1dCIsInVzZUZldGNoaW5nIiwidXNlVHdlZXQiLCJBcHAiLCJzdGF0ZSIsImNvb2tpZSIsInNldENvb2tpZSIsInRva2VuRm4iLCJ0d2VldEZuIiwidHdlZXQiLCJkYXRhIiwidHdlZXRzIiwicm91dGVyIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJvbkxpa2VDbGljayIsIm9uVmFsaWQiLCJ1c2VyIiwiZmV0Y2hEYXRhIiwiZG9jdW1lbnQiLCJzdWNjZXNzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsImxhYmVsIiwibmFtZSIsInR5cGUiLCJraW5kIiwicGxhY2Vob2xkZXIiLCJ0ZXh0Iiwib25DbGljayIsInNwYW4iLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});