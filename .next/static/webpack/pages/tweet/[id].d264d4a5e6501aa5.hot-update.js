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

/***/ "./lib/client/useFetching.tsx":
/*!************************************!*\
  !*** ./lib/client/useFetching.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useFetching; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _s = $RefreshSig$();\nfunction useFetching(url) {\n    var fetching = function fetching(formData) {\n        setState(_objectSpread({}, state, {\n            loading: true\n        }));\n        fetch(url, {\n            method: \"POST\",\n            body: JSON.stringify(formData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(function(response) {\n            return response.json().catch(function() {});\n        }).then(function(fetchData) {\n            return setState(_objectSpread({}, state, {\n                fetchData: fetchData,\n                loading: false\n            }));\n        }).catch(function(fetchError) {\n            return setState(_objectSpread({}, state, {\n                fetchError: fetchError,\n                loading: false\n            }));\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        loading: false,\n        fetchData: undefined,\n        fetchError: undefined\n    }), state = ref[0], setState = ref[1];\n    return [\n        fetching,\n        state\n    ];\n};\n_s(useFetching, \"FSTtuJ261ILr3mBLG2ZqmkdNeXw=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZUZldGNoaW5nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFlbEIsU0FBU0MsV0FBVyxDQUNqQ0MsR0FBVyxFQUNnQztRQU9sQ0MsUUFBUSxHQUFqQixTQUFTQSxRQUFRLENBQUNDLFFBQWEsRUFBRTtRQUMvQkMsUUFBUSxDQUFDLGtCQUFLQyxLQUFLO1lBQUVDLE9BQU8sRUFBRSxJQUFJO1VBQUUsQ0FBQyxDQUFDO1FBQ3RDQyxLQUFLLENBQUNOLEdBQUcsRUFBRTtZQUNUTyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixRQUFRLENBQUM7WUFDOUJTLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1NBQ0YsQ0FBQyxDQUNDQyxJQUFJLENBQUMsU0FBQ0MsUUFBUTttQkFBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLFdBQU0sRUFBRSxDQUFDO1NBQUEsQ0FBQyxDQUNuREgsSUFBSSxDQUFDLFNBQUNJLFNBQVM7bUJBQUtiLFFBQVEsQ0FBQyxrQkFBS0MsS0FBSztnQkFBRVksU0FBUyxFQUFUQSxTQUFTO2dCQUFFWCxPQUFPLEVBQUUsS0FBSztjQUFFLENBQUM7U0FBQSxDQUFDLENBQ3RFVSxLQUFLLENBQUMsU0FBQ0UsVUFBVTttQkFDaEJkLFFBQVEsQ0FBQyxrQkFBS0MsS0FBSztnQkFBRWEsVUFBVSxFQUFWQSxVQUFVO2dCQUFFWixPQUFPLEVBQUUsS0FBSztjQUFFLENBQUM7U0FBQSxDQUNuRCxDQUFDO0tBQ0w7O0lBcEJELElBQTBCUCxHQUl4QixHQUp3QkEsK0NBQVEsQ0FBaUI7UUFDakRPLE9BQU8sRUFBRSxLQUFLO1FBQ2RXLFNBQVMsRUFBRUUsU0FBUztRQUNwQkQsVUFBVSxFQUFFQyxTQUFTO0tBQ3RCLENBQUMsRUF0QkosS0FrQmMsR0FBY3BCLEdBSXhCLEdBSlUsRUFsQmQsUUFrQndCLEdBQUlBLEdBSXhCLEdBSm9CO0lBcUJ0QixPQUFPO1FBQUNHLFFBQVE7UUFBRUcsS0FBSztLQUFDLENBQUM7Q0FDMUI7R0F6QnVCTCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9jbGllbnQvdXNlRmV0Y2hpbmcudHN4PzRhYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSUZldGNoaW5nU3RhdGUge1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBmZXRjaERhdGE/OiB7XG4gICAgc3VjY2Vzcz86IGJvb2xlYW47XG4gICAgdXNlcj86IG9iamVjdDtcbiAgICB0b2tlbj86IHN0cmluZztcbiAgICBhdXRob3JpemF0aW9uPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdXNlclR3ZWV0Pzogb2JqZWN0O1xuICAgIHVzZXJMaWtlPzogb2JqZWN0O1xuICAgIGlzTGlrZT86IGJvb2xlYW47XG4gIH07XG4gIGZldGNoRXJyb3I/OiBvYmplY3Q7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGZXRjaGluZyhcbiAgdXJsOiBzdHJpbmdcbik6IFsoZm9ybURhdGE6IGFueSkgPT4gdm9pZCwgSUZldGNoaW5nU3RhdGVdIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxJRmV0Y2hpbmdTdGF0ZT4oe1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGZldGNoRGF0YTogdW5kZWZpbmVkLFxuICAgIGZldGNoRXJyb3I6IHVuZGVmaW5lZCxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZmV0Y2hpbmcoZm9ybURhdGE6IGFueSkge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfSk7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgIC50aGVuKChmZXRjaERhdGEpID0+IHNldFN0YXRlKHsgLi4uc3RhdGUsIGZldGNoRGF0YSwgbG9hZGluZzogZmFsc2UgfSkpXG4gICAgICAuY2F0Y2goKGZldGNoRXJyb3IpID0+XG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGZldGNoRXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICApO1xuICB9XG4gIHJldHVybiBbZmV0Y2hpbmcsIHN0YXRlXTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUZldGNoaW5nIiwidXJsIiwiZmV0Y2hpbmciLCJmb3JtRGF0YSIsInNldFN0YXRlIiwic3RhdGUiLCJsb2FkaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJmZXRjaERhdGEiLCJmZXRjaEVycm9yIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/client/useFetching.tsx\n");

/***/ })

});