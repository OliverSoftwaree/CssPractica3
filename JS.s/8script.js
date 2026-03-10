// 1. Obtenemos la referencia del botón mediante su ID
const boton = document.getElementById("miBoton");

// 2. Agregamos el "escuchador" para el evento 'click'
boton.addEventListener("click", function() {
    // 3. Este mensaje aparecerá en la consola cada vez que hagas clic
    console.log("¡El botón ha sido presionado correctamente!");
    
    // Opcional: una marca de tiempo para ver cuándo ocurrió
    console.log("Hora del clic: " + new Date().toLocaleTimeString());
});