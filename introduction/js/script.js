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

    // --- GALLERY FILTERING & ANIMATION ---
    const filterButtons = document.querySelectorAll('.btn-custom-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Handle Button Active State
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Get the filter category
            const filterValue = button.getAttribute('data-filter');

            // 3. Reset Animation: First, hide EVERYTHING
            galleryItems.forEach(item => {
                item.classList.remove('show');
                item.classList.add('hide');
            });

            // 4. Trigger Animation: Small delay to let browser process the "hide"
            setTimeout(() => {
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                        item.classList.add('show');
                    }
                });
            }, 10); // 10ms delay is enough to reset the CSS animation
        });
    });

    // --- MODAL POPUP LOGIC (Bootstrap 5) ---
    // Grab the modal element from HTML
    const modalElement = document.getElementById('galleryModal');
    
    // Check if modal exists to prevent errors
    if (modalElement) {
        const galleryModal = new bootstrap.Modal(modalElement);
        const modalImage = document.getElementById('modalImage');
        const popupLinks = document.querySelectorAll('.gallery-popup-link');

        popupLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Get the HD image path from data-src
                const imgSrc = this.getAttribute('data-src');
                // Set the modal image
                modalImage.src = imgSrc;
                // Open the modal
                galleryModal.show();
            });
        });
    }

});


