export default class Encargo{
    constructor(){}

    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem('productos'))

        let cartas_productos = []

        lista_productos.forEach((producto, index) => {
            let carta = `
                <div class="card col-lg-4 me-2">
                    <img src="${producto.imagen}" class="card-img-top w-100 h-50" alt="...">
                    <hr class="m-0">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                        <p class="card-text">${producto.descripcion}</p>
                        <a onclick="almacenar_indice_encargo(${index})" href="#" class="btn btn-primary btn_agregar mt-auto w-50">Agregar</a>
                    </div>
                </div>
            `

            cartas_productos.push(carta)
        });

        document.getElementById('productos').innerHTML = cartas_productos.join('')
    }

    agregar_encargo(index){
        let lista_productos = JSON.parse(localStorage.getItem('productos'))
        
        let nuevo_encargo = {
            nombre: lista_productos[index].nombre,
            cantidad: 1,
            precio: lista_productos[index].precio
        }

        if('encargos' in localStorage){
            let lista_encargos = JSON.parse(localStorage.getItem('encargos'))

            if(!lista_encargos.some(encargo => encargo.nombre == nuevo_encargo.nombre)){
                lista_encargos.push(nuevo_encargo)
            }

            localStorage.setItem('encargos', JSON.stringify(lista_encargos))
        }else{
            let encargos = []

            encargos.push(nuevo_encargo)

            localStorage.setItem('encargos', JSON.stringify(encargos))
        }

        this.obtener_encargos()
    }

    obtener_encargos(){
        let lista_encargos = JSON.parse(localStorage.getItem('encargos'))

        let filas_encargos = []
        let precio_total = 0

        lista_encargos.forEach((encargo, index) => {
            let fila = `
                <tr>
                    <td>${encargo.nombre}</td>
                    <td>
                        <input type="number" id="inp_encargo_${index}" class="form-control shadow-none w-75" min="1" value="${encargo.cantidad}" required>
                    </td>
                    <td>$${encargo.precio}</td>
                </tr>
            `

            filas_encargos.push(fila)
            precio_total += encargo.precio
        });

        let fila_total = `
            <tr>
                <td>Total</td>
                <td></td>
                <td>$${precio_total}</td>
            </tr>
        `

        filas_encargos.push(fila_total)

        document.getElementById('tbl_body').innerHTML = filas_encargos.join('')
    }
    
    modificar_cantidad_encargo(){
        let lista_encargos = JSON.parse(localStorage.getItem('encargos'))
        
        lista_encargos.forEach((encargo, index) => {
            lista_encargos[index].cantidad = document.getElementById(`inp_encargo_${index}`).value
        });

        localStorage.setItem('encargos', JSON.stringify(lista_encargos))
    }
    
    finalizar_pedido(){
        this.modificar_cantidad_encargo()
    }
}