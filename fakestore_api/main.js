const productos = async (categoria) => {
    const productos = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)

    const datos_productos = await productos.json()

    const lista_productos = []

    datos_productos.forEach(producto => {
        const card_producto = `
            <div class="col-lg-4 col-md-6 col-10 mb-4 mx-md-0 mx-auto">
                <div class="card h-100 shadow">
                    <img src="${producto.image}" class="card-img-top my-2 mx-auto" alt="Imagen del producto" style="height: 17rem; width: 75%">
                    <hr>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">$${producto.price}<span class="float-end me-4">${producto.rating.rate}/5</span></p>
                        <a href="#" class="btn btn-primary mt-auto col-lg-6 col-md-8">Comprar</a>
                    </div>
                </div>
            </div>
        `

        lista_productos.push(card_producto)
    });
    document.getElementById('titulo').innerHTML = datos_productos[0].category
    document.getElementById('productos').innerHTML = lista_productos.join('')
}

productos()