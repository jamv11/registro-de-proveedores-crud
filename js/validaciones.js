
export const valSiEsVacio = (paramValidar) =>{

    const dato = paramValidar;

    if(dato === '' || dato === undefined){
        return true;
    }
};

export const valSiEsString = (paramValidar) =>{
    const dato = paramValidar;
    const regex = /^[\p{L}\s]+$/u;

    if(regex.test(dato)){
        return true;
    }
};

export const valSiEsNumber = (paramValidar) =>{
    const dato = paramValidar;
    const regex = /^[\p{N}]+$/u;

    if(Number(regex.test(dato))){
        return true;
    }
};

export const valSiEsAlfaNumerico = (paramValidar) =>{
    const dato = paramValidar;
    const regex = /^[\p{L}\p{N}]+$/u;

    if(regex.test(dato)){
        return true;
    }
};

export const valSiEsEmail = (paramValidar) =>{
    const dato = paramValidar;
    const regex = /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)(?:\.(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?))+$/;

    if(regex.test(dato)){
        return true;
    }
};

export const valSiEsUrl = (paramValidar) =>{
    const dato = paramValidar;
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;

    if(regex.test(dato)){
        return true;
    }
};

