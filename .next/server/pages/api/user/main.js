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
exports.id = "pages/api/user/main";
exports.ids = ["pages/api/user/main"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/client/utils.tsx":
/*!******************************!*\
  !*** ./lib/client/utils.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decodeURIToken\": () => (/* binding */ decodeURIToken),\n/* harmony export */   \"findTokenString\": () => (/* binding */ findTokenString),\n/* harmony export */   \"getName\": () => (/* binding */ getName),\n/* harmony export */   \"getPassword\": () => (/* binding */ getPassword),\n/* harmony export */   \"setTokenCookie\": () => (/* binding */ setTokenCookie)\n/* harmony export */ });\nasync function getName(url) {\n    const data = await (await fetch(url)).json();\n    const name = data.words[0];\n    return name;\n}\nfunction getPassword() {\n    const charset = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()\";\n    let password = \"\";\n    for(let i = 0; i < 24; i++){\n        let randomIndex = Math.floor(Math.random() * charset.length);\n        password += charset.charAt(randomIndex);\n    }\n    return password;\n}\nfunction setTokenCookie(token) {\n    const expires = new Date();\n    expires.setDate(expires.getDate() + 7);\n    document.cookie = `token=${encodeURIComponent(token)};expires=${expires.toUTCString()}; path=/`;\n}\nfunction findTokenString(cookie) {\n    const index = cookie.indexOf(\"token\");\n    let token;\n    if (index !== -1) {\n        token = cookie.substring(index + 6);\n    }\n    console.log(\"findTOKEN STRING\");\n    return token;\n}\nfunction decodeURIToken(encodeToken) {\n    const token = decodeURIComponent(encodeToken ? encodeToken : \"\");\n    return token;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50L3V0aWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBVyxFQUFtQjtJQUMxRCxNQUFNQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxFQUFFO0lBQzVDLE1BQU1DLElBQUksR0FBR0gsSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE9BQU9ELElBQUksQ0FBQztDQUNiO0FBQ00sU0FBU0UsV0FBVyxHQUFHO0lBQzVCLE1BQU1DLE9BQU8sR0FDWCwwRUFBMEU7SUFDNUUsSUFBSUMsUUFBUSxHQUFHLEVBQUU7SUFDakIsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsQ0FBRTtRQUMzQixJQUFJQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHTixPQUFPLENBQUNPLE1BQU0sQ0FBQztRQUM1RE4sUUFBUSxJQUFJRCxPQUFPLENBQUNRLE1BQU0sQ0FBQ0wsV0FBVyxDQUFDLENBQUM7S0FDekM7SUFDRCxPQUFPRixRQUFRLENBQUM7Q0FDakI7QUFDTSxTQUFTUSxjQUFjLENBQUNDLEtBQWEsRUFBRTtJQUM1QyxNQUFNQyxPQUFPLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQzFCRCxPQUFPLENBQUNFLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDRyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2Q0MsUUFBUSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUVDLGtCQUFrQixDQUMzQ1AsS0FBSyxDQUNOLENBQUMsU0FBUyxFQUFFQyxPQUFPLENBQUNPLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQzlDO0FBRU0sU0FBU0MsZUFBZSxDQUFDSCxNQUFjLEVBQUU7SUFDOUMsTUFBTUksS0FBSyxHQUFHSixNQUFNLENBQUNLLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDckMsSUFBSVgsS0FBSztJQUNULElBQUlVLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNoQlYsS0FBSyxHQUFHTSxNQUFNLENBQUNNLFNBQVMsQ0FBQ0YsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0RHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsT0FBT2QsS0FBSyxDQUFDO0NBQ2Q7QUFDTSxTQUFTZSxjQUFjLENBQUNDLFdBQStCLEVBQUU7SUFDOUQsTUFBTWhCLEtBQUssR0FBR2lCLGtCQUFrQixDQUFDRCxXQUFXLEdBQUdBLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDaEUsT0FBT2hCLEtBQUssQ0FBQztDQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9jbGllbnQvdXRpbHMudHN4P2JhYzAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5hbWUodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmpzb24oKTtcbiAgY29uc3QgbmFtZSA9IGRhdGEud29yZHNbMF07XG4gIHJldHVybiBuYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhc3N3b3JkKCkge1xuICBjb25zdCBjaGFyc2V0ID1cbiAgICBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5IUAjJCVeJiooKVwiO1xuICBsZXQgcGFzc3dvcmQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyc2V0Lmxlbmd0aCk7XG4gICAgcGFzc3dvcmQgKz0gY2hhcnNldC5jaGFyQXQocmFuZG9tSW5kZXgpO1xuICB9XG4gIHJldHVybiBwYXNzd29yZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbkNvb2tpZSh0b2tlbjogc3RyaW5nKSB7XG4gIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuICBleHBpcmVzLnNldERhdGUoZXhwaXJlcy5nZXREYXRlKCkgKyA3KTtcbiAgZG9jdW1lbnQuY29va2llID0gYHRva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIHRva2VuXG4gICl9O2V4cGlyZXM9JHtleHBpcmVzLnRvVVRDU3RyaW5nKCl9OyBwYXRoPS9gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRva2VuU3RyaW5nKGNvb2tpZTogc3RyaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gY29va2llLmluZGV4T2YoXCJ0b2tlblwiKTtcbiAgbGV0IHRva2VuO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdG9rZW4gPSBjb29raWUuc3Vic3RyaW5nKGluZGV4ICsgNik7XG4gIH1cbiAgY29uc29sZS5sb2coXCJmaW5kVE9LRU4gU1RSSU5HXCIpO1xuICByZXR1cm4gdG9rZW47XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVVJJVG9rZW4oZW5jb2RlVG9rZW46IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICBjb25zdCB0b2tlbiA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVUb2tlbiA/IGVuY29kZVRva2VuIDogXCJcIik7XG4gIHJldHVybiB0b2tlbjtcbn1cbiJdLCJuYW1lcyI6WyJnZXROYW1lIiwidXJsIiwiZGF0YSIsImZldGNoIiwianNvbiIsIm5hbWUiLCJ3b3JkcyIsImdldFBhc3N3b3JkIiwiY2hhcnNldCIsInBhc3N3b3JkIiwiaSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhckF0Iiwic2V0VG9rZW5Db29raWUiLCJ0b2tlbiIsImV4cGlyZXMiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvVVRDU3RyaW5nIiwiZmluZFRva2VuU3RyaW5nIiwiaW5kZXgiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwiY29uc29sZSIsImxvZyIsImRlY29kZVVSSVRva2VuIiwiZW5jb2RlVG9rZW4iLCJkZWNvZGVVUklDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/client/utils.tsx\n");

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

