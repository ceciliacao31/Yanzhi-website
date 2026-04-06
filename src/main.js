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

// Inject Conference Tracker card below NEU logo in sidebar
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.university-logo');
    if (!logo) return;
    const card = document.createElement('a');
    card.href = '/conferences/';
    card.style.cssText = `
        display: block;
        margin-top: 1rem;
        padding: 0.65rem 0.85rem;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 8px;
        text-decoration: none;
        transition: background 0.2s;
    `;
    card.innerHTML = `
        <div style="font-size: 0.78rem; font-weight: 600; color: #1d4ed8; letter-spacing: 0.02em;">Conference Tracker</div>
        <div style="font-size: 0.72rem; color: #3b82f6; margin-top: 0.15rem;">Paper deadlines & CFPs</div>
    `;
    card.addEventListener('mouseenter', () => card.style.background = '#dbeafe');
    card.addEventListener('mouseleave', () => card.style.background = '#eff6ff');
    logo.insertAdjacentElement('afterend', card);
});
