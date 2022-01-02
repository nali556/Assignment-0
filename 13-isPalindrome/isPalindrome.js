function isPalindrome(word) {
  word = word.toLowerCase();
  let reverse = '';
  for(let i = word.length - 1; i >= 0;i--){
    reverse += word[i];
  }
  if(word == reverse){
    return true;
  }
  else{ return false;}
}
// Do not edit this line;
module.exports = isPalindrome;