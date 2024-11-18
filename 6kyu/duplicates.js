// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string
function duplicateCount(text) {
  let textArray = text.toLowerCase().split("");
  let count = 0;
  let duplicates = [];
  textArray.forEach((char, index) => {
    if (textArray.indexOf(char) !== index && !duplicates.includes(char)) {
      count++;
      duplicates.push(char);
    }
  });
  return count;
}