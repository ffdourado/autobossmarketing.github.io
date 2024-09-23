// Select elements
const fixedHeader = document.getElementById('fixed-header');
const heroSection = document.querySelector('.hero');

// Function to check if the hero section is in view
function isHeroVisible() {
    const heroRect = heroSection.getBoundingClientRect();
    return heroRect.bottom > 0;
}

// Function to toggle fixed header visibility
function toggleFixedHeader() {
    if (!isHeroVisible()) {
        fixedHeader.classList.add('show');
    } else {
        fixedHeader.classList.remove('show');
    }
}

// Add scroll event listener
window.addEventListener('scroll', toggleFixedHeader);

// Run the function on page load in case user starts mid-page
toggleFixedHeader();
