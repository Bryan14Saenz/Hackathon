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
const chat = document.getElementById('chat');
const buscar = document.getElementById('buscar');

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
  main.style.display = 'flex';
  login.style.display = 'none';
}

function enviarCorreo() {
  alert('Correo enviado con éxito');
}

// Animación bienvenida
btnSignIn.addEventListener('click', () => {
  contenedor.classList.remove('toggle');
});
btnSignUp.addEventListener('click', () => {
  contenedor.classList.add('toggle');
});

// funciones de los botones entrar y salir
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
  vacunacion.style.display = 'flex';
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

function mostrarEducacion() {
  if (educacion.style.display == 'none') {
    educacion.style.display = 'flex';
    perfil.style.display = 'none';
    buscar.style.display = 'none';
    main.style.display = 'none';
  } else {
    buscar.style.display = 'none';
    educacion.style.display = 'none';
    perfil.style.display = 'none';
    main.style.display = 'flex';
  }
}

function mostrarPerfil() {
  if (perfil.style.display == 'none') {
    perfil.style.display = 'flex';
    educacion.style.display = 'none';
    buscar.style.display = 'none';
    main.style.display = 'none';
  } else {
    educacion.style.display = 'none';
    perfil.style.display = 'none';
    buscar.style.display = 'none';
    main.style.display = 'flex';
  }
}

function CerrarSesion() {
  educacion.style.display = 'none';
  perfil.style.display = 'none';
  buscar.style.display = 'none';
  main.style.display = 'none';
  inicio.style.display = 'none';
  login.style.display = 'flex';
}


function mostarBuscador() {
  if (buscar.style.display == 'none') {
    educacion.style.display = 'none';
    perfil.style.display = 'none';
    buscar.style.display = 'flex';
    main.style.display = 'none';
  } else {
    educacion.style.display = 'none';
    perfil.style.display = 'none';
    buscar.style.display = 'none';
    main.style.display = 'flex';
  }
}

// Función para admisiones
document
  .getElementById('agregar-admision')
  .addEventListener('click', function () {
    // Crear un nuevo elemento <li>
    const nuevaAdmision = document.createElement('li');
    // Aquí puedes obtener la fecha y hora actual
    const now = new Date();
    const formatoFecha = now.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
    });
    const formatoHora = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    // Asignar el texto con la nueva fecha y hora
    nuevaAdmision.textContent = `${formatoFecha}, ${formatoHora}`;
    // Agregar el nuevo <li> al <ol>
    document.getElementById('admisiones-lista').appendChild(nuevaAdmision);
  });

// Función para vacunacion
// Abrir y cerrar el modal Vacunacion
const modalVacunacion = document.getElementById('modalVacunacion');
const openModalVacunacion = document.getElementById('abrir-modalVacunacion');
const closeModalVacunacion = document.getElementById('cerrar-modalVacunacion');

openModalVacunacion.addEventListener('click', function () {
  modalVacunacion.style.display = 'flex';
});
closeModalVacunacion.addEventListener('click', function () {
  modalVacunacion.style.display = 'none';
});
window.addEventListener('click', function (event) {
  if (event.target === modalVacunacion) {
    modalVacunacion.style.display = 'none';
  }
});
// Guardar la nueva vacunación
document.getElementById('guardarVacuna').addEventListener('click', function () {
  const nombreVacuna = document.getElementById('nombre-vacuna').value;
  const fechaVacuna = document.getElementById('fecha-vacuna').value;

  if (nombreVacuna && fechaVacuna) {
    // Crear un nuevo <li>
    const newVaccination = document.createElement('li');
    newVaccination.textContent = `Vacuna: ${nombreVacuna}, Fecha: ${new Date(
      fechaVacuna
    ).toLocaleString('es-ES')}`;
    // Agregar el nuevo <li> al <ol>
    document.getElementById('vacunacion-lista').appendChild(newVaccination);
    // Limpiar campos y cerrar modal
    document.getElementById('nombre-vacuna').value = '';
    document.getElementById('fecha-vacuna').value = '';
    modalVacunacion.style.display = 'none';
  } else {
    alert('Por favor, completa ambos campos.');
  }
});

// Función para glucosa
// Abrir y cerrar el modal Glucosa
const modalGlucosa = document.getElementById('modalGlucosa');
const abrirModalGlucosa = document.getElementById('abrir-modalGlucosa');
const cerrarModalGlucosa = document.getElementById('cerrar-modalGlucosa');

