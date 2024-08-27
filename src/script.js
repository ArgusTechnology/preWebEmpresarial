
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





document.addEventListener("DOMContentLoaded", function() {
    const contestants = document.querySelectorAll('.contestant');
  
    function checkVisibility() {
        const windowHeight = window.innerHeight;
  
        contestants.forEach((contestant, index) => {
            const rect = contestant.getBoundingClientRect();
  
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Mostrar concursante si está en la vista
                setTimeout(() => {
                    contestant.classList.add('show');
                    contestant.classList.remove('hide');
                }, index * 200); // Retardo entre la aparición de cada concursante
            } else {
                // Ocultar concursante si no está en la vista
                setTimeout(() => {
                    contestant.classList.add('hide');
                    contestant.classList.remove('show');
                }, index * 200); // Ocultar en orden
            }
        });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar la visibilidad al cargar la página
  });


  //formulario de contacto

  function sendEmail() {
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construir el enlace mailto con los valores del formulario
    const subject = encodeURIComponent(`Contacto desde el sitio web de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`);
    const mailtoLink = `mailto:argus.technologyit@gmail.com?subject=${subject}&body=${body}`;

    // Abrir el cliente de correo electrónico
    window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Ajusta el -70 si es necesario para compensar la altura del navbar
                    behavior: "smooth"
                });
            }
        });
    }
});


// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón "Ver Proyectos"
    const projectsButton = document.querySelector('a[href="#proyectos"]');

    // Agregar un listener al botón
    projectsButton.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Seleccionar la sección de proyectos
        const projectsSection = document.querySelector('#proyectos');

        // Desplazarse suavemente a la sección de proyectos
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

