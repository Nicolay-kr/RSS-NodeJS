
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const encoder = require("./encoder");
const decoder = require("./decoder");
const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555",
  };
  
module.exports = function readStdin(mode, text, shift,output=false) {
    const option = {};
    const succes = chalk.green.bold(`message is ${mode}d`);
    const msgBox = boxen(succes, boxenOptions);
    const encodeArr = [];
    const arr = text.split("");
  
    for (let i in arr) {
      encodeArr.push(
        mode === "encode" ? encoder(arr[i], shift) : decoder(arr[i], shift)
      );
    }
    if (output) {
      fs.writeFileSync(`${output}`, encodeArr.join(""),{
        flag: 'a',
      });
      console.log(msgBox);
    } else {
      console.log(msgBox);
      process.stdout.write(encodeArr.join(""));
    }
  }