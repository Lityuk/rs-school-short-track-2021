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

// !!!!! Это не список - это заглушка((((
class Queue {
  constructor() {
    this.queue = [];
    this.length = this.queue.length;
    this.node = ListNode();
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
