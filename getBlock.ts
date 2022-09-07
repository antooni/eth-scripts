import { ethers } from "ethers";
import fetch from "node-fetch";

require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC);

  const blockNumber = Number(process.argv[2]);

  const block = await provider.getBlock(blockNumber);

  console.log(block);
}

main();
