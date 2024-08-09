function invertTree(root) {
  function helper(node) {
    if (!node) return;

    const temp = node.left;
    node.left = node.right;
    node.right = node.left;
  }
}

module.exports = invertTree;
