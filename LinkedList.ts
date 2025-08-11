class ListNode {
  public right?: ListNode;
  public left?: ListNode;
  public value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class DoublyLinkedList {
  public head?: ListNode;
  public tail?: ListNode;

  constructor() {}

  addToLeft(node: ListNode) {
    if (this.head && this.tail) {
      this.head.left = node;
      node.right = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  addToRight(node: ListNode) {
    if (this.head && this.tail) {
      this.tail.right = node;
      node.left = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  removeFromLeft() {
    if (!this.head) throw new Error("Empty list");
    if (this.head === this.tail) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.right;
      if (this.head) this.head.left = undefined;
    }
  }

  removeFromRight() {
    if (!this.tail) throw new Error("Empty list");
    if (this.head === this.tail) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.tail = this.tail.left;
      if (this.tail) {
        this.tail.right = undefined;
      }
    }
  }
}
