"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/list.tsx":
/*!*****************************!*\
  !*** ./components/list.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction List(param) {\n    var id = param.id, text = param.text, like = param.like;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/tweet/\".concat(id),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \" flex px-8 pt-5 cursor-pointer justify-between bg-rose-100 py-2 border border-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex space-x-2 items-end justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/components/list.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    like ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"liked\"\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/components/list.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 19\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/components/list.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/root/develope/carrot-final/carrot-final/components/list.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/root/develope/carrot-final/carrot-final/components/list.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n};\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFRZCxTQUFTQyxJQUFJLENBQUMsS0FBNkIsRUFBRTtRQUE3QkMsRUFBRSxHQUFKLEtBQTZCLENBQTNCQSxFQUFFLEVBQUVDLElBQUksR0FBVixLQUE2QixDQUF2QkEsSUFBSSxFQUFFQyxJQUFJLEdBQWhCLEtBQTZCLENBQWpCQSxJQUFJO0lBQzNDLHFCQUNFLDhEQUFDSixrREFBSTtRQUFDSyxJQUFJLEVBQUUsU0FBUSxDQUFLLE9BQUhILEVBQUUsQ0FBRTtrQkFDeEIsNEVBQUNJLEdBQUM7WUFBQ0MsU0FBUyxFQUFDLHFGQUFzRjtzQkFDakcsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyx1Q0FBdUM7O2tDQUNwRCw4REFBQ0UsTUFBSTtrQ0FBRU4sSUFBSTs7Ozs7NEJBQVE7b0JBQ2xCQyxJQUFJLGlCQUFHLDhEQUFDSyxNQUFJO2tDQUFDLE9BQUs7Ozs7OzRCQUFPLEdBQUcsSUFBSTs7Ozs7O29CQUM3Qjs7Ozs7Z0JBQ0o7Ozs7O1lBQ0MsQ0FDUDtDQUNIO0FBWHVCUixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGlzdC50c3g/YzQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBMaXN0UHJvcHMge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGlkLCB0ZXh0LCBsaWtlIH06IExpc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHtpZH1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIiBmbGV4IHB4LTggcHQtNSAgY3Vyc29yLXBvaW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXJvc2UtMTAwIHB5LTIgYm9yZGVyIGJvcmRlci13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IHNwYWNlLXgtMiBpdGVtcy1lbmQganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8c3Bhbj57dGV4dH08L3NwYW4+XG4gICAgICAgICAge2xpa2UgPyA8c3Bhbj5saWtlZDwvc3Bhbj4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkxpc3QiLCJpZCIsInRleHQiLCJsaWtlIiwiaHJlZiIsImEiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/list.tsx\n");

/***/ })

});