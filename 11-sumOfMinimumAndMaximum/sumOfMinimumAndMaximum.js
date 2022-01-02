function sumOfMinimumAndMaximum(nums) {
  sum = Math.min.apply(Math, nums) + Math.max.apply(Math, nums);
  return sum;
}
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;