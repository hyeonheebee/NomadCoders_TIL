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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref4, ref1;\n    _s();\n    var ref2 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), data = ref2.data, mutate = ref2.mutate;\n    var ref3 = _slicedToArray((0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), 2), clickFn = ref3[0], likeData = ref3[1];\n    var onLikeClick = function() {\n        var ref;\n        clickFn(data);\n        mutate(_objectSpread({}, data, {\n            isLiked: (ref = likeData.fetchData) === null || ref === void 0 ? void 0 : ref.isLike\n        }), true);\n    // setLikeClick((prev) => !prev);\n    };\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref4 = data.singleTweet) === null || ref4 === void 0 ? void 0 : ref4.id,\n                    like: data === null || data === void 0 ? void 0 : data.isLiked,\n                    onClickFn: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"ynR8LWSvkwlBwbsdSxsuXz80zC0=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFYTtBQUVJO0FBQ0E7O0FBRTFDLFNBQVNJLEtBQUssR0FBRztRQWtCaEJDLElBQWlCLEVBR2ZBLElBQWlCOztJQXBCakMsSUFBeUJILElBQWMsR0FBZEEsb0VBQVksRUFBRSxFQUEvQkcsSUFBSSxHQUFhSCxJQUFjLENBQS9CRyxJQUFJLEVBQUVDLE1BQU0sR0FBS0osSUFBYyxDQUF6QkksTUFBTTtJQUNwQixJQUE0QkgsSUFBYyxrQkFBZEEsb0VBQVksRUFBRSxNQUFuQ0ksT0FBTyxHQUFjSixJQUFjLEdBQTVCLEVBQUVLLFFBQVEsR0FBSUwsSUFBYyxHQUFsQjtJQUV4QixJQUFNTSxXQUFXLEdBQUcsV0FBTTtZQUdHRCxHQUFrQjtRQUY3Q0QsT0FBTyxDQUFDRixJQUFJLENBQUMsQ0FBQztRQUVkQyxNQUFNLENBQUMsa0JBQUtELElBQUk7WUFBRUssT0FBTyxFQUFFRixDQUFBQSxHQUFrQixHQUFsQkEsUUFBUSxDQUFDRyxTQUFTLGNBQWxCSCxHQUFrQixXQUFRLEdBQTFCQSxLQUFBQSxDQUEwQixHQUExQkEsR0FBa0IsQ0FBRUksTUFBTTtVQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsaUNBQWlDO0tBQ2xDO0lBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJLENBQUMsQ0FBQztJQUNsQixxQkFDRSw4REFBQ1UsS0FBRzs7WUFBQyxXQUVIO1lBQUNWLENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFFVyxXQUFXLGtCQUNoQiw4REFBQ0QsS0FBRzswQkFDRiw0RUFBQ2QsOERBQVU7b0JBQ1RnQixFQUFFLEVBQUVaLElBQUksYUFBSkEsSUFBSSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBRVcsV0FBVyxjQUFqQlgsSUFBaUIsY0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFpQixDQUFFWSxFQUFFO29CQUN6QkMsSUFBSSxFQUFFYixJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRUssT0FBTztvQkFDbkJTLFNBQVMsRUFBRVYsV0FBVztvQkFDdEJXLElBQUksRUFBRWYsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxJQUFpQixHQUFqQkEsSUFBSSxDQUFFVyxXQUFXLGNBQWpCWCxJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVELEtBQUs7Ozs7O3dCQUM5Qjs7Ozs7b0JBQ0UsR0FDSixJQUFJOzs7Ozs7WUFDSixDQUNOO0NBQ0g7R0EzQnVCQSxLQUFLOztRQUNGRixnRUFBWTtRQUNUQyxnRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2luZ2xlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaW5nbGVMaXN0XCI7XG5cbmltcG9ydCB1c2VUd2VldEl0ZW0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRJdGVtXCI7XG5pbXBvcnQgdXNlVHdlZXRMaWtlIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0TGlrZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d2VldCgpIHtcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVR3ZWV0SXRlbSgpO1xuICBjb25zdCBbY2xpY2tGbiwgbGlrZURhdGFdID0gdXNlVHdlZXRMaWtlKCk7XG5cbiAgY29uc3Qgb25MaWtlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY2xpY2tGbihkYXRhKTtcblxuICAgIG11dGF0ZSh7IC4uLmRhdGEsIGlzTGlrZWQ6IGxpa2VEYXRhLmZldGNoRGF0YT8uaXNMaWtlIH0sIHRydWUpO1xuICAgIC8vIHNldExpa2VDbGljaygocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBoaSB0d2VldH5cbiAgICAgIHtkYXRhPy5zaW5nbGVUd2VldCA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2luZ2xlTGlzdFxuICAgICAgICAgICAgaWQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py5pZH1cbiAgICAgICAgICAgIGxpa2U9e2RhdGE/LmlzTGlrZWR9XG4gICAgICAgICAgICBvbkNsaWNrRm49e29uTGlrZUNsaWNrfVxuICAgICAgICAgICAgdGV4dD17ZGF0YT8uc2luZ2xlVHdlZXQ/LnR3ZWV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTaW5nbGVMaXN0IiwidXNlVHdlZXRJdGVtIiwidXNlVHdlZXRMaWtlIiwidHdlZXQiLCJkYXRhIiwibXV0YXRlIiwiY2xpY2tGbiIsImxpa2VEYXRhIiwib25MaWtlQ2xpY2siLCJpc0xpa2VkIiwiZmV0Y2hEYXRhIiwiaXNMaWtlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNpbmdsZVR3ZWV0IiwiaWQiLCJsaWtlIiwib25DbGlja0ZuIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});