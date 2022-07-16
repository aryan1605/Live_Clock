
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name_ = document.getElementById("name");
const date = document.getElementById("date");

name_.addEventListener("keypress", setName);
name_.addEventListener("blur", setName);

function showtime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let todaydate = today.toDateString();

  const ampm = hour > 12 ? "PM" : "AM";
  
  hour = hour % 12 || 12;
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${ampm}`;
  date.innerHTML = `${todaydate}`;

  setTimeout(showtime, 1000);
}

function addZero(n) {
  
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setGreeting() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage = 'url("./images/morning.jpg")';
    greeting.innerHTML = "Good Morning";
  } else if (hour < 17) {
    document.body.style.backgroundImage = 'url("./images/afternoon.jpg")';
   
    greeting.innerHTML = "Good Afternoon";
  } else if (hour < 21) {
    document.body.style.backgroundImage = 'url("./images/evening.jpg")';
    greeting.innerHTML = "Good Evening";
  } else {
    document.body.style.backgroundImage = 'url("./images/night.jpg")';
    greeting.innerHTML = "Good Night";
    document.body.style.color = "white";
  }
}
function setName(e) {
  if (e.type === "keypress") {
    if (e.keycode == 13) {
      localStorage.setItem("myDate", e.target.innerHTML);
      name_.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}
function getName() {
  if (localStorage.getItem("myData") === null) name_.innerHTML = "[Enter Name]";
  else name_.innerHTML = localStorage.getItem("myData");
}

getName();
showtime();
setGreeting();