import { formulario } from '../selectores.js';

export default class Notificacion{

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
