function maxDepth(root) {
  let maxDepth = 0;
  doo;

  function dive(node, currentDepth) {
    if (!node) {
      maxDepth = Math.max(currentDepth - 1, maxDepth);
      return;
    }
  }
}

module.exports = maxDepth;
