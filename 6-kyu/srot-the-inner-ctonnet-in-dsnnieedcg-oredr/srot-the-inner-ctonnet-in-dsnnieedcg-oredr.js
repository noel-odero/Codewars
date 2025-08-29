function sortTheInnerContent(words){
  let newArr = words.split(" ")
  let finalArr = []
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].length <= 3){
      finalArr.push(newArr[i])
      continue;
    }
    let first = newArr[i][0]
    let last = newArr[i][newArr[i].length - 1]
    let middle = newArr[i].slice(1, -1)
    
    const sortedMiddle = middle.split("").sort((a, b) => b.localeCompare(a)).join("")
    
    finalArr.push(first + sortedMiddle + last)
  }
  
  return finalArr.join(" ")
}