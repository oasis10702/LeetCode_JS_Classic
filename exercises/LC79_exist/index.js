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
      found = true;

      return;
    }

    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[count]
    ) {
      return;
    }

    let temp = board[row][col];
    board[row][col] = "";

    dfs(row + 1, col.count + 1, word);
    dfs(row - 1, col, count + 1, word);
    dfs(row)
  }
}

module.exports = exist;
