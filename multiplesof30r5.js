function solution(number){
    let sum = 0;

      // Iterate through all numbers below number
      for (let i = 1; i < number; i++) {
          // Check if the number is a multiple of 3 or 5
          if (i % 3 === 0 || i % 5 === 0) {
              sum += i; // Add the number to the sum if it meets the criteria
          }
      }

      return sum;

  }