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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _components_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navigator */ \"./components/navigator.tsx\");\n/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Tab */ \"./components/Tab.tsx\");\n/* harmony import */ var _lib_client_useAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/client/useAuth */ \"./lib/client/useAuth.tsx\");\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/client/utils */ \"./lib/client/utils.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var LogoinURL = \"/api/user/login\";\n    var AuthURL = \"/api/user/auth\";\n    var ref11 = _slicedToArray((0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(LogoinURL), 2), postLogin = ref11[0], state = ref11[1];\n    var ref1 = _slicedToArray((0,_lib_client_useAuth__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(AuthURL), 2), getAuth = ref1[0], authState = ref1[1];\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)(), register = ref2.register, reset = ref2.reset, handleSubmit = ref2.handleSubmit;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"phone\"), method = ref3[0], setMethod = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), token = ref4[0], setToken = ref4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var onEmailClick = function() {\n        reset(), setMethod(\"email\");\n    };\n    var onPhoneClick = function() {\n        reset(), setMethod(\"phone\");\n    };\n    var onValid = function(formData) {\n        if (state.loading) return;\n        postLogin(formData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref, ref5, ref6, ref7, ref8;\n        if (((ref = state.fetchData) === null || ref === void 0 ? void 0 : ref.success) && !((ref5 = state.fetchData) === null || ref5 === void 0 ? void 0 : ref5.user)) {\n            router.push(\"/create-account\");\n        }\n        if (((ref6 = state.fetchData) === null || ref6 === void 0 ? void 0 : ref6.success) && ((ref7 = state.fetchData) === null || ref7 === void 0 ? void 0 : ref7.user)) {\n            var ref9, ref10;\n            getAuth((ref9 = state.fetchData) === null || ref9 === void 0 ? void 0 : ref9.token);\n            setToken((ref10 = state.fetchData) === null || ref10 === void 0 ? void 0 : ref10.token);\n            if (token) {\n                (0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_9__.setTokenCookie)(token);\n            }\n        }\n        if ((ref8 = authState.fetchData) === null || ref8 === void 0 ? void 0 : ref8.user) {\n            router.push(\"/\");\n        }\n    }, [\n        state.fetchData,\n        authState.fetchData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-b from-rose-400 via-rose-200 to-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigator__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                url: \"/create-account\",\n                urlText: \"Go to create-account page\"\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tab__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                method: method,\n                onClickFn: method === \"email\" ? onPhoneClick : onEmailClick\n            }, void 0, false, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                children: [\n                    method === \"phone\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        register: register(\"phone\", {\n                            required: \"please write down phone number\"\n                        }),\n                        label: \"Phone Number\",\n                        name: \"phone\",\n                        type: \"number\",\n                        kind: \"phone\",\n                        placeholder: \"phone\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this) : null,\n                    method === \"email\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        register: register(\"email\", {\n                            required: \"please write down email address\"\n                        }),\n                        label: \"Email Address\",\n                        name: \"email\",\n                        type: \"email\",\n                        kind: \"email\",\n                        placeholder: \"email\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: method === \"email\" ? \"Login with Email \" : \"Login with Phone-Number\"\n                    }, void 0, false, {\n                        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/log-in.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"wm8AxpOC6pmyxH2z+KyrY6epP1g=\", false, function() {\n    return [\n        _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        _lib_client_useAuth__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFLGdDQUFnQzt5QkFDM0MsQ0FBQzt3QkFDRkMsS0FBSyxFQUFDLGNBQWM7d0JBQ3BCQyxJQUFJLEVBQUMsT0FBTzt3QkFDWkMsSUFBSSxFQUFDLFFBQVE7d0JBQ2JDLElBQUksRUFBQyxPQUFPO3dCQUNaQyxXQUFXLEVBQUMsT0FBTzt3QkFDbkJMLFFBQVE7Ozs7OzRCQUNSLEdBQ0EsSUFBSTtvQkFFUHJCLE1BQU0sS0FBSyxPQUFPLGlCQUNqQiw4REFBQ2hCLHlEQUFLO3dCQUNKYSxRQUFRLEVBQUVBLFFBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCd0IsUUFBUSxFQUFFLGlDQUFpQzt5QkFDNUMsQ0FBQzt3QkFDRkMsS0FBSyxFQUFDLGVBQWU7d0JBQ3JCQyxJQUFJLEVBQUMsT0FBTzt3QkFDWkMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLElBQUksRUFBQyxPQUFPO3dCQUNaQyxXQUFXLEVBQUMsT0FBTzt3QkFDbkJMLFFBQVE7Ozs7OzRCQUNSLEdBQ0EsSUFBSTtrQ0FDUiw4REFBQ3RDLDBEQUFNO3dCQUNMNEMsSUFBSSxFQUNGM0IsTUFBTSxLQUFLLE9BQU8sR0FBRyxtQkFBbUIsR0FBRyx5QkFBeUI7Ozs7OzRCQUU5RDs7Ozs7O29CQUNMOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FsRnVCVixHQUFHOztRQUlFRiwrREFBVztRQUNURCwyREFBTztRQUVNTCxxREFBTztRQUlsQ0osa0RBQVM7OztBQVhGWSxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZy1pbi50c3g/MzBkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmlnYXRvclwiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJcIjtcblxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlQXV0aFwiO1xuaW1wb3J0IHVzZUZldGNoaW5nIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZUZldGNoaW5nXCI7XG5pbXBvcnQgeyBzZXRUb2tlbkNvb2tpZSB9IGZyb20gXCIuLi9saWIvY2xpZW50L3V0aWxzXCI7XG5cbmludGVyZmFjZSBJTG9naW5Gb3JtIHtcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lPzogc3RyaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBMb2dvaW5VUkwgPSBcIi9hcGkvdXNlci9sb2dpblwiO1xuICBjb25zdCBBdXRoVVJMID0gXCIvYXBpL3VzZXIvYXV0aFwiO1xuXG4gIGNvbnN0IFtwb3N0TG9naW4sIHN0YXRlXSA9IHVzZUZldGNoaW5nKExvZ29pblVSTCk7XG4gIGNvbnN0IFtnZXRBdXRoLCBhdXRoU3RhdGVdID0gdXNlQXV0aChBdXRoVVJMKTtcblxuICBjb25zdCB7IHJlZ2lzdGVyLCByZXNldCwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPElMb2dpbkZvcm0+KCk7XG4gIGNvbnN0IFttZXRob2QsIHNldE1ldGhvZF0gPSB1c2VTdGF0ZTxcImVtYWlsXCIgfCBcInBob25lXCI+KFwicGhvbmVcIik7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihcIlwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25FbWFpbENsaWNrID0gKCkgPT4ge1xuICAgIHJlc2V0KCksIHNldE1ldGhvZChcImVtYWlsXCIpO1xuICB9O1xuICBjb25zdCBvblBob25lQ2xpY2sgPSAoKSA9PiB7XG4gICAgcmVzZXQoKSwgc2V0TWV0aG9kKFwicGhvbmVcIik7XG4gIH07XG4gIGNvbnN0IG9uVmFsaWQgPSAoZm9ybURhdGE6IElMb2dpbkZvcm0pID0+IHtcbiAgICBpZiAoc3RhdGUubG9hZGluZykgcmV0dXJuO1xuICAgIHBvc3RMb2dpbihmb3JtRGF0YSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmZldGNoRGF0YT8uc3VjY2VzcyAmJiAhc3RhdGUuZmV0Y2hEYXRhPy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9jcmVhdGUtYWNjb3VudFwiKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmZldGNoRGF0YT8uc3VjY2VzcyAmJiBzdGF0ZS5mZXRjaERhdGE/LnVzZXIpIHtcbiAgICAgIGdldEF1dGgoc3RhdGUuZmV0Y2hEYXRhPy50b2tlbik7XG4gICAgICBzZXRUb2tlbihzdGF0ZS5mZXRjaERhdGE/LnRva2VuKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXRUb2tlbkNvb2tpZSh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdXRoU3RhdGUuZmV0Y2hEYXRhPy51c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbc3RhdGUuZmV0Y2hEYXRhLCBhdXRoU3RhdGUuZmV0Y2hEYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWIgZnJvbS1yb3NlLTQwMCB2aWEtcm9zZS0yMDAgdG8td2hpdGVcIj5cbiAgICAgIDxOYXZpZ2F0b3IgdXJsPVwiL2NyZWF0ZS1hY2NvdW50XCIgdXJsVGV4dD1cIkdvIHRvIGNyZWF0ZS1hY2NvdW50IHBhZ2VcIiAvPlxuICAgICAgPFRhYlxuICAgICAgICBtZXRob2Q9e21ldGhvZH1cbiAgICAgICAgb25DbGlja0ZuPXttZXRob2QgPT09IFwiZW1haWxcIiA/IG9uUGhvbmVDbGljayA6IG9uRW1haWxDbGlja31cbiAgICAgID48L1RhYj5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkKX0+XG4gICAgICAgIHttZXRob2QgPT09IFwicGhvbmVcIiA/IChcbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3RlcihcInBob25lXCIsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwicGxlYXNlIHdyaXRlIGRvd24gcGhvbmUgbnVtYmVyXCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGtpbmQ9XCJwaG9uZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBob25lXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAge21ldGhvZCA9PT0gXCJlbWFpbFwiID8gKFxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwiZW1haWxcIiwge1xuICAgICAgICAgICAgICByZXF1aXJlZDogXCJwbGVhc2Ugd3JpdGUgZG93biBlbWFpbCBhZGRyZXNzXCIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGtpbmQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgIG1ldGhvZCA9PT0gXCJlbWFpbFwiID8gXCJMb2dpbiB3aXRoIEVtYWlsIFwiIDogXCJMb2dpbiB3aXRoIFBob25lLU51bWJlclwiXG4gICAgICAgICAgfVxuICAgICAgICA+PC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk5hdmlnYXRvciIsIlRhYiIsInVzZUF1dGgiLCJ1c2VGZXRjaGluZyIsInNldFRva2VuQ29va2llIiwiQXBwIiwiTG9nb2luVVJMIiwiQXV0aFVSTCIsInBvc3RMb2dpbiIsInN0YXRlIiwiZ2V0QXV0aCIsImF1dGhTdGF0ZSIsInJlZ2lzdGVyIiwicmVzZXQiLCJoYW5kbGVTdWJtaXQiLCJtZXRob2QiLCJzZXRNZXRob2QiLCJ0b2tlbiIsInNldFRva2VuIiwicm91dGVyIiwib25FbWFpbENsaWNrIiwib25QaG9uZUNsaWNrIiwib25WYWxpZCIsImZvcm1EYXRhIiwibG9hZGluZyIsImZldGNoRGF0YSIsInN1Y2Nlc3MiLCJ1c2VyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInVybCIsInVybFRleHQiLCJvbkNsaWNrRm4iLCJmb3JtIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsImxhYmVsIiwibmFtZSIsInR5cGUiLCJraW5kIiwicGxhY2Vob2xkZXIiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/log-in.tsx\n");

/***/ })

});