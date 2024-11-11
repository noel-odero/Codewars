function removeSmallest(numbers) {
    if (numbers.length === 0) return [];

    // Find the index of the smallest number
    const smallestIndex = numbers.indexOf(Math.min(...numbers));

    // Return a new array excluding the smallest number at `smallestIndex`
    return numbers.filter((num, index) => index !== smallestIndex);
  }