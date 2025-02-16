const { ethers } = require("hardhat");

async function main() {
  // Define candidate names
  const candidateNames = ["Alice", "Bob", "Charlie"];

  // Get the contract factory
  const Voting = await ethers.getContractFactory("Voting");

  // Deploy the contract with candidate names as an argument
  const votingDeploy = await Voting.deploy(candidateNames);

  // Wait for deployment
  await votingDeploy.waitForDeployment();

  const contractAddress = await votingDeploy.getAddress();
  console.log("Contract deployed at:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  