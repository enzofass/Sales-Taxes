const {
  purchaseItems,
  roundToNearestHund,
  applyTax,
  getCount
} = require("../app");

describe("roundToNearestHund", () => {
  test("accepts a number and rounds to nearest .05", () => {
    const roundNum = roundToNearestHund(1.57);
    expect(roundNum).toEqual(1.60);
  });
});

describe("applyTax", () => {
  test("accepts a number and rounds to nearest .05", () => {
    const roundNum = roundToNearestHund(1.57);
    expect(roundNum).toEqual(1.60);
  });
});

describe("roundToNearestHund", () => {
  test("accepts a number and rounds to nearest .05", () => {
    const roundNum = roundToNearestHund(1.57);
    expect(roundNum).toEqual(1.60);
  });
});

describe("purchaseItems", () => {
  test("accepts an array of item objects and applies tax when nessesary", () => {
    const output1 = [
      { item: "book", qty: 1, price: 12.49 },
      { item: "music", qty: 1, price: 16.49 },
      { item: "chocolate bar", qty: 1, price: 0.85 },
      { salesTax: 1.5, total: 29.83 }
    ];
    expect(output1);
  });
});

