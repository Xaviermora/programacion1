export default class Trapecio{
    constructor(b_mayor, b_menor, a){
        this.b_mayor = b_mayor
        this.b_menor = b_menor
        this.a = a
    }

    calcular_area(){
        const resultado = ((this.b_mayor + this.b_menor) * this.a) / 2

        return resultado
    }
}