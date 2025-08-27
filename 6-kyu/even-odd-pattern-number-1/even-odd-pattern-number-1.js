function EvenOdd(arr){
  if (arr.length == 0 ) return
  
  let number = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(i % 2 == 1){
      number *= arr[i]
    } else{
      number += arr[i]
    }
  }
  return number
​
}