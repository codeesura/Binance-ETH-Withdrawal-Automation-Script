const ccxt = require('ccxt');

(async function () {
  const binance = new ccxt.binance({ 
    apiKey: process.env.BINANCE_API_KEY, 
    secret: process.env.BINANCE_API_SECRET 
  });
  
  const network = 'ETH';

  const addressAmounts = {
    '0x12345': 0.01,
    '0x67891': 0.02,
    // .... wallets
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const MAX_RETRIES = 3;

  for (const [address, amount] of Object.entries(addressAmounts)) {
    let retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        let withdraw = await binance.withdraw('ETH', amount, address, tag = undefined, params = { 'network': network });
        console.log(withdraw);

        let waitTime = Math.floor((Math.random() * (2 - 1) + 1) * 60 * 60 * 1000);
        await sleep(waitTime);

        // exit the loop if the withdrawal was successful
        break;
      } catch (e) {
        console.error(`Error while trying to withdraw to ${address}. Attempt number ${retries + 1}. Error:`, e);

        retries++;
        if (retries === MAX_RETRIES) {
          console.error(`Failed to withdraw after ${MAX_RETRIES} attempts.`);
        }
      }
    }
  }
})();

