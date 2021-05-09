const chalk = require("chalk");
const boxen = require("boxen");
const alphabet =require("./alphabet.js")

const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};
const msgBox = boxen(greeting, boxenOptions);

// console.log(msgBox);


fs = require("fs");
fs.readFile("bin/input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data)
});
console.log(alphabet)