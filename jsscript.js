document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form inputs
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const birthDate = document.getElementById('birthDate').value;
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const courses = document.getElementById('courses').value;
        
        // Perform validations
        if (!firstName || !lastName || !email || !birthDate || 
            !username || !password || !gender || !courses) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Password strength validation
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        // Create user object
        const user = {
            firstName,
            lastName,
            email,
            birthDate,
            username,
            gender: gender.value,
            course: courses
        };
        
        // Simulate registration (in a real application, you'd send this to a backend)
        console.log('Registered User:', user);
        alert('Registration Successful!');
        registrationForm.reset();
    });
});