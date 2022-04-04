const calculo = () => {
    const b_mayor = parseInt(document.getElementById('inp_b_mayor').value)
    const b_menor = parseInt(document.getElementById('inp_b_menor').value)
    const altura = parseInt(document.getElementById('inp_altura').value)

    const at = ((b_mayor + b_menor) * altura) / 2

    document.getElementById('h_resultado').textContent = `Resultado: ${at}`;
}

const btn_mostrar = document.getElementById('btn_mostrar');

btn_mostrar.addEventListener('click', calculo);