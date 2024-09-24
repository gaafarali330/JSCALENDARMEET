let octoberDays = [];
let septemberDays = [];

let octDaysBox = document.getElementById("oct-days-box");
let sepDaysBox = document.getElementById("sep-days-box");

function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

octoberDays = range(1, 17);
septemberDays = range(16, 30);

const checkIfPassed = (day, month) => {
  let year = 2024;
  let date = new Date(year, month - 1, day);
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
};

const createBoxes = (data, month) => {
  let res = ``;
  data.forEach((element) => {
    let passed = checkIfPassed(element, month);
    passed
      ? (res += `<span class="day-box passed-day">${element}</span>`)
      : (res += `<span class="day-box">${element}</span>`);
  });
  return res;
};

function renderBoxes() {
  let sepSpans = createBoxes(septemberDays, 9);
  let octSpans = createBoxes(octoberDays, 10);

  sepDaysBox.insertAdjacentHTML("afterbegin", sepSpans);
  octDaysBox.insertAdjacentHTML("afterbegin", octSpans);
}

renderBoxes();
