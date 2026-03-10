function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Creamos una lista vacía para guardar los números
let todosLosPrimos = [];

for (let n = 1; n <= 1000; n++) {
    if (esPrimo(n)) {
        console.log(n); 
        todosLosPrimos.push(n); 
    }
}

document.getElementById("resultado-primos").innerText = todosLosPrimos.join(", ");