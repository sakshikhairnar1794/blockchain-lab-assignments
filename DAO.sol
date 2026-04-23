// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleDAO {

    struct Proposal {
        string description;
        uint voteCount;
        bool executed;
    }

    Proposal[] public proposals;

    mapping(uint => mapping(address => bool)) public hasVoted;

    // Create Proposal
    function createProposal(string memory _desc) public {
        proposals.push(Proposal({
            description: _desc,
            voteCount: 0,
            executed: false
        }));
    }

    // Vote on Proposal
    function vote(uint proposalId) public {
        require(!hasVoted[proposalId][msg.sender], "Already voted");

        proposals[proposalId].voteCount++;
        hasVoted[proposalId][msg.sender] = true;
    }

    // Execute Proposal
    function execute(uint proposalId) public {
        require(!proposals[proposalId].executed, "Already executed");

        proposals[proposalId].executed = true;
    }

    // Get Proposal Count
    function getProposalCount() public view returns(uint){
        return proposals.length;
    }
}