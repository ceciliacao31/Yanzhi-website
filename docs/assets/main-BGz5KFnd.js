(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();class a extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `,this.highlightActiveLink()}highlightActiveLink(){const e=window.location.pathname;this.querySelectorAll(".nav-links a").forEach(r=>{const t=r.getAttribute("href"),n=e.split("/").pop()||"index.html";t.replace("./","").split("?")[0]===n?r.classList.add("active"):r.classList.remove("active")})}}class l extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `}}customElements.define("shared-header",a);customElements.define("shared-footer",l);document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".university-logo");if(!o)return;const e=document.createElement("a");e.href="/conferences/",e.textContent="Conference Tracker",e.style.cssText=`
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
    `,e.addEventListener("mouseenter",()=>{e.style.background="#e8e8e8",e.style.color="#1d4ed8",e.style.textDecoration="underline"}),e.addEventListener("mouseleave",()=>{e.style.background="#f5f5f5",e.style.color="#444",e.style.textDecoration="none"}),o.insertAdjacentElement("afterend",e)});
