const COLOR_CODES = {
  info: {
    color: "green"
  }
};
let remainingPathColor = COLOR_CODES.info.color;
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
      <span id="base-timer-label" class="base-timer__label"  > 
      ${formatTimeLeft(22)}
      </span>
</div>
`;

function formatTimeLeft(time) {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`
}


const TIME_LIMIT = 20;

let timePassed = 0;
let timeLeft = TIME_LIMIT;




let timerInterval = null;

// document.getElementById("app").innerHTML = `...`;
startTimer()

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;

    document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft)

  }, 1000);
}
