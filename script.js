document.getElementById("btnSaludar").addEventListener("click", function (){ 
    alert("¡Hola mundo!");
   });

document.getElementById("contacto").addEventListener("click", function () { 
    console.log ("¡Hola Mundo!");
    });

    nombre = "Perla";
    let edad = 17 ;
    const empresa ="JC Desasarrolo Digital";


    // se relaiza la operacion 
    let nacimiento  = 2025 - edad;

    console.log(`Hola ${nombre}, tienes ${edad} años.`);
    console.log(`Naciste aproximadamente en ${nacimiento}.`);
    console.log(`Bienvenido a ${empresa}.`);

// Variables
let nombre2 = "Perla";      // String
let edad2 = 17;             // Number
let estudiante2 = true;     // Boolean
let promedio = 9.9;         // float 
let direccion = null;       // Null

// Operaciones matemáticas
let a = 30;
let b = 20;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let residuo = a % b;

// Operadores de comparación
let esIgual = edad2 === 17;
let esMayor = edad2 > 18;
let esMenorIgual = edad2 <= 17;



// Operadores lógicos
console.log(promedio >= 6 && estudiante2);
console.log(promedio >= 10 || estudiante2);
console.log(!estudiante2);


// Mostrar resultados
console.log("Nombre: " + nombre2);
console.log("Edad: " + edad2);
console.log("Estudiante: " + estudiante2);
console.log("Promedio: " + promedio);
console.log("Dirección: " + direccion);

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Residuo: " + residuo);

console.log("¿Es igual a 17?: " + esIgual);
console.log("¿Es mayor de 18?: " + esMayor);
console.log("¿Es menor o igual a 17?: " + esMenorIgual);