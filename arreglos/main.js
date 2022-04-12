// crear un array
let helados = ["Cereza", "Banana Split", "Dulce de Leche"]

// mostrar longitud de un arreglo
console.log(`
    Longitud = ${helados.length}
`)

// Acceso a un elemento de un arreglo mediante su índice
let ultimo_elemento = helados[helados.length-1]

console.log(`
    Ultimo elemento = ${ultimo_elemento}
`)

// Recorrer un arreglo haciendo uso de foreach

helados.forEach((element, index) => {
    console.log(`
        ${index} - ${element}
    `);
});

// Como agregar un elemento al final de un arreglo
helados.push("Pistacho")
console.log(helados)

// Como eliminar el ultimo elemento de un arreglo
helados.pop()
console.log(helados)

// Como agregar un elemento al inicio de un arreglo
helados.unshift("Menta granizada");
console.log(helados)

// Como eliminar el primer elemento de un arreglo
helados.shift()
console.log(helados)

// Como encontrar los indices de un elemento de un arreglo
let pos = helados.indexOf("Banana Split");
console.log(`
    Posición del elemento Banana Split = ${pos}
`)

// Eliminar un elemento según su indice
helados.splice(pos,1)
console.log(helados)

// Eliminar varios elementos de un arreglo
helados.splice(0, 2)
console.log(helados)

// Copiar un arreglo
helados.push("Marroc")

let copia = helados.slice()

copia.push('Chocolate')
console.log(copia)
console.log(helados)