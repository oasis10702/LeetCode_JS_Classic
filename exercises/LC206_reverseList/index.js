const reverseList = head => {
    let prev = null;
    let current = head;

    while (current) {
        let temp = current.next;

        // Change direction
        current.next = prev;

        // Move prev and current up by 1
        prev = current;
        current = current.next;
    }
};

module.exports = reverseList;
