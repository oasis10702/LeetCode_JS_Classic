function uniquePaths(m, n) {
  const dpMatrix = [];

  // fill out first row of dp matrix
  for (let row = 1; row <= n; row++) {
    dpMatrix.push([]);
  }

  for (let row = 0; row < n; row++) {
    dpMatrix[row][0] = 1;
  }
}

module.exports = uniquePaths;
