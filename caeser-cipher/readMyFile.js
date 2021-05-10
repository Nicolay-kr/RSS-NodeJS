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
  

module.exports = function readMyFile(mode, file, shift, output=false) {
  const option = {};
  const read = fs.createReadStream(`${file}`, option);
  read.on("data", (chank) => {
    const succes = chalk.green.bold(`message is ${mode}d`);
    const msgBox = boxen(succes, boxenOptions);
    const encodeArr = [];
    const arr = chank.toString().split("");
    for (let i in arr) {
      encodeArr.push(
        mode === "encode" ? encoder(arr[i], shift) : decoder(arr[i], shift)
      );
    }
    if (output) {
      const write = fs.createWriteStream(`${output}`, {
        flags: 'a',
      });
      write.write(encodeArr.join(""));
      console.log(msgBox);
    } else {
      console.log(msgBox);
      process.stdout.write(encodeArr.join(""));
    }
  });
};
