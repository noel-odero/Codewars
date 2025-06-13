function words(base_n, max) {
​
  const digitWords = base_n;
​
​
  function toBaseN(num, base) {
    if (num === 0) return [0];
    const digits = [];
    while (num > 0) {
      digits.unshift(num % base); 
      num = Math.floor(num / base);
    }
    return digits;
  }
​
  const baseNDigits = toBaseN(max, base_n);
  const numDigits = baseNDigits.length;
​
​
  const placeValueWords = Math.max(0, numDigits - 1);
​
  return digitWords + placeValueWords;
}
​