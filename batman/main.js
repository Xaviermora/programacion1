import Batman from "./batman.js"

const consumir_batman_api = () => {
    const peliculas_batman = new Batman()

    peliculas_batman.crear_cartas()
}

consumir_batman_api()