const video = document.querySelector("video");
const playBtn = document.querySelector("#play");
const muteBtn = document.querySelector("#mute");
const time = document.querySelector("#time");
const volumeRange = document.querySelector("#volume");
let volumeValue = 0.5;
video.volume = volumeValue;
const handlePlayBtn = (event) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Paused";
};
const handleMuteBtn = (e) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "unMute" : "Mute";
  volumeRange.value = video.muted ? "0" : volumeValue;
};
const handleVolumeRange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = value;
};
playBtn.addEventListener("click", handlePlayBtn);
muteBtn.addEventListener("click", handleMuteBtn);
volumeRange.addEventListener("input", handleVolumeRange);
