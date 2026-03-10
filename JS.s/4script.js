// 1. Seleccionamos el botón por su ID
const boton = document.getElementById("btnColor");

// 2. Agregamos el "escuchador" de eventos
boton.addEventListener("click", function() {
    const nuevoColor = "#e67e22"; // Naranja zanahoria
    
    // 3. Cambiamos el estilo del cuerpo (body)
    document.body.style.backgroundColor = nuevoColor;
    
    console.log("¡Botón presionado! El color cambió a " + nuevoColor);
});