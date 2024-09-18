const contenedor = document.querySelector('.contenedor');
const btnSignUp = document.getElementById('btn-sign-up');
const btnSignIn = document.getElementById('btn-sign-in');

btnSignIn.addEventListener('click', () => {
  contenedor.classList.remove('toggle');
});
btnSignUp.addEventListener('click', () => {
  contenedor.classList.add('toggle');
});