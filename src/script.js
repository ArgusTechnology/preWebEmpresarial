
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






