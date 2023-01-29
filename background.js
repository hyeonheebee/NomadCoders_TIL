const arrBgImage = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = arrBgImage[Math.floor(Math.random() * arrBgImage.length)];
console.log(chosenImage);
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.classList.add("background-img");

const arrpicImage = [
  " (1).png",
  " (3).png",
  " (4).png",
  " (5).png",
  " (6).png",
  " (7).png",
  " (8).png",
  " (9).png",
];
const chosenPicImage =
  arrpicImage[Math.floor(Math.random() * arrpicImage.length)];
const picSection = document.querySelector(".pic-section");
const picImage = document.createElement("img");
// const picFig = document.createElement("figcaption");
picImage.src = `pic/${chosenPicImage}`;
// picImage.alt = `${chosenPicImage}Img`;
// picFig.innerText = `${picImage.alt}`;
picSection.appendChild(picImage);
// picSection.appendChild(picFig);
//시간에 따라 화면밝기를 조절하는 기능 if절로 구현
