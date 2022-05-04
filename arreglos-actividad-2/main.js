let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]

function copia_arreglo(arreglo){
    return arreglo.slice()
}

function promedio_arreglo(){
    let total = 0

    numeros.forEach(element => {
        total += element
    })

    console.log(`
        Promedio de los valores del array: ${total/numeros.length}
    `)
}

function promedio_rango_arreglo(arreglo, inicio, final){
    const rango = arreglo.splice(inicio, final)
    let total = 0

    rango.forEach(element => {
        total += element
    });

    console.log(`
        Promedio de los valores dentro del rango especifico: ${total/rango.length}
    `)
}

const copia = copia_arreglo(numeros)

copia.push('copia')

console.log(numeros)
console.log(copia)

promedio_arreglo()

promedio_rango_arreglo(numeros, 0, 3)

document.getElementById('p_arreglo').textContent = numeros

const intercambiar = () => {
    const pos_elemento_1 = parseInt(document.getElementById('inp_pos_elemento_1').value)
    const pos_elemento_2 = parseInt(document.getElementById('inp_pos_elemento_2').value)
    
    const elemento_1 = numeros[pos_elemento_1]
    const elemento_2 = numeros[pos_elemento_2]
    
    numeros[pos_elemento_1] = elemento_2
    numeros[pos_elemento_2] = elemento_1
    
    document.getElementById('p_arreglo').textContent = numeros
}

document.getElementById('btn_mostrar').addEventListener('click', intercambiar)