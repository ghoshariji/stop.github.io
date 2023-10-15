let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let a;
let lapCount = 0;

function lap() {
  count++;

  if (count == 100) {
    second++;
    count = 0;
  }

  if (second == 60) {
    minute++;
    second = 0;
  }

  if (minute == 60) {
    hour++;
    minute = 0;
    second = 0;
  }

  let hrString = hour < 10 ? "0" + hour : hour;
  let minString = minute < 10 ? "0" + minute : minute;
  let secString = second < 10 ? "0" + second : second;
  let countString = count < 10 ? "0" + count : count;

  let b = document.getElementById("time");
  b.innerHTML = `${hrString}:${minString}:${secString}.${countString}`;
  a = setTimeout(lap, 10);
}

function stop() {
  lapCount++;
  clearTimeout(a);
  display(lapCount);
}

function display(count1) {
  let a = document.createElement("p");
  let hr = document.createElement("hr");
  let b = document.getElementById("time");
  a.innerHTML = `Lap${count1}      ${b.textContent}`;
  a.style.padding = "20pxpx";
  a.style.color = "wheat";
  document.getElementById("output").append(a, hr);
  document.getElementById("clear").addEventListener("click", () => {
    a.remove();
    hr.remove();
  });
}

function reset() {
  let reset = document.getElementById("time");
  reset.textContent = "00:00:00:00";
}

document.getElementById("lap").addEventListener("click", lap);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("Reset").addEventListener("click", reset);
