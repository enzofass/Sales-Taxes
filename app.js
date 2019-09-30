purchaseItems = arr => {
  const itemizedReceipt = [];
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
      // check if the imported item is sales tax exempt
      if (salesTaxExempt.some(substring => e.item.includes(substring))) {
        itemizedReceipt.push(applyTax(e, 0.05));
      } else {
        itemizedReceipt.push(applyTax(e, 0.15));
      }
    }
    // if item is not imported check if tax exempt
    else {
      if (salesTaxExempt.some(substring => e.item.includes(substring))) {
        itemizedReceipt.push(applyTax(e, 0));
      } else {
        itemizedReceipt.push(applyTax(e, 0.1));
      }
    }
  });

  // call function that calculates totals
  getCount(itemizedReceipt);
  // Merge totals to array of item objects
  const output = arr.concat(totalTax);
  return console.log("Output:", output);
};

// function Round to nearest .05
roundToNearestHund = num => {
  const result = Number((Math.ceil(num * 20 - 0.4) / 20).toFixed(2));
  return result;
};

// function that applies tax accordingly
applyTax = (item, taxRate) => {
  // tax calucated
  const taxCalc = roundToNearestHund(item.price * taxRate);
  const result = Number(taxCalc) + Number(item.price);
  item.price = Number(result.toFixed(2));
  return { salesTax: taxCalc, total: item.price };
};

// Get itemized list of items and calcualte gran total and tax totals
getCount = itemizedReceipt => {
  itemizedReceipt.reduce((previousVal, currentVal) => {
    sumTax = Number(previousVal.salesTax) + Number(currentVal.salesTax);
    sumTotal = Number(previousVal.total) + Number(currentVal.total);
    return (totalTax = {
      salesTax: sumTax.toFixed(2),
      total: sumTotal.toFixed(2)
    });
  });
};

// inputs provided
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

// function executed to print receipt
purchaseItems(input1);
purchaseItems(input2);
purchaseItems(input3);

// export function
module.exports = { purchaseItems, roundToNearestHund, getCount, applyTax };
