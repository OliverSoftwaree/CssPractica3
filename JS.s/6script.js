// Función para determinar si un número es perfecto
function esPerfecto(numero) {
    let sumaDivisores = 0;

    // Buscamos los divisores desde 1 hasta antes del número
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    // Retorna true si la suma es igual al número, de lo contrario false
    return sumaDivisores === numero;
}

// Probamos la función con un número (ejemplo: 28)
let numPrueba = 28;
let resultado = esPerfecto(numPrueba);

// Mostrar en consola 
console.log(`¿Es el número ${numPrueba} perfecto?:`, resultado);

// Mostrar en la página
const mensaje = resultado 
    ? `¡Sí! El ${numPrueba} es un número perfecto.` 
    : `No, el ${numPrueba} no es un número perfecto.`;

document.getElementById("resultado-perfecto").innerText = mensaje;