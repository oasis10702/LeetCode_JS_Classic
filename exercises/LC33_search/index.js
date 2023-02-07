function findMinIdx(rotatedSortedArr) {
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  if (rotatedSortedArr.length === 1) {
    return 0;
  }

  if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
    return 0;
  }
}

function search(nums, target) {
  // @TODO
}

module.exports = search;
