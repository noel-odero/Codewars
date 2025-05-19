function colourful(number) {
//   263
  let numArr = number.toString().split('').map(Number)
  let finalArr = []
  
  for(let i = 0; i < numArr.length; i++){
    let product = 1
    
    for(let j = i; j< numArr.length; j++){
      product *= numArr[j]
      finalArr.push(product)
    }
  }
  
  for(num of finalArr){
    if(finalArr.indexOf(num) !== finalArr.lastIndexOf(num)){
      return false
    }
  }
  return true
}