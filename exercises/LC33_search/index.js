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
    const mid = Math.floor((left + right) / 2);

    if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) {
      return mid;
    }

    if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) {
      return mid + 1;
    }

    if (rotatedSortedArr[mid] < rotatedSortedArr[left]) {
      right = mid - 1;
    }
  }
}

function search(nums, target) {
  // @TODO
}

module.exports = search;
