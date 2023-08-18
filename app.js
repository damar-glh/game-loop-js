let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]            
    ];

    function makeMove(index) {
      if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        if (checkWinner()) {
          document.getElementById('message').textContent = `${currentPlayer} wins!`;
        } else if (board.every(cell => cell !== '')) {
          document.getElementById('message').textContent = "It's a draw!";
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }

    function checkWinner() {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return true;
        }
      }
      return false;
    }

    function resetGame() {
      currentPlayer = 'X';
      board = ['', '', '', '', '', '', '', '', ''];
      document.getElementById('message').textContent = '';
      const cells = document.getElementsByClassName('cell');
      for (let i of cells.length) {
        cells[i].textContent = '';
      }
    }