export default class Rectangulo{
    constructor(b, a){
        this.base = b
        this.altura = a
    }

    calcular_area(){
        const resultado = this.base * this.altura
        
        return resultado
    }
}