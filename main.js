function showContent(contentId) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('content-active');
    });
    document.getElementById(contentId).classList.add('content-active');
}

document.addEventListener('DOMContentLoaded', function() {
    const animatedHeader = document.getElementById('animated');
    let hasRevealed = false;
    
    // Initialize work experience
    document.getElementById('work').classList.add('content-active');

    animatedHeader.addEventListener('click', function() {
        // Bounce animation on every click
        this.style.animation = 'headerBounce 0.6s ease';
        setTimeout(() => {
            this.style.animation = 'float 4s ease-in-out infinite';
        }, 600);

        // Reveal effect only once
        if (!hasRevealed) {
            hasRevealed = true;
            this.classList.add('reveal-active');
        }
    });
});