function coinChange(coins, amount) {
  let dpMinCoins = new Array(amount + 1).fill(Infinity);

  dpMinCoins[0] = 0;

  for (let i = 1; i < dpMinCoins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coinValue = coins[j];
      if (coinValue <= j) {
        dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i]);
      }
    }
  }

  const answer = dpMinCoins[dpMinCoins.length - 1];

  return answer;
}

module.exports = coinChange;
