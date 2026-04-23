# Assignment 4: Implementation of IPFS for Decentralized File Storage

## 📌 Brief Description
This assignment implements decentralized file storage using IPFS.  
Users can upload files through a web interface, which are stored on IPFS using Pinata.  
Each uploaded file generates a unique CID (Content Identifier), which can be used to retrieve the file later.

---

## 🛠️ Tech Stack Used
- HTML, CSS, JavaScript (Frontend)
- IPFS (Decentralized Storage System)
- Pinata (IPFS Pinning Service)
- Fetch API

---

## ⚙️ Code Functionality

### Upload File to IPFS
- User selects a file
- File is uploaded to IPFS via Pinata API
- A CID (Content Identifier) is generated

### Retrieve File from IPFS
- User enters CID
- File is fetched using IPFS gateway
- File opens in browser

---

## 🔗 IPFS Hash Example (CID)

Example CID generated during upload:
QmQtpdx7sVbawVDevXMUpHj4EJxKCUNfNEjH3sYkNiA1x


---

## ▶️ How to Run

1. Open the project folder
2. Open `index.html` in browser (or use Live Server)
3. Upload a file using "Upload to IPFS"
4. Copy the generated CID
5. Paste CID in "Retrieve File"
6. Click "Fetch File" to view file

---

## 📄 IPFS Service / Library Used
- Pinata is used as an IPFS pinning service to upload and manage files on the IPFS network.

---

## 📂 How Files are Stored & Retrieved

### Storage:
- File is uploaded to Pinata
- Pinata pins the file on IPFS
- A CID is generated

### Retrieval:
- CID is used to access file via IPFS gateway
- File is fetched using public gateway (ipfs.io)

---
