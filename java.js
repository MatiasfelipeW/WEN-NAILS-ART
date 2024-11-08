// Esperar a que todo el contenido de la página esté cargado
window.addEventListener('load', function() {
    // Seleccionamos el video del preloader
    const preloaderVideo = document.getElementById('preloader-video');
    
    // Esperamos 4 segundos (4000 ms) después de que el video haya comenzado
    setTimeout(function() {
        // Añadir la clase 'loaded' al body cuando haya pasado el tiempo
        document.body.classList.add('loaded');
    }, 4000); // Tiempo de retraso de 4 segundos
});

