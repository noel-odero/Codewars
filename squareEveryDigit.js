function squareDigits(num){
    // Converting  number to string
       let numToString = num.toString();
       let result = '';

    // iterating through each dgt

      for (let i = 0; i < numToString.length; i++) {

    //squaring the dgt and returning back to string for concatenation
           let digit = parseInt(numToString[i]);
           let squared = digit * digit;
           result += squared.toString();
       }

       // Return the concatenated squared digits as a number
       return parseInt(result);
   }