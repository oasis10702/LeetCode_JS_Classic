function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast & fast.next) {
    slow = slow.next;
  }
}

module.exports = hasCycle;
