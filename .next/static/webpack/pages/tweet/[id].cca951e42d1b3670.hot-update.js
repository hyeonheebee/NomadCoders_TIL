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

/***/ "./components/navigator.tsx":
/*!**********************************!*\
  !*** ./components/navigator.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Navigator(param) {\n    var url = param.url, urlText = param.urlText, onClickfn = param.onClickfn;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full my-2 px-4 bg-teal-500 text-sm text-white py-1 border border-transparent shadow-sm font-medium flex justify-between hover:bg-teal-800 rounded-b md:border-teal-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"cursor-pointer\",\n            children: [\n                url ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: url,\n                    children: urlText\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/components/navigator.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 16\n                }, this) : null,\n                onClickfn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onClickfn,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/components/navigator.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 22\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/root/develope/carrot-final/carrot-final/components/navigator.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/root/develope/carrot-final/carrot-final/components/navigator.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_c = Navigator;\nvar _c;\n$RefreshReg$(_c, \"Navigator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRvci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQU1kLFNBQVNDLFNBQVMsQ0FBQyxLQUFxQyxFQUFFO1FBQXJDQyxHQUFHLEdBQUwsS0FBcUMsQ0FBbkNBLEdBQUcsRUFBRUMsT0FBTyxHQUFkLEtBQXFDLENBQTlCQSxPQUFPLEVBQUVDLFNBQVMsR0FBekIsS0FBcUMsQ0FBckJBLFNBQVM7SUFDekQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDBLQUEySztrQkFDeEwsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLGdCQUFnQjs7Z0JBQzVCSixHQUFHLGlCQUFHLDhEQUFDRixrREFBSTtvQkFBQ1EsSUFBSSxFQUFFTixHQUFHOzhCQUFHQyxPQUFPOzs7Ozt3QkFBUSxHQUFHLElBQUk7Z0JBQzlDQyxTQUFTLGlCQUFHLDhEQUFDSyxRQUFNO29CQUFDQyxPQUFPLEVBQUVOLFNBQVM7OEJBQUUsUUFBTTs7Ozs7d0JBQVMsR0FBRyxJQUFJOzs7Ozs7Z0JBQzNEOzs7OztZQUNGLENBQ047Q0FDSDtBQVR1QkgsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRvci50c3g/ZDkxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbnRlcmZhY2UgTmF2UHJvcHMge1xuICB1cmw/OiBzdHJpbmc7XG4gIHVybFRleHQ/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRvcih7IHVybCwgdXJsVGV4dCwgb25DbGlja2ZuIH06IE5hdlByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktMiBweC00IGJnLXRlYWwtNTAwIHRleHQtc20gdGV4dC13aGl0ZSAgcHktMSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSBmb250LW1lZGl1bSBmbGV4IGp1c3RpZnktYmV0d2VlbiBob3ZlcjpiZy10ZWFsLTgwMCByb3VuZGVkLWIgbWQ6Ym9yZGVyLXRlYWwtMjAwXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIHt1cmwgPyA8TGluayBocmVmPXt1cmx9Pnt1cmxUZXh0fTwvTGluaz4gOiBudWxsfVxuICAgICAgICB7b25DbGlja2ZuID8gPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrZm59PkxvZ291dDwvYnV0dG9uPiA6IG51bGx9XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiTmF2aWdhdG9yIiwidXJsIiwidXJsVGV4dCIsIm9uQ2xpY2tmbiIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigator.tsx\n");

/***/ })

});