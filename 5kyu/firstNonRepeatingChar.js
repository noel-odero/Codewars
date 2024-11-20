// function firstNonRepeatingLetter(s) {
//     let lowerStr = s.toLowerCase();
//     let charCounts = {};

//     for (const char of lowerStr) {
//     charCounts[char] = (charCounts[char] || 0) + 1;
//   }
//     for(let i = 0; i<s.length; i++){

//     }
// }



function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for(let i = 0; i<str.length; i++){
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        return s[i]
      }

    }
    return ''
  }