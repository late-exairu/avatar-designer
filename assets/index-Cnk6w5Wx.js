(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();function y(){const r=document.querySelector("#avatar"),o=document.querySelector("#border-color-input"),l=document.querySelector("#border-radius-input"),s=document.querySelector("#avatar-size-input"),t=document.querySelectorAll("#default-avatars button"),a=document.querySelector("#custom-avatar-image"),n=()=>{localStorage.setItem("borderColor",`${o.value}`),r.style.borderColor=o.value},v=()=>{r.style.borderRadius=`${l.value}%`},p=()=>{var u;c();const e=(u=a.files)==null?void 0:u[0];if(!e)return;const i=new FileReader;i.onload=()=>{r.src=i.result},i.readAsDataURL(e),a.classList.add("active")},m=()=>{localStorage.setItem("avatarSize",`${s.value}`),d(s.value)},b=e=>{h(),c();const i=e.currentTarget;r.src=i.dataset.defaultImage,i.classList.add("active")},d=e=>{r.style.width=`${e}px`,r.style.height=`${e}px`},f=()=>{const e=localStorage.getItem("avatarSize");e&&(s.value=e,d(e))},g=()=>{const e=localStorage.getItem("borderColor");e&&(o.value=e,r.style.borderColor=e)},c=()=>{const e=document.querySelector("#default-avatars button.active");e==null||e.classList.remove("active")},h=()=>{a.value="",a.classList.remove("active")};o.addEventListener("input",n),l.addEventListener("input",v),a.addEventListener("change",p),s.addEventListener("input",m),t.forEach(e=>{e.addEventListener("click",b)}),f(),g()}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Avatar designer</h1>
    <p>Upload your image or try one of the provided options:</p>

    <img id="avatar" class="avatar" width="138px" height="138px" src="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Precious" alt="Avatar" />
    
    <div class="buttons" id="default-avatars">
      <button data-default-image="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Precious" class="button active">Image 1</button>
      <button data-default-image="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Fluffy" class="button">Image 2</button>
      <button data-default-image="https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=Luna" class="button">Image 3</button>
    </div>

    <div class="option">
      <input class="option__file" type="file" id="custom-avatar-image" name="avatar" accept="image/*" />
    </div>

    <div class="option">
      <label class="option__label" for="border-radius">Adjust avatar size:</label>
      <input class="option__range" type="range" id="avatar-size-input" name="border-radius" min="100" max="300" value="138" />
    </div>

    <div class="option">
      <label class="option__label" for="border-radius">Adjust border radius:</label>
      <input class="option__range" type="range" id="border-radius-input" name="border-radius" min="0" max="50" value="25" />
    </div>

    <div class="option">
      <label class="option__label" for="border-color">Choose border color:</label>
      <input class="option__color" type="color" id="border-color-input" name="border-color" value="#e66465" />
    </div>
  </div>
`;y();
