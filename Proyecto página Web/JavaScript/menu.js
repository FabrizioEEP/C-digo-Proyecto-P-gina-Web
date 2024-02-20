// Obtener el encabezado
var header = document.getElementById("header");

// Variable para almacenar la posición anterior de desplazamiento
var prevScrollpos = window.pageYOffset;

// Función para manejar el evento de desplazamiento
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // Muestra el menú al subir
        header.style.top = "0";
    } else {
        // Oculta el menú al bajar
        header.style.top = "-100px"; // Altura del menú
    }
    prevScrollpos = currentScrollPos;
}
