/**
 * Solo Solution - Form Validator and Submission Handler
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('part-request-form');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('form-message');

    // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-hfMvvqksM4yMnfzqBf2RulJhKWM4ZyRV9aL2zVgPXqIlGkbNfWPKaNmUANuk-Ag4/exec';

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous messages
        formMessage.className = 'form-message';
        formMessage.textContent = '';

        let isValid = validateForm();

        if (isValid) {
            await submitForm();
        } else {
            showError('Please correct the highlighted errors in the form.');
        }
    });

    function validateForm() {
        let isFormValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim() || !field.checkValidity()) {
                showFieldError(field);
                isFormValid = false;
            } else {
                clearFieldError(field);
            }
        });

        // Custom validation specific to year
        const yearField = document.getElementById('carYear');
        if (yearField.value) {
            const year = parseInt(yearField.value, 10);
            const currentYear = new Date().getFullYear();
            if (year < 1900 || year > currentYear + 1) {
                showFieldError(yearField);
                isFormValid = false;
            }
        }

        return isFormValid;
    }

    function showFieldError(field) {
        const group = field.closest('.form-group');
        if (group) {
            group.classList.add('has-error');
        }
    }

    function clearFieldError(field) {
        const group = field.closest('.form-group');
        if (group) {
            group.classList.remove('has-error');
        }
    }

    function showError(message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message error';
    }

    function showSuccess(message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message success';
    }

    async function submitForm() {
        // Set loading state
        submitBtn.classList.add('loading');
        submitBtn.setAttribute('disabled', 'disabled');

        try {
            const formData = new FormData(form);
            const data = {};

            for (const pair of formData.entries()) {
                if (pair[0] !== 'imageUpload') {
                    data[pair[0]] = pair[1];
                }
            }

            if (GOOGLE_APP_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
                throw new Error('Please set your GOOGLE_APP_SCRIPT_URL in formHandler.js');
            }

            // Real submission flow pointing to Google Apps Script Web App
            const response = await fetch(GOOGLE_APP_SCRIPT_URL, {
                method: 'POST',
                // Text/plain prevents CORS preflight OPTIONS request to Apps Script
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.status === 'success') {
                form.reset();
                form.querySelectorAll('.form-control').forEach(el => el.classList.remove('has-value'));
                document.getElementById('file-name-display').textContent = '';

                showSuccess('Request submitted successfully! Our sourcing team will contact you shortly.');
            } else {
                throw new Error(result.message || 'Unknown server error');
            }

        } catch (error) {
            console.error('Submission failed', error);
            showError('A network error occurred while submitting your request. Please try again or contact us directly.');
        } finally {
            // Restore button state
            submitBtn.classList.remove('loading');
            submitBtn.removeAttribute('disabled');
        }
    }
});
