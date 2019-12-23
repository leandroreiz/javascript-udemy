/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

AFTER FINISHING THE GAME WITH THE RULES ABOVE, TAKE THIS 3 EXTRA CHALLENGES:

1. A player losses his entire score when he rolls two 6 in a row. After that, it's the next player's turn.
2. Add an input field to the HTML where players can set their winning score, so that they can change the
predefined score of 100. (Use .value property from JavaScript)
3. Add another dice to the game, so that there are 2 dices now. The player losses his current score when
one of them is a 1. 
*/

//Declaring variables
var scores, roundScore, activePlayer, gamePlaying, previousRoll0, previousRoll1;

function init() {
    //Initializing variables
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousRoll0 = 0;
    previousRoll1 = 0;

    hideDices();

    //Zeroing all the scores and current scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //setting player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //setting the active class and removing the winner class from players
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    //Player 1 needs to be activated
    document.querySelector('.player-0-panel').classList.add('active');
    
};

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //Generates a random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        //Display the results
        document.getElementById('dice-0').style.display = 'block';
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-0').src = 'dice-' + dice0 + '.png';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        
        //CHALLENGE: The active player losses his entire score when he rolls two 6 in a row
        if ((previousRoll0 === 6 && (dice0 === 6 || dice1 === 6)) || (previousRoll1 === 6 && (dice0 === 6 || dice1 === 6)) || (dice0 === 6 && dice1 === 6 )) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        //Update the round score IF the rolled number wasn't 1
        } else if (dice0 !== 1 && dice1 !== 1) {
            roundScore += dice0 + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousRoll0 = dice0;
            previousRoll1 = dice1;
        } else {
            nextPlayer();    
        };
    };    
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //Add the current score to the player global score
        scores[activePlayer] += roundScore;
        //Update player UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        //Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            hideDices();
            gamePlaying = false;
        } else {
            nextPlayer();
        };
    }
});

function nextPlayer () {
    //Check active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //Zeroing the roundScore and previous rolls
    roundScore = 0;
    previousRoll0 = 0;
    previousRoll1 = 0;
    //Zeroing the screen values
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //The next player need to be activated
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

//Creates a new game
document.querySelector('.btn-new').addEventListener('click', init);

//Hide the dices
function hideDices() {
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
}