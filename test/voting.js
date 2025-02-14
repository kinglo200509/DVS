const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("voting", function () {
  let Voting, voting;
  // before each it create an instance of the contract
  beforeEach(async () => {
    Voting = await ethers.getContractFactory("voting");
    voting = await Voting.deploy();
    // waiting
    await voting.waitForDeployment();
  });

  // take and display th ecnadidate details
  it("should add candidates and retrieve them correctly", async function () {
    // Adding a candidate
    const addedCandidate = await voting.addCandidates("saswat", 0, 0);
    // wil give the entire transaction
    console.log("This is the added candidate:", addedCandidate);
    
    // Accessing the candidate using the getter
    const candidate = await voting.candidates(0); // Use index to access
    console.log("Candidate Struct:", candidate);
    
    // Extract candidate details
    const candidateName = candidate.name;
    const candidateVotes = candidate.votes; // Convert BigNumber to a number
    
    // Assertions
    expect(candidateName).to.equal("saswat");
    expect(candidateVotes).to.equal(0);
  }); 
  
  it("Take and display votes of cnadidate", async function () {
    const addedCandidate = await voting.addCandidates("saswat", 0, 0);
    const addedCandidate_1 = await voting.addCandidates("pokemon", 1, 2);
    // taking the candidate vote
    const voteCandidate =await  voting.voteForCandidate(1);
    // displaying the candidate vote
    const displayVote =await voting.displayVotesOfCandidate(1);
    console.log("this is the current vote of the cnadidate : ",displayVote);

    expect(displayVote).to.be.equal(3)
  });
});
