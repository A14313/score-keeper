// ******************************************
// ******************************************
// ******************************************
// ******************************************
//This is the old code
// ******************************************
// ******************************************
// ******************************************
// ******************************************
const playerOneButton = document.querySelector('#playerOneButton');
const playerTwoButton = document.querySelector('#playerTwoButton');
const playerOneScoreSpan = document.querySelector('#player-one-score');
const playerTwoScoreSpan = document.querySelector('#player-two-score');
const resetButton = document.querySelector('#resetButton');
const maxScore = document.querySelector('#maxScore');
const desc = document.querySelector('#desc');
const selectionContainer = document.querySelector('#selection-container');

// console.log();

let playerOneScore = 0;
playerOneButton.addEventListener('click', () => {
	playerOneScore++;
	playerOneScoreSpan.innerText = playerOneScore;
	maxScore.setAttribute('disabled', '');
	selectionContainer.classList.add('disabled');
	// playerOneButton.setAttribute('disabled', '');

	if (playerOneScore === parseInt(maxScore.value)) {
		desc.innerText = 'Player one wins';
		playerOneButton.setAttribute('disabled', '');
		playerTwoButton.setAttribute('disabled', '');
		playerOneScoreSpan.classList.add('winner');
		playerTwoScoreSpan.classList.add('loser');
	} else {
		//Working on this.
		// To have a timeout in every click
		// setTimeout(() => {
		// 	playerOneButton.removeAttribute('disabled');
		// }, 500);
	}
});

let playerTwoScore = 0;
playerTwoButton.addEventListener('click', () => {
	playerTwoScore++;
	playerTwoScoreSpan.innerText = playerTwoScore;
	maxScore.setAttribute('disabled', '');
	selectionContainer.classList.add('disabled');
	// playerTwoButton.setAttribute('disabled', '');

	if (playerTwoScore === parseInt(maxScore.value)) {
		desc.innerText = 'Player Two wins';
		playerTwoButton.setAttribute('disabled', '');
		playerOneButton.setAttribute('disabled', '');
		playerTwoScoreSpan.classList.add('winner');
		playerOneScoreSpan.classList.add('loser');
	} else {
		//Working on this.
		// To have a timeout in every click
		// setTimeout(() => {
		// 	playerTwoButton.removeAttribute('disabled');
		// }, 500);
	}
});

resetButton.addEventListener('click', () => {
	//Reset the scores and the span
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneScoreSpan.innerText = 0;
	playerTwoScoreSpan.innerText = 0;

	//Reset the buttons
	playerOneButton.removeAttribute('disabled');
	playerTwoButton.removeAttribute('disabled');
	maxScore.removeAttribute('disabled');
	selectionContainer.classList.remove('disabled');

	//reset classes
	if (playerOneScoreSpan.classList.contains('winner')) {
		playerOneScoreSpan.classList.remove('winner');
	}
	if (playerOneScoreSpan.classList.contains('loser')) {
		playerOneScoreSpan.classList.remove('loser');
	}
	if (playerTwoScoreSpan.classList.contains('winner')) {
		playerTwoScoreSpan.classList.remove('winner');
	}
	if (playerTwoScoreSpan.classList.contains('loser')) {
		playerTwoScoreSpan.classList.remove('loser');
	}

	desc.innerText = 'Use the buttons below to keep score.';
});

// maxScore.addEventListener("input", () => {
// 	console.log(maxScore.value);
// });
