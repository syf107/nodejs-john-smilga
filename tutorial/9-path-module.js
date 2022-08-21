const path = require("path");

// path.sep will show the separator in your os, platform.
console.log(path.sep);

// path.join will show the full path of the file.
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// path.basename will give the base of the file from the filePath
const base = path.basename(filePath);
console.log(base);

// path.resolve will return the absolute path.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);
