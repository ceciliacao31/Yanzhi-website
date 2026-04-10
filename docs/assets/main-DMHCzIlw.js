(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const y="https://conference-tracker-production.up.railway.app";function b(){return localStorage.getItem("ct_token")}function x(t){localStorage.setItem("ct_token",t)}function h(){localStorage.removeItem("ct_token")}async function v(t){const e=await fetch(`${y}/api/auth/me`,{headers:{Authorization:`Bearer ${t}`}});return e.ok?e.json():null}class k extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        `,this.highlightActiveLink(),document.addEventListener("DOMContentLoaded",()=>{var e;(e=document.getElementById("users-nav-link"))==null||e.addEventListener("click",i=>{i.preventDefault(),E()})})}highlightActiveLink(){const e=window.location.pathname;this.querySelectorAll(".nav-links a").forEach(n=>{const o=n.getAttribute("href"),r=e.split("/").pop()||"index.html";o.replace("./","").split("?")[0]===r?n.classList.add("active"):n.classList.remove("active")})}}class I extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer>
            <p>&copy; 2025 Yanzhi Wang</p>
        </footer>
        `}}customElements.define("shared-header",k);customElements.define("shared-footer",I);function B(){if(document.getElementById("ct-auth-modal"))return;const t=document.createElement("div");t.id="ct-auth-modal",t.style.cssText=`
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
    `,document.body.appendChild(t);let e="login";function i(n){e=n;const o=document.getElementById("ct-tab-login"),r=document.getElementById("ct-tab-register"),l=document.getElementById("ct-auth-submit"),a=document.getElementById("ct-password");n==="login"?(o.style.color="#3b82f6",o.style.borderBottomColor="#3b82f6",r.style.color="#64748b",r.style.borderBottomColor="transparent",l.textContent="Sign In",a.placeholder=""):(r.style.color="#3b82f6",r.style.borderBottomColor="#3b82f6",o.style.color="#64748b",o.style.borderBottomColor="transparent",l.textContent="Create Account",a.placeholder="At least 6 characters"),document.getElementById("ct-auth-error").style.display="none"}document.getElementById("ct-tab-login").addEventListener("click",()=>i("login")),document.getElementById("ct-tab-register").addEventListener("click",()=>i("register")),t.addEventListener("click",n=>{n.target===t&&m()}),document.getElementById("ct-auth-cancel").addEventListener("click",m),document.getElementById("ct-pending-close").addEventListener("click",m),document.getElementById("ct-logout-btn").addEventListener("click",()=>{h(),u(null),f(null),m()}),document.getElementById("ct-auth-form").addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("ct-email").value,r=document.getElementById("ct-password").value,l=document.getElementById("ct-auth-error"),a=document.getElementById("ct-auth-submit");l.style.display="none",a.disabled=!0,a.textContent="Please wait...";try{const g=await fetch(`${y}${e==="login"?"/api/auth/login":"/api/auth/register"}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:r})}),c=await g.json();g.ok?c.pending?(document.getElementById("ct-auth-form").style.display="none",document.getElementById("ct-auth-tabs").style.display="none",document.getElementById("ct-pending-text").textContent=c.message,document.getElementById("ct-pending-msg").style.display="block"):(x(c.token),u(c.user),f(c.user),m()):(l.textContent=c.error||"Something went wrong.",l.style.display="block")}catch{l.textContent="Network error. Please try again.",l.style.display="block"}finally{a.disabled=!1,i(e)}})}function E(){const t=document.getElementById("ct-auth-modal");if(!t)return;const e=b(),i=document.getElementById("ct-auth-form"),n=document.getElementById("ct-logged-in"),o=document.getElementById("ct-auth-tabs"),r=document.getElementById("ct-pending-msg");i.style.display="",n.style.display="none",r.style.display="none",o.style.display="",document.getElementById("ct-auth-error").style.display="none",document.getElementById("ct-email").value="",document.getElementById("ct-password").value="",e&&v(e).then(l=>{l&&(document.getElementById("ct-logged-email").textContent=l.email,i.style.display="none",o.style.display="none",n.style.display="block")}),t.style.display="flex"}function m(){const t=document.getElementById("ct-auth-modal");t&&(t.style.display="none")}let s=null,d=null;function p(t,e,i){const n=document.createElement("a");return n.href=t,n.target="_blank",n.rel="noopener noreferrer",n.textContent=e,n.style.cssText=`
        display: block;
        margin-top: ${i};
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        font-weight: 600;
        color: #444;
        text-decoration: none;
        border-left: 3px solid #ccc;
        background: #f5f5f5;
        border-radius: 0 4px 4px 0;
        transition: background 0.2s, color 0.2s;
    `,n.addEventListener("mouseenter",()=>{n.style.background="#e8e8e8",n.style.color="#1d4ed8",n.style.textDecoration="underline"}),n.addEventListener("mouseleave",()=>{n.style.background="#f5f5f5",n.style.color="#444",n.style.textDecoration="none"}),n}function u(t){const e=document.getElementById("embodyx-sidebar-logo")||document.querySelector(".university-logo");if(e)if(t){s||(s=p("/conferences/","Conference Tracker","2rem"),e.insertAdjacentElement("afterend",s));const i=t.role==="admin"||t.role==="owner";i&&!d?(d=p("/pr-tool.html","PR Tool","0.5rem"),s.insertAdjacentElement("afterend",d)):!i&&d&&(d.remove(),d=null)}else s&&(s.remove(),s=null),d&&(d.remove(),d=null)}function f(t){const e=document.getElementById("users-nav-link");e&&(e.textContent=t?`${t.email.split("@")[0]} ▾`:"Users")}document.addEventListener("DOMContentLoaded",async()=>{B(),setTimeout(()=>{var e;(e=document.getElementById("users-nav-link"))==null||e.addEventListener("click",i=>{i.preventDefault(),E()})},0);const t=b();if(t){const e=await v(t);e?(u(e),f(e)):h()}});
