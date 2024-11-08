window.addEventListener('load', function() {
    // Espera 4 segundos antes de ocultar el preloader
    setTimeout(function() {
        // Añadir la clase 'loaded' al body cuando haya pasado el tiempo
        document.body.classList.add('loaded');
    }, 4000); // Retraso de 4 segundos
});

