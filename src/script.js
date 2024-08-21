
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

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000, // Cambia el valor para ajustar la velocidad
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
    });
});


//animacion del titulo de section 2

const textElement = document.querySelector('.animate-text');
const texts = [
    "Proyectos impulsados por pasión y dedicación...",
    "Juntos, damos vida a tus ideas con soluciones innovadoras..."
];

let index = 0;

function typeText() {
    textElement.textContent = texts[index];
    textElement.style.width = '0'; // Resetea la animación
    textElement.style.animation = 'none'; // Detiene la animación
    setTimeout(() => {
        textElement.style.animation = ''; // Reactiva la animación
    }, 10);
    index = (index + 1) % texts.length; // Cambia al siguiente texto
}

setInterval(typeText, 6000); // Cambia el texto cada 5 segundos

// Inicializa con el primer texto
typeText();






