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

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.querySelector(\"#play\");\nconst muteBtn = document.querySelector(\"#mute\");\nconst currentTime = document.querySelector(\"#currentTime\");\nconst wholeTime = document.querySelector(\"#wholeTime\");\nconst volumeRange = document.querySelector(\"#volume\");\nconst timeLine = document.querySelector(\"#timeLine\");\nconst fullScreenBtn = document.querySelector(\"#fullScreen\");\nconst videoContainer = document.querySelector(\"#videoContainer\");\nconst videoControls = document.querySelector(\"#videoControls\");\nconst playBtnIcon = playBtn.querySelector(\"i\");\nconst muteBtnIcon = muteBtn.querySelector(\"i\");\nconst fullScreenIcon = fullScreenBtn.querySelector(\"i\");\nconst test = document.querySelector(\"#test\");\nlet videoVolume = 0.5;\nlet startTimeoutId = null;\nlet finishTimeoutId = null;\nconst handleKeyDown = event => {\n  console.log(event);\n};\nconst handleVideoPause = event => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\nconst handlePlayBtn = event => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\nconst handleMuteBtn = event => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  muteBtnIcon.classList = video.muted ? \"fas fa-volume-mute\" : \"fas fa-volume-up\";\n  volumeRange.value = video.muted ? \"0\" : videoVolume;\n};\nconst handleVolumeRange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  if (video.muted) {\n    video.muted = false;\n    muteBtn.innerText = \"Mute\";\n  }\n  muteBtn.innerText = volumeRange.value == \"0\" ? \"unMute\" : \"Mute\";\n  video.volume = value;\n  videoVolume = video.volume;\n};\nconst formatTime = time => new Date(time * 1000).toISOString().substring(14, 19);\nconst handleLoadedmeta = () => {\n  const videoDuration = Math.floor(video.duration);\n  wholeTime.innerText = formatTime(videoDuration);\n  timeLine.max = videoDuration;\n};\nconst handleTimeUpdate = event => {\n  const videoCurrentTime = Math.floor(video.currentTime);\n  currentTime.innerText = formatTime(videoCurrentTime);\n  timeLine.value = videoCurrentTime;\n};\nconst handleTimeLine = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  video.currentTime = value;\n};\nconst handleFullScreen = () => {\n  const validation = document.fullscreenElement;\n  if (validation) {\n    document.exitFullscreen();\n    fullScreenIcon.classList = \"fas fa-expand\";\n  } else {\n    videoContainer.requestFullscreen();\n    fullScreenIcon.classList = \"fas fa-compress\";\n  }\n};\nconst removeControls = () => videoControls.classList.remove(\"showControls\");\n// const addControls = () => videoControls.classList.add(\"showingControls\")\nconst handleMouseMove = () => {\n  if (startTimeoutId) {\n    clearTimeout(startTimeoutId);\n    startTimeoutId = null;\n    //timemoutid를 초기화\n  }\n\n  if (finishTimeoutId) {\n    clearTimeout(finishTimeoutId);\n  }\n  finishTimeoutId = setTimeout(removeControls, 2000);\n  videoControls.classList.add(\"showControls\");\n};\nconst handleMouseLeave = () => {\n  startTimeoutId = setTimeout(removeControls, 2000);\n};\n// const handleTimeUpdate = () => {\n//   const data = video.currentTime;\n//   const time = new Date(data * 1000);\n//   const hour = (new Date(time).getHours() - 9).toString().padStart(2, \"0\");\n//   const minute = new Date(time).getMinutes().toString().padStart(2, \"0\");\n//   const second = new Date(time).getSeconds().toString().padStart(2, \"0\");\n//   currentTime.innerText = `${hour} : ${minute} : ${second}`;\n// };\n\nplayBtn.addEventListener(\"click\", handlePlayBtn);\nmuteBtn.addEventListener(\"click\", handleMuteBtn);\nvolumeRange.addEventListener(\"input\", handleVolumeRange);\nvideo.addEventListener(\"loadeddata\", handleLoadedmeta);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\ntimeLine.addEventListener(\"input\", handleTimeLine);\nfullScreenBtn.addEventListener(\"click\", handleFullScreen);\nvideoContainer.addEventListener(\"mousemove\", handleMouseMove);\nvideoContainer.addEventListener(\"mouseleave\", handleMouseLeave);\nvideo.addEventListener(\"click\", handleVideoPause);\ntest.addEventListener(\"keypress\", handleKeyDown);\n\n//# sourceURL=webpack://wetube_final/./src/frontend/js/videoPlayer.js?");

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