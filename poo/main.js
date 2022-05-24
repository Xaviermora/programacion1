import Vehiculo from "./vehiculo.js";

const mostrar = () => {
    const marca = document.getElementById('inp_marca').value
    const km = parseInt(document.getElementById('inp_km').value)

    const auto = new Vehiculo(marca, km)

    auto.mostrar_datos_vehiculo()
}

document.getElementById('btn_mostrar').addEventListener('click', mostrar)