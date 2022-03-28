function calcular_potencia(){
    const tension = document.querySelector("#inp_tension").value;
    const corriente = document.querySelector("#inp_corriente").value;

    const potencia = tension * corriente;

    return potencia;
}

function mostrar(){
    const resultado = calcular_potencia()

    alert(resultado);
}