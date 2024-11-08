function sumTwoSmallestNumbers(numbers) {
    let newArr = numbers.sort((a, b) => a - b);
    return newArr[0] + newArr[1];
  }