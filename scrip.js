// JavaScript para capturar el estado seleccionado
const formulario = document.getElementById("formulario-tarea");
const estadoSeleccionado = document.getElementById("estado-seleccionado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const estado = document.getElementById("estado").value;
    estadoSeleccionado.textContent = `Estado seleccionado: ${estado}`;
});