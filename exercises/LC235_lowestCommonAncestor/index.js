function lowestCommonAncestor(root, p, q) {
  const pVal = p.val;
  const qVal = q.val;

  let currentNode = root;

  while (currentNode) {
    const currentVal = currentVal.val;

    if (currentVal < pVal && currentVal < qVal) {
    }
  }
}

module.exports = lowestCommonAncestor;
