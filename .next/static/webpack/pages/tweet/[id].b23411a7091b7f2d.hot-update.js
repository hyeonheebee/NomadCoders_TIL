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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navigator */ \"./components/navigator.tsx\");\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref7, ref1, ref2, ref3, ref4;\n    _s();\n    var ref5 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), data = ref5.data, mutate = ref5.mutate;\n    var ref6 = _slicedToArray((0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), 2), clickFn = ref6[0], likeData = ref6[1];\n    mutate(_objectSpread({}, data, {\n        isLiked: data === null || data === void 0 ? void 0 : data.like\n    }), true);\n    var onLikeClick = function() {\n        var ref;\n        clickFn(data);\n        if (!likeData.fetchData) return;\n        mutate(_objectSpread({}, data, {\n            isLiked: (ref = likeData.fetchData) === null || ref === void 0 ? void 0 : ref.isLike\n        }), true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        mutate(false);\n    }, []);\n    console.log(\"one:\", data, \"two:\", (ref7 = likeData.fetchData) === null || ref7 === void 0 ? void 0 : ref7.isLike);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-rose-100 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                url: \"/\",\n                urlText: \"Home|Tweets\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex font-dongle items-center justify-center bg-rose-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        id: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.id,\n                        like: // likeData.fetchData?.isLike\n                        //   ? likeData.fetchData?.isLike\n                        //   : data?.isLiked\n                        (data === null || data === void 0 ? void 0 : data.isLiked) !== undefined ? data === null || data === void 0 ? void 0 : data.isLiked : (ref2 = likeData.fetchData) === null || ref2 === void 0 ? void 0 : ref2.isLike,\n                        onClickFn: onLikeClick,\n                        text: data === null || data === void 0 ? void 0 : (ref3 = data.singleTweet) === null || ref3 === void 0 ? void 0 : ref3.tweet\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-span ml-8\",\n                        children: [\n                            \"by \",\n                            data === null || data === void 0 ? void 0 : (ref4 = data.user) === null || ref4 === void 0 ? void 0 : ref4.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"Takl+/dAidS5ImrDHURv/6o9LaM=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0IsV0FBUSxHQUExQkEsS0FBQUEsQ0FBMEIsR0FBMUJBLElBQWtCLENBQUVRLE1BQU07d0JBR2hDVSxTQUFTLEVBQUVaLFdBQVc7d0JBQ3RCYSxJQUFJLEVBQUVsQixJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLElBQWlCLEdBQWpCQSxJQUFJLENBQUVjLFdBQVcsY0FBakJkLElBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBaUIsQ0FBRUYsS0FBSzs7Ozs7NEJBQzlCO2tDQUNGLDhEQUFDcUIsTUFBSTt3QkFBQ1IsU0FBUyxFQUFDLGdCQUFnQjs7NEJBQUMsS0FBRzs0QkFBQ1gsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxDQUFBQSxJQUFVLEdBQVZBLElBQUksQ0FBRW9CLElBQUksY0FBVnBCLElBQVUsY0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFVLENBQUVxQixJQUFJOzs7Ozs7NEJBQVE7Ozs7OztvQkFDekQsR0FDSixJQUFJOzs7Ozs7WUFDSixDQUNOO0NBQ0g7R0FyQ3VCdkIsS0FBSzs7UUFDRkYsZ0VBQVk7UUFDVEMsZ0VBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW2lkXS50c3g/ZjNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25hdmlnYXRvclwiO1xuXG5pbXBvcnQgU2luZ2xlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaW5nbGVMaXN0XCI7XG5cbmltcG9ydCB1c2VUd2VldEl0ZW0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRJdGVtXCI7XG5pbXBvcnQgdXNlVHdlZXRMaWtlIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0TGlrZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d2VldCgpIHtcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVR3ZWV0SXRlbSgpO1xuICBjb25zdCBbY2xpY2tGbiwgbGlrZURhdGFdID0gdXNlVHdlZXRMaWtlKCk7XG4gIG11dGF0ZSh7IC4uLmRhdGEsIGlzTGlrZWQ6IGRhdGE/Lmxpa2UgfSwgdHJ1ZSk7XG4gIGNvbnN0IG9uTGlrZUNsaWNrID0gKCkgPT4ge1xuICAgIGNsaWNrRm4oZGF0YSk7XG4gICAgaWYgKCFsaWtlRGF0YS5mZXRjaERhdGEpIHJldHVybjtcbiAgICBtdXRhdGUoeyAuLi5kYXRhLCBpc0xpa2VkOiBsaWtlRGF0YS5mZXRjaERhdGE/LmlzTGlrZSB9LCB0cnVlKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtdXRhdGUoZmFsc2UpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKFwib25lOlwiLCBkYXRhLCBcInR3bzpcIiwgbGlrZURhdGEuZmV0Y2hEYXRhPy5pc0xpa2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcm9zZS0xMDAgaC1zY3JlZW5cIj5cbiAgICAgIDxOYXZpZ2F0b3IgdXJsPVwiL1wiIHVybFRleHQ9XCJIb21lfFR3ZWV0c1wiIC8+XG4gICAgICB7ZGF0YT8uc2luZ2xlVHdlZXQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmb250LWRvbmdsZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcm9zZS0yMDBcIj5cbiAgICAgICAgICA8U2luZ2xlTGlzdFxuICAgICAgICAgICAgaWQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py5pZH1cbiAgICAgICAgICAgIGxpa2U9e1xuICAgICAgICAgICAgICAvLyBsaWtlRGF0YS5mZXRjaERhdGE/LmlzTGlrZVxuICAgICAgICAgICAgICAvLyAgID8gbGlrZURhdGEuZmV0Y2hEYXRhPy5pc0xpa2VcbiAgICAgICAgICAgICAgLy8gICA6IGRhdGE/LmlzTGlrZWRcbiAgICAgICAgICAgICAgZGF0YT8uaXNMaWtlZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBkYXRhPy5pc0xpa2VkXG4gICAgICAgICAgICAgICAgOiBsaWtlRGF0YS5mZXRjaERhdGE/LmlzTGlrZVxuICAgICAgICAgICAgICAvLyBkYXRhPy5pc0xpa2VkID8gZGF0YT8uaXNMaWtlZCA6IGxpa2VEYXRhLmZldGNoRGF0YT8uaXNMaWtlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrRm49e29uTGlrZUNsaWNrfVxuICAgICAgICAgICAgdGV4dD17ZGF0YT8uc2luZ2xlVHdlZXQ/LnR3ZWV0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zcGFuIG1sLThcIj5ieSB7ZGF0YT8udXNlcj8ubmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJOYXZpZ2F0b3IiLCJTaW5nbGVMaXN0IiwidXNlVHdlZXRJdGVtIiwidXNlVHdlZXRMaWtlIiwidHdlZXQiLCJsaWtlRGF0YSIsImRhdGEiLCJtdXRhdGUiLCJjbGlja0ZuIiwiaXNMaWtlZCIsImxpa2UiLCJvbkxpa2VDbGljayIsImZldGNoRGF0YSIsImlzTGlrZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ1cmwiLCJ1cmxUZXh0Iiwic2luZ2xlVHdlZXQiLCJpZCIsInVuZGVmaW5lZCIsIm9uQ2xpY2tGbiIsInRleHQiLCJzcGFuIiwidXNlciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});