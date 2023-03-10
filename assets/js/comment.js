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

eval("const commentForm = document.querySelector(\"#commentForm\");\nconst commentArea = commentForm.querySelector(\"textarea\");\nconst commentBtn = commentForm.querySelector(\"button\");\nconst videoContainer = document.querySelector(\"#videoContainer\");\nconst handlePostComment = event => {\n  event.preventDefault();\n  const text = commentArea.value;\n  const id = videoContainer.dataset.id;\n  console.log(id);\n  fetch(`/videos/${id}/see`, {\n    method: \"POST\"\n  });\n};\ncommentForm.addEventListener(\"submit\", handlePostComment);\n\n//# sourceURL=webpack://wetube_final/./src/frontend/js/comment.js?");

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