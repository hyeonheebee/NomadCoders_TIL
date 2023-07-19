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
exports.id = "pages/api/user/tweet";
exports.ids = ["pages/api/user/tweet"];
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

/***/ "(api)/./pages/api/user/tweet.tsx":
/*!**********************************!*\
  !*** ./pages/api/user/tweet.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const tweets = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.findMany({});\n        return res.json({\n            success: true,\n            tweets\n        });\n    }\n    if (req.method === \"POST\") {\n        const { data: { text  } , user: { id  } ,  } = req.body;\n        let userTweet;\n        if (!id || !text) return res.status(400).json({\n            success: false\n        });\n        const user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                id\n            }\n        });\n        userTweet = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.create({\n            data: {\n                tweet: text,\n                user: {\n                    connect: {\n                        id: user?.id\n                    }\n                }\n            }\n        });\n        return res.json({\n            success: true,\n            userTweet\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"GET\",\n    \"POST\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci90d2VldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWdEO0FBQzRCO0FBRTVFLGVBQWVFLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixNQUFNQyxNQUFNLEdBQUcsTUFBTU4seUVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQzlDLE9BQU9JLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxJQUFJO1lBQUVKLE1BQU07U0FBRSxDQUFDLENBQUM7S0FDNUM7SUFDRCxJQUFJSCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTSxFQUNKTSxJQUFJLEVBQUUsRUFBRUMsSUFBSSxHQUFFLEdBQ2RDLElBQUksRUFBRSxFQUFFQyxFQUFFLEdBQUUsS0FDYixHQUFHWCxHQUFHLENBQUNZLElBQUk7UUFDWixJQUFJQyxTQUFTO1FBQ2IsSUFBSSxDQUFDRixFQUFFLElBQUksQ0FBQ0YsSUFBSSxFQUFFLE9BQU9SLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDUixJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLEtBQUs7U0FBRSxDQUFDLENBQUM7UUFDbEUsTUFBTUcsSUFBSSxHQUFHLE1BQU1iLDBFQUFzQixDQUFDO1lBQ3hDbUIsS0FBSyxFQUFFO2dCQUNMTCxFQUFFO2FBQ0g7U0FDRixDQUFDO1FBQ0ZFLFNBQVMsR0FBRyxNQUFNaEIsdUVBQW1CLENBQUM7WUFDcENXLElBQUksRUFBRTtnQkFDSkosS0FBSyxFQUFFSyxJQUFJO2dCQUNYQyxJQUFJLEVBQUU7b0JBQ0pRLE9BQU8sRUFBRTt3QkFDUFAsRUFBRSxFQUFFRCxJQUFJLEVBQUVDLEVBQUU7cUJBQ2I7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILE9BQU9WLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxJQUFJO1lBQUVNLFNBQVM7U0FBRSxDQUFDLENBQUM7S0FDL0M7Q0FDRjtBQUVELGlFQUFlZixtRUFBVyxDQUFDO0lBQUMsS0FBSztJQUFFLE1BQU07Q0FBQyxFQUFFQyxPQUFPLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdXNlci90d2VldC50c3g/MTlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL3NlcnZlci9jbGllbnRcIjtcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3NlcnZlci93aXRoSGFuZGxlclwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCB0d2VldHMgPSBhd2FpdCBjbGllbnQudHdlZXQuZmluZE1hbnkoe30pO1xuICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHR3ZWV0cyB9KTtcbiAgfVxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IHRleHQgfSxcbiAgICAgIHVzZXI6IHsgaWQgfSxcbiAgICB9ID0gcmVxLmJvZHk7XG4gICAgbGV0IHVzZXJUd2VldDtcbiAgICBpZiAoIWlkIHx8ICF0ZXh0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdXNlclR3ZWV0ID0gYXdhaXQgY2xpZW50LnR3ZWV0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR3ZWV0OiB0ZXh0LFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgICAgaWQ6IHVzZXI/LmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdXNlclR3ZWV0IH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKFtcIkdFVFwiLCBcIlBPU1RcIl0sIGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbImNsaWVudCIsIndpdGhIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInR3ZWV0cyIsInR3ZWV0IiwiZmluZE1hbnkiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJ0ZXh0IiwidXNlciIsImlkIiwiYm9keSIsInVzZXJUd2VldCIsInN0YXR1cyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/tweet.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/tweet.tsx"));
module.exports = __webpack_exports__;

})();