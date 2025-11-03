function numberOfSteps(num: number): number {
  let steps = 0;
  while (num > 0) {
    if (num & 1) {
      num -= 1;
    } else {
      num >>= 1;
    }
    steps++;
  }
  return steps;
}
