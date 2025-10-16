import { buscar } from './buscar.js'
import { crearUsuario } from "./crear.js";
import { modificar } from './modificar.js';
import { eliminar } from './eliminar.js';
import { grafico } from './grafico.js';

// funcion async
export const typeCodeApi = async () =>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    const api = await fetch(url);
    const datos = await api.json();
    const arrayDatos = await datos;
    const tBody = document.querySelector('#tbody');
    const datosEnLocal = JSON.parse(localStorage.getItem('registrosTypeCode'));

    if(datosEnLocal === null){
       localStorage.setItem('registrosTypeCode', JSON.stringify(arrayDatos)); 
    }else{
        tBody.innerHTML ='';
        
        datosEnLocal.forEach((registro) =>{
            tBody.innerHTML +=`
                            <tr>
                                <td>${registro.id}</td>
                                <td>${registro.username}</td>
                                <td>${registro.name}</td>
                                <td>${registro.email}</td>
                                <td>${registro.address.city}, ${registro.address.street}, ${registro.address.suite}, ${registro.address.zipcode}</td>
                                <td>${registro.phone}</td>
                                <td>${registro.website}</td>
                                <td>${registro.company.name}</td>
                                <td class="d-flex justify-content-center flex-wrap">
                                    <button id="${registro.id}"  type="button" class="btn btn-warning btnModificar m-1" data-bs-toggle="modal" data-bs-target="#formModificarUsuario">Modificar</button>
                                    <button id="${registro.id}" type="button" class="btn btn-danger btnEliminar m-1" data-bs-toggle="modal" data-bs-target="#modalEliminarUsuario">Eliminar</button
                                </td>
                                </tr> 
                        `;

        });
        //llama a la funcion modificar() para asignar su funcionalidad de modificar un usuario
         modificar(document.querySelectorAll('.btnModificar'));

         //llama a la funcion eliminar() para asignar su funcionalidad de eliminar un usuario
         eliminar(document.querySelectorAll('.btnEliminar'));
             
        
    }
    //Llama a la Función para mostrar las estadisticas
    grafico(datosEnLocal.length);
    crearUsuario();
};

//ejecuta a la función typeCodeApi() para consumir y mostrar los datos 
typeCodeApi();

//Llama a la Función buscar() para buscar un usuario
buscar();

//Llama a la Función crearUsuario() para crear un nuevo usuario






