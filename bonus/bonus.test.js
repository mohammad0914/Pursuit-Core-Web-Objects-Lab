const { describe, test, expect } = require("@jest/globals");
const {
  catSpecies,
  giveCatColor,
  catTexture,
  objKeys,
  objKeys2,
  objValues,
  objValues2,
  findDirectors,
  fullNames,
  largestEarner,
  pairs,
  movieList,
  mostFreqWordGreaterThanFive,
  mostFreqWordGreaterThanLength,
  secondMostFrequentLetter,
} = require("./bonus.js");

describe("catSpecies", () => {
  test("returns the correct cat species", () => {
    expect(
      catSpecies({
        genus: "Felis",
        species: "Catus",
      })
    ).toBe("Catus");
  });
  expect(
    catSpecies({
      genus: "Felis",
      species: "Cool Cat",
    })
  ).toBe("Cool Cat");
});

describe("giveCatColor", () => {
  test("adds color to cat object", () => {
    const cat = {
      genus: "Felis",
      species: "Catus",
    };
    const res = giveCatColor(cat, "orange");
    expect(res).toBe(cat);
    expect(cat["color"]).toBe("orange");
    const cat2 = {
      genus: "Felis",
      species: "Catus",
    };
    const res = giveCatColor(cat2, "purple");
    expect(res).toBe(cat2);
    expect(cat2["color"]).toBe("purple");
  });
});

describe("catTexture", () => {
  test("returns cat texture when property exists", () => {
    expect(
      catTexture({
        name: "Noboru",
        texture: "smooth",
      }).toBe("smooth")
    );
    expect(
      catTexture({
        name: "Hatchiko",
        texture: "soft",
      }).toBe("soft")
    );
  });

  test("throws correct error when object contains on texture", () => {
    expect(() => {
      catTexture({
        name: "Noboru",
      });
    }).toThrow("Does not have texture property");
    expect(() => {
      catTexture({
        name: "Hatchiko",
      });
    }).toThrow("Does not have texture property");
  });
});

describe("objKeys", () => {
    test("returns all keys as an array", () => {
        expect(objKeys({
            name: "Biw",
            age: 29,
            eyes: "brown"
        })).toEqual(["name", "age", "eyes"])
        expect(
          objKeys({
            name: "Hatchiko",
            texture: "soft",
          })
        ).toEqual(["name", "texture"]);
    })

    test("does NOT use Object.keys", () => {
        const funcString = objKeys.toString();
        expect(funcString.includes("Object.keys")).toBe(false);
    })
});
describe("objKeys2", () => {
    test("returns all keys as an array", () => {
        expect(objKeys2({
            name: "Biw",
            age: 29,
            eyes: "brown"
        })).toEqual(["name", "age", "eyes"])
        expect(
          objKeys2({
            name: "Hatchiko",
            texture: "soft",
          })
        ).toEqual(["name", "texture"]);
    })

    test("MUST use Object.keys", () => {
        const funcString = objKeys2.toString();
        expect(funcString.includes("Object.keys")).toBe(true);
    })
});