import Encargo from "./encargo.js"

export default class Producto{
    constructor(nom, precio, img, desc){
        this.nombre = nom
        isNaN(precio) ? this.precio = 0 : this.precio = precio // Si el precio no es un número establecer la propiedad precio a 0, en caso contrario, establecerla al valor obtenido.
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

            lista_productos.push(nuevo_producto) // Agregar nuevo producto

            localStorage.setItem('productos', JSON.stringify(lista_productos)) // Guardar en LocalStorage los productos con el nuevo.
        }else{
            let productos = []

            productos.push(nuevo_producto) // Agregar el nuevo producto

            localStorage.setItem('productos', JSON.stringify(productos)) // Guardar en el LocalStorage el nuevo producto
        }

        this.obtener_productos()
        this.vaciar_formulario()
    }

    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem('productos'))

        let filas_productos = []
        
        // Por cada producto crear una fila de tabla.
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
        let lista_productos = JSON.parse(localStorage.getItem('productos'))
        
        // Si el producto que se quiere eliminar está en encargo vamos a eliminarlo de los encargos también.
        let lista_encargos = JSON.parse(localStorage.getItem('encargos'))
        let encargo = new Encargo()

        const index_encargo = lista_encargos.findIndex(encargo => encargo.id == index) // Buscar el index del producto en los encargos, si no es encontrado la variable va a quedar con el valor -1.

        // Si el producto no es encontrado en los encargos no se llamará a la función para eliminar el encargo.
        if(index_encargo != -1){
            encargo.eliminar_encargo(index_encargo)
        }
        
        lista_productos.splice(index, 1) // Eliminar el producto.

        localStorage.setItem('productos', JSON.stringify(lista_productos))

        this.obtener_productos()
        this.vaciar_formulario()
    }

    actualizar_producto(index){
        let lista_productos = JSON.parse(localStorage.getItem('productos'))
        let precio = parseFloat(document.getElementById('inp_precio').value)
        
        isNaN(precio) ? precio = 0 : precio // Si el precio no es un número establecer la variable precio a 0, en caso contrario, establecerla al valor obtenido.

        lista_productos[index].nombre = document.getElementById('inp_nombre').value
        lista_productos[index].precio = precio
        lista_productos[index].imagen = document.getElementById('inp_imagen').value
        lista_productos[index].descripcion = document.getElementById('inp_descripcion').value
        
        localStorage.setItem('productos', JSON.stringify(lista_productos))
        
        let encargo = new Encargo()
        
        encargo.actualizar_encargo() // Por si el producto actualizado se encontraba en los encargos actualizar el encargo también. 

        this.obtener_productos()
        this.vaciar_formulario()
    }

    vaciar_formulario(){
        document.getElementById('form_producto').reset()
    }
}