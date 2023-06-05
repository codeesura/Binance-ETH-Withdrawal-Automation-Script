# Binance ETH Withdrawal Automation Script

This script allows you to automatically send Ethereum (ETH) to a set of addresses from your Binance account. It uses the [CCXT](https://github.com/ccxt/ccxt) cryptocurrency trading library to interact with Binance's API.

## Installation

Before you can use the script, you need to install Node.js and the CCXT library. To install CCXT, run:

```bash
npm install ccxt
```

## Configuration

You need to set two environment variables:

- `BINANCE_API_KEY`: Your Binance API key.
- `BINANCE_API_SECRET`: Your Binance API secret.
These values are used to authenticate with Binance's API.

You should set these values in your environment or use a .env file and the dotenv package to load them when the script starts.

## Usage

The script will read the addresses and amounts from the addressAmounts object in the script. You should modify this object to contain the addresses and amounts you want to withdraw.

The sleep function adds a delay between each withdrawal to avoid hitting Binance's rate limit. If you want to adjust the delay, you can modify the waitTime variable.

To run the script, use:

```bash
node script.js
```

Where `script.js` is the name of the file containing the script.

## Error Handling

The script has basic error handling: if a withdrawal fails, it will retry up to 3 times. If it still fails after 3 attempts, it will log an error message and move on to the next address.

## Disclaimer

Use this script at your own risk. You are responsible for any transactions made by this script. Always check the addresses and amounts before running the script.


