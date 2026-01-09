// script.js

// Only run in the browser
if (typeof document !== "undefined") {
    // Wait for DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Smooth scrolling for navigation links
        initSmoothScrolling();

        // Form handling
        initFormHandling();

        // Navigation scroll effect
        initScrollEffects();

        // Menu animations (optional)
        initMenuAnimations();

        // Mobile menu toggle (future use)
        initMobileMenu();
    });
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
}

// Form handling functionality
function initFormHandling() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get("name");
            const email = formData.get("email");
            const date = formData.get("date");
            const guests = formData.get("guests");

            // Basic validation
            if (!name || !email || !date || !guests) {
                alert("Please fill in all required fields.");
                return;
            }

            // Simulate form submission
            showLoadingState();

            setTimeout(() => {
                hideLoadingState();
                alert(
                    `Thank you ${name}! Your reservation request for ${guests} guests on ${date} has been received. We will contact you at ${email} soon to confirm.`
                );
                this.reset();
            }, 1500);
        });
    }
}

// Show loading state on form submission
function showLoadingState() {
    const submitBtn = document.querySelector('.btn[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
    }
}

// Hide loading state
function hideLoadingState() {
    const submitBtn = document.querySelector('.btn[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Reservation Request";
    }
}

// Navigation scroll effects
function initScrollEffects() {
    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.style.background = "rgba(255, 255, 255, 0.98)";
            header.style.boxShadow = "0 2px 30px rgba(0,0,0,0.15)";
        } else {
            header.style.background = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
        }
    });
}

// Add menu item animation on scroll (optional)
function initMenuAnimations() {
    const menuItems = document.querySelectorAll(".menu-item");
    if (!menuItems.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    menuItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.6s ease";
        observer.observe(item);
    });
}

// Mobile menu toggle (for future mobile menu implementation)
function initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
}
