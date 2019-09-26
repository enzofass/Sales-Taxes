const sum = require("../app");

describe("sum", () => {
  test("tells a gigasecond anniversary since midnight", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
