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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref, ref1;\n    _s();\n    var data = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().data;\n    var ref2 = (0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), likedata = ref2.data, likemutate = ref2.mutate;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likeClick = ref3[0], setLikeClick = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), like = ref4[0], setLike = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLike(false);\n    }, []);\n    var onLikeClick = function() {\n        setLikeClick(function(prev) {\n            return prev + 1;\n        });\n        if (likeClick !== 0) {\n            likemutate(true);\n        }\n        setLike(function(prev) {\n            return !prev;\n        });\n    };\n    console.log(likedata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref = data.singleTweet) === null || ref === void 0 ? void 0 : ref.id,\n                    like: likeClick,\n                    onClickFn: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"OIoqIpL8PGH87IoU9ZcAUpG/VB0=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBRUU7QUFFSTtBQUNBOztBQUUxQyxTQUFTTSxLQUFLLEdBQUc7UUFzQmhCQyxHQUFpQixFQUdmQSxJQUFpQjs7SUF4QmpDLElBQU0sSUFBTSxHQUFLSCxvRUFBWSxFQUFFLENBQXZCRyxJQUFJO0lBQ1osSUFBK0NGLElBQWMsR0FBZEEsb0VBQVksRUFBRSxFQUFyREUsUUFBYyxHQUF5QkYsSUFBYyxDQUFyREUsSUFBSSxFQUFZRSxVQUFrQixHQUFLSixJQUFjLENBQXJDSSxNQUFNO0lBQzlCLElBQWtDUCxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBVi9DLFNBVWtCLEdBQWtCQSxJQUFXLEdBQTdCLEVBVmxCLFlBVWdDLEdBQUlBLElBQVcsR0FBZjtJQUM5QixJQUF3QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVh6QyxJQVdhLEdBQWFBLElBQWUsR0FBNUIsRUFYYixPQVdzQixHQUFJQSxJQUFlLEdBQW5CO0lBQ3BCRCxnREFBUyxDQUFDLFdBQU07UUFDZGEsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxJQUFNQyxXQUFXLEdBQUcsV0FBTTtRQUN4QkgsWUFBWSxDQUFDLFNBQUNJLElBQUk7bUJBQUtBLElBQUksR0FBRyxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBQ2pDLElBQUlMLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDbkJELFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtRQUNESSxPQUFPLENBQUMsU0FBQ0UsSUFBSTttQkFBSyxDQUFDQSxJQUFJO1NBQUEsQ0FBQyxDQUFDO0tBQzFCO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixRQUFRLENBQUMsQ0FBQztJQUN0QixxQkFDRSw4REFBQ1csS0FBRzs7WUFBQyxXQUVIO1lBQUNaLENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFFYSxXQUFXLGtCQUNoQiw4REFBQ0QsS0FBRzswQkFDRiw0RUFBQ2hCLDhEQUFVO29CQUNUa0IsRUFBRSxFQUFFZCxJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVhLFdBQVcsY0FBakJiLEdBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRWMsRUFBRTtvQkFDekJSLElBQUksRUFBRUYsU0FBUztvQkFDZlcsU0FBUyxFQUFFUCxXQUFXO29CQUN0QlEsSUFBSSxFQUFFaEIsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxJQUFpQixHQUFqQkEsSUFBSSxDQUFFYSxXQUFXLGNBQWpCYixJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVELEtBQUs7Ozs7O3dCQUM5Qjs7Ozs7b0JBQ0UsR0FDSixJQUFJOzs7Ozs7WUFHSixDQUNOO0NBQ0g7R0FqQ3VCQSxLQUFLOztRQUNWRixnRUFBWTtRQUNrQkMsZ0VBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW2lkXS50c3g/ZjNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2luZ2xlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaW5nbGVMaXN0XCI7XG5cbmltcG9ydCB1c2VUd2VldEl0ZW0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRJdGVtXCI7XG5pbXBvcnQgdXNlVHdlZXRMaWtlIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0TGlrZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d2VldCgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VUd2VldEl0ZW0oKTtcbiAgY29uc3QgeyBkYXRhOiBsaWtlZGF0YSwgbXV0YXRlOiBsaWtlbXV0YXRlIH0gPSB1c2VUd2VldExpa2UoKTtcbiAgY29uc3QgW2xpa2VDbGljaywgc2V0TGlrZUNsaWNrXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbGlrZSwgc2V0TGlrZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TGlrZShmYWxzZSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25MaWtlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TGlrZUNsaWNrKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgaWYgKGxpa2VDbGljayAhPT0gMCkge1xuICAgICAgbGlrZW11dGF0ZSh0cnVlKTtcbiAgICB9XG4gICAgc2V0TGlrZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuICBjb25zb2xlLmxvZyhsaWtlZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIGhpIHR3ZWV0flxuICAgICAge2RhdGE/LnNpbmdsZVR3ZWV0ID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTaW5nbGVMaXN0XG4gICAgICAgICAgICBpZD17ZGF0YT8uc2luZ2xlVHdlZXQ/LmlkfVxuICAgICAgICAgICAgbGlrZT17bGlrZUNsaWNrfVxuICAgICAgICAgICAgb25DbGlja0ZuPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgIHRleHQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py50d2VldH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgey8qIHtsaWtlZGF0YT8ubmV3TGlrZT8uaWQgPyA8c3Bhbj5saWtlPC9zcGFuPiA6IG51bGx9XG4gICAgICB7IWxpa2VkYXRhPy5uZXdMaWtlPy5pZCA/IDxzcGFuPnVubGlrZTwvc3Bhbj4gOiBudWxsfSAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2luZ2xlTGlzdCIsInVzZVR3ZWV0SXRlbSIsInVzZVR3ZWV0TGlrZSIsInR3ZWV0IiwiZGF0YSIsImxpa2VkYXRhIiwibXV0YXRlIiwibGlrZW11dGF0ZSIsImxpa2VDbGljayIsInNldExpa2VDbGljayIsImxpa2UiLCJzZXRMaWtlIiwib25MaWtlQ2xpY2siLCJwcmV2IiwiY29uc29sZSIsImxvZyIsImRpdiIsInNpbmdsZVR3ZWV0IiwiaWQiLCJvbkNsaWNrRm4iLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});