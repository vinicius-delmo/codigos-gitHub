const fs = require("fs");
const path = require("path");

function readDirectory(route) {
  return new Promise((resolve, reject) => {
    const files = fs.readdirSync(route);
    const completedFiles = files.map((file) => path.join(route, file));
    resolve(completedFiles);
    reject(error);
  });
}

function elementsEndingWith(array, extesion) {
  return array.filter((elements) => elements.endsWith(extesion));
}

function readFile(route) {
  return new Promise((resolve, reject) => {
    const content = fs.readFileSync(route);
    resolve(content.toString());
    reject(error);
  });
}

function readFiles(routes) {
  return Promise.all(routes.map((route) => readFile(route)));
}

function convertToString(array) {
  return array.join("\n");
}

function convertToArrayString(array) {
  return array.split("\n");
}
function removeEmptyLines(array) {
  return array.filter((el) => el.trim());
}

function removeArrows(array, arrow) {
  return array.filter((element) => !element.includes(arrow));
}

function removeElementsIfOnlyNumbers(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removeSymbols(symbols) {
  return function (array) {
    return array.map((el) => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, el);
    });
  };
}

module.exports = {
  readDirectory,
  elementsEndingWith,
  readFiles,
  convertToString,
  convertToArrayString,
  removeArrows,
  removeEmptyLines,
  removeElementsIfOnlyNumbers,
  removeSymbols,
};
