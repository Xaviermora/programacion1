let criptomonedas = ["Bitcoin", "Ethereum", "Tether", "BNB" , "Cardano" , "Dai" , "Helium", "Shiba Inu" , "Tron" , "Cronos","Solana"]

// Añadir el elemento "Stellar" al inicio del arreglo
criptomonedas.unshift('Stellar')

// Obtener posición de la criptomoneda "Shiba Inu"
const pos_shiba_inu = criptomonedas.indexOf('Shiba Inu')

// Eliminar "Shiba Inu" y "Tron"
criptomonedas.splice(pos_shiba_inu, 2)

// Añadir al final del arreglo el elemento "Gate"
criptomonedas.push('Gate')

const mostrar = () => {
    const pos_helium = criptomonedas.indexOf('Helium')

    // Mostrar algunos datos del arreglo
    document.getElementById('p').textContent = `
        Longitud del arreglo: ${criptomonedas.length}    
        Último elemento del arreglo: ${criptomonedas[criptomonedas.length-1]}
        Criptomoneda ${criptomonedas[pos_helium]}
    `
}

const recorrer_arreglo = () => {
    // lista de criptos
    let lista_criptomonedas = []

    // Recorrer arreglo
    criptomonedas.forEach(criptomoneda => {
        // Por cada criptomoneda hacer una fila de lista
        let fila = `
            <li class="list-group-item">${criptomoneda}</li>
        `

        // Añadir fila a la lista
        lista_criptomonedas.push(fila)
    });

    // Mostrar lista en html 
    document.getElementById('criptomonedas').innerHTML = lista_criptomonedas.join('')
}


document.getElementById('btn_mostrar').addEventListener('click', mostrar)
document.getElementById('btn_mostrar_arreglo').addEventListener('click', recorrer_arreglo)