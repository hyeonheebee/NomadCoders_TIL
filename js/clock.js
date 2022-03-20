function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  mainClock.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
getClock();
setInterval(getClock, 1000);

// if (hours >= 12) {
// greeting.innerText = `${confirmname}, goodevening :)`;
// } else {
// greeting.innerText = `${confirmname}, goodmorning :)`;
// }
