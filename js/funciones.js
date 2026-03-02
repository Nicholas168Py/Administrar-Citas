import Notificacion from "./clases/Notificacion.js";
import AdminCitas from "./clases/AdminCitas.js";
import { citaObj, editando } from "./variables.js";
import { formulario, formularioInput, pacientesInput, emailInput,fechaInput, sintomasInput, propietarioInput } from "./selectores.js";

const citas = new AdminCitas();

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault();

    if( Object.values(citaObj).some(valor => valor.trim() === '') ) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios', 
            tipo: 'error'
        });
        return;
    }

    if (editando.value) {
        citas.editar({...citaObj});
        new Notificacion({
            texto: 'Cita editada correctamente', 
            tipo: 'exito'
        });
    } else {
        citas.agregar({...citaObj});
        new Notificacion({
            texto: 'Cita agregada correctamente', 
            tipo: 'exito'
        });
    }

    formulario.reset();
    reiniciarObjetoCita();
    formularioInput.value = 'Registrar Paciente';
    editando.value = false;
}

export function reiniciarObjetoCita() {
    //Reinicar el objeto 

    Object.assign(citaObj, {
        id : generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    });
}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    Object.assign(citaObj, cita);

    // Llenar los inputs    
    pacientesInput.value = citaObj.paciente;
    propietarioInput.value = citaObj.propietario;
    emailInput.value = citaObj.email;
    fechaInput.value = citaObj.fecha;
    sintomasInput.value = citaObj.sintomas;

    editando.value = true;

    formularioInput.value = 'Guardar Cambios';
}