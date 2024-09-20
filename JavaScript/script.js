// Constantes para el login
const contenedor = document.querySelector('.contenedor');
const login = document.getElementById('principal');
const recuperar = document.getElementById('recuperar');
const inicio = document.getElementById('contenidoPrincipal');
const btnSignUp = document.getElementById('btn-sign-up');
const btnSignIn = document.getElementById('btn-sign-in');

// Constantes para el main
const main = document.getElementById('main');
const historial = document.getElementById('historial');
const actividades = document.getElementById('actividades');
const mapaInteractivo = document.getElementById('mapaInteractivo');
const admision = document.getElementById('admision');
const vacunacion = document.getElementById('vacunacion');
const glucosa = document.getElementById('glucosa');
const citas = document.getElementById('citas');
const medicamentos = document.getElementById('medicamentos');
const educacion = document.getElementById('educacion');
const perfil = document.getElementById('perfil');

// Función para login
function mostrarRecuperar() {
    recuperar.style.display = 'block';
    login.style.display = 'none';
}

function regresarLogin() {
    login.style.display = 'flex';
    recuperar.style.display = 'none';
}

function mostrarInicio() {
    inicio.style.display = 'flex';
    login.style.display = 'none';
}

// Animación bienvenida
btnSignIn.addEventListener('click', () => {
    contenedor.classList.remove('toggle');
});
btnSignUp.addEventListener('click', () => {
    contenedor.classList.add('toggle');
});

// funciones de los botones
function mostrarhistorial() {
    historial.style.display = 'flex';
    main.style.display = 'none';
}

function mostrarActividades() {
    actividades.style.display = 'flex';
    main.style.display = 'none';
}

function mostarMapaInteractivo() {
    mapaInteractivo.style.display = 'flex';
    main.style.display = 'none';
}

function regresarMain() {
    historial.style.display = 'none';
    actividades.style.display = 'none';
    mapaInteractivo.style.display = 'none';
    main.style.display = 'flex';
}

function mostarAdmision() {
    admision.style.display = 'flex';
    historial.style.display = 'none';
}

function mostrarVacunacion() {
    admision.style.display = 'flex';
    historial.style.display = 'none';
}

function regresarHistorial() {
    admision.style.display = 'none';
    vacunacion.style.display = 'none';
    historial.style.display = 'flex';
}

function mostrarGlucosa() {
    glucosa.style.display = 'flex';
    actividades.style.display = 'none';
}

function mostrarCitas() {
    citas.style.display = 'flex';
    actividades.style.display = 'none';
}

function mostrarMedicamentos() {
    medicamentos.style.display = 'flex';
    actividades.style.display = 'none';
}

function regresarActividades() {
    glucosa.style.display = 'none';
    citas.style.display = 'none';
    medicamentos.style.display = 'none';
    actividades.style.display = 'flex';
}