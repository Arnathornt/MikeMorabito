let index = 0;

function moverCarrusel(direction) {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const totalImages = images.length;
    
    index += direction;

    if (index < 0) {
        index = totalImages - 1;
    } else if (index >= totalImages) {
        index = 0;
    }

    const offset = -index * 100; 
    slide.style.transform = `translateX(${offset}%)`;
}

// Cambio automático cada 4 segundos
setInterval(() => moverCarrusel(1), 4000);
