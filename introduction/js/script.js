document.addEventListener('DOMContentLoaded', () => {

    // --- 1. HAMBURGER MENU ---
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

    // --- 2. GALLERY FILTERING ---
    const filterButtons = document.querySelectorAll('.btn-custom-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                item.classList.remove('show');
                item.classList.add('hide');
            });

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

    // --- 3. CUSTOM LIGHTBOX (No Bootstrap) ---
    const lightbox = document.getElementById('customModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.close-modal');
    const popupLinks = document.querySelectorAll('.gallery-popup-link');

    // Open
    popupLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-src');
            lightbox.style.display = "block";
            lightboxImg.src = imgSrc;
        });
    });

    // Close on X
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

});
