(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();class l extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `,this.highlightActiveLink()}highlightActiveLink(){const t=window.location.pathname;this.querySelectorAll(".nav-links a").forEach(r=>{const e=r.getAttribute("href"),n=t.split("/").pop()||"index.html";e.replace("./","").split("?")[0]===n?r.classList.add("active"):r.classList.remove("active")})}}class a extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `}}customElements.define("shared-header",l);customElements.define("shared-footer",a);document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".university-logo");if(!i)return;const t=document.createElement("a");t.href="/conferences/",t.textContent="Conference Tracker",t.style.cssText=`
        display: block;
        margin-top: 0.6rem;
        font-size: 0.8rem;
        color: #4b5563;
        text-decoration: none;
        text-align: center;
    `,t.addEventListener("mouseenter",()=>t.style.color="#1d4ed8"),t.addEventListener("mouseleave",()=>t.style.color="#4b5563"),i.insertAdjacentElement("afterend",t)});
