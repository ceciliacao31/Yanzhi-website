(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();class a extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `,this.highlightActiveLink()}highlightActiveLink(){const t=window.location.pathname;this.querySelectorAll(".nav-links a").forEach(r=>{const e=r.getAttribute("href"),n=t.split("/").pop()||"index.html";e.replace("./","").split("?")[0]===n?r.classList.add("active"):r.classList.remove("active")})}}class l extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `}}customElements.define("shared-header",a);customElements.define("shared-footer",l);document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".university-logo");if(!o)return;const t=document.createElement("a");t.href="/conferences/",t.textContent="Conference Tracker",t.style.cssText=`
        display: block;
        margin-top: 1.2rem;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        font-weight: 600;
        color: #444;
        text-decoration: none;
        border-left: 3px solid #ccc;
        background: #f5f5f5;
        border-radius: 0 4px 4px 0;
        transition: background 0.2s;
    `,t.addEventListener("mouseenter",()=>{t.style.background="#e8e8e8",t.style.textDecoration="underline"}),t.addEventListener("mouseleave",()=>{t.style.background="#f5f5f5",t.style.textDecoration="none"}),o.insertAdjacentElement("afterend",t)});
