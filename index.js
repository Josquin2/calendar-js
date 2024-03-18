const currentMonth = new Date().getMonth();
thisMonth = currentMonth;
let lastDate = new Date(2024, thisMonth + 1, 0).getDate();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function loadingDates() {
  // TODO: Set Years
  let lia;
  let currentYear = new Date().getFullYear();
  document.getElementById("currentYear").innerHTML = currentYear;
  let lastDate = new Date(2024, thisMonth + 1, 0).getDate();
  let lastDateofLastMonth = new Date(2024, thisMonth, 0).getDate();
  let firstDay = new Date(2024, thisMonth, 1).getDay();
  let fewLastDays = new Date(2024, thisMonth, lastDate).getDay();
  for (let i = firstDay; i > 0; i--) {
    lia = document.createElement("li");
    lia.innerHTML = lastDateofLastMonth - i + 1;
    lia.className += "hidden-day";
    document.getElementById("dates").appendChild(lia);
  }
  for (let i = 1; i < lastDate + 1; i++) {
    lia = document.createElement("li");
    lia.innerHTML = i;
    document.getElementById("dates").appendChild(lia);
  }
  for (let i = fewLastDays; i < 6; i++) {
    lia = document.createElement("li");
    lia.innerHTML = i - fewLastDays + 1;
    lia.className += "hidden-day";
    document.getElementById("dates").appendChild(lia);
  }
}
loadingDates();

function displayDate(a) {
  // TODO: Display clicked days!
}

window.onload = function loadingMonth() {
  document.getElementById("currentMonth").innerHTML = months[currentMonth];
};
function nextMonth() {
  document.getElementById("currentMonth").innerHTML = months[thisMonth + 1];
  thisMonth++;
  document.getElementById("dates").innerHTML = "";
  loadingDates();
}
function previousMonth() {
  document.getElementById("currentMonth").innerHTML = months[thisMonth - 1];
  thisMonth--;
  document.getElementById("dates").innerHTML = "";
  loadingDates();
}
