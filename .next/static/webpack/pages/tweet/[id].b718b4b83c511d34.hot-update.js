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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var data = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().data;\n    var ref4 = (0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), likedata = ref4.data, likemutate = ref4.mutate;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likeClick = ref5[0], setLikeClick = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), userLike = ref6[0], setUserLike = ref6[1];\n    if (likedata === null || likedata === void 0 ? void 0 : likedata.newLike) {\n        setUserLike(true);\n    }\n    var onLikeClick = function() {\n        setLikeClick(function(prev) {\n            return prev + 1;\n        });\n        if (likeClick !== 0) {\n            likemutate(_objectSpread({}, data, {\n                like: likedata === null || likedata === void 0 ? void 0 : likedata.newLike\n            }), true);\n        }\n    };\n    console.log(likedata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref = data.singleTweet) === null || ref === void 0 ? void 0 : ref.id,\n                    like: likeClick,\n                    onClickFn: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this) : null,\n            (likedata === null || likedata === void 0 ? void 0 : (ref2 = likedata.newLike) === null || ref2 === void 0 ? void 0 : ref2.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"like\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 36,\n                columnNumber: 32\n            }, this) : null,\n            !(likedata === null || likedata === void 0 ? void 0 : (ref3 = likedata.newLike) === null || ref3 === void 0 ? void 0 : ref3.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"unlike\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 33\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"i6Sk4v+DG60f79GrL1BqbFlCvSY=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkEsQ0FBQUEsSUFBaUIsR0FBakJBLFFBQVEsQ0FBRU8sT0FBTyxjQUFqQlAsSUFBaUIsY0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFpQixDQUFFZSxFQUFFLENBQUosaUJBQU8sOERBQUNHLE1BQUk7MEJBQUMsUUFBTTs7Ozs7b0JBQU8sR0FBRyxJQUFJOzs7Ozs7WUFDaEQsQ0FDTjtDQUNIO0dBaEN1QnBCLEtBQUs7O1FBQ1ZGLGdFQUFZO1FBQ2tCQyxnRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTaW5nbGVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpbmdsZUxpc3RcIjtcblxuaW1wb3J0IHVzZVR3ZWV0SXRlbSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldEl0ZW1cIjtcbmltcG9ydCB1c2VUd2VldExpa2UgZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRMaWtlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZWV0KCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVR3ZWV0SXRlbSgpO1xuICBjb25zdCB7IGRhdGE6IGxpa2VkYXRhLCBtdXRhdGU6IGxpa2VtdXRhdGUgfSA9IHVzZVR3ZWV0TGlrZSgpO1xuICBjb25zdCBbbGlrZUNsaWNrLCBzZXRMaWtlQ2xpY2tdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt1c2VyTGlrZSwgc2V0VXNlckxpa2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBpZiAobGlrZWRhdGE/Lm5ld0xpa2UpIHtcbiAgICBzZXRVc2VyTGlrZSh0cnVlKTtcbiAgfVxuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHtcbiAgICBzZXRMaWtlQ2xpY2soKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICBpZiAobGlrZUNsaWNrICE9PSAwKSB7XG4gICAgICBsaWtlbXV0YXRlKHsgLi4uZGF0YSwgbGlrZTogbGlrZWRhdGE/Lm5ld0xpa2UgfSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuICBjb25zb2xlLmxvZyhsaWtlZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIGhpIHR3ZWV0flxuICAgICAge2RhdGE/LnNpbmdsZVR3ZWV0ID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTaW5nbGVMaXN0XG4gICAgICAgICAgICBpZD17ZGF0YT8uc2luZ2xlVHdlZXQ/LmlkfVxuICAgICAgICAgICAgbGlrZT17bGlrZUNsaWNrfVxuICAgICAgICAgICAgb25DbGlja0ZuPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgIHRleHQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py50d2VldH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2xpa2VkYXRhPy5uZXdMaWtlPy5pZCA/IDxzcGFuPmxpa2U8L3NwYW4+IDogbnVsbH1cbiAgICAgIHshbGlrZWRhdGE/Lm5ld0xpa2U/LmlkID8gPHNwYW4+dW5saWtlPC9zcGFuPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNpbmdsZUxpc3QiLCJ1c2VUd2VldEl0ZW0iLCJ1c2VUd2VldExpa2UiLCJ0d2VldCIsImRhdGEiLCJsaWtlZGF0YSIsIm11dGF0ZSIsImxpa2VtdXRhdGUiLCJsaWtlQ2xpY2siLCJzZXRMaWtlQ2xpY2siLCJ1c2VyTGlrZSIsInNldFVzZXJMaWtlIiwibmV3TGlrZSIsIm9uTGlrZUNsaWNrIiwicHJldiIsImxpa2UiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic2luZ2xlVHdlZXQiLCJpZCIsIm9uQ2xpY2tGbiIsInRleHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});