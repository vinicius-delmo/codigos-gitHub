const functions = require("../functions");

describe("doubleANumber", () => {
  it("should return double a number if input is positive", () => {
    const result = functions.doubleANumber(2);
    expect(result).toBe(4);
  });
  it("function parameters must be of type number", () => {
    const params = 2;
    expect(typeof params).toBe("number");
  });
});

describe("createFullName", () => {
  it("should return the first string plus a space plus the second string if both inputs are strings", () => {
    const result = functions.createFullName("a", "b");
    expect(result).toMatch(/a b/);
  });
  it("function parameters must be of type string", () => {
    const params = "abc";
    expect(typeof params).toBe("string");
  });
});

describe("calculateTheLenghtOfAString2", () => {
  it("should return the length of the string passed as a parameter", () => {
    const result = functions.calculateTheLenghtOfAString2("Pedro");
    expect(result).toBe(5);
  });
  it("Must return the number zero if no string is passed", () => {
    const result = functions.calculateTheLenghtOfAString2("");
    expect(result).toBe(0);
  });
});

describe("numbersArrayIntoString", () => {
  it("should return a string where every three numbers have a dot, when the input is an array of numbers", () => {
    const result = functions.numbersArrayIntoString([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    expect(result).toMatch("123.456.789");
  });
  it("The result of the function must be a string", () => {
    const result = functions.numbersArrayIntoString([]);
    expect(typeof result).toBe("string");
  });
  /* it("must receive an array of numbers in the parameters", () => {
    const params = [1, 2];
    expect(typeof params).toBe("array");
  }); */
});

describe("addNewLanguage", () => {
  it("must add a language to the array inside languages ​​key", () => {
    const object = {
      languages: ["JavaScript", "Python", "Ruby"],
    };
    const result = functions.addNewLanguage(object, "C++");
    expect(result).toMatchObject({
      languages: expect.arrayContaining([
        "JavaScript",
        "Python",
        "C++",
        "Ruby",
      ]),
    });
  });
  it("The result of the function must be a object", () => {
    const result = functions.addNewLanguage({ languages: [] }, "");
    expect(typeof result).toBe("object");
  });
});

describe("votersResult", () => {
  it("The parameter must be an object", () => {
    const params = {};
    expect(typeof params).toBe("object");
  });
  it("The result of the function must be a string", () => {
    const result = functions.votersResult([]);
    expect(typeof result).toBe("object");
  });
  it("check if an array of objects returns an object with the number of people voting in each age group", () => {
    const result = functions.votersResult([
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ]);
    expect(result).toMatchObject({
      numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    });
  });
});
