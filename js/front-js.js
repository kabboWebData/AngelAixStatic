!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=0)}([function(e,t){function o(){document.querySelectorAll(".weglot-custom-switcher-ajax").forEach(e=>{const t=e.getAttribute("data-wg-target"),o=e.getAttribute("data-wg-sibling"),n=t?document.querySelector(t):null,r=o?document.querySelector(o):null;n&&r?n.insertBefore(e,r):n?n.insertBefore(e,n.firstChild):r?r.parentNode.insertBefore(e,r):e.classList.add("weglot-default","weglot-invert"),e.classList.remove("weglot-custom-switcher-ajax")})}setTimeout(()=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>o()):o()},1500),document.addEventListener("DOMContentLoaded",(function(e){const t=document.querySelector(".country-selector");if(!t)return;const o=function(e){let t=0,o=0;do{t+=e.offsetTop||0,o+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:o}}(t).top,n=document.body,r=document.documentElement,c=Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight),l=window.getComputedStyle(t).getPropertyValue("position");window.getComputedStyle(t).getPropertyValue("bottom"),window.getComputedStyle(t).getPropertyValue("top");if(("fixed"!==l&&o>c/2||"fixed"===l&&o>100)&&(t.className+=" weglot-invert"),function(){try{return window.frameElement||window.self!==window.top}catch(e){return!1}}()){const e=document.querySelectorAll(".weglot-dropdown");null!==e&&[].forEach.call(e,(function(e){e.style.display="none"}))}document.addEventListener("click",e=>{null==e.target.closest(".country-selector.close_outside_click")&&document.querySelectorAll(".country-selector.close_outside_click.weglot-dropdown input").forEach(e=>{e.checked=!1})});const s=document.getElementsByClassName("country-selector"),u=e=>!e.className.includes("closed");let i;if(s.length>0){const e=document.getElementsByClassName("wgcurrent");for(let t of s){const o={ENTER:13,ESCAPE:27,ARROWUP:38,ARROWDOWN:40},n=()=>{const{bottom:e=0}=t.getBoundingClientRect();return e>window.innerHeight/2},r=()=>{t.classList.remove("closed"),document.querySelectorAll(".country-selector.weglot-dropdown input").checked=!0,t.setAttribute("aria-expanded","true")},c=()=>{t.classList.add("closed"),document.querySelectorAll(".country-selector.weglot-dropdown input").checked=!1,t.setAttribute("aria-expanded","false"),i&&(i.classList.remove("focus"),i=null)},l=e=>{getLangNameFromCode(e);t.setAttribute("aria-label","Language selected: "+e)},s=()=>{t.classList.contains("closed")?r():c(),i&&i.classList.remove("focus"),i=null};t.addEventListener("keydown",n=>{if(n.keyCode!==o.ENTER){if(n.keyCode===o.ARROWDOWN||n.keyCode===o.ARROWUP)return n.preventDefault(),void d(n.keyCode);n.keyCode===o.ESCAPE&&u(t)&&(n.preventDefault(),c(),t.focus())}else{for(var r=0;r<e.length;r++)e[r].click();if(i){const e=i.getAttribute("data-l");l(e),t.focus()}s()}}),t.addEventListener("mousedown",e=>{if(i){const e=i.getAttribute("data-l");l(e),t.focus()}s()}),t.className.includes("open_hover")&&(t.addEventListener("mouseenter",e=>{if(i){const e=i.getAttribute("data-l");l(e),t.focus()}s(),t.querySelector("input.weglot_choice").checked=!0}),t.addEventListener("mouseleave",e=>{if(i){const e=i.getAttribute("data-l");l(e),t.focus()}s(),t.querySelector("input.weglot_choice").checked=!1}));const d=l=>{const s=l===o.ARROWDOWN?"nextSibling":"previousSibling",d=n();if(i&&u(t))i[s]?(i.classList.remove("focus"),i=i[s],i.classList.add("focus"),i.childNodes[0].focus(),i.scrollIntoView({block:"center"})):(l===o.ARROWUP&&!d||l===o.ARROWDOWN&&d)&&(c(),t.focus());else{const n=d?"ul li.wg-li:last-child":"ul li.wg-li";for(var a=0;a<e.length;a++)i=e[a].parentNode.querySelector(n);if(!i)return;i.classList.add("focus"),i.childNodes[0].focus(),i.scrollIntoView({block:"center"});const c=l===o.ARROWUP&&d||l===o.ARROWDOWN&&!d;!u(t)&&c&&r()}}}}return!1}))}]);


