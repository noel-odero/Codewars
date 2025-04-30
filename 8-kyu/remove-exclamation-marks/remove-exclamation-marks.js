function removeExclamationMarks(s) {
  let splitArr = s.split('');
  const newStr = []
  for (let i of splitArr){
    if(i !== "!") {
      newStr.push(i)
    }
  }
  return newStr.join("");
}