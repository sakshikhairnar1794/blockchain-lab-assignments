let provider;
let signer;
let contract;

const contractAddress = "0x6be65D73119188fEacF7ad1bc159CEf40d186357";

const abi = [
    "function set(uint256 _data)",
    "function get() view returns (uint256)"
];

// CONNECT WALLET
async function connectWallet() {

    if (!window.ethereum) {
        alert("MetaMask not installed");
        return;
    }

    try {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });

        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        contract = new ethers.Contract(contractAddress, abi, signer);

        const address = accounts[0];

        document.getElementById("status").innerText =
            "Connected: " + address;

        console.log("Connected:", address);

    } catch (err) {
        console.error(err);
    }
}


// SET VALUE
async function setData() {

    const value = document.getElementById("inputValue").value;

    if (!value) {
        alert("Enter value");
        return;
    }

    const tx = await contract.set(value);
    await tx.wait();

    alert("Transaction Successful");
}

// GET VALUE
async function getData() {

    if (!contract) {
        alert("Connect wallet first");
        return;
    }

    const data = await contract.get();

    document.getElementById("output").innerText =
        "Stored Value: " + data.toString();
}