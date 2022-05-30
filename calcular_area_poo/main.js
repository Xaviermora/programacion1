import Rectangulo from "./rectangulo.js"
import Trapecio from "./trapecio.js"
import Triangulo from "./triangulo.js"

const calcular_area_triangulo = () => {
    const base = parseInt(document.getElementById('inp_b_trian').value)
    const altura = parseInt(document.getElementById('inp_a_trian').value)

    const triangulo = new Triangulo(base, altura)

    const area = triangulo.calcular_area()

    document.getElementById('resultado_tria').textContent = `
        El area del triángulo es: ${area}
    `
}

document.getElementById('btn_calc_tria').addEventListener('click', calcular_area_triangulo)


const calcular_area_rectangulo = () => {
    const base = parseInt(document.getElementById('inp_b_rect').value)
    const altura = parseInt(document.getElementById('inp_a_rect').value)

    const rectangulo = new Rectangulo(base, altura)

    const area = rectangulo.calcular_area()

    document.getElementById('resultado_rect').textContent = `
        El area del rectángulo es: ${area}
    `
}

document.getElementById('btn_calc_rect').addEventListener('click', calcular_area_rectangulo)


const calcular_area_trapecio = () => {
    const base_mayor = parseInt(document.getElementById('inp_b_mayor').value)
    const base_menor = parseInt(document.getElementById('inp_b_menor').value)
    const altura = parseInt(document.getElementById('inp_a_trap').value)

    const trapecio = new Trapecio(base_mayor, base_menor, altura);

    const area = trapecio.calcular_area()

    document.getElementById('resultado_trap').textContent = `
        El area del trapecio es: ${area}
    `
}

document.getElementById('btn_calc_trap').addEventListener('click', calcular_area_trapecio)