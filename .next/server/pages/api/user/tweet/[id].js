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
exports.id = "pages/api/user/tweet/[id]";
exports.ids = ["pages/api/user/tweet/[id]"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler(methods, handlerFn) {\n    return async function(req, res) {\n        if (!req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        try {\n            await handlerFn(req, res);\n        } catch (error) {\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNZSxTQUFTQSxXQUFXLENBQ2pDQyxPQUF5QyxFQUN6Q0MsU0FBOEQsRUFDOUQ7SUFDQSxPQUFPLGVBQ0xDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNOO1FBQ2QsSUFBSSxDQUFDRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDSixPQUFPLENBQUNLLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRSxNQUFNLENBQVEsRUFBRTtZQUN2RCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJO1lBQ0YsTUFBTU4sU0FBUyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCLENBQUMsT0FBT0ssS0FBSyxFQUFFO1lBQ2QsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQztnQkFBRUQsS0FBSzthQUFFLENBQUMsQ0FBQztTQUN4QztLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzP2FlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VUeXBlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhhbmRsZXIoXG4gIG1ldGhvZHM6IEFycmF5PFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiREVMRVRFXCI+LFxuICBoYW5kbGVyRm46IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZFxuKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghcmVxLm1ldGhvZCAmJiAhbWV0aG9kcy5pbmNsdWRlcyhyZXEubWV0aG9kIGFzIGFueSkpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBoYW5kbGVyRm4ocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaGFuZGxlckZuIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlbmQiLCJlcnJvciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/user/tweet/[id]/index.ts":
/*!********************************************!*\
  !*** ./pages/api/user/tweet/[id]/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { id  } = req.query;\n    let singleTweet;\n    let user;\n    let existedLike;\n    if (!id) return res.status(400).json({\n        success: false\n    });\n    singleTweet = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.findUnique({\n        where: {\n            id: +id\n        }\n    });\n    if (singleTweet) {\n        user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                id: singleTweet.userId\n            }\n        });\n        existedLike = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].like.findFirst({\n            where: {\n                tweetId: +id,\n                userId: user?.id\n            }\n        });\n    }\n    console.log(existedLike);\n    return res.json({\n        success: true,\n        singleTweet,\n        user,\n        existedLike\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"GET\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci90d2VldC9baWRdL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVzRDtBQUdQO0FBRS9DLGVBQWVFLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLE1BQU0sRUFBRUMsRUFBRSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUN4QixJQUFJQyxXQUFXO0lBQ2YsSUFBSUMsSUFBSTtJQUNSLElBQUlDLFdBQVc7SUFDZixJQUFJLENBQUNKLEVBQUUsRUFBRSxPQUFPRCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO0tBQUUsQ0FBQyxDQUFDO0lBRXpETCxXQUFXLEdBQUcsTUFBTVAsMkVBQXVCLENBQUM7UUFDMUNlLEtBQUssRUFBRTtZQUNMVixFQUFFLEVBQUUsQ0FBQ0EsRUFBRTtTQUNSO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsSUFBSUUsV0FBVyxFQUFFO1FBQ2ZDLElBQUksR0FBRyxNQUFNUiwwRUFBc0IsQ0FBQztZQUNsQ2UsS0FBSyxFQUFFO2dCQUNMVixFQUFFLEVBQUVFLFdBQVcsQ0FBQ1MsTUFBTTthQUN2QjtTQUNGLENBQUMsQ0FBQztRQUNIUCxXQUFXLEdBQUcsTUFBTVQseUVBQXFCLENBQUM7WUFDeENlLEtBQUssRUFBRTtnQkFDTEksT0FBTyxFQUFFLENBQUNkLEVBQUU7Z0JBQ1pXLE1BQU0sRUFBRVIsSUFBSSxFQUFFSCxFQUFFO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFDRGUsT0FBTyxDQUFDQyxHQUFHLENBQUNaLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLE9BQU9MLEdBQUcsQ0FBQ08sSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxJQUFJO1FBQUVMLFdBQVc7UUFBRUMsSUFBSTtRQUFFQyxXQUFXO0tBQUUsQ0FBQyxDQUFDO0NBQ3BFO0FBRUQsaUVBQWVSLG1FQUFXLENBQUM7SUFBQyxLQUFLO0NBQUMsRUFBRUMsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXIvdHdlZXQvW2lkXS9pbmRleC50cz9hZDcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvc2VydmVyL2NsaWVudFwiO1xuaW1wb3J0IHdpdGhIYW5kbGVyLCB7XG4gIFJlc3BvbnNlVHlwZSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPlxuKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcbiAgbGV0IHNpbmdsZVR3ZWV0O1xuICBsZXQgdXNlcjtcbiAgbGV0IGV4aXN0ZWRMaWtlO1xuICBpZiAoIWlkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcblxuICBzaW5nbGVUd2VldCA9IGF3YWl0IGNsaWVudC50d2VldC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6ICtpZCxcbiAgICB9LFxuICB9KTtcbiAgaWYgKHNpbmdsZVR3ZWV0KSB7XG4gICAgdXNlciA9IGF3YWl0IGNsaWVudC51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHNpbmdsZVR3ZWV0LnVzZXJJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZXhpc3RlZExpa2UgPSBhd2FpdCBjbGllbnQubGlrZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdHdlZXRJZDogK2lkLFxuICAgICAgICB1c2VySWQ6IHVzZXI/LmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICBjb25zb2xlLmxvZyhleGlzdGVkTGlrZSk7XG4gIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHNpbmdsZVR3ZWV0LCB1c2VyLCBleGlzdGVkTGlrZSB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEhhbmRsZXIoW1wiR0VUXCJdLCBoYW5kbGVyKTtcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJ3aXRoSGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5Iiwic2luZ2xlVHdlZXQiLCJ1c2VyIiwiZXhpc3RlZExpa2UiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsInR3ZWV0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXNlcklkIiwibGlrZSIsImZpbmRGaXJzdCIsInR3ZWV0SWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/tweet/[id]/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/tweet/[id]/index.ts"));
module.exports = __webpack_exports__;

})();