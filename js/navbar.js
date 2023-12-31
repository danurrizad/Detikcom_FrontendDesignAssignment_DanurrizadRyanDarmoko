// NAVBAR TOGGLER ICON
document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.querySelector('.navbar-collapse');
    const togglerIcon = document.getElementById('toggler-icon');

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (targetElement.classList.contains('show') || targetElement.classList.contains('collapsing')) {
                console.log('ada');
                togglerIcon.classList.remove('bi-grid-fill');
                togglerIcon.classList.add('bi-x');
            } else {
                console.log('tidak ada');
                togglerIcon.classList.add('bi-grid-fill');
                togglerIcon.classList.remove('bi-x');
            }
        });
    });

    const config = { attributes: true, attributeFilter: ['class'] };
    observer.observe(targetElement, config);
});
