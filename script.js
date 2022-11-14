const name = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorName = document.querySelector('#error-name');
const errorEmail = document.querySelector('#error-email');
const errorPassword = document.querySelector('#error-password');

form.addEventListener('submit', function (e) {
  let errors = [];
  if (name.value === '' || name.value === null) {
    errors.push('Name is required');
  }
  if (name.value.length <= 4) {
    errors.push('Name should be longer than 4');
  }
  if (password.value === 'password') {
    errors.push('Password cannot be password');
  }
  if (password.value === '' || password.value === null) {
    errors.push('Password is required');
  }
  if (password.value.length > 20) {
    errors.push('Password needs to be less than 20');
  }
  if (errors.length > 0) {
    e.preventDefault();
    errorName.innerText = errors.join(', ');
    errorEmail.innerText = errors.join(', ');
    errorPassword.innerText = errors.join(', ');
  }
});
