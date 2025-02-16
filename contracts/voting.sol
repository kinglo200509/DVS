// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Voting {
    struct Candidate {
        string name;
        uint256 votes;
    }

    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;

    constructor(string[] memory candidateNames) {
        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate({name: candidateNames[i], votes: 0}));
        }
    }

    function voteForCandidate(uint256 candidateId) public {

    require(candidateId >= 0, "Invalid candidate ID"); // Ensures positive ID
        require(!hasVoted[msg.sender], "You have already voted");

        candidates[candidateId].votes += 1;
        hasVoted[msg.sender] = true;
    }

    function getCandidateVotes(uint256 candidateId) public view returns (uint256) {
        require(candidateId < candidates.length, "Invalid candidate ID");
        return candidates[candidateId].votes;
    }
}
