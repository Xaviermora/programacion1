// Crear un objeto

const miobjeto = {
    nombre: 'Juan',
    apellido: 'Perez',
    dni: 33258741,
    correos: {
        gmail: 'jp@gmail.com',
        outlook: 'jp@outlook.com',
        yahoo: 'jp@yahoo.com.ar'
    }
}
console.log(miobjeto.apellido)

// Mostrar los correos
// const gmail = miobjeto.correos.gmail
// const outlook = miobjeto.correos.outlook
// const yahoo = miobjeto.correos.yahoo

// Destructuring Object
const { gmail, outlook, yahoo } = miobjeto.correos

console.log(`
Correos:
    Gmail: ${gmail},
    Outlook: ${outlook},
    Yahoo: ${yahoo}
`)