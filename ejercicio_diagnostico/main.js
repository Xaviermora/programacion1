let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numeros_pares = []

numeros.forEach(numero => {
    if(numero%2 == 0) {
        numeros_pares.push(numero)
    }
});

console.log(numeros_pares)

let numeros_2 = []

for (const n of numeros.splice(2, 6)) {
    numeros_2.push(n)
}

console.log(numeros_2)