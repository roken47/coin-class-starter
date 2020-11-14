const coinWithoutClass = {
  state: 0,

  flip: function () {
    console.log("coin.flip() has been invoked.");
  },

  toString: function () {
    console.log("coin.toString() has been invoked.");
  },

  toHTML: function () {
    let image = document.createElement("img");

    console.log("coin.toHTML() has been invoked.");

    return image;
  },
};

console.group("coinWithoutClass");
console.log(coinWithoutClass);
console.groupEnd();

const penny = new Coin(0);
const nickel = new Coin(1);
const dime = new Coin(0);
const quarter = new Coin(1);
const dollar = new Coin(0);

console.group("coinWithClass");
console.log(penny, nickel, dime, quarter, dollar);
console.log(penny.flip());
console.groupEnd();
