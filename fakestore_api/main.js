const productos = async (categoria) => {
    const productos = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)

    const datos_productos = await productos.json()

    const lista_productos = []

    datos_productos.forEach(producto => {
        const card_producto = `
            <div class="col-lg-4 col-sm-6 col-12 mb-3">
                <div class="card h-100">
                    <img src="${producto.image}" class="card-img-top my-2 mx-auto" alt="Imagen del producto" style="height: 20rem; width: 75%">
                    <hr>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text fw-bolder">$${producto.price}</p>
                        <a href="#" class="btn btn-primary mt-auto w-50">Comprar</a>
                    </div>
                </div>
            </div>
        `

        lista_productos.push(card_producto)
    });
    document.getElementById('titulo').innerHTML = datos_productos[0].category
    document.getElementById('productos').innerHTML = lista_productos.join('')
}