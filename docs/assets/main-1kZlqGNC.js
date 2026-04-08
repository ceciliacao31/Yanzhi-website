(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();const y="https://conference-tracker-production.up.railway.app";function b(){return localStorage.getItem("ct_token")}function x(n){localStorage.setItem("ct_token",n)}function h(){localStorage.removeItem("ct_token")}async function v(n){const e=await fetch(`${y}/api/auth/me`,{headers:{Authorization:`Bearer ${n}`}});return e.ok?e.json():null}class k extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `,this.highlightActiveLink(),document.addEventListener("DOMContentLoaded",()=>{var e;(e=document.getElementById("users-nav-link"))==null||e.addEventListener("click",l=>{l.preventDefault(),E()})})}highlightActiveLink(){const e=window.location.pathname;this.querySelectorAll(".nav-links a").forEach(t=>{const o=t.getAttribute("href"),r=e.split("/").pop()||"index.html";o.replace("./","").split("?")[0]===r?t.classList.add("active"):t.classList.remove("active")})}}class I extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `}}customElements.define("shared-header",k);customElements.define("shared-footer",I);function B(){if(document.getElementById("ct-auth-modal"))return;const n=document.createElement("div");n.id="ct-auth-modal",n.style.cssText=`
        display:none; position:fixed; inset:0; z-index:9999;
        background:rgba(0,0,0,0.45); align-items:center; justify-content:center;
    `,n.innerHTML=`
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
    `,document.body.appendChild(n);let e="login";function l(t){e=t;const o=document.getElementById("ct-tab-login"),r=document.getElementById("ct-tab-register"),i=document.getElementById("ct-auth-submit"),s=document.getElementById("ct-password");t==="login"?(o.style.color="#3b82f6",o.style.borderBottomColor="#3b82f6",r.style.color="#64748b",r.style.borderBottomColor="transparent",i.textContent="Sign In",s.placeholder=""):(r.style.color="#3b82f6",r.style.borderBottomColor="#3b82f6",o.style.color="#64748b",o.style.borderBottomColor="transparent",i.textContent="Create Account",s.placeholder="At least 6 characters"),document.getElementById("ct-auth-error").style.display="none"}document.getElementById("ct-tab-login").addEventListener("click",()=>l("login")),document.getElementById("ct-tab-register").addEventListener("click",()=>l("register")),n.addEventListener("click",t=>{t.target===n&&m()}),document.getElementById("ct-auth-cancel").addEventListener("click",m),document.getElementById("ct-pending-close").addEventListener("click",m),document.getElementById("ct-logout-btn").addEventListener("click",()=>{h(),u(null),f(null),m()}),document.getElementById("ct-auth-form").addEventListener("submit",async t=>{t.preventDefault();const o=document.getElementById("ct-email").value,r=document.getElementById("ct-password").value,i=document.getElementById("ct-auth-error"),s=document.getElementById("ct-auth-submit");i.style.display="none",s.disabled=!0,s.textContent="Please wait...";try{const g=await fetch(`${y}${e==="login"?"/api/auth/login":"/api/auth/register"}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:r})}),a=await g.json();g.ok?a.pending?(document.getElementById("ct-auth-form").style.display="none",document.getElementById("ct-auth-tabs").style.display="none",document.getElementById("ct-pending-text").textContent=a.message,document.getElementById("ct-pending-msg").style.display="block"):(x(a.token),u(a.user),f(a.user),m()):(i.textContent=a.error||"Something went wrong.",i.style.display="block")}catch{i.textContent="Network error. Please try again.",i.style.display="block"}finally{s.disabled=!1,l(e)}})}function E(){const n=document.getElementById("ct-auth-modal");if(!n)return;const e=b(),l=document.getElementById("ct-auth-form"),t=document.getElementById("ct-logged-in"),o=document.getElementById("ct-auth-tabs"),r=document.getElementById("ct-pending-msg");l.style.display="",t.style.display="none",r.style.display="none",o.style.display="",document.getElementById("ct-auth-error").style.display="none",document.getElementById("ct-email").value="",document.getElementById("ct-password").value="",e&&v(e).then(i=>{i&&(document.getElementById("ct-logged-email").textContent=i.email,l.style.display="none",o.style.display="none",t.style.display="block")}),n.style.display="flex"}function m(){const n=document.getElementById("ct-auth-modal");n&&(n.style.display="none")}let d=null,c=null;function p(n,e,l){const t=document.createElement("a");return t.href=n,t.target="_blank",t.rel="noopener noreferrer",t.textContent=e,t.style.cssText=`
        display: block;
        margin-top: ${l};
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        font-weight: 600;
        color: #444;
        text-decoration: none;
        border-left: 3px solid #ccc;
        background: #f5f5f5;
        border-radius: 0 4px 4px 0;
        transition: background 0.2s, color 0.2s;
    `,t.addEventListener("mouseenter",()=>{t.style.background="#e8e8e8",t.style.color="#1d4ed8",t.style.textDecoration="underline"}),t.addEventListener("mouseleave",()=>{t.style.background="#f5f5f5",t.style.color="#444",t.style.textDecoration="none"}),t}function u(n){const e=document.querySelector(".university-logo");e&&(n?(d||(d=p("/conferences/","Conference Tracker","2rem"),e.insertAdjacentElement("afterend",d)),c||(c=p("/pr-tool.html","PR Tool","0.5rem"),d.insertAdjacentElement("afterend",c))):(d&&(d.remove(),d=null),c&&(c.remove(),c=null)))}function f(n){const e=document.getElementById("users-nav-link");e&&(e.textContent=n?`${n.email.split("@")[0]} ▾`:"Users")}document.addEventListener("DOMContentLoaded",async()=>{B(),setTimeout(()=>{var e;(e=document.getElementById("users-nav-link"))==null||e.addEventListener("click",l=>{l.preventDefault(),E()})},0);const n=b();if(n){const e=await v(n);e?(u(e),f(e)):h()}});
