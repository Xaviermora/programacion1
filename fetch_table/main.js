const consumir_api = async () => {

    const datos_recibidos = await fetch('https://jsonplaceholder.typicode.com/users')

    const datos_definidos = await datos_recibidos.json()

    let lista_usuarios = []

    datos_definidos.forEach(usuario => {
        let fila = `<tr>
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.website}</td>
                    </tr>`

        lista_usuarios.push(fila)
    })

    document.getElementById('tbl_body').innerHTML = lista_usuarios.join('')
}

consumir_api()