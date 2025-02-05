function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const form = document.getElementById('sign-up');
const body = document.getElementById('body');
const footer = document.getElementById('attribution');
const errorLabel = document.getElementById('error-label');
const inputBox = document.getElementById('email');
const main = document.getElementById('main');
const successMessage = document.getElementById('success-message');
console.log(body.classList);

function submitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formObject = Object.fromEntries(formData);
  if (isValidEmail(formObject['email'])) {
    body.classList.toggle('center-mobile-success');
    main.classList.toggle('hide-elements');
    successMessage.classList.toggle('hide-elements');
    footer.classList.toggle('hide-elements');
    if(inputBox.classList.contains('error-state')) {
      inputBox.classList.remove('error-state')
    }
    if(body.classList.contains('center-mobile-success')) {
      console.log('Style Applied');
    }
    form.reset()

  } else {
    inputBox.classList.toggle('error-state');
    errorLabel.style.display = 'block';
  }
}

form.addEventListener('submit', (e) => {
  submitForm(e);
})

document.getElementById('dismiss-button').addEventListener('click', () => {
  body.classList.toggle('center-mobile-success');
  main.classList.toggle('hide-elements');
  successMessage.classList.toggle('hide-elements');
  footer.classList.toggle('hide-elements');
  errorLabel.style.display = 'none';
})