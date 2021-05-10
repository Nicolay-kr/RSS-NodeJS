const fs = require("fs");
const { Command, action } = require("commander");
const readMyFile = require("./readMyFile");
const readStdin = require("./readStdin");
const validateComands = require("./validateComands");

const program = new Command();
program.version("0.0.1");

program
  .requiredOption("-a, --action <type>", "an action encode/decode", null)
  .requiredOption("-s, --shift <type>", "a shift", null)
  .option("-i, --input <type>", "an input file")
  .option("-o, --output <type>", "an output file");

program.parse();

const options = program.opts();
validateComands(options.action, options.shift, options.input, options.output);

if (options.shift && options.input)
  readMyFile(options.action, options.input, options.shift, options.output);
if (options.shift && !options.input) {
  console.log("Please type the text")
  let inputString = "";
  process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
    if (inputString) {
      readStdin(
        options.action,
        inputString.toString().trim(),
        options.shift,
        options.output
      );
      process.exit();
    }
  });
}