abrirModalGlucosa.addEventListener('click', function () {
  modalGlucosa.style.display = 'flex';
});
cerrarModalGlucosa.addEventListener('click', function () {
  modalGlucosa.style.display = 'none';
});
window.addEventListener('click', function (event) {
  if (event.target === modalGlucosa) {
    modalGlucosa.style.display = 'none';
  }
});
// Guardar el registro de glucosa
document
  .getElementById('guardarGlucosa')
  .addEventListener('click', function () {
    const nivelGlucosa = document.getElementById('nivel-glucosa').value;
    const fechaGlucosa = document.getElementById('fecha-glucosa').value;

    if (nivelGlucosa && fechaGlucosa) {
      // Crear un nuevo <li> con el nivel de glucosa y la fecha
      const newGlucose = document.createElement('li');
      newGlucose.textContent = `Glucosa: ${nivelGlucosa} mg/dL, ${new Date(
        fechaGlucosa
      ).toLocaleString('es-ES')}`;

      // Agregar el nuevo <li> al <ol>
      document.getElementById('glucosa-lista').appendChild(newGlucose);

      // Limpiar campos y cerrar modal
      document.getElementById('nivel-glucosa').value = '';
      document.getElementById('fecha-glucosa').value = '';
      modalGlucosa.style.display = 'none';
    } else {
      alert('Por favor, completa ambos campos.');
    }
  });

// Función para citas medicas
// Abrir y cerrar el modal citas
const modalCita = document.getElementById('modalCita');
const abrirModalCita = document.getElementById('abrir-modalCita');
const cerraModalCita = document.getElementById('cerrar-modal');

abrirModalCita.addEventListener('click', function() {
  modalCita.style.display = 'flex';
});
cerraModalCita.addEventListener('click', function() {
  modalCita.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modalCita) {
      modalCita.style.display = 'none';
    }
});
// Guardar la cita médica
document.getElementById('save-appointment').addEventListener('click', function() {
    const doctorName = document.getElementById('doctor-name').value;
    const specialty = document.getElementById('specialty').value;
    const appointmentDate = document.getElementById('appointment-date').value;

    if (doctorName && specialty && appointmentDate) {
        // Crear un nuevo <li> con la cita médica
        const newAppointment = document.createElement('li');
        newAppointment.textContent = `Cita con ${doctorName} (Especialidad: ${specialty}), ${new Date(appointmentDate).toLocaleString('es-ES')}`;

        // Agregar el nuevo <li> al <ol>
        document.getElementById('citas-lista').appendChild(newAppointment);

        // Limpiar campos y cerrar modal
        document.getElementById('doctor-name').value = '';
        document.getElementById('specialty').value = '';
        document.getElementById('appointment-date').value = '';
        modalCita.style.display = 'none';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función Medicamentos
// Abrir y cerrar el modal
const modalMedicamento = document.getElementById('modalMedicamento');
const abrirModalMedicamento = document.getElementById('abrir-modalMedicamento');
const cerraModalMedicamento = document.getElementById('cerrar-modalMedicamento');

abrirModalMedicamento.addEventListener('click', function() {
  modalMedicamento.style.display = 'flex';
});
cerraModalMedicamento.addEventListener('click', function() {
  modalMedicamento.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modalMedicamento) {
      modalMedicamento.style.display = 'none';
    }
});
// Guardar el medicamento
document.getElementById('save-medication').addEventListener('click', function() {
    const medicationName = document.getElementById('medication-name').value;
    const dosage = document.getElementById('dosage').value;
    const frequency = document.getElementById('frequency').value;

    if (medicationName && dosage && frequency) {
        // Crear un nuevo <li> con el medicamento
        const newMedication = document.createElement('li');
        newMedication.textContent = `${medicationName}: ${dosage}, ${frequency}`;

        // Agregar el nuevo <li> al <ol>
        document.getElementById('medicamentoLista').appendChild(newMedication);

        // Limpiar campos y cerrar modal
        document.getElementById('medication-name').value = '';
        document.getElementById('dosage').value = '';
        document.getElementById('frequency').value = '';
        modalMedicamento.style.display = 'none';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});



// Función Notificación
function toggleNotifications() {
  const notificationList = document.getElementById('notification-list');
  notificationList.style.display = notificationList.style.display === 'block' ? 'none' : 'block';
}

// Simulación de nuevas notificaciones (en una app real vendría de un servidor o WebSocket)
function nuevaNotificacion(mensaje) {
  const listaNotificaciones = document.querySelector('.notification-list ul');
  const nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = mensaje;
  listaNotificaciones.prepend(nuevoElemento);

  // Actualizar el contador
  const contador = document.getElementById('notification-counter');
  contador.textContent = parseInt(contador.textContent) + 1;
}

// Función para buscar paciente
function buscarPaciente() {
  const nombre = document.getElementById('searchInput').value;

  if (nombre.trim() === '') {
    alert('Por favor, ingrese un nombre.');
    return;
  }
  // Aquí simulas la búsqueda en la base de datos (lógica backend)
  // Esta parte la puedes reemplazar por la lógica real que interactúe con el servidor
  const pacientes = ['Carlos Perez', 'Maria Lopez', 'Juan Martinez'];
  const resultado = pacientes.filter((paciente) =>
    paciente.toLowerCase().includes(nombre.toLowerCase())
  );

  const resultadoDiv = document.getElementById('resultado');
  if (resultado.length > 0) {
    resultadoDiv.innerHTML = `<h2>Pacientes encontrados:</h2> <ul>${resultado
      .map((p) => `<li>${p}</li>`)
      .join('')}</ul>`;
  } else {
    resultadoDiv.innerHTML = '<h2>No se encontraron pacientes.</h2>';
  }
}
