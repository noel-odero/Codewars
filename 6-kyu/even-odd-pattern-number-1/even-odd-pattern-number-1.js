function EvenOdd(arr){
   return arr.reduce((acc, curr, i) => i % 2 == 1 ? acc * curr: acc + curr )
​
}