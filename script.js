async function loadGoogleDoc() {
    try {
        const response = await fetch('http://127.0.0.1:5000/get-doc');
        const data = await response.json();
        document.getElementById('doc-content').innerHTML = data.content;
    } catch (error) {
        console.error("Error fetching Google Doc:", error);
    }
}

loadGoogleDoc();
