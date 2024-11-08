function squareSum(numbers){
    let doubled = numbers.map(num => num ** 2);
    return doubled.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)

  }