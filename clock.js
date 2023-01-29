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
