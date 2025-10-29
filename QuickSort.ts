function quickSort(arr: Array<number>) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr, left, right);
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [52, 5, 1, 3, 6, 7, 8, 54, 7, 8, 9, 9, 6, 6, 4, 3];
console.log(quickSort(unsortedArray));
