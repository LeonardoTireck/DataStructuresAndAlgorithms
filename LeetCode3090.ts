function maximumLengthSubstring(s: string): number {
  let l = 0;
  let r = 0;
  let max = 1;
  let counter = new Map();

  counter.set(s[r], 1);

  while (r < s.length - 1) {
    r++;
    if (counter.get(s[r])) {
      counter.set(s[r], counter.get(s[r]) + 1);
    } else {
      counter.set(s[r], 1);
    }

    while (counter.get(s[r]) === 3) {
      counter.set(s[l], counter.get(s[l]) - 1);
      l++;
    }
    max = Math.max(max, r - l + 1);
  }

  return max;
}
