function findMinIdx(rotatedSortedArr) {
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  if (rotatedSortedArr.length === 1) {
    return 0;
  }

  if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
    return 0;
  }

  while (left < right) {
    const mie = Math.floor((left + right) / 2);
  }
}

function search(nums, target) {
  // @TODO
}

module.exports = search;
