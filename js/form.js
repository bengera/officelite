const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const packs = document.getElementById('packs');
const phoneNumber = document.getElementById('phone-number');
const company = document.getElementById('company');
const checkIcons = document.querySelectorAll('.i-check');
const errorIcons = document.querySelectorAll('.i-error');
const packButton = document.getElementById('btn-packs');
const dropDown = document.getElementById('drop-down-list');
const formArrow = document.getElementById('f-arrow');

// Get all li elements
const dropDownItems = document.querySelectorAll('.drop-down__item');

dropDownItems.forEach(item => {
    item.addEventListener('click', () => {
        const iconCheck = item.querySelector('.i-check-drop');
        // If element has checkmark, do nothing.
        if (iconCheck.classList.contains("show")){
            console.log('item contains check')
            return;
        } else {
             // If not remove checkmark from all elements and apply to clicked item
            console.log('no check found')
            const iconChecks = document.querySelectorAll('.i-check-drop');
            iconChecks.forEach(check => {
                check.classList.remove('show');
            })

            iconCheck.classList.add("show");
            ////////////////////////EXPERIMENT//////////////////
            const firstWordSpan = document.getElementById('first-word');
            firstWordSpan.textContent = item.textContent;
           
            

            // WORKING SOLUTION WITHOUT STYLING
            // const packText = item.textContent;
            // packButton.textContent = packText;
            dropDown.classList.toggle("hidden");

        }
    })
})


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

packButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('pack button clicked')
    dropDown.classList.toggle("hidden");
    formArrow.classList.toggle("flip");
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
    input.style.color = '#25293A';
    input.style.borderColor = '#25293A';

}

function setErrorFor(input) {
    const formControl = input.parentElement;
    const errorIcon = formControl.querySelector('.i-error');
    errorIcon.setAttribute("style", "display:block");
    input.style.color = '#F05B5B';
    input.style.borderColor = '#F05B5B';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhoneNumber(phoneNumber) {
    return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phoneNumber);
}
