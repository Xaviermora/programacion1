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
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                        <p class="card-text">${producto.descripcion}</p>
                        <a onclick="almacenar_indice_encargo(${index})" href="#" class="btn btn-primary btn_agregar">Agregar</a>
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
            id: index,
            nombre: lista_productos[index].nombre,
            cantidad: 1,
            precio: lista_productos[index].precio
        }

        if('encargos' in localStorage){
            let lista_encargos = JSON.parse(localStorage.getItem('encargos'))
        
            if(lista_encargos.some(encargo => encargo.nombre == nuevo_encargo.nombre)){
                const index = lista_encargos.findIndex(x => x.id == nuevo_encargo.id)

                lista_encargos[index].cantidad += 1
            }else{
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

        lista_encargos.forEach(encargo => {
            let fila = `
                <tr>
                    <td>${encargo.nombre}</td>
                    <td>${encargo.cantidad}</td>
                    <td>$${encargo.precio}</td>
                </tr>
            `

            filas_encargos.push(fila)
        });

        document.getElementById('tbl_body').innerHTML = filas_encargos.join('')
    }
}