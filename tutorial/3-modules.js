// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(data);
console.log(data.items);
console.log(data.singlePerson.name);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
