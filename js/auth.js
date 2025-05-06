document.addEventListener("DOMContentLoaded", function() {
    const authModal = document.createElement('div');
    authModal.className = 'auth-modal';
    authModal.innerHTML = `
        <div class="auth-container">
            <div class="auth-header">
                <h2>Welcome</h2>
                <span class="close-modal">×</span>
            </div>
            <div class="auth-tabs">
                <div class="auth-tab active" data-tab="login">Login</div>
                <div class="auth-tab" data-tab="register">Register</div>
            </div>
            <form class="auth-form" id="loginForm">
                <input type="text" placeholder="Username" id="loginUsername" required>
                <input type="text" placeholder="Email or Phone" id="loginEmail" required>
                <input type="password" placeholder="Password" id="loginPassword" required>
                <button type="submit">Login</button>
            </form>
            <form class="auth-form" id="registerForm" style="display:none">
                <input type="text" placeholder="Username" id="regUsername" required>
                <input type="text" placeholder="Email or Phone" id="regEmail" required>
                <input type="password" placeholder="Password" id="regPassword" required>
                <input type="password" placeholder="Confirm Password" id="regConfirmPassword" required>
                <button type="submit">Register</button>
            </form>
        </div>
    `;
    document.body.appendChild(authModal);

    const userProfile = document.querySelector('.user-profile');
    if (!userProfile) {
        console.error('User profile element not found');
        return;
    }

    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        authModal.style.display = 'flex';
    });

    authModal.querySelector('.close-modal').addEventListener('click', function(e) {
        e.stopPropagation();
        authModal.style.display = 'none';
    });

    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
    });

    const tabs = authModal.querySelectorAll('.auth-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            if (this.dataset.tab === 'login') {
                document.getElementById('loginForm').style.display = 'block';
                document.getElementById('registerForm').style.display = 'none';
            } else {
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('registerForm').style.display = 'block';
            }
        });
    });

    // verification
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername').value.trim();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        
        // verify username
        if (username.length < 4) {
            alert('Username must be at least 4 characters long');
            return;
        }
        
        // verify num/em
        if (!validateEmail(email) && !validatePhone(email)) {
            alert('Please enter a valid email or phone number');
            return;
        }
        
        // verify password
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        // verify complete
        alert(`Login successful for ${username} (demo only)`);
        authModal.style.display = 'none';
        
        const usernameDisplay = document.querySelector('.username');
        if (usernameDisplay) {
            usernameDisplay.textContent = username;
        }
    });

    // Verification
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value.trim();
        const confirmPassword = document.getElementById('regConfirmPassword').value.trim();
        
        // verify username
        if (username.length < 4) {
            alert('Username must be at least 4 characters long');
            return;
        }
        
        // verify num/em
        if (!validateEmail(email) && !validatePhone(email)) {
            alert('Please enter a valid email or phone number');
            return;
        }
        
        // verify password
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        // verify complexity
        if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            alert('Password must contain at least one uppercase letter and one number');
            return;
        }
        
        // verify password confirmed
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // Verify complete
        alert(`Registration successful for ${username} (demo only)`);
        authModal.style.display = 'none';
        
        const usernameDisplay = document.querySelector('.username');
        if (usernameDisplay) {
            usernameDisplay.textContent = username;
        }
    });

    // verify email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Verify phone number
    function validatePhone(phone) {
        const re = /^[0-9]{10,15}$/;
        return re.test(phone);
    }
});