const consumir_dolares_api = async () => {
    // Consumir api mediante fetch y almacenar la respuesta
    const dolares = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos_dolares = await dolares.json()

    // Lista de filas
    let lista_dolares = []

    // Recorrer los datos de la api
    datos_dolares.forEach(dolar => {
        let compra = '';

        // Si la compra del dolar es "No Cotiza" mostrar sin el signo $
        (dolar.casa.compra=='No Cotiza') ? compra = `${dolar.casa.compra}` : compra = `$${dolar.casa.compra}`
        
        // Por cada dolar hacer una fila de tabla
        let fila = `
            <tr>
                <td>${compra}</td>
                <td>$${dolar.casa.venta}</td>
                <td>${dolar.casa.nombre}</td>
            </tr>
        `
        // Añadir fila a la lista
        lista_dolares.push(fila)
    });

    // Mostar filas en el html
    document.getElementById('tbl_body').innerHTML = lista_dolares.join('')
}

consumir_dolares_api()