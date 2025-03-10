function isAlt(word) {
  let arr = ['a', 'e', 'i', 'o', 'u'];
  let wordArr = word.toLowerCase().split('');
​
  if (arr.includes(wordArr[0])) {
    for (let i = 2; i < wordArr.length; i += 2) {
      if (!arr.includes(wordArr[i])) return false; // vowels at even positions
    }
    for (let i = 1; i < wordArr.length; i += 2) {
      if (arr.includes(wordArr[i])) return false; // consonants at odd positions
    }
  } else {
    for (let i = 1; i < wordArr.length; i += 2) {
      if (!arr.includes(wordArr[i])) return false; // vowels at odd positions
    }
    for (let i = 0; i < wordArr.length; i += 2) {
      if (arr.includes(wordArr[i])) return false; // consonants at even positions
    }
  }
​
  return true;
}
​