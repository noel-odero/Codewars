function solution (roman) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
​
  let total = 0;
​
  for (let i = 0; i < roman.length; i++) {
    let curr = map[roman[i]];
    let next = map[roman[i + 1]];
​
    if (next && curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }
​
  return total;
}