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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref4, ref1;\n    _s();\n    var ref2 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), data = ref2.data, mutate = ref2.mutate;\n    var ref3 = _slicedToArray((0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), 2), clickFn = ref3[0], likeData = ref3[1];\n    var onLikeClick = function() {\n        var ref;\n        clickFn(data);\n        if (!likeData.fetchData) return;\n        mutate(_objectSpread({}, data, {\n            isLiked: (ref = likeData.fetchData) === null || ref === void 0 ? void 0 : ref.isLike\n        }), true);\n    };\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref4 = data.singleTweet) === null || ref4 === void 0 ? void 0 : ref4.id,\n                    like: data === null || data === void 0 ? void 0 : data.isLiked,\n                    onClickFn: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: (data === null || data === void 0 ? void 0 : data.isLiked) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"like is true, so you can push Unlike\"\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"you can push like\"\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"ynR8LWSvkwlBwbsdSxsuXz80zC0=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFMkI7QUFFSTtBQUNBOztBQUUxQyxTQUFTSSxLQUFLLEdBQUc7UUFnQmhCQyxJQUFpQixFQUdmQSxJQUFpQjs7SUFsQmpDLElBQXlCSCxJQUFjLEdBQWRBLG9FQUFZLEVBQUUsRUFBL0JHLElBQUksR0FBYUgsSUFBYyxDQUEvQkcsSUFBSSxFQUFFQyxNQUFNLEdBQUtKLElBQWMsQ0FBekJJLE1BQU07SUFDcEIsSUFBNEJILElBQWMsa0JBQWRBLG9FQUFZLEVBQUUsTUFBbkNJLE9BQU8sR0FBY0osSUFBYyxHQUE1QixFQUFFSyxRQUFRLEdBQUlMLElBQWMsR0FBbEI7SUFDeEIsSUFBTU0sV0FBVyxHQUFHLFdBQU07WUFHR0QsR0FBa0I7UUFGN0NELE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUNHLFFBQVEsQ0FBQ0UsU0FBUyxFQUFFLE9BQU87UUFDaENKLE1BQU0sQ0FBQyxrQkFBS0QsSUFBSTtZQUFFTSxPQUFPLEVBQUVILENBQUFBLEdBQWtCLEdBQWxCQSxRQUFRLENBQUNFLFNBQVMsY0FBbEJGLEdBQWtCLFdBQVEsR0FBMUJBLEtBQUFBLENBQTBCLEdBQTFCQSxHQUFrQixDQUFFSSxNQUFNO1VBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNoRTtJQUVEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsSUFBSSxDQUFDLENBQUM7SUFDbEIscUJBQ0UsOERBQUNVLEtBQUc7O1lBQUMsV0FFSDtZQUFDVixDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQUksQ0FBRVcsV0FBVyxrQkFDaEIsOERBQUNELEtBQUc7MEJBQ0YsNEVBQUNkLDhEQUFVO29CQUNUZ0IsRUFBRSxFQUFFWixJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLElBQWlCLEdBQWpCQSxJQUFJLENBQUVXLFdBQVcsY0FBakJYLElBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBaUIsQ0FBRVksRUFBRTtvQkFDekJDLElBQUksRUFBRWIsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVNLE9BQU87b0JBQ25CUSxTQUFTLEVBQUVWLFdBQVc7b0JBQ3RCVyxJQUFJLEVBQUVmLElBQUksYUFBSkEsSUFBSSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBRVcsV0FBVyxjQUFqQlgsSUFBaUIsY0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFpQixDQUFFRCxLQUFLOzs7Ozt3QkFDOUI7Ozs7O29CQUNFLEdBQ0osSUFBSTswQkFDUiw4REFBQ2lCLE1BQUk7MEJBQ0ZoQixDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRU0sT0FBTyxrQkFDWiw4REFBQ1UsTUFBSTs4QkFBQyxzQ0FBb0M7Ozs7O3dCQUFPLGlCQUVqRCw4REFBQ0EsTUFBSTs4QkFBQyxtQkFBaUI7Ozs7O3dCQUFPOzs7OztvQkFFM0I7Ozs7OztZQUNILENBQ047Q0FDSDtHQWhDdUJqQixLQUFLOztRQUNGRixnRUFBWTtRQUNUQyxnRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNpbmdsZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2luZ2xlTGlzdFwiO1xuXG5pbXBvcnQgdXNlVHdlZXRJdGVtIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0SXRlbVwiO1xuaW1wb3J0IHVzZVR3ZWV0TGlrZSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldExpa2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlZXQoKSB7XG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlIH0gPSB1c2VUd2VldEl0ZW0oKTtcbiAgY29uc3QgW2NsaWNrRm4sIGxpa2VEYXRhXSA9IHVzZVR3ZWV0TGlrZSgpO1xuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHtcbiAgICBjbGlja0ZuKGRhdGEpO1xuICAgIGlmICghbGlrZURhdGEuZmV0Y2hEYXRhKSByZXR1cm47XG4gICAgbXV0YXRlKHsgLi4uZGF0YSwgaXNMaWtlZDogbGlrZURhdGEuZmV0Y2hEYXRhPy5pc0xpa2UgfSwgdHJ1ZSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIGhpIHR3ZWV0flxuICAgICAge2RhdGE/LnNpbmdsZVR3ZWV0ID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTaW5nbGVMaXN0XG4gICAgICAgICAgICBpZD17ZGF0YT8uc2luZ2xlVHdlZXQ/LmlkfVxuICAgICAgICAgICAgbGlrZT17ZGF0YT8uaXNMaWtlZH1cbiAgICAgICAgICAgIG9uQ2xpY2tGbj17b25MaWtlQ2xpY2t9XG4gICAgICAgICAgICB0ZXh0PXtkYXRhPy5zaW5nbGVUd2VldD8udHdlZXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxzcGFuPlxuICAgICAgICB7ZGF0YT8uaXNMaWtlZCA/IChcbiAgICAgICAgICA8c3Bhbj5saWtlIGlzIHRydWUsIHNvIHlvdSBjYW4gcHVzaCBVbmxpa2U8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4+eW91IGNhbiBwdXNoIGxpa2U8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTaW5nbGVMaXN0IiwidXNlVHdlZXRJdGVtIiwidXNlVHdlZXRMaWtlIiwidHdlZXQiLCJkYXRhIiwibXV0YXRlIiwiY2xpY2tGbiIsImxpa2VEYXRhIiwib25MaWtlQ2xpY2siLCJmZXRjaERhdGEiLCJpc0xpa2VkIiwiaXNMaWtlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNpbmdsZVR3ZWV0IiwiaWQiLCJsaWtlIiwib25DbGlja0ZuIiwidGV4dCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});