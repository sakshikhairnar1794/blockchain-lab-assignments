// Global variables
let provider;
let signer;
let contract;

// 🔹 Replace with your deployed contract address (Sepolia)
const contractAddress = "0x867957d763c1122f6f08b9c5a03567bf6f997e26";

// 🔹 Minimal ABI (only required functions)
const abi = [
    "function setMessage(string memory _newMessage)",
    "function getMessage() view returns (string)"
];

//  Connect Wallet
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("Please install MetaMask");
            return;
        }

        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Create provider & signer
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();

        // Create contract instance
        contract = new ethers.Contract(contractAddress, abi, signer);

        // Get user address
        const account = await signer.getAddress();
        document.getElementById("account").innerText = "Connected: " + account;

        console.log("Wallet connected:", account);

    } catch (error) {
        console.error("Connection Error:", error);
    }
}

// Send Transaction (write to blockchain)
async function sendTransaction() {
    try {
        if (!contract) {
            alert("Please connect wallet first!");
            return;
        }

        const message = document.getElementById("messageInput").value;

        if (!message) {
            alert("Please enter product details");
            return;
        }

        console.log("Sending transaction...");

        const tx = await contract.setMessage(message);
        console.log("Transaction hash:", tx.hash);

        await tx.wait();

        alert("Transaction Successful");

    } catch (error) {
        console.error("Transaction Error:", error);
        alert("Transaction Failed");
    }
}

//  Read data from blockchain
async function getMessage() {
    try {
        if (!contract) {
            alert("Please connect wallet first!");
            return;
        }

        const message = await contract.getMessage();
        document.getElementById("output").innerText = "Stored: " + message;

        console.log("Fetched message:", message);

    } catch (error) {
        console.error("Read Error:", error);
    }
}