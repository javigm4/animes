export const crearHTML = () => {
    //aqui vamos a crear el div donde va a ir tanto el input como la informacion
    const divGeneral = document.createElement("div");
    divGeneral.classList.add = "divGeneral";
    const inputCalificacion = document.createElement("input");
    inputCalificacion.type= "number";
    inputCalificacion.placeholder = "Ingresa 8 o 9";
    const inputSubmit = document.createElement("input");
    inputSubmit.value ="OK";
    inputSubmit.type="submit";
    const divInput = document.createElement("div");   
    
  
    divInput.appendChild(inputCalificacion);
    divInput.appendChild(inputSubmit);
    divGeneral.appendChild(divInput);
    document.body.appendChild(divGeneral);        

    
    return {inputCalificacion,inputSubmit, divGeneral};
  } ;
  
export const obtenerValue = (input) =>{
    return input.value;
}