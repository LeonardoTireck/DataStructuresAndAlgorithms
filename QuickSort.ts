function quickSort(arr: number[], low = 0, high = arr.length - 1): number[] {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    console.log("pivotIndex:", pivotIndex);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    console.log("J:", j, "\nI:", i, "\nPivot:", pivot);
    console.log("arr[j]:", arr[j]);
    if (arr[j] < pivot) {
      console.log("Increasing i");
      i++;
      console.log("arr[i]:", arr[i]);
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
      console.log("swaping i and j");
      console.log("Increasing j");
      console.log("Current state of array:", arr);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const unsortedArray = [52, 5, 1, 3, 6, 7, 8, 54, 7, 8, 9, 9, 6, 6, 4, 3];
quickSort(unsortedArray);
