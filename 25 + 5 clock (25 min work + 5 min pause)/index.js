let sessionLength = 25; // default session length in minutes
let breakLength = 5; // default break length in minutes
let timer;
let timeLeft = sessionLength * 60; // initial time left in seconds
let isSession = true; // flag to indicate if it's session time or break time
let isPaused = true; // flag to indicate if the timer is paused

const timerDisplay = document.getElementById("timer");
const sessionLengthDisplay = document.getElementById("session-length");
const breakLengthDisplay = document.getElementById("break-length");

const updateDisplay = () => {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
};

const decrementSessionLength = () => {
  if (sessionLength > 1 && isPaused) {
    sessionLength--;
    sessionLengthDisplay.textContent = sessionLength;
    if (isSession) {
      timeLeft = sessionLength * 60;
      updateDisplay();
    }
  }
};

const incrementSessionLength = () => {
  if (sessionLength < 60 && isPaused) {
    sessionLength++;
    sessionLengthDisplay.textContent = sessionLength;
    if (isSession) {
      timeLeft = sessionLength * 60;
      updateDisplay();
    }
  }
};

const decrementBreakLength = () => {
  if (breakLength > 1 && isPaused) {
    breakLength--;
    breakLengthDisplay.textContent = breakLength;
    if (!isSession) {
      timeLeft = breakLength * 60;
      updateDisplay();
    }
  }
};

const incrementBreakLength = () => {
  if (breakLength < 60 && isPaused) {
    breakLength++;
    breakLengthDisplay.textContent = breakLength;
    if (!isSession) {
      timeLeft = breakLength * 60;
      updateDisplay();
    }
  }
};

const startTimer = () => {
  if (isPaused) {
    isPaused = false;
    timer = setInterval(() => {
      timeLeft--;
      updateDisplay();
      if (timeLeft <= 0) {
        clearInterval(timer);
        if (isSession) {
          timeLeft = breakLength * 60;
          isSession = false;
        } else {
          timeLeft = sessionLength * 60;
          isSession = true;
        }
        updateDisplay();
        startTimer();
      }
    }, 1000);
  }
};

const pauseTimer = () => {
  if (!isPaused) {
    isPaused = true;
    clearInterval(timer);
  }
};

const resetTimer = () => {
  isPaused = true;
  clearInterval(timer);
  sessionLength = 25;
  breakLength = 5;
  timeLeft = sessionLength * 60;
  isSession = true;
  sessionLengthDisplay.textContent = sessionLength;
  breakLengthDisplay.textContent = breakLength;
  updateDisplay();
};

document
  .getElementById("session-decrement")
  .addEventListener("click", decrementSessionLength);
document
  .getElementById("session-increment")
  .addEventListener("click", incrementSessionLength);
document
  .getElementById("break-decrement")
  .addEventListener("click", decrementBreakLength);
document
  .getElementById("break-increment")
  .addEventListener("click", incrementBreakLength);
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateDisplay();
