(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function d(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=d(n);fetch(n.href,o)}})();const f="https://conference-tracker-production.up.railway.app";function p(){return localStorage.getItem("ct_token")}function v(t){localStorage.setItem("ct_token",t)}function y(){localStorage.removeItem("ct_token")}async function b(t){const e=await fetch(`${f}/api/auth/me`,{headers:{Authorization:`Bearer ${t}`}});return e.ok?e.json():null}class x extends HTMLElement{connectedCallback(){this.innerHTML=`
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
                    <li><a href="#" id="users-nav-link">Users</a></li>
                </ul>
            </nav>
        </div>
    </header>
        `,this.highlightActiveLink(),document.addEventListener("DOMContentLoaded",()=>{var e;(e=document.getElementById("users-nav-link"))==null||e.addEventListener("click",d=>{d.preventDefault(),h()})})}highlightActiveLink(){const e=window.location.pathname;this.querySelectorAll(".nav-links a").forEach(i=>{const n=i.getAttribute("href"),o=e.split("/").pop()||"index.html";n.replace("./","").split("?")[0]===o?i.classList.add("active"):i.classList.remove("active")})}}class E extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `}}customElements.define("shared-header",x);customElements.define("shared-footer",E);function k(){if(document.getElementById("ct-auth-modal"))return;const t=document.createElement("div");t.id="ct-auth-modal",t.style.cssText=`
        display:none; position:fixed; inset:0; z-index:9999;
        background:rgba(0,0,0,0.45); align-items:center; justify-content:center;
    `,t.innerHTML=`
        <div id="ct-auth-box" style="
            background:#fff; border-radius:8px; width:380px; max-width:90vw;
            overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.2);
        ">
            <div id="ct-auth-tabs" style="display:flex; border-bottom:1px solid #e2e8f0;">
                <button data-tab="login" style="
                    flex:1; padding:0.9rem; border:none; background:none; cursor:pointer;
                    font-size:0.95rem; font-weight:600; color:#3b82f6;
                    border-bottom:2px solid #3b82f6;
                " id="ct-tab-login">Sign In</button>
                <button data-tab="register" style="
                    flex:1; padding:0.9rem; border:none; background:none; cursor:pointer;
                    font-size:0.95rem; font-weight:600; color:#64748b; border-bottom:2px solid transparent;
                " id="ct-tab-register">Register</button>
            </div>

            <div id="ct-pending-msg" style="display:none; padding:1.5rem; text-align:center;">
                <p style="color:#166534; font-weight:600; margin-bottom:0.5rem;">Registration received!</p>
                <p id="ct-pending-text" style="color:#444; font-size:0.9rem;"></p>
                <button id="ct-pending-close" style="
                    margin-top:1rem; padding:0.5rem 1.2rem; background:#3b82f6;
                    color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:0.9rem;
                ">Close</button>
            </div>

            <form id="ct-auth-form" style="padding:1.25rem 1.5rem 1.5rem;">
                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-size:0.875rem; margin-bottom:0.4rem; color:#374151;">Email</label>
                    <input id="ct-email" type="email" required placeholder="you@example.com" style="
                        width:100%; padding:0.6rem 0.75rem; border:1px solid #d1d5db;
                        border-radius:6px; font-size:0.95rem; box-sizing:border-box;
                    ">
                </div>
                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-size:0.875rem; margin-bottom:0.4rem; color:#374151;">Password</label>
                    <input id="ct-password" type="password" required placeholder="" style="
                        width:100%; padding:0.6rem 0.75rem; border:1px solid #d1d5db;
                        border-radius:6px; font-size:0.95rem; box-sizing:border-box;
                    ">
                </div>
                <p id="ct-auth-error" style="display:none; color:#991b1b; font-size:0.875rem; margin-bottom:0.75rem;"></p>
                <div style="display:flex; gap:0.5rem;">
                    <button type="submit" id="ct-auth-submit" style="
                        flex:1; padding:0.65rem; background:#3b82f6; color:#fff;
                        border:none; border-radius:6px; cursor:pointer; font-size:0.95rem; font-weight:600;
                    ">Sign In</button>
                    <button type="button" id="ct-auth-cancel" style="
                        padding:0.65rem 1rem; background:#f1f5f9; color:#374151;
                        border:none; border-radius:6px; cursor:pointer; font-size:0.95rem;
                    ">Cancel</button>
                </div>
            </form>

            <div id="ct-logged-in" style="display:none; padding:1.5rem; text-align:center;">
                <p id="ct-logged-email" style="font-weight:600; margin-bottom:1rem; color:#1e293b;"></p>
                <button id="ct-logout-btn" style="
                    padding:0.5rem 1.2rem; background:#ef4444; color:#fff;
                    border:none; border-radius:6px; cursor:pointer; font-size:0.9rem;
                ">Sign Out</button>
            </div>
        </div>
    `,document.body.appendChild(t);let e="login";function d(i){e=i;const n=document.getElementById("ct-tab-login"),o=document.getElementById("ct-tab-register"),l=document.getElementById("ct-auth-submit"),s=document.getElementById("ct-password");i==="login"?(n.style.color="#3b82f6",n.style.borderBottomColor="#3b82f6",o.style.color="#64748b",o.style.borderBottomColor="transparent",l.textContent="Sign In",s.placeholder=""):(o.style.color="#3b82f6",o.style.borderBottomColor="#3b82f6",n.style.color="#64748b",n.style.borderBottomColor="transparent",l.textContent="Create Account",s.placeholder="At least 6 characters"),document.getElementById("ct-auth-error").style.display="none"}document.getElementById("ct-tab-login").addEventListener("click",()=>d("login")),document.getElementById("ct-tab-register").addEventListener("click",()=>d("register")),t.addEventListener("click",i=>{i.target===t&&c()}),document.getElementById("ct-auth-cancel").addEventListener("click",c),document.getElementById("ct-pending-close").addEventListener("click",c),document.getElementById("ct-logout-btn").addEventListener("click",()=>{y(),m(null),u(null),c()}),document.getElementById("ct-auth-form").addEventListener("submit",async i=>{i.preventDefault();const n=document.getElementById("ct-email").value,o=document.getElementById("ct-password").value,l=document.getElementById("ct-auth-error"),s=document.getElementById("ct-auth-submit");l.style.display="none",s.disabled=!0,s.textContent="Please wait...";try{const g=await fetch(`${f}${e==="login"?"/api/auth/login":"/api/auth/register"}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})}),a=await g.json();g.ok?a.pending?(document.getElementById("ct-auth-form").style.display="none",document.getElementById("ct-auth-tabs").style.display="none",document.getElementById("ct-pending-text").textContent=a.message,document.getElementById("ct-pending-msg").style.display="block"):(v(a.token),m(a.user),u(a.user),c()):(l.textContent=a.error||"Something went wrong.",l.style.display="block")}catch{l.textContent="Network error. Please try again.",l.style.display="block"}finally{s.disabled=!1,d(e)}})}function h(){const t=document.getElementById("ct-auth-modal");if(!t)return;const e=p(),d=document.getElementById("ct-auth-form"),i=document.getElementById("ct-logged-in"),n=document.getElementById("ct-auth-tabs"),o=document.getElementById("ct-pending-msg");d.style.display="",i.style.display="none",o.style.display="none",n.style.display="",document.getElementById("ct-auth-error").style.display="none",document.getElementById("ct-email").value="",document.getElementById("ct-password").value="",e&&b(e).then(l=>{l&&(document.getElementById("ct-logged-email").textContent=l.email,d.style.display="none",n.style.display="none",i.style.display="block")}),t.style.display="flex"}function c(){const t=document.getElementById("ct-auth-modal");t&&(t.style.display="none")}let r=null;function m(t){const e=document.querySelector(".university-logo");e&&(t?r||(r=document.createElement("a"),r.href="/conferences/",r.target="_blank",r.rel="noopener noreferrer",r.textContent="Conference Tracker",r.style.cssText=`
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
            `,r.addEventListener("mouseenter",()=>{r.style.background="#e8e8e8",r.style.color="#1d4ed8",r.style.textDecoration="underline"}),r.addEventListener("mouseleave",()=>{r.style.background="#f5f5f5",r.style.color="#444",r.style.textDecoration="none"}),e.insertAdjacentElement("afterend",r)):r&&(r.remove(),r=null))}function u(t){const e=document.getElementById("users-nav-link");e&&(e.textContent=t?`${t.email.split("@")[0]} ▾`:"Users")}document.addEventListener("DOMContentLoaded",async()=>{k(),setTimeout(()=>{var e;(e=document.getElementById("users-nav-link"))==null||e.addEventListener("click",d=>{d.preventDefault(),h()})},0);const t=p();if(t){const e=await b(t);e?(m(e),u(e)):y()}});
