// script.js

// Smooth Scrolling Navigation
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
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
});

document.querySelectorAll('.fade-in-animation').forEach((element) => {
    fadeInObserver.observe(element);
});

// Floating WhatsApp Button Functionality
const whatsappButton = document.createElement('a');
whatsappButton.href = 'https://wa.me/YOUR_PHONE_NUMBER';
whatsappButton.className = 'whatsapp-float';
whatsappButton.target = '_blank';
whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
document.body.appendChild(whatsappButton);

// Mobile Menu Toggle
const mobileMenuToggle = () => {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
};

document.querySelector('.menu-toggle-button').addEventListener('click', mobileMenuToggle);

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
