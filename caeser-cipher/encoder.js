const alphabet = require("./alphabet.js");
module.exports = function encoder(letter, shift) {
    while (shift > alphabet.length - 1) {
      shift -= alphabet.length - 1;
    }
    //   console.log(shift);
  
    const isUpper = letter === letter.toUpperCase();
    letter = isUpper ? letter.toLowerCase() : letter;
    let index = alphabet.findIndex((item) => item === letter);
  
    if (index !== -1) {
      let newIndex = index - shift;
      // console.log(newIndex);
      if (newIndex < 0) {
        newIndex = alphabet.length + +newIndex;
      }
      return isUpper ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
    } else {
      return letter;
    }
  }