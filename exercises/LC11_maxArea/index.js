function maxArea(height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const currentArea = Math.min(height[start], height[end] * (end - start));
  }
}

module.exports = maxArea;
