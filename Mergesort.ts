function findMiddle(head: ListNode) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next && slow.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(l1?: ListNode, l2?: ListNode) {
  let head = new ListNode();
  let tail = head;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 || l2;
  return head.next;
}

function mergeSort(head?: ListNode) {
  if (!head || !head.next) {
    return head;
  }
  let middle = findMiddle(head);
  let afterMiddle = middle.next;
  middle.next = undefined;
  let left = mergeSort(head);
  let right = mergeSort(afterMiddle);
  let sortedList = merge(left, right);
  return sortedList;
}

class ListNode {
  public value: number;
  public next?: ListNode;
  constructor(value: number = 0, next?: ListNode) {
    this.value = value;
    this.next = next;
  }
}
const node7 = new ListNode(7);
const node1 = new ListNode(1, node7);
const node3 = new ListNode(3, node1);
const node9 = new ListNode(9, node3);

console.log(mergeSort(node9));
