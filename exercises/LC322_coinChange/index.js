function coinChange(coins, amount) {
  let dpMinCoins = new Array(amount + 1).fill(Infinity);

  dpMinCoins[0] = 0;

  for (let i = 1; i < dpMinCoins.length; i++) {}
}

module.exports = coinChange;
