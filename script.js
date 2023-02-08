"use strict";


// * create a click event method and create conditions with if/else statement.

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No entry!";
  }
  // when player wins the game
  else if (guess == number) {
    document.querySelector(".message").textContent =
      "🎉 you guessed the correct number!";
    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.backgroundColor = "#71866b";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is to high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥶 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  // when guess is too low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥶 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again playing button

// when clicking again the highscore will remain
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});



// Hope this helps you to understand the code.
// * when checking the (".check") and the ('.guess') class, change the (".message"), (".score"),('.highscore') classes and also when the condition of ('.number') = ('.guess') then the result will be correct and the background will change.


//others things to add
// can edit for a mid range value condition where the message can be: you are close for the win
