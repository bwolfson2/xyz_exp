!function(e){function t(t){for(var n,a,u=t[0],f=t[1],c=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var f=r[u];0!==o[f]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={7:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=f;i.push([102,0]),r()}({0:function(e,t){e.exports=Drupal},102:function(e,t,r){"use strict";var n;r(3),r(50),r(5),function(e){e.behaviors.protectedLinks={attach:function(t,r){var n=["work.epa.gov","intranet.epa.gov","usepa.sharepoint.com"];once("protected-links","a:not([href=''], [href^='#'], [href^='?'], [href^='/'], [href^='.'], [href^='javascript:'], [href^='mailto:'], [href^='tel:'])",t).forEach((function(t){if(t.hasAttribute("href")&&(o=t,i=!1,n.forEach((function(e){(o.host===e||o.host.endsWith("."+e))&&(i=!0)})),i)){var r=e.t("Exit to EPA’s internal site");t.insertAdjacentHTML("beforeend",'<svg class="icon icon--exit is-spaced-before" role="img"><title>'+r+'</title><use href="/themes/epa_theme/images/sprite.svg#lock"></use></svg>')}var o,i}))}}}(((n=r(0))&&n.__esModule?n:{default:n}).default)}});