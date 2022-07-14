function almacenar_indice_eliminar_producto(index){
    localStorage.setItem('index_eliminar_producto', index)
}

function almacenar_indice_actualizar_producto(index){
    document.getElementById('btn_subir').classList.add('d-none')
    document.getElementById('btn_actualizar').classList.remove('d-none')
    document.getElementById('btn_cancelar').classList.remove('d-none')

    let lista_productos = JSON.parse(localStorage.getItem('productos'))

    document.getElementById('inp_nombre').value = lista_productos[index].nombre
    document.getElementById('inp_precio').value = lista_productos[index].precio
    document.getElementById('inp_imagen').value = lista_productos[index].imagen
    document.getElementById('inp_descripcion').value = lista_productos[index].descripcion

    localStorage.setItem('index_actualizar_producto', index)
}

function almacenar_indice_encargo(index){
    localStorage.setItem('index_encargo', index)
}

function almacenar_indice_eliminar_encargo(index){
    localStorage.setItem('index_eliminar_encargo', index)
}