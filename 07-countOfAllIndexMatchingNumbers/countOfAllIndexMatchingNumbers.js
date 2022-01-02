function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == i){
      count++
    }
  }
  return count;
}
/*Note : The markdown file says countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77]) would output 2, put is it not 3 values
with the same index?
*/
// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;