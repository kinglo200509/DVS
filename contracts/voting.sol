// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
import "hardhat/console.sol";

contract voting {
    // creating a struct
    struct  candidate {
        string name;
        uint256 id;
        uint256 votes;
    }
    // creating an array of candidates , getter function
    candidate[] public candidates;

    // owner
    address owner;

    constructor(){
        owner = msg.sender;
    }

    // function -list of candidates
    function addCandidates(string memory name_, uint256 id_ , uint256 vote_) public  {
        candidates.push(candidate({name: name_, id: id_ , votes:vote_}));
    }   
    
    // function for displaying the ecandidates
    function displayCandidates(uint256 arrayId_) public view returns (string memory candidateName) {
        require(arrayId_ < candidates.length, "The number requested is wrong");
        candidateName = candidates[arrayId_].name;
        return (candidateName);
    }

    // vote for the candidate
    function voteForCandidate(uint256 arrayId_) public  {
        require(arrayId_ < candidates.length, "This is cnadidate is not available");
        candidates[arrayId_].votes +=1;
    }

    // display Votes
    function displayVotesOfCandidate(uint256 arrayId_) public view returns(uint256){
        return(candidates[arrayId_].votes);
    }

    // 
    
}
