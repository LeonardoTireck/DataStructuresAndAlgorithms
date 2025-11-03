function hammingWeight(n: number): number {
  let output = 0;
  while (n) {
    n &= n - 1;
    output++;
  }
  return output;
}

console.log(hammingWeight(128));
