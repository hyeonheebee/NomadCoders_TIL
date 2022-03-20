const quotes = [
  {
    quote:
      "if you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "The beginning is perhaps more difficult than anything else, but keep heart, it will turn out all right.",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "Great things are not none by impulse. But by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  { quote: "What is done in love is done well.", author: "Vincent van Gogh" },
  {
    quote:
      "I’m loved now, but when I wasn't, it didn't mean I wasn't worthy of it.",
    author: "Anne of Green Gables",
  },
  {
    quote:
      "If you focus on what you left behind, you will never see what lies ahead",
    author: "Ratatouille",
  },
  {
    quote:
      "Sometimes we only see how people are different from us. But if you look hard enough, you can see how much we’re all alike.",
    author: "Aladdin",
  },
  {
    quote:
      "We need to fail. We need to fail down here so we don't fail up there",
    author: "Neil Armstrong",
  },
  {
    quote:
      "I don't have time to worry about who doesn't like me. I'm too busy loving the people who love me.",
    author: "Charles Brown",
  },
];

const randomQuote = document.querySelector(".random-box span:first-child");
const randomAuthor = document.querySelector(".random-box span:last-child");
const randomnumber = quotes[Math.floor(Math.random() * quotes.length)];
randomQuote.innerText = randomnumber.quote;
randomAuthor.innerText = `- ${randomnumber.author}`;
// random quotes

const image = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const randomImage = image[Math.floor(Math.random() * image.length)];
const userBgImage = document.querySelector("body");
// const userimage = document.createElement("img");
// userimage.src = `img/${randomImage}`;
// document.body.appendChild(userimage);
// document.body = document.querySelector("img");

userBgImage.style.backgroundImage = `url(img/${randomImage}`;
userBgImage.style.backgroundRepeat = "no-repeat";
userBgImage.style.backgroundSize = "cover";
userBgImage.style.backgroundPosition = "center";

console.dir(userBgImage.style);
