function frequencyCounter(word) {
const counts = {};
for(const num of word){
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
return counts;
}
// Do not edit this line;
module.exports = frequencyCounter;