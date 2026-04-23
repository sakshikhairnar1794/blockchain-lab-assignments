async function uploadFile(){

    const file = document.getElementById("fileInput").files[0];

    if(!file){
        alert("Select file first");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try{
        const res = await fetch("https://ipfs.infura.io:5001/api/v0/add", {
            method: "POST",
            body: formData
        });

        const text = await res.text();

        const cid = text.split('"')[3];

        document.getElementById("cidOutput").innerText =
            "CID: " + cid;

        document.getElementById("link").innerHTML =
            `<a href="https://ipfs.io/ipfs/${cid}" target="_blank">View File</a>`;

    } catch(err){
        console.error(err);
        alert("Upload failed");
    }
}