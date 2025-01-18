function showContent(contentId) {
    document.getElementById('education').classList.remove('content-active');
    document.getElementById('work').classList.remove('content-active');
    document.getElementById(contentId).classList.add('content-active');
}

document.addEventListener('click', function(event) {
    const education = document.getElementById('education');
    const work = document.getElementById('work');
    const isClickInsideEducation = education.contains(event.target);
    const isClickInsideWork = work.contains(event.target);
    const isClickOnButton = event.target.tagName === 'BUTTON';

    if (!isClickInsideEducation && !isClickInsideWork && !isClickOnButton) {
        education.classList.remove('content-active');
        work.classList.remove('content-active');
    }
});

let isAnimating = false; // Flag to track if animation is currently running

function updateText() {
    if (isAnimating) return; // Prevent retriggering the animation if it's already running

    isAnimating = true; // Mark animation as running

    let h1 = document.getElementById("animated");
    let originalText = h1.innerHTML; // Keep the original HTML content, including the <strike> tag

    // Wrap each letter in a <span> tag for animation, but keep the HTML structure intact
    h1.innerHTML = originalText.replace(/(?![^<]*>)(?=\S)(.)(?![^<]*>)/g, '<span>$1</span>');

    // Apply the wavy class to each span element with a delay
    Array.from(h1.children).forEach((span, index) => {
        if (span.tagName === "SPAN") {
            setTimeout(() => {
                span.classList.add("wavy");
            }, index * 60 + 200); // Stagger the animation slightly for each letter
        }
    });
    setTimeout(() => {
        // Remove the wavy class to reset the animation
        Array.from(h1.children).forEach(span => {
            if (span.tagName === "SPAN") {
                span.classList.remove("wavy");
            }
        });
        isAnimating = false; // Allow the animation to be retriggered
    }, 4000); // 4 seconds duration of the animation
}

// Apply the updateText function on the first click
document.getElementById('animated').addEventListener('click', updateText);


    