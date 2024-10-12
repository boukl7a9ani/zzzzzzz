// Define the initial layout of the board
const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// Create the chessboard dynamically
function createBoard() {
    const board = document.getElementById('chessboard');
    board.innerHTML = ''; // Clear previous board

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = row;
            square.dataset.col = col;

            // Alternate square colors
            if ((row + col) % 2 === 0) {
                square.classList.add('light-square');
            } else {
                square.classList.add('dark-square');
            }

            // Add piece if it exists
            let piece = initialBoard[row][col];
            if (piece) {
                const img = document.createElement('img');
                img.src = `images/${piece}.png`; // Path to piece images
                img.alt = piece;
                square.appendChild(img);
            }
            square.addEventListener('click', handleSquareClick);
            board.appendChild(square);
        }
    }
}

// Handle square clicks (implement piece movement logic here)
function handleSquareClick(event) {
    const square = event.currentTarget;
    const row = square.dataset.row;
    const col = square.dataset.col;
    console.log(`Square clicked at row ${row}, col ${col}`);
}

// Initialize the board when the window loads
window.onload = function () {
    createBoard();
};
