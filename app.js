function purchaseItems(arr) {
  arr.forEach(e => {
    const taxExempt = [
      "book",
      "chocolate bar",
      "imported box of chocolates",
      "packet of headache pills"
    ];
    if (e.item.includes("imported")) {
      console.log(`This ${e.item} is imported`);
      if (taxExempt.some(substring => e.item.includes(substring))) {
        console.log(`This ${e.item} is tax exempt`);
        console.log(e.price);
        e.price += e.price * 0.05;
        console.log(e.price);
      } else {
        console.log(`This ${e.item} is taxable`);
        console.log(e.price);
        e.price += e.price * 0.15;
        console.log(e.price);
      }
    } else {
      if (taxExempt.some(substring => e.item.includes(substring))) {
        console.log(`This ${e.item} is tax exempt`);
      } else {
        console.log(`This ${e.item} is taxable`);
        console.log(e.price);
        e.price += e.price * 0.1;
        console.log(e.price);
      }
    }
  });
}

// Round to nearest .05
// (Math.ceil(number*20)/20).toFixed(2)

const input1 = [
  { item: "book", qty: 1, price: 12.49 },
  { item: "music", qty: 1, price: 12.49 },
  { item: "chocolate bar", qty: 1, price: 0.85 }
];

const input2 = [
  { item: "imported box of chocolates", qty: 1, price: 10.0 },
  { item: "imported bottle of perfume", qty: 1, price: 47.5 }
];

purchaseItems(input2);

module.exports = purchaseItems;
