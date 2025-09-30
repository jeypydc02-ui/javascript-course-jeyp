'use strict';

console.log('Pig Game Ready!');

// game state variables
let scores, currentScore, activePlayer, playing;

//Select player 0 (player 1)
const player0E1 = document.querySelector('.player--0');

//Select player 1 (player 2)
const player1E1 = document.querySelector('.player--1');

//Select score for player 0
const score0E1 = document.querySelector('#score--0');

//Select score for player 1
const score1E1 = document.querySelector('#score--1');

const current0E1 = document.querySelector('#current--0');

const current1E1 = document.querySelector('#current--1');

const diceE1 = document.querySelector('.dice');

const btnRollE1 = document.querySelector('.btn--roll');

// game initialization function

const init = function () {
    //start with both players at 0 score
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    // reset all display values to 0
    score0E1.textContent = 0;
    score1E1.textContent = 0;
    current0E1.textContent = 0;
    current1E1.textContent = 0;

    diceE1.classList.add('hidden');

};
init();

btnRollE1.addEventListener('click', function () {
    if (playing) {
        //1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        //2. Display the dice
        diceE1.classList.remove('hidden');
        diceE1.src = `dice-${dice}.png`;

        //3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {

                currentScore = 0;
            //Switch to next player
            document.getElementById(`current--${activePlayer}`).textContent = 0;
        
           
        }
    }
});
