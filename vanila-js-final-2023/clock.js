const clockSection = document.querySelector(".clock-section");
const TimeSection = clockSection.querySelector("span:last-child");
const DaySection = clockSection.querySelector("span:first-child");
function writeClock() {
  const nowTime = new Date();
  // console.log(typeof nowTime);
  // console.log(nowTime);
  // console.log(nowTime.getFullYear());
  // console.log(nowTime.getDate());
  const nowMonth = nowTime.getMonth();
  const options = { month: "long" };
  const optionsMonth = new Intl.DateTimeFormat("en-US", options).format(
    nowTime
  );
  const nowDate = String(nowTime.getDate()).padStart(2, "0");
  const nowHour = String(nowTime.getHours()).padStart(2, "0");
  const nowMinute = String(nowTime.getMinutes()).padStart(2, "0");
  const nowSecond = String(nowTime.getSeconds()).padStart(2, "0");
  const nowDay = `${optionsMonth}, ${nowDate}`;
  const nowClock = `${nowHour}:${nowMinute}:${nowSecond}`;
  TimeSection.innerText = nowClock;
  DaySection.innerText = nowDay;
  // console.log(optionsMonth);
}

writeClock();
setInterval(writeClock, 1000);

const dDayInput = document.querySelector(".d-day-form input");
const dDayBtn = document.querySelector(".d-day-form button");
console.dir(dDayInput);
const clockTitle = document.querySelector(".clockTitle");
function handleCountDday(event) {
  event.preventDefault();
  console.log(dDayInput.value);
  console.log(typeof dDayInput.value);
  localStorage.setItem("timevalue", dDayInput.value);
}

dDayBtn.addEventListener("click", handleCountDday);

function countDowndDay() {
  const item = localStorage.getItem("timevalue");

  const date = new Date();
  const dDay = new Date(`${item}T00:00:00`);

  // console.log(date);
  // console.log(xMas);
  const elapse = dDay - date;
  // console.log(elapse);
  const day = Math.floor(elapse / (60 * 60 * 24 * 1000));
  const hour = String(
    Math.floor(elapse / (60 * 60 * 1000)) - day * 24
  ).padStart(2, "0");

  clockTitle.innerText = `Dday : ${day}d ${hour}h`;
  if (item !== null) {
    clockTitle.classList.remove("hiddentitle");
  } else {
  }
  // console.log(day);
  // console.log(hour);
  // console.log(minute);
  // console.log(second);
}

countDowndDay();
setInterval(countDowndDay, 1000);
