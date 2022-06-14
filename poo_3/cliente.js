export default class Cliente {
    constructor(nom, ape, dni){
        this.nombre = nom
        this.apellido = ape
        this.dni = dni
    }

    guardar_cliente(){
        let nuevo_cliente = {
            nombre: this.nombre,
            apellido: this.apellido,
            dni: this.dni
        }

        if("listado_clientes" in localStorage){
            let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))
            
            lista_clientes.push(nuevo_cliente)
            localStorage.setItem("listado_clientes", JSON.stringify(lista_clientes))
        }else{
            let lista_clientes = []
            lista_clientes.push(nuevo_cliente)

            // Crear el sector de almacenamiento
            localStorage.setItem("listado_clientes", JSON.stringify(lista_clientes))
        }

        this.obtener_clientes()
    }

    obtener_clientes(){
        let listado_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        let filas = []

        listado_clientes.forEach((cliente, index) => {
            let fila = `
                <tr>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.apellido}</td>
                    <td>${cliente.dni}</td>
                    <td>
                        <button onclick="eliminar_cliente(index)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            `

            filas.push(fila)
        });

        document.getElementById('tbl_body').innerHTML = filas.join('')
    }

    eliminar_cliente(index){
        let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        listado_clientes.splice(index, 1)

        localStorage.setItem("listado_clientes", JSON.stringify(lista_clientes))

        this.obtener_clientes()
    }
}