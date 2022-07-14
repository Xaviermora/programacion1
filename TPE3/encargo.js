export default class Encargo{
    constructor(){}

    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem('productos'))

        let cartas_productos = []

        lista_productos.forEach((producto, index) => {
            let carta = `
                <div class="col-md-4 col-sm-6 col-9 mx-sm-0 mx-auto mb-4">
                    <div class="card h-100">
                        <div class="p-2">
                            <img src="${producto.imagen}" class="card-img-top" style="height: 15rem;" alt="Imagen del producto">
                        </div>
                        <hr class="m-0">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$${(producto.precio).toLocaleString()}</p>
                            <p class="card-text">${producto.descripcion}</p>
                            <div class="col-8 mt-auto">
                                <a onclick="almacenar_indice_encargo(${index})" href="#" class="btn btn-primary btn_agregar w-100">Agregar</a>
                            </div>
                        </div>
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
            
            // Si el encargo que se quiere agregar no existe, agregarlo, sino no hacer nada para que no se repitan  
            if(!lista_encargos.some(encargo => encargo.nombre == nuevo_encargo.nombre)){
                lista_encargos.push(nuevo_encargo)
                
                localStorage.setItem('encargos', JSON.stringify(lista_encargos))
            }

        }else{
            let encargos = []

            encargos.push(nuevo_encargo)

            localStorage.setItem('encargos', JSON.stringify(encargos))
        }

        this.obtener_encargos()
    }

    obtener_encargos(){
        // Solamente si existe algun encargo en el LocalStorage esta funcion va a funcionar
        if('encargos' in localStorage){
            let lista_encargos = JSON.parse(localStorage.getItem('encargos'))
            
            let filas_encargos = []
            let precio_total = 0
            
            lista_encargos.forEach((encargo, index) => {
                let fila = `
                <tr>
                        <td>${encargo.nombre}</td>
                        <td>
                            <input type="number" id="inp_encargo_${index}" class="inps_cantidad form-control shadow-none w-75" min="1" value="${encargo.cantidad}" required>
                        </td>
                        <td>$${(encargo.precio).toLocaleString()}</td>
                        <td><button onclick="almacenar_indice_eliminar_encargo(${index})" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-trash"></i></button></td>
                    </tr>
                `
    
                filas_encargos.push(fila)
                precio_total += encargo.precio
            });
    
            let fila_total = `
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>$${(precio_total).toLocaleString()}</td>
                    <td></td>
                </tr>
            `
                    
            filas_encargos.push(fila_total)
            
            document.getElementById('tbl_body').innerHTML = filas_encargos.join('')
            
            for (const inp of document.getElementsByClassName('inps_cantidad')) {
                inp.addEventListener('change', () => {
                    this.actualizar_encargo()
                    this.obtener_encargos()
                })
            }
        }
    }
            
    actualizar_encargo(){
        let lista_encargos = JSON.parse(localStorage.getItem('encargos'))
        let lista_productos = JSON.parse(localStorage.getItem('productos'))
        let index_actualizar_producto = localStorage.getItem('index_actualizar_producto')

        lista_encargos.forEach((encargo, index) => {
            if(window.location.pathname == '/TPE3/index_2.html'){
                let cant_encargo = parseInt(document.getElementById(`inp_encargo_${index}`).value)
                let index_producto = lista_encargos[index].id

                lista_encargos[index].cantidad = cant_encargo
                lista_encargos[index].precio = lista_productos[index_producto].precio * cant_encargo
            }else{
                // En caso de que se cambie el nombre del producto actualizarlo si está en los encargos.
                if(index_actualizar_producto == lista_encargos[index].id){ 
                    lista_encargos[index].nombre = lista_productos[index_actualizar_producto].nombre
                    lista_encargos[index].precio = lista_productos[index_actualizar_producto].precio
                }
            }
        });

        localStorage.setItem('encargos', JSON.stringify(lista_encargos))
    }
    
    eliminar_encargo(index){
        let lista_encargos = JSON.parse(localStorage.getItem('encargos'))

        lista_encargos.splice(index, 1)

        localStorage.setItem('encargos', JSON.stringify(lista_encargos))
    }

    finalizar_pedido(){
        if('pedidos' in localStorage){
            let lista_pedidos = JSON.parse(localStorage.getItem('pedidos'))
            let lista_encargos = JSON.parse(localStorage.getItem('encargos'))
            let precio_total = 0

            lista_encargos.forEach(encargo => {
                precio_total += encargo.precio
            });

            lista_encargos.push({precio_total: precio_total})

            lista_pedidos.push(lista_encargos)

            localStorage.setItem('pedidos', JSON.stringify(lista_pedidos))

            localStorage.setItem('encargos', JSON.stringify([]))

            this.obtener_encargos()
        }else{
            let pedidos = []
            let lista_encargos = JSON.parse(localStorage.getItem('encargos'))
            let precio_total = 0

            lista_encargos.forEach(encargo => {
                precio_total += encargo.precio
            });

            lista_encargos.push({precio_total: precio_total})

            pedidos.push(lista_encargos)

            localStorage.setItem('pedidos', JSON.stringify(pedidos))

            localStorage.setItem('encargos', JSON.stringify([]))

            this.obtener_encargos()
        }
    }
}