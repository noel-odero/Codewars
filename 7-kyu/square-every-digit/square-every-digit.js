function squareDigits(num){
  let newArr = num.toString().split("").map(digit => Math.pow(Number(digit), 2)).join("")
  return parseInt(newArr)
}