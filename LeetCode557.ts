function reverseWords(s: string): string {
  let l = 0;
  let r = 0;
  let res = "";

  while (r <= s.length) {
    if (r < s.length && s[r] != " ") {
      r++;
    } else {
      for (let i = r - 1; i >= l; i--) {
        res += s[i];
      }
      if (r != s.length) {
        res += " ";
      }
      l = r + 1;
      r = l;
    }
  }

  return res;
}

console.log(reverseWords("Let's take LeetCode contest"));
