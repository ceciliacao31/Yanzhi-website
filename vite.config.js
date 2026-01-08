import { defineConfig } from 'vite'

export default defineConfig({
    // IMPORTANT: This must match your repository name exactly
    base: '/Yanzhi-website/',
    build: {
        rollupOptions: {
            // This ensures your extra HTML pages (teaching, publications) are included in the build
            input: {
                main: 'index.html',
                publications: 'publications.html',
                teaching: 'teaching.html',
                students: 'students.html',
                news: 'news.html',
                opensource: 'opensource.html'
            }
        },
        outDir: 'docs', // Output to docs/ for easier GitHub Pages deployment
        emptyOutDir: true
    }
})