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

if(guess === secretNumber) {
    console.log('PANO MO NAHULAAN!!!');
    document.querySelector('.message').textContent = 'ANG LOPIT MO KOYA';
    document.querySelector('.number').textContent = secretNumber;
}else if (guess > secretNumber) {
    console.log('TAAS NYAN YAH. BOBO KA TLGA MANG HULA!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('KULANG PA, BOBO KA TLGA!');
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});


