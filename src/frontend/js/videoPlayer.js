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
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "unMute" : "Mute";
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
  muteBtn.innerText = volumeRange.value == "0" ? "unMute" : "Mute";
  video.volume = value;
  videoVolume = video.volume;
};

const handleLoadedmeta = () => {
  currentTime.innerText = video.currentTime;
  wholeTime.innerText = Math.floor(video.duration);
};

setInterval(handleLoadedmeta);

playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volumeRange.addEventListener("input", handleVolumeRange);
video.addEventListener("loadedmetadata", handleLoadedmeta);
