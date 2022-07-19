import Encargo from "./encargo.js";

function listar(){
    let encargo = new Encargo()    

    encargo.obtener_productos()
    encargo.obtener_encargos()
    encargo.actualizar_encargo()
    encargo.obtener_encargos()
}

listar()

function agregar(){
    let encargo = new Encargo()
    const index = localStorage.getItem('index_encargo')
    
    encargo.agregar_encargo(index)
}

for (const btn of document.getElementsByClassName('btn_agregar')) {
    btn.addEventListener('click', agregar)
}

function eliminar(){
    let encargo = new Encargo()
    const index = localStorage.getItem('index_eliminar_encargo')

    encargo.eliminar_encargo(index)
    encargo.obtener_encargos()
}

document.getElementById('btn_eliminar').addEventListener('click', eliminar)

function pedido(){
    let encargo = new Encargo()    

    encargo.finalizar_pedido()
}

document.getElementById('btn_pedido').addEventListener('click', pedido)