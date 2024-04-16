const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const packs = document.getElementById('packs');
const phoneNumber = document.getElementById('phone-number');
const company = document.getElementById('company');
const checkIcons = document.querySelectorAll('.i-check');
const errorIcons = document.querySelectorAll('.i-error');

document.addEventListener('DOMContentLoaded', function() {
    name.value = '';
    email.value = '';
    phoneNumber.value = '';
    company.value = ''
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
   
    checkIcons.forEach(icon => {
        icon.style.display = 'none';
    });

    errorIcons.forEach(icon => {
        icon.style.display = 'none';
    });
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const companyValue = company.value.trim();

    if (nameValue === '') {
        console.log('Field cannot be empty') 
        setErrorFor(name);

    } else {
        console.log('Success')  
        setSuccessFor(name);
    }

    if (emailValue === '') {
        console.log('Field cannot be empty') 
        setErrorFor(email);
    } else if (!isEmail(emailValue)) {
        setErrorFor(email);
        console.log('Invalid email')

    } else {
        setSuccessFor(email);
    }

    if (phoneNumberValue === '') {
        console.log('Field cannot be empty') 
        setErrorFor(phoneNumber);
    } else if (!isPhoneNumber(phoneNumberValue)) {
        setErrorFor(phoneNumber);
        console.log('Invalid phone number')

    } else {
        setSuccessFor(phoneNumber);
    }

    if (companyValue === '') {
        console.log('Field cannot be empty') 
        setErrorFor(company);

    } else {
        console.log('Success')  
        setSuccessFor(company);
    }

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const checkIcon = formControl.querySelector('.i-check');
    checkIcon.setAttribute("style", "display:block");

}

function setErrorFor(input) {
    const formControl = input.parentElement;
    const errorIcon = formControl.querySelector('.i-error');
    errorIcon.setAttribute("style", "display:block");
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhoneNumber(phoneNumber) {
    return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phoneNumber);
}
