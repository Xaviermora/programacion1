import Producto from "./producto.js"

function subir(){
    const nombre = document.getElementById('inp_nombre').value
    const precio = parseFloat(document.getElementById('inp_precio').value)
    const imagen = document.getElementById('inp_imagen').value
    const descripcion = document.getElementById('inp_descripcion').value

    let producto = new Producto(nombre, precio, imagen, descripcion)

    producto.subir_producto()
}

document.getElementById('btn_subir').addEventListener('click', subir)

function listar(){
    let producto = new Producto()

    producto.obtener_productos()
}

listar()

function eliminar(){
    let producto = new Producto()

    const index = localStorage.getItem('index_eliminar')

    producto.eliminar_producto(index)

    document.getElementById('btn_subir').classList.remove('d-none')
    document.getElementById('btn_actualizar').classList.add('d-none')
    document.getElementById('btn_cancelar').classList.add('d-none')
}

document.getElementById('btn_eliminar').addEventListener('click', eliminar)

function actualizar(){
    let producto = new Producto()
    
    const index = localStorage.getItem('index_actualizar')

    producto.actualizar_producto(index)
}

document.getElementById('btn_actualizar').addEventListener('click', actualizar)