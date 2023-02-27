let isGameOver = false;
let maxScore = document.querySelector('#maxScore');
const resetButton = document.querySelector('#resetButton');
const selectionContainer = document.querySelector('#selection-container');

const player1 = {
	score: 0,
	button: document.querySelector('#playerOneButton'),
	span: document.querySelector('#player-one-score'),
};

const player2 = {
	score: 0,
	button: document.querySelector('#playerTwoButton'),
	span: document.querySelector('#player-two-score'),
};

function updateScores(player, opponent) {
	if (!isGameOver) {
		maxScore.disabled = true;
		selectionContainer.classList.add('disabled');
		player.score += 1;
		player.span.textContent = player.score;

		if (player.score === parseInt(maxScore.value)) {
			isGameOver = true;
			player.button.disabled = true;
			opponent.button.disabled = true;
			player.span.classList.add('winner');
			opponent.span.classList.add('loser');
		}
	}
}

player1.button.addEventListener('click', () => {
	updateScores(player1, player2);
});

player2.button.addEventListener('click', () => {
	updateScores(player2, player1);
});

resetButton.addEventListener('click', () => {
	isGameOver = false;
	maxScore.disabled = false;
	selectionContainer.classList.remove('disabled');

	for (let player of [player1, player2]) {
		player.score = 0;
		player.span.textContent = 0;
		player.button.disabled = false;
		player.span.classList.remove('winner', 'loser');
	}
});
