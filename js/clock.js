const secondEl = document.getElementById('seconds');
const minuteEl = document.getElementById('minutes');
const hourEl = document.getElementById('hours');
const clockEl = document.querySelector('.clock-container');

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

window.onload = function() {
  clearInterval(intervalId)
  intervalId = setInterval(count, 1000)
  
  const alertt = document.createElement('div');
  alertt.id = 'alert';
  alertt.innerText = '10초가 지났습니다!!';
  clockEl.appendChild(alertt);

  function count() {
    seconds++;
    if(seconds > 9) {
      seconds = seconds;
    } else {
      seconds = "0" + seconds;
    }
    secondEl.innerText = seconds;

    if(seconds > 59) {
      minutes++
      if(minutes > 9) {
        minutes = minutes;
      } else {
        minutes = "0" + minutes;
      }
      minuteEl.innerText = minutes;
      seconds = 0;
      secondEl.innerText = "00";
    }

    if (seconds === 10) {
      alertt.style.display='block';
     } else if (seconds === 15) {
       alertt.style.display='none';
     }

    if(minutes > 59) {
      hours++;
      if(hours > 9) {
        hours = hours;
      } else {
        hours = "0" + hours;
      }
      hourEl.innerText = hours;
      minutes = 0;
      minuteEl.innerText = "00";
    }
  }
}
