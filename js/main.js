// main.js - Core UI interactions

// Update footer year
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.style.backgroundColor = 'rgba(10,10,12,0.95)';
        } else {
            navbar.style.backgroundColor = '';
        }
    }
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up, .feature-card').forEach(el => {
        observer.observe(el);
    });
});
