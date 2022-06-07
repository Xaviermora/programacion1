const datos = () => {
    // Objeto framework
    const framework = {
        titulo: 'Framework utilizado en la actualidad',
        nombre: 'Angular',
        características: {
            lenguaje: 'TypeScript',
            patron: 'MVVM',
            spa: 'si'
        },
    }

    // Obtener propiedades del objeto
    const { titulo, nombre } = framework
    const { lenguaje, patron, spa } = framework.características

    // Mostrar los valores de las propiedades
    console.log(`
        Titulo: ${titulo}
        Nombre: ${nombre}
        Características:
            Lenguaje: ${lenguaje}
            Patron: ${patron}
            Spa: ${spa}
    `)
}

datos()