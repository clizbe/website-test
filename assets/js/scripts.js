// scripts.js

// -- Include navbar
fetch('navigation-bar.html')
    .then(response => response.text())
    .then(data => document.getElementById('navbar-container').innerHTML = data);

