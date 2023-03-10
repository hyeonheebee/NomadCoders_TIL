const video = document.querySelector("video");
const playBtn = document.querySelector("#play");
const muteBtn = document.querySelector("#mute");
const currentTime = document.querySelector("#currentTime");
const wholeTime = document.querySelector("#wholeTime");
const volumeRange = document.querySelector("#volume");
let videoVolume = 0.5;

const handlePlayBtn = (event) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Paused";
};

const handleMuteBtn = (event) => {
  if (!video.muted) {
    muteBtn.innerText = "Mute";
    video.muted = true;
  } else {
    video.muted = false;
    muteBtn.innerText = "unMute";
  }
  volumeRange.value = video.muted ? "0" : videoVolume;
};
const handleVolumeRange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
  }
  video.volume = value;
  videoVolume = video.volume;
};

const handleLoadedmeta = () => {
  currentTime.innerText = video.currentTime;
  wholeTime.innerText = Math.floor(video.duration);
};

playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volumeRange.addEventListener("input", handleVolumeRange);
video.addEventListener("loadedmetadata", handleLoadedmeta);
