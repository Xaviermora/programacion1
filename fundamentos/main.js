var numero = 4;

if (numero > 6){
    console.log('Estas aprobado');
}else{
    console.log('Nos vemos en diciembre');
}

var respuesta = (numero <= 4) ? 'Nos vemos en Marzo' : 'Nos vemos en Diciembre';
console.log(respuesta);

// Diferencia entre let y var

// Uso de var 
var x = 44;

if (x==44){
    var x = 74 // Misma variable
    console.log(x) // 74
}

console.log(x) // 74

// Uso de let
let y = 11;
if(y == 11){
    let y = 22;
    console.log(y) // 22
}

console.log(y) // 11