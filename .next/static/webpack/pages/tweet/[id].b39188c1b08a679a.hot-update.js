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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), data = ref2.data, mutate = ref2.mutate;\n    // mutate({ ...data }, false);\n    // const { data: likedata, mutate: likemutate } = useTweetLike();\n    // likemutate({ ...data }, false);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likeClick = ref3[0], setLikeClick = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), userLike = ref4[0], setUserLike = ref4[1];\n    var onLikeClick = function() {\n        setLikeClick(function(prev) {\n            return prev + 1;\n        });\n        if (likeClick !== 0) {\n            mutate(true);\n        }\n    };\n    // console.log(likedata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref = data.singleTweet) === null || ref === void 0 ? void 0 : ref.id,\n                    like: likeClick,\n                    onClickFn: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"9oeAZDG+P1De1Nq2VMHZ47yUMPU=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFFRTtBQUVJOztBQUcxQyxTQUFTSSxLQUFLLEdBQUc7UUFxQmhCQyxHQUFpQixFQUdmQSxJQUFpQjs7SUF2QmpDLElBQXlCRixJQUFjLEdBQWRBLG9FQUFZLEVBQUUsRUFBL0JFLElBQUksR0FBYUYsSUFBYyxDQUEvQkUsSUFBSSxFQUFFQyxNQUFNLEdBQUtILElBQWMsQ0FBekJHLE1BQU07SUFDcEIsOEJBQThCO0lBQzlCLGlFQUFpRTtJQUNqRSxrQ0FBa0M7SUFDbEMsSUFBa0NMLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFaL0MsU0FZa0IsR0FBa0JBLElBQVcsR0FBN0IsRUFabEIsWUFZZ0MsR0FBSUEsSUFBVyxHQUFmO0lBQzlCLElBQWdDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBYmpELFFBYWlCLEdBQWlCQSxJQUFlLEdBQWhDLEVBYmpCLFdBYThCLEdBQUlBLElBQWUsR0FBbkI7SUFFNUIsSUFBTVUsV0FBVyxHQUFHLFdBQU07UUFDeEJILFlBQVksQ0FBQyxTQUFDSSxJQUFJO21CQUFLQSxJQUFJLEdBQUcsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUNqQyxJQUFJTCxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ25CRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZDtLQUNGO0lBQ0QseUJBQXlCO0lBQ3pCLHFCQUNFLDhEQUFDTyxLQUFHOztZQUFDLFdBRUg7WUFBQ1IsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFJLENBQUVTLFdBQVcsa0JBQ2hCLDhEQUFDRCxLQUFHOzBCQUNGLDRFQUFDWCw4REFBVTtvQkFDVGEsRUFBRSxFQUFFVixJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVTLFdBQVcsY0FBakJULEdBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRVUsRUFBRTtvQkFDekJDLElBQUksRUFBRVQsU0FBUztvQkFDZlUsU0FBUyxFQUFFTixXQUFXO29CQUN0Qk8sSUFBSSxFQUFFYixJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLElBQWlCLEdBQWpCQSxJQUFJLENBQUVTLFdBQVcsY0FBakJULElBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBaUIsQ0FBRUQsS0FBSzs7Ozs7d0JBQzlCOzs7OztvQkFDRSxHQUNKLElBQUk7Ozs7OztZQUdKLENBQ047Q0FDSDtHQWhDdUJBLEtBQUs7O1FBQ0ZELGdFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFNpbmdsZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2luZ2xlTGlzdFwiO1xuXG5pbXBvcnQgdXNlVHdlZXRJdGVtIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0SXRlbVwiO1xuaW1wb3J0IHVzZVR3ZWV0TGlrZSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldExpa2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlZXQoKSB7XG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlIH0gPSB1c2VUd2VldEl0ZW0oKTtcbiAgLy8gbXV0YXRlKHsgLi4uZGF0YSB9LCBmYWxzZSk7XG4gIC8vIGNvbnN0IHsgZGF0YTogbGlrZWRhdGEsIG11dGF0ZTogbGlrZW11dGF0ZSB9ID0gdXNlVHdlZXRMaWtlKCk7XG4gIC8vIGxpa2VtdXRhdGUoeyAuLi5kYXRhIH0sIGZhbHNlKTtcbiAgY29uc3QgW2xpa2VDbGljaywgc2V0TGlrZUNsaWNrXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlckxpa2UsIHNldFVzZXJMaWtlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHtcbiAgICBzZXRMaWtlQ2xpY2soKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICBpZiAobGlrZUNsaWNrICE9PSAwKSB7XG4gICAgICBtdXRhdGUodHJ1ZSk7XG4gICAgfVxuICB9O1xuICAvLyBjb25zb2xlLmxvZyhsaWtlZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIGhpIHR3ZWV0flxuICAgICAge2RhdGE/LnNpbmdsZVR3ZWV0ID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTaW5nbGVMaXN0XG4gICAgICAgICAgICBpZD17ZGF0YT8uc2luZ2xlVHdlZXQ/LmlkfVxuICAgICAgICAgICAgbGlrZT17bGlrZUNsaWNrfVxuICAgICAgICAgICAgb25DbGlja0ZuPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgIHRleHQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py50d2VldH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgey8qIHtsaWtlZGF0YT8ubmV3TGlrZT8uaWQgPyA8c3Bhbj5saWtlPC9zcGFuPiA6IG51bGx9XG4gICAgICB7IWxpa2VkYXRhPy5uZXdMaWtlPy5pZCA/IDxzcGFuPnVubGlrZTwvc3Bhbj4gOiBudWxsfSAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2luZ2xlTGlzdCIsInVzZVR3ZWV0SXRlbSIsInR3ZWV0IiwiZGF0YSIsIm11dGF0ZSIsImxpa2VDbGljayIsInNldExpa2VDbGljayIsInVzZXJMaWtlIiwic2V0VXNlckxpa2UiLCJvbkxpa2VDbGljayIsInByZXYiLCJkaXYiLCJzaW5nbGVUd2VldCIsImlkIiwibGlrZSIsIm9uQ2xpY2tGbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});