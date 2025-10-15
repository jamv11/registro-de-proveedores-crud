import { typeCodeApi } from "./script.js";
import { valSiEsVacio,valSiEsString,valSiEsNumber,valSiEsEmail,valSiEsAlfaNumerico,valSiEsUrl} from "./validaciones.js";

export const crearUsuario = () =>{

    const usuario = document.querySelector('#usuario');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const dirCiudad = document.querySelector('#dirCiudad');
    const dirCalle= document.querySelector('#dirCalle');
    const dirHabitacion = document.querySelector('#dirHabitacion');
    const dirCodigoPostal = document.querySelector('#dirCodigoPostal');
    const telefono = document.querySelector('#telefono');
    const sitioWeb = document.querySelector('#sitioWeb');
    const compania = document.querySelector('#compania');
    const msjForm = document.querySelector('#msjForm');
    const btnRegistrar = document.querySelector('#btnRegistrar');
    const formularioCrear = document.querySelector('#formularioCrear');
    const datosEnLocal = JSON.parse(localStorage.getItem('registrosTypeCode'));

    const crearRegistro = event =>{
        
        
        
        if(valSiEsVacio(usuario.value) || valSiEsVacio(nombre.value) || valSiEsVacio(email.value) || valSiEsVacio(dirCiudad.value) || valSiEsVacio(dirCalle.value) || valSiEsVacio(dirHabitacion.value) || valSiEsVacio(dirCodigoPostal.value) || valSiEsVacio(telefono.value) || valSiEsVacio(sitioWeb.value) || valSiEsVacio(compania.value)){
            msjForm.classList.remove('text-success');
            msjForm.classList.add('text-danger');
            msjForm.innerHTML = '¡Existen campos vacíos!';
            setTimeout(function() {
                    msjForm.innerHTML = '';
            }, 3000);    
        }else{
            msjForm.innerHTML = '';
            if(!valSiEsAlfaNumerico(usuario.value)){
                const msjUsuario = document.querySelector('#msjUsuario');
                msjUsuario.classList.add('text-danger');
                msjUsuario.innerHTML = 'Ingrese un Nombre de Usuario válido';
                usuario.addEventListener('keyup',event =>{
                    event.preventDefault();
                    if(valSiEsAlfaNumerico(usuario.value)){
                       msjUsuario.innerHTML =''; 
                    }
                });
                
            }else if(!valSiEsString(nombre.value)){
                const msjNombre = document.querySelector('#msjNombre');
                msjNombre.classList.add('text-danger');
                msjNombre.innerHTML = 'Ingrese un Nombre válido';
                nombre.addEventListener('keyup',event =>{
                    event.preventDefault();
                    if(valSiEsString(nombre.value)){
                       msjNombre.innerHTML =''; 
                    }
                });   
            }else if(!valSiEsEmail(email.value)){
                const msjEmail = document.querySelector('#msjEmail');
                msjEmail.classList.add('text-danger');
                msjEmail.innerHTML = 'Ingrese un Email válido';
                email.addEventListener('keyup',event =>{
                    event.preventDefault();
                    if(valSiEsEmail(email.value)){
                       msjEmail.innerHTML =''; 
                    }
                });
                
            }else if(!valSiEsNumber(telefono.value)){
                const msjTelefono = document.querySelector('#msjTelefono');
                msjTelefono.classList.add('text-danger');
                msjTelefono.innerHTML = 'Ingrese un Número de Teléfono válido';
                telefono.addEventListener('keyup',event =>{
                    event.preventDefault();
                    if(valSiEsNumber(telefono.value)){
                       msjTelefono.innerHTML =''; 
                    }
                });
                
            }else if(!valSiEsNumber(dirCodigoPostal.value)){
                const msjCodigoPostal = document.querySelector('#msjCodigoPostal');
                msjCodigoPostal.classList.add('text-danger');
                msjCodigoPostal.innerHTML = 'Ingrese un Código Postal válido';
                 dirCodigoPostal.addEventListener('keyup',event =>{
                    event.preventDefault();
                    if(valSiEsNumber(dirCodigoPostal.value)){
                       msjCodigoPostal.innerHTML =''; 
                    }
                });
                
            }else if(!valSiEsUrl(sitioWeb.value)){
                const msjSitioWeb = document.querySelector('#msjSitioWeb');
                msjSitioWeb.classList.add('text-danger');
                msjSitioWeb.innerHTML = 'Ingrese una Dirección URL válida';
                sitioWeb.addEventListener('keyup',event =>{
                    event.preventDefault();
                    if(valSiEsUrl(sitioWeb.value)){
                       msjSitioWeb.innerHTML =''; 
                    }
                });
   
            }else{

                let nuevoRegistro ={
                    id: datosEnLocal.length > 0  ? datosEnLocal[datosEnLocal.length - 1].id + 1 : 1 ,
                    username: usuario.value,
                    name: nombre.value,
                    email: email.value,
                    address:{
                        street: dirCalle.value,
                        suite: dirHabitacion.value,
                        city: dirCiudad.value,
                        zipcode: dirCodigoPostal.value
                    },
                    phone: telefono.value,
                    website: sitioWeb.value,
                    company:{
                        name:compania.value  
                    }
                }
                datosEnLocal.push(nuevoRegistro);
                localStorage.setItem('registrosTypeCode', JSON.stringify(datosEnLocal));
                msjForm.classList.remove('text-danger');
                msjForm.classList.add('text-success');
                msjForm.innerHTML = '¡Se ha creado un nuevo usuario!';
                formularioCrear.reset();
                typeCodeApi();
                setTimeout(function() {
                    msjForm.innerHTML = '';
                }, 3000);
            };
        }; 
    };
    btnRegistrar.addEventListener('click',crearRegistro);
};