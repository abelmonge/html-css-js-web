document.addEventListener('DOMContentLoaded', () => {
    // Esto asegura que el código se ejecuta una vez que todo el HTML ha cargado.
    console.log("¡La página ha cargado correctamente! Archivo script.js conectado.");

    // 1. Obtener el botón por su ID
    const button = document.getElementById('alert-button');

    // 2. Añadir un "escuchador de eventos" (event listener) al botón
    if (button) {
        button.addEventListener('click', () => {
            // Acción a ejecutar al hacer clic:
            alert('¡El JavaScript funciona! Has hecho clic en el botón.');
            console.log("El usuario ha hecho clic en el botón de alerta.");
        });
    } else {
        console.error("No se encontró el botón con el ID 'alert-button'.");
    }
});
