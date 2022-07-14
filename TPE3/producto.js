import Encargo from "./encargo.js"

export default class Producto{
    constructor(nom, precio, img, desc){
        this.nombre = nom
        isNaN(precio) ? this.precio = 0 : this.precio = precio
        this.imagen = img
        this.descripcion = desc
    }

    subir_producto(){
        let nuevo_producto = {
            nombre: this.nombre,
            precio: this.precio,
            imagen: this.imagen,
            descripcion: this.descripcion
        }

        if('productos' in localStorage){
            let lista_productos = JSON.parse(localStorage.getItem('productos'))

            lista_productos.push(nuevo_producto)

            localStorage.setItem('productos', JSON.stringify(lista_productos))
        }else{
            let productos = []

            productos.push(nuevo_producto)

            localStorage.setItem('productos', JSON.stringify(productos))
        }

        this.obtener_productos()
        this.vaciar_formulario()
    }

    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem('productos'))

        let filas_productos = []
        
        lista_productos.forEach((producto, index) => {
            let fila = `
                <tr class="align-middle">
                    <td>${index}</td>
                    <td class="text-break">${producto.nombre}</td>
                    <td>$${(producto.precio).toLocaleString()}</td>
                    <td>
                        <img class="img-fluid" style="width: 3.5rem; height: 3rem;" src="${producto.imagen}">
                    </td>
                    <td class="text-break">${producto.descripcion}</td>
                    <td>
                        <div class="d-grid gap-2 d-md-block">
                            <button onclick="almacenar_indice_actualizar_producto(${index})" class="btn btn-sm btn-primary"><i class="fa fa-pencil"></i></button>
                            <button onclick="almacenar_indice_eliminar_producto(${index})" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `
            
            filas_productos.push(fila)
        });

        document.getElementById('tbl_body').innerHTML = filas_productos.join('')
    }  
    
    eliminar_producto(index){
        let encargo = new Encargo()

        let lista_productos = JSON.parse(localStorage.getItem('productos'))
        let lista_encargos = JSON.parse(localStorage.getItem('encargos'))

        const index_encargo = lista_encargos.findIndex(encargo => encargo.nombre == lista_productos[index].nombre)

        lista_productos.splice(index, 1)
        encargo.eliminar_encargo(index_encargo)

        localStorage.setItem('productos', JSON.stringify(lista_productos))

        this.obtener_productos()
        this.vaciar_formulario()
    }

    actualizar_producto(index){
        let encargo = new Encargo()
        let lista_productos = JSON.parse(localStorage.getItem('productos'))
        let precio = parseFloat(document.getElementById('inp_precio').value)

        isNaN(precio) ? precio = 0 : precio

        lista_productos[index].nombre = document.getElementById('inp_nombre').value
        lista_productos[index].precio = precio
        lista_productos[index].imagen = document.getElementById('inp_imagen').value
        lista_productos[index].descripcion = document.getElementById('inp_descripcion').value

        localStorage.setItem('productos', JSON.stringify(lista_productos))

        encargo.actualizar_encargo()

        this.obtener_productos()
        this.vaciar_formulario()
    }

    vaciar_formulario(){
        document.getElementById('form_producto').reset()
    }
}