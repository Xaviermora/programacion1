const calcular_raices = (a, b, c) => {
    const bloque1 = Math.pow(b, 2) - 4*a*c;
    const raiz1 = -b + Math.sqrt(bloque1);
    const raiz2 = -b - Math.sqrt(bloque1);
    const denominador =  2*a;

    const x1 = raiz1 / denominador;
    const x2 = raiz2 / denominador;

    return `x1=${x1} x2=${x2}`;
}

const mostrar_resultado = () => {
    const num_a = parseInt(document.getElementById('inp_numero_a').value);
    const num_b = parseInt(document.getElementById('inp_numero_b').value);
    const num_c = parseInt(document.getElementById('inp_numero_c').value);

    const respuesta = calcular_raices(num_a, num_b, num_c);

    document.getElementById('h_resultado').textContent = respuesta
}

const btnMostrar = document.getElementById('btn_mostrar');

btnMostrar.addEventListener('click', mostrar_resultado);