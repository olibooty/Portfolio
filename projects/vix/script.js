/* Toggle Nav with Raw JavaScript */
// Set variables for key elements
var mainNav = document.getElementsByClassName('menu')[0];
var navToggle = document.getElementsByClassName('mob-menu');

// Start by adding the class "collapse" to the mainNav
mainNav.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainNavToggle() {
    mainNav.classList.toggle('collapsed');
}

// Add a click event to run the mainNavToggle function
navToggle.addEventListener('click', mainNavToggle);
