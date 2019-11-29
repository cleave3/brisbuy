const counter = document.querySelector('.counter');
let seconds = 0;
let minutes = 0;
let hours = 0;

function countDown() {
  seconds--;
  if (seconds <= 0) {
    seconds = 59;
    minutes--;
    if (minutes <= 0) {
      minutes = 59;
      hours--;
    }
    if (hours <= 0) {
      hours = 12;
      minutes = 59;
      seconds = 59;
    }
  }
  counter.innerHTML =
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);
}

setInterval(() => {
  countDown();
}, 1000);
