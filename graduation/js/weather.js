function geoSuccess(position) {
  console.log(position);
  const userlat = position.coords.latitude;
  const userlon = position.coords.longitude;
  console.log("you live in", userlon, userlat);
  const API_KEY = "37cc2caca627763810697463fa00d645";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userlat}&lon=${userlon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const location = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `🚩 ${data.name}`;
      location.innerText = `☁ ${data.weather[0].main}`;
    });
}
function geoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
