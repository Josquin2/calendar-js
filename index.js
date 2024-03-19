let date = new Date();
let thisMonth = date.getMonth();
let thisYear = date.getFullYear();

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

function displayDate() {
  let clickedDate = document.getElementById("clicked-date");
  clickedDate.innerHTML = `You have clicked ${this.innerHTML} of ${months[thisMonth]}!`;
  clickedDate.className = "clicked-date";
  let clear = () => {
    clickedDate.innerHTML = "";
    clickedDate.className = "clicked-date-none";
  };
  setTimeout(clear, 2000);
}

function loadingMonth() {
  document.getElementById("currentMonth").innerHTML = months[thisMonth];
  let lastDayOfLastMonth = new Date(thisYear, thisMonth, 0).getDate();
  let lastDayOfMonth = new Date(thisYear, thisMonth + 1, 0).getDate();
  let firstDays = new Date(thisYear, thisMonth, 1).getDay();
  let lastDays = new Date(thisYear, thisMonth, lastDayOfMonth).getDay();

  document.getElementById("year").innerHTML = thisYear;

  console.log(lastDayOfMonth);
  let appendedLi;

  for (let i = firstDays; i > 0; i--) {
    appendedLi = document.createElement("li");
    appendedLi.className += "hidden-day";
    appendedLi.textContent = lastDayOfLastMonth - i;

    document.getElementById("dates").appendChild(appendedLi);
  }

  for (let i = 1; i < lastDayOfMonth + 1; i++) {
    appendedLi = document.createElement("li");
    appendedLi.textContent = i;
    appendedLi.id = "alo";
    appendedLi.onclick = displayDate;
    document.getElementById("dates").appendChild(appendedLi);
  }
  for (let i = lastDays; i < 6; i++) {
    appendedLi = document.createElement("li");
    appendedLi.className += "hidden-day";
    appendedLi.textContent = i + 1;

    document.getElementById("dates").appendChild(appendedLi);
  }
}

function nextMonth() {
  if (thisMonth > 10) {
    thisYear++;
    thisMonth = 0;
    document.getElementById("dates").innerHTML = "";
    loadingMonth();
  } else {
    thisMonth++;
    console.log(thisMonth);
    document.getElementById("dates").innerHTML = "";
    loadingMonth();
  }
}
function previousMonth() {
  if (thisMonth < 1) {
    thisYear--;
    thisMonth = 11;
    document.getElementById("dates").innerHTML = "";
    loadingMonth();
  } else {
    thisMonth--;
    console.log(thisMonth);
    document.getElementById("dates").innerHTML = "";
    loadingMonth();
  }
}
loadingMonth();
