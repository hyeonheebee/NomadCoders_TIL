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
exports.id = "pages/api/user/login";
exports.ids = ["pages/api/user/login"];
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

/***/ "(api)/./pages/api/user/login.tsx":
/*!**********************************!*\
  !*** ./pages/api/user/login.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { phone , email  } = req.body;\n    const authMethod = email ? {\n        email\n    } : phone ? {\n        phone: +phone\n    } : null;\n    if (!authMethod) return res.status(400).json({\n        success: false\n    });\n    const user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            ...authMethod\n        }\n    });\n    let tokenObj;\n    if (user) {\n        tokenObj = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].token.findUnique({\n            where: {\n                userId: user.id\n            }\n        });\n    }\n    return res.json({\n        success: true,\n        user,\n        token: tokenObj?.token\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"POST\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWdEO0FBQzRCO0FBRTVFLGVBQWVFLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQ2pDLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxHQUFHO1FBQUVBLEtBQUs7S0FBRSxHQUFHRCxLQUFLLEdBQUc7UUFBRUEsS0FBSyxFQUFFLENBQUNBLEtBQUs7S0FBRSxHQUFHLElBQUk7SUFDdkUsSUFBSSxDQUFDRyxVQUFVLEVBQUUsT0FBT0osR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUsS0FBSztLQUFFLENBQUMsQ0FBQztJQUNqRSxNQUFNQyxJQUFJLEdBQUcsTUFBTVosMEVBQXNCLENBQUM7UUFDeENjLEtBQUssRUFBRTtZQUNMLEdBQUdOLFVBQVU7U0FDZDtLQUNGLENBQUM7SUFDRixJQUFJTyxRQUFRO0lBQ1osSUFBSUgsSUFBSSxFQUFFO1FBQ1JHLFFBQVEsR0FBRyxNQUFNZiwyRUFBdUIsQ0FBQztZQUN2Q2MsS0FBSyxFQUFFO2dCQUFFRyxNQUFNLEVBQUVMLElBQUksQ0FBQ00sRUFBRTthQUFFO1NBQzNCLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBT2QsR0FBRyxDQUFDTSxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLElBQUk7UUFBRUMsSUFBSTtRQUFFSSxLQUFLLEVBQUVELFFBQVEsRUFBRUMsS0FBSztLQUFFLENBQUMsQ0FBQztDQUNsRTtBQUNELGlFQUFlZixtRUFBVyxDQUFDO0lBQUMsTUFBTTtDQUFDLEVBQUVDLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91c2VyL2xvZ2luLnRzeD84OWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi8uLi9saWIvc2VydmVyL2NsaWVudFwiO1xuaW1wb3J0IHdpdGhIYW5kbGVyLCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlVHlwZT5cbikge1xuICBjb25zdCB7IHBob25lLCBlbWFpbCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IGF1dGhNZXRob2QgPSBlbWFpbCA/IHsgZW1haWwgfSA6IHBob25lID8geyBwaG9uZTogK3Bob25lIH0gOiBudWxsO1xuICBpZiAoIWF1dGhNZXRob2QpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICBjb25zdCB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIC4uLmF1dGhNZXRob2QsXG4gICAgfSxcbiAgfSk7XG4gIGxldCB0b2tlbk9iajtcbiAgaWYgKHVzZXIpIHtcbiAgICB0b2tlbk9iaiA9IGF3YWl0IGNsaWVudC50b2tlbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdXNlciwgdG9rZW46IHRva2VuT2JqPy50b2tlbiB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKFtcIlBPU1RcIl0sIGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbImNsaWVudCIsIndpdGhIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBob25lIiwiZW1haWwiLCJib2R5IiwiYXV0aE1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInRva2VuT2JqIiwidG9rZW4iLCJ1c2VySWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/login.tsx"));
module.exports = __webpack_exports__;

})();