const consumir_criptos = async () => {

    const criptos = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    const datos_criptos = await criptos.json()

    let lista_criptos = []

    datos_criptos.forEach(cripto => {
        let fila = `
            <tr>
                <td><img src='${cripto.image}' class='img-thumbnail' alt='Imagen de la criptomoneda' style='width: 2.5rem'></td>
                <td>${cripto.name}</td>
                <td>${cripto.symbol}</td>
                <td>$${cripto.current_price}</td>
                <td>${cripto.price_change_percentage_24h}</td>
                <td>${cripto.total_volume}</td>
            </tr>
        `

        lista_criptos.push(fila)
    });

    document.getElementById('tbl_body').innerHTML = lista_criptos.join('');
}

consumir_criptos()