function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (left <= right) {}
}

module.exports = findMin;
