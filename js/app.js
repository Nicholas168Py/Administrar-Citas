// Selectores
const pacientesInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#formulario-cita');

// Eventos

pacientesInput.addEventListener('input', datosCita);
propietarioInput.addEventListener('input', datosCita);
emailInput.addEventListener('input', datosCita);
fechaInput.addEventListener('input', datosCita);
sintomasInput.addEventListener('input', datosCita);

formulario.addEventListener('submit', submitCita);

// Objeto de Cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
};

//Clases

class Notificacion{

    constructor({texto, tipo}) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        // Crear la notificacion
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'font-bold', 'uppercase', 'alert', 'text-sm');

        //eliminar alertas previas
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();  // encadenamiento opcional para eliminar la alerta previa si existe

        // Si es de tipo error, agregar clase de error, sino agregar clase de exito
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        // Mensaje de error
        alerta.textContent = this.texto;

        // Agregar la notificacion al DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        //quitar despues de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    };


}

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregar(cita) {
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }
}


// FUNCIONES

function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

    console.log(citaObj);
}


const citas = new AdminCitas();

function submitCita(e) {
    e.preventDefault();

    if( Object.values(citaObj).some(valor => valor.trim() === '') ) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios', 
            tipo: 'error'
        });
        return;
    }

    citas.agregar(citaObj);
}

