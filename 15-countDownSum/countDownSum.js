class MySolution {
  countDownSum(num) {
    let sum = 0;
    for(let i = num; i > 0; i--){
      sum += i;
    }
    return sum;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;