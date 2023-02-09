"use strict";

// * create a click event method and create conditions with if/else statement.

let number = Math.trunc(Math.random() * 10) + 1;

let score = 10;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayNumberWidth = function (numberWidth) {
  document.querySelector(".number").style.width = numberWidth;
};

const displayBackgroundColor = function (bbackgroundColor) {
  document.querySelector("body").style.backgroundColor = bbackgroundColor;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    displayMessage("⛔️ No Entry");
  } else if (guess == number) {
    displayMessage("🎉 Hurrah! you guessed the correct number");
    displayNumber(number);
    displayNumberWidth("30rem");
    displayBackgroundColor("#71866b");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈 Too high!" : "📉 To low!");
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage("🥶 You lost the game!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  displayMessage("🤔 Start guessing...");

  number = Math.trunc(Math.random() * 10) + 1;

  displayNumber("?");
  displayNumberWidth("15rem");
  displayBackgroundColor("#222");

  score = 10;
  displayScore(score);
});

//others things to add
// can edit for a mid range value condition where the message can be: you are close for the win
