'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

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
      // document.querySelector('.message').textContent = '⛔ No number';
      displayMessage('⛔ No number');

      // when player wins
    } else if (guess === randomNumber) {
      playing = false;
      // document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');
      // document.querySelector('body').style.backgroundColor = '#60b347';
      // document.querySelector('.number').style.width = '30rem';
      displayStyle('#60b347', '30rem');
      // document.querySelector('.number').textContent = randomNumber;
      displayNumber(randomNumber);

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }

      // when guess is wrong
    } else if (guess !== randomNumber) {
      if (guess > 0 && guess <= 20) {
        if (score > 1) {
          // document.querySelector('.message').textContent =
          //   guess > randomNumber ? '📈 Too high!' : '📉 Too low!';
          displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
          score--;
          // document.querySelector('.score').textContent = score;
          displayScore(score);
        } else {
          // document.querySelector('.message').textContent = '💥 You lost the game!';
          displayMessage('💥 You lost the game!');
          // document.querySelector('.score').textContent = 0;
          displayScore(score);
        }
      } else {
        displayMessage('Please enter number between 1 to 20');
      }
    }
    // when guess is too high
    //   } else if (guess > randomNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Too high!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //     // when guess is too low
    //   } else if (guess < randomNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 Too low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   }
  }
});

// when clicked again button
document.querySelector('.again').addEventListener('click', function () {
  playing = true;
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.guess').value = '';

  // document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.number').style.width = '15rem';
  displayStyle('#222', '15rem');
});
