function lettersToNumbers(s) {
  const values = {};
​
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < lowercase.length; i++) {
    values[lowercase[i]] = i + 1;
  }
​
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < uppercase.length; i++) {
    values[uppercase[i]] = (i + 1) * 2;
  }
​
  const digits = "0123456789";
  for (let i = 0; i < digits.length; i++) {
    values[digits[i]] = i;
  }
​
  let total = 0;
  for (let ch of s) {
    total += values[ch] || 0;
  }
​
  return total;
}
​