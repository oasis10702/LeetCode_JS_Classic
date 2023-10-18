function exist(board, word) {
  let found = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; board[0].length; col++) {
      if (board[row][col] === word[0]) {
        dfs(row, col, 0, word);
      }
    }
  }

  function dfs(row, col, count, word) {
    if (count === word.length) {
    }
  }
}

module.exports = exist;
