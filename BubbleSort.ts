function bubble(nums: number[]) {
  let size = nums.length;
  for (const _ of nums) {
    let isSorted = true;
    console.log(nums);
    for (let i = 0; i < size - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        isSorted = false;
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
    if (isSorted) return;
  }
}

bubble([1, 2, 3, 4, 5]);
bubble([5, 4, 3, 2, 1]);
bubble([50, 20, 52, 212, 54, 66, 75, 345, 32, 2, 3, 5, 7, 1, 1, 0, -3]);
