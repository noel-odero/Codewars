function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let squareRoot = Math.sqrt(sq);

  //   if(Number.isInteger(squareRoot)){
  //     return (squareRoot + 1) ** 2
  //   } else {
  //     return -1
  //   }

   return  Number.isInteger(squareRoot) ?( squareRoot + 1) ** 2 : -1

   }