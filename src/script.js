
        window.onscroll = function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-opacity-0');
            } else {
                navbar.classList.remove('bg-opacity-0');
            }
        };

        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));
        });

// modal carrusel

// script.js

// Manejar la apertura del modal al hacer clic en una imagen
document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const captionText = this.querySelector('.carousel-description').textContent;

        // Mostrar el modal y la imagen
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-caption').textContent = captionText;
        
        // Añadir clase para detener la animación del carrusel
        document.querySelector('.carousel-container').classList.add('modal-open');
    });
});

// Cerrar el modal cuando se haga clic en la X
document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';

    // Quitar la clase para reanudar la animación del carrusel
    document.querySelector('.carousel-container').classList.remove('modal-open');
});

// Cerrar el modal cuando se haga clic fuera de la imagen
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';

        // Quitar la clase para reanudar la animación del carrusel
        document.querySelector('.carousel-container').classList.remove('modal-open');
    }
});

