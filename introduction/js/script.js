document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. HAMBURGER MENU
    // =========================================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
        navLinks.forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // =========================================
    // 2. GALLERY FILTERING (Fix for switching)
    // =========================================
    const filterButtons = document.querySelectorAll('.btn-custom-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // A. Highlight the active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // B. Get the category to filter (e.g. "cat-girl")
            const filterValue = button.getAttribute('data-filter');

            // C. Hide ALL items first
            galleryItems.forEach(item => {
                item.classList.remove('show');
                item.classList.add('hide');
            });

            // D. Show ONLY items with matching category
            // Small timeout ensures the animation plays correctly
            setTimeout(() => {
                galleryItems.forEach(item => {
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                        item.classList.add('show');
                    }
                });
            }, 10);
        });
    });

    // =========================================
    // 3. CUSTOM LIGHTBOX (Popup Image)
    // =========================================
    const lightbox = document.getElementById('customModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.close-modal');
    const popupLinks = document.querySelectorAll('.gallery-popup-link');

    // Open Lightbox
    popupLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-src');
            lightbox.style.display = "block";
            lightboxImg.src = imgSrc;
        });
    });

    // Close on X button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = "none";
        });
    }

    // Close on Background Click
    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // =========================================
    // 4. SCROLL ANIMATION (Hobbies & Others)
    // =========================================
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the item is visible
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Tell observer to watch Hobby Cards
    const hobbyCards = document.querySelectorAll('.hobby-card');
    hobbyCards.forEach(card => scrollObserver.observe(card));
    
    // (Optional) You can also tell it to watch Gallery items if you want them to animate on scroll too
    const scrollGalleryItems = document.querySelectorAll('.gallery-item');
    scrollGalleryItems.forEach(item => scrollObserver.observe(item));
});