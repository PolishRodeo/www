document.addEventListener('DOMContentLoaded', function () {
    const versions = document.querySelectorAll('.sidebar-item');
    versions.forEach(version => {
        version.addEventListener('click', scrollToVersion);
    });

    function scrollToVersion(event) {
        const targetId = event.target.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
