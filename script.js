function toggleSection(sectionHeader) {
    var content = sectionHeader.nextElementSibling;
    var arrow = sectionHeader.querySelector('.arrow');
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        sectionHeader.classList.add("expanded"); // Add class to rotate arrow
    } else {
        content.style.display = "none";
        sectionHeader.classList.remove("expanded"); // Remove class to rotate arrow back
    }
}