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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), data = ref4.data, mutate = ref4.mutate;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likeClick = ref5[0], setLikeClick = ref5[1];\n    var ref6 = (0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), likedata = ref6.data, likemutate = ref6.mutate;\n    var onLikeClick = function() {\n        setLikeClick(function(prev) {\n            return prev + 1;\n        });\n        if (likeClick !== 0) {\n            likemutate(true);\n        }\n    };\n    console.log(likedata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref = data.singleTweet) === null || ref === void 0 ? void 0 : ref.id,\n                    like: likeClick,\n                    onClickFn: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this) : null,\n            (likedata === null || likedata === void 0 ? void 0 : (ref2 = likedata.newLike) === null || ref2 === void 0 ? void 0 : ref2.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"like\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 32\n            }, this) : null,\n            !(likedata === null || likedata === void 0 ? void 0 : (ref3 = likedata.newLike) === null || ref3 === void 0 ? void 0 : ref3.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"unlike\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 36,\n                columnNumber: 33\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"DYiBLGJfmPe7t1nCe2fakpLMQe8=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBRUU7QUFFSTtBQUNBOztBQUUxQyxTQUFTSyxLQUFLLEdBQUc7UUFvQmhCQyxHQUFpQixFQUdmQSxJQUFpQixFQUk1QkMsSUFBaUIsRUFDaEJBLElBQWlCOztJQTNCdkIsSUFBeUJKLElBQWMsR0FBZEEsb0VBQVksRUFBRSxFQUEvQkcsSUFBSSxHQUFhSCxJQUFjLENBQS9CRyxJQUFJLEVBQUVFLE1BQU0sR0FBS0wsSUFBYyxDQUF6QkssTUFBTTtJQUNwQixJQUFrQ1AsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQVQvQyxTQVNrQixHQUFrQkEsSUFBVyxHQUE3QixFQVRsQixZQVNnQyxHQUFJQSxJQUFXLEdBQWY7SUFFOUIsSUFBK0NHLElBQWMsR0FBZEEsb0VBQVksRUFBRSxFQUFyREUsUUFBYyxHQUF5QkYsSUFBYyxDQUFyREUsSUFBSSxFQUFZRSxVQUFrQixHQUFLSixJQUFjLENBQXJDSSxNQUFNO0lBRTlCLElBQU1JLFdBQVcsR0FBRyxXQUFNO1FBQ3hCRixZQUFZLENBQUMsU0FBQ0csSUFBSTttQkFBS0EsSUFBSSxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7UUFDakMsSUFBSUosU0FBUyxLQUFLLENBQUMsRUFBRTtZQUNuQkUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFFREcsT0FBTyxDQUFDQyxHQUFHLENBQUNSLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLHFCQUNFLDhEQUFDUyxLQUFHOztZQUFDLFdBRUg7WUFBQ1YsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFJLENBQUVXLFdBQVcsa0JBQ2hCLDhEQUFDRCxLQUFHOzBCQUNGLDRFQUFDZCw4REFBVTtvQkFDVGdCLEVBQUUsRUFBRVosSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxHQUFpQixHQUFqQkEsSUFBSSxDQUFFVyxXQUFXLGNBQWpCWCxHQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVZLEVBQUU7b0JBQ3pCQyxJQUFJLEVBQUVWLFNBQVM7b0JBQ2ZXLFNBQVMsRUFBRVIsV0FBVztvQkFDdEJTLElBQUksRUFBRWYsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxJQUFpQixHQUFqQkEsSUFBSSxDQUFFVyxXQUFXLGNBQWpCWCxJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVELEtBQUs7Ozs7O3dCQUM5Qjs7Ozs7b0JBQ0UsR0FDSixJQUFJO1lBQ1BFLENBQUFBLFFBQVEsYUFBUkEsUUFBUSxXQUFTLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsSUFBaUIsR0FBakJBLFFBQVEsQ0FBRWUsT0FBTyxjQUFqQmYsSUFBaUIsY0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFpQixDQUFFVyxFQUFFLENBQUosaUJBQU8sOERBQUNLLE1BQUk7MEJBQUMsTUFBSTs7Ozs7b0JBQU8sR0FBRyxJQUFJO1lBQ2hELENBQUNoQixDQUFBQSxRQUFRLGFBQVJBLFFBQVEsV0FBUyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLElBQWlCLEdBQWpCQSxRQUFRLENBQUVlLE9BQU8sY0FBakJmLElBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBaUIsQ0FBRVcsRUFBRSxDQUFKLGlCQUFPLDhEQUFDSyxNQUFJOzBCQUFDLFFBQU07Ozs7O29CQUFPLEdBQUcsSUFBSTs7Ozs7O1lBQ2hELENBQ047Q0FDSDtHQS9CdUJsQixLQUFLOztRQUNGRixnRUFBWTtRQUdVQyxnRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTaW5nbGVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpbmdsZUxpc3RcIjtcblxuaW1wb3J0IHVzZVR3ZWV0SXRlbSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldEl0ZW1cIjtcbmltcG9ydCB1c2VUd2VldExpa2UgZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRMaWtlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZWV0KCkge1xuICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlVHdlZXRJdGVtKCk7XG4gIGNvbnN0IFtsaWtlQ2xpY2ssIHNldExpa2VDbGlja10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB7IGRhdGE6IGxpa2VkYXRhLCBtdXRhdGU6IGxpa2VtdXRhdGUgfSA9IHVzZVR3ZWV0TGlrZSgpO1xuXG4gIGNvbnN0IG9uTGlrZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldExpa2VDbGljaygocHJldikgPT4gcHJldiArIDEpO1xuICAgIGlmIChsaWtlQ2xpY2sgIT09IDApIHtcbiAgICAgIGxpa2VtdXRhdGUodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKGxpa2VkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgaGkgdHdlZXR+XG4gICAgICB7ZGF0YT8uc2luZ2xlVHdlZXQgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNpbmdsZUxpc3RcbiAgICAgICAgICAgIGlkPXtkYXRhPy5zaW5nbGVUd2VldD8uaWR9XG4gICAgICAgICAgICBsaWtlPXtsaWtlQ2xpY2t9XG4gICAgICAgICAgICBvbkNsaWNrRm49e29uTGlrZUNsaWNrfVxuICAgICAgICAgICAgdGV4dD17ZGF0YT8uc2luZ2xlVHdlZXQ/LnR3ZWV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7bGlrZWRhdGE/Lm5ld0xpa2U/LmlkID8gPHNwYW4+bGlrZTwvc3Bhbj4gOiBudWxsfVxuICAgICAgeyFsaWtlZGF0YT8ubmV3TGlrZT8uaWQgPyA8c3Bhbj51bmxpa2U8L3NwYW4+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2luZ2xlTGlzdCIsInVzZVR3ZWV0SXRlbSIsInVzZVR3ZWV0TGlrZSIsInR3ZWV0IiwiZGF0YSIsImxpa2VkYXRhIiwibXV0YXRlIiwibGlrZUNsaWNrIiwic2V0TGlrZUNsaWNrIiwibGlrZW11dGF0ZSIsIm9uTGlrZUNsaWNrIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzaW5nbGVUd2VldCIsImlkIiwibGlrZSIsIm9uQ2xpY2tGbiIsInRleHQiLCJuZXdMaWtlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});