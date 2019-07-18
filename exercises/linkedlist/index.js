// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nodeRef = null) {
    this.data = data;
    this.next = nodeRef;
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size () {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast () {
    let node = this.head;

    if (!this.head) {
      return null
    }

    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
  }

  clear () {
    this.head = null
  }

  removeFirst () {
    if (!this.head) {
      return null
    }

    this.head = this.head.next;
  }

  removeLast () {
    if (!this.head) {
      return null
    }

    if (!this.head.next) {
      this.head = null
      return 
    }

    let node = this.head;
    let refToPrevNode;
    while (node.next) {
      refToPrevNode = node
      node = node.next
    }

    refToPrevNode.next = null
  }

  insertLast (val) {
    const last = this.getLast()
    const newNode = new Node(val)
    if (last) {
      last.next = newNode
    } else {
      this.head = newNode
    }
  }

  // takes in position of node in linked list
  getAt (position) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === position) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

  removeAt (position) {
    if (!this.head) {
      return
    }
    if (position === 0) {
      this.head = this.head.next
    }

    const prevNode = this.getAt(position - 1);
    if (!prevNode || !prevNode.next) {
      return
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt (val, position) {
    if (!this.head) {
      this.head = new Node(val);
      return;
    }

    if (position === 0) {
      this.head = new Node(val, this.head);
      return;
    }

    const prevNode = this.getAt(position - 1) || this.getLast();
    prevNode.next = new Node(val, prevNode.next);

  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next
      counter++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
