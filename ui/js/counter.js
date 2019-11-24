const hrs = document.querySelector('.hours');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const cc = document.querySelector('.counter');
let seconds = 0;
let minutes = 0;
let hours = 0;

function countDown() {
  seconds--;
  if (seconds <= 0) {
    seconds = 59;
    minutes--;
    if (minutes <= 0) {
      minutes = 0;
      hours--;
    }
    if (hours <= 0) {
      hours = 8;
      minutes = 59;
      seconds = 59;
    }
  }
  cc.innerHTML =
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);
}

setInterval(() => {
  countDown();
}, 1000);
