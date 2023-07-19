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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n/* harmony import */ var _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useTweet */ \"./lib/client/useTweet.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    var ref8, ref1, ref2;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), cookie = ref3[0], setCookie = ref3[1];\n    var ref4 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/main\"), 2), tokenFn = ref4[0], state = ref4[1];\n    var ref5 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/user/tweet\"), 2), tweetFn = ref5[0], userTweet = ref5[1];\n    var ref6 = (0,_lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), tweets = ref6.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref7 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref7.register, handleSubmit = ref7.handleSubmit;\n    var onLikeClick = function() {};\n    var onValid = function(data) {\n        var ref;\n        tweetFn({\n            data: data,\n            user: (ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.user\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref9, ref10, ref11;\n        setCookie(document.cookie);\n        tokenFn(cookie);\n        console.log(state, \"state\");\n        if (!cookie && ((ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.success) || !((ref9 = state.fetchData) === null || ref9 === void 0 ? void 0 : ref9.user)) {\n            router.push(\"/log-in\");\n        }\n        if (((ref10 = state.fetchData) === null || ref10 === void 0 ? void 0 : ref10.success) && ((ref11 = state.fetchData) === null || ref11 === void 0 ? void 0 : ref11.user)) {}\n    }, [\n        (ref8 = state.fetchData) === null || ref8 === void 0 ? void 0 : ref8.success,\n        userTweet.fetchData\n    ]);\n    console.log(\"this is home success\", state.fetchData);\n    console.log(userTweet.fetchData, \"fetchData\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"home~\",\n            ((ref1 = state.fetchData) === null || ref1 === void 0 ? void 0 : ref1.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            (ref2 = state.fetchData) === null || ref2 === void 0 ? void 0 : ref2.name,\n                            \" \\uB2D8, \\uC5B4\\uC11C\\uC624\\uC138\\uC694 \\u2728\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit(onValid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                register: register(\"text\", {\n                                    required: false\n                                }),\n                                label: \"Tweeeeeets\",\n                                name: \"text\",\n                                type: \"text\",\n                                kind: \"text\",\n                                placeholder: \"Tweeeeeets\"\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text:  true ? \"Unlike\" : 0,\n                                onClick: onLikeClick\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"please waiting..\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            tweets ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: tweets.tweets.map(function(tweet) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: tweet === null || tweet === void 0 ? void 0 : tweet.tweet\n                        }, void 0, false, {\n                            fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"LqxdULXkKiJgVMsGSflqWXnRm20=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _lib_client_useTweet__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1c7QUFDVDtBQUVBO0FBQ0Y7QUFDWTtBQUNOOztBQU0vQixTQUFTUyxHQUFHLEdBQUc7O1FBdUJ4QkMsSUFBZSxFQU1kQSxJQUFlLEVBRVBBLElBQWU7O0lBOUI1QixJQUE0QlAsSUFBZ0MsR0FBaENBLCtDQUFRLENBQXFCLEVBQUUsQ0FBQyxFQWQ5RCxNQWNlLEdBQWVBLElBQWdDLEdBQS9DLEVBZGYsU0FjMEIsR0FBSUEsSUFBZ0MsR0FBcEM7SUFDeEIsSUFBeUJJLElBQTZCLGtCQUE3QkEsbUVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUEvQ00sT0FBTyxHQUFXTixJQUE2QixHQUF4QyxFQUFFRyxLQUFLLEdBQUlILElBQTZCLEdBQWpDO0lBQ3JCLElBQTZCQSxJQUE4QixrQkFBOUJBLG1FQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBcERPLE9BQU8sR0FBZVAsSUFBOEIsR0FBN0MsRUFBRVEsU0FBUyxHQUFJUixJQUE4QixHQUFsQztJQUN6QixJQUF5QkMsSUFBVSxHQUFWQSxnRUFBUSxFQUFFLEVBQTNCUSxNQUFZLEdBQUtSLElBQVUsQ0FBM0JRLElBQUk7SUFFWixJQUFNRSxNQUFNLEdBQUdsQixzREFBUyxFQUFFO0lBQzFCLElBQW1DSSxJQUFvQixHQUFwQkEsd0RBQU8sRUFBYSxFQUEvQ2UsUUFBUSxHQUFtQmYsSUFBb0IsQ0FBL0NlLFFBQVEsRUFBRUMsWUFBWSxHQUFLaEIsSUFBb0IsQ0FBckNnQixZQUFZO0lBRTlCLElBQU1DLFdBQVcsR0FBRyxXQUFNLEVBQUU7SUFDNUIsSUFBTUMsT0FBTyxHQUFHLFNBQUNOLElBQWUsRUFBSztZQUNiTixHQUFlO1FBQXJDSSxPQUFPLENBQUM7WUFBRUUsSUFBSSxFQUFKQSxJQUFJO1lBQUVPLElBQUksRUFBRWIsQ0FBQUEsR0FBZSxHQUFmQSxLQUFLLENBQUNjLFNBQVMsY0FBZmQsR0FBZSxXQUFNLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsR0FBZSxDQUFFYSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0tBQ2hEO0lBRURyQixnREFBUyxDQUFDLFdBQU07WUFJRVEsR0FBZSxFQUFlQSxJQUFlLEVBR3pEQSxLQUFlLEVBQWFBLEtBQWU7UUFOL0NFLFNBQVMsQ0FBQ2EsUUFBUSxDQUFDZCxNQUFNLENBQUMsQ0FBQztRQUMzQkUsT0FBTyxDQUFDRixNQUFNLENBQUMsQ0FBQztRQUNoQmUsT0FBTyxDQUFDQyxHQUFHLENBQUNqQixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFFQyxNQUFNLElBQUlELENBQUFBLENBQUFBLEdBQWUsR0FBZkEsS0FBSyxDQUFDYyxTQUFTLGNBQWZkLEdBQWUsV0FBUyxHQUF4QkEsS0FBQUEsQ0FBd0IsR0FBeEJBLEdBQWUsQ0FBRWtCLE9BQU8sS0FBSyxDQUFDbEIsQ0FBQUEsQ0FBQUEsSUFBZSxHQUFmQSxLQUFLLENBQUNjLFNBQVMsY0FBZmQsSUFBZSxXQUFNLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsSUFBZSxDQUFFYSxJQUFJLEdBQUU7WUFDbkVMLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSW5CLENBQUFBLENBQUFBLEtBQWUsR0FBZkEsS0FBSyxDQUFDYyxTQUFTLGNBQWZkLEtBQWUsV0FBUyxHQUF4QkEsS0FBQUEsQ0FBd0IsR0FBeEJBLEtBQWUsQ0FBRWtCLE9BQU8sS0FBSWxCLENBQUFBLENBQUFBLEtBQWUsR0FBZkEsS0FBSyxDQUFDYyxTQUFTLGNBQWZkLEtBQWUsV0FBTSxHQUFyQkEsS0FBQUEsQ0FBcUIsR0FBckJBLEtBQWUsQ0FBRWEsSUFBSSxHQUFFLEVBQ3REO0tBQ0YsRUFBRTtRQUFDYixDQUFBQSxJQUFlLEdBQWZBLEtBQUssQ0FBQ2MsU0FBUyxjQUFmZCxJQUFlLFdBQVMsR0FBeEJBLEtBQUFBLENBQXdCLEdBQXhCQSxJQUFlLENBQUVrQixPQUFPO1FBQUViLFNBQVMsQ0FBQ1MsU0FBUztLQUFDLENBQUMsQ0FBQztJQUNwREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVqQixLQUFLLENBQUNjLFNBQVMsQ0FBQyxDQUFDO0lBQ3JERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osU0FBUyxDQUFDUyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUMscUJBQ0UsOERBQUNNLEtBQUc7O1lBQUMsT0FFSDtZQUFDcEIsQ0FBQUEsQ0FBQUEsSUFBZSxHQUFmQSxLQUFLLENBQUNjLFNBQVMsY0FBZmQsSUFBZSxXQUFNLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsSUFBZSxDQUFFYSxJQUFJLGtCQUNwQjs7a0NBQ0UsOERBQUNRLElBQUU7OzRCQUFFckIsQ0FBQUEsSUFBZSxHQUFmQSxLQUFLLENBQUNjLFNBQVMsY0FBZmQsSUFBZSxXQUFNLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsSUFBZSxDQUFFc0IsSUFBSTs0QkFBQyxnREFBVzs7Ozs7OzRCQUFLO2tDQUMzQyw4REFBQ0MsTUFBSTt3QkFBQ0MsUUFBUSxFQUFFZCxZQUFZLENBQUNFLE9BQU8sQ0FBQzs7MENBQ25DLDhEQUFDaEIseURBQUs7Z0NBQ0phLFFBQVEsRUFBRUEsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQ0FDekJnQixRQUFRLEVBQUUsS0FBSztpQ0FDaEIsQ0FBQztnQ0FDRkMsS0FBSyxFQUFDLFlBQVk7Z0NBQ2xCSixJQUFJLEVBQUMsTUFBTTtnQ0FDWEssSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLElBQUksRUFBQyxNQUFNO2dDQUNYQyxXQUFXLEVBQUMsWUFBWTs7Ozs7b0NBQ3hCOzBDQUNGLDhEQUFDbEMsMERBQU07Z0NBQ0xtQyxJQUFJLEVBQUUsS0FBSSxHQUFHLFFBQVEsR0FBRyxDQUFNO2dDQUM5QkMsT0FBTyxFQUFFcEIsV0FBVzs7Ozs7b0NBQ1o7Ozs7Ozs0QkFDTDs7NEJBQ04saUJBRUgsOERBQUNxQixNQUFJOzBCQUFDLGtCQUFnQjs7Ozs7b0JBQU87WUFFOUJ6QixNQUFNLGlCQUNMLDhEQUFDYSxLQUFHOzBCQUNEYixNQUFNLENBQUNBLE1BQU0sQ0FBQzBCLEdBQUcsQ0FBQyxTQUFDQyxLQUFVO2tDQUM1QixxRUFBQ2QsS0FBRztrQ0FDRiw0RUFBQ1ksTUFBSTtzQ0FBRUUsS0FBSyxhQUFMQSxLQUFLLFdBQU8sR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxLQUFLLENBQUVBLEtBQUs7Ozs7O2lDQUFROzs7Ozs2QkFDdkI7aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0UsR0FDSixJQUFJOzs7Ozs7WUFDSixDQUNOO0NBQ0g7R0EvRHVCbkMsR0FBRzs7UUFFQUYsK0RBQVc7UUFDUEEsK0RBQVc7UUFDZkMsNERBQVE7UUFFbEJSLGtEQUFTO1FBQ1dJLG9EQUFPOzs7QUFQcEJLLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IHVzZUZldGNoaW5nIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZUZldGNoaW5nXCI7XG5pbXBvcnQgdXNlVHdlZXQgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlVHdlZXRcIjtcblxuaW50ZXJmYWNlIElUZXh0Rm9ybSB7XG4gIHRleHQ6IHN0cmluZztcbiAgbGlrZT86IGJvb2xlYW47XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KFwiXCIpO1xuICBjb25zdCBbdG9rZW5Gbiwgc3RhdGVdID0gdXNlRmV0Y2hpbmcoXCIvYXBpL3VzZXIvbWFpblwiKTtcbiAgY29uc3QgW3R3ZWV0Rm4sIHVzZXJUd2VldF0gPSB1c2VGZXRjaGluZyhcIi9hcGkvdXNlci90d2VldFwiKTtcbiAgY29uc3QgeyBkYXRhOiB0d2VldHMgfSA9IHVzZVR3ZWV0KCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxJVGV4dEZvcm0+KCk7XG5cbiAgY29uc3Qgb25MaWtlQ2xpY2sgPSAoKSA9PiB7fTtcbiAgY29uc3Qgb25WYWxpZCA9IChkYXRhOiBJVGV4dEZvcm0pID0+IHtcbiAgICB0d2VldEZuKHsgZGF0YSwgdXNlcjogc3RhdGUuZmV0Y2hEYXRhPy51c2VyIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29va2llKGRvY3VtZW50LmNvb2tpZSk7XG4gICAgdG9rZW5Gbihjb29raWUpO1xuICAgIGNvbnNvbGUubG9nKHN0YXRlLCBcInN0YXRlXCIpO1xuICAgIGlmICgoIWNvb2tpZSAmJiBzdGF0ZS5mZXRjaERhdGE/LnN1Y2Nlc3MpIHx8ICFzdGF0ZS5mZXRjaERhdGE/LnVzZXIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZy1pblwiKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmZldGNoRGF0YT8uc3VjY2VzcyAmJiBzdGF0ZS5mZXRjaERhdGE/LnVzZXIpIHtcbiAgICB9XG4gIH0sIFtzdGF0ZS5mZXRjaERhdGE/LnN1Y2Nlc3MsIHVzZXJUd2VldC5mZXRjaERhdGFdKTtcbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGhvbWUgc3VjY2Vzc1wiLCBzdGF0ZS5mZXRjaERhdGEpO1xuICBjb25zb2xlLmxvZyh1c2VyVHdlZXQuZmV0Y2hEYXRhLCBcImZldGNoRGF0YVwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgaG9tZX5cbiAgICAgIHtzdGF0ZS5mZXRjaERhdGE/LnVzZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPntzdGF0ZS5mZXRjaERhdGE/Lm5hbWV9IOuLmCwg7Ja07ISc7Jik7IS47JqUIOKcqDwvaDI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkKX0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwidGV4dFwiLCB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJUd2VlZWVlZXRzXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGtpbmQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUd2VlZWVlZXRzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHRleHQ9e3RydWUgPyBcIlVubGlrZVwiIDogXCJsaWtlXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uTGlrZUNsaWNrfVxuICAgICAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3Bhbj5wbGVhc2Ugd2FpdGluZy4uPC9zcGFuPlxuICAgICAgKX1cbiAgICAgIHt0d2VldHMgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3R3ZWV0cy50d2VldHMubWFwKCh0d2VldDogYW55KSA9PiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj57dHdlZXQ/LnR3ZWV0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJ1c2VGZXRjaGluZyIsInVzZVR3ZWV0IiwiQXBwIiwic3RhdGUiLCJjb29raWUiLCJzZXRDb29raWUiLCJ0b2tlbkZuIiwidHdlZXRGbiIsInVzZXJUd2VldCIsImRhdGEiLCJ0d2VldHMiLCJyb3V0ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIm9uTGlrZUNsaWNrIiwib25WYWxpZCIsInVzZXIiLCJmZXRjaERhdGEiLCJkb2N1bWVudCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwicHVzaCIsImRpdiIsImgyIiwibmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibGFiZWwiLCJ0eXBlIiwia2luZCIsInBsYWNlaG9sZGVyIiwidGV4dCIsIm9uQ2xpY2siLCJzcGFuIiwibWFwIiwidHdlZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});