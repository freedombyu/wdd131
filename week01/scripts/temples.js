// Toggle navigation menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

// Set current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;
