// Definición de la función con dos parámetros: a y b
function sumar(a, b) {
    return a + b; // Devuelve la suma de ambos
}

// Llamada a la función con dos valores 
let resultado = sumar(15, 25);

// 1. Mostrar el resultado en la consola 
console.log("El resultado de la suma es: " + resultado);

// 2. Mostrar el resultado en la interfaz de usuario
document.getElementById("resultado-pantalla").innerText = `El resultado es: ${resultado}`;