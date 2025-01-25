// Get the elements for the hamburger bars, card menu, and navbar links
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const hamburger = document.getElementById('hamburger'); 
const cardMenu = document.getElementById('cardMenu');

// Toggle function for showing and hiding the navbar in a "card-like" style
hamburger.addEventListener('click', function() {
    // Toggle the transform classes to animate hamburger into an X
    bar1.classList.toggle('transform', 'rotate-45');
    bar2.classList.toggle('opacity-0'); // Hide the middle bar
    bar3.classList.toggle('transform', 'rotate-[-45deg]');

    // Toggle visibility of the card-style menu
    cardMenu.classList.toggle('hidden'); // Toggle visibility of the card
});
