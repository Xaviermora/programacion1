import Rectangulo from "./rectangulo.js"
import Triangulo from "./triangulo.js"

const calcular_area_triangulo = () => {
    const base = parseInt(document.getElementById('inp_b_trian').value)
    const altura = parseInt(document.getElementById('inp_a_trian').value)

    const triangulo = new Triangulo(base, altura)

    const resultado = triangulo.calcular_area()

    document.getElementById('resultado_tria').textContent = `
        El area del triángulo es: ${resultado}
    `
}

document.getElementById('btn_calc_tria').addEventListener('click', calcular_area_triangulo)

const calcular_area_rectangulo = () => {
    const base = parseInt(document.getElementById('inp_b_rect').value)
    const altura = parseInt(document.getElementById('inp_a_rect').value)

    const rectangulo = new Rectangulo(base, altura)

    rectangulo.calcular_area()
}

document.getElementById('btn_calc_rect').addEventListener('click', calcular_area_rectangulo)