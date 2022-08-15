const productExceptSelf = (nums) => {
  let output = nums.map((n) => 1);
  let product = 1;

  // Multiply from the left
  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * product;
    product = product + nums[i];
  }

  product = 1;
  // Multiply from the right
};

module.exports = productExceptSelf;
