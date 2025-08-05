function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let counter = new Map();
  let r = 0;

  counter.set(nums[0], 0);

  while (r < nums.length - 1) {
    r++;

    if (Math.abs(counter.get(nums[r]) - r) <= k) {
      return true;
    } else {
      counter.set(nums[r], r);
    }
  }
  return false;
}
