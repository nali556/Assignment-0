function setUnionOfAnyAmountOfSets(...args) {
 var unionSet = new Set();
 for(let i = 0; i < args.length; i++){
    for(var val of args){
        unionSet.add(val);
    }
}
 return unionSet;
}
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;