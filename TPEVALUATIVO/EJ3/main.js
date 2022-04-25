function calcular_hipotenusa(a, b){
    // Resolver las potencias de los catetos
    const a2 = Math.pow(a, 2);
    const b2 = Math.pow(b, 2);

    // Sumar las potencias de los catetos
    const suma = a2 + b2

    // Sacar la raíz cuadrada de la suma para obtener la hipotenusa
    const hipotenusa = Math.sqrt(suma)

    // Retornar la hipotenusa
    return hipotenusa
}

function mostrar_hipotenusa(){
    // Obtener los catetos a y b ingresados por el usuario
    const cateto_A = parseInt(document.getElementById('inp_cateto_A').value)
    const cateto_B = parseInt(document.getElementById('inp_cateto_B').value)

    // Pasar los catetos obtenidos anteriormente a la funcion y almacenar su respuesta
    const respuesta = calcular_hipotenusa(cateto_A, cateto_B)

    // Mostrar la respuesta
    document.getElementById('h_resultado').textContent = `La hipotenusa es ${respuesta}`
}