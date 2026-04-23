\# Assignment 3: Web Interface + MetaMask



Name: Sakshi Khairnar

PRN: 123B1B050



\## Objective

To build a frontend interface that interacts with a smart contract deployed on the Polygon Amoy testnet using MetaMask.



\---



\## Contract Details



Contract Address:

0x6be65D73119188fEacF7ad1bc159CEf40d186357



Network:

Polygon Amoy Testnet



\---



\## How Frontend Connects to Blockchain



The frontend uses the ethers.js library to interact with the blockchain.



Steps:

1\. Detect MetaMask using window.ethereum

2\. Request user account access using eth\_requestAccounts

3\. Create provider using ethers.BrowserProvider

4\. Get signer (user wallet)

5\. Connect smart contract using contract address + ABI



\---



\## How MetaMask is Used



MetaMask acts as a wallet and transaction signer.



\- It connects user account to the frontend

\- It signs transactions like set()

\- It pays gas fees in POL tokens

\- It confirms transactions before sending



\---



\## Functionalities Implemented



1\. Connect Wallet

&#x20;  - Connects MetaMask to frontend



2\. Set Value

&#x20;  - Sends transaction to blockchain

&#x20;  - Stores value in contract



3\. Get Value

&#x20;  - Reads stored value from blockchain



\---



\## Screenshots



\### Wallet Connection

(Add screenshot: wallet-connection.png)



\### Transaction Execution

(Add screenshot: transaction.png)



\---



\## How to Run



1\. Open index.html using Live Server

2\. Install MetaMask extension

3\. Switch to Polygon Amoy network

4\. Click "Connect Wallet"

5\. Enter value and click "Set Value"

6\. Click "Get Value" to retrieve data



\---



\## Conclusion



Successfully built a decentralized application (DApp) that connects frontend with blockchain using MetaMask and interacts with a deployed smart contract.

