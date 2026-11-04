// ==UserScript==
// @name         Tahlil Paneli (otomatik)
// @namespace    tahlil-paneli-otomatik
// @version      2.0.0
// @description  Tahliller sayfası açılınca ya da yenilenince paneli kendiliğinden kurar; panelin en son sürümünü her açılışta GitHub'dan indirir.
// @match        *://*.enabiz.gov.tr/*
// @run-at       document-idle
// @grant        none
// @sandbox      raw
// @noframes
// @updateURL    https://raw.githubusercontent.com/ruhattunc2176-tech/panel/main/tahlil-otomatik.user.js
// @downloadURL  https://raw.githubusercontent.com/ruhattunc2176-tech/panel/main/tahlil-otomatik.user.js
// @copyright    2026 Ruhat Tunç. Tüm hakları saklıdır.
// ==/UserScript==
/*! © 2026 Ruhat Tunç. Tüm hakları saklıdır. İzinsiz kopyalanamaz, değiştirilemez, dağıtılamaz. */
!function(){if(!window.__drEklentiYuklendi){window.__drEklentiYuklendi=!0;var e=null,n=!1;window.drPaneliBaslat=function t(){if(null===e)n||(n=!0,fetch("https://raw.githubusercontent.com/ruhattunc2176-tech/panel/main/tahlil.js?v="+Date.now(),{cache:"no-store"}).then((function(e){if(!e.ok)throw new Error("http "+e.status);return e.text()})).then((function(r){e=r,n=!1,t()}),(function(){n=!1;var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/ruhattunc2176-tech/panel@main/tahlil.js?v="+Date.now(),(document.head||document.documentElement).appendChild(e)})));else try{(0,eval)(e)}catch(e){console.error("Tahlil Paneli",e)}},window.drPaneliYenile=function(){try{["dr-gelismis-panel","dr-analiz-sonuc","dr-yukleniyor-bekleme"].forEach((function(e){var n=document.getElementById(e);n&&n.remove()}))}catch(e){}try{window.drPanelBekcisi&&(clearInterval(window.drPanelBekcisi),window.drPanelBekcisi=null)}catch(e){}i(),window.drPaneliBaslat()};var t=null,r=null;try{new MutationObserver((function(){r||(r=setTimeout((function(){r=null,d()}),400))})).observe(document.documentElement,{childList:!0,subtree:!0})}catch(e){}setInterval(d,1500),d(),document.addEventListener("keydown",(function(e){!e.altKey||e.ctrlKey||"k"!==e.key&&"K"!==e.key||(e.preventDefault(),window.drPaneliYenile())}))}function l(){try{for(var e=document.querySelectorAll('th, td[role="columnheader"], .dx-header-row td'),n="",t=0;t<e.length;t++){var r=e[t];r.closest&&r.closest("#dr-gelismis-panel")||(n+=" "+(r.textContent||""))}return n=n.toLocaleUpperCase("tr-TR"),/SONU[ÇC]/.test(n)&&(/REFERANS/.test(n)||/[İI]ŞLEM|ISLEM/.test(n))}catch(e){return!1}}function i(){window.drTumMaviOklarAcildi=!1,window.drTumMaviOklarAciliyor=!1,window.drTumMaviOkTiklananlar={}}function o(){return!(!window.drPanelBekcisi&&!window.drTumMaviOklarAciliyor)}function a(){try{for(var e=document.querySelectorAll("tbody tr"),n=0;n<e.length;n++){var t=e[n];if(!t.closest("#dr-gelismis-panel")&&/\d{1,2}[.\/-]\d{1,2}[.\/-](19|20)\d{2}/.test(t.textContent||""))return t}}catch(e){}return null}function d(){if(document.getElementById("dr-gelismis-panel"))return t?void(!t.isConnected&&!o()&&l()&&a()&&(t=null,window.drPaneliYenile())):void(t=a());t=null,o()||l()&&(i(),window.drPaneliBaslat())}}();
