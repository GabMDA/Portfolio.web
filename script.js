// Script pour le bouton retour en haut
(function() {
    'use strict';
    
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (!scrollTopBtn) {
        return; // Si le bouton n'existe pas, on arrête
    }
    
    // Afficher/masquer le bouton en fonction du scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Remonter en haut au clic
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// Navigation rapide pour la page à propos
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si on est sur la page apropos
    if (!document.querySelector('.apropos-intro')) {
        return; // On n'est pas sur la page apropos, on arrête
    }
    
    // Gestion des liens de navigation rapide
    const navLinks = document.querySelectorAll('.sidebar-block ul li a[href="#"]');
    
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            let targetElement;
            
            if (index === 0) {
                targetElement = document.querySelector('.apropos-intro');
            } else if (index >= 1 && index <= 5) {
                targetElement = document.querySelectorAll('.mission-section')[index - 1];
            } else if (index === 6) {
                targetElement = document.querySelectorAll('.mission-section')[5];
            }
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});