function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  if (nums.length === 1 && nums[0] === target) return 0;
  if (nums.length === 1 && nums[0] !== target) return -1;

  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
