// Define Shared Header Component
class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header>
        <div class="header-content">
            <a href="./index.html" class="brand">Yanzhi Wang</a>
            <nav>
                <ul class="nav-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./news.html">News</a></li>
                    <li><a href="./publications.html">Publications</a></li>
                    <li><a href="./teaching.html">Teaching</a></li>
                    <li><a href="./students.html">Students</a></li>
                    <li><a href="./opensource.html">Open Source</a></li>
                    <li><a href="./CV.pdf" target="_blank">CV</a></li>
                </ul>
            </nav>
        </div>
    </header>
        `;
        this.highlightActiveLink();
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = this.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');

            // Simple check based on filename
            const filename = currentPath.split('/').pop() || 'index.html';

            // Clean up the href to match filename (remove ./ and query params)
            const cleanHref = linkHref.replace('./', '').split('?')[0];

            if (cleanHref === filename) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Define Shared Footer Component
class SharedFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `;
    }
}

// Register Components
customElements.define('shared-header', SharedHeader);
customElements.define('shared-footer', SharedFooter);

// Inject Conference Tracker link below NEU logo in sidebar
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.university-logo');
    if (!logo) return;
    const link = document.createElement('a');
    link.href = '/conferences/';
    link.textContent = 'Conference Tracker';
    link.style.cssText = `
        display: block;
        margin-top: 2rem;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        font-weight: 600;
        color: #444;
        text-decoration: none;
        border-left: 3px solid #ccc;
        background: #f5f5f5;
        border-radius: 0 4px 4px 0;
        transition: background 0.2s, color 0.2s;
    `;
    link.addEventListener('mouseenter', () => {
        link.style.background = '#e8e8e8';
        link.style.color = '#1d4ed8';
        link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseleave', () => {
        link.style.background = '#f5f5f5';
        link.style.color = '#444';
        link.style.textDecoration = 'none';
    });
    logo.insertAdjacentElement('afterend', link);
});
