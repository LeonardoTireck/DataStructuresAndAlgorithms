function hammingWeight(n: number): number {
  let output = 0;
  while (n > 0) {
    if (n & 1) {
      console.log("odds");
      n -= 1;
      output++;
    } else {
      console.log("shifting right");
      n >>= 1;
    }
  }
  return output;
}

console.log(hammingWeight(128));
