function invertTree(root) {
  function helper(node) {
    if (!node) return;

    node.left = node.right;
  }
}

module.exports = invertTree;
