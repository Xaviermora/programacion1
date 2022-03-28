// funcián clásica

function mostrar(){
    // forma 1
    //const inp_nombre = document.querySelector("#inp_nombre").value;

    // forma 2
    const inp_nombre = document.getElementById("inp_nombre").value;

    // Sin template string
    //const mensaje = 'Nombre y apellido: '+inp_nombre;
    
    // Con template string
    const mensaje = `Nombre y apellido: ${inp_nombre}`; 
    
    alert(mensaje);
}

function mifuncion_con_retorno(){
    const ejemplo = 'Probando función con retorno';
    return ejemplo;
}

function mostrar_respuesta(){
    const respuesta = mifuncion_con_retorno();
    alert(respuesta);
}