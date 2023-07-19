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
exports.id = "pages/api/user/auth";
exports.ids = ["pages/api/user/auth"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/server/client.ts":
/*!******************************!*\
  !*** ./lib/server/client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsaUVBQWUsSUFBSUEsd0RBQVksRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9zZXJ2ZXIvY2xpZW50LnRzPzIxYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmlzbWFDbGllbnQoKTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/client.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler(methods, handlerFn) {\n    return async function(req, res) {\n        if (!req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        try {\n            await handlerFn(req, res);\n        } catch (error) {\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNZSxTQUFTQSxXQUFXLENBQ2pDQyxPQUE4QixFQUM5QkMsU0FBOEQsRUFDOUQ7SUFDQSxPQUFPLGVBQ0xDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNOO1FBQ2QsSUFBSSxDQUFDRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDSixPQUFPLENBQUNLLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRSxNQUFNLENBQVEsRUFBRTtZQUN2RCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJO1lBQ0YsTUFBTU4sU0FBUyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCLENBQUMsT0FBT0ssS0FBSyxFQUFFO1lBQ2QsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQztnQkFBRUQsS0FBSzthQUFFLENBQUMsQ0FBQztTQUN4QztLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzP2FlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VUeXBlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhhbmRsZXIoXG4gIG1ldGhvZHM6IEFycmF5PFwiR0VUXCIgfCBcIlBPU1RcIj4sXG4gIGhhbmRsZXJGbjogKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB2b2lkXG4pIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKCFyZXEubWV0aG9kICYmICFtZXRob2RzLmluY2x1ZGVzKHJlcS5tZXRob2QgYXMgYW55KSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGhhbmRsZXJGbihyZXEsIHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIm1ldGhvZHMiLCJoYW5kbGVyRm4iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpbmNsdWRlcyIsInN0YXR1cyIsImVuZCIsImVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/user/auth.tsx":
/*!*********************************!*\
  !*** ./pages/api/user/auth.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { authorization  } = req.headers;\n    let tokenObj;\n    let user;\n    tokenObj = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].token.findUnique({\n        where: {\n            token: authorization\n        }\n    });\n    user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            id: tokenObj?.userId\n        }\n    });\n    if (user) {\n        return res.json({\n            success: true,\n            user,\n            id: user.id\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"POST\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZ0Q7QUFDNEI7QUFFNUUsZUFBZUUsT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsTUFBTSxFQUFFQyxhQUFhLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxPQUFPO0lBQ3JDLElBQUlDLFFBQVE7SUFDWixJQUFJQyxJQUFJO0lBQ1JELFFBQVEsR0FBRyxNQUFNUCwyRUFBdUIsQ0FBQztRQUN2Q1csS0FBSyxFQUFFO1lBQUVGLEtBQUssRUFBRUosYUFBYTtTQUFFO0tBQ2hDLENBQUMsQ0FBQztJQUNIRyxJQUFJLEdBQUcsTUFBTVIsMEVBQXNCLENBQUM7UUFDbENXLEtBQUssRUFBRTtZQUFFQyxFQUFFLEVBQUVMLFFBQVEsRUFBRU0sTUFBTTtTQUFFO0tBQ2hDLENBQUMsQ0FBQztJQUNILElBQUlMLElBQUksRUFBRTtRQUNSLE9BQU9KLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxJQUFJO1lBQUVQLElBQUk7WUFBRUksRUFBRSxFQUFFSixJQUFJLENBQUNJLEVBQUU7U0FBRSxDQUFDLENBQUM7S0FDdkQ7Q0FDRjtBQUNELGlFQUFlWCxtRUFBVyxDQUFDO0lBQUMsTUFBTTtDQUFDLEVBQUVDLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91c2VyL2F1dGgudHN4Pzg1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uLy4uL2xpYi9zZXJ2ZXIvY2xpZW50XCI7XG5pbXBvcnQgd2l0aEhhbmRsZXIsIHsgUmVzcG9uc2VUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPlxuKSB7XG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XG4gIGxldCB0b2tlbk9iajtcbiAgbGV0IHVzZXI7XG4gIHRva2VuT2JqID0gYXdhaXQgY2xpZW50LnRva2VuLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHRva2VuOiBhdXRob3JpemF0aW9uIH0sXG4gIH0pO1xuICB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHRva2VuT2JqPy51c2VySWQgfSxcbiAgfSk7XG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdXNlciwgaWQ6IHVzZXIuaWQgfSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKFtcIlBPU1RcIl0sIGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbImNsaWVudCIsIndpdGhIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwidG9rZW5PYmoiLCJ1c2VyIiwidG9rZW4iLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInVzZXJJZCIsImpzb24iLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/auth.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/auth.tsx"));
module.exports = __webpack_exports__;

})();