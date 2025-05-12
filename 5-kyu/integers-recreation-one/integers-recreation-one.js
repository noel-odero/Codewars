function listSquared(m, n) {
  
//   divisors
   function findDivisors(num){
     const divisors = [];
     for(let i = 1; i <= Math.sqrt(num); i++){
       if(num % i === 0){
         divisors.push(i);
         if(i !== num/i){
           divisors.push(num/i)
         }
       }
     }
     return divisors.reduce((a, b) => a + b*b, 0)
   }
  
//   perfect squares
  function perfect(num){
    return Math.sqrt(num) === Math.floor(Math.sqrt(num))
  }
  
  // asked condition
let result = [];
for (let i = m; i <= n; i++){
  const sumofSquares = findDivisors(i)
  if(perfect(sumofSquares)){
    result.push([i, sumofSquares])
  }
}
 return result
}
​
​
​
​