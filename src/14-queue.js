const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    this.length = 0;
    this.head = null;
    return this.size;
  }

  enqueue(element) {
    const node = new ListNode(element);
    let currentNode = this.head;
    // 1-ый случай: пустой список
    if (!currentNode) {
      this.head = node;
      this.length++;

      return node;
    }

    // 2-ой случай: не пустой список
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    this.length++;

    return node;
  }

  dequeue() {}
}

module.exports = Queue;
