import { datosCita, submitCita } from "./funciones.js";
import { pacientesInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from "./selectores.js";


// Eventos

pacientesInput.addEventListener('input', datosCita);
propietarioInput.addEventListener('input', datosCita);
emailInput.addEventListener('input', datosCita);
fechaInput.addEventListener('input', datosCita);
sintomasInput.addEventListener('input', datosCita);

formulario.addEventListener('submit', submitCita);



