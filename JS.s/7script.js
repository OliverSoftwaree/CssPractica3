// Función para verificar si es Primo
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Función para verificar si es Perfecto
function esPerfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) suma += i;
    }
    return suma === num && num !== 0;
}

function analizarNumero() {
    let entrada = prompt("Introduce un número para analizar:");
    let n = Number(entrada);

    if (isNaN(n) || entrada === "") {
        alert("Por favor, introduce un número válido.");
        return;
    }

    let primo = esPrimo(n);
    let perfecto = esPerfecto(n);
    let mensaje = "";

    if (primo && perfecto) {
        mensaje = `El número ${n} es PRIMO y también es PERFECTO.`;
    } else if (primo) {
        mensaje = `El número ${n} es PRIMO, pero NO es perfecto.`;
    } else if (perfecto) {
        mensaje = `El número ${n} es PERFECTO, pero NO es primo.`;
    } else {
        mensaje = `El número ${n} NO es ni primo ni perfecto.`;
    }

    // Mostrar en alerta 
    alert(mensaje);
    
    // También lo mostramos en la página para que se vea bien
    document.getElementById("resultado-pantalla").innerText = mensaje;
    console.log(mensaje);
}

// Ejecutar al cargar
analizarNumero();