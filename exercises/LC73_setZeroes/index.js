function setZeroes(matrix) {
  let firstColHasZero = false;
  let firstRowHasZero = false;

  //  Check if first column has zero
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
    }
  }
}

module.exports = setZeroes;
