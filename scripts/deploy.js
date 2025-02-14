const { ethers } = require("hardhat");

async function main() {
  // creating an instance
  const voting = await ethers.getContractFactory("voting");

  // deploying
  const voting_deploy = await voting.deploy();

  // waiting for the deployment
  await voting_deploy.waitForDeployment()

  const addressConract = await voting_deploy.getAddress()
  console.log("contract address : ",addressConract);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
