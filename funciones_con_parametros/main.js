const calcular = (d1, d2) => {
    return Math.pow(d1, d2);
}

const mostrar = () => {
    const dato1 = parseInt(document.getElementById('inp_dato1').value);
    const dato2 = parseInt(document.getElementById('inp_dato2').value);

    const respuesta = calcular(dato1, dato2);
    alert(respuesta)
}

const btn_calcular = document.getElementById('btn_calcular');

btn_calcular.addEventListener('click', mostrar);