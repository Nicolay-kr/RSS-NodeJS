const fs = require("fs");

function createError(err) {
    if (err) {
      process.stderr.write(err.message + "\n");
      process.exit(1);
    }
  }

  module.exports = function validateComands(action,shift,input,output) {
    if (action === null) {
        createError(new Error("Error: -a or --action is required!"));
      }
      if (shift === null) {
        createError(new Error("Error: -s or --shift is required!"));
      }
      if (input) {
        fs.access(input, fs.constants.R_OK, (err) =>
          createError(
            err ? new Error(`error: ${input} is not readable`) : err
          )
        );
      }
      if (!fs.existsSync(input) && !!input) {
        createError(new Error(`Error: "${input}" is a wrong path to file`));
      }
      
      if (!fs.existsSync(output) && !!output) {
        console.error(`Error: "${output}" is a wrong path to output file`);
        process.exit(1);
      }
      
      if (output) {
        fs.access(output, fs.constants.W_OK, (err) =>
        createError(err ? new Error(`error: ${output} is not readable`) : err)
        );
      }

  }
  