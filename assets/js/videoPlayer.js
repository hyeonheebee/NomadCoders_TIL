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

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.querySelector(\"#play\");\nconst muteBtn = document.querySelector(\"#mute\");\nconst currentTime = document.querySelector(\"#currentTime\");\nconst wholeTime = document.querySelector(\"#wholeTime\");\nconst volumeRange = document.querySelector(\"#volume\");\nlet videoVolume = 0.5;\nconst handlePlayBtn = event => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtn.innerText = video.paused ? \"Play\" : \"Paused\";\n};\nconst handleMuteBtn = event => {\n  if (!video.muted) {\n    muteBtn.innerText = \"Mute\";\n    video.muted = true;\n  } else {\n    video.muted = false;\n    muteBtn.innerText = \"unMute\";\n  }\n  volumeRange.value = video.muted ? \"0\" : videoVolume;\n};\nconst handleVolumeRange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  if (video.muted) {\n    video.muted = false;\n  }\n  video.volume = value;\n  videoVolume = video.volume;\n};\nconst handleLoadedmeta = () => {\n  currentTime.innerText = video.currentTime;\n  wholeTime.innerText = Math.floor(video.duration);\n};\nplayBtn.addEventListener(\"click\", handlePlayBtn);\nmuteBtn.addEventListener(\"click\", handleMuteBtn);\nvolumeRange.addEventListener(\"input\", handleVolumeRange);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedmeta);\n\n//# sourceURL=webpack://wetube_final/./src/frontend/js/videoPlayer.js?");

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