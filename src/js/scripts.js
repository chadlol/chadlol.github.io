console.log('OK');

let navBar = document.getElementById('navbar');
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    navBar.classList.toggle('active');
});