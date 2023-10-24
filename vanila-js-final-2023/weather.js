function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position);
  console.log(`you live in ${lat} and ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherSection = document.querySelector(".weather-section");
      const weatherCity = weatherSection.querySelector("span:first-child");
      const weatherTemp = weatherSection.querySelector("span:nth-child(2)");
      const weatherDescript = weatherSection.querySelector("span:last-child");
      const name = data.name;
      weatherCity.innerText = `🚩 ${name}`;
      // const main = data.weather[0].main;
      const temp = data.main.temp;
      weatherTemp.innerText = `${temp}°C`;
      const tempIcon = document.createElement("span");
      weatherTemp.appendChild(tempIcon);
      if (parseInt(temp) <= 0) {
        tempIcon.innerText = "🤧";
      } else if (parseInt(temp) >= 25) {
        tempIcon.innerText = "😵";
      } else {
        tempIcon.innerText = "😉";
      }
      const description = data.weather[0].description;
      weatherDescript.innerText = description;
      const icon = document.createElement("span");
      weatherDescript.appendChild(icon);
      if (description.includes("clouds") === true) {
        icon.innerText = "⛅";
        console.log("cloud");
      } else if (description.includes("clear") === true) {
        console.log("clear sky");
        icon.innerText = "🌞";
      } else if (description.includes("rain") === true) {
        icon.innerText = "☔";
        console.log("rain");
      } else if (description.includes("thunderstorm") === true) {
        console.log("storm");
        icon.innerText = "⚡";
      } else if (description.includes("snow") === true) {
        console.log("snow");
        icon.innerText = "⛄";
      } else if (description.includes("mist") == true) {
        console.log("mist");
        icon.innerText = "💧";
      }
    });
}
function geoError() {
  alert("Can't find your position, No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

const APIkey = "37cc2caca627763810697463fa00d645";
