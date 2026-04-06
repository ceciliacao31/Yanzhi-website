(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();class a extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `,this.highlightActiveLink()}highlightActiveLink(){const t=window.location.pathname;this.querySelectorAll(".nav-links a").forEach(n=>{const e=n.getAttribute("href"),r=t.split("/").pop()||"index.html";e.replace("./","").split("?")[0]===r?n.classList.add("active"):n.classList.remove("active")})}}class l extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `}}customElements.define("shared-header",a);customElements.define("shared-footer",l);document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".university-logo");if(!i)return;const t=document.createElement("a");t.href="/conferences/",t.style.cssText=`
        display: block;
        margin-top: 1rem;
        padding: 0.65rem 0.85rem;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 8px;
        text-decoration: none;
        transition: background 0.2s;
    `,t.innerHTML=`
        <div style="font-size: 0.78rem; font-weight: 600; color: #1d4ed8; letter-spacing: 0.02em;">Conference Tracker</div>
        <div style="font-size: 0.72rem; color: #3b82f6; margin-top: 0.15rem;">Paper deadlines & CFPs</div>
    `,t.addEventListener("mouseenter",()=>t.style.background="#dbeafe"),t.addEventListener("mouseleave",()=>t.style.background="#eff6ff"),i.insertAdjacentElement("afterend",t)});
