function pairSum(nums, target) {
  var sum = false;
  for(var i = 0; i < nums.length; i++){
      for(var j = 0; j < nums.length || i === j; j++){
          if(nums[i]+nums[j] === target){
              sum = true;
          }
      }
  }
  return sum;
}
// Do not edit this line;
module.exports = pairSum;