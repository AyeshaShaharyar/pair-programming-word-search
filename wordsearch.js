const wordSearch = (letters, word) => {
    if(letters.length === 0){
        return ([]);
    }
  //vertical
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      const verticalArray = letters[0].map((col, cindex) =>
        letters.map((col) => col[cindex])
      );
      const verticalJoin = verticalArray.map((ls) => ls.join(""));
      for (l of verticalJoin) {
        if (l.includes(word)) return true;
      }
    }
  }
  return false;
};


module.exports = wordSearch;
