export default class Batman{
    constructor(){}

    async crear_cartas(){
        const batman = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')

        const peliculas_batman = await batman.json()

        let lista_batman = []

        peliculas_batman.Search.forEach(pelicula => {
            const carta = `
                <div class="col-lg-3 col-md-4 col-sm-6 col-10 mb-4 mx-sm-0 mx-auto">
                    <div class="card w-100 h-100 shadow mx-auto">
                        <img src="${pelicula.Poster}" class="card-img-top" alt="Imagen" style="height: 20rem;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${pelicula.Title}</h5>
                            <p class="card-text">${pelicula.Year}</p>
                            <!--<a href="#" class="btn btn-primary mt-auto col-lg-6 col-md-8">Ver</a>-->
                        </div>
                    </div>
                </div>
            `

            lista_batman.push(carta)
        })
        
        document.getElementById('cartas').innerHTML = lista_batman.join('')
    }
}