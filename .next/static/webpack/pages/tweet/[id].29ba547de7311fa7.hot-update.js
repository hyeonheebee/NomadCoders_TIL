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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_singleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/singleList */ \"./components/singleList.tsx\");\n/* harmony import */ var _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useTweetItem */ \"./lib/client/useTweetItem.ts\");\n/* harmony import */ var _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useTweetLike */ \"./lib/client/useTweetLike.ts\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweet() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,_lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), data = ref2.data, mutate = ref2.mutate;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), likeClick = ref3[0], setLikeClick = ref3[1];\n    var onLikeClick = function() {\n        setLikeClick(function(prev) {\n            return !prev;\n        });\n    };\n    var ref4 = (0,_lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), state = ref4.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(state);\n    }, [\n        state,\n        likeClick\n    ]);\n    console.log(data === null || data === void 0 ? void 0 : data.singleTweet);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hi tweet~\",\n            (data === null || data === void 0 ? void 0 : data.singleTweet) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_singleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data === null || data === void 0 ? void 0 : (ref = data.singleTweet) === null || ref === void 0 ? void 0 : ref.id,\n                    like: likeClick,\n                    onClick: onLikeClick,\n                    text: data === null || data === void 0 ? void 0 : (ref1 = data.singleTweet) === null || ref1 === void 0 ? void 0 : ref1.tweet\n                }, void 0, false, {\n                    fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"this is \",\n                    state === null || state === void 0 ? void 0 : state.id\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/tweet/[id].tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(tweet, \"62xXEyT0NsfhPbmsCcd1MjDeE9E=\", false, function() {\n    return [\n        _lib_client_useTweetItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useTweetLike__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBRUU7QUFFSTtBQUNBOztBQUUxQyxTQUFTTSxLQUFLLEdBQUc7UUFtQmhCQyxHQUFpQixFQUdmQSxJQUFpQjs7SUFyQmpDLElBQXlCSCxJQUFjLEdBQWRBLG9FQUFZLEVBQUUsRUFBL0JHLElBQUksR0FBYUgsSUFBYyxDQUEvQkcsSUFBSSxFQUFFQyxNQUFNLEdBQUtKLElBQWMsQ0FBekJJLE1BQU07SUFDcEIsSUFBa0NOLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFUbkQsU0FTa0IsR0FBa0JBLElBQWUsR0FBakMsRUFUbEIsWUFTZ0MsR0FBSUEsSUFBZSxHQUFuQjtJQUM5QixJQUFNUyxXQUFXLEdBQUcsV0FBTTtRQUN4QkQsWUFBWSxDQUFDLFNBQUNFLElBQUk7bUJBQUssQ0FBQ0EsSUFBSTtTQUFBLENBQUMsQ0FBQztLQUMvQjtJQUNELElBQXdCUCxJQUFjLEdBQWRBLG9FQUFZLEVBQUUsRUFBOUJFLEtBQVcsR0FBS0YsSUFBYyxDQUE5QkUsSUFBSTtJQUVaTixnREFBUyxDQUFDLFdBQU07UUFDZGEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO0tBQ3BCLEVBQUU7UUFBQ0EsS0FBSztRQUFFSixTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBQ3ZCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFJLENBQUVTLFdBQVcsQ0FBQyxDQUFDO0lBRS9CLHFCQUNFLDhEQUFDQyxLQUFHOztZQUFDLFdBRUg7WUFBQ1YsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQWEsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxJQUFJLENBQUVTLFdBQVcsa0JBQ2hCLDhEQUFDQyxLQUFHOzBCQUNGLDRFQUFDZCw4REFBVTtvQkFDVGUsRUFBRSxFQUFFWCxJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVTLFdBQVcsY0FBakJULEdBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRVcsRUFBRTtvQkFDekJDLElBQUksRUFBRVYsU0FBUztvQkFDZlcsT0FBTyxFQUFFVCxXQUFXO29CQUNwQlUsSUFBSSxFQUFFZCxJQUFJLGFBQUpBLElBQUksV0FBYSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLElBQWlCLEdBQWpCQSxJQUFJLENBQUVTLFdBQVcsY0FBakJULElBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsSUFBaUIsQ0FBRUQsS0FBSzs7Ozs7d0JBQzlCOzs7OztvQkFDRSxHQUNKLElBQUk7MEJBQ1IsOERBQUNnQixNQUFJOztvQkFBQyxVQUFRO29CQUFDVCxLQUFLLGFBQUxBLEtBQUssV0FBSSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLEtBQUssQ0FBRUssRUFBRTs7Ozs7O29CQUFROzs7Ozs7WUFDNUIsQ0FDTjtDQUNIO0dBN0J1QlosS0FBSzs7UUFDRkYsZ0VBQVk7UUFLYkMsZ0VBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW2lkXS50c3g/ZjNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2luZ2xlTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaW5nbGVMaXN0XCI7XG5cbmltcG9ydCB1c2VUd2VldEl0ZW0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlVHdlZXRJdGVtXCI7XG5pbXBvcnQgdXNlVHdlZXRMaWtlIGZyb20gXCIuLi8uLi9saWIvY2xpZW50L3VzZVR3ZWV0TGlrZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d2VldCgpIHtcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVR3ZWV0SXRlbSgpO1xuICBjb25zdCBbbGlrZUNsaWNrLCBzZXRMaWtlQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbkxpa2VDbGljayA9ICgpID0+IHtcbiAgICBzZXRMaWtlQ2xpY2soKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcbiAgY29uc3QgeyBkYXRhOiBzdGF0ZSB9ID0gdXNlVHdlZXRMaWtlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gIH0sIFtzdGF0ZSwgbGlrZUNsaWNrXSk7XG4gIGNvbnNvbGUubG9nKGRhdGE/LnNpbmdsZVR3ZWV0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBoaSB0d2VldH5cbiAgICAgIHtkYXRhPy5zaW5nbGVUd2VldCA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2luZ2xlTGlzdFxuICAgICAgICAgICAgaWQ9e2RhdGE/LnNpbmdsZVR3ZWV0Py5pZH1cbiAgICAgICAgICAgIGxpa2U9e2xpa2VDbGlja31cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTGlrZUNsaWNrfVxuICAgICAgICAgICAgdGV4dD17ZGF0YT8uc2luZ2xlVHdlZXQ/LnR3ZWV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8c3Bhbj50aGlzIGlzIHtzdGF0ZT8uaWR9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaW5nbGVMaXN0IiwidXNlVHdlZXRJdGVtIiwidXNlVHdlZXRMaWtlIiwidHdlZXQiLCJkYXRhIiwibXV0YXRlIiwibGlrZUNsaWNrIiwic2V0TGlrZUNsaWNrIiwib25MaWtlQ2xpY2siLCJwcmV2Iiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwic2luZ2xlVHdlZXQiLCJkaXYiLCJpZCIsImxpa2UiLCJvbkNsaWNrIiwidGV4dCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});