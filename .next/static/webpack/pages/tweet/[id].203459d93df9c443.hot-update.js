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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), data = ref2.data, mutate = ref2.mutate;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likeClick = ref3[0], setLikeClick = ref3[1];\n    var onLikeClick = function() {\n        setLikeClick(function(prev) {\n            return prev + 1;\n        });\n    };\n    var ref4 = (0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), state = ref4.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (likeClick !== 0) {\n            console.log(state);\n        }\n    }, [\n        state === null || state === void 0 ? void 0 : state.newLike,\n        likeClick,\n        state === null || state === void 0 ? void 0 : state.success\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref = data.singleTweet) === null || ref === void 0 ? void 0 : ref.id,\n                    like: likeClick,\n                    onClickFn: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this) : null,\n            (state === null || state === void 0 ? void 0 : state.newlike) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"like\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 25\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"unlike\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 45\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"Y5vKR2X0+qwr7iEK9FTNt/M1BYM=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBRUU7QUFFSTtBQUNBOztBQUUxQyxTQUFTTSxLQUFLLEdBQUc7UUFvQmhCQyxHQUFpQixFQUdmQSxJQUFpQjs7SUF0QmpDLElBQXlCSCxJQUFjLEdBQWRBLG9FQUFZLEVBQUUsRUFBL0JHLElBQUksR0FBYUgsSUFBYyxDQUEvQkcsSUFBSSxFQUFFQyxNQUFNLEdBQUtKLElBQWMsQ0FBekJJLE1BQU07SUFDcEIsSUFBa0NOLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFUL0MsU0FTa0IsR0FBa0JBLElBQVcsR0FBN0IsRUFUbEIsWUFTZ0MsR0FBSUEsSUFBVyxHQUFmO0lBQzlCLElBQU1TLFdBQVcsR0FBRyxXQUFNO1FBQ3hCRCxZQUFZLENBQUMsU0FBQ0UsSUFBSTttQkFBS0EsSUFBSSxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDbEM7SUFDRCxJQUF3QlAsSUFBYyxHQUFkQSxvRUFBWSxFQUFFLEVBQTlCRSxLQUFXLEdBQUtGLElBQWMsQ0FBOUJFLElBQUk7SUFFWk4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVEsU0FBUyxLQUFLLENBQUMsRUFBRTtZQUNuQkssT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0tBQ0YsRUFBRTtRQUFDQSxLQUFLLGFBQUxBLEtBQUssV0FBUyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLEtBQUssQ0FBRUcsT0FBTztRQUFFUCxTQUFTO1FBQUVJLEtBQUssYUFBTEEsS0FBSyxXQUFTLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsS0FBSyxDQUFFSSxPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWhELHFCQUNFLDhEQUFDQyxLQUFHOztZQUFDLFdBRUg7WUFBQ1gsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFJLENBQUVZLFdBQVcsa0JBQ2hCLDhEQUFDRCxLQUFHOzBCQUNGLDRFQUFDZiw4REFBVTtvQkFDVGlCLEVBQUUsRUFBRWIsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxHQUFpQixHQUFqQkEsSUFBSSxDQUFFWSxXQUFXLGNBQWpCWixHQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVhLEVBQUU7b0JBQ3pCQyxJQUFJLEVBQUVaLFNBQVM7b0JBQ2ZhLFNBQVMsRUFBRVgsV0FBVztvQkFDdEJZLElBQUksRUFBRWhCLElBQUksYUFBSkEsSUFBSSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBRVksV0FBVyxjQUFqQlosSUFBaUIsY0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFpQixDQUFFRCxLQUFLOzs7Ozt3QkFDOUI7Ozs7O29CQUNFLEdBQ0osSUFBSTtZQUNQTyxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBUyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLEtBQUssQ0FBRVcsT0FBTyxrQkFBRyw4REFBQ0MsTUFBSTswQkFBQyxNQUFJOzs7OztvQkFBTyxpQkFBRyw4REFBQ0EsTUFBSTswQkFBQyxRQUFNOzs7OztvQkFBTzs7Ozs7O1lBQ3JELENBQ047Q0FDSDtHQTlCdUJuQixLQUFLOztRQUNGRixnRUFBWTtRQUtiQyxnRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTaW5nbGVMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpbmdsZUxpc3RcIjtcblxuaW1wb3J0IHVzZVR3ZWV0SXRlbSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldEl0ZW1cIjtcbmltcG9ydCB1c2VUd2VldExpa2UgZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRMaWtlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZWV0KCkge1xuICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlVHdlZXRJdGVtKCk7XG4gIGNvbnN0IFtsaWtlQ2xpY2ssIHNldExpa2VDbGlja10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgb25MaWtlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TGlrZUNsaWNrKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gIH07XG4gIGNvbnN0IHsgZGF0YTogc3RhdGUgfSA9IHVzZVR3ZWV0TGlrZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxpa2VDbGljayAhPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIH1cbiAgfSwgW3N0YXRlPy5uZXdMaWtlLCBsaWtlQ2xpY2ssIHN0YXRlPy5zdWNjZXNzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgaGkgdHdlZXR+XG4gICAgICB7ZGF0YT8uc2luZ2xlVHdlZXQgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNpbmdsZUxpc3RcbiAgICAgICAgICAgIGlkPXtkYXRhPy5zaW5nbGVUd2VldD8uaWR9XG4gICAgICAgICAgICBsaWtlPXtsaWtlQ2xpY2t9XG4gICAgICAgICAgICBvbkNsaWNrRm49e29uTGlrZUNsaWNrfVxuICAgICAgICAgICAgdGV4dD17ZGF0YT8uc2luZ2xlVHdlZXQ/LnR3ZWV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7c3RhdGU/Lm5ld2xpa2UgPyA8c3Bhbj5saWtlPC9zcGFuPiA6IDxzcGFuPnVubGlrZTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpbmdsZUxpc3QiLCJ1c2VUd2VldEl0ZW0iLCJ1c2VUd2VldExpa2UiLCJ0d2VldCIsImRhdGEiLCJtdXRhdGUiLCJsaWtlQ2xpY2siLCJzZXRMaWtlQ2xpY2siLCJvbkxpa2VDbGljayIsInByZXYiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdMaWtlIiwic3VjY2VzcyIsImRpdiIsInNpbmdsZVR3ZWV0IiwiaWQiLCJsaWtlIiwib25DbGlja0ZuIiwidGV4dCIsIm5ld2xpa2UiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});