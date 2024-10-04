let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    slides.forEach((slide, i) => {
        slide.style.display = (i === currentIndex) ? 'block' : 'none';
    });
}

function moveSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
}

// Inicializa o carrossel
showSlide(currentIndex);
