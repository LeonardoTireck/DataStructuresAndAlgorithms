class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let dummyHead = new ListNode();
  let ptr = dummyHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      ptr.next = list1;
      list1 = list1.next;
    } else {
      ptr.next = list2;
      list2 = list2.next;
    }
    ptr = ptr.next;
  }
  ptr.next = list1 || list2;
  return dummyHead.next;
}
