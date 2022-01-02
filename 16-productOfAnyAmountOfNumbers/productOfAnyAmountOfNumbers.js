function productOfAnyAmountOfNumbers(...args) {
  total = args[0];
  for(let i = 1; i < args.length; i++){
    total *= args[i];
  }
  return total;
}
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;