// Select the search input and all content sections
const searchInput = document.getElementById('search-input');
const contentSections = document.querySelectorAll('.content');

// Function to filter content based on the search input
function filterContent() {
    const query = searchInput.value.toLowerCase(); // Get the search query in lowercase

    // Loop through each content section
    contentSections.forEach(section => {
        const title = section.querySelector('h2').textContent.toLowerCase(); // Title of the section
        const paragraph = section.querySelector('p').textContent.toLowerCase(); // Paragraph text

        // Check if the title or paragraph contains the query
        if (title.includes(query) || paragraph.includes(query)) {
            section.classList.remove('hidden'); // Show section
        } else {
            section.classList.add('hidden'); // Hide section
        }
    });
}

// Event listener for the search input to call filterContent when user types
searchInput.addEventListener('input', filterContent);
