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