export default class Vehiculo{
    constructor(m, km){
        this.marca = m
        this.km = km
    }

    mostrar_datos_vehiculo(){
        console.log(`
            Marca: ${this.marca}
            Kilometraje: ${this.km}
        `)
    }
}