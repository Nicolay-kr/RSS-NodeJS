const alphabet = require("./alphabet.js");
module.exports = function decoder(letter, shift) {
    while (shift > alphabet.length - 1) {
      shift -= alphabet.length - 1;
    }
  
    const isUpper = letter === letter.toUpperCase();
    letter = isUpper ? letter.toLowerCase() : letter;
    let index = alphabet.findIndex((item) => item === letter);
    //   console.log(index);
  
    if (index !== -1) {
      let newIndex = +index + +shift;
      if (newIndex > alphabet.length - 1) {
        newIndex = alphabet.length + +shift - alphabet.length - 1;
        //   console.log(newIndex);
        //   console.log(alphabet[newIndex]);
      }
      return isUpper ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
    } else {
      // console.log(letter);
      return letter;
    }
  }