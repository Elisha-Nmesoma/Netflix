// handles the FAQ container
const FAQs = document.querySelectorAll('.fag-container');
FAQs.forEach(faq => {
    faq.addEventListener('click', () => {
        const fagText = faq.querySelector('.fag-text');

        // Removes the "fag-block" class from all other elements
        FAQs.forEach(otherFaq => {
            const otherFagText = otherFaq.querySelector('.fag-text');
            const close = otherFaq.querySelector('.plus');
            if (otherFagText !== fagText) {
                otherFagText.classList.remove('fag-block');
                close.removeAttribute('src', '/netflix-img/images/icons8-close-30.png');
                close.setAttribute('src', '/netflix-img/images/icons8-plus-24.png');
                console.log(close);
            }
        });
        fagText.classList.toggle('fag-block');

        const plus = faq.querySelector('.plus');
        plus.setAttribute('src', '/netflix-img/images/icons8-close-30.png');
        console.log(plus);
    });
});

// form validation
document.addEventListener('DOMContentLoaded', function () {

    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = form.querySelector('input[name="email"]');
            const emailValue = emailInput.value;

            const errorMessage = form.querySelector('.error');
            const input = form.querySelector('.floating-input');

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailValue)) {
                errorMessage.innerHTML = 'Please enter a valid email address.';
                input.style.borderColor = 'red';
            } else if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
                errorMessage.innerHTML = 'Email is required.';
                input.style.borderColor = 'red';
                console.log(input.style.borderColor = 'red')
            } else {
                errorMessage.innerHTML = '';
                input.style.borderColor = 'initial';
                window.location.assign('step 1.html')
            }
        });
    });

});