// script.js

// Smooth Scrolling Navigation
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Intersection Observer for Fade-In Animations
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in-animation').forEach((element) => {
    fadeInObserver.observe(element);
});

// Floating WhatsApp Button Functionality
const whatsappButton = document.createElement('a');
whatsappButton.href = 'https://wa.me/600508945?text=Hola%20ReformaLab%2C%20me%20gustar%C3%ADa%20obtener%20un%20presupuesto';
whatsappButton.className = 'whatsapp-float';
whatsappButton.target = '_blank';
whatsappButton.rel = 'noopener noreferrer';
whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
whatsappButton.title = 'Contacta con nosotros por WhatsApp';
document.body.appendChild(whatsappButton);

// Mobile Menu Toggle
const mobileMenuToggle = () => {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
};

const menuToggleButton = document.querySelector('.menu-toggle-button');
if (menuToggleButton) {
    menuToggleButton.addEventListener('click', mobileMenuToggle);
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.mobile-menu');
        if (menu) {
            menu.classList.remove('active');
        }
    });
});

// Hover Interactions
const hoverElements = document.querySelectorAll('.hover-element');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hover-active');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('hover-active');
    });
});

// Smooth Transitions
const smoothTransitionElements = document.querySelectorAll('.smooth-transition');
smoothTransitionElements.forEach(element => {
    element.style.transition = 'all 0.3s ease';
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (name && email && message) {
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            this.reset();
        }
    });
}