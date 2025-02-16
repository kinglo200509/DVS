# Hardhat Voting System

This project is a decentralized voting system built using Solidity and deployed using Hardhat. It allows users to vote for candidates in a blockchain-based election.

## Project Setup

### Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/) (for interacting with the blockchain)
- A supported Ethereum wallet

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your private key and RPC URL:
   ```sh
   INFURA_API_KEY=your_infura_key
   PRIVATE_KEY=your_wallet_private_key
   ```

## Running the Project

### Compile the Smart Contract

To compile the Solidity contracts, run:

```sh
npx hardhat compile
```

### Deploy the Smart Contract

To deploy the contract locally, first start a Hardhat local node:

```sh
npx hardhat node
```

Then deploy the contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

To deploy to a testnet (e.g., Holesky):

```sh
npx hardhat run scripts/deploy.js --network Holesky
```

### Running Tests

Run unit tests using:

```sh
npx hardhat test
```

## Interacting with the Voting System

### Voting for a Candidate

Use the following command to vote for a candidate (replace `candidateId` with the actual ID):

```sh
npx hardhat vote --candidate <candidateId> --network localhost
```

### Viewing Election Results

Check the current vote counts:

```sh
npx hardhat check-results --network localhost
```

## Troubleshooting

If you encounter issues:

- Ensure you are using the correct network.
- Check that your wallet has enough test ETH.
- Verify contract deployment using `npx hardhat console`.

## License

This project is licensed under the MIT License.

