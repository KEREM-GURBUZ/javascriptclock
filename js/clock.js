let userName = prompt("Lütfen adinizi ve soyadinizi giriniz :", "Örnek: Elon Musk");
userName = userName.toLowerCase().split(" ");
firstName = userName[0][0].toUpperCase() + userName[0].slice(1);
lastName = userName[1][0].toUpperCase() + userName[1].slice(1).toUpperCase();

let span = document.querySelector("#myName");
span.innerHTML = `${firstName} ${lastName}`;
span.style = `color: whitesmoke;`;

function showTime() {
  const today = new Date();
  let y = today.getFullYear();
  let a = today.getMonth();
  let d = today.getDay();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  div = document.getElementById("myClock");
  div.innerHTML = `
  <p style="border-bottom: 1px solid goldenrod">${h}:${m}:${s}</p>
  <p style="font-size: 2.5rem;">${d}:${a}:${y}</p>`;
  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

showTime();
