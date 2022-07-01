export default class Producto{
    constructor(nom, precio, img, desc){
        this.nombre = nom
        this.precio = precio
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
                    <td>$${producto.precio}</td>
                    <td>
                        <img class="img-fluid" style="width: 3.5rem; height: 3rem;" src="${producto.imagen}">
                    </td>
                    <td class="text-break">${producto.descripcion}</td>
                    <td>
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-sm btn-primary"><i class="fa fa-pencil"></i></button>
                            <button onclick="almacenar_indice_eliminar(${index})" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-trash"></i></button>
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

        lista_productos.splice(index, 1)

        localStorage.setItem('productos', JSON.stringify(lista_productos))

        this.obtener_productos()
    }

    editar_producto(){
        
    }

    vaciar_formulario(){
        document.getElementById('form_producto').reset()
    }
}