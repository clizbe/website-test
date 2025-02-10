// scripts.js

// -- Include navbar
fetch('navigation-bar.html')
    .then(response => response.text())
    .then(data => document.getElementById('navbar-container').innerHTML = data);


// -- Highlight current page in Navbar
// Get all navbar links
const links = document.querySelectorAll('.navbar a');

// Get the current page's URL
const currentPage = window.location.pathname;

// Loop through all links and add 'active' class to the current page
links.forEach(link => {
    // Compare the current page's pathname with the href of the link
    if (link.href.includes(currentPage) && currentPage !== "/") {
      link.classList.add('active');
    }
});
