#!/usr/bin/env node
const open = require("open");
const chalk = require("chalk");

function space() {
  console.log("\n");
}

// SEARCH PROMPTS: This function will be called if user has not passed any search arguments when calling the package
function searchPrompt() {
  const input = [];
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.setPrompt(chalk.blue.bgBlack.bold(`What do you want to search?:  `));
  readline.prompt();
  readline.on("line", function (search) {
    input.push(search);
    readline.close();
  });
  readline.on("close", function (search) {
    const args = input.join("\n");
    if (args.length <= 0) {
      space();
      console.log(chalk.redBright.bold("No search term found!"));
      space();
    } else {
      space();
      console.log(chalk.blue.bgBlack.bold(`Searching for "${args}" on Google`));
      space();
      open(`https://www.google.com/search?q=${args}`);
      process.exit(0);
    }
  });
}

// MAIN FUNCTION
function main() {
  // get all the arguments
  const args = process.argv.slice(2).join(" ");
  if (args.length <= 0) {
    searchPrompt();
  } else {
    space();
    console.log(chalk.blue.bgBlack.bold(`Searching for "${args}" on Google`));
    space();
    open(`https://www.google.com/search?q=${args}`);
  }
}

if (require.main === module) {
  main();
}
