\# Assignment 5: DAO Smart Contract



Name: Sakshi Khairnar

PRN: 123B1B050



\## Objective



To implement a simple DAO (Decentralized Autonomous Organization) smart contract with proposal creation and voting.



\## Smart Contract Features



\### Proposal Creation



\* Users can create proposals with a description

\* Stored on blockchain in an array



\### Voting Mechanism



\* Each user can vote only once per proposal

\* Votes are counted using voteCount

\* Mapping ensures no double voting



\### Execution steps 



\* Proposal can be marked as executed

\* Prevents re-execution



\## Workflow of DAO



1\. User creates proposal

2\. Other users vote on proposal

3\. Votes are counted

4\. Proposal is executed



\## Functions



\* createProposal(string)

\* vote(uint proposalId)

\* execute(uint proposalId)

\* getProposalCount()



\## Output



\* Proposal created successfully

\* Voting recorded

\* Proposal executed



