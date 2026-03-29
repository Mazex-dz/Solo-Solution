// formHandler.js - Form validation and submission

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('part-request-form');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('form-message');
    const fileInput = document.getElementById('imageUpload');
    const fileNameDisplay = document.getElementById('file-name-display');

    // File upload display
    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                fileNameDisplay.textContent = fileInput.files[0].name;
            } else {
                fileNameDisplay.textContent = '';
            }
        });
    }

    // Floating label behavior
    document.querySelectorAll('.floating-label-group .form-control').forEach(input => {
        const checkFilled = () => {
            if (input.value.trim()) {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        };
        input.addEventListener('input', checkFilled);
        input.addEventListener('blur', checkFilled);
        checkFilled();
    });

    if (!form) return;

    // Google Sheets Web App URL - update this after deploying your Apps Script
    const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwn_dqqYQrhsIQ4Kk4KiQTaGxyYVo8lQZMuD5elGWfGYE5W_qEdrcvJ3qLYXzqtvUKe/exec';

    function validateField(input) {
        const group = input.closest('.floating-label-group');
        if (!group) return true;
        const errorEl = group.querySelector('.error-text');
        const isValid = input.checkValidity();

        if (!isValid) {
            group.classList.add('error');
            if (errorEl) errorEl.style.display = 'block';
        } else {
            group.classList.remove('error');
            if (errorEl) errorEl.style.display = 'none';
        }
        return isValid;
    }

    form.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.closest('.floating-label-group')?.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isFormValid = true;
        form.querySelectorAll('.form-control[required]').forEach(input => {
            if (!validateField(input)) isFormValid = false;
        });

        if (!isFormValid) return;

        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');

        submitBtn.disabled = true;
        if (btnText) btnText.classList.add('hidden');
        if (btnLoader) btnLoader.classList.remove('hidden');

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            await fetch(SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            formMessage.textContent = '✅ Your request has been submitted! We\'ll contact you within 24 hours.';
            formMessage.className = 'form-message success';
            form.reset();
            form.querySelectorAll('.form-control').forEach(i => i.classList.remove('has-value'));

        } catch (err) {
            formMessage.textContent = '❌ Submission failed. Please try WhatsApp or email directly.';
            formMessage.className = 'form-message error';
        } finally {
            submitBtn.disabled = false;
            if (btnText) btnText.classList.remove('hidden');
            if (btnLoader) btnLoader.classList.add('hidden');
        }
    });
});
