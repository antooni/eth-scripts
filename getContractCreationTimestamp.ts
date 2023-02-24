import { providers } from "ethers";
import fetch from "node-fetch";
import { getEnv } from "./getEnv";

require("dotenv").config();

async function main() {
  const provider = new providers.AlchemyProvider(
    "homestead",
    getEnv("ALCHEMY_API_KEY")
  );

  const address = process.argv[2];

  const response = await fetch(
    "https://api.etherscan.io/api?module=contract&action=getcontractcreation&contractaddresses=" +
      address +
      "&apikey=" +
      getEnv("ETHERSCAN_API_KEY")
  );
  const data = await response.json();

  const txHash = data.result[0].txHash;

  const tx = await provider.getTransaction(txHash);

  const blockNumber = tx.blockNumber;

  console.log("blockNumber", blockNumber);

  const block = await provider.getBlock(blockNumber);

  console.log("timestamp", block.timestamp);
}

main();
