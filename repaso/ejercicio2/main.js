const calcularSumaAngulos = (ang1, ang2, ang3) => {
    return ang1+ang2+ang3
}

const mostrarResultado = () => {
    // Obtener los valores de los ángulos ingresados por el usuario
    const primerAngulo = parseInt(document.getElementById('inp_primer_angulo').value)
    const segundoAngulo = parseInt(document.getElementById('inp_segundo_angulo').value)
    const tercerAngulo = parseInt(document.getElementById('inp_tercer_angulo').value)

    const resultadoSumaAngulos = calcularSumaAngulos(primerAngulo, segundoAngulo, tercerAngulo);

    // Obtener el titulo del html donde se va a mostrar el resultado
    const h_resultado = document.getElementById('h_resultado')
    
    // Mostrar si el triangulo es valido o no en el titulo html
    resultadoSumaAngulos == 180 ? h_resultado.textContent = 'El triángulo es válido' : h_resultado.textContent = 'El triángulo no es válido'
}

const btn_mostrar = document.getElementById('btn_mostrar')

btn_mostrar.addEventListener('click', mostrarResultado)