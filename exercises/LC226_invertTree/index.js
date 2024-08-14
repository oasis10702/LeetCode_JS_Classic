function invertTree(root) {
  function helper(node) {
    if (!node) return;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    helper(node.left);
  }
}

module.exports = invertTree;
