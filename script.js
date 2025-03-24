document.addEventListener("DOMContentLoaded", function () {
    loadGoogleDoc();
});

function loadGoogleDoc() {
    fetch("https://timeline-ics.onrender.com/")  // Replace with your actual Render API URL
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data.content;
        })
        .catch(error => {
            console.error("Error fetching Google Doc:", error);
        });
}
