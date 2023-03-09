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

/***/ "./src/frontend/js/videoPlayer.js":
/*!****************************************!*\
  !*** ./src/frontend/js/videoPlayer.js ***!
  \****************************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.querySelector(\"#play\");\nconst muteBtn = document.querySelector(\"#mute\");\nconst time = document.querySelector(\"#time\");\nconst volumeRange = document.querySelector(\"#volume\");\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nconst handlePlayBtn = event => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtn.innerText = video.paused ? \"Play\" : \"Paused\";\n};\nconst handleMuteBtn = e => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  muteBtn.innerText = video.muted ? \"unMute\" : \"Mute\";\n  volumeRange.value = video.muted ? \"0\" : volumeValue;\n};\nconst handleVolumeRange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  if (video.muted) {\n    video.muted = false;\n    muteBtn.innerText = \"Mute\";\n  }\n  volumeValue = value;\n  video.volume = value;\n};\nplayBtn.addEventListener(\"click\", handlePlayBtn);\nmuteBtn.addEventListener(\"click\", handleMuteBtn);\nvolumeRange.addEventListener(\"input\", handleVolumeRange);\n\n//# sourceURL=webpack://wetube_final/./src/frontend/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/frontend/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;