'use strict';

// Midterm Exam
//DOM Element Selection

const messageE1 = document.querySelector('.message');
console.log(messageE1);
//change the content of Element1
//messageE1.textContent = 'Guess my favorite Number';

const scoreE1 = document.querySelector('.score');
//scoreE1.textContent = 20;

const numberE1 = document.querySelector('.number');
//numberE1.textContent = 2;

const highscoreE1 = document.querySelector('.highscore');
//hihghscoreE1.textContent = 16;

const guessInpustE1 = document.querySelector('.guess');
//guessInputE1.value = 2;


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Your Secret number is: ',secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

///////
// Basic game logic

document.querySelector('.check').addEventListener('click', function () {

console.log('Check button clicked! ');
const guess = Number(document.querySelector('.guess').value);
console.log('Players guessed:', guess);

if (guess === secretNumber) {
    console.log('Lowpet mo naman yah');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.querySelector('.message').textContent = 'TALAGANG SOBRANG BANGIS';
 
  }  else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'TAAS NAMAN YAH, ULIT';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = 'TALO KANANG BOBO KA. MAG-ARAL KAKASI';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'BABA NAMAN YAH, ULIT';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = 'TALO KA NANG BOBO KA. MAG-ARAL KAKASI';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
  }
});     

    document.querySelector('.again').addEventListener('click', function () {
  // block
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  // restart secret number display
  document.querySelector('.number').textContent = '?';
  // restart the score
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // enable guess and check
  document.querySelector('.guess').disabled + true;
  document.querySelector('.check').disabled + true;

    });
