/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
function contentWeight(bottleWeight, scale) {
  let splitScale = scale.split(' ');
  let quotient;
  let num = parseInt(splitScale[0])
//   ['2', 'times', 'larger']
  if(splitScale[2] == 'larger') {
    quotient = 1 + (1/num)
  } 
  if (splitScale[2] == 'smaller'){
    quotient = 1 + (num * 1)
  }
  
  return Math.ceil(bottleWeight / quotient)
​
}