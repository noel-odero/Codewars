function isOpposite(s1,s2){
  if (s1.length == 0 || s2.length == 0)return false
  if (s1.length !== s2.length) return false
  
  for(let i = 0; i < s1.length; i++){
    if (s1[i].toLowerCase() !== s2[i].toLowerCase()) return false;
    if (s1[i] === s2[i]) return false; 
  }
  
  return true
  
}