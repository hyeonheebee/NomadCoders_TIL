"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./components/Tab.tsx":
/*!****************************!*\
  !*** ./components/Tab.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Tab(param) {\n    var onClickFn = param.onClickFn, method = param.method;\n    var emailColor;\n    var phoneColor;\n    // console.log(method);\n    // if (method === \"email\") {\n    //   emailColor = \"bg-rose-300  text-white\";\n    //   phoneColor = \"bg-white  text-rose-500 \";\n    // } else {\n    //   emailColor = \"bg-white  text-rose-500 \";\n    //   phoneColor = \"bg-rose-300  text-white\";\n    // }\n    var accentColor = \" bg-rose-300  text-white \";\n    var baseColor = \"bg-white  text-rose-400 border-rose-200\";\n    method === \"email\" ? (emailColor = accentColor, phoneColor = baseColor) : (emailColor = baseColor, phoneColor = accentColor);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickFn,\n                className: \"\".concat(emailColor, \" w-full  py-2   rounded-t text-lg focus:outline-none border  \", emailColor),\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/Tab.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickFn,\n                className: \"\".concat(phoneColor, \"  w-full  py-2   rounded-t text-lg focus:outline-none border \", phoneColor),\n                children: \"Phone\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/Tab.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/components/Tab.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_c = Tab;\nvar _c;\n$RefreshReg$(_c, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFNZSxTQUFTQSxHQUFHLENBQUMsS0FBK0IsRUFBRTtRQUEvQkMsU0FBUyxHQUFYLEtBQStCLENBQTdCQSxTQUFTLEVBQUVDLE1BQU0sR0FBbkIsS0FBK0IsQ0FBbEJBLE1BQU07SUFDN0MsSUFBSUMsVUFBVTtJQUNkLElBQUlDLFVBQVU7SUFDZCx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLDRDQUE0QztJQUM1Qyw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLDZDQUE2QztJQUM3Qyw0Q0FBNEM7SUFDNUMsSUFBSTtJQUNKLElBQU1DLFdBQVcsR0FBRywyQkFBMkI7SUFDL0MsSUFBTUMsU0FBUyxHQUFHLHlDQUF5QztJQUUzREosTUFBTSxLQUFLLE9BQU8sR0FDZCxDQUFDLFVBQVcsR0FBR0csV0FBVyxFQUFJRCxVQUFVLEdBQUdFLFNBQVMsQ0FBRSxHQUN0RCxDQUFDLFVBQVcsR0FBR0EsU0FBUyxFQUFJRixVQUFVLEdBQUdDLFdBQVcsQ0FBRSxDQUFDO0lBRTNELHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDbkIsOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRVQsU0FBUztnQkFDbEJPLFNBQVMsRUFBRSxFQUFFLENBQUNHLE1BQU0sQ0FDbEJSLFVBQVUsRUFDViwrREFBK0QsRUFDL0RBLFVBQVUsQ0FDWDswQkFDRixPQUVEOzs7OztvQkFBUzswQkFFVCw4REFBQ00sUUFBTTtnQkFDTEMsT0FBTyxFQUFFVCxTQUFTO2dCQUNsQk8sU0FBUyxFQUFFLEVBQUUsQ0FBQ0csTUFBTSxDQUNsQlAsVUFBVSxFQUNWLCtEQUErRCxFQUMvREEsVUFBVSxDQUNYOzBCQUNGLE9BRUQ7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7QUEzQ3VCSixLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFiLnRzeD8yMThjIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUYWJQcm9wcyB7XG4gIC8vIHRleHQ6IHN0cmluZztcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFiKHsgb25DbGlja0ZuLCBtZXRob2QgfTogVGFiUHJvcHMpIHtcbiAgbGV0IGVtYWlsQ29sb3I7XG4gIGxldCBwaG9uZUNvbG9yO1xuICAvLyBjb25zb2xlLmxvZyhtZXRob2QpO1xuICAvLyBpZiAobWV0aG9kID09PSBcImVtYWlsXCIpIHtcbiAgLy8gICBlbWFpbENvbG9yID0gXCJiZy1yb3NlLTMwMCAgdGV4dC13aGl0ZVwiO1xuICAvLyAgIHBob25lQ29sb3IgPSBcImJnLXdoaXRlICB0ZXh0LXJvc2UtNTAwIFwiO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIGVtYWlsQ29sb3IgPSBcImJnLXdoaXRlICB0ZXh0LXJvc2UtNTAwIFwiO1xuICAvLyAgIHBob25lQ29sb3IgPSBcImJnLXJvc2UtMzAwICB0ZXh0LXdoaXRlXCI7XG4gIC8vIH1cbiAgY29uc3QgYWNjZW50Q29sb3IgPSBcIiBiZy1yb3NlLTMwMCAgdGV4dC13aGl0ZSBcIjtcbiAgY29uc3QgYmFzZUNvbG9yID0gXCJiZy13aGl0ZSAgdGV4dC1yb3NlLTQwMCBib3JkZXItcm9zZS0yMDBcIjtcblxuICBtZXRob2QgPT09IFwiZW1haWxcIlxuICAgID8gKChlbWFpbENvbG9yID0gYWNjZW50Q29sb3IpLCAocGhvbmVDb2xvciA9IGJhc2VDb2xvcikpXG4gICAgOiAoKGVtYWlsQ29sb3IgPSBiYXNlQ29sb3IpLCAocGhvbmVDb2xvciA9IGFjY2VudENvbG9yKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17b25DbGlja0ZufVxuICAgICAgICBjbGFzc05hbWU9e1wiXCIuY29uY2F0KFxuICAgICAgICAgIGVtYWlsQ29sb3IsXG4gICAgICAgICAgXCIgdy1mdWxsICBweS0yICAgcm91bmRlZC10IHRleHQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciAgXCIsXG4gICAgICAgICAgZW1haWxDb2xvclxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICBFbWFpbFxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17b25DbGlja0ZufVxuICAgICAgICBjbGFzc05hbWU9e1wiXCIuY29uY2F0KFxuICAgICAgICAgIHBob25lQ29sb3IsXG4gICAgICAgICAgXCIgIHctZnVsbCAgcHktMiAgIHJvdW5kZWQtdCB0ZXh0LWxnIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgXCIsXG4gICAgICAgICAgcGhvbmVDb2xvclxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICBQaG9uZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGFiIiwib25DbGlja0ZuIiwibWV0aG9kIiwiZW1haWxDb2xvciIsInBob25lQ29sb3IiLCJhY2NlbnRDb2xvciIsImJhc2VDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tab.tsx\n");

/***/ })

});