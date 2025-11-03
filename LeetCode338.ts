function countBits(n: number): number[] {
  let ans: number[] = [];
  let numberOfBits = 0;
  for (let i = 0; i <= n; i++) {
    numberOfBits = hammingWeight(i);
    ans.push(numberOfBits);
  }
  return ans;
}

function hammingWeight(n: number): number {
  let output = 0;
  while (n) {
    n &= n - 1;
    output++;
  }
  return output;
}
