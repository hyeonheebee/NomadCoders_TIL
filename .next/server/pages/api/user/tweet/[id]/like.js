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
exports.id = "pages/api/user/tweet/[id]/like";
exports.ids = ["pages/api/user/tweet/[id]/like"];
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

/***/ "(api)/./pages/api/user/tweet/[id]/like.ts":
/*!*******************************************!*\
  !*** ./pages/api/user/tweet/[id]/like.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { id: tweetId  } = req.query;\n    let newLike;\n    if (!tweetId) return res.status(400).json({\n        success: false\n    });\n    const likeTweet = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.findUnique({\n        where: {\n            id: +tweetId\n        }\n    });\n    const likeUser = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            id: likeTweet?.userId\n        }\n    });\n    const existedLike = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].like.findFirst({\n        where: {\n            tweetId: +tweetId,\n            userId: likeUser?.id\n        }\n    });\n    if (existedLike) {\n        await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].like[\"delete\"]({\n            where: {\n                id: existedLike.id\n            }\n        });\n    } else {\n        newLike = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].like.create({\n            data: {\n                user: {\n                    connect: {\n                        id: likeUser?.id\n                    }\n                },\n                tweet: {\n                    connect: {\n                        id: +tweetId\n                    }\n                }\n            }\n        });\n    }\n    return res.json({\n        success: true,\n        likeTweet,\n        newLike\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"GET\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci90d2VldC9baWRdL2xpa2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRXNEO0FBR1A7QUFFL0MsZUFBZUUsT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFDakMsSUFBSUMsT0FBTztJQUNYLElBQUksQ0FBQ0YsT0FBTyxFQUFFLE9BQU9GLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7S0FBRSxDQUFDLENBQUM7SUFDOUQsTUFBTUMsU0FBUyxHQUFHLE1BQU1aLDJFQUF1QixDQUFDO1FBQzlDZSxLQUFLLEVBQUU7WUFDTFYsRUFBRSxFQUFFLENBQUNDLE9BQU87U0FDYjtLQUNGLENBQUM7SUFDRixNQUFNVSxRQUFRLEdBQUcsTUFBTWhCLDBFQUFzQixDQUFDO1FBQzVDZSxLQUFLLEVBQUU7WUFDTFYsRUFBRSxFQUFFTyxTQUFTLEVBQUVNLE1BQU07U0FDdEI7S0FDRixDQUFDO0lBQ0YsTUFBTUMsV0FBVyxHQUFHLE1BQU1uQix5RUFBcUIsQ0FBQztRQUM5Q2UsS0FBSyxFQUFFO1lBQ0xULE9BQU8sRUFBRSxDQUFDQSxPQUFPO1lBQ2pCWSxNQUFNLEVBQUVGLFFBQVEsRUFBRVgsRUFBRTtTQUNyQjtLQUNGLENBQUM7SUFDRixJQUFJYyxXQUFXLEVBQUU7UUFDZixNQUFNbkIseUVBQWtCLENBQUM7WUFDdkJlLEtBQUssRUFBRTtnQkFDTFYsRUFBRSxFQUFFYyxXQUFXLENBQUNkLEVBQUU7YUFDbkI7U0FDRixDQUFDLENBQUM7S0FDSixNQUFNO1FBQ0xHLE9BQU8sR0FBRyxNQUFNUixzRUFBa0IsQ0FBQztZQUNqQ3dCLElBQUksRUFBRTtnQkFDSlAsSUFBSSxFQUFFO29CQUNKUSxPQUFPLEVBQUU7d0JBQ1BwQixFQUFFLEVBQUVXLFFBQVEsRUFBRVgsRUFBRTtxQkFDakI7aUJBQ0Y7Z0JBQ0RRLEtBQUssRUFBRTtvQkFDTFksT0FBTyxFQUFFO3dCQUFFcEIsRUFBRSxFQUFFLENBQUNDLE9BQU87cUJBQUU7aUJBQzFCO2FBQ0Y7U0FDRixDQUFDLENBQUM7S0FDSjtJQUVELE9BQU9GLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxJQUFJO1FBQUVDLFNBQVM7UUFBRUosT0FBTztLQUFFLENBQUMsQ0FBQztDQUN4RDtBQUVELGlFQUFlUCxtRUFBVyxDQUFDO0lBQUMsS0FBSztDQUFDLEVBQUVDLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91c2VyL3R3ZWV0L1tpZF0vbGlrZS50cz83MmNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvc2VydmVyL2NsaWVudFwiO1xuaW1wb3J0IHdpdGhIYW5kbGVyLCB7XG4gIFJlc3BvbnNlVHlwZSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPlxuKSB7XG4gIGNvbnN0IHsgaWQ6IHR3ZWV0SWQgfSA9IHJlcS5xdWVyeTtcbiAgbGV0IG5ld0xpa2U7XG4gIGlmICghdHdlZXRJZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gIGNvbnN0IGxpa2VUd2VldCA9IGF3YWl0IGNsaWVudC50d2VldC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6ICt0d2VldElkLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBsaWtlVXNlciA9IGF3YWl0IGNsaWVudC51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogbGlrZVR3ZWV0Py51c2VySWQsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGV4aXN0ZWRMaWtlID0gYXdhaXQgY2xpZW50Lmxpa2UuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdHdlZXRJZDogK3R3ZWV0SWQsXG4gICAgICB1c2VySWQ6IGxpa2VVc2VyPy5pZCxcbiAgICB9LFxuICB9KTtcbiAgaWYgKGV4aXN0ZWRMaWtlKSB7XG4gICAgYXdhaXQgY2xpZW50Lmxpa2UuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBleGlzdGVkTGlrZS5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3TGlrZSA9IGF3YWl0IGNsaWVudC5saWtlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgICBpZDogbGlrZVVzZXI/LmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHR3ZWV0OiB7XG4gICAgICAgICAgY29ubmVjdDogeyBpZDogK3R3ZWV0SWQgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBsaWtlVHdlZXQsIG5ld0xpa2UgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKFtcIkdFVFwiXSwgaGFuZGxlcik7XG4iXSwibmFtZXMiOlsiY2xpZW50Iiwid2l0aEhhbmRsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJ0d2VldElkIiwicXVlcnkiLCJuZXdMaWtlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJsaWtlVHdlZXQiLCJ0d2VldCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImxpa2VVc2VyIiwidXNlciIsInVzZXJJZCIsImV4aXN0ZWRMaWtlIiwibGlrZSIsImZpbmRGaXJzdCIsImRlbGV0ZSIsImNyZWF0ZSIsImRhdGEiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/tweet/[id]/like.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/tweet/[id]/like.ts"));
module.exports = __webpack_exports__;

})();