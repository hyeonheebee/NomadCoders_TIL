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

/***/ "./lib/client/useAuth.tsx":
/*!********************************!*\
  !*** ./lib/client/useAuth.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _s = $RefreshSig$();\nfunction useAuth(url) {\n    var auth = function auth(token) {\n        setState(_objectSpread({}, state, {\n            loading: true\n        }));\n        fetch(url, {\n            method: \"POST\",\n            headers: {\n                Authorization: \"\".concat(token)\n            }\n        }).then(function(response) {\n            return response.json().catch(function() {});\n        }).then(function(fetchData) {\n            return setState(_objectSpread({}, state, {\n                fetchData: fetchData,\n                loading: false\n            }));\n        }).catch(function(fetchError) {\n            return setState(_objectSpread({}, state, {\n                fetchError: fetchError,\n                loading: false\n            }));\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        loading: false,\n        fetchData: undefined,\n        fetchError: undefined\n    }), state = ref[0], setState = ref[1];\n    return [\n        auth,\n        state\n    ];\n};\n_s(useAuth, \"FSTtuJ261ILr3mBLG2ZqmkdNeXw=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZUF1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDOztBQVlsQixTQUFTQyxPQUFPLENBQzdCQyxHQUFXLEVBQ2dDO1FBT2xDQyxJQUFJLEdBQWIsU0FBU0EsSUFBSSxDQUFDQyxLQUFVLEVBQUU7UUFDeEJDLFFBQVEsQ0FBQyxrQkFBS0MsS0FBSztZQUFFQyxPQUFPLEVBQUUsSUFBSTtVQUFFLENBQUMsQ0FBQztRQUN0Q0MsS0FBSyxDQUFDTixHQUFHLEVBQUU7WUFDVE8sTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUNQQyxhQUFhLEVBQUUsRUFBQyxDQUFRLE9BQU5QLEtBQUssQ0FBRTthQUMxQjtTQUNGLENBQUMsQ0FDQ1EsSUFBSSxDQUFDLFNBQUNDLFFBQVE7bUJBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLEtBQUssQ0FBQyxXQUFNLEVBQUUsQ0FBQztTQUFBLENBQUMsQ0FDbkRILElBQUksQ0FBQyxTQUFDSSxTQUFTO21CQUFLWCxRQUFRLENBQUMsa0JBQUtDLEtBQUs7Z0JBQUVVLFNBQVMsRUFBVEEsU0FBUztnQkFBRVQsT0FBTyxFQUFFLEtBQUs7Y0FBRSxDQUFDO1NBQUEsQ0FBQyxDQUN0RVEsS0FBSyxDQUFDLFNBQUNFLFVBQVU7bUJBQ2hCWixRQUFRLENBQUMsa0JBQUtDLEtBQUs7Z0JBQUVXLFVBQVUsRUFBVkEsVUFBVTtnQkFBRVYsT0FBTyxFQUFFLEtBQUs7Y0FBRSxDQUFDO1NBQUEsQ0FDbkQsQ0FBQztLQUNMOztJQW5CRCxJQUEwQlAsR0FJeEIsR0FKd0JBLCtDQUFRLENBQWlCO1FBQ2pETyxPQUFPLEVBQUUsS0FBSztRQUNkUyxTQUFTLEVBQUVFLFNBQVM7UUFDcEJELFVBQVUsRUFBRUMsU0FBUztLQUN0QixDQUFDLEVBbkJKLEtBZWMsR0FBY2xCLEdBSXhCLEdBSlUsRUFmZCxRQWV3QixHQUFJQSxHQUl4QixHQUpvQjtJQXFCdEIsT0FBTztRQUFDRyxJQUFJO1FBQUVHLEtBQUs7S0FBQyxDQUFDO0NBQ3RCO0dBekJ1QkwsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50L3VzZUF1dGgudHN4PzVlMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmludGVyZmFjZSBJRmV0Y2hpbmdTdGF0ZSB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGZldGNoRGF0YT86IHtcbiAgICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgICB1c2VyPzogb2JqZWN0O1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHRva2VuPzogc3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb24/OiBzdHJpbmc7XG4gIH07XG4gIGZldGNoRXJyb3I/OiBvYmplY3Q7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBdXRoKFxuICB1cmw6IHN0cmluZ1xuKTogWyhmb3JtRGF0YTogYW55KSA9PiB2b2lkLCBJRmV0Y2hpbmdTdGF0ZV0ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPElGZXRjaGluZ1N0YXRlPih7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZmV0Y2hEYXRhOiB1bmRlZmluZWQsXG4gICAgZmV0Y2hFcnJvcjogdW5kZWZpbmVkLFxuICB9KTtcblxuICBmdW5jdGlvbiBhdXRoKHRva2VuOiBhbnkpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgIC50aGVuKChmZXRjaERhdGEpID0+IHNldFN0YXRlKHsgLi4uc3RhdGUsIGZldGNoRGF0YSwgbG9hZGluZzogZmFsc2UgfSkpXG4gICAgICAuY2F0Y2goKGZldGNoRXJyb3IpID0+XG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGZldGNoRXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICApO1xuICB9XG5cbiAgcmV0dXJuIFthdXRoLCBzdGF0ZV07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VBdXRoIiwidXJsIiwiYXV0aCIsInRva2VuIiwic2V0U3RhdGUiLCJzdGF0ZSIsImxvYWRpbmciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNhdGNoIiwiZmV0Y2hEYXRhIiwiZmV0Y2hFcnJvciIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client/useAuth.tsx\n");

/***/ })

});