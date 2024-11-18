function solution(str){
    let splitStr = []
    for(let i=0; i<str.length; i+=2){

    let pair = str[i] + (str[i + 1] || '_');
      splitStr.push(pair);
    }
    return splitStr;

  }
  