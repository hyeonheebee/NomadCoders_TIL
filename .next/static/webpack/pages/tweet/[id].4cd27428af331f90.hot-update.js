/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./lib/client/useTweetLike.ts":
/*!************************************!*\
  !*** ./lib/client/useTweetLike.ts ***!
  \************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref4, ref1;\n    _s();\n    var _s1 = $RefreshSig$();\n    var ref2 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), data = ref2.data, mutate = ref2.mutate;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), likeClick = ref3[0], setLikeClick = ref3[1];\n    var onLikeClick = function() {\n        setLikeClick(function(prev) {\n            return !prev;\n        });\n    };\n    console.log(data === null || data === void 0 ? void 0 : data.singleTweet);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s1(function() {\n        _s1();\n        var ref = _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4___default()(), state = ref.data, mutate = ref.mutate;\n        console.log(state);\n    }, \"c6HMBUZWA6IttL/eiOepaQ91qA0=\", false, function() {\n        return [\n            (_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4___default())\n        ];\n    }), [\n        likeClick\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref4 = data.singleTweet) === null || ref4 === void 0 ? void 0 : ref4.id,\n                    like: likeClick,\n                    onClick: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"h3IKGYwIKZ58I37ouDhT/ygf5Ug=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNtRDtBQUVFO0FBRUk7QUFDQTs7QUFFMUMsU0FBU00sS0FBSyxHQUFHO1FBbUJoQkMsSUFBaUIsRUFHZkEsSUFBaUI7OztJQXJCakMsSUFBeUJILElBQWMsR0FBZEEsb0VBQVksRUFBRSxFQUEvQkcsSUFBSSxHQUFhSCxJQUFjLENBQS9CRyxJQUFJLEVBQUVDLE1BQU0sR0FBS0osSUFBYyxDQUF6QkksTUFBTTtJQUNwQixJQUFrQ04sSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVZuRCxTQVVrQixHQUFrQkEsSUFBZSxHQUFqQyxFQVZsQixZQVVnQyxHQUFJQSxJQUFlLEdBQW5CO0lBQzlCLElBQU1TLFdBQVcsR0FBRyxXQUFNO1FBQ3hCRCxZQUFZLENBQUMsU0FBQ0UsSUFBSTttQkFBSyxDQUFDQSxJQUFJO1NBQUEsQ0FBQyxDQUFDO0tBQy9CO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQUksQ0FBRVEsV0FBVyxDQUFDLENBQUM7SUFFL0JkLGdEQUFTLEtBQUMsV0FBTTs7UUFDZCxJQUFnQ0ksR0FBYyxHQUFkQSwrREFBWSxFQUFFLEVBQXRDRSxLQUFXLEdBQWFGLEdBQWMsQ0FBdENFLElBQUksRUFBU0MsTUFBTSxHQUFLSCxHQUFjLENBQXpCRyxNQUFNO1FBQzNCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7S0FDcEI7O1lBRmlDWCxpRUFBWTs7UUFFM0M7UUFBQ0ksU0FBUztLQUFDLENBQUMsQ0FBQztJQUVoQixxQkFDRSw4REFBQ1EsS0FBRzs7WUFBQyxXQUVIO1lBQUNWLENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFhLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFFUSxXQUFXLGtCQUNoQiw4REFBQ0UsS0FBRzswQkFDRiw0RUFBQ2QsOERBQVU7b0JBQ1RlLEVBQUUsRUFBRVgsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxJQUFpQixHQUFqQkEsSUFBSSxDQUFFUSxXQUFXLGNBQWpCUixJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVXLEVBQUU7b0JBQ3pCQyxJQUFJLEVBQUVWLFNBQVM7b0JBQ2ZXLE9BQU8sRUFBRVQsV0FBVztvQkFDcEJVLElBQUksRUFBRWQsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxJQUFpQixHQUFqQkEsSUFBSSxDQUFFUSxXQUFXLGNBQWpCUixJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVELEtBQUs7Ozs7O3dCQUM5Qjs7Ozs7b0JBQ0UsR0FDSixJQUFJOzs7Ozs7WUFDSixDQUNOO0NBQ0g7R0E1QnVCQSxLQUFLOztRQUNGRixnRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IFNpbmdsZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2luZ2xlTGlzdFwiO1xuXG5pbXBvcnQgdXNlVHdlZXRJdGVtIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0SXRlbVwiO1xuaW1wb3J0IHVzZVR3ZWV0TGlrZSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VUd2VldExpa2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlZXQoKSB7XG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlIH0gPSB1c2VUd2VldEl0ZW0oKTtcbiAgY29uc3QgW2xpa2VDbGljaywgc2V0TGlrZUNsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25MaWtlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TGlrZUNsaWNrKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnNvbGUubG9nKGRhdGE/LnNpbmdsZVR3ZWV0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogc3RhdGUsIG11dGF0ZSB9ID0gdXNlVHdlZXRMaWtlKCk7XG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICB9LCBbbGlrZUNsaWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgaGkgdHdlZXR+XG4gICAgICB7ZGF0YT8uc2luZ2xlVHdlZXQgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNpbmdsZUxpc3RcbiAgICAgICAgICAgIGlkPXtkYXRhPy5zaW5nbGVUd2VldD8uaWR9XG4gICAgICAgICAgICBsaWtlPXtsaWtlQ2xpY2t9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkxpa2VDbGlja31cbiAgICAgICAgICAgIHRleHQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py50d2VldH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaW5nbGVMaXN0IiwidXNlVHdlZXRJdGVtIiwidXNlVHdlZXRMaWtlIiwidHdlZXQiLCJkYXRhIiwibXV0YXRlIiwibGlrZUNsaWNrIiwic2V0TGlrZUNsaWNrIiwib25MaWtlQ2xpY2siLCJwcmV2IiwiY29uc29sZSIsImxvZyIsInNpbmdsZVR3ZWV0Iiwic3RhdGUiLCJkaXYiLCJpZCIsImxpa2UiLCJvbkNsaWNrIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});