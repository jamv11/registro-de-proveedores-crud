import { typeCodeApi } from "./script.js";
import { valSiEsVacio,valSiEsString,valSiEsNumber,valSiEsEmail,valSiEsAlfaNumerico,valSiEsUrl } from "./validaciones.js";

export const modificar = (modTBody) =>{

    const datosEnLocal = JSON.parse(localStorage.getItem('registrosTypeCode'));
    const formModalModificarUsuario = document.querySelector('#formModificarUsuario');
    const modificar = modTBody;
 
    modificar.forEach(boton =>{
        boton.addEventListener("click", (event) =>{
            event.preventDefault();
            
            const arrayActualizado = datosEnLocal;

            arrayActualizado.forEach((registro) =>{
                if(parseInt(registro.id) === parseInt(boton.id)){
                    formModalModificarUsuario.innerHTML = `
                                                        <div class="modal-dialog modal-lg">
                                                            <div class="modal-content">
                                                                <div class="modal-header bg-dark text-light" data-bs-theme="dark">
                                                                    <h5 class="modal-title" id="miModalLabel">Actualizar Usuario con el Id: ${registro.id}</h5>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <form class="row">
                                                                        <div class="mb-3 col-6">
                                                                            <label class="form-label" for="usuario">Nombre de Usuario:</label>
                                                                            <input id="usuario" class="form-control" type="text" value="${registro.username}">
                                                                            <span id="msjUsuario"></span>
                                                                        </div>
                                                                        <div class="mb-3 col-6">
                                                                            <label class="form-label" for="usuario">Nombre:</label>
                                                                            <input id="nombre" class="form-control" type="text" value="${registro.name}">
                                                                            <span id="msjNombre"></span>
                                                                        </div>
                                                                        <div class="mb-3 col-12">
                                                                            <label class="form-label" for="usuario">Correo Electrónico:</label>
                                                                            <input id="email" class="form-control" type="text" value="${registro.email}">
                                                                                <span id="msjEmail"></span>
                                                                        </div>
                                                                        <div class="mb-3 col-12"> 
                                                                            <label class="form-label" for="usuario">Dirección:</label>
                                                                            <div class="row">
                                                                                <div class="col-3">
                                                                                    <input id="dirCiudad" class="form-control" type="text" placeholder="Ciudad" value="${registro.address.city}">
                                                                                </div>
                                                                                <div class="col-3">
                                                                                    <input id="dirCalle" class="form-control" type="text" placeholder="Calle" value="${registro.address.street}">
                                                                                </div>
                                                                                <div class="col-3">
                                                                                    <input id="dirHabitacion" class="form-control" type="text" placeholder="Habitación" value="${registro.address.suite}">
                                                                                </div>
                                                                                <div class="col-3">
                                                                                    <input id="dirCodigoPostal" class="form-control" type="text" placeholder="Codigo Postal" value="${registro.address.zipcode}">
                                                                                    <span id="msjCodigoPostal"></span>
                                                                                </div>   
                                                                            </div>
                                                                        </div>
                                                                        <div class="mb-3 col-6">
                                                                            <label class="form-label" for="usuario">Teléfono:</label>
                                                                            <input id="telefono" class="form-control" type="text" value="${registro.phone}">
                                                                            <span id="msjTelefono"></span>
                                                                        </div>
                                                                        <div class="mb-3 col-6">
                                                                            <label class="form-label" for="usuario">Sitio WEB:</label>
                                                                            <input id="sitioWeb" class="form-control" type="text" value="${registro.website}">
                                                                            <span id="msjSitioWeb"></span>
                                                                        </div>
                                                                        <div class="mb-3 col-12">
                                                                            <label class="form-label" for="usuario">Compañia:</label>
                                                                            <input id="compania" class="form-control" type="text" value="${registro.company.name}">
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="modal-footer d-flex justify-content-between bg-body-secondary">
                                                                    <span id="msjForm" class="text-success fw-semibold"></span>
                                                                <button id="btnModificar" type="button" class="btn btn-primary">Guardar Cambios</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    `;
                    const usuario = formModalModificarUsuario.querySelector('#usuario');
                    const nombre = formModalModificarUsuario.querySelector('#nombre');
                    const email = formModalModificarUsuario.querySelector('#email');
                    const dirCiudad = formModalModificarUsuario.querySelector('#dirCiudad');
                    const dirCalle= formModalModificarUsuario.querySelector('#dirCalle');
                    const dirHabitacion = formModalModificarUsuario.querySelector('#dirHabitacion');
                    const dirCodigoPostal = formModalModificarUsuario.querySelector('#dirCodigoPostal');
                    const telefono = formModalModificarUsuario.querySelector('#telefono');
                    const sitioWeb = formModalModificarUsuario.querySelector('#sitioWeb');
                    const compania = formModalModificarUsuario.querySelector('#compania');
                    const msjForm = formModalModificarUsuario.querySelector('#msjForm');
                    const btnModificar = formModalModificarUsuario.querySelector('#btnModificar');
                    const usuariosMod = JSON.parse(localStorage.getItem('usuariosModificados'));
                    
                    btnModificar.addEventListener('click',(event)=>{
                        event.preventDefault();

                        if(valSiEsVacio(usuario.value) || valSiEsVacio(nombre.value) || valSiEsVacio(email.value) || valSiEsVacio(dirCiudad.value) || valSiEsVacio(dirCalle.value) || valSiEsVacio(dirHabitacion.value) || valSiEsVacio(dirCodigoPostal.value) || valSiEsVacio(telefono.value) || valSiEsVacio(sitioWeb.value) || valSiEsVacio(compania.value)){
                            msjForm.classList.remove('text-success');
                            msjForm.classList.add('text-danger');
                            msjForm.innerHTML = '¡Existen campos vacíos!';
        
                        }else{
                            msjForm.innerHTML = '';
                            if(!valSiEsAlfaNumerico(usuario.value)){
                                const msjUsuario = formModalModificarUsuario.querySelector('#msjUsuario');
                                msjUsuario.classList.add('text-danger');
                                msjUsuario.innerHTML = 'Ingrese un Nombre de Usuario válido';
                                usuario.addEventListener('keyup',event =>{
                                    event.preventDefault();
                                    if(valSiEsAlfaNumerico(usuario.value)){
                                    msjUsuario.innerHTML =''; 
                                    }
                                });
                                
                            }else if(!valSiEsString(nombre.value)){
                                const msjNombre = formModalModificarUsuario.querySelector('#msjNombre');
                                msjNombre.classList.add('text-danger');
                                msjNombre.innerHTML = 'Ingrese un Nombre válido';
                                nombre.addEventListener('keyup',event =>{
                                    event.preventDefault();
                                    if(valSiEsString(nombre.value)){
                                    msjNombre.innerHTML =''; 
                                    }
                                });   
                            }else if(!valSiEsEmail(email.value)){
                                const msjEmail = formModalModificarUsuario.querySelector('#msjEmail');
                                msjEmail.classList.add('text-danger');
                                msjEmail.innerHTML = 'Ingrese un Email válido';
                                email.addEventListener('keyup',event =>{
                                    event.preventDefault();
                                    if(valSiEsEmail(email.value)){
                                    msjEmail.innerHTML =''; 
                                    }
                                });
                                
                            }else if(!valSiEsNumber(telefono.value)){
                                const msjTelefono = formModalModificarUsuario.querySelector('#msjTelefono');
                                msjTelefono.classList.add('text-danger');
                                msjTelefono.innerHTML = 'Ingrese un Número de Teléfono válido';
                                telefono.addEventListener('keyup',event =>{
                                    event.preventDefault();
                                    if(valSiEsNumber(telefono.value)){
                                    msjTelefono.innerHTML =''; 
                                    }
                                });
                                
                            }else if(!valSiEsNumber(dirCodigoPostal.value)){
                                const msjCodigoPostal = formModalModificarUsuario.querySelector('#msjCodigoPostal');
                                msjCodigoPostal.classList.add('text-danger');
                                msjCodigoPostal.innerHTML = 'Ingrese un Código Postal válido';
                                dirCodigoPostal.addEventListener('keyup',event =>{
                                    event.preventDefault();
                                    if(valSiEsNumber(dirCodigoPostal.value)){
                                    msjCodigoPostal.innerHTML =''; 
                                    }
                                });
                                
                            }else if(!valSiEsUrl(sitioWeb.value)){
                                const msjSitioWeb = formModalModificarUsuario.querySelector('#msjSitioWeb');
                                msjSitioWeb.classList.add('text-danger');
                                msjSitioWeb.innerHTML = 'Ingrese una Dirección URL válida';
                                sitioWeb.addEventListener('keyup',event =>{
                                    event.preventDefault();
                                    if(valSiEsUrl(sitioWeb.value)){
                                    msjSitioWeb.innerHTML =''; 
                                    }
                                });
                                
                            }else{
                                
                                registro.username = usuario.value;
                                registro.name = nombre.value;
                                registro.email = email.value;
                                registro.address = {
                                    street: dirCalle.value,
                                    suite: dirHabitacion.value,
                                    city: dirCiudad.value,
                                    zipcode: dirCodigoPostal.value,
                                    };
                                registro.phone = telefono.value;
                                registro.website = sitioWeb.value;
                                registro.company.name = compania.value;
                    
                                localStorage.setItem('registrosTypeCode', JSON.stringify(arrayActualizado));
                                msjForm.innerHTML = '¡Se han guardado los cambios!';
                                if(usuariosMod === null){
                                 let modTotal =+ 1;
                                 localStorage.setItem('usuariosModificados', JSON.stringify(modTotal));   
                                }else{
                                  let modTotal = usuariosMod + 1;
                                  localStorage.setItem('usuariosModificados', JSON.stringify(modTotal));  
                                }
                                typeCodeApi();
                                console.log(usuariosMod); 
                            }
                        }   
                    });
                }        
            });
        });
    });
}