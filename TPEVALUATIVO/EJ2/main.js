const calcular_mensaje = (temp) => {
    let mensaje = ''

    // De acuerdo a la temperatura ingresada verificar su intensidad y mostrar un mensaje
    if(temp >= 14 && temp <= 32){
        mensaje = 'Temperatura baja'
    }else{
        if(temp > 32 && temp <= 68){
            mensaje = 'Temperatura adecuada'
        }else{
            if(temp > 68 && temp <= 96){
                mensaje = 'Temperatura alta'
            }else{
                mensaje = 'Temperatura desconocida'
            }
        }
    }

    // Retornar mensaje/respuesta
    return mensaje
}

const mostrar_mensaje = () => {
    // Obtener temperatura ingresada por el usuario
    const temp_F = parseInt(document.getElementById('inp_temp_F').value)

    // Pasar la temperatura obtenida anteriormente a la funcion y almacenar su respuesta
    const respuesta = calcular_mensaje(temp_F);

    // Mostrar resultado
    document.getElementById('h_resultado').textContent = respuesta
}

const btn_mostrar = document.getElementById('btn_mostrar')

btn_mostrar.addEventListener('click', mostrar_mensaje)