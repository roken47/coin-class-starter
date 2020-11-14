class Coin {
  constructor(initialState) {
    this.state = initialState;
  }
  flip() {
    if (this.state === 0) {
      console.log("You flipped a tails! --flip called--");
    } else console.log("You flipped a heads! --flip called--");
  }
  toString() {
    if (this.state === 0) {
      console.log("Thanks for flipping, a tails! --toString called--");
    } else console.log("Thanks for flipping, a heads! --toString called--");
  }
  toHTML() {
    if (this.state === 0) {
      console.log("Woo, Woo! Tails --toHTML called--");
    } else console.log("Woo, Woo! Heads --toHTML called--");
  }
}
