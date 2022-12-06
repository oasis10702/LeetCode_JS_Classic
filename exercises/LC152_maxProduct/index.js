function maxProduct(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    num[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
}

module.exports = maxProduct;
