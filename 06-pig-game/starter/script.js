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

const btnHoldE1 = document.querySelector('.btn--hold');

const btnNewE1 = document.querySelector('.btn--new');

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

    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    player0E1.classList.add('player--active');
    player1E1.classList.remove('player--active');

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

            switchPlayer();
            console.log('Active player: ', activePlayer);

             console.log('Player 0 active: ', player0E1.classList.contains('player--active'));
    console.log('Player 1 active: ', player1E1.classList.contains('player--active'));
            
        };
    }
});

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
    //Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
};


btnHoldE1.addEventListener('click', function () {
    if (playing && currentScore > 0 ) {
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        console.log('Scores: ', scores);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            //Finish the game
            playing = false;
            diceE1.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //2. Switch to the next player
            switchPlayer(); 
        }

    }

    });

btnNewE1.addEventListener('click', init);