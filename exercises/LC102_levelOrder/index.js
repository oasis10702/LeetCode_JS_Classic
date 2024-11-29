function levelOrder(root) {
  const res = [];

  function helper(node, depth) {
    if (!node) {
      return;
    }

    if (!res[depth]) {
      res[depth] = [];
    }

    res[depth].push(node.val);

    helper(node.left, depth + 1);
    helper(node.right);
  }
}

module.exports = levelOrder;
