console.log('OK');

let navBar = document.getElementById('navbar');
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    navBar.classList.toggle('active');
});

// JavaScript Resize funnction https://developer.mozilla.org/en-US/docs/Web/Events/resize

const delay = 100;  // Your delay here

const originalResize = evt => {
    navBar.classList.remove('active');
};


(() => {
  resizeTaskId = null;

  window.addEventListener('resize', evt => {
    if (resizeTaskId !== null) {
      clearTimeout(resizeTaskId);
    }

    resizeTaskId = setTimeout(() => {
      resizeTaskId = null;
      originalResize(evt);
    }, delay);
  });
})();