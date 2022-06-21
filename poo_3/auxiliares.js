function almacenar_indice(index){
    localStorage.setItem('index', index)
}

function editar(index){
    let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

    document.getElementById('inp_nombre').value = lista_clientes[index].nombre
    document.getElementById('inp_apellido').value = lista_clientes[index].apellido
    document.getElementById('inp_dni').value = lista_clientes[index].dni

    localStorage.setItem('index_update', index)
}