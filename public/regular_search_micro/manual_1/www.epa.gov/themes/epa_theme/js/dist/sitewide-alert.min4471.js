!function(e){function t(t){for(var n,l,u=t[0],i=t[1],c=t[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={9:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([113,0]),r()}({0:function(e,t){e.exports=Drupal},113:function(e,t,r){"use strict";var n;r(3),r(5),function(e){e.behaviors.sitewideAlert={attach:function(e){var t=once("sitewide-alert",".js-sitewide-alert",e),r=Date.now(),n=o();function o(){var e=localStorage.getItem("epaClosedAlerts");return e=null===e?{}:JSON.parse(e)}t.forEach((function(e){var t=e.dataset.alert,a=e.querySelector(".js-sitewide-alert__close");null!==n[t]&&r-12096e5<n[t]||e.classList.remove("u-hidden"),a.addEventListener("click",(function(r){var a=Date.now();(n=o())[t]=a,e.classList.add("u-hidden"),function(e){localStorage.setItem("epaClosedAlerts",JSON.stringify(e))}(n)}))}))}}}(((n=r(0))&&n.__esModule?n:{default:n}).default)}});