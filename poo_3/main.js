import Cliente from "./cliente.js";

function guardar(){
    let nombre = document.getElementById('inp_nombre').value
    let apellido = document.getElementById('inp_apellido').value
    let dni = document.getElementById('inp_dni').value

    let cliente = new Cliente(nombre, apellido, dni)

    cliente.guardar_cliente()
}

document.getElementById('btn_guardar').addEventListener('click', guardar)

function listar(){
    let cliente = new Cliente()

    cliente.obtener_clientes()
}

listar()

function eliminar(){
    let cliente = new Cliente()

    const index = localStorage.getItem('index')

    cliente.eliminar_cliente(index)
}

document.getElementById('btn-eliminar').addEventListener('click', eliminar)

function actualizar(){
    let cliente = new Cliente()

    const index = localStorage.getItem('index_update')

    cliente.actualizar_cliente(index)
}