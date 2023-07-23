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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { id: tweetId  } = req.query;\n    let newLike;\n    let isLike;\n    if (!tweetId) return res.status(400).json({\n        success: false\n    });\n    const likeTweet = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.findUnique({\n        where: {\n            id: +tweetId\n        }\n    });\n    const likeUser = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            id: likeTweet?.userId\n        }\n    });\n    const existedLike = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].like.findFirst({\n        where: {\n            tweetId: +tweetId,\n            userId: likeUser?.id\n        }\n    });\n    if (existedLike) {\n        await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].like[\"delete\"]({\n            where: {\n                id: existedLike.id\n            }\n        });\n    } else {\n        newLike = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].like.create({\n            data: {\n                user: {\n                    connect: {\n                        id: likeUser?.id\n                    }\n                },\n                tweet: {\n                    connect: {\n                        id: +tweetId\n                    }\n                }\n            }\n        });\n    }\n    if (newLike) isLike = true;\n    else {\n        isLike = false;\n    }\n    return res.json({\n        success: true,\n        isLike\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"GET\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci90d2VldC9baWRdL2xpa2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRXNEO0FBR1A7QUFFL0MsZUFBZUUsT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFDakMsSUFBSUMsT0FBTztJQUNYLElBQUlDLE1BQU07SUFDVixJQUFJLENBQUNILE9BQU8sRUFBRSxPQUFPRixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO0tBQUUsQ0FBQyxDQUFDO0lBQzlELE1BQU1DLFNBQVMsR0FBRyxNQUFNYiwyRUFBdUIsQ0FBQztRQUM5Q2dCLEtBQUssRUFBRTtZQUNMWCxFQUFFLEVBQUUsQ0FBQ0MsT0FBTztTQUNiO0tBQ0YsQ0FBQztJQUNGLE1BQU1XLFFBQVEsR0FBRyxNQUFNakIsMEVBQXNCLENBQUM7UUFDNUNnQixLQUFLLEVBQUU7WUFDTFgsRUFBRSxFQUFFUSxTQUFTLEVBQUVNLE1BQU07U0FDdEI7S0FDRixDQUFDO0lBQ0YsTUFBTUMsV0FBVyxHQUFHLE1BQU1wQix5RUFBcUIsQ0FBQztRQUM5Q2dCLEtBQUssRUFBRTtZQUNMVixPQUFPLEVBQUUsQ0FBQ0EsT0FBTztZQUNqQmEsTUFBTSxFQUFFRixRQUFRLEVBQUVaLEVBQUU7U0FDckI7S0FDRixDQUFDO0lBQ0YsSUFBSWUsV0FBVyxFQUFFO1FBQ2YsTUFBTXBCLHlFQUFrQixDQUFDO1lBQ3ZCZ0IsS0FBSyxFQUFFO2dCQUNMWCxFQUFFLEVBQUVlLFdBQVcsQ0FBQ2YsRUFBRTthQUNuQjtTQUNGLENBQUMsQ0FBQztLQUNKLE1BQU07UUFDTEcsT0FBTyxHQUFHLE1BQU1SLHNFQUFrQixDQUFDO1lBQ2pDeUIsSUFBSSxFQUFFO2dCQUNKUCxJQUFJLEVBQUU7b0JBQ0pRLE9BQU8sRUFBRTt3QkFDUHJCLEVBQUUsRUFBRVksUUFBUSxFQUFFWixFQUFFO3FCQUNqQjtpQkFDRjtnQkFDRFMsS0FBSyxFQUFFO29CQUNMWSxPQUFPLEVBQUU7d0JBQUVyQixFQUFFLEVBQUUsQ0FBQ0MsT0FBTztxQkFBRTtpQkFDMUI7YUFDRjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSUUsT0FBTyxFQUFFQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0hBLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7SUFFRCxPQUFPTCxHQUFHLENBQUNPLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUsSUFBSTtRQUFFSCxNQUFNO0tBQUUsQ0FBQyxDQUFDO0NBQzVDO0FBRUQsaUVBQWVSLG1FQUFXLENBQUM7SUFBQyxLQUFLO0NBQUMsRUFBRUMsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXIvdHdlZXQvW2lkXS9saWtlLnRzPzcyY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2xpYi9zZXJ2ZXIvY2xpZW50XCI7XG5pbXBvcnQgd2l0aEhhbmRsZXIsIHtcbiAgUmVzcG9uc2VUeXBlLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbGliL3NlcnZlci93aXRoSGFuZGxlclwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XG4pIHtcbiAgY29uc3QgeyBpZDogdHdlZXRJZCB9ID0gcmVxLnF1ZXJ5O1xuICBsZXQgbmV3TGlrZTtcbiAgbGV0IGlzTGlrZTtcbiAgaWYgKCF0d2VldElkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgY29uc3QgbGlrZVR3ZWV0ID0gYXdhaXQgY2xpZW50LnR3ZWV0LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogK3R3ZWV0SWQsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGxpa2VVc2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBsaWtlVHdlZXQ/LnVzZXJJZCxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgZXhpc3RlZExpa2UgPSBhd2FpdCBjbGllbnQubGlrZS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7XG4gICAgICB0d2VldElkOiArdHdlZXRJZCxcbiAgICAgIHVzZXJJZDogbGlrZVVzZXI/LmlkLFxuICAgIH0sXG4gIH0pO1xuICBpZiAoZXhpc3RlZExpa2UpIHtcbiAgICBhd2FpdCBjbGllbnQubGlrZS5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGV4aXN0ZWRMaWtlLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBuZXdMaWtlID0gYXdhaXQgY2xpZW50Lmxpa2UuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICAgIGlkOiBsaWtlVXNlcj8uaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdHdlZXQ6IHtcbiAgICAgICAgICBjb25uZWN0OiB7IGlkOiArdHdlZXRJZCB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICBpZiAobmV3TGlrZSkgaXNMaWtlID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgaXNMaWtlID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBpc0xpa2UgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKFtcIkdFVFwiXSwgaGFuZGxlcik7XG4iXSwibmFtZXMiOlsiY2xpZW50Iiwid2l0aEhhbmRsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJ0d2VldElkIiwicXVlcnkiLCJuZXdMaWtlIiwiaXNMaWtlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJsaWtlVHdlZXQiLCJ0d2VldCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImxpa2VVc2VyIiwidXNlciIsInVzZXJJZCIsImV4aXN0ZWRMaWtlIiwibGlrZSIsImZpbmRGaXJzdCIsImRlbGV0ZSIsImNyZWF0ZSIsImRhdGEiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/tweet/[id]/like.ts\n");

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