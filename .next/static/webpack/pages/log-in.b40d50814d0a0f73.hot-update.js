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

/***/ "./pages/log-in.tsx":
/*!**************************!*\
  !*** ./pages/log-in.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _lib_client_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/client/useAuth */ \"./lib/client/useAuth.tsx\");\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/client/utils */ \"./lib/client/utils.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var LogoinURL = \"/api/user/login\";\n    var AuthURL = \"/api/user/auth\";\n    var ref11 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(LogoinURL), 2), postLogin = ref11[0], state = ref11[1];\n    var ref1 = _slicedToArray((0,_lib_client_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(AuthURL), 2), getAuth = ref1[0], authState = ref1[1];\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(), register = ref2.register, reset = ref2.reset, handleSubmit = ref2.handleSubmit;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"phone\"), method = ref3[0], setMethod = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), token = ref4[0], setToken = ref4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var onEmailClick = function() {\n        reset(), setMethod(\"email\");\n    };\n    var onPhoneClick = function() {\n        reset(), setMethod(\"phone\");\n    };\n    var onValid = function(formData) {\n        if (state.loading) return;\n        postLogin(formData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref5, ref6, ref7, ref8;\n        if (((ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.success) && !((ref5 = state.fetchData) === null || ref5 === void 0 ? void 0 : ref5.user)) {\n            router.push(\"/create-account\");\n        }\n        if (((ref6 = state.fetchData) === null || ref6 === void 0 ? void 0 : ref6.success) && ((ref7 = state.fetchData) === null || ref7 === void 0 ? void 0 : ref7.user)) {\n            var ref9;\n            setToken((ref9 = state.fetchData) === null || ref9 === void 0 ? void 0 : ref9.token);\n            if (token) {\n                var ref10;\n                (0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_7__.setTokenCookie)(token);\n                getAuth((ref10 = state.fetchData) === null || ref10 === void 0 ? void 0 : ref10.token);\n            }\n        }\n        if ((ref8 = authState.fetchData) === null || ref8 === void 0 ? void 0 : ref8.user) {\n            router.push(\"/\");\n        }\n        console.log(\"this is authState success\", authState.fetchData);\n        console.log(\"this is State success\", state.fetchData);\n    }, [\n        state.fetchData,\n        authState.fetchData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: method === \"email\" ? \"Phone-Login\" : \"Email-Login\",\n                onClick: method === \"email\" ? onPhoneClick : onEmailClick\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                children: [\n                    method === \"phone\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        register: register(\"phone\", {\n                            required: \"please write down phone number\"\n                        }),\n                        label: \"Phone Number\",\n                        name: \"phone\",\n                        type: \"number\",\n                        kind: \"phone\",\n                        placeholder: \"phone\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this) : null,\n                    method === \"email\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        register: register(\"email\", {\n                            required: \"please write down email address\"\n                        }),\n                        label: \"Email Address\",\n                        name: \"email\",\n                        type: \"email\",\n                        kind: \"email\",\n                        placeholder: \"email\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: method === \"email\" ? \"Get login link \" : \"Get sms Auth\"\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"wm8AxpOC6pmyxH2z+KyrY6epP1g=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _lib_client_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSzt3QkFDSlcsUUFBUSxFQUFFQSxRQUFRLENBQUMsT0FBTyxFQUFFOzRCQUMxQndCLFFBQVEsRUFBRSxnQ0FBZ0M7eUJBQzNDLENBQUM7d0JBQ0ZDLEtBQUssRUFBQyxjQUFjO3dCQUNwQkMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLElBQUksRUFBQyxRQUFRO3dCQUNiQyxJQUFJLEVBQUMsT0FBTzt3QkFDWkMsV0FBVyxFQUFDLE9BQU87d0JBQ25CTCxRQUFROzs7Ozs0QkFDUixHQUNBLElBQUk7b0JBRVByQixNQUFNLEtBQUssT0FBTyxpQkFDakIsOERBQUNkLHlEQUFLO3dCQUNKVyxRQUFRLEVBQUVBLFFBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCd0IsUUFBUSxFQUFFLGlDQUFpQzt5QkFDNUMsQ0FBQzt3QkFDRkMsS0FBSyxFQUFDLGVBQWU7d0JBQ3JCQyxJQUFJLEVBQUMsT0FBTzt3QkFDWkMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLElBQUksRUFBQyxPQUFPO3dCQUNaQyxXQUFXLEVBQUMsT0FBTzt3QkFDbkJMLFFBQVE7Ozs7OzRCQUNSLEdBQ0EsSUFBSTtrQ0FDUiw4REFBQ3BDLDBEQUFNO3dCQUNMZ0MsSUFBSSxFQUFFakIsTUFBTSxLQUFLLE9BQU8sR0FBRyxpQkFBaUIsR0FBRyxjQUFjOzs7Ozs0QkFDckQ7Ozs7OztvQkFDTDs7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBakZ1QlYsR0FBRzs7UUFJRUYsK0RBQVc7UUFDVEQsMkRBQU87UUFFTUgsb0RBQU87UUFJbENKLGtEQUFTOzs7QUFYRlUsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2ctaW4udHN4PzMwZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlQXV0aFwiO1xuaW1wb3J0IHVzZUZldGNoaW5nIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZUZldGNoaW5nXCI7XG5cbmltcG9ydCB7IHNldFRva2VuQ29va2llIH0gZnJvbSBcIi4uL2xpYi9jbGllbnQvdXRpbHNcIjtcblxuaW50ZXJmYWNlIElMb2dpbkZvcm0ge1xuICBlbWFpbD86IHN0cmluZztcbiAgcGhvbmU/OiBzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IExvZ29pblVSTCA9IFwiL2FwaS91c2VyL2xvZ2luXCI7XG4gIGNvbnN0IEF1dGhVUkwgPSBcIi9hcGkvdXNlci9hdXRoXCI7XG5cbiAgY29uc3QgW3Bvc3RMb2dpbiwgc3RhdGVdID0gdXNlRmV0Y2hpbmcoTG9nb2luVVJMKTtcbiAgY29uc3QgW2dldEF1dGgsIGF1dGhTdGF0ZV0gPSB1c2VBdXRoKEF1dGhVUkwpO1xuXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIHJlc2V0LCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08SUxvZ2luRm9ybT4oKTtcbiAgY29uc3QgW21ldGhvZCwgc2V0TWV0aG9kXSA9IHVzZVN0YXRlPFwiZW1haWxcIiB8IFwicGhvbmVcIj4oXCJwaG9uZVwiKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KFwiXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBvbkVtYWlsQ2xpY2sgPSAoKSA9PiB7XG4gICAgcmVzZXQoKSwgc2V0TWV0aG9kKFwiZW1haWxcIik7XG4gIH07XG4gIGNvbnN0IG9uUGhvbmVDbGljayA9ICgpID0+IHtcbiAgICByZXNldCgpLCBzZXRNZXRob2QoXCJwaG9uZVwiKTtcbiAgfTtcbiAgY29uc3Qgb25WYWxpZCA9IChmb3JtRGF0YTogSUxvZ2luRm9ybSkgPT4ge1xuICAgIGlmIChzdGF0ZS5sb2FkaW5nKSByZXR1cm47XG4gICAgcG9zdExvZ2luKGZvcm1EYXRhKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmICFzdGF0ZS5mZXRjaERhdGE/LnVzZXIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmIHN0YXRlLmZldGNoRGF0YT8udXNlcikge1xuICAgICAgc2V0VG9rZW4oc3RhdGUuZmV0Y2hEYXRhPy50b2tlbik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2V0VG9rZW5Db29raWUodG9rZW4pO1xuICAgICAgICBnZXRBdXRoKHN0YXRlLmZldGNoRGF0YT8udG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXV0aFN0YXRlLmZldGNoRGF0YT8udXNlcikge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgYXV0aFN0YXRlIHN1Y2Nlc3NcIiwgYXV0aFN0YXRlLmZldGNoRGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIFN0YXRlIHN1Y2Nlc3NcIiwgc3RhdGUuZmV0Y2hEYXRhKTtcbiAgfSwgW3N0YXRlLmZldGNoRGF0YSwgYXV0aFN0YXRlLmZldGNoRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdGV4dD17bWV0aG9kID09PSBcImVtYWlsXCIgPyBcIlBob25lLUxvZ2luXCIgOiBcIkVtYWlsLUxvZ2luXCJ9XG4gICAgICAgIG9uQ2xpY2s9e21ldGhvZCA9PT0gXCJlbWFpbFwiID8gb25QaG9uZUNsaWNrIDogb25FbWFpbENsaWNrfVxuICAgICAgPjwvQnV0dG9uPlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAge21ldGhvZCA9PT0gXCJwaG9uZVwiID8gKFxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwicGhvbmVcIiwge1xuICAgICAgICAgICAgICByZXF1aXJlZDogXCJwbGVhc2Ugd3JpdGUgZG93biBwaG9uZSBudW1iZXJcIixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAga2luZD1cInBob25lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGhvbmVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7bWV0aG9kID09PSBcImVtYWlsXCIgPyAoXG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoXCJlbWFpbFwiLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcInBsZWFzZSB3cml0ZSBkb3duIGVtYWlsIGFkZHJlc3NcIixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAga2luZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHRleHQ9e21ldGhvZCA9PT0gXCJlbWFpbFwiID8gXCJHZXQgbG9naW4gbGluayBcIiA6IFwiR2V0IHNtcyBBdXRoXCJ9XG4gICAgICAgID48L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwidXNlQXV0aCIsInVzZUZldGNoaW5nIiwic2V0VG9rZW5Db29raWUiLCJBcHAiLCJMb2dvaW5VUkwiLCJBdXRoVVJMIiwicG9zdExvZ2luIiwic3RhdGUiLCJnZXRBdXRoIiwiYXV0aFN0YXRlIiwicmVnaXN0ZXIiLCJyZXNldCIsImhhbmRsZVN1Ym1pdCIsIm1ldGhvZCIsInNldE1ldGhvZCIsInRva2VuIiwic2V0VG9rZW4iLCJyb3V0ZXIiLCJvbkVtYWlsQ2xpY2siLCJvblBob25lQ2xpY2siLCJvblZhbGlkIiwiZm9ybURhdGEiLCJsb2FkaW5nIiwiZmV0Y2hEYXRhIiwic3VjY2VzcyIsInVzZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRleHQiLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJsYWJlbCIsIm5hbWUiLCJ0eXBlIiwia2luZCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/log-in.tsx\n");

/***/ })

});