// Configuração principal da aplicação
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initTypewriter();
    initScrollAnimations();
    initNavbar();
    initCounters();
    initSkillBars();
    initMobileMenu();
    initContactForm();
    initSmoothScrolling();
});

// Efeito Typewriter para o título principal
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    const texts = [
        'Analista de Dados',
        'Especialista em Gestão Pública',
        'MBA Data Science USP/Esalq',
        'Transformando dados em políticas públicas eficientes'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Deletando caracteres
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Mais rápido ao deletar
        } else {
            // Adicionando caracteres
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Normal ao digitar
        }

        // Quando terminar de digitar o texto
        if (!isDeleting && charIndex === currentText.length) {
            // Pausa no final do texto
            typeSpeed = 2000; // Espera antes de começar a deletar
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Quando terminar de deletar
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Próximo texto
            typeSpeed = 500; // Pausa antes de começar o próximo
        }

        // Continua o loop de digitação
        setTimeout(type, typeSpeed);
    }

    // Iniciar o efeito apó
