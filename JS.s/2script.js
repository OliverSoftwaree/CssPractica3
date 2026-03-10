function iniciarCalculo() {
    // 1. Solicitar el número (prompt siempre devuelve texto)
    let entrada = prompt("Introduce un número para multiplicarlo por 2:");

   // 2. Convertir el texto a número para poder operar
    let numero = Number(entrada);

    // 3. Validar si lo ingresado es realmente un número
    if (isNaN(numero) || entrada === "") {
        alert("Por favor, introduce un número válido.");
    } else {
        let resultado = numero * 2;
        
        // 4. Mostrar el resultado en una alerta
        alert("El resultado de " + numero + " x 2 es: " + resultado);
        
        // 5. Mostrar el resultado en el HTML
        document.getElementById("mensaje").innerText = `El doble de ${numero} es ${resultado}`;
    }
}

// Ejecutar la función automáticamente al cargar la página por primera vez
iniciarCalculo();