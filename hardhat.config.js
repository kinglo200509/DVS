require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("dotenv").config()


const privateKey = process.env.Holesky_PRIVATEKEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
      holesky:{
        url: "https://eth-holesky.g.alchemy.com/v2/Y5ubydss7pb6AmVDMptzIL90cIFA6R8j",
        accounts:[privateKey]
      }
  }
};
