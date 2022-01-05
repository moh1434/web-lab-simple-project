function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if (h == 0) {
    h = 12;
  }

  let session = "AM";
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = h + ":" + m + ":" + s + " " + session;
  const clockElement = document.getElementById("js-clock");
  if (clockElement.innerText) {
    clockElement.innerText = time;
  } else {
    clockElement.textContent = time;
  }

  setTimeout(showTime, 1000);
}

showTime();
