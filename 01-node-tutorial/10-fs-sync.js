// you first call the module and destructure it to read and write variable
const { readFileSync, writeFileSync } = require("fs");

console.log("start");

// in this, you create variables that read and store it what's within the file you intended.
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// this writeFileSync, if there isn't any files, will create the new one with the first argument as the location and name of file,
// the second argument is the things you want to put.
// if there is a similar file, this file running will rewrite the olderone.
// the third argument, is the { flag: "a"} means append, you will add the content from the previous one.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} and ${second}`,
  { flag: "a" }
);

console.log("done  with the task.");
console.log("starting the next one.");
