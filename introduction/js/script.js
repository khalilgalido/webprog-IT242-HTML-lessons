document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle Mobile Menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close Mobile Menu when a link is clicked
    navLinks.forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

});

// Wait for the HTML to load
document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic (Keep this if you have it) ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if(hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // --- NEW: Scroll Animation Logic (Intersection Observer) ---
    
    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the image is visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the CSS animation
                entry.target.classList.add('show');
            } 
            // Optional: Remove 'else' if you want them to stay visible once animated
            else {
                 entry.target.classList.remove('show'); // Remove this line if you want them to animate only once
            }
        });
    });

    // 2. Tell the observer to watch all timeline images
    const hiddenElements = document.querySelectorAll('.timeline-img');
    hiddenElements.forEach((el) => observer.observe(el));

});