require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // Optimize bytecode
      },
    },
  },
  networks: {
    holesky: {
      url: process.env.HOLESKY_RPC_URL, // Use an Alchemy or Infura RPC URL
      accounts: [process.env.PRIVATE_KEY], // Your Ethereum private key
    },
  },
};
