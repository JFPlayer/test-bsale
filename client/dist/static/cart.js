(()=>{var e={81:()=>{var e=document.getElementById("btn-menu"),t=document.querySelector(".header__nav-menu");e.addEventListener("click",(function(e){t.classList.toggle("active")}))}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var t=function(){var e=localStorage.getItem("productsCart");return e?JSON.parse(e):[]};function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var r=1;r<arguments.length;r++){var c=null!=arguments[r]?arguments[r]:{};r%2?n(Object(c),!0).forEach((function(r){e(t,r,c[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}r(81);var i={cart:[]},u=function(e,t){switch(e){case"set-cart":i=o(o({},i),{},{cart:t}),r=document.querySelector("#cart-list"),n=document.createDocumentFragment(),("cart",i.cart).forEach((function(e){n.appendChild(function(e){var t=e.productId,r=e.name,n=e.category,c=e.src,a=e.quantity,o=e.price,i=e.discount,u=document.createElement("div");u.className="product";var d,p=document.createElement("div");p.className="product__image",c?((d=document.createElement("img")).src=c,d.alt=r):(d=document.createElement("div")).innerText="NO IMAGE",p.appendChild(d);var s=document.createElement("div");s.className="product__title";var l=document.createElement("h2"),m=document.createElement("h3");l.innerText=r,m.innerText=n,s.append(l,m);var f=document.createElement("div");f.className="product__info";var v=document.createElement("div");v.className="info-quantity";var O=document.createElement("button"),b=document.createElement("div"),y=document.createElement("button");O.innerText="-",O.dataset.action="substract",O.dataset.productId=t,b.innerText=a,y.innerText="+",y.dataset.action="add",y.dataset.productId=t,v.append(O,b,y);var g=document.createElement("div");g.className="info-price";var E=document.createElement("span"),j=document.createElement("span");E.innerText="Price: ";var P=i?(100-i)*o:o;return j.innerText="$".concat(P.toLocaleString("de-DE")),g.append(E,j),f.append(v,g),u.append(p,s,f),u}(e))})),r.innerHTML="",r.appendChild(n),r.addEventListener("click",d)}var r,n},d=function(e){var r=e.target.dataset,n=r.action,a=r.productId;n&&(function(e,r){var n=t().map((function(t){return t.productId===e?c(c({},t),{},{quantity:"add"===r?t.quantity+1:t.quantity-1}):t})).filter((function(e){return e.quantity}));localStorage.setItem("productsCart",JSON.stringify(n))}(a,n),u("set-cart",t()))};u("set-cart",t())})()})();