function maxSubArray(nums) {
  let dp = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    console.log(dp[i]);
  }
}

module.exports = maxSubArray;
