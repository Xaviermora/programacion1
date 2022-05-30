export default class Triangulo{
    constructor(b, a){
        this.base = b
        this.altura = a
    }

    calcular_area(){
        const resultado = (this.base * this.altura) / 2
        
        return resultado
    }
}