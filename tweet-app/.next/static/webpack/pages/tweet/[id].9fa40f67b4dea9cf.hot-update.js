"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navigator */ \"./components/navigator.tsx\");\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref7, ref1, ref2, ref3, ref4;\n    _s();\n    var ref5 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), data = ref5.data, mutate = ref5.mutate;\n    var ref6 = _slicedToArray((0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), 2), clickFn = ref6[0], likeData = ref6[1];\n    var onLikeClick = function() {\n        var ref;\n        clickFn(data);\n        if (!likeData.fetchData) return;\n        mutate(_objectSpread({}, data, {\n            isLiked: (ref = likeData.fetchData) === null || ref === void 0 ? void 0 : ref.isLike\n        }), true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        clickFn({});\n    }, []);\n    console.log(\"one:\", data, \"two:\", likeData.fetchData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-rose-100 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                url: \"/\",\n                urlText: \"Home|Tweets\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex font-dongle items-center justify-center bg-rose-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: data === null || data === void 0 ? void 0 : (ref7 = data.singleTweet) === null || ref7 === void 0 ? void 0 : ref7.id,\n                                like: ((ref1 = likeData.fetchData) === null || ref1 === void 0 ? void 0 : ref1.isLike) ? (ref2 = likeData.fetchData) === null || ref2 === void 0 ? void 0 : ref2.isLike : data === null || data === void 0 ? void 0 : data.existedLike,\n                                onClickFn: onLikeClick,\n                                text: data === null || data === void 0 ? void 0 : (ref3 = data.singleTweet) === null || ref3 === void 0 ? void 0 : ref3.tweet\n                            }, void 0, false, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-span text-xl ml-8\",\n                                children: [\n                                    \"by \",\n                                    data === null || data === void 0 ? void 0 : (ref4 = data.user) === null || ref4 === void 0 ? void 0 : ref4.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-span text-2xl\",\n                            children: \"\\uC774 \\uC0DD\\uAC01\\uC5D0 \\uACF5\\uAC10\\uC774 \\uAC04\\uB2E4\\uBA74 \\uC704\\uC758 \\uD558\\uD2B8\\uB97C \\uB20C\\uB7EC\\uBCF4\\uC138\\uC694 \\uD83E\\uDD70\"\n                        }, void 0, false, {\n                            fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"Takl+/dAidS5ImrDHURv/6o9LaM=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBaUIsQ0FBRUQsS0FBSzs7Ozs7b0NBQzlCOzBDQUNGLDhEQUFDcUIsTUFBSTtnQ0FBQ1QsU0FBUyxFQUFDLHdCQUF3Qjs7b0NBQUMsS0FDcEM7b0NBQUNYLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsQ0FBQUEsSUFBVSxHQUFWQSxJQUFJLENBQUVxQixJQUFJLGNBQVZyQixJQUFVLGNBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBVSxDQUFFc0IsSUFBSTs7Ozs7O29DQUNmOzs7Ozs7NEJBQ0g7a0NBQ04sOERBQUNaLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7a0NBQ2xDLDRFQUFDUyxNQUFJOzRCQUFDVCxTQUFTLEVBQUMsb0JBQW9CO3NDQUFDLDZJQUVyQzs7Ozs7Z0NBQU87Ozs7OzRCQUNIOzs0QkFDTCxHQUNELElBQUk7Ozs7OztZQUNKLENBQ047Q0FDSDtHQWpEdUJaLEtBQUs7O1FBQ0ZGLGdFQUFZO1FBQ1RDLGdFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdG9yXCI7XG5cbmltcG9ydCBTaW5nbGVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpbmdsZUxpc3RcIjtcblxuaW1wb3J0IHVzZVR3ZWV0SXRlbSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldEl0ZW1cIjtcbmltcG9ydCB1c2VUd2VldExpa2UgZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRMaWtlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZWV0KCkge1xuICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlVHdlZXRJdGVtKCk7XG4gIGNvbnN0IFtjbGlja0ZuLCBsaWtlRGF0YV0gPSB1c2VUd2VldExpa2UoKTtcblxuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHtcbiAgICBjbGlja0ZuKGRhdGEpO1xuICAgIGlmICghbGlrZURhdGEuZmV0Y2hEYXRhKSByZXR1cm47XG4gICAgbXV0YXRlKFxuICAgICAge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBpc0xpa2VkOiBsaWtlRGF0YS5mZXRjaERhdGE/LmlzTGlrZSxcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjbGlja0ZuKHt9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKFwib25lOlwiLCBkYXRhLCBcInR3bzpcIiwgbGlrZURhdGEuZmV0Y2hEYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJvc2UtMTAwIGgtc2NyZWVuXCI+XG4gICAgICA8TmF2aWdhdG9yIHVybD1cIi9cIiB1cmxUZXh0PVwiSG9tZXxUd2VldHNcIiAvPlxuICAgICAge2RhdGE/LnNpbmdsZVR3ZWV0ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmb250LWRvbmdsZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcm9zZS0yMDBcIj5cbiAgICAgICAgICAgIDxTaW5nbGVMaXN0XG4gICAgICAgICAgICAgIGlkPXtkYXRhPy5zaW5nbGVUd2VldD8uaWR9XG4gICAgICAgICAgICAgIGxpa2U9e1xuICAgICAgICAgICAgICAgIGxpa2VEYXRhLmZldGNoRGF0YT8uaXNMaWtlXG4gICAgICAgICAgICAgICAgICA/IGxpa2VEYXRhLmZldGNoRGF0YT8uaXNMaWtlXG4gICAgICAgICAgICAgICAgICA6IGRhdGE/LmV4aXN0ZWRMaWtlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGlja0ZuPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgICAgdGV4dD17ZGF0YT8uc2luZ2xlVHdlZXQ/LnR3ZWV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc3BhbiB0ZXh0LXhsIG1sLThcIj5cbiAgICAgICAgICAgICAgYnkge2RhdGE/LnVzZXI/Lm5hbWV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNwYW4gdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAg7J20IOyDneqwgeyXkCDqs7XqsJDsnbQg6rCE64uk66m0IOychOydmCDtlZjtirjrpbwg64iM65+s67O07IS47JqUIPCfpbBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIk5hdmlnYXRvciIsIlNpbmdsZUxpc3QiLCJ1c2VUd2VldEl0ZW0iLCJ1c2VUd2VldExpa2UiLCJ0d2VldCIsImRhdGEiLCJsaWtlRGF0YSIsIm11dGF0ZSIsImNsaWNrRm4iLCJvbkxpa2VDbGljayIsImZldGNoRGF0YSIsImlzTGlrZWQiLCJpc0xpa2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidXJsIiwidXJsVGV4dCIsInNpbmdsZVR3ZWV0IiwiaWQiLCJsaWtlIiwiZXhpc3RlZExpa2UiLCJvbkNsaWNrRm4iLCJ0ZXh0Iiwic3BhbiIsInVzZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});