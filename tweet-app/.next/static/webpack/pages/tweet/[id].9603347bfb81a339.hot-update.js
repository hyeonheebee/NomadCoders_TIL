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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navigator */ \"./components/navigator.tsx\");\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref7, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), data = ref4.data, mutate = ref4.mutate;\n    var ref5 = _slicedToArray((0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), 2), clickFn = ref5[0], likeData = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), like = ref6[0], setLike = ref6[1];\n    var onLikeClick = function() {\n        var ref;\n        clickFn(data);\n        if (!likeData.fetchData) return;\n        mutate(_objectSpread({}, data, {\n            isLiked: (ref = likeData.fetchData) === null || ref === void 0 ? void 0 : ref.isLike\n        }), true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data === null || data === void 0 ? void 0 : data.existedLike) {\n            setLike(true);\n        }\n        setLike(false);\n    }, []);\n    console.log(\"one:\", data, \"two:\", likeData.fetchData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-rose-100 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                url: \"/\",\n                urlText: \"Home|Tweets\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex font-dongle items-center justify-center bg-rose-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        id: data === null || data === void 0 ? void 0 : (ref7 = data.singleTweet) === null || ref7 === void 0 ? void 0 : ref7.id,\n                        like: (data === null || data === void 0 ? void 0 : data.existedLike) || ((ref1 = likeData.fetchData) === null || ref1 === void 0 ? void 0 : ref1.isLike),\n                        onClickFn: onLikeClick,\n                        text: data === null || data === void 0 ? void 0 : (ref2 = data.singleTweet) === null || ref2 === void 0 ? void 0 : ref2.tweet\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-span ml-8\",\n                        children: [\n                            \"by \",\n                            data === null || data === void 0 ? void 0 : (ref3 = data.user) === null || ref3 === void 0 ? void 0 : ref3.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"KXPCZ5m55+L4mF3ccnLavUJWpsk=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBRWlCLFdBQVcsY0FBakJqQixJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVELEtBQUs7Ozs7OzRCQUM5QjtrQ0FDRiw4REFBQ3NCLE1BQUk7d0JBQUNQLFNBQVMsRUFBQyxnQkFBZ0I7OzRCQUFDLEtBQUc7NEJBQUNkLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsQ0FBQUEsSUFBVSxHQUFWQSxJQUFJLENBQUVzQixJQUFJLGNBQVZ0QixJQUFVLGNBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBVSxDQUFFdUIsSUFBSTs7Ozs7OzRCQUFROzs7Ozs7b0JBQ3pELEdBQ0osSUFBSTs7Ozs7O1lBQ0osQ0FDTjtDQUNIO0dBdkN1QnhCLEtBQUs7O1FBQ0ZGLGdFQUFZO1FBQ1RDLGdFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdG9yXCI7XG5cbmltcG9ydCBTaW5nbGVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpbmdsZUxpc3RcIjtcblxuaW1wb3J0IHVzZVR3ZWV0SXRlbSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldEl0ZW1cIjtcbmltcG9ydCB1c2VUd2VldExpa2UgZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRMaWtlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZWV0KCkge1xuICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlVHdlZXRJdGVtKCk7XG4gIGNvbnN0IFtjbGlja0ZuLCBsaWtlRGF0YV0gPSB1c2VUd2VldExpa2UoKTtcbiAgY29uc3QgW2xpa2UsIHNldExpa2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHtcbiAgICBjbGlja0ZuKGRhdGEpO1xuICAgIGlmICghbGlrZURhdGEuZmV0Y2hEYXRhKSByZXR1cm47XG4gICAgbXV0YXRlKFxuICAgICAge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBpc0xpa2VkOiBsaWtlRGF0YS5mZXRjaERhdGE/LmlzTGlrZSxcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YT8uZXhpc3RlZExpa2UpIHtcbiAgICAgIHNldExpa2UodHJ1ZSk7XG4gICAgfVxuICAgIHNldExpa2UoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coXCJvbmU6XCIsIGRhdGEsIFwidHdvOlwiLCBsaWtlRGF0YS5mZXRjaERhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcm9zZS0xMDAgaC1zY3JlZW5cIj5cbiAgICAgIDxOYXZpZ2F0b3IgdXJsPVwiL1wiIHVybFRleHQ9XCJIb21lfFR3ZWV0c1wiIC8+XG4gICAgICB7ZGF0YT8uc2luZ2xlVHdlZXQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmb250LWRvbmdsZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcm9zZS0yMDBcIj5cbiAgICAgICAgICA8U2luZ2xlTGlzdFxuICAgICAgICAgICAgaWQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py5pZH1cbiAgICAgICAgICAgIGxpa2U9e2RhdGE/LmV4aXN0ZWRMaWtlIHx8IGxpa2VEYXRhLmZldGNoRGF0YT8uaXNMaWtlfVxuICAgICAgICAgICAgb25DbGlja0ZuPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgIHRleHQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py50d2VldH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc3BhbiBtbC04XCI+Ynkge2RhdGE/LnVzZXI/Lm5hbWV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0b3IiLCJTaW5nbGVMaXN0IiwidXNlVHdlZXRJdGVtIiwidXNlVHdlZXRMaWtlIiwidHdlZXQiLCJkYXRhIiwibGlrZURhdGEiLCJtdXRhdGUiLCJjbGlja0ZuIiwibGlrZSIsInNldExpa2UiLCJvbkxpa2VDbGljayIsImZldGNoRGF0YSIsImlzTGlrZWQiLCJpc0xpa2UiLCJleGlzdGVkTGlrZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ1cmwiLCJ1cmxUZXh0Iiwic2luZ2xlVHdlZXQiLCJpZCIsIm9uQ2xpY2tGbiIsInRleHQiLCJzcGFuIiwidXNlciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});