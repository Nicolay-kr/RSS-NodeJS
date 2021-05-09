const chalk = require("chalk");
const boxen = require("boxen");
const alphabet = require("./alphabet.js");
const fs = require("fs");
const { Command } = require("commander");
// const { readFile } = require("node:fs");

const pathRead = "bin/input";
const pathWrite = "bin/output";
const option = {};

const program = new Command();
program.version("0.0.1");

const write = fs.createWriteStream(pathWrite, option);
const read = fs.createReadStream(pathRead, option);

const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};
// const msgBox = boxen(greeting, boxenOptions);

// console.log(msgBox);
function caesarCipher(letter, shift) {
  let index = alphabet.findIndex((item)=>item===letter);
  let newIndex = index - shift;
  if (newIndex < 0) {
    newIndex = alphabet.length - shift;
  }
  return alphabet[newIndex]
}

function readMyFile(mode, file, shift) {
  //   fs = require("fs");
  fs.readFile(`bin/${file}`, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    const encodeArr = []
    const arr = data.split("");
    for (let i in arr) {
      encodeArr.push(caesarCipher(arr[i],shift))

    }

    // return encodeArr.join("")
    fs.writeFile('bin/output', encodeArr.join(""), function (err) {
        if (err) return console.log(err);
        console.log('message is encoded');
      });

    // console.log(arr);

    // return data;
  });
}

program
  .requiredOption("-a, --action <type>", "an action encode/decode", "encode")
  .requiredOption("-s, --shift <type>", "a shift")
  .option("-i, --input <type>", "an input file")
  .option("-o, --output", "an output file");

program.parse();

const options = program.opts();
// console.log(program.opts().action)

if (options.action) console.log(options.action);
console.log("program start:");
if (options.shift && options.shift)
  readMyFile(options.action, options.input, options.shift);
// if (options.action) console.log(`- ${options.pizzaType}`);
