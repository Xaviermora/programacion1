function calcularTemperatura(temp){
    // Convertir temperatura en celcius a fahrenheit
    return (temp*1.8) + 32
}

function mostrarResultado(){
    // Obtener la tempatura en celcius ingresada por el usuario
    const tempCelcius = parseInt(document.getElementById('inp_temp_celcius').value)
    const tempFahrenheit = calcularTemperatura(tempCelcius)

    // Mostrar resultado
    document.getElementById('h_resultado').textContent = `${tempFahrenheit} grados fahrenheit.`
}

const btn_mostrar = document.getElementById('btn_mostrar')

btn_mostrar.addEventListener('click', mostrarResultado);