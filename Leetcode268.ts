function missingNumber(nums: number[]): number {
  let x = 0;
  for (const num of nums) {
    x ^= num;
  }
  for (let i = 0; i <= nums.length; i++) {
    x ^= i;
  }
  return x;
}
