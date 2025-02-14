
export const contractAddress = '0x115E511F00b75B5413bC5b331AdC56F3c6Da2a0e';


export const ABI =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "id_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "vote_",
        "type": "uint256"
      }
    ],
    "name": "addCandidates",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "arrayId_",
        "type": "uint256"
      }
    ],
    "name": "displayCandidates",
    "outputs": [
      {
        "internalType": "string",
        "name": "candidateName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "arrayId_",
        "type": "uint256"
      }
    ],
    "name": "displayVotesOfCandidate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "arrayId_",
        "type": "uint256"
      }
    ],
    "name": "voteForCandidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const privateKey = '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e'