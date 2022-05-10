// Crear un arreglo de objetos

let vehiculos = [
    {
        marca: 'Ford',
        modelo: 'Focus',
        anio: 2014,
        origen: 'Mercosur'
    },
    {
        marca: 'Volkswagen',
        modelo: 'Golf 1.4 TSI',
        anio: 2014,
        origen: 'México'
    }
]

vehiculos.forEach((element, index) => {
    console.log(index + ' - ' + element.modelo)
});

// Funciones asincronas - Concepto de Async y Await
const recorrer = async () => {
    // Esto realiza una solicitud o peticion HTTP a traves del metodo GET
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')

    const publicaciones = await respuesta.json()

    publicaciones.forEach(element => {
        console.log(element.title)
    });

}

const boton = document.getElementById('btn_ejecutar')
boton.addEventListener('click', recorrer)