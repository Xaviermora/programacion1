const mostrar = () => {
    document.getElementById('inp_dato').value = 10;
    document.getElementById('h_titulo').textContent = 'probando';
}

// obtengo el elemento boton
const btnMostrar = document.getElementById('btn-mostrar');

// indicamos el evento a escuchar (en este click)
// entonces cuando se haga click se invocara a la función o no
btnMostrar.addEventListener('click', mostrar);