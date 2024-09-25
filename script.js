// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginToggle.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
    });

    signupToggle.addEventListener('click', () => {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
    });

    // Handle form submission (for demo purposes, just logging to console)
    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        console.log('Login:', { email, password });
    });

    document.getElementById('signup-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        console.log('Sign Up:', { username, email, password });
    });
});
