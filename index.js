import dayjs from "dayjs";
import MicroModal from "micromodal";
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");

MicroModal.init();

dayjs.extend(utc);
dayjs.extend(timezone);

setInterval(update, 1000);

function update() {
  let timezoneElement = document.getElementById("timezone");
  let tz = document.getElementById("select-timezone").value;

  console.log(tz);
  let now = dayjs().tz(tz);
  timezoneElement.innerHTML = String(tz);

  let timeElement = document.getElementById("time");
  timeElement.innerHTML = now.format("hh:mm:ss");

  let dateElement = document.getElementById("date");
  dateElement.innerHTML = now.format("dddd, MMMM D, YYYY");
}
