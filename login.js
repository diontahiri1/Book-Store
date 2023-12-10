function validateLogin() {
            var email = document.getElementById('loginEmail').value;
            var password = document.getElementById('loginPassword').value;

            var emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return false;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return false;
            }


            return true;
        }