// La variable 'anime' estará definida porque la cargaste antes en el HTML.
anime({
  targets: '.gatos', 
  translateY: 25, 
  duration: 6000, 
  loop: true 
});


anime({
  targets: '.reloj', // Esto hace rotar el contenedor completo
  rotate: 360,
  duration: 4000,
  loop: true,
  additive: true,
  easing: 'linear'
});

// --- Lógica de Interacción de las Cartas de Juego ---

document.addEventListener('DOMContentLoaded', () => {
    const cartas = document.querySelectorAll('.carta_juego');
    const clasesRotacion = ['rotar-derecha', 'rotar-izquierda', 'rotar-arriba', 'rotar-abajo'];


    cartas.forEach(carta => {
        carta.addEventListener('mouseenter', () => {
            cartas.forEach(c => {
                c.classList.remove('seleccionada', ...clasesRotacion);
            });
            carta.classList.add('seleccionada');
            anime({
                targets: carta,
                rotate: -5,
                duration: 300,
                easing: 'linear'
            })
        });
        carta.addEventListener('mouseleave', () => {
            // Animación de salida (rotación a 0 grados, que es lo normal)
            anime({
                targets: carta,
                rotate: 0, // Vuelve a la rotación normal (0 grados)
                duration: 300,
                easing: 'linear'
            });
            // Opcional: remover la clase 'seleccionada' al salir
            // carta.classList.remove('seleccionada'); 
        });
    });
    
});