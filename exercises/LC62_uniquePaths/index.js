function uniquePaths(m, n) {
  const dpMatrix = [];

  for (let row = 1; row <= n; row++) {
    dpMatrix.push([]);
  }

  // fill out first row of dp matrix
  for (let row = 0; row < n; row++) {
    dpMatrix[row][0] = 1;
  }

  for (let col = 0; col < m; col++) {}
}

module.exports = uniquePaths;
