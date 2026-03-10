// 1. Seleccionamos el campo de entrada
const inputTexto = document.getElementById("miInput");

// 2. Escuchamos el evento 'keydown'
inputTexto.addEventListener("keydown", function(event) {
    // 3. Mostramos la tecla presionada en la consola
    // event.key nos da el valor de la tecla (ej. 'a', 'Enter', 'Shift')
    console.log("Tecla presionada: " + event.key);
    
    // También podemos ver el código de la tecla si lo necesitas
    console.log("Código de tecla: " + event.code);
});