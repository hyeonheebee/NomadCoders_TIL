/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/js/comment.js":
/*!************************************!*\
  !*** ./src/frontend/js/comment.js ***!
  \************************************/
/***/ (() => {

eval("const commentForm = document.querySelector(\"#commentForm\");\nconst videoContainer = document.querySelector(\"#videoContainer\");\nconst commentArea = commentForm.querySelector(\"textarea\");\nconst commentBtn = commentForm.querySelector(\"button\");\nconst handlePostComment = event => {\n  const text = commentArea.value;\n  event.preventDefault();\n  const id = videoContainer.dataset.id;\n  if (!text) {\n    return;\n  }\n  fetch(`/api/videos/${id}/comment`, {\n    method: \"POST\",\n    body: JSON.stringify({\n      text\n    }),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  });\n  commentArea.value = \"\";\n};\ncommentForm.addEventListener(\"submit\", handlePostComment);\n\n//# sourceURL=webpack://wetube_final/./src/frontend/js/comment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/frontend/js/comment.js"]();
/******/ 	
/******/ })()
;