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

/***/ "./components/like.tsx":
/*!*****************************!*\
  !*** ./components/like.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Like; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Like(param) {\n    var _$like = param.like, onClickFn = param.onClickFn;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onClickFn,\n        className: \" cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                className: \"w-4 h-4 \",\n                fill: \"none\",\n                stroke: \"currentColor\",\n                viewBox: \"0 0 24 24\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: \"2\",\n                        d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/components/like.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/like.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            _$like ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Unlike\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/like.tsx\",\n                lineNumber: 23,\n                columnNumber: 15\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"like\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/like.tsx\",\n                lineNumber: 23,\n                columnNumber: 37\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/components/like.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n_c = Like;\nconsole.log(like, \"this is like\");\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpa2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBS2UsU0FBU0EsSUFBSSxDQUFDLEtBQThCLEVBQUU7UUFBOUJDLE1BQUksR0FBTixLQUE4QixDQUE1QkEsSUFBSSxFQUFFQyxTQUFTLEdBQWpCLEtBQThCLENBQXRCQSxTQUFTO0lBQzVDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLE9BQU8sRUFBRUYsU0FBUztRQUFFRyxTQUFTLEVBQUMsaUJBQWlCOzswQkFDbEQsOERBQUNDLEtBQUc7Z0JBQ0ZELFNBQVMsRUFBQyxVQUFXO2dCQUNyQkUsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLE1BQU0sRUFBQyxjQUFjO2dCQUNyQkMsT0FBTyxFQUFDLFdBQVc7Z0JBQ25CQyxLQUFLLEVBQUMsNEJBQTRCOztrQ0FFbEMsOERBQUNDLE1BQUk7d0JBQ0hDLGFBQWEsRUFBQyxPQUFPO3dCQUNyQkMsY0FBYyxFQUFDLE9BQU87d0JBQ3RCQyxXQUFXLEVBQUMsR0FBRzt3QkFDZkMsQ0FBQyxFQUFDLDZIQUE2SDs7Ozs7NEJBQ3pIO29CQUFDLEdBQUc7Ozs7OztvQkFDUjtZQUNMZCxNQUFJLGlCQUFHLDhEQUFDZSxNQUFJOzBCQUFDLFFBQU07Ozs7O29CQUFPLGlCQUFHLDhEQUFDQSxNQUFJOzBCQUFDLE1BQUk7Ozs7O29CQUFPOzs7Ozs7WUFDM0MsQ0FDTjtDQUNIO0FBcEJ1QmhCLEtBQUFBLElBQUk7QUFxQjVCaUIsT0FBTyxDQUFDQyxHQUFHLENBQUNqQixJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWtlLnRzeD85ZmIyIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBMaXN0UHJvcHMge1xuICBsaWtlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpa2UoeyBsaWtlLCBvbkNsaWNrRm4gfTogTGlzdFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrRm59IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00ICBcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiXG4gICAgICAgID48L3BhdGg+e1wiIFwifVxuICAgICAgPC9zdmc+XG4gICAgICB7bGlrZSA/IDxzcGFuPlVubGlrZTwvc3Bhbj4gOiA8c3Bhbj5saWtlPC9zcGFuPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmNvbnNvbGUubG9nKGxpa2UsIFwidGhpcyBpcyBsaWtlXCIpO1xuIl0sIm5hbWVzIjpbIkxpa2UiLCJsaWtlIiwib25DbGlja0ZuIiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSIsInN2ZyIsImZpbGwiLCJzdHJva2UiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/like.tsx\n");

/***/ })

});