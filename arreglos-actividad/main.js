let lenguajes = ["Python", "JavaScript", "Csharp", "C++" , "Java" , "PHP" , "Ruby"]

function imprimir(){
    let len_lenguajes = lenguajes.length;
    let ult_elemento = lenguajes[len_lenguajes-1];
    let ter_elemento = lenguajes[2]

    document.getElementById('p_array').textContent = `
        Longitud del array: ${len_lenguajes}
        Ultimo elemento: ${ult_elemento} 
        Tercer elemento: ${ter_elemento}
    `
}

function recorrer_array(){
    lenguajes.forEach(element => {
        console.log(element)
    });
}

lenguajes.push('Go')

lenguajes.shift()

lenguajes.unshift('Kotlin')

lenguajes.splice(4,2)

console.log(lenguajes)

imprimir()
recorrer_array()