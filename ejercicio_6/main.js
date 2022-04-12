let marcas = ['Ford', 'Renault', 'Volkswagen', 'Seat', 'Peugeot', 'Chevrolet', 'Fiat', 'Toyota', 'Chery']

// mostrar longitud de marcas
console.log(`
    Longitud = ${marcas.length}
`)

// Ultimo elemento de marcas
let ultimo_elemento = marcas[marcas.length-1]

console.log(`
    ${ultimo_elemento}
`)

// Elementos de marcas
marcas.forEach((element, index) => {
    console.log(`${index} - ${element}`);
})

// Agregar un elemento a marcas al final
marcas.push('Ferrari')
console.log(marcas)

// Eliminar ultimo elemento de marcas
marcas.pop()
console.log(marcas)

// Agregar un elemento a marcas al principio
marcas.unshift('Lamborghini')
console.log(marcas)

// Eliminar el primer elemento de marcas
marcas.shift()
console.log(marcas);

// Encontrar la posicion del elemento 'Peugeot'
let index = marcas.indexOf('Peugeot');
console.log(`
    Posicion del elemento Peugeot: ${index}
`)

// Eliminar 'Peugeot'
marcas.splice(index, 1);

// Eliminar 'Volkswagen' y su elemento al lado
let pos = marcas.indexOf('Volkswagen')
marcas.splice(pos, 2);

console.log(marcas);