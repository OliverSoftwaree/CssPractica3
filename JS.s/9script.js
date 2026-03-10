// 1. Seleccionamos todos los elementos de la lista con la clase 'item'
const elementos = document.querySelectorAll(".item");

// 2. Recorremos cada elemento para añadirle los eventos
elementos.forEach((li) => {
    
    // Evento cuando el mouse ENTRA
    li.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#f1c40f"; // Color amarillo
        this.style.color = "white";
        console.log("Mouse sobre: " + this.innerText);
    });

    // Evento cuando el mouse SALE (para que vuelva a la normalidad)
    li.addEventListener("mouseout", function() {
        this.style.backgroundColor = ""; // Vuelve al color original
        this.style.color = "";
    });
});