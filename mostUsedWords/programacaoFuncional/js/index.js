const path = require("path");
const fn = require("./functions");

const route = path.join(__dirname, "..", "data");

const symbol = [
  ".",
  "?",
  "-",
  ",",
  ",,",
  ",,,",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
  "</font>",
];

fn.readDirectory(route)
  .then((files) => fn.elementsEndingWith(files, ".srt"))
  .then(fn.readFiles)
  .then(fn.convertToString)
  .then(fn.convertToArrayString)
  .then(fn.removeEmptyLines)
  .then((array) => fn.removeArrows(array, "-->"))
  .then(fn.removeElementsIfOnlyNumbers)
  .then(fn.removeSymbols(symbol))
  .then(console.log);
