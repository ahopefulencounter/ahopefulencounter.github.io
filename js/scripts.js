/*!
* A Hopeful Encounter – Custom Bootstrap 5 Navbar + Popup Script
*/

// ---------------------------------------------
// POP-UP
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    // Show popup after 6 seconds
    setTimeout(function() {
        var popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = "flex";
        }
    }, 6000);

    // Close popup button
    var closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            var popup = document.getElementById("popup");
            if (popup) popup.style.display = "none";
        });
    }
});


// ---------------------------------------------
// NAVBAR + SCROLL BEHAVIOR
// ---------------------------------------------
window.addEventListener('DOMContentLoaded', () => {

    // Navbar shrink function
    const navbar = document.querySelector('#mainNav');
    const navbarShrink = () => {
        if (!navbar) return;

        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    };

    // Shrink immediately
    navbarShrink();

    // Shrink when scrolling
    document.addEventListener('scroll', navbarShrink);

    // ---------------------------------------------
    // Bootstrap ScrollSpy (Bootstrap 5 version)
    // ---------------------------------------------
    if (navbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74
        });
    }

    // ---------------------------------------------
    // Collapse mobile navbar after clicking a link
    // ---------------------------------------------
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const isTogglerVisible = window.getComputedStyle(navbarToggler).display !== 'none';
            if (isTogglerVisible) {
                navbarToggler.click();
            }
        });
    });

});
