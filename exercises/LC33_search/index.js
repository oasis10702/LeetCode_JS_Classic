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
    } else {
      left = mid + 1;
    }
  }
}

function binerySearch(num, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function search(nums, target) {
  const minIdx = findMinIdx(nums);

  const left = binerySearch(nums, target, 0, minIdx - 1);
  const right = binerySearch(nums, target, minIdx, nums.length - 1);
}

module.exports = search;
