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
            <p style="margin-bottom: 0.4rem;">
                <a href="/conferences/" style="color: #2563eb; text-decoration: none; font-weight: 500; font-size: 0.9rem; letter-spacing: 0.03em;">
                    📅 Conference Tracker
                </a>
            </p>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `;
    }
}

// Register Components
customElements.define('shared-header', SharedHeader);
customElements.define('shared-footer', SharedFooter);
