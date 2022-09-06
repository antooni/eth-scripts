import { ethers } from "ethers";
import fetch from "node-fetch";

require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC);

  const address = process.argv[2];

  const response = await fetch(
    "https://api.etherscan.io/api?module=contract&action=getcontractcreation&contractaddresses=" +
      address +
      "&apikey=" +
      process.env.ETHERSCAN_KEY
  );
  const data = await response.json();

  const txHash = data.result[0].txHash;

  const tx = await provider.getTransaction(txHash);

  const blockNumber = tx.blockNumber;

  const block = await provider.getBlock(blockNumber);

  console.log(block.timestamp);
}

main();
