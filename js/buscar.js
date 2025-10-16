import { modificar } from "./modificar.js";
import { eliminar } from "./eliminar.js";

export const buscar = () =>{
    const datosEnLocal = JSON.parse(localStorage.getItem('registrosTypeCode'));
    const buscarUsuario = document.querySelector('#buscar');
    const tBody = document.querySelector('#tbody');
    const buscarRegistro = (event) =>{
    event.preventDefault();

    const datosFiltrados = datosEnLocal.filter(datos => datos.username.toLowerCase().includes(buscarUsuario.value.toLowerCase()) || datos.name.toLowerCase().includes(buscarUsuario.value.toLowerCase()) || datos.id.toString().includes(buscarUsuario.value) || datos.email.toLowerCase().includes(buscarUsuario.value.toLowerCase()));

        if(datosFiltrados){
            tBody.innerHTML ='';
            datosFiltrados.forEach(datos =>{
                        tBody.innerHTML +=`
                                    <tr class="column">
                                        <td class="col-1">${datos.id}</td>
                                        <td class="col-1">${datos.username}</td>
                                        <td class="col-1">${datos.name}</td>
                                        <td class="col-1">${datos.email}</td>
                                        <td class="col-3">${datos.address.city}, ${datos.address.street}, ${datos.address.suite}, ${datos.address.zipcode}</td>
                                        <td class="col-1">${datos.phone}</td>
                                        <td class="col-1">${datos.website}</td>
                                        <td class="col-1">${datos.company.name}</td>
                                        <td class="col-2">
                                        <button id="${datos.id}" type="button" class="btn btn-warning btnModificar " data-bs-toggle="modal" data-bs-target="#formModificarUsuario">Modificar</button>
                                        <button id="${datos.id}" type="button" class="btn btn-danger btnEliminar " data-bs-toggle="modal" data-bs-target="#modalEliminarUsuario">Eliminar</button
                                        </td>
                                    </tr> 
            `;
            });
            //llama a la funcion modificar() para asignar su funcionalidad de modificar un usuario
            modificar(document.querySelectorAll('.btnModificar'));

            //llama a la funcion eliminar() para asignar su funcionalidad de eliminar un usuario
            eliminar(document.querySelectorAll('.btnEliminar'));
        }
    };
    buscarUsuario.addEventListener('keyup',buscarRegistro);
};