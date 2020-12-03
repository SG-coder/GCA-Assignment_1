var clock_container = document.querySelector(".container");
displayTime();
function getTime() {
  setInterval(function () {
    displayTime();
  }, 1000);
}

function getGreetingMsg(hour) {
  if (hour < 12) return "Good Morning";
  else if (hour < 17) return "Good Afternoon";
  else return "Good Evening";
}

function addZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function displayTime() {
  var date = new Date();
  let date_info = date.toDateString();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let greeting = getGreetingMsg(hours);
  if (hours > 12) {
    hours -= 12;
  }
  seconds = addZero(seconds);
  minutes = addZero(minutes);
  hours = addZero(hours);
  clock_container.innerHTML = `
    <div class="greeting">
    <h1>${greeting}</h1>   
    </div>
    <div class="clock_container">
    <div class="date_info">
    <p>${date_info}</p>
    </div>
    <div class="time">
    <h1>${hours} : ${minutes} : ${seconds}</h1>
    </div>
    </div>
    `;
}

getTime();
