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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navigator */ \"./components/navigator.tsx\");\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref6, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), data = ref4.data, mutate = ref4.mutate;\n    var ref5 = _slicedToArray((0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), 2), clickFn = ref5[0], likeData = ref5[1];\n    var onLikeClick = function() {\n        var ref;\n        clickFn(data);\n        if (!likeData.fetchData) return;\n        mutate(_objectSpread({}, data, {\n            isLiked: (ref = likeData.fetchData) === null || ref === void 0 ? void 0 : ref.isLike\n        }), true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-rose-100 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                url: \"/\",\n                urlText: \"Home|Tweets\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex font-dongle items-center justify-center bg-rose-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        id: data === null || data === void 0 ? void 0 : (ref6 = data.singleTweet) === null || ref6 === void 0 ? void 0 : ref6.id,\n                        like: (data === null || data === void 0 ? void 0 : data.isLiked) !== undefined ? data === null || data === void 0 ? void 0 : data.isLiked : (ref1 = likeData.fetchData) === null || ref1 === void 0 ? void 0 : ref1.isLike,\n                        onClickFn: onLikeClick,\n                        text: data === null || data === void 0 ? void 0 : (ref2 = data.singleTweet) === null || ref2 === void 0 ? void 0 : ref2.tweet\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-span\",\n                        children: [\n                            \"by \",\n                            data === null || data === void 0 ? void 0 : (ref3 = data.user) === null || ref3 === void 0 ? void 0 : ref3.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"ynR8LWSvkwlBwbsdSxsuXz80zC0=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7Ozs7OzRCQUFROzs7Ozs7b0JBQ3BELEdBQ0osSUFBSTs7Ozs7O1lBQ0osQ0FDTjtDQUNIO0dBN0J1QnJCLEtBQUs7O1FBQ0ZGLGdFQUFZO1FBQ1RDLGdFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0b3JcIjtcblxuaW1wb3J0IFNpbmdsZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2luZ2xlTGlzdFwiO1xuXG5pbXBvcnQgdXNlVHdlZXRJdGVtIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0SXRlbVwiO1xuaW1wb3J0IHVzZVR3ZWV0TGlrZSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldExpa2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlZXQoKSB7XG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlIH0gPSB1c2VUd2VldEl0ZW0oKTtcbiAgY29uc3QgW2NsaWNrRm4sIGxpa2VEYXRhXSA9IHVzZVR3ZWV0TGlrZSgpO1xuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHtcbiAgICBjbGlja0ZuKGRhdGEpO1xuICAgIGlmICghbGlrZURhdGEuZmV0Y2hEYXRhKSByZXR1cm47XG4gICAgbXV0YXRlKHsgLi4uZGF0YSwgaXNMaWtlZDogbGlrZURhdGEuZmV0Y2hEYXRhPy5pc0xpa2UgfSwgdHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJvc2UtMTAwIGgtc2NyZWVuXCI+XG4gICAgICA8TmF2aWdhdG9yIHVybD1cIi9cIiB1cmxUZXh0PVwiSG9tZXxUd2VldHNcIiAvPlxuICAgICAge2RhdGE/LnNpbmdsZVR3ZWV0ID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZm9udC1kb25nbGUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXJvc2UtMjAwXCI+XG4gICAgICAgICAgPFNpbmdsZUxpc3RcbiAgICAgICAgICAgIGlkPXtkYXRhPy5zaW5nbGVUd2VldD8uaWR9XG4gICAgICAgICAgICBsaWtlPXtcbiAgICAgICAgICAgICAgZGF0YT8uaXNMaWtlZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBkYXRhPy5pc0xpa2VkXG4gICAgICAgICAgICAgICAgOiBsaWtlRGF0YS5mZXRjaERhdGE/LmlzTGlrZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGlja0ZuPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgIHRleHQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py50d2VldH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc3BhblwiPmJ5IHtkYXRhPy51c2VyPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmlnYXRvciIsIlNpbmdsZUxpc3QiLCJ1c2VUd2VldEl0ZW0iLCJ1c2VUd2VldExpa2UiLCJ0d2VldCIsImRhdGEiLCJsaWtlRGF0YSIsIm11dGF0ZSIsImNsaWNrRm4iLCJvbkxpa2VDbGljayIsImZldGNoRGF0YSIsImlzTGlrZWQiLCJpc0xpa2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ1cmwiLCJ1cmxUZXh0Iiwic2luZ2xlVHdlZXQiLCJpZCIsImxpa2UiLCJ1bmRlZmluZWQiLCJvbkNsaWNrRm4iLCJ0ZXh0Iiwic3BhbiIsInVzZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});