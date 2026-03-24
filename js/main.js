/**
 * Solo Solution - Main UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Context handling for floating labels
    const formControls = document.querySelectorAll('.form-control');
    
    const checkValue = (element) => {
        if (element.value.trim() !== '') {
            element.classList.add('has-value');
        } else {
            element.classList.remove('has-value');
        }
    };

    formControls.forEach(control => {
        // Initial check in case of browser autofill
        checkValue(control);

        control.addEventListener('focus', () => {
            control.parentElement.classList.remove('has-error');
        });

        control.addEventListener('blur', () => {
            checkValue(control);
        });

        // For cases where autofill happens without focus events
        control.addEventListener('input', () => {
            checkValue(control);
            control.parentElement.classList.remove('has-error');
        });
    });

    // Custom File Upload UI handler
    const fileInput = document.getElementById('imageUpload');
    const fileNameDisplay = document.getElementById('file-name-display');

    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                // Simple validation for image
                const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
                if (validTypes.includes(file.type)) {
                    fileNameDisplay.textContent = `Attached: ${file.name}`;
                    fileNameDisplay.style.color = 'var(--success)';
                } else {
                    fileNameDisplay.textContent = 'Invalid file type. Please upload an image.';
                    fileNameDisplay.style.color = 'var(--error)';
                    e.target.value = ''; // Reset
                }
            } else {
                fileNameDisplay.textContent = '';
            }
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations (Features Grid)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const featuresGrid = document.querySelector('.features-grid');
    if (featuresGrid) {
        animateOnScrollObserver.observe(featuresGrid);
    }
    
    // Transparent to solid Navbar on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 12, 0.9)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});
