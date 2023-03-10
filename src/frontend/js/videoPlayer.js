const video = document.querySelector("video");
const playBtn = document.querySelector("#play");
const muteBtn = document.querySelector("#mute");
const currentTime = document.querySelector("#currentTime");
const wholeTime = document.querySelector("#wholeTime");
const volumeRange = document.querySelector("#volume");
const timeLine = document.querySelector("#timeLine");
const fullScreenBtn = document.querySelector("#fullScreen");
const videoContainer = document.querySelector("#videoContainer");
const videoControls = document.querySelector("#videoControls");
const playBtnIcon = playBtn.querySelector("i");
const muteBtnIcon = muteBtn.querySelector("i");
const fullScreenIcon = fullScreenBtn.querySelector("i");
const test = document.querySelector("#test");
let videoVolume = 0.5;
let startTimeoutId = null;
let finishTimeoutId = null;

const handleKeyDown = (event) => {
  if (event.code === "Space") {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
  } else {
    return;
  }
};

const handleVideoPause = (event) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};
const handlePlayBtn = (event) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};

const handleMuteBtn = (event) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtnIcon.classList = video.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
  volumeRange.value = video.muted ? "0" : videoVolume;
};
const handleVolumeRange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  muteBtnIcon.classList =
    volumeRange.value == "0" ? "fas fa-volume-mute" : "fas fa-volume-up";
  video.volume = value;
  videoVolume = video.volume;
};

const formatTime = (time) =>
  new Date(time * 1000).toISOString().substring(14, 19);
const handleLoadedmeta = () => {
  const videoDuration = Math.floor(video.duration);
  wholeTime.innerText = formatTime(videoDuration);
  timeLine.max = videoDuration;
};
const handleTimeUpdate = (event) => {
  const videoCurrentTime = Math.floor(video.currentTime);
  currentTime.innerText = formatTime(videoCurrentTime);
  timeLine.value = videoCurrentTime;
};

const handleTimeLine = (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
};
const handleFullScreen = () => {
  const validation = document.fullscreenElement;
  if (validation) {
    document.exitFullscreen();
    fullScreenIcon.classList = "fas fa-expand";
  } else {
    videoContainer.requestFullscreen();
    fullScreenIcon.classList = "fas fa-compress";
  }
};
const removeControls = () => videoControls.classList.remove("showControls");
// const addControls = () => videoControls.classList.add("showingControls")
const handleMouseMove = () => {
  if (startTimeoutId) {
    clearTimeout(startTimeoutId);
    startTimeoutId = null;
    //timemoutid를 초기화
  }
  if (finishTimeoutId) {
    clearTimeout(finishTimeoutId);
  }
  finishTimeoutId = setTimeout(removeControls, 2000);
  videoControls.classList.add("showControls");
};
const handleMouseLeave = () => {
  startTimeoutId = setTimeout(removeControls, 2000);
};
const handlePostView = () => {
  const { id } = videoContainer.dataset;
  fetch(`/api/videos/${id}/view`, {
    method: "POST",
  });
  playBtnIcon.classList = "fas fa-play";
};
// const handleTimeUpdate = () => {
//   const data = video.currentTime;
//   const time = new Date(data * 1000);
//   const hour = (new Date(time).getHours() - 9).toString().padStart(2, "0");
//   const minute = new Date(time).getMinutes().toString().padStart(2, "0");
//   const second = new Date(time).getSeconds().toString().padStart(2, "0");
//   currentTime.innerText = `${hour} : ${minute} : ${second}`;
// };

playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volumeRange.addEventListener("input", handleVolumeRange);
video.addEventListener("loadeddata", handleLoadedmeta);
video.addEventListener("timeupdate", handleTimeUpdate);
timeLine.addEventListener("input", handleTimeLine);
fullScreenBtn.addEventListener("click", handleFullScreen);
videoContainer.addEventListener("mousemove", handleMouseMove);
videoContainer.addEventListener("mouseleave", handleMouseLeave);
video.addEventListener("click", handleVideoPause);
document.addEventListener("keydown", handleKeyDown);
video.addEventListener("ended", handlePostView);
