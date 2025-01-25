function showContent(contentId) {
    const contentContainer = document.querySelector('.content-container');
    const buttons = document.querySelectorAll('#buttons button');

    // Remove 'content-active' from all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('content-active');
    });

    // Remove 'disabled' from all buttons
    buttons.forEach(button => {
        button.disabled = false;
    });

    // Add 'content-active' to the selected content section
    document.getElementById(contentId).classList.add('content-active');

    // Disable the clicked button
    document.getElementById(`${contentId}Button`).disabled = true;

    // Show the table
    contentContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.querySelector('.content-container');
    const buttons = document.querySelectorAll('#buttons button');
    const animatedHeader = document.getElementById('animated');
    const portfolioText = document.getElementById('portfolioText');
    const websiteText = document.getElementById('websiteText');
    let hasRevealed = false;

    // Hide the table initially
    contentContainer.style.display = 'none';

    // Initialize work experience
    document.getElementById('work').classList.add('content-active');

    // Portfolio Website reveal functionality
    animatedHeader.addEventListener('click', function () {
        // Bounce animation on every click
        this.style.animation = 'headerBounce 0.6s ease';
        setTimeout(() => {
            this.style.animation = 'float 4s ease-in-out infinite';
        }, 600);

        // Reveal effect only once
        if (!hasRevealed) {
            hasRevealed = true;
            animatedHeader.classList.add('reveal-active');
            portfolioText.classList.add('strike-through');
        }
    });

    // Hide the table when clicking outside of it
    document.addEventListener('click', function (event) {
        const isClickInsideTable = contentContainer.contains(event.target);
        const isClickOnButton = Array.from(buttons).some(button => button.contains(event.target));
        const isClickOnHeader = animatedHeader.contains(event.target);

        if (!isClickInsideTable && !isClickOnButton && !isClickOnHeader) {
            // Hide the table if the click is outside the table, not on a button, and not on the header
            contentContainer.style.display = 'none';

            // Re-enable all buttons
            buttons.forEach(button => {
                button.disabled = false;
            });

            // Hide all content sections
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('content-active');
            });
        }
    });
});