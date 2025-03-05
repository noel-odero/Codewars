// function findShort(s){
//     let newArr = s.split(" ")
//     let sortedArr = newArr.sort((a,b) => a.length - b.length)
    
//     return sortedArr[0].length
//   }
​
​
const findShort = (s) => {
  return (s.split(" ").sort((a,b) => a.length - b.length))[0].length
}