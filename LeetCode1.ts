function twoSum(nums: number[], target: number): number[] {
  let map = new Map();

  for (let n in nums) {
    const diff = target - nums[n];

    if (map.has(diff)) {
      return [+map.get(diff), +n];
    }

    map.set(nums[n], n);
  }

  return [];
}
