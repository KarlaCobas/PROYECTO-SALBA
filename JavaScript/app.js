document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('#nav ul li a');
    
    // Toggle del menú
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        nav.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en enlace o fuera
    function closeMenu() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
    }
    
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    navOverlay.addEventListener('click', closeMenu);
    
    // Cerrar al hacer clic fuera en mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !nav.contains(e.target) && 
            !menuToggle.contains(e.target) &&
            nav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Cerrar menú al redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) closeMenu();
    });
});

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-title, .about-text, .about-image, .animal-item, .help-item, .contact-info, .contact-form, .footer-col, .footer-bottom');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    const animalItems = document.querySelectorAll('.animal-item');
    animalItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const helpItems = document.querySelectorAll('.help-item');
    helpItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
});

document.querySelectorAll('.help-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Esta sección estará disponible pronto. ¡Gracias por tu interés!');
        }
    });
});