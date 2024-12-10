const board = document.getElementById('game-board');
const cells = board.getElementsByClassName('cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset-button');

let styleColor = 'blue';
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
    return boardState.includes(null) ? null : 'T';  // Check for tie
};

const handleClick = (event) => {
    const index = event.target.dataset.index;  // Get the index from data-index attribute
    if (boardState[index] || !gameActive) return;  // Ignore if the cell is already filled or game is inactive

    boardState[index] = currentPlayer;
    event.target.textContent = currentPlayer;  // Set the clicked cell to current player's symbol

    const winner = checkWinner();

    if (winner) {
        gameActive = false;
        status.textContent = winner === 'T' ? 'It\'s a Tie!' : `Player ${winner} Wins!`;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';  // Switch player
    styleColor = styleColor === 'blue' ? 'red' : 'blue';  // Switch style color
    status.style.color = styleColor;  // Change status color
    status.textContent = `Player ${currentPlayer}'s turn`;

    // Change background color for each cell
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = styleColor;
    }
};

const resetGame = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';  // Clear the text inside the cells
        cells[i].style.backgroundColor = '';  // Reset background color
    }
    boardState.fill(null);  // Reset board state
    currentPlayer = 'X';
    gameActive = true;
    styleColor = 'red';  // Reset the starting color
    status.style.color = styleColor;  // Reset status text color
    status.textContent = `Player ${currentPlayer}'s turn`;
};

// Add event listeners to each cell for handling clicks
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
    cells[i].dataset.index = i;  // Assign the index to each cell
}

resetButton.addEventListener('click', resetGame);
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

