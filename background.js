const arrBgImage = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = arrBgImage[Math.floor(Math.random() * arrBgImage.length)];
console.log(chosenImage);
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.classList.add("background-img");
