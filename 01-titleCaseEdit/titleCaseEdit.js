function titleCaseEdit(title) {
  const words = title.split(" ");
  for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  s = words.join(" ");
  return s;
}
// Do not edit this line;
module.exports = titleCaseEdit;