// ==UserScript==
// @name         Tahlil Paneli (otomatik)
// @namespace    tahlil-paneli-otomatik
// @version      2.0.1
// @description  Tahliller sayfası açılınca ya da yenilenince paneli kendiliğinden kurar; panelin en son sürümünü her açılışta GitHub'dan indirir.
// @match        *://*.enabiz.gov.tr/*
// @run-at       document-idle
// @grant        none
// @sandbox      raw
// @noframes
// @updateURL    https://raw.githubusercontent.com/ruhattunc2176-tech/panel/main/tahlil-otomatik.user.js
// @downloadURL  https://raw.githubusercontent.com/ruhattunc2176-tech/panel/main/tahlil-otomatik.user.js
// @copyright    2026. Tüm hakları saklıdır.
// ==/UserScript==
/*! © 2026. Tüm hakları saklıdır. İzinsiz kopyalanamaz, değiştirilemez, dağıtılamaz. */
!function(){if(!window.__drEklentiYuklendi){window.__drEklentiYuklendi=!0;var e=null,t=!1;window.drPaneliBaslat=function n(){if(null===e)t||(t=!0,fetch("https://raw.githubusercontent.com/ruhattunc2176-tech/panel/main/tahlil.js?v="+Date.now(),{cache:"no-store"}).then((function(e){if(!e.ok)throw new Error("http "+e.status);return e.text()})).then((function(r){e=r,t=!1,n()}),(function(){t=!1;var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/ruhattunc2176-tech/panel@main/tahlil.js?v="+Date.now(),(document.head||document.documentElement).appendChild(e)})));else try{(0,eval)(e)}catch(e){console.error("Tahlil Paneli",e)}},window.drPaneliYenile=function(){try{["dr-gelismis-panel","dr-analiz-sonuc","dr-yukleniyor-bekleme"].forEach((function(e){var t=document.getElementById(e);t&&t.remove()}))}catch(e){}try{window.drPanelBekcisi&&(clearInterval(window.drPanelBekcisi),window.drPanelBekcisi=null)}catch(e){}l(),window.drPaneliBaslat()};var n=null,r=null;try{new MutationObserver((function(){r||(r=setTimeout((function(){r=null,c()}),400))})).observe(document.documentElement,{childList:!0,subtree:!0})}catch(e){}setInterval(c,1500),c(),document.addEventListener("keydown",(function(e){!e.altKey||e.ctrlKey||"k"!==e.key&&"K"!==e.key||(e.preventDefault(),window.drPaneliYenile())}))}function i(){try{for(var e=document.querySelectorAll('th, td[role="columnheader"], .dx-header-row td'),t="",n=0;n<e.length;n++){var r=e[n];r.closest&&r.closest("#dr-gelismis-panel")||(t+=" "+(r.textContent||""))}return t=t.toLocaleUpperCase("tr-TR"),/SONU[ÇC]/.test(t)&&(/REFERANS/.test(t)||/[İI]ŞLEM|ISLEM/.test(t))}catch(e){return!1}}function l(){window.drTumMaviOklarAcildi=!1,window.drTumMaviOklarAciliyor=!1,window.drTumMaviOkTiklananlar={}}function o(){return!(!window.drPanelBekcisi&&!window.drTumMaviOklarAciliyor)}function a(){try{for(var e=document.querySelectorAll("tbody tr"),t=0;t<e.length;t++){var n=e[t];if(!n.closest("#dr-gelismis-panel")&&/\d{1,2}[.\/-]\d{1,2}[.\/-](19|20)\d{2}/.test(n.textContent||""))return n}}catch(e){}return null}function c(){if(function(){try{return!/patoloji|epikriz|radyoloji|re[cç]ete|ila[cç]/.test((location.pathname+" "+document.title).toLocaleLowerCase("tr-TR"))}catch(e){return!0}}()){if(document.getElementById("dr-gelismis-panel"))return n?void(!n.isConnected&&!o()&&i()&&a()&&(n=null,window.drPaneliYenile())):void(n=a());n=null,o()||i()&&(l(),window.drPaneliBaslat())}}}();
