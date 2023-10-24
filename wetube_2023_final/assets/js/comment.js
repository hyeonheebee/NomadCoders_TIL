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

eval("// const { container } = require(\"webpack\");\n\nconst commentForm = document.querySelector(\"#commentForm\");\nconst videoContainer = document.querySelector(\"#videoContainer\");\nconst commentSection = document.querySelector(\".video__comments\");\nconst handlePostComment = async event => {\n  const commentArea = commentForm.querySelector(\"textarea\");\n  const text = commentArea.value;\n  event.preventDefault();\n  const id = videoContainer.dataset.id;\n  if (!text) {\n    return;\n  }\n  const response = await fetch(`/api/videos/${id}/comment`, {\n    method: \"POST\",\n    body: JSON.stringify({\n      text\n    }),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  });\n  commentArea.value = \"\";\n  if (response.status === 201) {\n    const {\n      id: commentId,\n      owner\n    } = await response.json();\n    postRealtimeComment(text, commentId, owner);\n  }\n};\nif (commentForm) {\n  commentForm.addEventListener(\"submit\", handlePostComment);\n}\nconst postRealtimeComment = (text, commentId, owner) => {\n  const commentsContainer = document.querySelector(\".video__comments\");\n  const commentBubble = document.createElement(\"li\");\n  const commentBubbleIcon = document.createElement(\"i\");\n  const commentBubbleSpan = document.createElement(\"span\");\n  const commentBubbleDelete = document.createElement(\"button\");\n  commentBubble.className = \"video__comment\";\n  commentBubbleIcon.className = \"fas fa-comment\";\n  commentBubbleDelete.className = \"comment__delete\";\n  commentBubbleSpan.innerText = ` ${text}`;\n  commentBubbleDelete.innerText = \" ❌\";\n  commentBubble.appendChild(commentBubbleIcon);\n  commentBubble.appendChild(commentBubbleSpan);\n  commentBubble.appendChild(commentBubbleDelete);\n  commentsContainer.prepend(commentBubble);\n  commentBubble.dataset.id = commentId;\n  commentBubbleIcon.dataset.id = owner;\n};\nconst handleDeleteComment = async event => {\n  if (event.target.localName === \"button\") {\n    const commentBubble = event.target.parentElement;\n    const commentBubbleIcon = commentBubble.querySelector(\"i\");\n    const commentId = commentBubble.dataset.id;\n    await fetch(`/api/comments/${commentId}`, {\n      method: \"DELETE\"\n    });\n    const commentOwner = commentBubbleIcon.dataset.id;\n    const commentUser = commentForm.dataset.user;\n    if (commentUser === commentOwner) {\n      commentBubble.remove();\n    }\n  }\n};\ncommentSection.addEventListener(\"click\", handleDeleteComment);\n\n//# sourceURL=webpack://wetube_final/./src/frontend/js/comment.js?");

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