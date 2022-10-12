const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {}
  }
};

module.exports = threeSum;
