const calificacion = prompt('Ingrese la calificación');

calificacion >= 7 ? console.log('Aprobado') : console.log('Desaprobado');

// template string
console.log(`
    Tu calificación en el taller
    de Programación 1 es: ${calificacion}
`)

document.write(calificacion);