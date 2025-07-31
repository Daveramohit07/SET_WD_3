class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        this.isTwoPlayer = false;
        
        this.initializeGame();
        this.bindEvents();
    }

    initializeGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.updateDisplay();
        this.clearBoard();
        this.updateGameStatus('');
    }

    bindEvents() {
        // Cell click events
        document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                if (!isNaN(index)) {
                    this.handleCellClick(index);
                }
            });
        });

        // Button events
        const newGameBtn = document.getElementById('newGameBtn');
        const resetScoreBtn = document.getElementById('resetScoreBtn');
        const mode1PlayerBtn = document.getElementById('mode1Player');
        const mode2PlayerBtn = document.getElementById('mode2Player');

        if (newGameBtn) {
            newGameBtn.addEventListener('click', () => {
                this.newGame();
            });
        }

        if (resetScoreBtn) {
            resetScoreBtn.addEventListener('click', () => {
                this.resetScore();
            });
        }

        // Mode toggle events
        if (mode1PlayerBtn) {
            mode1PlayerBtn.addEventListener('click', () => {
                this.setGameMode(false);
            });
        }

        if (mode2PlayerBtn) {
            mode2PlayerBtn.addEventListener('click', () => {
                this.setGameMode(true);
            });
        }
    }

    setGameMode(isTwoPlayer) {
        this.isTwoPlayer = isTwoPlayer;
        
        // Update button states
        const mode1PlayerBtn = document.getElementById('mode1Player');
        const mode2PlayerBtn = document.getElementById('mode2Player');
        
        if (mode1PlayerBtn && mode2PlayerBtn) {
            mode1PlayerBtn.classList.toggle('active', !isTwoPlayer);
            mode2PlayerBtn.classList.toggle('active', isTwoPlayer);
        }
        
        // Update player display
        this.updatePlayerDisplay();
        
        // Start new game with new mode
        this.newGame();
    }

    handleCellClick(index) {
        if (!this.gameActive || this.board[index] !== '') {
            return;
        }

        this.makeMove(index);

        // Computer move (only in 1-player mode)
        if (!this.isTwoPlayer && this.gameActive && this.currentPlayer === 'O') {
            setTimeout(() => {
                this.makeComputerMove();
            }, 500);
        }
    }

    makeMove(index) {
        this.board[index] = this.currentPlayer;
        this.updateCell(index);
        
        if (this.checkWin()) {
            this.handleWin();
        } else if (this.checkDraw()) {
            this.handleDraw();
        } else {
            this.switchPlayer();
        }
    }

    makeComputerMove() {
        if (!this.gameActive) return;
        
        const emptyCells = this.board.map((cell, index) => cell === '' ? index : -1).filter(index => index !== -1);
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            this.makeMove(emptyCells[randomIndex]);
        }
    }

    updateCell(index) {
        const cell = document.querySelector(`[data-index="${index}"]`);
        if (cell) {
            cell.textContent = this.currentPlayer;
            cell.classList.add(this.currentPlayer.toLowerCase());
        }
    }

    checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.highlightWinningCells(condition);
                return true;
            }
        }
        return false;
    }

    highlightWinningCells(cells) {
        cells.forEach(index => {
            const cell = document.querySelector(`[data-index="${index}"]`);
            if (cell) {
                cell.classList.add('winning');
            }
        });
    }

    checkDraw() {
        return this.board.every(cell => cell !== '');
    }

    handleWin() {
        this.gameActive = false;
        this.scores[this.currentPlayer]++;
        this.updateScores();
        this.updateGameStatus(`Player ${this.currentPlayer} wins!`, 'win');
    }

    handleDraw() {
        this.gameActive = false;
        this.updateGameStatus("It's a draw!", 'draw');
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateDisplay();
    }

    updateDisplay() {
        this.updatePlayerDisplay();
        this.updateScores();
    }

    updatePlayerDisplay() {
        const player1 = document.getElementById('player1');
        const player2 = document.getElementById('player2');
        const currentPlayerText = document.getElementById('currentPlayer');
        
        // Remove active class from both players
        player1.classList.remove('active');
        player2.classList.remove('active');
        
        // Add active class to current player
        if (this.currentPlayer === 'X') {
            player1.classList.add('active');
        } else {
            player2.classList.add('active');
        }
        
        // Update current player text
        if (currentPlayerText) {
            if (!this.isTwoPlayer && this.currentPlayer === 'O') {
                currentPlayerText.textContent = "Computer's Turn";
            } else {
                currentPlayerText.textContent = `Player ${this.currentPlayer}'s Turn`;
            }
        }
        
        // Update player icons and labels
        if (!this.isTwoPlayer) {
            player2.querySelector('i').className = 'fas fa-robot';
            player2.querySelector('span').textContent = 'Computer';
        } else {
            player2.querySelector('i').className = 'fas fa-user';
            player2.querySelector('span').textContent = 'Player O';
        }
    }

    updateScores() {
        const scoreX = document.getElementById('scoreX');
        const scoreO = document.getElementById('scoreO');
        
        if (scoreX) scoreX.textContent = this.scores.X;
        if (scoreO) scoreO.textContent = this.scores.O;
    }

    updateGameStatus(message, className = '') {
        const gameStatus = document.getElementById('gameStatus');
        if (gameStatus) {
            gameStatus.textContent = message;
            gameStatus.className = `game-status ${className}`;
        }
    }

    clearBoard() {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
        });
    }

    newGame() {
        this.initializeGame();
    }

    resetScore() {
        this.scores = { X: 0, O: 0 };
        this.updateScores();
        this.updateGameStatus('');
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
}); 