import Encargo from "./encargo.js";

function listar_productos(){
    let encargo = new Encargo()

    encargo.obtener_productos()
}

listar_productos()

function agregar(){
    let encargo = new Encargo()
    const index = localStorage.getItem('index_encargo')

    encargo.agregar_encargo(index)
}

for (const btn of document.getElementsByClassName('btn_agregar')) {
    btn.addEventListener('click', agregar)
}