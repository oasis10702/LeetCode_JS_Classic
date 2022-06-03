function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  let dpSubsequence = new Array(nums.length).fill(1);
  let maxSoFar = 1;

  for (let j = 1; i < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        // @TODO
      }
    }
  }
}

module.exports = lengthOfLIS;
