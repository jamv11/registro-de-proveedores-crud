import { typeCodeApi } from "./script.js";

export const eliminar = (elimTBody) =>{

    const datosEnLocal = JSON.parse(localStorage.getItem('registrosTypeCode'));
    const usuariosDel = JSON.parse(localStorage.getItem('usuariosEliminados'));
    const modalEliminarUsuario = document.querySelector('#modalEliminarUsuario');
    const eliminar = elimTBody;
    
        eliminar.forEach(boton =>{
    
            boton.addEventListener("click", (event) =>{
                event.preventDefault();
                
                const arrayActualizado = datosEnLocal;
    
    
                arrayActualizado.forEach((registro,index) =>{
    
     
                     if(parseInt(registro.id) === parseInt(boton.id)){
                        console.log('presionaste el boton eliminar', modalEliminarUsuario);
                                        modalEliminarUsuario.innerHTML = `
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header bg-dark text-light" data-bs-theme="dark">
                                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar Usuario</h1>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        ¿Esta seguro que desea eliminar el usuario: <b>${registro.username}</b>?
                                                                    </div>
                                                                    <div class="modal-footer d-flex justify-content-evenly bg-body-secondary">
                                                                        <button id="btnConfEliminar" type="button" class="btn btn-danger w-25" data-bs-dismiss="modal">Si</button>
                                                                        <button type="button" class="btn btn-secondary w-25" data-bs-dismiss="modal">No</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        `;
                        const btnConfEliminar = modalEliminarUsuario.querySelector('#btnConfEliminar');
                        btnConfEliminar.addEventListener('click',(event) =>{
                                event.preventDefault();
                                arrayActualizado.splice(index,1);
                                localStorage.setItem('registrosTypeCode', JSON.stringify(arrayActualizado));
                                if(usuariosDel === null){
                                 let delTotal =+ 1;
                                 localStorage.setItem('usuariosEliminados', JSON.stringify(delTotal));   
                                }else{
                                  let delTotal = usuariosDel + 1;
                                  localStorage.setItem('usuariosEliminados', JSON.stringify(delTotal ));  
                                }
                                typeCodeApi();    
                        });
                    }
                });  
            });
        });
};
