// Highlight active link based on current URL
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    // Normalize path (handle root properly)
    // If path is "/" or "/index.html", we want to highlight "Home"

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Simple distinct check
        if (linkPath === './index.html' || linkPath === '/' || linkPath === '.') {
            if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
                link.classList.add('active');
            }
        } else if (currentPath.includes(linkPath.replace('./', ''))) {
            link.classList.add('active');
        }
    });
});
