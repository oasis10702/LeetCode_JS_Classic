function maxProduct(nums) {
  let maxTillIndex = [nums[0]];
  let minTillIndex = [nums[0]];
  let max = nums[0];

  for (let i = i; i < nums.length; i++) {
    const num = nums[i];

    maxTillIndex[i] = Math.max(
      num,
      num * maxTillIndex[i - 1],
      num * minTillIndex[i - 1]
    );
  }
}

module.exports = maxProduct;
