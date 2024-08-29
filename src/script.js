
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


        //animacion del titulo de section 2

// Texto animado bajo el título "Proyectos Destacados"

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa Swiper solo para dispositivos móviles
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Función para ajustar la visibilidad según el tamaño de la pantalla
    function adjustVisibility() {
        const screenWidth = window.innerWidth;
        const mobileBreakpoint = 768; // Define el punto de ruptura para móviles

        if (screenWidth < mobileBreakpoint) {
            // Móvil: Mostrar carrusel y ocultar diseño en cuadrícula
            document.querySelector('.swiper-container').style.display = 'block';
            document.getElementById('grid-images').style.display = 'none';
        } else {
            // Pantalla grande: Mostrar diseño en cuadrícula y ocultar carrusel
            document.querySelector('.swiper-container').style.display = 'none';
            document.getElementById('grid-images').style.display = 'flex';
        }
    }

    // Ajusta la visibilidad al cargar la página
    adjustVisibility();

    // Ajusta la visibilidad al redimensionar la ventana
    window.addEventListener('resize', adjustVisibility);

});

        // Esperar a que el DOM esté completamente cargado
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

        document.addEventListener("DOMContentLoaded", function() {
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
    
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        });

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


        

//js del nuevo slider

const images = [
    "./images/projects/restaurantfoodfunday.png",
    "./images/projects/cafebaristas.png",
    "./images/projects/storeclothes.png",
    "./images/projects/hotelnice.png",
    "./images/projects/caferestaurant.png",
    "./images/projects/cochetaller.png",
    "./images/projects/kaffacoffegreen.png"

];

const backgroundDiv = document.getElementById('background');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;

function changeBackground() {
    backgroundDiv.classList.add('fade-out');
    setTimeout(() => {
        backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;
        console.log(backgroundDiv);
        backgroundDiv.classList.remove('fade-out');
        backgroundDiv.classList.add('fade-in');
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(() => {
            backgroundDiv.classList.remove('fade-in');
        }, 1000); // Match the duration with CSS transition
    }, 1000); // Match the duration with CSS transition
}

// Set initial background
backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;

// Change background image every 6 seconds


// Change background image when a thumbnail is clicked
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        backgroundDiv.classList.add('fade-out');
        setTimeout(() => {
            backgroundDiv.style.backgroundImage = `url(${images[index]})`;
            backgroundDiv.classList.remove('fade-out');
            backgroundDiv.classList.add('fade-in');
            currentIndex = index; // Update current index to match clicked thumbnail
            setTimeout(() => {
                backgroundDiv.classList.remove('fade-in');
            }, 1000); // Match the duration with CSS transition
        }, 1000); // Match the duration with CSS transition
    });
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






