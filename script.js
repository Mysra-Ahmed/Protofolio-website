// Script for theme toggle and dynamic footer year

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const themeToggle = document.getElementById('themeToggle');
    const yearSpan = document.getElementById('year');

    // Set the footer year dynamically
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Toggle dark mode
    themeToggle.addEventListener('click', () => {
        if (app.classList.contains('light')) {
            app.classList.replace('light', 'dark');
            themeToggle.textContent = '☀';
        } else {
            app.classList.replace('dark', 'light');
            themeToggle.textContent = '🌙';
        }
    });

    // Handle form submission (example only)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form from refreshing the page

            // Simple alert to simulate submission
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
});