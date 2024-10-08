const board = document.getElementById('game-board');
const cells = board.getElementsByClassName('cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset-button');

let styleColor = 'red';
let currentPlayer = 'X';
let gameActive = true;
const boardState = Array(9).fill(null);

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }
    return boardState.includes(null) ? null : 'T';
};

const handleClick = (event) => {
    const index = event.target.dataset.index;
    if (boardState[index] || !gameActive) return;

    boardState[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWinner();

    if (winner) {
        gameActive = false;
        status.textContent = winner === 'T' ? 'It\'s a Tie!' : `Player ${winner} Wins!`;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    styleColor = styleColor === 'red' ? 'blue' : 'red';
    status.style.color = styleColor;
    status.textContent = `Player ${currentPlayer}'s turn`;

};

const resetGame = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    boardState.fill(null);
    currentPlayer = 'X';
    gameActive = true;
    status.textContent = `Player ${currentPlayer}'s turn`;
};

board.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);
