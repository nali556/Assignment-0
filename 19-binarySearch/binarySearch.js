class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    for(var i = 0; i < nums.length; i++){
      if(nums[i] === target){
        this.flag = true;
      }
    }
    return this.flag;
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;