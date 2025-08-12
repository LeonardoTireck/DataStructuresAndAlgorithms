class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

const listNode4 = new ListNode(4);
const listNode3 = new ListNode(3, listNode4);
const listNode2 = new ListNode(2, listNode3);
const listNode1 = new ListNode(1, listNode2);

console.dir(reverseList(listNode1), { depth: null });
