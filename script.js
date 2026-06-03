// Identificamos nuestros elementos en la pantalla
const botonPlay = document.getElementById('boton-play');
const mensajeSorpresa = document.getElementById('mensaje-sorpresa');
const botonCerrar = document.getElementById('boton-cerrar');

// 👇 Identificamos la canción que acabamos de añadir al HTML
const musica = document.getElementById('mi-audio');

// Acción para cuando ella toque el gran botón de PLAY
botonPlay.addEventListener('click', function() {
    // 1. Mostramos el mensaje
    mensajeSorpresa.style.display = 'flex';
    
    // 2. ¡Reproducimos la canción!
    musica.play();
});

// Acción para cuando ella toque el botón de CERRAR
botonCerrar.addEventListener('click', function() {
    // 1. Ocultamos el mensaje
    mensajeSorpresa.style.display = 'none';
    
    // 2. Pausamos la canción
    musica.pause();
    
    // 3. Regresamos la canción al segundo 0 (al inicio)
    musica.currentTime = 0;
});
