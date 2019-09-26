function purchaseItems(arr) {
  arr.forEach(e => {
    // substring of items that are sales tax exempt
    const salesTaxExempt = [
      "book",
      "chocolate bar",
      "imported box of chocolates",
      "box of imported chocolates",
      "packet of headache pills"
    ];
    //  check if item string includes the word imported
    if (e.item.includes("imported")) {
      console.log(`This ${e.item} is imported`);
      // check if the imported item is sales tax exempt
      if (salesTaxExempt.some(substring => e.item.includes(substring))) {
        console.log(`This ${e.item} is tax exempt`);
        console.log(e.price);
        console.log(getTax(e, 0.05));
      } else {
        console.log(`This ${e.item} is taxable`);
        console.log(e.price);
        console.log(getTax(e, 0.15));
      }
    } else {
      if (salesTaxExempt.some(substring => e.item.includes(substring))) {
        console.log(`This ${e.item} is tax exempt`);
        console.log(e.price);
        console.log(getTax(e, 0));
      } else {
        console.log(`This ${e.item} is taxable`);
        console.log(e.price);
        console.log(getTax(e, 0.1));
      }
    }
  });
}

// function Round to nearest .05
roundToNearestHund = num => {
  const result = (Math.ceil(num * 20 - 0.4) / 20).toFixed(2);
  return result;
};

// function that applies tax accordingly
getTax = (item, taxRate) => {
  // calc tax
  const calcTax = roundToNearestHund(item.price * taxRate);
  console.log("calcTax", calcTax, "item.price", item.price);
  const result = Number(calcTax) + Number(item.price);
  return [result.toFixed(2), calcTax];
};

const input1 = [
  { item: "book", qty: 1, price: 12.49 },
  { item: "music", qty: 1, price: 14.99 },
  { item: "chocolate bar", qty: 1, price: 0.85 }
];

const input2 = [
  { item: "imported box of chocolates", qty: 1, price: 10.0 },
  { item: "imported bottle of perfume", qty: 1, price: 47.5 }
];

const input3 = [
  { item: "imported bottle of perfume", qty: 1, price: 27.99 },
  { item: "bottle of perfume", qty: 1, price: 18.99 },
  { item: "packet of headache pills", qty: 1, price: 9.75 },
  { item: "box of imported chocolates", qty: 1, price: 11.25 }
];

purchaseItems(input1);

module.exports = purchaseItems;
