function changeTab(evt, diagramId) {
    // Hide all diagrams
    var diagrams = document.getElementsByClassName("diagram");
    for (var i = 0; i < diagrams.length; i++) {
        diagrams[i].style.display = "none";
    }

    // Show the selected diagram
    document.getElementById(diagramId).style.display = "block";

    // Initialize or re-initialize Mermaid for the newly displayed diagram
    mermaid.init(undefined, document.getElementById(diagramId));
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid.js
    mermaid.initialize({ startOnLoad: false });

    // Initially display the first diagram
    changeTab(null, 'diagram1');
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid.js with dark theme
    mermaid.initialize({
        startOnLoad: false,
        theme: 'dark' // Use the dark theme for Mermaid diagrams
    });

    // Initially display the first diagram
    changeTab(null, 'diagram1');
});
