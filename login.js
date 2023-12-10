let formSection = document.querySelector(".form-section");

/*--------butoni-----------------------------*/
      function toggleForm(formType) {
          let slider = document.querySelector(".slider");
          let loginBox = document.querySelector(".login-box");
          let signupBox = document.querySelector(".signup-box");

          if (formType === 'login') {
              slider.classList.remove("moveslider");
              formSection.classList.remove("form-section-move");
          } else if (formType === 'signup') {
              slider.classList.add("moveslider");
              formSection.classList.add("form-section-move");
          }
      }

/*-------------registrimi------------*/

      function validateRegistration() {
          var name = document.getElementById('registerName').value;
          var email = document.getElementById('registerEmail').value;
          var password = document.getElementById('registerPassword').value;
          var confirmPassword = document.getElementById('registerConfirmPassword').value;

          var nameRegex = /^[a-zA-Z\s]+$/;
          if (!nameRegex.test(name)) {
              alert('Please enter a valid name');
              return false;
          }

          var emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(email)) {
              alert('Please enter a valid email address');
              return false;
          }

          if (password.length < 6) {
              alert('Password must be at least 6 characters');
              return false;
          }

          if (password !== confirmPassword) {
              alert('Passwords do not match');
              return false;
          }


          return true;
      }
      
/*--------login---------------------*/

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