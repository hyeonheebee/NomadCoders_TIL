const clockSection = document.querySelector(".clock-section");

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
  const now = `${optionsMonth} ${nowDate}, ${nowHour}:${nowMinute}:${nowSecond}`;
  writtenTime.innerText = now;

  // console.log(optionsMonth);
}
const writtenTime = document.createElement("h2");
clockSection.appendChild(writtenTime);
writtenTime.classList.add("nowtime");
writeClock();
setInterval(writeClock, 1000);
