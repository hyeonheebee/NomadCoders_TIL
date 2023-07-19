"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/client/useFetching.tsx":
/*!************************************!*\
  !*** ./lib/client/useFetching.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useFetching)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useFetching(url) {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        loading: false,\n        fetchData: undefined,\n        fetchError: undefined\n    });\n    function fetching(formData) {\n        setState({\n            ...state,\n            loading: true\n        });\n        fetch(url, {\n            method: \"POST\",\n            body: JSON.stringify(formData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json().catch(()=>{})\n        ).then((fetchData)=>setState({\n                ...state,\n                fetchData,\n                loading: false\n            })\n        ).catch((fetchError)=>setState({\n                ...state,\n                fetchError,\n                loading: false\n            })\n        );\n    }\n    return [\n        fetching,\n        state\n    ];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZUZldGNoaW5nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFXbEIsU0FBU0MsV0FBVyxDQUNqQ0MsR0FBVyxFQUNnQztJQUMzQyxNQUFNLEVBZFIsR0FjU0MsS0FBSyxHQWRkLEdBY2dCQyxRQUFRLE1BQUlKLCtDQUFRLENBQWlCO1FBQ2pESyxPQUFPLEVBQUUsS0FBSztRQUNkQyxTQUFTLEVBQUVDLFNBQVM7UUFDcEJDLFVBQVUsRUFBRUQsU0FBUztLQUN0QixDQUFDO0lBRUYsU0FBU0UsUUFBUSxDQUFDQyxRQUFhLEVBQUU7UUFDL0JOLFFBQVEsQ0FBQztZQUFFLEdBQUdELEtBQUs7WUFBRUUsT0FBTyxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUM7UUFDdENNLEtBQUssQ0FBQ1QsR0FBRyxFQUFFO1lBQ1RVLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFFBQVEsQ0FBQztZQUM5Qk0sT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7U0FDRixDQUFDLENBQ0NDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLEtBQUssQ0FBQyxJQUFNLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FDbkRILElBQUksQ0FBQyxDQUFDWCxTQUFTLEdBQUtGLFFBQVEsQ0FBQztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFRyxTQUFTO2dCQUFFRCxPQUFPLEVBQUUsS0FBSzthQUFFLENBQUM7UUFBQSxDQUFDLENBQ3RFZSxLQUFLLENBQUMsQ0FBQ1osVUFBVSxHQUNoQkosUUFBUSxDQUFDO2dCQUFFLEdBQUdELEtBQUs7Z0JBQUVLLFVBQVU7Z0JBQUVILE9BQU8sRUFBRSxLQUFLO2FBQUUsQ0FBQztRQUFBLENBQ25ELENBQUM7S0FDTDtJQUNELE9BQU87UUFBQ0ksUUFBUTtRQUFFTixLQUFLO0tBQUMsQ0FBQztDQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvY2xpZW50L3VzZUZldGNoaW5nLnRzeD80YWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbnRlcmZhY2UgSUZldGNoaW5nU3RhdGUge1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBmZXRjaERhdGE/OiB7XG4gICAgc3VjY2Vzcz86IGJvb2xlYW47XG4gICAgdXNlcj86IG9iamVjdDtcbiAgICB0b2tlbj86IHN0cmluZztcbiAgICBhdXRob3JpemF0aW9uPzogc3RyaW5nO1xuICB9O1xuICBmZXRjaEVycm9yPzogb2JqZWN0O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRmV0Y2hpbmcoXG4gIHVybDogc3RyaW5nXG4pOiBbKGZvcm1EYXRhOiBhbnkpID0+IHZvaWQsIElGZXRjaGluZ1N0YXRlXSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8SUZldGNoaW5nU3RhdGU+KHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBmZXRjaERhdGE6IHVuZGVmaW5lZCxcbiAgICBmZXRjaEVycm9yOiB1bmRlZmluZWQsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGZldGNoaW5nKGZvcm1EYXRhOiBhbnkpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAudGhlbigoZmV0Y2hEYXRhKSA9PiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBmZXRjaERhdGEsIGxvYWRpbmc6IGZhbHNlIH0pKVxuICAgICAgLmNhdGNoKChmZXRjaEVycm9yKSA9PlxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBmZXRjaEVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgKTtcbiAgfVxuICByZXR1cm4gW2ZldGNoaW5nLCBzdGF0ZV07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VGZXRjaGluZyIsInVybCIsInN0YXRlIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiZmV0Y2hEYXRhIiwidW5kZWZpbmVkIiwiZmV0Y2hFcnJvciIsImZldGNoaW5nIiwiZm9ybURhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client/useFetching.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_client_useFetching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client/useFetching */ \"./lib/client/useFetching.tsx\");\n\n\n\n\nfunction App() {\n    const { 0: cookie , 1: setCookie  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tokenFn, state] = (0,_lib_client_useFetching__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/user/main\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(\"\\uB0B4\\uAC00\\uB9CC\\uB4E0\\uCFE0\\uD0A4~\", cookie);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCookie(document.cookie);\n        tokenFn(cookie);\n        //   if (state) {\n        if (state.fetchData?.success && !state.fetchData?.user) {\n            router.push(\"/log-in\");\n        } else if (state.fetchData?.success && state.fetchData?.user) {\n            console.log(\"this is home success\", state.fetchData);\n        }\n    }, [\n        state.fetchData?.success,\n        cookie\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"home~\"\n    }, void 0, false, {\n        fileName: \"/root/develope/carrot-final/carrot-final/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUNHO0FBRUM7QUFLckMsU0FBU0ssR0FBRyxHQUFHO0lBQzVCLE1BQU0sRUFUUixHQVNTQyxNQUFNLEdBVGYsR0FTaUJDLFNBQVMsTUFBSUosK0NBQVEsQ0FBcUIsRUFBRSxDQUFDO0lBQzVELE1BQU0sQ0FBQ0ssT0FBTyxFQUFFQyxLQUFLLENBQUMsR0FBR0wsbUVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0RCxNQUFNTSxNQUFNLEdBQUdWLHNEQUFTLEVBQUU7SUFFMUJXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVDQUFTLEVBQUVOLE1BQU0sQ0FBQyxDQUFDO0lBRS9CSixnREFBUyxDQUFDLElBQU07UUFDZEssU0FBUyxDQUFDTSxRQUFRLENBQUNQLE1BQU0sQ0FBQyxDQUFDO1FBQzNCRSxPQUFPLENBQUNGLE1BQU0sQ0FBQyxDQUFDO1FBQ2hCLGlCQUFpQjtRQUNqQixJQUFJRyxLQUFLLENBQUNLLFNBQVMsRUFBRUMsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssU0FBUyxFQUFFRSxJQUFJLEVBQUU7WUFDdEROLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCLE1BQU0sSUFBSVIsS0FBSyxDQUFDSyxTQUFTLEVBQUVDLE9BQU8sSUFBSU4sS0FBSyxDQUFDSyxTQUFTLEVBQUVFLElBQUksRUFBRTtZQUM1REwsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVILEtBQUssQ0FBQ0ssU0FBUyxDQUFDLENBQUM7U0FDdEQ7S0FDRixFQUFFO1FBQUNMLEtBQUssQ0FBQ0ssU0FBUyxFQUFFQyxPQUFPO1FBQUVULE1BQU07S0FBQyxDQUFDLENBQUM7SUFFdkMscUJBQU8sOERBQUNZLEtBQUc7a0JBQUMsT0FBSzs7Ozs7WUFBTSxDQUFDO0NBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xuaW1wb3J0IHVzZUZldGNoaW5nIGZyb20gXCIuLi9saWIvY2xpZW50L3VzZUZldGNoaW5nXCI7XG5pbXBvcnQgdXNlVXNlciBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VVc2VyXCI7XG5cbmltcG9ydCB7IGZpbmRUb2tlblN0cmluZyB9IGZyb20gXCIuLi9saWIvY2xpZW50L3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oXCJcIik7XG4gIGNvbnN0IFt0b2tlbkZuLCBzdGF0ZV0gPSB1c2VGZXRjaGluZyhcIi9hcGkvdXNlci9tYWluXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zb2xlLmxvZyhcIuuCtOqwgOunjOuToOy/oO2CpH5cIiwgY29va2llKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvb2tpZShkb2N1bWVudC5jb29raWUpO1xuICAgIHRva2VuRm4oY29va2llKTtcbiAgICAvLyAgIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5mZXRjaERhdGE/LnN1Y2Nlc3MgJiYgIXN0YXRlLmZldGNoRGF0YT8udXNlcikge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9nLWluXCIpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZmV0Y2hEYXRhPy5zdWNjZXNzICYmIHN0YXRlLmZldGNoRGF0YT8udXNlcikge1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGhvbWUgc3VjY2Vzc1wiLCBzdGF0ZS5mZXRjaERhdGEpO1xuICAgIH1cbiAgfSwgW3N0YXRlLmZldGNoRGF0YT8uc3VjY2VzcywgY29va2llXSk7XG5cbiAgcmV0dXJuIDxkaXY+aG9tZX48L2Rpdj47XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZldGNoaW5nIiwiQXBwIiwiY29va2llIiwic2V0Q29va2llIiwidG9rZW5GbiIsInN0YXRlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZmV0Y2hEYXRhIiwic3VjY2VzcyIsInVzZXIiLCJwdXNoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();