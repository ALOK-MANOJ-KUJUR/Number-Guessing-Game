'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let playing = true;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayStyle = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (playing) {
      //   when there is no input
    if (!guess) {
      displayMessage('⛔ No number');

      // when player wins
    } else if (guess === randomNumber) {
      playing = false;
      displayMessage('🎉 Correct Number!');
      displayStyle('#60b347', '30rem');
      displayNumber(randomNumber);

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }

      // when guess is wrong
    } else if (guess !== randomNumber) {
      if (guess > 0 && guess <= 20) {
        if (score > 1) {
          displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
          score--;
          displayScore(score);
        } else {
          displayMessage('💥 You lost the game!');
          displayScore(score);
        }
      } else {
        displayMessage('Please enter number between 1 to 20');
      }
    }
  }
});

// when clicked again button
document.querySelector('.again').addEventListener('click', function () {
  playing = true;
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayStyle('#222', '15rem');
});
