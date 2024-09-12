const form = document.getElementById('form');
const firstName_input = document.getElementById('firstName-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    // validateInputs();
    let errors = [];
    if(firstName_input){
        errors=getSignupFormErrors(firstName_input.value,email_input.value,password_input.value,repeat_password_input.value);

    }
    else{
        errors = getSignupFormErrors(email_input.value, password_input.value);
    }
    if(errors.length > 0){
        // e.preventDefault();
        error_message.innerText = errors.join('.');
        console.log(errors);
    }
});

function getSignupFormErrors(firstName, email, password, repeat_password) {
    let errors = [];
    if (firstName === '') {
        errors.push('First name is required');
        firstName_input.parentElement.classList.add('error');
    }
    if (email === '') {
        errors.push('Email is required');
        firstName_input.parentElement.classList.add('error');

    }
    if (password === '') {
        errors.push('Password is required');
        password_input.parentElement.classList.add('error');

    } 
    return errors;
}