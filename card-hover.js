document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let highestZIndex = 1;

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            highestZIndex++;
            card.style.zIndex = highestZIndex;
        });

        card.addEventListener('mouseleave', () => {
            setTimeout(() => {
                card.style.zIndex = '';
            }, 300); 
        });
    });
});

