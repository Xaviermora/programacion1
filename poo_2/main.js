import Persona from "./persona.js";

function mostrar(){
    const ape = document.getElementById('inp_apellido').value
    const nom = document.getElementById('inp_nombre').value
    const dni = document.getElementById('inp_dni').value

    const persona = new Persona()

    persona.apellido = ape
    persona.dni = dni
    persona.nombre = nom

    persona.mostrar_datos_personales()
}

document.getElementById('btn_mostrar').addEventListener('click', mostrar)