"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./components/Tab.tsx":
/*!****************************!*\
  !*** ./components/Tab.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Tab(param) {\n    var onClickFn = param.onClickFn, method = param.method;\n    var emailColor;\n    var phoneColor;\n    // console.log(method);\n    // if (method === \"email\") {\n    //   emailColor = \"bg-rose-300  text-white\";\n    //   phoneColor = \"bg-white  text-rose-500 \";\n    // } else {\n    //   emailColor = \"bg-white  text-rose-500 \";\n    //   phoneColor = \"bg-rose-300  text-white\";\n    // }\n    var accentColor = \"bg-rose-300  text-white\";\n    var baseColor = \"bg-white  text-rose-400 \";\n    method === \"email\" ? (emailColor = accentColor, phoneColor = baseColor) : (emailColor = baseColor, phoneColor = accentColor);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickFn,\n                className: \"\".concat(emailColor, \"font-marker w-full  py-2 border border-transparent rounded-t text-lg focus:outline-none hover:text-white  hover:bg-rose-400 hover:border  \", emailColor),\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/Tab.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickFn,\n                className: \"\".concat(phoneColor, \"font-marker w-full  hover:text-white hover:bg-rose-300  py-2 border border-transparent rounded-t text-lg focus:outline-none\", phoneColor),\n                children: \"Phone\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/Tab.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/components/Tab.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_c = Tab;\nvar _c;\n$RefreshReg$(_c, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFNZSxTQUFTQSxHQUFHLENBQUMsS0FBK0IsRUFBRTtRQUEvQkMsU0FBUyxHQUFYLEtBQStCLENBQTdCQSxTQUFTLEVBQUVDLE1BQU0sR0FBbkIsS0FBK0IsQ0FBbEJBLE1BQU07SUFDN0MsSUFBSUMsVUFBVTtJQUNkLElBQUlDLFVBQVU7SUFDZCx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLDRDQUE0QztJQUM1Qyw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLDZDQUE2QztJQUM3Qyw0Q0FBNEM7SUFDNUMsSUFBSTtJQUNKLElBQU1DLFdBQVcsR0FBRyx5QkFBeUI7SUFDN0MsSUFBTUMsU0FBUyxHQUFHLDBCQUEwQjtJQUU1Q0osTUFBTSxLQUFLLE9BQU8sR0FDZCxDQUFDLFVBQVcsR0FBR0csV0FBVyxFQUFJRCxVQUFVLEdBQUdFLFNBQVMsQ0FBRSxHQUN0RCxDQUFDLFVBQVcsR0FBR0EsU0FBUyxFQUFJRixVQUFVLEdBQUdDLFdBQVcsQ0FBRSxDQUFDO0lBRTNELHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDbkIsOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRVQsU0FBUztnQkFDbEJPLFNBQVMsRUFBRSxFQUFFLENBQUNHLE1BQU0sQ0FDbEJSLFVBQVUsRUFDViw0SUFBNEksRUFDNUlBLFVBQVUsQ0FDWDswQkFDRixPQUVEOzs7OztvQkFBUzswQkFFVCw4REFBQ00sUUFBTTtnQkFDTEMsT0FBTyxFQUFFVCxTQUFTO2dCQUNsQk8sU0FBUyxFQUFFLEVBQUUsQ0FBQ0csTUFBTSxDQUNsQlAsVUFBVSxFQUNWLDZIQUE2SCxFQUM3SEEsVUFBVSxDQUNYOzBCQUNGLE9BRUQ7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7QUEzQ3VCSixLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFiLnRzeD8yMThjIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUYWJQcm9wcyB7XG4gIC8vIHRleHQ6IHN0cmluZztcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFiKHsgb25DbGlja0ZuLCBtZXRob2QgfTogVGFiUHJvcHMpIHtcbiAgbGV0IGVtYWlsQ29sb3I7XG4gIGxldCBwaG9uZUNvbG9yO1xuICAvLyBjb25zb2xlLmxvZyhtZXRob2QpO1xuICAvLyBpZiAobWV0aG9kID09PSBcImVtYWlsXCIpIHtcbiAgLy8gICBlbWFpbENvbG9yID0gXCJiZy1yb3NlLTMwMCAgdGV4dC13aGl0ZVwiO1xuICAvLyAgIHBob25lQ29sb3IgPSBcImJnLXdoaXRlICB0ZXh0LXJvc2UtNTAwIFwiO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIGVtYWlsQ29sb3IgPSBcImJnLXdoaXRlICB0ZXh0LXJvc2UtNTAwIFwiO1xuICAvLyAgIHBob25lQ29sb3IgPSBcImJnLXJvc2UtMzAwICB0ZXh0LXdoaXRlXCI7XG4gIC8vIH1cbiAgY29uc3QgYWNjZW50Q29sb3IgPSBcImJnLXJvc2UtMzAwICB0ZXh0LXdoaXRlXCI7XG4gIGNvbnN0IGJhc2VDb2xvciA9IFwiYmctd2hpdGUgIHRleHQtcm9zZS00MDAgXCI7XG5cbiAgbWV0aG9kID09PSBcImVtYWlsXCJcbiAgICA/ICgoZW1haWxDb2xvciA9IGFjY2VudENvbG9yKSwgKHBob25lQ29sb3IgPSBiYXNlQ29sb3IpKVxuICAgIDogKChlbWFpbENvbG9yID0gYmFzZUNvbG9yKSwgKHBob25lQ29sb3IgPSBhY2NlbnRDb2xvcikpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tGbn1cbiAgICAgICAgY2xhc3NOYW1lPXtcIlwiLmNvbmNhdChcbiAgICAgICAgICBlbWFpbENvbG9yLFxuICAgICAgICAgIFwiZm9udC1tYXJrZXIgdy1mdWxsICBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC10IHRleHQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOnRleHQtd2hpdGUgIGhvdmVyOmJnLXJvc2UtNDAwIGhvdmVyOmJvcmRlciAgXCIsXG4gICAgICAgICAgZW1haWxDb2xvclxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICBFbWFpbFxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17b25DbGlja0ZufVxuICAgICAgICBjbGFzc05hbWU9e1wiXCIuY29uY2F0KFxuICAgICAgICAgIHBob25lQ29sb3IsXG4gICAgICAgICAgXCJmb250LW1hcmtlciB3LWZ1bGwgIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctcm9zZS0zMDAgIHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLXQgdGV4dC1sZyBmb2N1czpvdXRsaW5lLW5vbmVcIixcbiAgICAgICAgICBwaG9uZUNvbG9yXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIFBob25lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUYWIiLCJvbkNsaWNrRm4iLCJtZXRob2QiLCJlbWFpbENvbG9yIiwicGhvbmVDb2xvciIsImFjY2VudENvbG9yIiwiYmFzZUNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tab.tsx\n");

/***/ })

});