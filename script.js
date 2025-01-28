// Dark mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Check saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// Update icon
function updateIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}
// --------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.yt-search-container');
    const searchIcon = document.querySelector('.yt-search-icon');
    const searchInput = document.querySelector('.yt-search-input');

    // Toggle search input on icon click
    searchIcon.addEventListener('click', function(e) {
        e.preventDefault();
        if (!searchContainer.classList.contains('active')) {
            searchContainer.classList.add('active');
            searchInput.focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });

    // Handle search submission
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Perform your search action here
            console.log('Search for:', this.value);
            // Add your search logic
        }
    });
});
