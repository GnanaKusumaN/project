
// Scroll event listener to change background color of the page and sections
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section'); // All sections on the page
  const scrollPosition = window.scrollY;

  // Toggle the navbar scroll class for a different style
  if (scrollPosition > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }

  // Loop through each section and change background color based on scroll position
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    // If the section is in view, change its background color dynamically
    if (scrollPosition >= sectionTop - window.innerHeight / 2 && scrollPosition <= sectionBottom - window.innerHeight / 2) {
      section.style.backgroundColor = getDynamicBackgroundColor(scrollPosition);
    }
  });
});

// Function to calculate a dynamic background color based on scroll position
function getDynamicBackgroundColor(scrollPosition) {
  // Dynamically calculate RGB values based on scroll position for smooth color change
  const r = Math.min(255, Math.max(0, 255 - scrollPosition / 2));   // Red decreases as we scroll
  const g = Math.min(255, Math.max(0, 200 + scrollPosition / 4));   // Green increases as we scroll
  const b = Math.min(255, Math.max(0, 255 - scrollPosition / 4));   // Blue decreases as we scroll

  return `rgb(${r}, ${g}, ${b})`; // Return the color in RGB format
}
