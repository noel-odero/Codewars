function findAverage(array) {
    if(array.length > 0){
      let sum = array.reduce((a, b) => a + b, 0);
      return sum / array.length
    } else {
      return 0;
    }

   }