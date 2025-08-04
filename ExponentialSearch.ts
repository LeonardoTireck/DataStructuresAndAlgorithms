function exponentialSearch(arr: Array<number>, target: number) {
  if (arr[0] == target) {
    return 0;
  }
  let n = arr.length;

  let r = 1;

  while (r < n && arr[r] < target) {
    r *= 2;
  }
  if (arr[r] == target) {
    return r;
  }
  let low = Math.floor(r / 2);
  let high = Math.min(r, n - 1);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(exponentialSearch([1, 3, 5, 7, 9, 13, 21, 34, 55], 13));
console.log(exponentialSearch([1, 3, 5, 7, 9, 13, 21, 34, 55], 1));
console.log(exponentialSearch([1, 3, 5, 7, 9, 13, 21, 34, 55], 55));
console.log(exponentialSearch([1, 3, 5, 7, 9, 13, 21, 34, 55], 2));
