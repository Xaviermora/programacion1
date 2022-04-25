function calcular_descuento(){
    // Obtener el precio del auto elegido
    const precio = parseInt(document.getElementById('autos').value)
    let descuento = 0
    let precio_descuento = 0

    // De acuerdo al auto seleccionado hacer un descuento de su precio
    if(precio == 2560000){
        descuento = precio*10/100
        precio_descuento = precio - descuento
    }else{ 
        if(precio == 1950000){
            descuento = precio*5/100
            precio_descuento = precio - descuento
        }else{ 
            if(precio == 1750000){
                descuento = precio*15/100
                precio_descuento = precio - descuento
            }
        }
    }

    // Mostrar el precio con descuento
    document.getElementById('h_resultado').textContent = `Precio: $${precio_descuento}`
}