document.addEventListener('DOMContentLoaded', () => {
    // Animation des sections
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial state
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
    });

    // Event listeners
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
});