/***/ "(api)/./pages/api/user/main.tsx":
/*!*********************************!*\
  !*** ./pages/api/user/main.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_client_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/client/utils */ \"(api)/./lib/client/utils.tsx\");\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\n\nasync function handler(req, res) {\n    let user;\n    let token;\n    let tokenObj;\n    const cookie = req.body;\n    if (!cookie) return res.status(400).json({\n        success: false\n    });\n    const cookieToken = (0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_0__.findTokenString)(cookie);\n    token = (0,_lib_client_utils__WEBPACK_IMPORTED_MODULE_0__.decodeURIToken)(cookieToken);\n    console.log(cookieToken);\n    tokenObj = await _lib_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].token.findUnique({\n        where: {\n            token\n        }\n    });\n    if (tokenObj) {\n        user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                id: tokenObj?.userId\n            }\n        });\n    }\n    return res.json({\n        success: true,\n        token,\n        user,\n        id: user?.id,\n        name: user?.name\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\n    \"POST\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9tYWluLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzRFO0FBRTVCO0FBQzRCO0FBRTVFLGVBQWVJLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLElBQUlDLElBQUk7SUFDUixJQUFJQyxLQUFLO0lBQ1QsSUFBSUMsUUFBUTtJQUVaLE1BQU1DLE1BQU0sR0FBR0wsR0FBRyxDQUFDTSxJQUFJO0lBRXZCLElBQUksQ0FBQ0QsTUFBTSxFQUFFLE9BQU9KLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLEtBQUs7S0FBRSxDQUFDLENBQUM7SUFDN0QsTUFBTUMsV0FBVyxHQUFHZCxrRUFBZSxDQUFDUyxNQUFNLENBQUM7SUFDM0NGLEtBQUssR0FBR1IsaUVBQWMsQ0FBQ2UsV0FBVyxDQUFDLENBQUM7SUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUMsQ0FBQztJQUN6Qk4sUUFBUSxHQUFHLE1BQU1QLDJFQUF1QixDQUFDO1FBQ3ZDaUIsS0FBSyxFQUFFO1lBQUVYLEtBQUs7U0FBRTtLQUNqQixDQUFDLENBQUM7SUFDSCxJQUFJQyxRQUFRLEVBQUU7UUFDWkYsSUFBSSxHQUFHLE1BQU1MLDBFQUFzQixDQUFDO1lBQ2xDaUIsS0FBSyxFQUFFO2dCQUFFQyxFQUFFLEVBQUVYLFFBQVEsRUFBRVksTUFBTTthQUFFO1NBQ2hDLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBT2YsR0FBRyxDQUFDTyxJQUFJLENBQUM7UUFDZEMsT0FBTyxFQUFFLElBQUk7UUFDYk4sS0FBSztRQUNMRCxJQUFJO1FBQ0phLEVBQUUsRUFBRWIsSUFBSSxFQUFFYSxFQUFFO1FBQ1pFLElBQUksRUFBRWYsSUFBSSxFQUFFZSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztDQUNKO0FBRUQsaUVBQWVuQixtRUFBVyxDQUFDO0lBQUMsTUFBTTtDQUFDLEVBQUVDLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91c2VyL21haW4udHN4PzdiMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBkZWNvZGVVUklUb2tlbiwgZmluZFRva2VuU3RyaW5nIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9jbGllbnQvdXRpbHNcIjtcblxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL3NlcnZlci9jbGllbnRcIjtcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3NlcnZlci93aXRoSGFuZGxlclwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XG4pIHtcbiAgbGV0IHVzZXI7XG4gIGxldCB0b2tlbjtcbiAgbGV0IHRva2VuT2JqO1xuXG4gIGNvbnN0IGNvb2tpZSA9IHJlcS5ib2R5O1xuXG4gIGlmICghY29va2llKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgY29uc3QgY29va2llVG9rZW4gPSBmaW5kVG9rZW5TdHJpbmcoY29va2llKTtcbiAgdG9rZW4gPSBkZWNvZGVVUklUb2tlbihjb29raWVUb2tlbik7XG4gIGNvbnNvbGUubG9nKGNvb2tpZVRva2VuKTtcbiAgdG9rZW5PYmogPSBhd2FpdCBjbGllbnQudG9rZW4uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgdG9rZW4gfSxcbiAgfSk7XG4gIGlmICh0b2tlbk9iaikge1xuICAgIHVzZXIgPSBhd2FpdCBjbGllbnQudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiB0b2tlbk9iaj8udXNlcklkIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgdG9rZW4sXG4gICAgdXNlcixcbiAgICBpZDogdXNlcj8uaWQsXG4gICAgbmFtZTogdXNlcj8ubmFtZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKFtcIlBPU1RcIl0sIGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbImRlY29kZVVSSVRva2VuIiwiZmluZFRva2VuU3RyaW5nIiwiY2xpZW50Iiwid2l0aEhhbmRsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsInRva2VuIiwidG9rZW5PYmoiLCJjb29raWUiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJjb29raWVUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInVzZXJJZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/main.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/main.tsx"));
module.exports = __webpack_exports__;

})();