const obtener_anime = async () => {
    const anime = await fetch('https://api.jikan.moe/v4/anime?q="Fullmetal%20Alchemist"')

    const datos_anime = await anime.json()

    const data_anime = datos_anime.data

    let list_anime = []

    data_anime.forEach(element => {
        console.log(element)
        let card = `
            <div class="col-lg-4 mb-4 text-center d-flex justify-content-center">
                <div class="card h-100" style="width: 16rem;">
                    <img src="${element.images.jpg.image_url}" class="card-img-top" style="height: 20rem">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                    </div>
                </div>
            </div>
        `

        list_anime.push(card)
    })

    document.getElementById('cards_row').innerHTML = list_anime.join('')
}

obtener_anime()