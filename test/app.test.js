const { purchaseItems, roundToNearestHund, applyTax } = require("../app");

describe("roundToNearestHund", () => {
  test("accepts a number and rounds to nearest .05", () => {
    const roundNum = roundToNearestHund(1.57);
    expect(roundNum).toEqual(1.6);
  });
});

describe("applyTax", () => {
  test("accepts a item object and tax rate, calcalutes tax bases on price", () => {
    const tr = 0.1;
    const at = applyTax({ item: "music", qty: 1, price: 14.99 }, tr);
    const outObj = { salesTax: 1.5, total: 16.49 };
    expect(at).toEqual(outObj);
  });
});

xdescribe("purchaseItems", () => {
  test("accepts an array of item objects and applies tax when nessesary", () => {
    const arr = [
      { item: "book", qty: 1, price: 12.49 },
      { item: "music", qty: 1, price: 14.99 },
      { item: "chocolate bar", qty: 1, price: 0.85 }
    ];
    const output1 = [
      { item: "book", qty: 1, price: 12.49 },
      { item: "music", qty: 1, price: 16.49 },
      { item: "chocolate bar", qty: 1, price: 0.85 },
      { salesTax: 1.5, total: 29.83 }
    ];
    const pi = purchaseItems(arr);
    expect(pi).toEqual(output1);
  });
});
