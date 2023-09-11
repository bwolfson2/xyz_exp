/*
The following errors were found when attempting to minify this file:
- Line 3095: Parse error. syntax error
- Line 3101: Parse error. syntax error
- Line 3122: Parse error. IE8 (and below) will parse trailing commas in array and object literals incorrectly. If you are targeting newer versions of JS, set the appropriate language_in option.
*/
/**
* @license Includes Modernizr 2.5.3 (Custom Build) | MIT & BSD
* Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
*/
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function L(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,m.innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});var K=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s.flexbox=function(){return J("flexOrder")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){try{var d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigator.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){return e.fontface},s.generatedcontent=function(){return e.generatedcontent},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var M in s)C(s,M)&&(x=M.toLowerCase(),e[x]=s[M](),v.push((e[x]?"":"no-")+x));return e.input||L(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},D(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjax.js
Function.__typeName="Function";Function.__class=true;Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};Function.emptyFunction=Function.emptyMethod=function(){};Function._validateParams=function(e,c){var a;a=Function._validateParameterCount(e,c);if(a){a.popStackFrame();return a}for(var b=0;b<e.length;b++){var d=c[Math.min(b,c.length-1)],f=d.name;if(d.parameterArray)f+="["+(b-c.length+1)+"]";a=Function._validateParameter(e[b],d,f);if(a){a.popStackFrame();return a}}return null};Function._validateParameterCount=function(e,a){var c=a.length,d=0;for(var b=0;b<a.length;b++)if(a[b].parameterArray)c=Number.MAX_VALUE;else if(!a[b].optional)d++;if(e.length<d||e.length>c){var f=Error.parameterCount();f.popStackFrame();return f}return null};Function._validateParameter=function(c,a,h){var b,g=a.type,l=!!a.integer,k=!!a.domElement,m=!!a.mayBeNull;b=Function._validateParameterType(c,g,l,k,m,h);if(b){b.popStackFrame();return b}var e=a.elementType,f=!!a.elementMayBeNull;if(g===Array&&typeof c!=="undefined"&&c!==null&&(e||!f)){var j=!!a.elementInteger,i=!!a.elementDomElement;for(var d=0;d<c.length;d++){var n=c[d];b=Function._validateParameterType(n,e,j,i,f,h+"["+d+"]");if(b){b.popStackFrame();return b}}}return null};Function._validateParameterType=function(a,c,n,m,k,d){var b;if(typeof a==="undefined")if(k)return null;else{b=Error.argumentUndefined(d);b.popStackFrame();return b}if(a===null)if(k)return null;else{b=Error.argumentNull(d);b.popStackFrame();return b}if(c&&c.__enum){if(typeof a!=="number"){b=Error.argumentType(d,Object.getType(a),c);b.popStackFrame();return b}if(a%1===0){var e=c.prototype;if(!c.__flags||a===0){for(var i in e)if(e[i]===a)return null}else{var l=a;for(var i in e){var f=e[i];if(f===0)continue;if((f&a)===f)l-=f;if(l===0)return null}}}b=Error.argumentOutOfRange(d,a,String.format(Sys.Res.enumInvalidValue,a,c.getName()));b.popStackFrame();return b}if(m){var h;if(typeof a.nodeType!=="number"){var g=a.ownerDocument||a.document||a;if(g!=a){var j=g.defaultView||g.parentWindow;h=j!=a&&!(j.document&&a.document&&j.document===a.document)}else h=typeof g.body==="undefined"}else h=a.nodeType===3;if(h){b=Error.argument(d,Sys.Res.argumentDomElement);b.popStackFrame();return b}}if(c&&!c.isInstanceOfType(a)){b=Error.argumentType(d,Object.getType(a),c);b.popStackFrame();return b}if(c===Number&&n)if(a%1!==0){b=Error.argumentOutOfRange(d,a,Sys.Res.argumentInteger);b.popStackFrame();return b}return null};Error.__typeName="Error";Error.__class=true;Error.create=function(d,b){var a=new Error(d);a.message=d;if(b)for(var c in b)a[c]=b[c];a.popStackFrame();return a};Error.argument=function(a,c){var b="Sys.ArgumentException: "+(c?c:Sys.Res.argument);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentException",paramName:a});d.popStackFrame();return d};Error.argumentNull=function(a,c){var b="Sys.ArgumentNullException: "+(c?c:Sys.Res.argumentNull);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentNullException",paramName:a});d.popStackFrame();return d};Error.argumentOutOfRange=function(c,a,d){var b="Sys.ArgumentOutOfRangeException: "+(d?d:Sys.Res.argumentOutOfRange);if(c)b+="\n"+String.format(Sys.Res.paramName,c);if(typeof a!=="undefined"&&a!==null)b+="\n"+String.format(Sys.Res.actualValue,a);var e=Error.create(b,{name:"Sys.ArgumentOutOfRangeException",paramName:c,actualValue:a});e.popStackFrame();return e};Error.argumentType=function(d,c,b,e){var a="Sys.ArgumentTypeException: ";if(e)a+=e;else if(c&&b)a+=String.format(Sys.Res.argumentTypeWithTypes,c.getName(),b.getName());else a+=Sys.Res.argumentType;if(d)a+="\n"+String.format(Sys.Res.paramName,d);var f=Error.create(a,{name:"Sys.ArgumentTypeException",paramName:d,actualType:c,expectedType:b});f.popStackFrame();return f};Error.argumentUndefined=function(a,c){var b="Sys.ArgumentUndefinedException: "+(c?c:Sys.Res.argumentUndefined);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentUndefinedException",paramName:a});d.popStackFrame();return d};Error.format=function(a){var c="Sys.FormatException: "+(a?a:Sys.Res.format),b=Error.create(c,{name:"Sys.FormatException"});b.popStackFrame();return b};Error.invalidOperation=function(a){var c="Sys.InvalidOperationException: "+(a?a:Sys.Res.invalidOperation),b=Error.create(c,{name:"Sys.InvalidOperationException"});b.popStackFrame();return b};Error.notImplemented=function(a){var c="Sys.NotImplementedException: "+(a?a:Sys.Res.notImplemented),b=Error.create(c,{name:"Sys.NotImplementedException"});b.popStackFrame();return b};Error.parameterCount=function(a){var c="Sys.ParameterCountException: "+(a?a:Sys.Res.parameterCount),b=Error.create(c,{name:"Sys.ParameterCountException"});b.popStackFrame();return b};Error.prototype.popStackFrame=function(){if(typeof this.stack==="undefined"||this.stack===null||typeof this.fileName==="undefined"||this.fileName===null||typeof this.lineNumber==="undefined"||this.lineNumber===null)return;var a=this.stack.split("\n"),c=a[0],e=this.fileName+":"+this.lineNumber;while(typeof c!=="undefined"&&c!==null&&c.indexOf(e)===-1){a.shift();c=a[0]}var d=a[1];if(typeof d==="undefined"||d===null)return;var b=d.match(/@(.*):(\d+)$/);if(typeof b==="undefined"||b===null)return;this.fileName=b[1];this.lineNumber=parseInt(b[2]);a.shift();this.stack=a.join("\n")};Object.__typeName="Object";Object.__class=true;Object.getType=function(b){var a=b.constructor;if(!a||typeof a!=="function"||!a.__typeName||a.__typeName==="Object")return Object;return a};Object.getTypeName=function(a){return Object.getType(a).getName()};String.__typeName="String";String.__class=true;String.prototype.endsWith=function(a){return this.substr(this.length-a.length)===a};String.prototype.startsWith=function(a){return this.substr(0,a.length)===a};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.trimEnd=function(){return this.replace(/\s+$/,"")};String.prototype.trimStart=function(){return this.replace(/^\s+/,"")};String.format=function(){return String._toFormattedString(false,arguments)};String.localeFormat=function(){return String._toFormattedString(true,arguments)};String._toFormattedString=function(l,j){var c="",e=j[0];for(var a=0;true;){var f=e.indexOf("{",a),d=e.indexOf("}",a);if(f<0&&d<0){c+=e.slice(a);break}if(d>0&&(d<f||f<0)){c+=e.slice(a,d+1);a=d+2;continue}c+=e.slice(a,f);a=f+1;if(e.charAt(a)==="{"){c+="{";a++;continue}if(d<0)break;var h=e.substring(a,d),g=h.indexOf(":"),k=parseInt(g<0?h:h.substring(0,g),10)+1,i=g<0?"":h.substring(g+1),b=j[k];if(typeof b==="undefined"||b===null)b="";if(b.toFormattedString)c+=b.toFormattedString(i);else if(l&&b.localeFormat)c+=b.localeFormat(i);else if(b.format)c+=b.format(i);else c+=b.toString();a=d+1}return c};Boolean.__typeName="Boolean";Boolean.__class=true;Boolean.parse=function(b){var a=b.trim().toLowerCase();if(a==="false")return false;if(a==="true")return true};Date.__typeName="Date";Date.__class=true;Date._appendPreOrPostMatch=function(e,b){var d=0,a=false;for(var c=0,g=e.length;c<g;c++){var f=e.charAt(c);switch(f){case "'":if(a)b.append("'");else d++;a=false;break;case "\\":if(a)b.append("\\");a=!a;break;default:b.append(f);a=false}}return d};Date._expandFormat=function(a,b){if(!b)b="F";if(b.length===1)switch(b){case "d":return a.ShortDatePattern;case "D":return a.LongDatePattern;case "t":return a.ShortTimePattern;case "T":return a.LongTimePattern;case "F":return a.FullDateTimePattern;case "M":case "m":return a.MonthDayPattern;case "s":return a.SortableDateTimePattern;case "Y":case "y":return a.YearMonthPattern;default:throw Error.format(Sys.Res.formatInvalidString)}return b};Date._expandYear=function(c,a){if(a<100){var b=(new Date).getFullYear();a+=b-b%100;if(a>c.Calendar.TwoDigitYearMax)return a-100}return a};Date._getParseRegExp=function(b,e){if(!b._parseRegExp)b._parseRegExp={};else if(b._parseRegExp[e])return b._parseRegExp[e];var c=Date._expandFormat(b,e);c=c.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1");var a=new Sys.StringBuilder("^"),j=[],f=0,i=0,h=Date._getTokenRegExp(),d;while((d=h.exec(c))!==null){var l=c.slice(f,d.index);f=h.lastIndex;i+=Date._appendPreOrPostMatch(l,a);if(i%2===1){a.append(d[0]);continue}switch(d[0]){case "dddd":case "ddd":case "MMMM":case "MMM":a.append("(\\D+)");break;case "tt":case "t":a.append("(\\D*)");break;case "yyyy":a.append("(\\d{4})");break;case "fff":a.append("(\\d{3})");break;case "ff":a.append("(\\d{2})");break;case "f":a.append("(\\d)");break;case "dd":case "d":case "MM":case "M":case "yy":case "y":case "HH":case "H":case "hh":case "h":case "mm":case "m":case "ss":case "s":a.append("(\\d\\d?)");break;case "zzz":a.append("([+-]?\\d\\d?:\\d{2})");break;case "zz":case "z":a.append("([+-]?\\d\\d?)")}Array.add(j,d[0])}Date._appendPreOrPostMatch(c.slice(f),a);a.append("$");var k=a.toString().replace(/\s+/g,"\\s+"),g={"regExp":k,"groups":j};b._parseRegExp[e]=g;return g};Date._getTokenRegExp=function(){return /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g};Date.parseLocale=function(a){return Date._parse(a,Sys.CultureInfo.CurrentCulture,arguments)};Date.parseInvariant=function(a){return Date._parse(a,Sys.CultureInfo.InvariantCulture,arguments)};Date._parse=function(g,c,h){var e=false;for(var a=1,i=h.length;a<i;a++){var f=h[a];if(f){e=true;var b=Date._parseExact(g,f,c);if(b)return b}}if(!e){var d=c._getDateTimeFormats();for(var a=0,i=d.length;a<i;a++){var b=Date._parseExact(g,d[a],c);if(b)return b}}return null};Date._parseExact=function(s,y,j){s=s.trim();var m=j.dateTimeFormat,v=Date._getParseRegExp(m,y),x=(new RegExp(v.regExp)).exec(s);if(x===null)return null;var w=v.groups,f=null,c=null,h=null,g=null,d=0,n=0,o=0,e=0,k=null,r=false;for(var p=0,z=w.length;p<z;p++){var a=x[p+1];if(a)switch(w[p]){case "dd":case "d":h=parseInt(a,10);if(h<1||h>31)return null;break;case "MMMM":c=j._getMonthIndex(a);if(c<0||c>11)return null;break;case "MMM":c=j._getAbbrMonthIndex(a);if(c<0||c>11)return null;break;case "M":case "MM":var c=parseInt(a,10)-1;if(c<0||c>11)return null;break;case "y":case "yy":f=Date._expandYear(m,parseInt(a,10));if(f<0||f>9999)return null;break;case "yyyy":f=parseInt(a,10);if(f<0||f>9999)return null;break;case "h":case "hh":d=parseInt(a,10);if(d===12)d=0;if(d<0||d>11)return null;break;case "H":case "HH":d=parseInt(a,10);if(d<0||d>23)return null;break;case "m":case "mm":n=parseInt(a,10);if(n<0||n>59)return null;break;case "s":case "ss":o=parseInt(a,10);if(o<0||o>59)return null;break;case "tt":case "t":var u=a.toUpperCase();r=u===m.PMDesignator.toUpperCase();if(!r&&u!==m.AMDesignator.toUpperCase())return null;break;case "f":e=parseInt(a,10)*100;if(e<0||e>999)return null;break;case "ff":e=parseInt(a,10)*10;if(e<0||e>999)return null;break;case "fff":e=parseInt(a,10);if(e<0||e>999)return null;break;case "dddd":g=j._getDayIndex(a);if(g<0||g>6)return null;break;case "ddd":g=j._getAbbrDayIndex(a);if(g<0||g>6)return null;break;case "zzz":var q=a.split(/:/);if(q.length!==2)return null;var i=parseInt(q[0],10);if(i<-12||i>13)return null;var l=parseInt(q[1],10);if(l<0||l>59)return null;k=i*60+(a.startsWith("-")?-l:l);break;case "z":case "zz":var i=parseInt(a,10);if(i<-12||i>13)return null;k=i*60}}var b=new Date;if(f===null)f=b.getFullYear();if(c===null)c=b.getMonth();if(h===null)h=b.getDate();b.setFullYear(f,c,h);if(b.getDate()!==h)return null;if(g!==null&&b.getDay()!==g)return null;if(r&&d<12)d+=12;b.setHours(d,n,o,e);if(k!==null){var t=b.getMinutes()-(k+b.getTimezoneOffset());b.setHours(b.getHours()+parseInt(t/60,10),t%60)}return b};Date.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Date.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Date.prototype._toFormattedString=function(e,h){if(!e||e.length===0||e==="i")if(h&&h.name.length>0)return this.toLocaleString();else return this.toString();var d=h.dateTimeFormat;e=Date._expandFormat(d,e);var a=new Sys.StringBuilder,b;function c(a){if(a<10)return "0"+a;return a.toString()}function g(a){if(a<10)return "00"+a;if(a<100)return "0"+a;return a.toString()}var j=0,i=Date._getTokenRegExp();for(;true;){var l=i.lastIndex,f=i.exec(e),k=e.slice(l,f?f.index:e.length);j+=Date._appendPreOrPostMatch(k,a);if(!f)break;if(j%2===1){a.append(f[0]);continue}switch(f[0]){case "dddd":a.append(d.DayNames[this.getDay()]);break;case "ddd":a.append(d.AbbreviatedDayNames[this.getDay()]);break;case "dd":a.append(c(this.getDate()));break;case "d":a.append(this.getDate());break;case "MMMM":a.append(d.MonthNames[this.getMonth()]);break;case "MMM":a.append(d.AbbreviatedMonthNames[this.getMonth()]);break;case "MM":a.append(c(this.getMonth()+1));break;case "M":a.append(this.getMonth()+1);break;case "yyyy":a.append(this.getFullYear());break;case "yy":a.append(c(this.getFullYear()%100));break;case "y":a.append(this.getFullYear()%100);break;case "hh":b=this.getHours()%12;if(b===0)b=12;a.append(c(b));break;case "h":b=this.getHours()%12;if(b===0)b=12;a.append(b);break;case "HH":a.append(c(this.getHours()));break;case "H":a.append(this.getHours());break;case "mm":a.append(c(this.getMinutes()));break;case "m":a.append(this.getMinutes());break;case "ss":a.append(c(this.getSeconds()));break;case "s":a.append(this.getSeconds());break;case "tt":a.append(this.getHours()<12?d.AMDesignator:d.PMDesignator);break;case "t":a.append((this.getHours()<12?d.AMDesignator:d.PMDesignator).charAt(0));break;case "f":a.append(g(this.getMilliseconds()).charAt(0));break;case "ff":a.append(g(this.getMilliseconds()).substr(0,2));break;case "fff":a.append(g(this.getMilliseconds()));break;case "z":b=this.getTimezoneOffset()/60;a.append((b<=0?"+":"-")+Math.floor(Math.abs(b)));break;case "zz":b=this.getTimezoneOffset()/60;a.append((b<=0?"+":"-")+c(Math.floor(Math.abs(b))));break;case "zzz":b=this.getTimezoneOffset()/60;a.append((b<=0?"+":"-")+c(Math.floor(Math.abs(b)))+d.TimeSeparator+c(Math.abs(this.getTimezoneOffset()%60)))}}return a.toString()};Number.__typeName="Number";Number.__class=true;Number.parseLocale=function(a){return Number._parse(a,Sys.CultureInfo.CurrentCulture)};Number.parseInvariant=function(a){return Number._parse(a,Sys.CultureInfo.InvariantCulture)};Number._parse=function(b,o){b=b.trim();if(b.match(/^[+-]?infinity$/i))return parseFloat(b);if(b.match(/^0x[a-f0-9]+$/i))return parseInt(b);var a=o.numberFormat,g=Number._parseNumberNegativePattern(b,a,a.NumberNegativePattern),h=g[0],e=g[1];if(h===""&&a.NumberNegativePattern!==1){g=Number._parseNumberNegativePattern(b,a,1);h=g[0];e=g[1]}if(h==="")h="+";var j,d,f=e.indexOf("e");if(f<0)f=e.indexOf("E");if(f<0){d=e;j=null}else{d=e.substr(0,f);j=e.substr(f+1)}var c,k,m=d.indexOf(a.NumberDecimalSeparator);if(m<0){c=d;k=null}else{c=d.substr(0,m);k=d.substr(m+a.NumberDecimalSeparator.length)}c=c.split(a.NumberGroupSeparator).join("");var n=a.NumberGroupSeparator.replace(/\u00A0/g," ");if(a.NumberGroupSeparator!==n)c=c.split(n).join("");var l=h+c;if(k!==null)l+="."+k;if(j!==null){var i=Number._parseNumberNegativePattern(j,a,1);if(i[0]==="")i[0]="+";l+="e"+i[0]+i[1]}if(l.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/))return parseFloat(l);return Number.NaN};Number._parseNumberNegativePattern=function(a,d,e){var b=d.NegativeSign,c=d.PositiveSign;switch(e){case 4:b=" "+b;c=" "+c;case 3:if(a.endsWith(b))return ["-",a.substr(0,a.length-b.length)];else if(a.endsWith(c))return ["+",a.substr(0,a.length-c.length)];break;case 2:b+=" ";c+=" ";case 1:if(a.startsWith(b))return ["-",a.substr(b.length)];else if(a.startsWith(c))return ["+",a.substr(c.length)];break;case 0:if(a.startsWith("(")&&a.endsWith(")"))return ["-",a.substr(1,a.length-2)]}return ["",a]};Number.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Number.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Number.prototype._toFormattedString=function(d,j){if(!d||d.length===0||d==="i")if(j&&j.name.length>0)return this.toLocaleString();else return this.toString();var o=["n %","n%","%n"],n=["-n %","-n%","-%n"],p=["(n)","-n","- n","n-","n -"],m=["$n","n$","$ n","n $"],l=["($n)","-$n","$-n","$n-","(n$)","-n$","n-$","n$-","-n $","-$ n","n $-","$ n-","$ -n","n- $","($ n)","(n $)"];function g(a,c,d){for(var b=a.length;b<c;b++)a=d?"0"+a:a+"0";return a}function i(j,i,l,n,p){var h=l[0],k=1,o=Math.pow(10,i),m=Math.round(j*o)/o;if(!isFinite(m))m=j;j=m;var b=j.toString(),a="",c,e=b.split(/e/i);b=e[0];c=e.length>1?parseInt(e[1]):0;e=b.split(".");b=e[0];a=e.length>1?e[1]:"";var q;if(c>0){a=g(a,c,false);b+=a.slice(0,c);a=a.substr(c)}else if(c<0){c=-c;b=g(b,c+1,true);a=b.slice(-c,b.length)+a;b=b.slice(0,-c)}if(i>0){if(a.length>i)a=a.slice(0,i);else a=g(a,i,false);a=p+a}else a="";var d=b.length-1,f="";while(d>=0){if(h===0||h>d)if(f.length>0)return b.slice(0,d+1)+n+f+a;else return b.slice(0,d+1)+a;if(f.length>0)f=b.slice(d-h+1,d+1)+n+f;else f=b.slice(d-h+1,d+1);d-=h;if(k<l.length){h=l[k];k++}}return b.slice(0,d+1)+n+f+a}var a=j.numberFormat,e=Math.abs(this);if(!d)d="D";var b=-1;if(d.length>1)b=parseInt(d.slice(1),10);var c;switch(d.charAt(0)){case "d":case "D":c="n";if(b!==-1)e=g(""+e,b,true);if(this<0)e=-e;break;case "c":case "C":if(this<0)c=l[a.CurrencyNegativePattern];else c=m[a.CurrencyPositivePattern];if(b===-1)b=a.CurrencyDecimalDigits;e=i(Math.abs(this),b,a.CurrencyGroupSizes,a.CurrencyGroupSeparator,a.CurrencyDecimalSeparator);break;case "n":case "N":if(this<0)c=p[a.NumberNegativePattern];else c="n";if(b===-1)b=a.NumberDecimalDigits;e=i(Math.abs(this),b,a.NumberGroupSizes,a.NumberGroupSeparator,a.NumberDecimalSeparator);break;case "p":case "P":if(this<0)c=n[a.PercentNegativePattern];else c=o[a.PercentPositivePattern];if(b===-1)b=a.PercentDecimalDigits;e=i(Math.abs(this)*100,b,a.PercentGroupSizes,a.PercentGroupSeparator,a.PercentDecimalSeparator);break;default:throw Error.format(Sys.Res.formatBadFormatSpecifier)}var k=/n|\$|-|%/g,f="";for(;true;){var q=k.lastIndex,h=k.exec(c);f+=c.slice(q,h?h.index:c.length);if(!h)break;switch(h[0]){case "n":f+=e;break;case "$":f+=a.CurrencySymbol;break;case "-":f+=a.NegativeSign;break;case "%":f+=a.PercentSymbol}}return f};RegExp.__typeName="RegExp";RegExp.__class=true;Array.__typeName="Array";Array.__class=true;Array.add=Array.enqueue=function(a,b){a[a.length]=b};Array.addRange=function(a,b){a.push.apply(a,b)};Array.clear=function(a){a.length=0};Array.clone=function(a){if(a.length===1)return [a[0]];else return Array.apply(null,a)};Array.contains=function(a,b){return Array.indexOf(a,b)>=0};Array.dequeue=function(a){return a.shift()};Array.forEach=function(b,e,d){for(var a=0,f=b.length;a<f;a++){var c=b[a];if(typeof c!=="undefined")e.call(d,c,a,b)}};Array.indexOf=function(d,e,a){if(typeof e==="undefined")return -1;var c=d.length;if(c!==0){a=a-0;if(isNaN(a))a=0;else{if(isFinite(a))a=a-a%1;if(a<0)a=Math.max(0,c+a)}for(var b=a;b<c;b++)if(typeof d[b]!=="undefined"&&d[b]===e)return b}return -1};Array.insert=function(a,b,c){a.splice(b,0,c)};Array.parse=function(value){if(!value)return [];return eval(value)};Array.remove=function(b,c){var a=Array.indexOf(b,c);if(a>=0)b.splice(a,1);return a>=0};Array.removeAt=function(a,b){a.splice(b,1)};if(!window)this.window=this;window.Type=Function;Type.prototype.callBaseMethod=function(a,d,b){var c=this.getBaseMethod(a,d);if(!b)return c.apply(a);else return c.apply(a,b)};Type.prototype.getBaseMethod=function(d,c){var b=this.getBaseType();if(b){var a=b.prototype[c];return a instanceof Function?a:null}return null};Type.prototype.getBaseType=function(){return typeof this.__baseType==="undefined"?null:this.__baseType};Type.prototype.getInterfaces=function(){var a=[],b=this;while(b){var c=b.__interfaces;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Array.contains(a,e))a[a.length]=e}b=b.__baseType}return a};Type.prototype.getName=function(){return typeof this.__typeName==="undefined"?"":this.__typeName};Type.prototype.implementsInterface=function(d){this.resolveInheritance();var c=d.getName(),a=this.__interfaceCache;if(a){var e=a[c];if(typeof e!=="undefined")return e}else a=this.__interfaceCache={};var b=this;while(b){var f=b.__interfaces;if(f)if(Array.indexOf(f,d)!==-1)return a[c]=true;b=b.__baseType}return a[c]=false};Type.prototype.inheritsFrom=function(b){this.resolveInheritance();var a=this.__baseType;while(a){if(a===b)return true;a=a.__baseType}return false};Type.prototype.initializeBase=function(a,b){this.resolveInheritance();if(this.__baseType)if(!b)this.__baseType.apply(a);else this.__baseType.apply(a,b);return a};Type.prototype.isImplementedBy=function(a){if(typeof a==="undefined"||a===null)return false;var b=Object.getType(a);return !!(b.implementsInterface&&b.implementsInterface(this))};Type.prototype.isInstanceOfType=function(b){if(typeof b==="undefined"||b===null)return false;if(b instanceof this)return true;var a=Object.getType(b);return !!(a===this)||a.inheritsFrom&&a.inheritsFrom(this)||a.implementsInterface&&a.implementsInterface(this)};Type.prototype.registerClass=function(c,b,d){this.prototype.constructor=this;this.__typeName=c;this.__class=true;if(b){this.__baseType=b;this.__basePrototypePending=true}Sys.__upperCaseTypes[c.toUpperCase()]=this;if(d){this.__interfaces=[];for(var a=2,f=arguments.length;a<f;a++){var e=arguments[a];this.__interfaces.push(e)}}return this};Type.prototype.registerInterface=function(a){Sys.__upperCaseTypes[a.toUpperCase()]=this;this.prototype.constructor=this;this.__typeName=a;this.__interface=true;return this};Type.prototype.resolveInheritance=function(){if(this.__basePrototypePending){var b=this.__baseType;b.resolveInheritance();for(var a in b.prototype){var c=b.prototype[a];if(!this.prototype[a])this.prototype[a]=c}delete this.__basePrototypePending}};Type.getRootNamespaces=function(){return Array.clone(Sys.__rootNamespaces)};Type.isClass=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__class};Type.isInterface=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__interface};Type.isNamespace=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__namespace};Type.parse=function(typeName,ns){var fn;if(ns){fn=Sys.__upperCaseTypes[ns.getName().toUpperCase()+"."+typeName.toUpperCase()];return fn||null}if(!typeName)return null;if(!Type.__htClasses)Type.__htClasses={};fn=Type.__htClasses[typeName];if(!fn){fn=eval(typeName);Type.__htClasses[typeName]=fn}return fn};Type.registerNamespace=function(f){var d=window,c=f.split(".");for(var b=0;b<c.length;b++){var e=c[b],a=d[e];if(!a){a=d[e]={__namespace:true,__typeName:c.slice(0,b+1).join(".")};if(b===0)Sys.__rootNamespaces[Sys.__rootNamespaces.length]=a;a.getName=function(){return this.__typeName}}d=a}};window.Sys={__namespace:true,__typeName:"Sys",getName:function(){return "Sys"},__upperCaseTypes:{}};Sys.__rootNamespaces=[Sys];Sys.IDisposable=function(){};Sys.IDisposable.prototype={};Sys.IDisposable.registerInterface("Sys.IDisposable");Sys.StringBuilder=function(a){this._parts=typeof a!=="undefined"&&a!==null&&a!==""?[a.toString()]:[];this._value={};this._len=0};Sys.StringBuilder.prototype={append:function(a){this._parts[this._parts.length]=a},appendLine:function(a){this._parts[this._parts.length]=typeof a==="undefined"||a===null||a===""?"\r\n":a+"\r\n"},clear:function(){this._parts=[];this._value={};this._len=0},isEmpty:function(){if(this._parts.length===0)return true;return this.toString()===""},toString:function(a){a=a||"";var b=this._parts;if(this._len!==b.length){this._value={};this._len=b.length}var d=this._value;if(typeof d[a]==="undefined"){if(a!=="")for(var c=0;c<b.length;)if(typeof b[c]==="undefined"||b[c]===""||b[c]===null)b.splice(c,1);else c++;d[a]=this._parts.join(a)}return d[a]}};Sys.StringBuilder.registerClass("Sys.StringBuilder");if(!window.XMLHttpRequest)window.XMLHttpRequest=function(){var b=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP"];for(var a=0,c=b.length;a<c;a++)try{return new ActiveXObject(b[a])}catch(d){}return null};Sys.Browser={};Sys.Browser.InternetExplorer={};Sys.Browser.Firefox={};Sys.Browser.Safari={};Sys.Browser.Opera={};Sys.Browser.agent=null;Sys.Browser.hasDebuggerStatement=false;Sys.Browser.name=navigator.appName;Sys.Browser.version=parseFloat(navigator.appVersion);Sys.Browser.documentMode=0;if(navigator.userAgent.indexOf(" MSIE ")>-1){Sys.Browser.agent=Sys.Browser.InternetExplorer;Sys.Browser.version=parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);if(Sys.Browser.version>=8)if(document.documentMode>=7)Sys.Browser.documentMode=document.documentMode;Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" Firefox/")>-1){Sys.Browser.agent=Sys.Browser.Firefox;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]);Sys.Browser.name="Firefox";Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" AppleWebKit/")>-1){Sys.Browser.agent=Sys.Browser.Safari;Sys.Browser.version=parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]);Sys.Browser.name="Safari"}else if(navigator.userAgent.indexOf("Opera/")>-1)Sys.Browser.agent=Sys.Browser.Opera;Type.registerNamespace("Sys.UI");Sys._Debug=function(){};Sys._Debug.prototype={_appendConsole:function(a){if(typeof Debug!=="undefined"&&Debug.writeln)Debug.writeln(a);if(window.console&&window.console.log)window.console.log(a);if(window.opera)window.opera.postError(a);if(window.debugService)window.debugService.trace(a)},_appendTrace:function(b){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value+=b+"\n"},assert:function(c,a,b){if(!c){a=b&&this.assert.caller?String.format(Sys.Res.assertFailedCaller,a,this.assert.caller):String.format(Sys.Res.assertFailed,a);if(confirm(String.format(Sys.Res.breakIntoDebugger,a)))this.fail(a)}},clearTrace:function(){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value=""},fail:function(message){this._appendConsole(message);if(Sys.Browser.hasDebuggerStatement)eval("debugger")},trace:function(a){this._appendConsole(a);this._appendTrace(a)},traceDump:function(a,b){var c=this._traceDump(a,b,true)},_traceDump:function(a,c,f,b,d){c=c?c:"traceDump";b=b?b:"";if(a===null){this.trace(b+c+": null");return}switch(typeof a){case "undefined":this.trace(b+c+": Undefined");break;case "number":case "string":case "boolean":this.trace(b+c+": "+a);break;default:if(Date.isInstanceOfType(a)||RegExp.isInstanceOfType(a)){this.trace(b+c+": "+a.toString());break}if(!d)d=[];else if(Array.contains(d,a)){this.trace(b+c+": ...");return}Array.add(d,a);if(a==window||a===document||window.HTMLElement&&a instanceof HTMLElement||typeof a.nodeName==="string"){var k=a.tagName?a.tagName:"DomElement";if(a.id)k+=" - "+a.id;this.trace(b+c+" {"+k+"}")}else{var i=Object.getTypeName(a);this.trace(b+c+(typeof i==="string"?" {"+i+"}":""));if(b===""||f){b+="    ";var e,j,l,g,h;if(Array.isInstanceOfType(a)){j=a.length;for(e=0;e<j;e++)this._traceDump(a[e],"["+e+"]",f,b,d)}else for(g in a){h=a[g];if(!Function.isInstanceOfType(h))this._traceDump(h,g,f,b,d)}}}Array.remove(d,a)}}};Sys._Debug.registerClass("Sys._Debug");Sys.Debug=new Sys._Debug;Sys.Debug.isDebug=false;function Sys$Enum$parse(c,e){var a,b,i;if(e){a=this.__lowerCaseValues;if(!a){this.__lowerCaseValues=a={};var g=this.prototype;for(var f in g)a[f.toLowerCase()]=g[f]}}else a=this.prototype;if(!this.__flags){i=e?c.toLowerCase():c;b=a[i.trim()];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c,this.__typeName));return b}else{var h=(e?c.toLowerCase():c).split(","),j=0;for(var d=h.length-1;d>=0;d--){var k=h[d].trim();b=a[k];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c.split(",")[d].trim(),this.__typeName));j|=b}return j}}function Sys$Enum$toString(c){if(typeof c==="undefined"||c===null)return this.__string;var d=this.prototype,a;if(!this.__flags||c===0){for(a in d)if(d[a]===c)return a}else{var b=this.__sortedValues;if(!b){b=[];for(a in d)b[b.length]={key:a,value:d[a]};b.sort(function(a,b){return a.value-b.value});this.__sortedValues=b}var e=[],g=c;for(a=b.length-1;a>=0;a--){var h=b[a],f=h.value;if(f===0)continue;if((f&c)===f){e[e.length]=h.key;g-=f;if(g===0)break}}if(e.length&&g===0)return e.reverse().join(", ")}return ""}Type.prototype.registerEnum=function(b,c){Sys.__upperCaseTypes[b.toUpperCase()]=this;for(var a in this.prototype)this[a]=this.prototype[a];this.__typeName=b;this.parse=Sys$Enum$parse;this.__string=this.toString();this.toString=Sys$Enum$toString;this.__flags=c;this.__enum=true};Type.isEnum=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__enum};Type.isFlags=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__flags};Sys.EventHandlerList=function(){this._list={}};Sys.EventHandlerList.prototype={addHandler:function(b,a){Array.add(this._getEvent(b,true),a)},removeHandler:function(c,b){var a=this._getEvent(c);if(!a)return;Array.remove(a,b)},getHandler:function(b){var a=this._getEvent(b);if(!a||a.length===0)return null;a=Array.clone(a);return function(c,d){for(var b=0,e=a.length;b<e;b++)a[b](c,d)}},_getEvent:function(a,b){if(!this._list[a]){if(!b)return null;this._list[a]=[]}return this._list[a]}};Sys.EventHandlerList.registerClass("Sys.EventHandlerList");Sys.EventArgs=function(){};Sys.EventArgs.registerClass("Sys.EventArgs");Sys.EventArgs.Empty=new Sys.EventArgs;Sys.CancelEventArgs=function(){Sys.CancelEventArgs.initializeBase(this);this._cancel=false};Sys.CancelEventArgs.prototype={get_cancel:function(){return this._cancel},set_cancel:function(a){this._cancel=a}};Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs",Sys.EventArgs);Sys.INotifyPropertyChange=function(){};Sys.INotifyPropertyChange.prototype={};Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange");Sys.PropertyChangedEventArgs=function(a){Sys.PropertyChangedEventArgs.initializeBase(this);this._propertyName=a};Sys.PropertyChangedEventArgs.prototype={get_propertyName:function(){return this._propertyName}};Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs",Sys.EventArgs);Sys.INotifyDisposing=function(){};Sys.INotifyDisposing.prototype={};Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing");Sys.Component=function(){if(Sys.Application)Sys.Application.registerDisposableObject(this)};Sys.Component.prototype={_id:null,_initialized:false,_updating:false,get_events:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_id:function(){return this._id},set_id:function(a){this._id=a},get_isInitialized:function(){return this._initialized},get_isUpdating:function(){return this._updating},add_disposing:function(a){this.get_events().addHandler("disposing",a)},remove_disposing:function(a){this.get_events().removeHandler("disposing",a)},add_propertyChanged:function(a){this.get_events().addHandler("propertyChanged",a)},remove_propertyChanged:function(a){this.get_events().removeHandler("propertyChanged",a)},beginUpdate:function(){this._updating=true},dispose:function(){if(this._events){var a=this._events.getHandler("disposing");if(a)a(this,Sys.EventArgs.Empty)}delete this._events;Sys.Application.unregisterDisposableObject(this);Sys.Application.removeComponent(this)},endUpdate:function(){this._updating=false;if(!this._initialized)this.initialize();this.updated()},initialize:function(){this._initialized=true},raisePropertyChanged:function(b){if(!this._events)return;var a=this._events.getHandler("propertyChanged");if(a)a(this,new Sys.PropertyChangedEventArgs(b))},updated:function(){}};Sys.Component.registerClass("Sys.Component",null,Sys.IDisposable,Sys.INotifyPropertyChange,Sys.INotifyDisposing);function Sys$Component$_setProperties(a,i){var d,j=Object.getType(a),e=j===Object||j===Sys.UI.DomElement,h=Sys.Component.isInstanceOfType(a)&&!a.get_isUpdating();if(h)a.beginUpdate();for(var c in i){var b=i[c],f=e?null:a["get_"+c];if(e||typeof f!=="function"){var k=a[c];if(!b||typeof b!=="object"||e&&!k)a[c]=b;else Sys$Component$_setProperties(k,b)}else{var l=a["set_"+c];if(typeof l==="function")l.apply(a,[b]);else if(b instanceof Array){d=f.apply(a);for(var g=0,m=d.length,n=b.length;g<n;g++,m++)d[m]=b[g]}else if(typeof b==="object"&&Object.getType(b)===Object){d=f.apply(a);Sys$Component$_setProperties(d,b)}}}if(h)a.endUpdate()}function Sys$Component$_setReferences(c,b){for(var a in b){var e=c["set_"+a],d=$find(b[a]);e.apply(c,[d])}}var $create=Sys.Component.create=function(h,f,d,c,g){var a=g?new h(g):new h,b=Sys.Application,i=b.get_isCreatingComponents();a.beginUpdate();if(f)Sys$Component$_setProperties(a,f);if(d)for(var e in d)a["add_"+e](d[e]);if(a.get_id())b.addComponent(a);if(i){b._createdComponents[b._createdComponents.length]=a;if(c)b._addComponentToSecondPass(a,c);else a.endUpdate()}else{if(c)Sys$Component$_setReferences(a,c);a.endUpdate()}return a};Sys.UI.MouseButton=function(){throw Error.notImplemented()};Sys.UI.MouseButton.prototype={leftButton:0,middleButton:1,rightButton:2};Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton");Sys.UI.Key=function(){throw Error.notImplemented()};Sys.UI.Key.prototype={backspace:8,tab:9,enter:13,esc:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:127};Sys.UI.Key.registerEnum("Sys.UI.Key");Sys.UI.Point=function(a,b){this.x=a;this.y=b};Sys.UI.Point.registerClass("Sys.UI.Point");Sys.UI.Bounds=function(c,d,b,a){this.x=c;this.y=d;this.height=a;this.width=b};Sys.UI.Bounds.registerClass("Sys.UI.Bounds");Sys.UI.DomEvent=function(e){var a=e,b=this.type=a.type.toLowerCase();this.rawEvent=a;this.altKey=a.altKey;if(typeof a.button!=="undefined")this.button=typeof a.which!=="undefined"?a.button:a.button===4?Sys.UI.MouseButton.middleButton:a.button===2?Sys.UI.MouseButton.rightButton:Sys.UI.MouseButton.leftButton;if(b==="keypress")this.charCode=a.charCode||a.keyCode;else if(a.keyCode&&a.keyCode===46)this.keyCode=127;else this.keyCode=a.keyCode;this.clientX=a.clientX;this.clientY=a.clientY;this.ctrlKey=a.ctrlKey;this.target=a.target?a.target:a.srcElement;if(!b.startsWith("key"))if(typeof a.offsetX!=="undefined"&&typeof a.offsetY!=="undefined"){this.offsetX=a.offsetX;this.offsetY=a.offsetY}else if(this.target&&this.target.nodeType!==3&&typeof a.clientX==="number"){var c=Sys.UI.DomElement.getLocation(this.target),d=Sys.UI.DomElement._getWindow(this.target);this.offsetX=(d.pageXOffset||0)+a.clientX-c.x;this.offsetY=(d.pageYOffset||0)+a.clientY-c.y}this.screenX=a.screenX;this.screenY=a.screenY;this.shiftKey=a.shiftKey};Sys.UI.DomEvent.prototype={preventDefault:function(){if(this.rawEvent.preventDefault)this.rawEvent.preventDefault();else if(window.event)this.rawEvent.returnValue=false},stopPropagation:function(){if(this.rawEvent.stopPropagation)this.rawEvent.stopPropagation();else if(window.event)this.rawEvent.cancelBubble=true}};Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");var $addHandler=Sys.UI.DomEvent.addHandler=function(a,d,e){if(!a._events)a._events={};var c=a._events[d];if(!c)a._events[d]=c=[];var b;if(a.addEventListener){b=function(b){return e.call(a,new Sys.UI.DomEvent(b))};a.addEventListener(d,b,false)}else if(a.attachEvent){b=function(){var b={};try{b=Sys.UI.DomElement._getWindow(a).event}catch(c){}return e.call(a,new Sys.UI.DomEvent(b))};a.attachEvent("on"+d,b)}c[c.length]={handler:e,browserHandler:b}},$addHandlers=Sys.UI.DomEvent.addHandlers=function(e,d,c){for(var b in d){var a=d[b];if(c)a=Function.createDelegate(c,a);$addHandler(e,b,a)}},$clearHandlers=Sys.UI.DomEvent.clearHandlers=function(a){if(a._events){var e=a._events;for(var b in e){var d=e[b];for(var c=d.length-1;c>=0;c--)$removeHandler(a,b,d[c].handler)}a._events=null}},$removeHandler=Sys.UI.DomEvent.removeHandler=function(a,e,f){var d=null,c=a._events[e];for(var b=0,g=c.length;b<g;b++)if(c[b].handler===f){d=c[b].browserHandler;break}if(a.removeEventListener)a.removeEventListener(e,d,false);else if(a.detachEvent)a.detachEvent("on"+e,d);c.splice(b,1)};Sys.UI.DomElement=function(){};Sys.UI.DomElement.registerClass("Sys.UI.DomElement");Sys.UI.DomElement.addCssClass=function(a,b){if(!Sys.UI.DomElement.containsCssClass(a,b))if(a.className==="")a.className=b;else a.className+=" "+b};Sys.UI.DomElement.containsCssClass=function(b,a){return Array.contains(b.className.split(" "),a)};Sys.UI.DomElement.getBounds=function(a){var b=Sys.UI.DomElement.getLocation(a);return new Sys.UI.Bounds(b.x,b.y,a.offsetWidth||0,a.offsetHeight||0)};var $get=Sys.UI.DomElement.getElementById=function(f,e){if(!e)return document.getElementById(f);if(e.getElementById)return e.getElementById(f);var c=[],d=e.childNodes;for(var b=0;b<d.length;b++){var a=d[b];if(a.nodeType==1)c[c.length]=a}while(c.length){a=c.shift();if(a.id==f)return a;d=a.childNodes;for(b=0;b<d.length;b++){a=d[b];if(a.nodeType==1)c[c.length]=a}}return null};switch(Sys.Browser.agent){case Sys.Browser.InternetExplorer:Sys.UI.DomElement.getLocation=function(a){if(a.self||a.nodeType===9)return new Sys.UI.Point(0,0);var b=a.getBoundingClientRect();if(!b)return new Sys.UI.Point(0,0);var d=a.ownerDocument.documentElement,e=b.left-2+d.scrollLeft,f=b.top-2+d.scrollTop;try{var c=a.ownerDocument.parentWindow.frameElement||null;if(c){var g=c.frameBorder==="0"||c.frameBorder==="no"?2:0;e+=g;f+=g}}catch(h){}return new Sys.UI.Point(e,f)};break;case Sys.Browser.Safari:Sys.UI.DomElement.getLocation=function(c){if(c.window&&c.window===c||c.nodeType===9)return new Sys.UI.Point(0,0);var f=0,g=0,j=null,e=null,b;for(var a=c;a;j=a,(e=b,a=a.offsetParent)){b=Sys.UI.DomElement._getCurrentStyle(a);var d=a.tagName?a.tagName.toUpperCase():null;if((a.offsetLeft||a.offsetTop)&&(d!=="BODY"||(!e||e.position!=="absolute"))){f+=a.offsetLeft;g+=a.offsetTop}}b=Sys.UI.DomElement._getCurrentStyle(c);var h=b?b.position:null;if(!h||h!=="absolute")for(var a=c.parentNode;a;a=a.parentNode){d=a.tagName?a.tagName.toUpperCase():null;if(d!=="BODY"&&d!=="HTML"&&(a.scrollLeft||a.scrollTop)){f-=a.scrollLeft||0;g-=a.scrollTop||0}b=Sys.UI.DomElement._getCurrentStyle(a);var i=b?b.position:null;if(i&&i==="absolute")break}return new Sys.UI.Point(f,g)};break;case Sys.Browser.Opera:Sys.UI.DomElement.getLocation=function(b){if(b.window&&b.window===b||b.nodeType===9)return new Sys.UI.Point(0,0);var d=0,e=0,i=null;for(var a=b;a;i=a,a=a.offsetParent){var f=a.tagName;d+=a.offsetLeft||0;e+=a.offsetTop||0}var g=b.style.position,c=g&&g!=="static";for(var a=b.parentNode;a;a=a.parentNode){f=a.tagName?a.tagName.toUpperCase():null;if(f!=="BODY"&&f!=="HTML"&&(a.scrollLeft||a.scrollTop)&&(c&&(a.style.overflow==="scroll"||a.style.overflow==="auto"))){d-=a.scrollLeft||0;e-=a.scrollTop||0}var h=a&&a.style?a.style.position:null;c=c||h&&h!=="static"}return new Sys.UI.Point(d,e)};break;default:Sys.UI.DomElement.getLocation=function(d){if(d.window&&d.window===d||d.nodeType===9)return new Sys.UI.Point(0,0);var e=0,f=0,i=null,g=null,b=null;for(var a=d;a;i=a,(g=b,a=a.offsetParent)){var c=a.tagName?a.tagName.toUpperCase():null;b=Sys.UI.DomElement._getCurrentStyle(a);if((a.offsetLeft||a.offsetTop)&&!(c==="BODY"&&(!g||g.position!=="absolute"))){e+=a.offsetLeft;f+=a.offsetTop}if(i!==null&&b){if(c!=="TABLE"&&c!=="TD"&&c!=="HTML"){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}if(c==="TABLE"&&(b.position==="relative"||b.position==="absolute")){e+=parseInt(b.marginLeft)||0;f+=parseInt(b.marginTop)||0}}}b=Sys.UI.DomElement._getCurrentStyle(d);var h=b?b.position:null;if(!h||h!=="absolute")for(var a=d.parentNode;a;a=a.parentNode){c=a.tagName?a.tagName.toUpperCase():null;if(c!=="BODY"&&c!=="HTML"&&(a.scrollLeft||a.scrollTop)){e-=a.scrollLeft||0;f-=a.scrollTop||0;b=Sys.UI.DomElement._getCurrentStyle(a);if(b){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}}}return new Sys.UI.Point(e,f)}}Sys.UI.DomElement.removeCssClass=function(d,c){var a=" "+d.className+" ",b=a.indexOf(" "+c+" ");if(b>=0)d.className=(a.substr(0,b)+" "+a.substring(b+c.length+1,a.length)).trim()};Sys.UI.DomElement.setLocation=function(b,c,d){var a=b.style;a.position="absolute";a.left=c+"px";a.top=d+"px"};Sys.UI.DomElement.toggleCssClass=function(b,a){if(Sys.UI.DomElement.containsCssClass(b,a))Sys.UI.DomElement.removeCssClass(b,a);else Sys.UI.DomElement.addCssClass(b,a)};Sys.UI.DomElement.getVisibilityMode=function(a){return a._visibilityMode===Sys.UI.VisibilityMode.hide?Sys.UI.VisibilityMode.hide:Sys.UI.VisibilityMode.collapse};Sys.UI.DomElement.setVisibilityMode=function(a,b){Sys.UI.DomElement._ensureOldDisplayMode(a);if(a._visibilityMode!==b){a._visibilityMode=b;if(Sys.UI.DomElement.getVisible(a)===false)if(a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none";a._visibilityMode=b}};Sys.UI.DomElement.getVisible=function(b){var a=b.currentStyle||Sys.UI.DomElement._getCurrentStyle(b);if(!a)return true;return a.visibility!=="hidden"&&a.display!=="none"};Sys.UI.DomElement.setVisible=function(a,b){if(b!==Sys.UI.DomElement.getVisible(a)){Sys.UI.DomElement._ensureOldDisplayMode(a);a.style.visibility=b?"visible":"hidden";if(b||a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none"}};Sys.UI.DomElement._ensureOldDisplayMode=function(a){if(!a._oldDisplayMode){var b=a.currentStyle||Sys.UI.DomElement._getCurrentStyle(a);a._oldDisplayMode=b?b.display:null;if(!a._oldDisplayMode||a._oldDisplayMode==="none")switch(a.tagName.toUpperCase()){case "DIV":case "P":case "ADDRESS":case "BLOCKQUOTE":case "BODY":case "COL":case "COLGROUP":case "DD":case "DL":case "DT":case "FIELDSET":case "FORM":case "H1":case "H2":case "H3":case "H4":case "H5":case "H6":case "HR":case "IFRAME":case "LEGEND":case "OL":case "PRE":case "TABLE":case "TD":case "TH":case "TR":case "UL":a._oldDisplayMode="block";break;case "LI":a._oldDisplayMode="list-item";break;default:a._oldDisplayMode="inline"}}};Sys.UI.DomElement._getWindow=function(a){var b=a.ownerDocument||a.document||a;return b.defaultView||b.parentWindow};Sys.UI.DomElement._getCurrentStyle=function(a){if(a.nodeType===3)return null;var c=Sys.UI.DomElement._getWindow(a);if(a.documentElement)a=a.documentElement;var b=c&&a!==c&&c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle||a.style;if(!b&&Sys.Browser.agent===Sys.Browser.Safari&&a.style){var g=a.style.display,f=a.style.position;a.style.position="absolute";a.style.display="block";var e=c.getComputedStyle(a,null);a.style.display=g;a.style.position=f;b={};for(var d in e)b[d]=e[d];b.display="none"}return b};Sys.IContainer=function(){};Sys.IContainer.prototype={};Sys.IContainer.registerInterface("Sys.IContainer");Sys._ScriptLoader=function(){this._scriptsToLoad=null;this._sessions=[];this._scriptLoadedDelegate=Function.createDelegate(this,this._scriptLoadedHandler)};Sys._ScriptLoader.prototype={dispose:function(){this._stopSession();this._loading=false;if(this._events)delete this._events;this._sessions=null;this._currentSession=null;this._scriptLoadedDelegate=null},loadScripts:function(d,b,c,a){var e={allScriptsLoadedCallback:b,scriptLoadFailedCallback:c,scriptLoadTimeoutCallback:a,scriptsToLoad:this._scriptsToLoad,scriptTimeout:d};this._scriptsToLoad=null;this._sessions[this._sessions.length]=e;if(!this._loading)this._nextSession()},notifyScriptLoaded:function(){if(!this._loading)return;this._currentTask._notified++;if(Sys.Browser.agent===Sys.Browser.Safari)if(this._currentTask._notified===1)window.setTimeout(Function.createDelegate(this,function(){this._scriptLoadedHandler(this._currentTask.get_scriptElement(),true)}),0)},queueCustomScriptTag:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,a)},queueScriptBlock:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{text:a})},queueScriptReference:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{src:a})},_createScriptElement:function(c){var a=document.createElement("script");a.type="text/javascript";for(var b in c)a[b]=c[b];return a},_loadScriptsInternal:function(){var b=this._currentSession;if(b.scriptsToLoad&&b.scriptsToLoad.length>0){var c=Array.dequeue(b.scriptsToLoad),a=this._createScriptElement(c);if(a.text&&Sys.Browser.agent===Sys.Browser.Safari){a.innerHTML=a.text;delete a.text}if(typeof c.src==="string"){this._currentTask=new Sys._ScriptLoaderTask(a,this._scriptLoadedDelegate);this._currentTask.execute()}else{document.getElementsByTagName("head")[0].appendChild(a);Sys._ScriptLoader._clearScript(a);this._loadScriptsInternal()}}else{this._stopSession();var d=b.allScriptsLoadedCallback;if(d)d(this);this._nextSession()}},_nextSession:function(){if(this._sessions.length===0){this._loading=false;this._currentSession=null;return}this._loading=true;var a=Array.dequeue(this._sessions);this._currentSession=a;if(a.scriptTimeout>0)this._timeoutCookie=window.setTimeout(Function.createDelegate(this,this._scriptLoadTimeoutHandler),a.scriptTimeout*1000);this._loadScriptsInternal()},_raiseError:function(a){var c=this._currentSession.scriptLoadFailedCallback,b=this._currentTask.get_scriptElement();this._stopSession();if(c){c(this,b,a);this._nextSession()}else{this._loading=false;throw Sys._ScriptLoader._errorScriptLoadFailed(b.src,a)}},_scriptLoadedHandler:function(a,b){if(b&&this._currentTask._notified)if(this._currentTask._notified>1)this._raiseError(true);else{Array.add(Sys._ScriptLoader._getLoadedScripts(),a.src);this._currentTask.dispose();this._currentTask=null;this._loadScriptsInternal()}else this._raiseError(false)},_scriptLoadTimeoutHandler:function(){var a=this._currentSession.scriptLoadTimeoutCallback;this._stopSession();if(a)a(this);this._nextSession()},_stopSession:function(){if(this._timeoutCookie){window.clearTimeout(this._timeoutCookie);this._timeoutCookie=null}if(this._currentTask){this._currentTask.dispose();this._currentTask=null}}};Sys._ScriptLoader.registerClass("Sys._ScriptLoader",null,Sys.IDisposable);Sys._ScriptLoader.getInstance=function(){var a=Sys._ScriptLoader._activeInstance;if(!a)a=Sys._ScriptLoader._activeInstance=new Sys._ScriptLoader;return a};Sys._ScriptLoader.isScriptLoaded=function(b){var a=document.createElement("script");a.src=b;return Array.contains(Sys._ScriptLoader._getLoadedScripts(),a.src)};Sys._ScriptLoader.readLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){var b=Sys._ScriptLoader._referencedScripts=[],c=document.getElementsByTagName("script");for(i=c.length-1;i>=0;i--){var d=c[i],a=d.src;if(a.length)if(!Array.contains(b,a))Array.add(b,a)}}};Sys._ScriptLoader._clearScript=function(a){if(!Sys.Debug.isDebug)a.parentNode.removeChild(a)};Sys._ScriptLoader._errorScriptLoadFailed=function(b,d){var a;if(d)a=Sys.Res.scriptLoadMultipleCallbacks;else a=Sys.Res.scriptLoadFailed;var e="Sys.ScriptLoadFailedException: "+String.format(a,b),c=Error.create(e,{name:"Sys.ScriptLoadFailedException","scriptUrl":b});c.popStackFrame();return c};Sys._ScriptLoader._getLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){Sys._ScriptLoader._referencedScripts=[];Sys._ScriptLoader.readLoadedScripts()}return Sys._ScriptLoader._referencedScripts};Sys._ScriptLoaderTask=function(b,a){this._scriptElement=b;this._completedCallback=a;this._notified=0};Sys._ScriptLoaderTask.prototype={get_scriptElement:function(){return this._scriptElement},dispose:function(){if(this._disposed)return;this._disposed=true;this._removeScriptElementHandlers();Sys._ScriptLoader._clearScript(this._scriptElement);this._scriptElement=null},execute:function(){this._addScriptElementHandlers();document.getElementsByTagName("head")[0].appendChild(this._scriptElement)},_addScriptElementHandlers:function(){this._scriptLoadDelegate=Function.createDelegate(this,this._scriptLoadHandler);if(Sys.Browser.agent!==Sys.Browser.InternetExplorer){this._scriptElement.readyState="loaded";$addHandler(this._scriptElement,"load",this._scriptLoadDelegate)}else $addHandler(this._scriptElement,"readystatechange",this._scriptLoadDelegate);if(this._scriptElement.addEventListener){this._scriptErrorDelegate=Function.createDelegate(this,this._scriptErrorHandler);this._scriptElement.addEventListener("error",this._scriptErrorDelegate,false)}},_removeScriptElementHandlers:function(){if(this._scriptLoadDelegate){var a=this.get_scriptElement();if(Sys.Browser.agent!==Sys.Browser.InternetExplorer)$removeHandler(a,"load",this._scriptLoadDelegate);else $removeHandler(a,"readystatechange",this._scriptLoadDelegate);if(this._scriptErrorDelegate){this._scriptElement.removeEventListener("error",this._scriptErrorDelegate,false);this._scriptErrorDelegate=null}this._scriptLoadDelegate=null}},_scriptErrorHandler:function(){if(this._disposed)return;this._completedCallback(this.get_scriptElement(),false)},_scriptLoadHandler:function(){if(this._disposed)return;var a=this.get_scriptElement();if(a.readyState!=="loaded"&&a.readyState!=="complete")return;var b=this;window.setTimeout(function(){b._completedCallback(a,true)},0)}};Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask",null,Sys.IDisposable);Sys.ApplicationLoadEventArgs=function(b,a){Sys.ApplicationLoadEventArgs.initializeBase(this);this._components=b;this._isPartialLoad=a};Sys.ApplicationLoadEventArgs.prototype={get_components:function(){return this._components},get_isPartialLoad:function(){return this._isPartialLoad}};Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs",Sys.EventArgs);Sys.HistoryEventArgs=function(a){Sys.HistoryEventArgs.initializeBase(this);this._state=a};Sys.HistoryEventArgs.prototype={get_state:function(){return this._state}};Sys.HistoryEventArgs.registerClass("Sys.HistoryEventArgs",Sys.EventArgs);Sys._Application=function(){Sys._Application.initializeBase(this);this._disposableObjects=[];this._components={};this._createdComponents=[];this._secondPassComponents=[];this._appLoadHandler=null;this._beginRequestHandler=null;this._clientId=null;this._currentEntry="";this._endRequestHandler=null;this._history=null;this._enableHistory=false;this._historyFrame=null;this._historyInitialized=false;this._historyInitialLength=0;this._historyLength=0;this._historyPointIsNew=false;this._ignoreTimer=false;this._initialState=null;this._state={};this._timerCookie=0;this._timerHandler=null;this._uniqueId=null;this._unloadHandlerDelegate=Function.createDelegate(this,this._unloadHandler);this._loadHandlerDelegate=Function.createDelegate(this,this._loadHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._unloadHandlerDelegate);Sys.UI.DomEvent.addHandler(window,"load",this._loadHandlerDelegate)};Sys._Application.prototype={_creatingComponents:false,_disposing:false,get_isCreatingComponents:function(){return this._creatingComponents},get_stateString:function(){var a=window.location.hash;if(this._isSafari2()){var b=this._getHistory();if(b)a=b[window.history.length-this._historyInitialLength]}if(a.length>0&&a.charAt(0)==="#")a=a.substring(1);if(Sys.Browser.agent===Sys.Browser.Firefox)a=this._serializeState(this._deserializeState(a,true));return a},get_enableHistory:function(){return this._enableHistory},set_enableHistory:function(a){this._enableHistory=a},add_init:function(a){if(this._initialized)a(this,Sys.EventArgs.Empty);else this.get_events().addHandler("init",a)},remove_init:function(a){this.get_events().removeHandler("init",a)},add_load:function(a){this.get_events().addHandler("load",a)},remove_load:function(a){this.get_events().removeHandler("load",a)},add_navigate:function(a){this.get_events().addHandler("navigate",a)},remove_navigate:function(a){this.get_events().removeHandler("navigate",a)},add_unload:function(a){this.get_events().addHandler("unload",a)},remove_unload:function(a){this.get_events().removeHandler("unload",a)},addComponent:function(a){this._components[a.get_id()]=a},addHistoryPoint:function(c,f){this._ensureHistory();var b=this._state;for(var a in c){var d=c[a];if(d===null){if(typeof b[a]!=="undefined")delete b[a]}else b[a]=d}var e=this._serializeState(b);this._historyPointIsNew=true;this._setState(e,f);this._raiseNavigate()},beginCreateComponents:function(){this._creatingComponents=true},dispose:function(){if(!this._disposing){this._disposing=true;if(this._timerCookie){window.clearTimeout(this._timerCookie);delete this._timerCookie}if(this._endRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler);delete this._endRequestHandler}if(this._beginRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler);delete this._beginRequestHandler}if(window.pageUnload)window.pageUnload(this,Sys.EventArgs.Empty);var c=this.get_events().getHandler("unload");if(c)c(this,Sys.EventArgs.Empty);var b=Array.clone(this._disposableObjects);for(var a=0,e=b.length;a<e;a++)b[a].dispose();Array.clear(this._disposableObjects);Sys.UI.DomEvent.removeHandler(window,"unload",this._unloadHandlerDelegate);if(this._loadHandlerDelegate){Sys.UI.DomEvent.removeHandler(window,"load",this._loadHandlerDelegate);this._loadHandlerDelegate=null}var d=Sys._ScriptLoader.getInstance();if(d)d.dispose();Sys._Application.callBaseMethod(this,"dispose")}},endCreateComponents:function(){var b=this._secondPassComponents;for(var a=0,d=b.length;a<d;a++){var c=b[a].component;Sys$Component$_setReferences(c,b[a].references);c.endUpdate()}this._secondPassComponents=[];this._creatingComponents=false},findComponent:function(b,a){return a?Sys.IContainer.isInstanceOfType(a)?a.findComponent(b):a[b]||null:Sys.Application._components[b]||null},getComponents:function(){var a=[],b=this._components;for(var c in b)a[a.length]=b[c];return a},initialize:function(){if(!this._initialized&&!this._initializing){this._initializing=true;window.setTimeout(Function.createDelegate(this,this._doInitialize),0)}},notifyScriptLoaded:function(){var a=Sys._ScriptLoader.getInstance();if(a)a.notifyScriptLoaded()},registerDisposableObject:function(a){if(!this._disposing)this._disposableObjects[this._disposableObjects.length]=a},raiseLoad:function(){var b=this.get_events().getHandler("load"),a=new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents),!this._initializing);if(b)b(this,a);if(window.pageLoad)window.pageLoad(this,a);this._createdComponents=[]},removeComponent:function(b){var a=b.get_id();if(a)delete this._components[a]},setServerId:function(a,b){this._clientId=a;this._uniqueId=b},setServerState:function(a){this._ensureHistory();this._state.__s=a;this._updateHiddenField(a)},unregisterDisposableObject:function(a){if(!this._disposing)Array.remove(this._disposableObjects,a)},_addComponentToSecondPass:function(b,a){this._secondPassComponents[this._secondPassComponents.length]={component:b,references:a}},_deserializeState:function(a,i){var e={};a=a||"";var b=a.indexOf("&&");if(b!==-1&&b+2<a.length){e.__s=a.substr(b+2);a=a.substr(0,b)}var g=a.split("&");for(var f=0,k=g.length;f<k;f++){var d=g[f],c=d.indexOf("=");if(c!==-1&&c+1<d.length){var j=d.substr(0,c),h=d.substr(c+1);e[j]=i?h:decodeURIComponent(h)}}return e},_doInitialize:function(){Sys._Application.callBaseMethod(this,"initialize");var b=this.get_events().getHandler("init");if(b){this.beginCreateComponents();b(this,Sys.EventArgs.Empty);this.endCreateComponents()}if(Sys.WebForms){this._beginRequestHandler=Function.createDelegate(this,this._onPageRequestManagerBeginRequest);Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler);this._endRequestHandler=Function.createDelegate(this,this._onPageRequestManagerEndRequest);Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler)}var a=this.get_stateString();if(a!==this._currentEntry)this._navigate(a);this.raiseLoad();this._initializing=false},_enableHistoryInScriptManager:function(){this._enableHistory=true},_ensureHistory:function(){if(!this._historyInitialized&&this._enableHistory){if(Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.documentMode<8){this._historyFrame=document.getElementById("__historyFrame");this._ignoreIFrame=true}if(this._isSafari2()){var a=document.getElementById("__history");this._setHistory([window.location.hash]);this._historyInitialLength=window.history.length}this._timerHandler=Function.createDelegate(this,this._onIdle);this._timerCookie=window.setTimeout(this._timerHandler,100);try{this._initialState=this._deserializeState(this.get_stateString())}catch(b){}this._historyInitialized=true}},_getHistory:function(){var a=document.getElementById("__history");if(!a)return "";var b=a.value;return b?Sys.Serialization.JavaScriptSerializer.deserialize(b,true):""},_isSafari2:function(){return Sys.Browser.agent===Sys.Browser.Safari&&Sys.Browser.version<=419.3},_loadHandler:function(){if(this._loadHandlerDelegate){Sys.UI.DomEvent.removeHandler(window,"load",this._loadHandlerDelegate);this._loadHandlerDelegate=null}this.initialize()},_navigate:function(c){this._ensureHistory();var b=this._deserializeState(c);if(this._uniqueId){var d=this._state.__s||"",a=b.__s||"";if(a!==d){this._updateHiddenField(a);__doPostBack(this._uniqueId,a);this._state=b;return}}this._setState(c);this._state=b;this._raiseNavigate()},_onIdle:function(){delete this._timerCookie;var a=this.get_stateString();if(a!==this._currentEntry){if(!this._ignoreTimer){this._historyPointIsNew=false;this._navigate(a);this._historyLength=window.history.length}}else this._ignoreTimer=false;this._timerCookie=window.setTimeout(this._timerHandler,100)},_onIFrameLoad:function(a){this._ensureHistory();if(!this._ignoreIFrame){this._historyPointIsNew=false;this._navigate(a)}this._ignoreIFrame=false},_onPageRequestManagerBeginRequest:function(){this._ignoreTimer=true},_onPageRequestManagerEndRequest:function(e,d){var b=d.get_dataItems()[this._clientId],a=document.getElementById("__EVENTTARGET");if(a&&a.value===this._uniqueId)a.value="";if(typeof b!=="undefined"){this.setServerState(b);this._historyPointIsNew=true}else this._ignoreTimer=false;var c=this._serializeState(this._state);if(c!==this._currentEntry){this._ignoreTimer=true;this._setState(c);this._raiseNavigate()}},_raiseNavigate:function(){var c=this.get_events().getHandler("navigate"),b={};for(var a in this._state)if(a!=="__s")b[a]=this._state[a];var d=new Sys.HistoryEventArgs(b);if(c)c(this,d)},_serializeState:function(d){var b=[];for(var a in d){var e=d[a];if(a==="__s")var c=e;else b[b.length]=a+"="+encodeURIComponent(e)}return b.join("&")+(c?"&&"+c:"")},_setHistory:function(b){var a=document.getElementById("__history");if(a)a.value=Sys.Serialization.JavaScriptSerializer.serialize(b)},_setState:function(a,c){a=a||"";if(a!==this._currentEntry){if(window.theForm){var e=window.theForm.action,f=e.indexOf("#");window.theForm.action=(f!==-1?e.substring(0,f):e)+"#"+a}if(this._historyFrame&&this._historyPointIsNew){this._ignoreIFrame=true;this._historyPointIsNew=false;var d=this._historyFrame.contentWindow.document;d.open("javascript:'<html></html>'");d.write("<html><head><title>"+(c||document.title)+"</title><scri"+'pt type="text/javascript">parent.Sys.Application._onIFrameLoad(\''+a+"');</scri"+"pt></head><body></body></html>");d.close()}this._ignoreTimer=false;var h=this.get_stateString();this._currentEntry=a;if(a!==h){if(this._isSafari2()){var g=this._getHistory();g[window.history.length-this._historyInitialLength+1]=a;this._setHistory(g);this._historyLength=window.history.length+1;var b=document.createElement("form");b.method="get";b.action="#"+a;document.appendChild(b);b.submit();document.removeChild(b)}else window.location.hash=a;if(typeof c!=="undefined"&&c!==null)document.title=c}}},_unloadHandler:function(){this.dispose()},_updateHiddenField:function(b){if(this._clientId){var a=document.getElementById(this._clientId);if(a)a.value=b}}};Sys._Application.registerClass("Sys._Application",Sys.Component,Sys.IContainer);Sys.Application=new Sys._Application;var $find=Sys.Application.findComponent;Type.registerNamespace("Sys.Net");Sys.Net.WebRequestExecutor=function(){this._webRequest=null;this._resultObject=null};Sys.Net.WebRequestExecutor.prototype={get_webRequest:function(){return this._webRequest},_set_webRequest:function(a){this._webRequest=a},get_started:function(){throw Error.notImplemented()},get_responseAvailable:function(){throw Error.notImplemented()},get_timedOut:function(){throw Error.notImplemented()},get_aborted:function(){throw Error.notImplemented()},get_responseData:function(){throw Error.notImplemented()},get_statusCode:function(){throw Error.notImplemented()},get_statusText:function(){throw Error.notImplemented()},get_xml:function(){throw Error.notImplemented()},get_object:function(){if(!this._resultObject)this._resultObject=Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());return this._resultObject},executeRequest:function(){throw Error.notImplemented()},abort:function(){throw Error.notImplemented()},getResponseHeader:function(){throw Error.notImplemented()},getAllResponseHeaders:function(){throw Error.notImplemented()}};Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor");Sys.Net.XMLDOM=function(d){if(!window.DOMParser){var c=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];for(var b=0,f=c.length;b<f;b++)try{var a=new ActiveXObject(c[b]);a.async=false;a.loadXML(d);a.setProperty("SelectionLanguage","XPath");return a}catch(g){}}else try{var e=new window.DOMParser;return e.parseFromString(d,"text/xml")}catch(g){}return null};Sys.Net.XMLHttpExecutor=function(){Sys.Net.XMLHttpExecutor.initializeBase(this);var a=this;this._xmlHttpRequest=null;this._webRequest=null;this._responseAvailable=false;this._timedOut=false;this._timer=null;this._aborted=false;this._started=false;this._onReadyStateChange=function(){if(a._xmlHttpRequest.readyState===4){try{if(typeof a._xmlHttpRequest.status==="undefined")return}catch(b){return}a._clearTimer();a._responseAvailable=true;try{a._webRequest.completed(Sys.EventArgs.Empty)}finally{if(a._xmlHttpRequest!=null){a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest=null}}}};this._clearTimer=function(){if(a._timer!=null){window.clearTimeout(a._timer);a._timer=null}};this._onTimeout=function(){if(!a._responseAvailable){a._clearTimer();a._timedOut=true;a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest.abort();a._webRequest.completed(Sys.EventArgs.Empty);a._xmlHttpRequest=null}}};Sys.Net.XMLHttpExecutor.prototype={get_timedOut:function(){return this._timedOut},get_started:function(){return this._started},get_responseAvailable:function(){return this._responseAvailable},get_aborted:function(){return this._aborted},executeRequest:function(){this._webRequest=this.get_webRequest();var c=this._webRequest.get_body(),a=this._webRequest.get_headers();this._xmlHttpRequest=new XMLHttpRequest;this._xmlHttpRequest.onreadystatechange=this._onReadyStateChange;var e=this._webRequest.get_httpVerb();this._xmlHttpRequest.open(e,this._webRequest.getResolvedUrl(),true);if(a)for(var b in a){var f=a[b];if(typeof f!=="function")this._xmlHttpRequest.setRequestHeader(b,f)}if(e.toLowerCase()==="post"){if(a===null||!a["Content-Type"])this._xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");if(!c)c=""}var d=this._webRequest.get_timeout();if(d>0)this._timer=window.setTimeout(Function.createDelegate(this,this._onTimeout),d);this._xmlHttpRequest.send(c);this._started=true},getResponseHeader:function(b){var a;try{a=this._xmlHttpRequest.getResponseHeader(b)}catch(c){}if(!a)a="";return a},getAllResponseHeaders:function(){return this._xmlHttpRequest.getAllResponseHeaders()},get_responseData:function(){return this._xmlHttpRequest.responseText},get_statusCode:function(){var a=0;try{a=this._xmlHttpRequest.status}catch(b){}return a},get_statusText:function(){return this._xmlHttpRequest.statusText},get_xml:function(){var a=this._xmlHttpRequest.responseXML;if(!a||!a.documentElement){a=Sys.Net.XMLDOM(this._xmlHttpRequest.responseText);if(!a||!a.documentElement)return null}else if(navigator.userAgent.indexOf("MSIE")!==-1)a.setProperty("SelectionLanguage","XPath");if(a.documentElement.namespaceURI==="http://www.mozilla.org/newlayout/xml/parsererror.xml"&&a.documentElement.tagName==="parsererror")return null;if(a.documentElement.firstChild&&a.documentElement.firstChild.tagName==="parsererror")return null;return a},abort:function(){if(this._aborted||this._responseAvailable||this._timedOut)return;this._aborted=true;this._clearTimer();if(this._xmlHttpRequest&&!this._responseAvailable){this._xmlHttpRequest.onreadystatechange=Function.emptyMethod;this._xmlHttpRequest.abort();this._xmlHttpRequest=null;this._webRequest.completed(Sys.EventArgs.Empty)}}};Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor",Sys.Net.WebRequestExecutor);Sys.Net._WebRequestManager=function(){this._defaultTimeout=0;this._defaultExecutorType="Sys.Net.XMLHttpExecutor"};Sys.Net._WebRequestManager.prototype={add_invokingRequest:function(a){this._get_eventHandlerList().addHandler("invokingRequest",a)},remove_invokingRequest:function(a){this._get_eventHandlerList().removeHandler("invokingRequest",a)},add_completedRequest:function(a){this._get_eventHandlerList().addHandler("completedRequest",a)},remove_completedRequest:function(a){this._get_eventHandlerList().removeHandler("completedRequest",a)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_defaultTimeout:function(){return this._defaultTimeout},set_defaultTimeout:function(a){this._defaultTimeout=a},get_defaultExecutorType:function(){return this._defaultExecutorType},set_defaultExecutorType:function(a){this._defaultExecutorType=a},executeRequest:function(webRequest){var executor=webRequest.get_executor();if(!executor){var failed=false;try{var executorType=eval(this._defaultExecutorType);executor=new executorType}catch(a){failed=true}webRequest.set_executor(executor)}if(executor.get_aborted())return;var evArgs=new Sys.Net.NetworkRequestEventArgs(webRequest),handler=this._get_eventHandlerList().getHandler("invokingRequest");if(handler)handler(this,evArgs);if(!evArgs.get_cancel())executor.executeRequest()}};Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager");Sys.Net.WebRequestManager=new Sys.Net._WebRequestManager;Sys.Net.NetworkRequestEventArgs=function(a){Sys.Net.NetworkRequestEventArgs.initializeBase(this);this._webRequest=a};Sys.Net.NetworkRequestEventArgs.prototype={get_webRequest:function(){return this._webRequest}};Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs",Sys.CancelEventArgs);Sys.Net.WebRequest=function(){this._url="";this._headers={};this._body=null;this._userContext=null;this._httpVerb=null;this._executor=null;this._invokeCalled=false;this._timeout=0};Sys.Net.WebRequest.prototype={add_completed:function(a){this._get_eventHandlerList().addHandler("completed",a)},remove_completed:function(a){this._get_eventHandlerList().removeHandler("completed",a)},completed:function(b){var a=Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");if(a)a(this._executor,b);a=this._get_eventHandlerList().getHandler("completed");if(a)a(this._executor,b)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_url:function(){return this._url},set_url:function(a){this._url=a},get_headers:function(){return this._headers},get_httpVerb:function(){if(this._httpVerb===null){if(this._body===null)return "GET";return "POST"}return this._httpVerb},set_httpVerb:function(a){this._httpVerb=a},get_body:function(){return this._body},set_body:function(a){this._body=a},get_userContext:function(){return this._userContext},set_userContext:function(a){this._userContext=a},get_executor:function(){return this._executor},set_executor:function(a){this._executor=a;this._executor._set_webRequest(this)},get_timeout:function(){if(this._timeout===0)return Sys.Net.WebRequestManager.get_defaultTimeout();return this._timeout},set_timeout:function(a){this._timeout=a},getResolvedUrl:function(){return Sys.Net.WebRequest._resolveUrl(this._url)},invoke:function(){Sys.Net.WebRequestManager.executeRequest(this);this._invokeCalled=true}};Sys.Net.WebRequest._resolveUrl=function(b,a){if(b&&b.indexOf("://")!==-1)return b;if(!a||a.length===0){var d=document.getElementsByTagName("base")[0];if(d&&d.href&&d.href.length>0)a=d.href;else a=document.URL}var c=a.indexOf("?");if(c!==-1)a=a.substr(0,c);c=a.indexOf("#");if(c!==-1)a=a.substr(0,c);a=a.substr(0,a.lastIndexOf("/")+1);if(!b||b.length===0)return a;if(b.charAt(0)==="/"){var e=a.indexOf("://"),g=a.indexOf("/",e+3);return a.substr(0,g)+b}else{var f=a.lastIndexOf("/");return a.substr(0,f+1)+b}};Sys.Net.WebRequest._createQueryString=function(d,b){if(!b)b=encodeURIComponent;var a=new Sys.StringBuilder,f=0;for(var c in d){var e=d[c];if(typeof e==="function")continue;var g=Sys.Serialization.JavaScriptSerializer.serialize(e);if(f!==0)a.append("&");a.append(c);a.append("=");a.append(b(g));f++}return a.toString()};Sys.Net.WebRequest._createUrl=function(a,b){if(!b)return a;var d=Sys.Net.WebRequest._createQueryString(b);if(d.length>0){var c="?";if(a&&a.indexOf("?")!==-1)c="&";return a+c+d}else return a};Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest");Sys.Net.WebServiceProxy=function(){};Sys.Net.WebServiceProxy.prototype={get_timeout:function(){return this._timeout},set_timeout:function(a){if(a<0)throw Error.argumentOutOfRange("value",a,Sys.Res.invalidTimeout);this._timeout=a},get_defaultUserContext:function(){return this._userContext},set_defaultUserContext:function(a){this._userContext=a},get_defaultSucceededCallback:function(){return this._succeeded},set_defaultSucceededCallback:function(a){this._succeeded=a},get_defaultFailedCallback:function(){return this._failed},set_defaultFailedCallback:function(a){this._failed=a},get_path:function(){return this._path},set_path:function(a){this._path=a},_invoke:function(d,e,g,f,c,b,a){if(c===null||typeof c==="undefined")c=this.get_defaultSucceededCallback();if(b===null||typeof b==="undefined")b=this.get_defaultFailedCallback();if(a===null||typeof a==="undefined")a=this.get_defaultUserContext();return Sys.Net.WebServiceProxy.invoke(d,e,g,f,c,b,a,this.get_timeout())}};Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy");Sys.Net.WebServiceProxy.invoke=function(k,a,j,d,i,c,f,h){var b=new Sys.Net.WebRequest;b.get_headers()["Content-Type"]="application/json; charset=utf-8";if(!d)d={};var g=d;if(!j||!g)g={};b.set_url(Sys.Net.WebRequest._createUrl(k+"/"+encodeURIComponent(a),g));var e=null;if(!j){e=Sys.Serialization.JavaScriptSerializer.serialize(d);if(e==="{}")e=""}b.set_body(e);b.add_completed(l);if(h&&h>0)b.set_timeout(h);b.invoke();function l(d){if(d.get_responseAvailable()){var g=d.get_statusCode(),b=null;try{var e=d.getResponseHeader("Content-Type");if(e.startsWith("application/json"))b=d.get_object();else if(e.startsWith("text/xml"))b=d.get_xml();else b=d.get_responseData()}catch(m){}var k=d.getResponseHeader("jsonerror"),h=k==="true";if(h){if(b)b=new Sys.Net.WebServiceError(false,b.Message,b.StackTrace,b.ExceptionType)}else if(e.startsWith("application/json"))b=b.d;if(g<200||g>=300||h){if(c){if(!b||!h)b=new Sys.Net.WebServiceError(false,String.format(Sys.Res.webServiceFailedNoMsg,a),"","");b._statusCode=g;c(b,f,a)}}else if(i)i(b,f,a)}else{var j;if(d.get_timedOut())j=String.format(Sys.Res.webServiceTimedOut,a);else j=String.format(Sys.Res.webServiceFailedNoMsg,a);if(c)c(new Sys.Net.WebServiceError(d.get_timedOut(),j,"",""),f,a)}}return b};Sys.Net.WebServiceProxy._generateTypedConstructor=function(a){return function(b){if(b)for(var c in b)this[c]=b[c];this.__type=a}};Sys.Net.WebServiceError=function(c,d,b,a){this._timedOut=c;this._message=d;this._stackTrace=b;this._exceptionType=a;this._statusCode=-1};Sys.Net.WebServiceError.prototype={get_timedOut:function(){return this._timedOut},get_statusCode:function(){return this._statusCode},get_message:function(){return this._message},get_stackTrace:function(){return this._stackTrace},get_exceptionType:function(){return this._exceptionType}};Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError");Type.registerNamespace("Sys.Services");Sys.Services._ProfileService=function(){Sys.Services._ProfileService.initializeBase(this);this.properties={}};Sys.Services._ProfileService.DefaultWebServicePath="";Sys.Services._ProfileService.prototype={_defaultLoadCompletedCallback:null,_defaultSaveCompletedCallback:null,_path:"",_timeout:0,get_defaultLoadCompletedCallback:function(){return this._defaultLoadCompletedCallback},set_defaultLoadCompletedCallback:function(a){this._defaultLoadCompletedCallback=a},get_defaultSaveCompletedCallback:function(){return this._defaultSaveCompletedCallback},set_defaultSaveCompletedCallback:function(a){this._defaultSaveCompletedCallback=a},get_path:function(){return this._path||""},load:function(c,d,e,f){var b,a;if(!c){a="GetAllPropertiesForCurrentUser";b={authenticatedUserOnly:false}}else{a="GetPropertiesForCurrentUser";b={properties:this._clonePropertyNames(c),authenticatedUserOnly:false}}this._invoke(this._get_path(),a,false,b,Function.createDelegate(this,this._onLoadComplete),Function.createDelegate(this,this._onLoadFailed),[d,e,f])},save:function(d,b,c,e){var a=this._flattenProperties(d,this.properties);this._invoke(this._get_path(),"SetPropertiesForCurrentUser",false,{values:a.value,authenticatedUserOnly:false},Function.createDelegate(this,this._onSaveComplete),Function.createDelegate(this,this._onSaveFailed),[b,c,e,a.count])},_clonePropertyNames:function(e){var c=[],d={};for(var b=0;b<e.length;b++){var a=e[b];if(!d[a]){Array.add(c,a);d[a]=true}}return c},_flattenProperties:function(a,i,j){var b={},e,d,g=0;if(a&&a.length===0)return {value:b,count:0};for(var c in i){e=i[c];d=j?j+"."+c:c;if(Sys.Services.ProfileGroup.isInstanceOfType(e)){var k=this._flattenProperties(a,e,d),h=k.value;g+=k.count;for(var f in h){var l=h[f];b[f]=l}}else if(!a||Array.indexOf(a,d)!==-1){b[d]=e;g++}}return {value:b,count:g}},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._ProfileService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoadComplete:function(a,e,g){if(typeof a!=="object")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,g,"Object"));var c=this._unflattenProperties(a);for(var b in c)this.properties[b]=c[b];var d=e[0]||this.get_defaultLoadCompletedCallback()||this.get_defaultSucceededCallback();if(d){var f=e[2]||this.get_defaultUserContext();d(a.length,f,"Sys.Services.ProfileService.load")}},_onLoadFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.ProfileService.load")}},_onSaveComplete:function(a,b,f){var c=b[3];if(a!==null)if(a instanceof Array)c-=a.length;else if(typeof a==="number")c=a;else throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Array"));var d=b[0]||this.get_defaultSaveCompletedCallback()||this.get_defaultSucceededCallback();if(d){var e=b[2]||this.get_defaultUserContext();d(c,e,"Sys.Services.ProfileService.save")}},_onSaveFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.ProfileService.save")}},_unflattenProperties:function(e){var c={},d,f,h=0;for(var a in e){h++;f=e[a];d=a.indexOf(".");if(d!==-1){var g=a.substr(0,d);a=a.substr(d+1);var b=c[g];if(!b||!Sys.Services.ProfileGroup.isInstanceOfType(b)){b=new Sys.Services.ProfileGroup;c[g]=b}b[a]=f}else c[a]=f}e.length=h;return c}};Sys.Services._ProfileService.registerClass("Sys.Services._ProfileService",Sys.Net.WebServiceProxy);Sys.Services.ProfileService=new Sys.Services._ProfileService;Sys.Services.ProfileGroup=function(a){if(a)for(var b in a)this[b]=a[b]};Sys.Services.ProfileGroup.registerClass("Sys.Services.ProfileGroup");Sys.Services._AuthenticationService=function(){Sys.Services._AuthenticationService.initializeBase(this)};Sys.Services._AuthenticationService.DefaultWebServicePath="";Sys.Services._AuthenticationService.prototype={_defaultLoginCompletedCallback:null,_defaultLogoutCompletedCallback:null,_path:"",_timeout:0,_authenticated:false,get_defaultLoginCompletedCallback:function(){return this._defaultLoginCompletedCallback},set_defaultLoginCompletedCallback:function(a){this._defaultLoginCompletedCallback=a},get_defaultLogoutCompletedCallback:function(){return this._defaultLogoutCompletedCallback},set_defaultLogoutCompletedCallback:function(a){this._defaultLogoutCompletedCallback=a},get_isLoggedIn:function(){return this._authenticated},get_path:function(){return this._path||""},login:function(c,b,a,h,f,d,e,g){this._invoke(this._get_path(),"Login",false,{userName:c,password:b,createPersistentCookie:a},Function.createDelegate(this,this._onLoginComplete),Function.createDelegate(this,this._onLoginFailed),[c,b,a,h,f,d,e,g])},logout:function(c,a,b,d){this._invoke(this._get_path(),"Logout",false,{},Function.createDelegate(this,this._onLogoutComplete),Function.createDelegate(this,this._onLogoutFailed),[c,a,b,d])},_get_path:function(){var a=this.get_path();if(!a.length)a=Sys.Services._AuthenticationService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_onLoginComplete:function(e,c,f){if(typeof e!=="boolean")throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Boolean"));var b=c[4],d=c[7]||this.get_defaultUserContext(),a=c[5]||this.get_defaultLoginCompletedCallback()||this.get_defaultSucceededCallback();if(e){this._authenticated=true;if(a)a(true,d,"Sys.Services.AuthenticationService.login");if(typeof b!=="undefined"&&b!==null)window.location.href=b}else if(a)a(false,d,"Sys.Services.AuthenticationService.login")},_onLoginFailed:function(d,b){var a=b[6]||this.get_defaultFailedCallback();if(a){var c=b[7]||this.get_defaultUserContext();a(d,c,"Sys.Services.AuthenticationService.login")}},_onLogoutComplete:function(f,a,e){if(f!==null)throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,e,"null"));var b=a[0],d=a[3]||this.get_defaultUserContext(),c=a[1]||this.get_defaultLogoutCompletedCallback()||this.get_defaultSucceededCallback();this._authenticated=false;if(c)c(null,d,"Sys.Services.AuthenticationService.logout");if(!b)window.location.reload();else window.location.href=b},_onLogoutFailed:function(c,b){var a=b[2]||this.get_defaultFailedCallback();if(a)a(c,b[3],"Sys.Services.AuthenticationService.logout")},_setAuthenticated:function(a){this._authenticated=a}};Sys.Services._AuthenticationService.registerClass("Sys.Services._AuthenticationService",Sys.Net.WebServiceProxy);Sys.Services.AuthenticationService=new Sys.Services._AuthenticationService;Sys.Services._RoleService=function(){Sys.Services._RoleService.initializeBase(this);this._roles=[]};Sys.Services._RoleService.DefaultWebServicePath="";Sys.Services._RoleService.prototype={_defaultLoadCompletedCallback:null,_rolesIndex:null,_timeout:0,_path:"",get_defaultLoadCompletedCallback:function(){return this._defaultLoadCompletedCallback},set_defaultLoadCompletedCallback:function(a){this._defaultLoadCompletedCallback=a},get_path:function(){return this._path||""},get_roles:function(){return Array.clone(this._roles)},isUserInRole:function(a){var b=this._get_rolesIndex()[a.trim().toLowerCase()];return !!b},load:function(a,b,c){Sys.Net.WebServiceProxy.invoke(this._get_path(),"GetRolesForCurrentUser",false,{},Function.createDelegate(this,this._onLoadComplete),Function.createDelegate(this,this._onLoadFailed),[a,b,c],this.get_timeout())},_get_path:function(){var a=this.get_path();if(!a||!a.length)a=Sys.Services._RoleService.DefaultWebServicePath;if(!a||!a.length)throw Error.invalidOperation(Sys.Res.servicePathNotSet);return a},_get_rolesIndex:function(){if(!this._rolesIndex){var b={};for(var a=0;a<this._roles.length;a++)b[this._roles[a].toLowerCase()]=true;this._rolesIndex=b}return this._rolesIndex},_onLoadComplete:function(a,c,f){if(a&&!(a instanceof Array))throw Error.invalidOperation(String.format(Sys.Res.webServiceInvalidReturnType,f,"Array"));this._roles=a;this._rolesIndex=null;var b=c[0]||this.get_defaultLoadCompletedCallback()||this.get_defaultSucceededCallback();if(b){var e=c[2]||this.get_defaultUserContext(),d=Array.clone(a);b(d,e,"Sys.Services.RoleService.load")}},_onLoadFailed:function(d,b){var a=b[1]||this.get_defaultFailedCallback();if(a){var c=b[2]||this.get_defaultUserContext();a(d,c,"Sys.Services.RoleService.load")}}};Sys.Services._RoleService.registerClass("Sys.Services._RoleService",Sys.Net.WebServiceProxy);Sys.Services.RoleService=new Sys.Services._RoleService;Type.registerNamespace("Sys.Serialization");Sys.Serialization.JavaScriptSerializer=function(){};Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer");Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs=[];Sys.Serialization.JavaScriptSerializer._charsToEscape=[];Sys.Serialization.JavaScriptSerializer._dateRegEx=new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars={};Sys.Serialization.JavaScriptSerializer._escapeRegEx=new RegExp('["\\\\\\x00-\\x1F]',"i");Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal=new RegExp('["\\\\\\x00-\\x1F]',"g");Sys.Serialization.JavaScriptSerializer._jsonRegEx=new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]","g");Sys.Serialization.JavaScriptSerializer._jsonStringRegEx=new RegExp('"(\\\\.|[^"\\\\])*"',"g");Sys.Serialization.JavaScriptSerializer._serverTypeFieldName="__type";Sys.Serialization.JavaScriptSerializer._init=function(){var c=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000b","\\f","\\r","\\u000e","\\u000f","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001a","\\u001b","\\u001c","\\u001d","\\u001e","\\u001f"];Sys.Serialization.JavaScriptSerializer._charsToEscape[0]="\\";Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"]=new RegExp("\\\\","g");Sys.Serialization.JavaScriptSerializer._escapeChars["\\"]="\\\\";Sys.Serialization.JavaScriptSerializer._charsToEscape[1]='"';Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"']=new RegExp('"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars['"']='\\"';for(var a=0;a<32;a++){var b=String.fromCharCode(a);Sys.Serialization.JavaScriptSerializer._charsToEscape[a+2]=b;Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b]=new RegExp(b,"g");Sys.Serialization.JavaScriptSerializer._escapeChars[b]=c[a]}};Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder=function(b,a){a.append(b.toString())};Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder=function(a,b){if(isFinite(a))b.append(String(a));else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers)};Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder=function(a,c){c.append('"');if(Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(a)){if(Sys.Serialization.JavaScriptSerializer._charsToEscape.length===0)Sys.Serialization.JavaScriptSerializer._init();if(a.length<128)a=a.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal,function(a){return Sys.Serialization.JavaScriptSerializer._escapeChars[a]});else for(var d=0;d<34;d++){var b=Sys.Serialization.JavaScriptSerializer._charsToEscape[d];if(a.indexOf(b)!==-1)if(Sys.Browser.agent===Sys.Browser.Opera||Sys.Browser.agent===Sys.Browser.FireFox)a=a.split(b).join(Sys.Serialization.JavaScriptSerializer._escapeChars[b]);else a=a.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b],Sys.Serialization.JavaScriptSerializer._escapeChars[b])}}c.append(a);c.append('"')};Sys.Serialization.JavaScriptSerializer._serializeWithBuilder=function(b,a,i,g){var c;switch(typeof b){case "object":if(b)if(Number.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);else if(Boolean.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);else if(String.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);else if(Array.isInstanceOfType(b)){a.append("[");for(c=0;c<b.length;++c){if(c>0)a.append(",");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b[c],a,false,g)}a.append("]")}else{if(Date.isInstanceOfType(b)){a.append('"\\/Date(');a.append(b.getTime());a.append(')\\/"');break}var d=[],f=0;for(var e in b){if(e.startsWith("$"))continue;if(e===Sys.Serialization.JavaScriptSerializer._serverTypeFieldName&&f!==0){d[f++]=d[0];d[0]=e}else d[f++]=e}if(i)d.sort();a.append("{");var j=false;for(c=0;c<f;c++){var h=b[d[c]];if(typeof h!=="undefined"&&typeof h!=="function"){if(j)a.append(",");else j=true;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(d[c],a,i,g);a.append(":");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(h,a,i,g)}}a.append("}")}else a.append("null");break;case "number":Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);break;case "string":Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);break;case "boolean":Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);break;default:a.append("null")}};Sys.Serialization.JavaScriptSerializer.serialize=function(b){var a=new Sys.StringBuilder;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b,a,false);return a.toString()};Sys.Serialization.JavaScriptSerializer.deserialize=function(data,secure){if(data.length===0)throw Error.argument("data",Sys.Res.cannotDeserializeEmptyString);try{var exp=data.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx,"$1new Date($2)");if(secure&&Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(exp.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx,"")))throw null;return eval("("+exp+")")}catch(a){throw Error.argument("data",Sys.Res.cannotDeserializeInvalidJson)}};Sys.CultureInfo=function(c,b,a){this.name=c;this.numberFormat=b;this.dateTimeFormat=a};Sys.CultureInfo.prototype={_getDateTimeFormats:function(){if(!this._dateTimeFormats){var a=this.dateTimeFormat;this._dateTimeFormats=[a.MonthDayPattern,a.YearMonthPattern,a.ShortDatePattern,a.ShortTimePattern,a.LongDatePattern,a.LongTimePattern,a.FullDateTimePattern,a.RFC1123Pattern,a.SortableDateTimePattern,a.UniversalSortableDateTimePattern]}return this._dateTimeFormats},_getMonthIndex:function(a){if(!this._upperMonths)this._upperMonths=this._toUpperArray(this.dateTimeFormat.MonthNames);return Array.indexOf(this._upperMonths,this._toUpper(a))},_getAbbrMonthIndex:function(a){if(!this._upperAbbrMonths)this._upperAbbrMonths=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);return Array.indexOf(this._upperAbbrMonths,this._toUpper(a))},_getDayIndex:function(a){if(!this._upperDays)this._upperDays=this._toUpperArray(this.dateTimeFormat.DayNames);return Array.indexOf(this._upperDays,this._toUpper(a))},_getAbbrDayIndex:function(a){if(!this._upperAbbrDays)this._upperAbbrDays=this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames);return Array.indexOf(this._upperAbbrDays,this._toUpper(a))},_toUpperArray:function(c){var b=[];for(var a=0,d=c.length;a<d;a++)b[a]=this._toUpper(c[a]);return b},_toUpper:function(a){return a.split("\u00a0").join(" ").toUpperCase()}};Sys.CultureInfo._parse=function(b){var a=Sys.Serialization.JavaScriptSerializer.deserialize(b);return new Sys.CultureInfo(a.name,a.numberFormat,a.dateTimeFormat)};Sys.CultureInfo.registerClass("Sys.CultureInfo");Sys.CultureInfo.InvariantCulture=Sys.CultureInfo._parse('{"name":"","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":true,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"\u00a4","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":true},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, dd MMMM yyyy HH:mm:ss","LongDatePattern":"dddd, dd MMMM yyyy","LongTimePattern":"HH:mm:ss","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"MM/dd/yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"yyyy MMMM","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":true,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}');if(typeof __cultureInfo==="undefined")var __cultureInfo='{"name":"en-US","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"$","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, MMMM dd, yyyy h:mm:ss tt","LongDatePattern":"dddd, MMMM dd, yyyy","LongTimePattern":"h:mm:ss tt","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'","ShortDatePattern":"M/d/yyyy","ShortTimePattern":"h:mm tt","SortableDateTimePattern":"yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'","YearMonthPattern":"MMMM, yyyy","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":false,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]}}';Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse(__cultureInfo);delete __cultureInfo;Sys.UI.Behavior=function(b){Sys.UI.Behavior.initializeBase(this);this._element=b;var a=b._behaviors;if(!a)b._behaviors=[this];else a[a.length]=this};Sys.UI.Behavior.prototype={_name:null,get_element:function(){return this._element},get_id:function(){var a=Sys.UI.Behavior.callBaseMethod(this,"get_id");if(a)return a;if(!this._element||!this._element.id)return "";return this._element.id+"$"+this.get_name()},get_name:function(){if(this._name)return this._name;var a=Object.getTypeName(this),b=a.lastIndexOf(".");if(b!=-1)a=a.substr(b+1);if(!this.get_isInitialized())this._name=a;return a},set_name:function(a){this._name=a},initialize:function(){Sys.UI.Behavior.callBaseMethod(this,"initialize");var a=this.get_name();if(a)this._element[a]=this},dispose:function(){Sys.UI.Behavior.callBaseMethod(this,"dispose");if(this._element){var a=this.get_name();if(a)this._element[a]=null;Array.remove(this._element._behaviors,this);delete this._element}}};Sys.UI.Behavior.registerClass("Sys.UI.Behavior",Sys.Component);Sys.UI.Behavior.getBehaviorByName=function(b,c){var a=b[c];return a&&Sys.UI.Behavior.isInstanceOfType(a)?a:null};Sys.UI.Behavior.getBehaviors=function(a){if(!a._behaviors)return [];return Array.clone(a._behaviors)};Sys.UI.Behavior.getBehaviorsByType=function(d,e){var a=d._behaviors,c=[];if(a)for(var b=0,f=a.length;b<f;b++)if(e.isInstanceOfType(a[b]))c[c.length]=a[b];return c};Sys.UI.VisibilityMode=function(){throw Error.notImplemented()};Sys.UI.VisibilityMode.prototype={hide:0,collapse:1};Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode");Sys.UI.Control=function(a){Sys.UI.Control.initializeBase(this);this._element=a;a.control=this};Sys.UI.Control.prototype={_parent:null,_visibilityMode:Sys.UI.VisibilityMode.hide,get_element:function(){return this._element},get_id:function(){if(!this._element)return "";return this._element.id},set_id:function(){throw Error.invalidOperation(Sys.Res.cantSetId)},get_parent:function(){if(this._parent)return this._parent;if(!this._element)return null;var a=this._element.parentNode;while(a){if(a.control)return a.control;a=a.parentNode}return null},set_parent:function(a){this._parent=a},get_visibilityMode:function(){return Sys.UI.DomElement.getVisibilityMode(this._element)},set_visibilityMode:function(a){Sys.UI.DomElement.setVisibilityMode(this._element,a)},get_visible:function(){return Sys.UI.DomElement.getVisible(this._element)},set_visible:function(a){Sys.UI.DomElement.setVisible(this._element,a)},addCssClass:function(a){Sys.UI.DomElement.addCssClass(this._element,a)},dispose:function(){Sys.UI.Control.callBaseMethod(this,"dispose");if(this._element){this._element.control=undefined;delete this._element}if(this._parent)delete this._parent},onBubbleEvent:function(){return false},raiseBubbleEvent:function(b,c){var a=this.get_parent();while(a){if(a.onBubbleEvent(b,c))return;a=a.get_parent()}},removeCssClass:function(a){Sys.UI.DomElement.removeCssClass(this._element,a)},toggleCssClass:function(a){Sys.UI.DomElement.toggleCssClass(this._element,a)}};Sys.UI.Control.registerClass("Sys.UI.Control",Sys.Component);
Type.registerNamespace('Sys');Sys.Res={'argumentInteger':'Value must be an integer.','scriptLoadMultipleCallbacks':'The script \'{0}\' contains multiple calls to Sys.Application.notifyScriptLoaded(). Only one is allowed.','invokeCalledTwice':'Cannot call invoke more than once.','webServiceFailed':'The server method \'{0}\' failed with the following error: {1}','webServiceInvalidJsonWrapper':'The server method \'{0}\' returned invalid data. The \'d\' property is missing from the JSON wrapper.','argumentType':'Object cannot be converted to the required type.','argumentNull':'Value cannot be null.','controlCantSetId':'The id property can\'t be set on a control.','formatBadFormatSpecifier':'Format specifier was invalid.','webServiceFailedNoMsg':'The server method \'{0}\' failed.','argumentDomElement':'Value must be a DOM element.','invalidExecutorType':'Could not create a valid Sys.Net.WebRequestExecutor from: {0}.','cannotCallBeforeResponse':'Cannot call {0} when responseAvailable is false.','actualValue':'Actual value was {0}.','enumInvalidValue':'\'{0}\' is not a valid value for enum {1}.','scriptLoadFailed':'The script \'{0}\' could not be loaded.','parameterCount':'Parameter count mismatch.','cannotDeserializeEmptyString':'Cannot deserialize empty string.','formatInvalidString':'Input string was not in a correct format.','invalidTimeout':'Value must be greater than or equal to zero.','cannotAbortBeforeStart':'Cannot abort when executor has not started.','argument':'Value does not fall within the expected range.','cannotDeserializeInvalidJson':'Cannot deserialize. The data does not correspond to valid JSON.','invalidHttpVerb':'httpVerb cannot be set to an empty or null string.','nullWebRequest':'Cannot call executeRequest with a null webRequest.','eventHandlerInvalid':'Handler was not added through the Sys.UI.DomEvent.addHandler method.','cannotSerializeNonFiniteNumbers':'Cannot serialize non finite numbers.','argumentUndefined':'Value cannot be undefined.','webServiceInvalidReturnType':'The server method \'{0}\' returned an invalid type. Expected type: {1}','servicePathNotSet':'The path to the web service has not been set.','argumentTypeWithTypes':'Object of type \'{0}\' cannot be converted to type \'{1}\'.','cannotCallOnceStarted':'Cannot call {0} once started.','badBaseUrl1':'Base URL does not contain ://.','badBaseUrl2':'Base URL does not contain another /.','badBaseUrl3':'Cannot find last / in base URL.','setExecutorAfterActive':'Cannot set executor after it has become active.','paramName':'Parameter name: {0}','cannotCallOutsideHandler':'Cannot call {0} outside of a completed event handler.','cannotSerializeObjectWithCycle':'Cannot serialize object with cyclic reference within child properties.','format':'One of the identified items was in an invalid format.','assertFailedCaller':'Assertion Failed: {0}\r\nat {1}','argumentOutOfRange':'Specified argument was out of the range of valid values.','webServiceTimedOut':'The server method \'{0}\' timed out.','notImplemented':'The method or operation is not implemented.','assertFailed':'Assertion Failed: {0}','invalidOperation':'Operation is not valid due to the current state of the object.','breakIntoDebugger':'{0}\r\n\r\nBreak into debugger?'};
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
;
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftMvcAjax.js

Type.registerNamespace('Sys.Mvc');Sys.Mvc.$create_AjaxOptions=function(){return {};}
Sys.Mvc.InsertionMode=function(){};Sys.Mvc.InsertionMode.prototype = {replace:0,insertBefore:1,insertAfter:2}
Sys.Mvc.InsertionMode.registerEnum('Sys.Mvc.InsertionMode',false);Sys.Mvc.AjaxContext=function(request,updateTarget,loadingElement,insertionMode){this.$3=request;this.$4=updateTarget;this.$1=loadingElement;this.$0=insertionMode;}
Sys.Mvc.AjaxContext.prototype={$0:0,$1:null,$2:null,$3:null,$4:null,get_data:function(){if(this.$2){return this.$2.get_responseData();}else{return null;}},get_insertionMode:function(){return this.$0;},get_loadingElement:function(){return this.$1;},get_object:function(){var $0=this.get_response();return ($0)?$0.get_object():null;},get_response:function(){return this.$2;},set_response:function(value){this.$2=value;return value;},get_request:function(){return this.$3;},get_updateTarget:function(){return this.$4;}}
Sys.Mvc.AsyncHyperlink=function(){}
Sys.Mvc.AsyncHyperlink.handleClick=function(anchor,evt,ajaxOptions){evt.preventDefault();Sys.Mvc.MvcHelpers.$2(anchor.href,'post','',anchor,ajaxOptions);}
Sys.Mvc.MvcHelpers=function(){}
Sys.Mvc.MvcHelpers.$0=function($p0,$p1,$p2){if($p0.disabled){return null;}var $0=$p0.name;if($0){var $1=$p0.tagName.toUpperCase();var $2=encodeURIComponent($0);var $3=$p0;if($1==='INPUT'){var $4=$3.type;if($4==='submit'){return $2+'='+encodeURIComponent($3.value);}else if($4==='image'){return $2+'.x='+$p1+'&'+$2+'.y='+$p2;}}else if(($1==='BUTTON')&&($0.length)&&($3.type==='submit')){return $2+'='+encodeURIComponent($3.value);}}return null;}
Sys.Mvc.MvcHelpers.$1=function($p0){var $0=$p0.elements;var $1=new Sys.StringBuilder();var $2=$0.length;for(var $4=0;$4<$2;$4++){var $5=$0[$4];var $6=$5.name;if(!$6||!$6.length){continue;}var $7=$5.tagName.toUpperCase();if($7==='INPUT'){var $8=$5;var $9=$8.type;if(($9==='text')||($9==='password')||($9==='hidden')||((($9==='checkbox')||($9==='radio'))&&$5.checked)){$1.append(encodeURIComponent($6));$1.append('=');$1.append(encodeURIComponent($8.value));$1.append('&');}}else if($7==='SELECT'){var $A=$5;var $B=$A.options.length;for(var $C=0;$C<$B;$C++){var $D=$A.options[$C];if($D.selected){$1.append(encodeURIComponent($6));$1.append('=');$1.append(encodeURIComponent($D.value));$1.append('&');}}}else if($7==='TEXTAREA'){$1.append(encodeURIComponent($6));$1.append('=');$1.append(encodeURIComponent(($5.value)));$1.append('&');}}var $3=$p0._additionalInput;if($3){$1.append($3);$1.append('&');}return $1.toString();}
Sys.Mvc.MvcHelpers.$2=function($p0,$p1,$p2,$p3,$p4){if($p4.confirm){if(!confirm($p4.confirm)){return;}}if($p4.url){$p0=$p4.url;}if($p4.httpMethod){$p1=$p4.httpMethod;}if($p2.length>0&&!$p2.endsWith('&')){$p2+='&';}$p2+='X-Requested-With=XMLHttpRequest';var $0=$p1.toUpperCase();var $1=($0==='GET'||$0==='POST');if(!$1){$p2+='&';$p2+='X-HTTP-Method-Override='+$0;}var $2='';if($0==='GET'||$0==='DELETE'){if($p0.indexOf('?')>-1){if(!$p0.endsWith('&')){$p0+='&';}$p0+=$p2;}else{$p0+='?';$p0+=$p2;}}else{$2=$p2;}var $3=new Sys.Net.WebRequest();$3.set_url($p0);if($1){$3.set_httpVerb($p1);}else{$3.set_httpVerb('POST');$3.get_headers()['X-HTTP-Method-Override']=$0;}$3.set_body($2);if($p1.toUpperCase()==='PUT'){$3.get_headers()['Content-Type']='application/x-www-form-urlencoded;';}$3.get_headers()['X-Requested-With']='XMLHttpRequest';var $4=null;if($p4.updateTargetId){$4=$get($p4.updateTargetId);}var $5=null;if($p4.loadingElementId){$5=$get($p4.loadingElementId);}var $6=new Sys.Mvc.AjaxContext($3,$4,$5,$p4.insertionMode);var $7=true;if($p4.onBegin){$7=$p4.onBegin($6)!==false;}if($5){Sys.UI.DomElement.setVisible($6.get_loadingElement(),true);}if($7){$3.add_completed(Function.createDelegate(null,function($p1_0){
Sys.Mvc.MvcHelpers.$3($3,$p4,$6);}));$3.invoke();}}
Sys.Mvc.MvcHelpers.$3=function($p0,$p1,$p2){$p2.set_response($p0.get_executor());if($p1.onComplete&&$p1.onComplete($p2)===false){return;}var $0=$p2.get_response().get_statusCode();if(($0>=200&&$0<300)||$0===304||$0===1223){if($0!==204&&$0!==304&&$0!==1223){var $1=$p2.get_response().getResponseHeader('Content-Type');if(($1)&&($1.indexOf('application/x-javascript')!==-1)){eval($p2.get_data());}else{Sys.Mvc.MvcHelpers.updateDomElement($p2.get_updateTarget(),$p2.get_insertionMode(),$p2.get_data());}}if($p1.onSuccess){$p1.onSuccess($p2);}}else{if($p1.onFailure){$p1.onFailure($p2);}}if($p2.get_loadingElement()){Sys.UI.DomElement.setVisible($p2.get_loadingElement(),false);}}
Sys.Mvc.MvcHelpers.updateDomElement=function(target,insertionMode,content){if(target){switch(insertionMode){case 0:target.innerHTML=content;break;case 1:if(content&&content.length>0){target.innerHTML=content+target.innerHTML.trimStart();}break;case 2:if(content&&content.length>0){target.innerHTML=target.innerHTML.trimEnd()+content;}break;}}}
Sys.Mvc.AsyncForm=function(){}
Sys.Mvc.AsyncForm.handleClick=function(form,evt){var $0=Sys.Mvc.MvcHelpers.$0(evt.target,evt.offsetX,evt.offsetY);form._additionalInput = $0;}
Sys.Mvc.AsyncForm.handleSubmit=function(form,evt,ajaxOptions){evt.preventDefault();var $0=form.validationCallbacks;if($0){for(var $2=0;$2<$0.length;$2++){var $3=$0[$2];if(!$3()){return;}}}var $1=Sys.Mvc.MvcHelpers.$1(form);Sys.Mvc.MvcHelpers.$2(form.action,form.method||'post',$1,form,ajaxOptions);}
Sys.Mvc.AjaxContext.registerClass('Sys.Mvc.AjaxContext');Sys.Mvc.AsyncHyperlink.registerClass('Sys.Mvc.AsyncHyperlink');Sys.Mvc.MvcHelpers.registerClass('Sys.Mvc.MvcHelpers');Sys.Mvc.AsyncForm.registerClass('Sys.Mvc.AsyncForm');
// ---- Do not remove this footer ----
// Generated using Script# v0.5.0.0 (http://projects.nikhilk.net)
// -----------------------------------
;
/*
JQuery plug-in to handle modals on MVC modules.
It assumes existing markup as defined on MvcAdmin.Master or MvcFront.Master (It could be used custom in own view if needed nested modals).
*/

$(function () {
	(function ($) {
		$.fn.cpModal = function (opt) {
			//Here extends more options when needed modal with new behaviors LC.
			var defaults = {
				title: 'CP modal', 	// [html content] modal title's
				url: '', 			// [string] URL to be loaded on modal
				type: 'GET', 		// [string] type used for request (only in Ajax call. 'GET' or 'POST').
				contentType: 'application/x-www-form-urlencoded', // [string] contentType used for request (only in Ajax call).
				data: null, 		// [Object/string] data used for request (only in Ajax call).
				cache: false, 		// [bool] cache used for request (only in Ajax call).
				htmlContent: '', 	// [html content] When url is empty, uses this as modal's content
				className: '', 		// [string] CSS class for modal container
				isFrontEnd: true, 	// [bool] Whether modal's border color will be displayed as front-end or not
				parentWindowID: '', // [string] modal's parent window identifier (used for nested modals)
				isNestedModal: false, // [bool] is this a nested modal
				onClose: null, 		// [function] code to execute when close button is clicked
				autoLoad: true, 	// [bool] load content when invoking plug-in
				autoAdjust: false, // [bool] whether or not the modal will be auto positioned when scrolling
				useIframe: false, 	// [bool] whether or not to use an iFrame to load content
				iframeHeight: '', // [string] if using iframe, set specifc height for it (ex: '200px').
				elementID: null, //If a modal needs to be created with a custom ID, not using  mvcModal as ID.
				draggable: true, //Whether or not the modal is draggable.
				insideEditor: false, //Whether or not the modal is opening inside editor, in case of slideshow within editor, for example.
				showLoading: false, //Whether or not to show loading graphic while loading the modal.
				async: false, //Whether or not to load asynchronously the html content (only if options.url is defined).
				onLoadComplete: null,  //[function] code to execute when the modal has loaded successfully from AJAX
				scrolling: false, // [bool] whether iframe is scrollable.
				verticalCenter: false
			};

			var options = $.extend(defaults, opt);
			// cache the base element
			var base = this;
			base.options = options;
			// initialize (and localize) all variables
			var $modal = '';
			var $parentWindow = (options.parentWindowID && options.parentWindowID != '') ? $('#' + options.parentWindowID) : $(window);

			// PUBLIC FUNCTIONS
			this.init = function () {
				$modal = $(this);

				// If this modal is appearing inside an iframe remove admin wrap which can cause some issues 
				if (window.self !== window.top) {
					$modal.attr('style', function (i, s) { return s + 'height: auto !important;' });
				}

				// Saves current jquery object reference for future references to call public methods if needed
				if (!$modal.data('cpModal'))
					$modal.data('cpModal', base);

				// Sets modal title
				var $modalTitle = $modal.find('.modalTitle').filter(":first");
				$modalTitle.html(options.title);

				// Sets modal close button event.
				if (options.onClose != null) {
					$modal.find('.modalClose').filter(":first").attr('onclick', '').unbind('click');
					$modal.find('.modalClose').filter(":first").bind("click", function (e) {
						e.preventDefault();
						options.onClose(e, base);
						if(window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") && $('#hdnModuleEligibleForJquery224Upgrade').val() == "true")
						{
							var element = document.getElementsByClassName('modalTitle')[0]
							var events = $._data(element, "events");
							if(events != undefined)
								events.mouseout = undefined;
						}
						else
						{
							if ($('.modalTitle').data('events')) {
								$('.modalTitle').data('events').mouseout = undefined;
							}
						}						
					});
				} else {
					$modal.find('.modalClose').filter(":first").attr('onclick', '').unbind('click');
					$modal.find('.modalClose').filter(":first").bind("click", function (e) {
						e.preventDefault();
						base.hide();
						if(window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") && $('#hdnModuleEligibleForJquery224Upgrade').val() == "true")
						{
							var element = document.getElementsByClassName('modalTitle')[0]
							var events = $._data(element, "events");
							if(events != undefined)
								events.mouseout = undefined;
						}
						else
						{
							if ($('.modalTitle').data('events')) {
								$('.modalTitle').data('events').mouseout = undefined;
							}
						}						
						return false;
					});
				}

				$(".modalTitle").mouseout(function () {
					$("body").trigger($.Event("mouseup", { which: 1 }));
				});

				if ($.fn.draggable) {
					if (!options.draggable)
						$modal.css({ 'top': '', 'left': '' }); //reset to default position
					if ($modal.data('draggable') && !options.draggable) {
						$modal.draggable('destroy');
						$modalTitle.css('cursor', 'auto');
					}
					if (!$modal.data('draggable') && options.draggable) {
						$modal.draggable({
							handle: '.modalTitleLeft',
							iframeFix: self !== top,
							start: function (event, ui) {
							}
						});
						$modalTitle.css('cursor', 'move');
					}
				}

				// if needed, loads modal after initialization
				if (options.autoLoad)
					base.load();
			};

			this.load = function () {
				if (options.useIframe) {
					//create iframe on the fly
					var iframeHeight = (options.iframeHeight && options.iframeHeight != '') ? ' height:' + options.iframeHeight + ';' : '';
					var scrolling = options.scrolling ? 'style="overflow-y:auto;"' : 'scrolling="no"';
					var $iframe = $('<iframe style="border: none;' + iframeHeight + '" data-src="' + options.url + '" id="iframeModal" ' + scrolling + ' name="iframeModal" frameborder="0"></iframe>')
					$modal.find('.modalContent').filter(":first").html($iframe);
					base.show();

					if (options.onLoadComplete != null) {
						options.onLoadComplete(base);
					}
				} else if (options.url && options.url != '') {
					var ignoreEditor = options.insideEditor;
					//load from URL
					$.ajax({
						url: options.url,
						type: options.type,
						contentType: options.contentType,
						data: options.data,
						async: options.async,
						ignoreEditor: ignoreEditor,
						cache: options.cache,
						success: function (result) {
							var content = parseContent(result);
							$modal.find('.modalContent').filter(":first").html(content.body);
							$modal.find('.modalBottom').filter(":first").html(content.footer);
							base.show();

							if (options.onLoadComplete != null) {
								options.onLoadComplete(base);
							}
						},
						error: function (xhr, textStatus, exception) {
							alert('Error encountered while loading modal.' + "\nStatus: " + xhr.status + "\n" + "Exception: " + exception);
							$('#ajaxErrorLog').html(xhr.responseText);
						},
						beforeSend: function () {
							if (options.showLoading)
								ajaxPostBackStart('Loading');
						},
						complete: function () {
							if (options.showLoading)
								ajaxPostBackEnd();
						}
					});
				} else if (options.htmlContent && options.htmlContent != '') {
					//Load specific content
					var content = parseContent(options.htmlContent);
					$modal.find('.modalContent').filter(":first").html(content.body);
					$modal.find('.modalBottom').filter(":first").html(content.footer);
					base.show();

					if (options.onLoadComplete != null) {
						options.onLoadComplete(base);
					}
				} else {
					alert('Modal was incorrectly configured to display content.');
				}
			};

			this.show = function () {
				if (options.useIframe) {
					if (isie) {
						window.frames['iframeModal'].document.location.href = $modal.find('iframe').attr('data-src'); // This method was required tp address issue in IE 9 with moving IFrames arund and javascript errors					
					}
				}

				if ($modal.hasClass('modalContainerCP') && options.isFrontEnd) {
					$modal.removeClass('modalContainerCP');
					$modal.find('.modalContent').filter(":first").removeClass('adminWrap');
				} else if (!$modal.hasClass('modalContainerCP') && !options.isFrontEnd) {
					$modal.addClass('modalContainerCP');
					$modal.find('.modalContent').filter(":first").addClass('adminWrap');
				}

				if (options.useIframe && $modal.hasClass('noIframe')) {
					$modal.removeClass('noIframe');
				} else if (!options.useIframe && !$modal.hasClass('noIframe')) {
					$modal.addClass('noIframe');
				}

				if (options.className && options.className != '')
					$modal.addClass(options.className);

				if (options.useIframe && window.self !== window.top) { //IFrame loaded inside IFrame
					$modal.addClass('nestedIframe');
				}

				if (options.autoAdjust) {
					$(window).bind("scroll." + $modal.attr('id'), function () {
						adjustPosition();
					});
					adjustPosition();
				}

				if ($('.modalBackground').length == 0) {
					//creates a modal background for the page on the fly
					$('<div id="mvcModal_backgroundElement" class="modalBackground"></div>').prependTo('body');
				}

				$modal.show();
				if (!isie) {
					$modal.find('iframe').attr('src', $modal.find('iframe').attr('data-src'));
				}
				if (!options.autoAdjust || !options.verticalCenter)
					window.CommonPopoverInstance.resizeToWindow($modal);

				$(window).unbind('resize orientationChanged', setModalHeightWidthToFull).bind('resize orientationChanged', setModalHeightWidthToFull);

				setModalHeightWidthToFull($modal);

				$('.modalBackground').show(); //TODO: How to handle this better for nested modals

				options.verticalCenter && verticalCenter($modal);
			};

			function verticalCenter($modal) {
				parent = window;
				$modal.css({
					"position": "absolute",
					"top": ((($(parent).height() - $modal.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
					"left": ((($(parent).width() - $modal.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
				});
			}

			this.hide = function () {
				$modal.hide();
				$modal.removeClass(options.className);
				$(window).unbind("scroll." + $modal.attr('id'));
				$(window).unbind('resize orientationChanged', setModalHeightWidthToFull);
				var $visibleModals = $('.modalContainer:visible, .modalContainerCP:visible');
				var hasOpenNestedModals = $visibleModals.length > 0;
				if (!options.isNestedModal || !hasOpenNestedModals)
					$('.modalBackground').hide(); //TODO: How to handle this better for nested modals
			};

			this.destroy = function () {
				//TODO: This needs more work
				$modal.data('cpModal').remove();
			};

			// PRIVATE FUNCTIONS

			function adjustPosition() {
				var top = (($parentWindow.height() - $modal.outerHeight(false)) / 2) + $parentWindow.scrollTop();
				if (top < 0) // do not tolerate negative on top position.
					top = 0;
				$modal.css({ "top": top + "px" });
	            /* Not needed since left position is managed with styles and it works fine for nested modals too.
				if (options.isNestedModal)
				$modal.css({ "left": (($parentWindow.width() - $modal.outerWidth()) / 2) + $parentWindow.scrollLeft() + "px" });*/
			}

			/*This is used to adjust the modal when the users screen view is smaller than the modal. -Zach Terwort*/
			var lastScroll = 0;
			$(window).scroll(function () {
				var top = $parentWindow.height() - $modal.outerHeight(false);
				var scrollDirection = $parentWindow.scrollTop();
				if (top < 0 && scrollDirection > lastScroll) {
					top = $parentWindow.height() - $modal.height() - 20;
					$modal.css({ "top": top + "px" });
				}
				else if (top < 0) {
					top = 20;
					$modal.css({ "top": top + "px" });
				}
				lastScroll = scrollDirection;
			});

			/*This is used to make sure the modal isn't off the screen, and inaccessible after the user drops the modal. -Zach Terwort */
			$(document).mouseup(function (event) {
				var top = $modal.position().top;
				if (top < 0) {
					top = 20;
					$modal.css({ "top": top + "px" });
				}
			});

			function parseContent(htmlContent) {
				htmlContent = htmlContent || '';
				var content = { body: htmlContent, footer: '' };
				var indexFooter = htmlContent.indexOf('<modalfooter>');
				if (indexFooter != -1) {
					content.body = htmlContent.substr(0, indexFooter);
					content.footer = htmlContent.substr(indexFooter).replace('<modalfooter>', '').replace('</modalfooter>', '');
				}
				return content;
			}

			function setModalHeightWidthToFull() {
				var viewportHeight = $(window).height();
				var maxHeight = viewportHeight - 140;
				if (maxHeight <= $modal.height() && $(document.body).hasClass('wide')) {
					$('.modalContentRight > .modalContent', $modal).css('max-height', maxHeight + 'px');
					$modal.addClass('fullHeight');
				}
				else {
					$('.modalContentRight > .modalContent', $modal).css('max-height', '');
					$modal.removeClass('fullHeight');
				}

				if ($(document.body).hasClass('wide') && $modal.hasClass('fullWidth')) {
					$modal.removeClass('fullWidth');
					$modal.css('margin-top', '');
				}
			}

			base.init();
			return this;
		};
	})(jQuery);
});

//Standard function to open modals in most of the scenarios
function openCpModal(options) {
	//override modal options for mobile view
	if ($('#IsMobile').val() == 'True') {
		var mobileOptions = {
			autoAdjust: false //do not autoadjust when is mobile view. Modal nneds to be accessed from small browser in one spot.
		};
		options = $.extend(mobileOptions, options);
		if (options.className == null || options.className.indexOf('mobile') < 0)
			options.className = options.className + ' mobile'; //if needed add mobile class to modal.
	}

	var $modal = getCommonCpModal(options.elementID);
	if ($modal.parent() != $('body'))
		$modal.appendTo('body'); //if needed move at the end of the body

	if ($.fn.cpModal === undefined) { //Multiple versions of Jquery causing fn not to be registered.
		$.getScript('/Assets/Scripts/Modal.js', function () { return $modal.cpModal(options); });
	} else {
		return $modal.cpModal(options);
	}
}

//Standard function to close modals in most of the sceneries
function closeCpModal() {
	if (getCommonCpModal().data('cpModal')) {
		return getCommonCpModal().data('cpModal').hide();
	}
}

//Get markup modal or create one on the fly if needed
function getCommonCpModal(elementID) {
	//If elementID is not provided, use the default 'mvcModal' id.
	if (elementID == null)
		elementID = 'mvcModal';
	//If the element already exists on the page, simply return the element to be reused.
	if ($('#' + elementID).length > 0) {
		return $('#' + elementID);
	}
	else {
		//Create on the fly a common mvc modal markup with custom ID.
		var $modalContainer = $('<div id="' + elementID + '" class="modalContainer modalContainerCP MVC noIframe" style="display: none;"></div>');
		var $modalTitleLeft = $('<div class="modalTitleLeft"><h3 class="modalTitle"></h3><a class="modalClose" href="#" aria-label="Close this modal" title="Close this window">' +
								'<svg viewBox="0 0 25 25" id="modalIconClose"><polygon style="fill:currentcolor" points="18.806,6.98 18.075,6.248 12.532,11.792 6.989,6.248 6.257,6.98 11.786,12.508 6.212,18.084 6.943,18.815 12.532,13.224 18.12,18.815 18.851,18.084 13.277,12.508"></polygon>' +
								'</svg></a></div>');
		var $modalContentLeft = $('<div class="modalContentLeft"><div class="modalContentRight"><div class="newCP adminWrap modalContent"></div></div></div>');
		var $modalBottomLeft = $('<div class="modalBottomLeft"><div class="modalBottomRight"><div class="modalBottom"></div></div></div>');
		$modalContainer.append($modalTitleLeft).append($modalContentLeft).append($modalBottomLeft);
		$modalContainer.appendTo('body');
		return $modalContainer;
	}
}

function PositionVerticle($modal) {
	$modal.css({ "top": (($(window).height() - $modal.outerHeight(false)) / 2) + $(window).scrollTop() + "px" });
	$modal.css({ "top": ($parentWindow.height() - $modal.outerHeight(false)) / 2 + $parentWindow.scrollTop() + "px" });
}

function showModal(className) {
	var $modal = $('.modalContainer.' + className);
	window.onscroll = function () {
		PositionVerticle($modal);
	};
	PositionVerticle($modal);
	$modal.show();
	$(window).unbind('resize orientationChanged', setModalHeightWidthToFull).bind('resize orientationChanged', setModalHeightWidthToFull);
	setModalHeightWidthToFull($modal);
	$('.modalBackground').show();
}

function hideModal(className) {
	$('.modalContainer.' + className).hide();
	$('.modalBackground').hide();
}

function hideModalAndReloadPage(className) {
	hideModal(className);
	location.reload(true);
}

/*
JQuery plug-in to handle popovers.

*/
function CommonPopoverClass() {
	this.popovers = [];
	this.initialized = false;
	this.$commonPopup = null;

	this.PopoverWrap = function ($popover, options) {
		this.ID = $popover.attr('id');
		this.$popoverContent = $popover.children();
		this.isVisible = false;
		this.options = options;
		this.onClose = null;
	};
}

CommonPopoverClass.prototype.hideAll = function (animate) {
	var self = this;
	if (self.$commonPopup != null) {
		self.$commonPopup.fadeOut(animate ? 300 : 0, function () {
			for (var i = 0; i < self.popovers.length; i++) {
				if (self.popovers[i].options.className && self.popovers[i].options.className != '')
					self.$commonPopup.removeClass(self.popovers[i].options.className);
				self.popovers[i].isVisible = false;
			}
		});
	}
};

CommonPopoverClass.prototype.show = function (popoverWrap) {
	var self = this;
	var alreadyOpened = false; //To prevent creating animation if popover is already opened
	for (var i = 0; i < self.popovers.length; i++) {
		if (self.popovers[i].options.className && self.popovers[i].options.className != '')
			self.$commonPopup.removeClass(self.popovers[i].options.className);
		if (self.popovers[i].isVisible)
			alreadyOpened = true;
		self.popovers[i].isVisible = false;
	}
	self.$commonPopup.children().detach();
	self.$commonPopup.append(popoverWrap.$popoverContent);

	if (popoverWrap.options.className && popoverWrap.options.className != '')
		self.$commonPopup.addClass(popoverWrap.options.className);
	popoverWrap.isVisible = true;
	self.$commonPopup.fadeIn(alreadyOpened ? 0 : 300, function () {
		//If needed call back onOpen event
		if (popoverWrap.options.onOpen != null && typeof (popoverWrap.options.onOpen) == "function")
			popoverWrap.options.onOpen(popoverWrap);
	});
};

CommonPopoverClass.prototype.hide = function (popoverWrap) {
	var self = this;
	if (popoverWrap && popoverWrap.options) {
		self.$commonPopup.fadeOut(300, function () {
			if (popoverWrap.options.className && popoverWrap.options.className != '')
				self.$commonPopup.removeClass(popoverWrap.options.className);
			popoverWrap.isVisible = false;
		});
	}
};

CommonPopoverClass.prototype.RegisterPopover = function ($popover, options) {
	var self = this;
	if ($popover.attr('id') == null || $popover.attr('id') == "") {
		$.ajaxSetup({ async: false });
		AJAX("/Utility/NewGuid", "post", null, function (reponse) {
			$popover.attr('id', reponse.Guid);
		}, false);
		$.ajaxSetup({ async: true });
	}

	//Creates popover wrapper
	var newPopoverWrap = new self.PopoverWrap($popover, options);
	//remove popover if nedded
	self.RemovePopover(newPopoverWrap);
	//add popover to global array
	self.popovers.push(newPopoverWrap);

	//common popover initialization if needed
	self.init();

	//pop over specific initialization

	// Sets popover close button event.
	if (options.onClose != null && typeof (options.onClose) == "function") {
		$popover.find('.cpClosePopOver').filter(":first").attr('onclick', '').unbind('click');
		$popover.find('.cpClosePopOver').filter(":first").bind("click", function (e) {
			options.onClose(e, newPopoverWrap);
		});
	} else {
		$popover.find('.cpClosePopOver').filter(":first").attr('onclick', '').unbind('click');
		$popover.find('.cpClosePopOver').filter(":first").bind("click", function (e) {
			e.preventDefault();
			self.hide(newPopoverWrap);
		});
	}

	return newPopoverWrap;
};

CommonPopoverClass.prototype.RemovePopover = function (popoverWrap) {
	var self = this;
	for (var i = 0; i < self.popovers.length; i++) {
		if (self.popovers[i].ID == popoverWrap.ID)
			self.popovers.splice(i);
	}
};

CommonPopoverClass.prototype.init = function () {
	var self = this;
	if (!self.initialized) {
		self.$commonPopup = self.getCommonPopover();

		self.$commonPopup.click(function (e) {
			e.stopPropagation();
		}).draggable({
			handle: '.cpPopOverHeader'
		});

		$('html').click(function () {
			self.hideAll(true);
		});

		self.initialized = true;
	}
};

CommonPopoverClass.prototype.getCommonPopover = function (elementID) {
	var commonElementID = "cpCommonPopover";
	if (elementID == null) {
		if ($('#cpCommonPopover').length == 1)
			return $('#cpCommonPopover');
		if ($('.cpPopOver.common').length == 1)
			return $('.cpPopOver.common');
	}
	else
		commonElementID = elementID;
	//create on the fly a common popover markup.
	//Sets initial top position based on toolbar if exists
	var topPosition = "";
	if ($("#divToolbars").length > 0) {
		topPosition = " top: " + ($("#divToolbars").height() + $('div.cp-Toolbars').height() + 30) + "px;";
	}

	var $commonPopover = $("<div id=\"" + commonElementID + "\" class=\"cpPopOver common\" style=\"display: none; z-index:100; position:fixed;" + topPosition + "\"></div>");
	return $commonPopover.appendTo('body');
};

$(function () {
	(function ($) {
		$.fn.cpPopover = function (opt) {
			//Here extends more options when needed popover with new behaviors LC.
			var defaults = {
				url: '', 			// [string] URL to be loaded on popover
				type: 'GET', 		// [string] type used for request (only in Ajax call. 'GET' or 'POST').
				contentType: 'application/x-www-form-urlencoded', // [string] contentType used for request (only in Ajax call).
				data: null, 		// [Object/string] data used for request (only in Ajax call).
				cache: false, 		// [bool] cache used for request (only in Ajax call).
				htmlContent: '', 	// [html content] When url is empty, uses this as popover's content
				onClose: null, 		// [function] code to execute when close button is clicked
				onOpen: null, 		// [function] code to execute when popover is opened
				onInit: null, 		// [function] code to execute when popover is initialized (after loading)
				className: '', 		// [string] CSS class for popover container
				makeAjaxCallEverytime: false //Whether or not an ajax call is always made whenever the control is clicked. If false, uses the cached(already rendered) version.
			};

			var options = $.extend(defaults, opt);

			// cache the base element
			var base = this;
			// initialize (and localize) all variables
			var $handler = null;
			var $popover = null;
			var popoverWrapper = null;

			// PUBLIC FUNCTIONS
			this.init = function () {
				$handler = $(this);
				$popover = $handler.nextAll("div.cpPopOver");

				// Saves current jquery object reference for future references to call public methods if needed
				if (!$handler.data('cpPopover'))
					$handler.data('cpPopover', base);

				$handler.unbind("click.cpPopover").bind("click.cpPopover", function (e) {
					e.preventDefault();
					e.stopPropagation();
					if ($popover.length == 0 || options.makeAjaxCallEverytime) {
						//if popup has not being rendered yet, loaded it only first time
						base.load();
					} else {
						//toggle display
						base.toggle();
					}
				});

				if ($popover.length != 0) {
					base.initPopOver();
				}
			};

			this.initPopOver = function () {
				$popover = $handler.nextAll("div.cpPopOver");

				//Register popover and store wrap reference
				popoverWrapper = window.CommonPopoverInstance.RegisterPopover($popover, options);

				//If needed call back onInit event
				if (options.onInit != null && typeof (options.onInit) == "function")
					options.onInit(popoverWrapper);
			};

			this.load = function () {
				if (options.url && options.url != '') {
					//load from URL
					$.ajax({
						url: options.url,
						type: options.type,
						contentType: options.contentType,
						data: options.data,
						async: false,
						cache: options.cache,
						success: function (response) {
							if (response.ErrorMessage) {
								alert(response.ErrorMessage);
							}
							else {
								$handler.after(response);
								base.initPopOver();
								base.show();
							}
						},
						error: function (xhr, textStatus, exception) {
							alert('Error encountered while loading popover.' + "\nStatus: " + xhr.status + "\n" + "Exception: " + exception);
							$('#ajaxErrorLog').html(xhr.responseText);
						}
					});
				} else if (options.htmlContent && options.htmlContent != '') {
					//Load specific content //TOOD: ????
					$handler.after(options.htmlContent);
					base.initPopOver();
					base.show();
				} else {
					alert('Popover was incorrectly configured to display content.');
				}
			};

			this.show = function () {
				window.CommonPopoverInstance.show(popoverWrapper);
			};

			this.hide = function () {
				window.CommonPopoverInstance.hide(popoverWrapper);
			};

			this.toggle = function () {
				if (popoverWrapper.isVisible)
					base.hide();
				else
					base.show();
			};

			this.destroy = function () {
				if ($popover.length != 0) {
					$popover.find('.cpClosePopOver').filter(":first").unbind('click');
					$popover.unbind("click");
					if($popover.data('draggable'))
						$popover.draggable('destroy');
					window.CommonPopoverInstance.RemovePopover(popoverWrapper);
					$popover.remove();
				}
				$handler.unbind("click.cpPopover");
				$handler.removeData('cpPopover');
			};

			// PRIVATE FUNCTIONS

			base.init();
			return this;
		};
	})(jQuery);

	if (!window.CommonPopoverInstance) {
		window.CommonPopoverInstance = new CommonPopoverClass();
	}
});

CommonPopoverClass.prototype.resizeToWindow = function ($popup) {
	var viewportHeight = $(window).height();
	var toolbarHeight = ($('#divToolbars').height() + $('div.cp-Toolbars').height());
	var maxHeight = viewportHeight - toolbarHeight - 205;
	var popupHeight = $popup.height();
	var popupOffset = $popup.offset();
	var scrollTop = $popup.scrollTop();
	var pageScroll = getPageScroll();
	$popup.find('.cpTabPanel').css('max-height', maxHeight + 'px');
	$popup.css('top', 20 + 'px'); //This always needs to have a top. So we set it here.
};

function getPageScroll() {
	var xScroll, yScroll;
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
		xScroll = self.pageXOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		yScroll = document.documentElement.scrollTop;
		xScroll = document.documentElement.scrollLeft;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
		xScroll = document.body.scrollLeft;
	}
	return new Array(xScroll, yScroll);
}

// Adapted from getPageSize() by quirksmode.com
function getPageHeight() {
	var windowHeight;
	if (self.innerHeight) { // all except Explorer
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) {
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowHeight = document.body.clientHeight;
	}
	return windowHeight;
}
;

var isie6 = false, isie7 = false, isie6or7 = false;
var intCountryCode =  840;
var urlLengthLimit = false;

function setEditorVariables(urlLengthLimitParameter, intCountryCodeParameter) {
	urlLengthLimit = urlLengthLimitParameter;
	intCountryCode = intCountryCodeParameter;
}

function setUrlLength(editor) {
	if (urlLengthLimit) {
		editor.get_dialogOpener()._dialogUrlLengthLimit = 1000;
	}
	setMenuItems(editor);
	removeIEParagraphs(editor);
}

function setUrlLengthAndToolToggle(editor) {
	if (!$telerik.isIE) {
		editor.fire("PastePlainText");
		editor.get_dialogOpener()._dialogContainers.CleanPasteTextContent.close();
	}
	if (urlLengthLimit) {
		editor.get_dialogOpener()._dialogUrlLengthLimit = 1000;
	}
	var minToolsGroups = 2; // Number of MinimumSetOfTools tools groups.
	
	// Hide the MinimumSetOfTools on load.
	var toolbar = editor.get_toolContainer(); // Get toolbar container.
	var toolgroups = toolbar.getElementsByTagName("UL"); 
	
	for (var i = toolgroups.length - 1; i >= minToolsGroups; i--)
		toolgroups[i].style.display = "none";
	
	if (editor.isIE) {
		var elem = editor.get_element();
		elem.style.height = "430px"; 
		elem.style.minHeight = "430px";
	}
	
	// Toggle Image Context Menu Items.
	setMenuItems(editor);
	//setContentBackgroundColor(editor);
	removeIEParagraphs(editor);
}
;
function bindImageWidgetClickHandler(widgetID) {
	var insideContainerWidget = $('#divImageOuter' + widgetID).parents('.tabbedWidget,.widgetCarousel').length > 0;
	if (!insideContainerWidget) {
		//Normal image widget on page.
		$('#divImageOuter' + widgetID).parents('div.inner.col').click(function (e) {
			if (!liveEditHidden && typeof window.imageRepository != 'undefined' && typeof window.imageRepository.openImageUploadModal != 'undefined') {
				var options = {
					loadSource: window.imageRepository.loadSource.Content,
					targetID: widgetID,
					$target: null,
					callback: window.imageRepository.closeImageWidgetUploadModal,
					modalTitle: window.ContentCollectionInstance.resources.ContentImages,
					contentCollection: window.ContentCollectionInstance,
					pageID: window.ContentCollectionInstance.PageID,
					moduleID: window.ContentCollectionInstance.ModuleID || 76
				};
				window.imageRepository.openImageUploadModal(options);
			}
		}).find('.handle.move').unbind('click').click(function (e) {
			if (e.stopPropagation)
				e.stopPropagation();
		});
	}
	else {
		//Inside container widget.
		$('#divImageOuter' + widgetID +' > .widgetBody').click(function () {
			if (!liveEditHidden && typeof window.imageRepository != 'undefined' && typeof window.imageRepository.openImageUploadModal != 'undefined') {
				var options = {
					loadSource: window.imageRepository.loadSource.Content,
					targetID: widgetID,
					$target: null,
					callback: window.imageRepository.closeImageWidgetUploadModal,
					modalTitle: window.ContentCollectionInstance.resources.ContentImages,
					contentCollection: window.ContentCollectionInstance,
					pageID: window.ContentCollectionInstance.PageID,
					moduleID: window.ContentCollectionInstance.ModuleID || 76
				};
				window.imageRepository.openImageUploadModal(options);
			}
		});
	}
}

function ImageWidgetCallback(widgetID, response) {
    if (window.ContentCollectionInstance.IsWorkingCopy) {
        $('#divImage' + widgetID).html(response);        
        contentUpdated();
        bindImageWidgetClickHandler('' + widgetID);        
    }
    else {
        ContentCollectionInstance.reloadContent();
    }
};
var ajax_call_counter = 0;
var safariRateLimited = null;
var validationCallbacks = new Array();
var numbersOnly = new RegExp('^[0-9]*$');
var gDateFormat;
var isie6 = false; // Should be set by conditional comments on page.
var isie7 = false;
var isie8 = false;
var isie = window.clipboardData;

function CoreNamespace() {
	this.timer = 0;
	this.performSetHeights = true;
}

CoreNamespace.prototype.resetTimer = function () {
	this.timer = this.getTimer();
	console.log('timer reset: ' + this.timer);
};

CoreNamespace.prototype.logTime = function (label) {
	var datetime = new Date();
	if (label == null) label = '';
	var localTimer = this.getTimer();
	var duration = this.timer == 0 ? 0 : localTimer - this.timer;
	this.timer = localTimer;
	console.log(label + ': ' + duration);
};

CoreNamespace.prototype.getTimer = function (label) {
	var datetime = new Date();
	return datetime.getMinutes() * 60 * 1000 + datetime.getSeconds() * 1000 + datetime.getMilliseconds();
};

//gets the cookie, if it exists
function getCookieValue(cookiename) {
	var ck = document.cookie;
	var cn = cookiename + "=";
	var pos = ck.indexOf(cn);

	if (pos != -1) {
		var start = pos + cn.length;
		var end = ck.indexOf(";", start);
		if (end == -1) end = ck.length;
		var cookieValue = ck.substring(start, end);
		return (cookieValue);
	}

	return (null);
}

// Gets Json object using a given url.
function GetJson(url) {
	var result;
	var alreadySync = !$.ajaxSettings.async;
	if (!alreadySync)
		$.ajaxSetup({ async: false });
	$.post(url, function (data) {
		result = data;
	});
	if (!alreadySync)
		$.ajaxSetup({ async: true });
	return result;
}

//Update and maintain the value of "daysSinceLastLogin" cookie
function setDaysSinceLastLoginCookie() {
	var currentDate = new Date();
	var curDateStr = currentDate.getMonth() + 1 + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
	if ($.cookie('lastLoginDate') == null) {
		$.cookie('lastLoginDate', curDateStr, { path: '/' });
		$.cookie('daysSinceLastLogin', '0', { path: '/' });
	}
	else {
		var lastLoginDate = $.cookie('lastLoginDate');
		$.cookie('lastLoginDate', curDateStr, { path: '/' });
		$.cookie('daysSinceLastLogin', dayDifference(curDateStr, lastLoginDate), { path: '/', expires: 9999 });
	}
}

// Do not use in new code. Use jQuery with event.preventDefault().
function hookAnchorClick(anchor, fn) {
	/// <summary>Hooks an anchor onclick and prevents default HREF behavior.</summary>
	/// <param name="anchor" type="domElement">The DOM element to attach the event handler for.</param>
	/// <param name="fn" type="Function">Function to be called when anchor is clicked. Should have sender and event argument, in that order.</param>
	var clickHandler = function (event) {
		var sender;

		if (window.event) {
			event = window.event;
			sender = event.srcElement;
		}
		else
			sender = event.target;

		fn(sender, event);

		if (event.stopPropagation)
			event.stopPropagation();
		else
			event.cancelBubble = true;

		return false;
	}

	// HACK: MSIE/Opera onclick fails to operate correctly.
	if (isie || isie8 || isie7 || isie6 || (document.documentMode < 8) || window.opera)
		anchor.onmousedown = clickHandler;
	else
		anchor.onclick = clickHandler;
}

function beginRequest(sender, args) {
	document.body.style.cursor = "wait";
}

function pageLoaded(sender, args) {
	document.body.style.cursor = "default";
}

var ajaxSpinnerVisible = false;
// Called when async postbacks begins
function onAjaxPostBackStart(sender, args) {
	ajaxPostBackStart('Loading');
}

// Called when async postback ends
function onAjaxPostBackEnd(sender, args) {
	ajaxPostBackEnd();
}

// Show ajax process panel with a customized text
function ajaxPostBackStart(textProcessing) {
	if (!textProcessing || textProcessing == "")
		textProcessing = 'Loading';
	if (!ajaxSpinnerVisible) {
		var panelAjaxProgress = $("#divAjaxProgress"),
				divAjaxImgProgress = $("#divAjaxImgProgress"),
				panelAjaxShade = $("#divAjaxShade");

		if (panelAjaxProgress.length == 0) {
			//create divs on the fly
			panelAjaxProgress = $('<div id="divAjaxProgress" style="display:none;"></div>');
			panelAjaxShade = $('<div id="divAjaxShade"></div>');
			divAjaxImgProgress = $('<div id="divAjaxImgProgress" class="loading"><img src="/Common/images/ajax-loader.gif" /><p></p></div>');

			panelAjaxProgress.append(panelAjaxShade);
			panelAjaxProgress.append(divAjaxImgProgress);
			panelAjaxProgress.prependTo('body');

			panelAjaxProgress
				.css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'bottom': '0px', 'right': '0px',
					'text-align': 'center', 'border': '1px solid #666',
					'z-index': '90000000'
				});
			panelAjaxShade
				.css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'bottom': '0px', 'right': '0px',
					'background': '#fff', 'opacity': '0.5'
				});

			divAjaxImgProgress.css({ 'position': 'relative' });
		}

		ajaxSpinnerVisible = true;
		ajaxProcesingResizing();
		ajaxUpdateText(textProcessing);
		panelAjaxProgress.show();
		divAjaxImgProgress.show();

		$(window).bind('resize', ajaxProcesingResizing);
	}
}

// Hide ajax process panel
function ajaxPostBackEnd(noAnimation) {
	if (ajaxSpinnerVisible) {
		var panelAjaxProgress = $("#divAjaxProgress");
		var divAjaxImgProgress = $("#divAjaxImgProgress");

		if (noAnimation) {
			divAjaxImgProgress.hide();
			panelAjaxProgress.hide();
		} else {
			divAjaxImgProgress.fadeOut("fast", function () {
				panelAjaxProgress.hide();
			});
		}

		ajaxSpinnerVisible = false;
		$(window).unbind('resize', ajaxProcesingResizing);
	}
}

// Update ajax panel feedback text while panel is being displayed
function ajaxUpdateText(text) {
	if (ajaxSpinnerVisible) {
		var divAjaxImgProgress = $("#divAjaxImgProgress");
		divAjaxImgProgress.children('img').attr('alt', text).attr('title', text);
		divAjaxImgProgress.children('p').html(text);
	}
}

// Resize ajax panel when on window resize
function ajaxProcesingResizing() {
	if (ajaxSpinnerVisible) {
		var panelAjaxProgress = $("#divAjaxProgress");
		var divAjaxImgProgress = $("#divAjaxImgProgress");
		var panelAjaxShade = $("#divAjaxShade");

		panelAjaxProgress.height($(window).height()).width($(window).width());
		panelAjaxShade.height($(window).height()).width($(window).width());

		divAjaxImgProgress.css({ 'top': ($(window).height() / 2) - (divAjaxImgProgress.height() / 2) + 'px' });
	}
}

// Implements HTML5 placeholder attribute for browsers that do not support it (and for HTML5 server-side control).
var tmpPH = document.createElement('input');
var supportPH = (tmpPH.placeholder != null);
//var colorPH = '#c0c0c0';

var removePlaceholder = (supportPH ?
	function (elem) { } : function (elem) {
		if (elem != null) {
			if (elem.hidePlaceholder)
				elem.hidePlaceholder();

			elem.hidePlaceholder = null;
			elem.showPlaceholder = null;

			removeEvent(elem, 'focus', elem._ph_focus, false);
			removeEvent(elem, 'blur', elem._ph_onblur, false);
			removeEvent(elem, 'onmouseout', elem.ph_onmouseout, false);
			removeEvent(elem._ph_form, 'submit', elem._ph_form_submit, false);
		}
	});

var setPlaceholder = (supportPH ?
	function (elem) { } : function (elem) {
		if (elem != null) {
			if (elem.showPlaceholder != null)
				removePlaceholder(elem);

			var attrVal = elem.getAttribute('placeholder');

			elem.hidePlaceholder = function () {
				if (elem.value == attrVal) {
					if (elem.oldClassName != null)
						elem.className = elem.oldClassName;

					elem.value = '';
				}
			}

			elem.showPlaceholder = function () {
				if (elem.value == '') {
					if (attrVal == null)
						attrVal = '';
					elem.value = attrVal;

					var className = elem.className;
					className = (className == null ? '' : elem.className);
					elem.oldClassName = className;
					elem.className = className + ' fakePlaceholder';
				}
			}

			if (elem.value == null || elem.value == '')
				elem.showPlaceholder();

			elem._ph_focus = function (event) {
				elem.hidePlaceholder();
			};

			elem._ph_blur = function (event) {
				elem.showPlaceholder();
			};

			addEvent(elem, 'focus', elem._ph_focus, false);
			addEvent(elem, 'blur', elem._ph_blur, false);

			if (elem.form) {
				elem._ph_form = elem.form;

				elem._ph_form_submit = function (event) {
					if (elem)
						removePlaceholder(elem);
				};

				addEvent(elem._ph_form, 'submit', elem._ph_form_submit, false);
			}
		}
	});

//When programtically form.submit() is invoked, the placeholders are not removed automatically (onsubmit event is not called).
//This function could be invoked before form.submit() if necessary.
function removePlaceHolders() {
	$('input[placeholder]').each(function () {
		removePlaceholder($(this).get(0));
	});
}

var setPlaceHolder = setPlaceholder;

// Validation plugs for runat=server form in master page.
function headerValidationCallback() {
	for (var i = 0; i < validationCallbacks.length; i++) {
		if (!validationCallbacks[i]())
			return false;
	}
	return true;
}

function addHeaderValidator(method) {
	validationCallbacks.push(method);
}

function getBrowser() {
	var N = navigator.appName, ua = navigator.userAgent, tem;
	var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
	M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
	return M[0];
}

function getBrowserVersion() {
	var N = navigator.appName, ua = navigator.userAgent, tem;
	var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
	M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
	return M[1];
}

function isLegacyBrowser() {
	var browser = getBrowser(),
	browserVersion = getBrowserVersion(),
	browserMajorVersion = Number(browserVersion.split('.')[0]);

	var legacyBrowser = ((browser == 'MSIE' && browserMajorVersion < 10) || (browser == 'Chrome' && browserMajorVersion < 30) || (browser == 'Firefox' && browserMajorVersion < 24) || (browser == 'Netscape' && browserMajorVersion != 5)
	|| (browser == 'Safari' && browserMajorVersion < 5) || (browser != 'MSIE' && browser != 'Chrome' && browser != 'Firefox' && browser != 'Safari' && browser != 'Netscape'));

	return legacyBrowser;
}

function setTrackBrowserCookie(trackValue) {
	var date = new Date();
	date.setYear(2100);
	document.cookie += ("; expires=" + date.toUTCString());
	document.cookie = "CP_TrackBrowser=" + JSON.stringify(trackValue) + "; expires=" + date.toUTCString() + "; path=/";
};

function getTrackBrowserCookie() {
	var trackBrowser = { doNotShowLegacyMsg: false, supportNewUI: true };
	var trackBrowserRaw = getCookieValue('CP_TrackBrowser');
	if (trackBrowserRaw != null) {
		trackBrowser = JSON.parse(trackBrowserRaw);
	} else {
		trackBrowser.legacy = isLegacyBrowser();
		trackBrowser.isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) || false;
		setTrackBrowserCookie(trackBrowser);
	}
	return trackBrowser;
}

function browserFailOvers() {
	var trackBrowser = getTrackBrowserCookie();

	if (trackBrowser.legacy && window.isModuleUsingAngular && trackBrowser.supportNewUI) {
		trackBrowser.supportNewUI = false;
		setTrackBrowserCookie(trackBrowser);
		window.location.reload(true); //reload to not show new UI
		return;
	}

	if (trackBrowser.legacy && !trackBrowser.isMobile && !trackBrowser.doNotShowLegacyMsg && !$('body').hasClass('mobile') && !$('body').hasClass('narrow')) {
		$.ajax({
			url: '/Site/Browser/Message',
			type: 'GET',
			success: function (response) {
				$('#divToolbars').append(response);

				$('.browserMessage a.dismiss').click(function (e) {
					e.preventDefault();
					trackBrowser.doNotShowLegacyMsg = true;
					setTrackBrowserCookie(trackBrowser);
					$('.browserMessage').slideUp();
				});

				$('.browserMessage').slideDown();
			}
		});
	}
};
function MarkNotificationsAsNotified(target) {
	$.ajaxSetup({ cache: false });

	$.ajax({
		url: '/MyAccount/UpdateNotifications',
		cache: false,
		global: false
	});

	$.ajax({
		url: '/Toolbar/Toolbar?currentUrl=' + location.href,
		cache: false,
		async: false,
		success: function (response) {
			//$('#divToolbars').html(response);
			initToolBar();
		}
	});
	return false;
}

$(document).ready(function () {

	$('[name="myAccountNotificationOther"]').click(function () {
		$.ajaxSetup({ cache: false });

		$.ajax({
			url: '/MyAccount/UpdateNotifications',
			cache: false,
			global: false,
			async: false
		});
	});

	var pattern = new RegExp(window.location.hostname + "/[A|a]dmin/"); // does the URL contain /Admin/ ?
	if (pattern.test(window.location.href)) { //if url contains Admin
		//On backend, toolbar needs to be loaded after rendering page.
		$.ajax({
			url: '/Toolbar/Toolbar',
			cache: false,
			async: false,
			success: function (response) {
				if (window.isModuleUsingAngular) {
					$('#divToolbars').after(response);
				} else {
					$('#divToolbars').html(response);
				}

				$('#divToolbars').find('div.cpToolbar.user').removeClass('public').addClass('admin adminWrap');
				
				initToolBar();
			}
		});
	} else {
		if (window.isModuleUsingAngular && $('.cp-InnerWrap').length > 0) {
			$('#divToolbars').before($('.cp-InnerWrap'));

			if ($(window).width() > 720) {
				$('#divToolbars').css("padding-top", "51px");
			}
		}
		//Front-end toolbar will be rendered along with layout.
		initToolBar();
	}

	var $toolbars = $('#divToolbars').children('.cpToolbar');
	var zIndex = $toolbars.length;
	$toolbars.each(function () {
		$(this).css('z-index', zIndex.toString());
		zIndex--;
	});


	var hideWelcomeMessage = function () {
	    if ($(window).width() <= 825) {
	        $('.welcomeMessage').hide();
	        resetBodyPadding();
	    } else {
	        $('.welcomeMessage').show();
	    }
	};

	hideWelcomeMessage();

	window.addEventListener("orientationchange", function () {
	    hideWelcomeMessage();
	}, false);

	window.addEventListener("resize", function () {
	    hideWelcomeMessage();
	}, false);

});

function liveEditTooltip () {
	if ($.showTooltip) {
		$.showTooltip({
			Id: 'liveEditTooltip',
			tooltipContent: '<p>Live Edit is off. Click this button to turn it on so you can edit your page content and menus.</p><p><a href="#" class="button closeTooltip"><span>Thanks</span></a></p>',
			className: 'newCP flyOut bottom center withArrow fixed cpPopOver admin adminWrap helpTip',
			$target: $('.openLiveEditMenu'),
			$referenceElements: null,
			slideOrientation: 'down'
		});
	}
}

function resetBodyPadding() {
	var toolbarHeight = $('#divToolbars').height();
	var navBarButton = $('#nav-open-btn');
	var hamburgerMenuHeight = navBarButton.length > 0 ? ((window.fixedResponsiveMenu || $('.cpToolbar.user.public').length > 0) ? 0 : navBarButton.height()) : 0;
	var totalHeight = toolbarHeight + hamburgerMenuHeight;
	$('#bodyWrapper').css('padding-top', totalHeight + 'px');
	return toolbarHeight;
}

function initToolBar() {
	if ($('.cpToolbar', '#divToolbars').length == 0) {
		return; // bail if there is not any toolbar displayed.
	}

	$('.cpToolbar .openLiveEditMenu').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('off')) {
			enableLiveEdit(true);
		}
	});

	$('.dropdown.liveEdit').click(function () {
		if ($('.dropdown.liveEdit').hasClass('open')) {
			$.cookie('liveEditOpen', 'true', ' path=/');
		} else {
			$.cookie('liveEditOpen', 'false', ' path=/');
		}
	});

	// Handle Event Bubbling
	$('html').click(function () {
		//Hide the menus if visible
		closeMenus();
	});

	$('#divToolbars').click(function (event) {
		if (event.target != null && $(event.target).hasClass('noStopPropagation')) return;
		event.stopPropagation();
		$('.popUp:visible').fadeOut(200, function () {
			$('.popUpParent').removeClass('popped');
		}).removeClass('popped');
	});

	// Handle pages context toolbar - This should be refactored into a more general solution
	$('.cpToolbar.admin.actions.adminWrap')
		.insertAfter('.cpToolbar.user.admin.adminWrap')
		.removeClass("hidden");

	// Hiding all menus
	$('.menu', '#divToolbars').hide();

	var $body = $('body');
	// Shifting the page down to accommodate fixed toolbars
	var toolbarHeight = resetBodyPadding();
	$body.css('background-position', 'center ' + toolbarHeight);
	
	if (!$body.hasClass('mobile') && (!$body.hasClass('narrow') || !$body.hasClass('wide'))) {
		$body.addClass('wide');
	}

	// Opening/closing menus when clicked
	$('.dropdown > a:not(.myConnections):not(.moreInfo)', '#divToolbars').click(function (e) {
		e.preventDefault();

		var $toggle = $(this).parent(),
			target = $(this).attr('href');
		target = target.substring(target.indexOf('#'));
		var $menu = $(target);

		if ($toggle.hasClass('open')) {
			$menu.fadeOut(200).removeClass('showing');
			$toggle.removeClass('open');
		} else {
			$('.showing', '.cpToolbar.user').removeClass('showing').fadeOut(200);
			$('.open', '.cpToolbar.user').removeClass('open');
			$menu.fadeIn(200).addClass('showing');
			$toggle.addClass('open');
		}
	});

	$('.dropdown > a', '#divToolbars').mouseout(function (e) {
		e.preventDefault();

		var target = $(this).attr('href');
		if (target.toLowerCase() == '/myaccount/profilecreate') {
			target = window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") ? 'myaccount' : target.substring(1);
		}
		target = target.substring(target.indexOf('#'));
		var $menu = $(target);

		if ($menu.queue() && $menu.queue().length > 0) { //stop menu opening if client did not intend to open menu.
			$('.cpToolbar .open').removeClass('open');
			$('.cpToolbar .favoritesMenu').stop(true, true);
			$('.cpToolbar .modulesMenu, #notifications').stop(true, true);
			$('.cpToolbar #liveEditMenu').stop(true, true);
			$('.cpToolbar .secondary .dropdown #userMenu').stop(true, true);
			$('.cpToolbar .secondary .dropdown #helpMenu').stop(true, true);
			$('.cpToolbar #applicationsMenu').stop(true, true);
			$('.cpToolbar .dropdown #homeMenu').stop(true, true);
		}
	});

	$('a.moreInfo, a.myConnections').click(function (e) {	    
		e.preventDefault();

		var $toggle = $(this).parent(),
			target = $(this).attr('href');
		if (target.toLowerCase() == '/myaccount/profilecreate') {
			target = window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") ? 'myaccount' : target.substring(1);
		}
		target = target.substring(target.indexOf('#'));		
		var $menu = $(target);

		if (!$toggle.hasClass('open') && !$menu.is(':visible')) {
			$('.showing', '.cpToolbar.user').removeClass('showing').fadeOut(200);
			$('.open', '.cpToolbar.user').removeClass('open');
			$menu.fadeIn(200).addClass('showing');
			$toggle.addClass('open');
		} else {
			$('.showing', '.cpToolbar.user').removeClass('showing').fadeOut(200);
			$('.open', '.cpToolbar.user').removeClass('open');
			$menu.fadeOut(200).removeClass('showing');
		}
	});

	$('.nodropdown > a').click(function (e) {
		closeMenus();
		if ($(this).attr('href') != '/admin/PageMenu.aspx') {
			e.preventDefault();
		}
	});

	// Opening/closing sub-tabs when hovered
	$('#modulesMenu .subTabs > li > a', '#divToolbars').click(function (e) {
		e.preventDefault();

		var $subTab = $(this),
			target = $(this).attr('href');
		target = target.substring(target.indexOf('#'));
		var $menu = $(target);

		if ($subTab.hasClass('active')) {
			return;
		}

		$('.modulesMenu .subTabs .active').removeClass('active');
		$subTab.addClass('active');
		$('.modulesMenu .subTab').hide();
		$menu.show();
		document.cookie = 'currentSubTab=' + target + '; path=/';
	});

	function closeMenus () {
		$('.cpToolbar .favoritesMenu').stop(true, true).slideUp('fast');
		$('.cpToolbar .modulesMenu, #notifications').stop(true, true).slideUp('fast');
		$('.cpToolbar #liveEditMenu').stop(true, true).slideUp('fast', function () {
			if ($.cookie != undefined) {
				$.cookie('liveEditOpen', 'false', ' path=/');
			}
		});
		$('.cpToolbar .secondary .dropdown #userMenu').stop(true, true).slideUp('fast');
		$('.cpToolbar .secondary .dropdown #helpMenu').stop(true, true).slideUp('fast');
		$('.cpToolbar .open').stop(true, true).removeClass('open');
		$('.cpToolbar #applicationsMenu').stop(true, true).slideUp('fast');
		$('.cpToolbar .dropdown #homeMenu').stop(true, true).slideUp('fast');
	}

	$('#applicationsMenu').click(function (e) {
		e.preventDefault();

		var $toggle = $(this).parent(),
			target = $(this).attr('href');
		var $menu = $(target);

		if ($toggle.hasClass('open')) {
			$menu.fadeOut(100);
		} else {
			$('.showing', '.cpToolbar.user').removeClass('showing').fadeOut(100);
			$('.open', '.cpToolbar.user').removeClass('open');
			$menu.fadeIn(100).addClass('showing');
		}
		$toggle.toggleClass('open');
	});

	$('.applicationsMenu a').click(function () { location.href = $(this).attr('href'); });
	if (getCookieValue('liveEditOpen') === 'true') {
		$('#liveEditMenu').show();
		$('.dropdown.liveEdit').toggleClass('open');
	}
	$('.betaModal', '#adminModules').unbind().bind({
		click: function (event) {
			event.preventDefault();

			var anchorTag = $(this);

			var moduleName = anchorTag.attr('class').replace('admin beta betaModal ', '');

			var data = {
				moduleName: moduleName
			};

			$.ajax({
				url: '/BetaModal',
				type: 'POST',
				data: data,
				cache: false,
				success: function (response) {
					openCpModal({
						title: response.title,
						className: 'modalBetaTurnOn',
						htmlContent: response.view,
						autoAdjust: true,
						isFrontEnd: false,
						elementID: 'betaModal'
					});
				},
				beforeSend: function () {
					ajaxPostBackStart('Loading');
				},
				complete: function () {
					ajaxPostBackEnd();
				}
			});
		}
	});

	if (!window.isResponsiveEnabled) {
		displayToolBar();
	}
}

window.Pages = window.Pages || {};
$.when(window.Pages.toolBarDeferred).done(function () {
	displayToolBar();
});

function displayToolBar() {
	$('#divToolbars').slideDown(200, function () {
		$(this).css('overflow', 'visible');
		if (typeof (PopulateFavoritesMenu) === 'function')
			PopulateFavoritesMenu();
		//Prevent the tooltip to appear on DesignCenter, mobile view, backend.
		var enableLiveEditCookieValue = cookieGet("enableLiveEdit");
		if (!($('.cpToolbar').hasClass('designCenter')) && $('body').hasClass('wide') && (enableLiveEditCookieValue === "false") && !$('#backend').length && !$('div.mobile.header').length) {
			liveEditTooltip();
		}
		if (typeof (toolBarHelpVideoSetup) === 'function')
		    toolBarHelpVideoSetup();

		if (window.Pages != null && window.Pages.frontEndToolbarComplete != null) {
		    window.Pages.frontEndToolbarComplete.resolve();
		}
	});
}

$(document).delegate('#btnClose', 'click', function () {
	hideModal('modalBetaTurnOn');

	return false;
});

$(document).delegate('#turnOnModule', 'click', function () {
	var moduleID = $(this).attr('data-moduleID');
	var redirect = $(this).attr('data-redirect');

	var data = {
		moduleID: moduleID
	};

	if(typeof(AdditionModuleData) === "function" && AdditionModuleData != null )
	{
		var retVal = AdditionModuleData(data);

		if (!retVal) {
			return false;
		}
	}

	$.ajax({
		url: '/BetaModal/TurnOn',
		type: 'POST',
		data: data,
		cache: false,
		success: function (response) {
			window.location = redirect;
		},
		beforeSend: function () {
			ajaxPostBackStart('Loading');
		},
		complete: function () {
			ajaxPostBackEnd();
		}
	});

	return false;
});

function ShowSubTab($subTab, target) {
	var $menu = $(target);

	if ($subTab.hasClass('active')) {
		return;
	}

	$('.modulesMenu .subTabs .active').removeClass('active');
	$subTab.addClass('active');
	$('.modulesMenu .subTab').hide();
	$menu.show();
}

//Notifications
$(document).ready(function () {
    var dontCall = $('#hdnDontCallNotifications').val();

    if (!dontCall) {
$(function () { setTimeout(NotifyUserOfNotifications, 5000); }); //delay to speed up page load.
    }
});


// Notifies the user via a small drop down modal.
// Gets the list of notifications and displays them
// Called
//	when the page changes
//	when an ajax call that awards points occurs
//	when the user logs in
var NotifyUserOfNotifications = function () {
	// Get list of notifications
	var url = '/CommunityVoice/Home/Notifications';

	if (typeof (LoginBox) != "undefined") {
		url = (new LoginBox()).hostUrl + url;
	}

	var notification;
	if ($(".userAlertSlider .userAlert").length != 0) {
		$.ajax({
			url: url,
			type: 'POST',
			ignoreEditor: true, //prevent executing global editor event
			async: true,
			success: function (data) {
				// Notify the user
				if (data != "<div></div>")
					NotificationAlert(data);
			}
		});
	}
};

var NotificationAlert = function (text) {
	var alertModal$ = $(".userAlertSlider .userAlert");
	alertModal$.html(text);
	alertModal$.removeClass('hidden');
	alertModal$.css('opacity', 0);
	var oldTop = alertModal$.css('margin-top');
	alertModal$.css('margin-top', (-1) * alertModal$.outerHeight() * 2);

	var slideUp = function () {
		var newTop = alertModal$.css('margin-top');

		alertModal$.animate({
			opacity: 0,
			marginTop: (-1) * alertModal$.outerHeight() * 2
		},
			1000,
			'swing',
			function () { alertModal$.css('margin-top', newTop); }
			);
	}; // 

	alertModal$.animate({
		opacity: 1,
		marginTop: oldTop
	},
			1000,
			'swing',
			setTimeout(function () {
				slideUp();
			},
				7000)
		);
};

// From Menu.ascx
function cpconnecttLogin() {
	document.cpconnect.submit();
}

function moduleV3(formAction, moduleID) {
	var hidePageMenu = false;

	if (moduleID == 0) {
		navigateV3('PageMenu.aspx', '', '', '', '0', '', '', '');
	}
	else if (moduleID == 59) {
		cpconnecttLogin();
	}
	else if (formAction.indexOf(".asp") == -1) { //for mvc modules
		window.location = "/Admin/" + formAction;
	}
	else {
		var frmV3 = document.frmLegacyModuleAccess;
		frmV3.action = "/Admin/" + formAction;
		frmV3.strResourceType.value = 'M';
		frmV3.lngResourceID.value = moduleID;
		frmV3.lngExpandCategoryID.value = 0;
		frmV3.submit();
	}
}

function navigateV3(formAction, strResourceType, lngResourceID, lngExpandCategoryID, lngParentID, lngCategoryID, strPage, strAction) {
	var frmV3 = document.frmLegacyModuleAccess;
	frmV3.action = "/admin/" + formAction;
	frmV3.strResourceType.value = strResourceType;
	frmV3.lngResourceID.value = lngResourceID;
	frmV3.lngExpandCategoryID.value = lngExpandCategoryID;
	frmV3.lngParentID.value = lngParentID;
	frmV3.lngCategoryID.value = lngCategoryID;
	frmV3.strPage.value = strPage;
	frmV3.straction.value = strAction;
	frmV3.submit();
}

function createDynamicLMA() {
	if (document.frmLegacyModuleAccess) {
		return document.frmLegacyModuleAccess;
	}
	var frmV3 = document.createElement('FORM');
	document.body.appendChild(frmV3);
	frmV3.name = 'frmLegacyModuleAccess'
	frmV3.method = 'POST';
	createHiddenOnForm(frmV3, 'strResourceType');
	createHiddenOnForm(frmV3, 'lngResourceID');
	createHiddenOnForm(frmV3, 'lngExpandCategoryID');
	createHiddenOnForm(frmV3, 'lngParentID');
	createHiddenOnForm(frmV3, 'lngCategoryID');
	createHiddenOnForm(frmV3, 'strPage');
	createHiddenOnForm(frmV3, 'straction');
	return frmV3;
}

function createHiddenOnForm(frm, name) {
	hf = document.createElement('INPUT');
	hf.type = 'HIDDEN';
	hf.name = name;
	frm.appendChild(hf);
}

// Fired if a profile image is missing.
function profileImageFallback(img) {
	img.src = '/Assets/Images/ProfilePlaceholder.png';
}

function SignOut() {
	window.location.href = '/publiclogin.aspx?out=true&txtRedirect=' + window.location.pathname.substring(1) + window.location.search;
}

function initPagesHelpMenu() {
	var moduleID = $('#pageModuleID').val() === "76" || $('#pagePageID').val() ? 76 : "";
	var player = null;

	if (moduleID === 76) {
		$('.helpVideosOpenButton').show();

		$('.helpVideosOpenButton').cpPopover({
			url: '/Help/Video',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ isFrontend: $('#pageIsFrontEnd').val() == "true", moduleID: moduleID }),
			className: 'newCP cpPopOver cpPopOverModal adminWrap helpVideos',
			onInit: function () {
				connectCPC();
				videojs.options.flash.swf = "/Assets/Scripts/video-js.swf";
				videojs.options.techOrder = ["flash", "html5", "links"];

				var config = {
					selector: {
						backToVideoListButton: '.cpPopOver.helpVideos .videoTab a.button',
						linkToVideoButtons: '.cpPopOver.helpVideos .listTab ol li',
						playVideoTab: '.cpPopOver.helpVideos .videoTab',
						listVideoTab: '.cpPopOver.helpVideos .listTab',
						videoSource: '.cpPopOver.helpVideos .videoTab .video'
					}
				};

				$(config.selector.backToVideoListButton).click(function () {
					$(config.selector.listVideoTab).show();
					$(config.selector.playVideoTab).hide();

				});

				$(config.selector.linkToVideoButtons).click(function () {
					//$(config.selector.videoSource).attr('src', $(this).find('a').data('url'));
					var url = $(this).find('a').data('url');
					var id = $(this).find('a').data('linkid');
					$(config.selector.videoSource).addClass('hidden');
					$(config.selector.videoSource + '[data-linkid=' + id + ']').removeClass('hidden');
					$(config.selector.listVideoTab).hide();
					$(config.selector.playVideoTab).show();

					player = videojs("helpVideoPlayer_" + id, { preload: "none", techOrder: ["flash", "html5", "links"] }, function () {
						this.play();
					});


				});
			},
			onClose: function (e, popoverWrap) {
				e.preventDefault();

				window.CommonPopoverInstance.hide(popoverWrap);
			}
		});

		if (!($('.cpToolbar').hasClass('designCenter')) && $('body').hasClass('wide')) {
			$.showTooltip({
				Id: 'videoHelpTooltip',
				tooltipContent: '<p>Need some help with Pages Live Edit? Check out the Pages help videos</p><p><a href="#thanks" class="button closeTooltip"><span>Thanks</span></a></p>',
				className: 'newCP flyOut bottom center withArrow fixed cpPopOver admin adminWrap helpTip',
				$target: $('#helpMenu').parent(),
				$referenceElements: null,
				slideOrientation: 'down'
			});
			$('#videoHelpTooltip').css('z-index', 102);
			$('#videoHelpTooltip').css('position', 'absolute');
		}
	} else {
		$('.helpVideosOpenButton').hide();
	}
}

//
// This function should probably live in its own file, however, if we put it in its own file, Firefox causes some weird
// flickering with the Toolbar, was not able to determine the root cause of this (even with bundling in the header the flicker was 
// still there, so I am putting it directly in this file. -- MDF
//
var SubmitARequest = (function () {

	var dzScreenshot;		// Dropzone for Screenshot

	return {
		showInputModal: showInputModal,
		initModalEventHandlers: initModalEventHandlers
	};


	function showInputModal() {
		var modalOptions = {
			title: 'Submit a Request',
			url: '/SubmitARequest/SubmitRequest',
			classname: 'submitARequestModal',
			isFrontEnd: false,
			useIframe: true,
			showLoading: true,
			autoAdjust: true,
			iframeHeight: '580px',
			className: 'modalSubmitASupportRequest minor',
			onLoadComplete: function () {
				$('.cpToolbar .secondary .dropdown #helpMenu', window.parent.document).stop(true, true).slideUp('fast');
			}
		};
		openCpModal(modalOptions);
	}

	function initModalEventHandlers($submitButton, $cancelButton, dropzone) {

		dzScreenshot = dropzone;

		($submitButton).click(function (e) {
			e.preventDefault();
			submit();
		});

		($cancelButton).click(function (e) {
			e.preventDefault();
			window.parent.closeCpModal();
		});
	}


	function submit() {
		if (dzScreenshot.className !== 'fallback' && dzScreenshot.getQueuedFiles().length > 0) {
			dzScreenshot.processQueue();
		} else {
			$('#submitASupportRequest').submit();
		}
	}

}());
;
/*!
loadCSS: load a CSS file asynchronously.
[c]2014 @scottjehl, Filament Group, Inc.
Licensed MIT
*/

/* exported loadCSS */
function loadCSS(href, before, media, callback) {
    "use strict";
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the first <script> element in the page.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
    var ss = window.document.createElement("link");
    var ref = before || window.document.getElementsByTagName("script")[0];
    var sheets = window.document.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = "only x";
    // DEPRECATED
    if (callback) {
        ss.onload = callback;
    }

    // inject link
    ref.parentNode.insertBefore(ss, ref);
    // This function sets the link's media back to `all` so that the stylesheet applies once it loads
    // It is designed to poll until document.styleSheets includes the new sheet.
    ss.onloadcssdefined = function (cb) {
        var defined;
        for (var i = 0; i < sheets.length; i++) {
            if (sheets[i].href && sheets[i].href === ss.href) {
                defined = true;
            }
        }
        if (defined) {
            cb();
        } else {
            setTimeout(function () {
                ss.onloadcssdefined(cb);
            });
        }
    };
    ss.onloadcssdefined(function () {
        ss.media = media || "all";
    });
    return ss;
};
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

if (typeof WeakMap === 'undefined') {
	(function () {
		var defineProperty = Object.defineProperty;
		var counter = Date.now() % 1e9;

		var WeakMap = function () {
			this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');
		};

		WeakMap.prototype = {
			set: function (key, value) {
				var entry = key[this.name];
				if (entry && entry[0] === key)
					entry[1] = value;
				else
					defineProperty(key, this.name, { value: [key, value], writable: true });
				return this;
			},
			get: function (key) {
				var entry;
				return (entry = key[this.name]) && entry[0] === key ?
					entry[1] : undefined;
			},
			delete: function (key) {
				var entry = key[this.name];
				if (!entry || entry[0] !== key) return false;
				entry[0] = entry[1] = undefined;
				return true;
			},
			has: function (key) {
				var entry = key[this.name];
				if (!entry) return false;
				return entry[0] === key;
			}
		};

		window.WeakMap = WeakMap;
	})();
};
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function (global) {

	// Don't allow this object to be redefined.
	if (global.JsMutationObserver) {
		return;
	}

	var registrationsTable = new WeakMap();

	var setImmediate;

	// As much as we would like to use the native implementation, IE
	// (all versions) suffers a rather annoying bug where it will drop or defer
	// callbacks when heavy DOM operations are being performed concurrently.
	//
	// For a thorough discussion on this, see:
	// http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/
	if (/Trident|Edge/.test(navigator.userAgent)) {
		// Sadly, this bug also affects postMessage and MessageQueues.
		//
		// We would like to use the onreadystatechange hack for IE <= 10, but it is
		// dangerous in the polyfilled environment due to requiring that the
		// observed script element be in the document.
		setImmediate = setTimeout;

		// If some other browser ever implements it, let's prefer their native
		// implementation:
	} else if (window.setImmediate) {
		setImmediate = window.setImmediate;

		// Otherwise, we fall back to postMessage as a means of emulating the next
		// task semantics of setImmediate.
	} else {
		var setImmediateQueue = [];
		var sentinel = String(Math.random());
		window.addEventListener('message', function (e) {
			if (e.data === sentinel) {
				var queue = setImmediateQueue;
				setImmediateQueue = [];
				queue.forEach(function (func) {
					func();
				});
			}
		});
		setImmediate = function (func) {
			setImmediateQueue.push(func);
			window.postMessage(sentinel, '*');
		};
	}

	// This is used to ensure that we never schedule 2 callas to setImmediate
	var isScheduled = false;

	// Keep track of observers that needs to be notified next time.
	var scheduledObservers = [];

	/**
	 * Schedules |dispatchCallback| to be called in the future.
	 * @param {MutationObserver} observer
	 */
	function scheduleCallback(observer) {
		scheduledObservers.push(observer);
		if (!isScheduled) {
			isScheduled = true;
			setImmediate(dispatchCallbacks);
		}
	}

	function wrapIfNeeded(node) {
		return window.ShadowDOMPolyfill &&
			window.ShadowDOMPolyfill.wrapIfNeeded(node) ||
			node;
	}

	function dispatchCallbacks() {
		// http://dom.spec.whatwg.org/#mutation-observers

		isScheduled = false; // Used to allow a new setImmediate call above.

		var observers = scheduledObservers;
		scheduledObservers = [];
		// Sort observers based on their creation UID (incremental).
		observers.sort(function (o1, o2) {
			return o1.uid_ - o2.uid_;
		});

		var anyNonEmpty = false;
		observers.forEach(function (observer) {

			// 2.1, 2.2
			var queue = observer.takeRecords();
			// 2.3. Remove all transient registered observers whose observer is mo.
			removeTransientObserversFor(observer);

			// 2.4
			if (queue.length) {
				observer.callback_(queue, observer);
				anyNonEmpty = true;
			}
		});

		// 3.
		if (anyNonEmpty)
			dispatchCallbacks();
	}

	function removeTransientObserversFor(observer) {
		observer.nodes_.forEach(function (node) {
			var registrations = registrationsTable.get(node);
			if (!registrations)
				return;
			registrations.forEach(function (registration) {
				if (registration.observer === observer)
					registration.removeTransientObservers();
			});
		});
	}

	/**
	 * This function is used for the "For each registered observer observer (with
	 * observer's options as options) in target's list of registered observers,
	 * run these substeps:" and the "For each ancestor ancestor of target, and for
	 * each registered observer observer (with options options) in ancestor's list
	 * of registered observers, run these substeps:" part of the algorithms. The
	 * |options.subtree| is checked to ensure that the callback is called
	 * correctly.
	 *
	 * @param {Node} target
	 * @param {function(MutationObserverInit):MutationRecord} callback
	 */
	function forEachAncestorAndObserverEnqueueRecord(target, callback) {
		for (var node = target; node; node = node.parentNode) {
			var registrations = registrationsTable.get(node);

			if (registrations) {
				for (var j = 0; j < registrations.length; j++) {
					var registration = registrations[j];
					var options = registration.options;

					// Only target ignores subtree.
					if (node !== target && !options.subtree)
						continue;

					var record = callback(options);
					if (record)
						registration.enqueue(record);
				}
			}
		}
	}

	var uidCounter = 0;

	/**
	 * The class that maps to the DOM MutationObserver interface.
	 * @param {Function} callback.
	 * @constructor
	 */
	function JsMutationObserver(callback) {
		this.callback_ = callback;
		this.nodes_ = [];
		this.records_ = [];
		this.uid_ = ++uidCounter;
	}

	JsMutationObserver.prototype = {
		observe: function (target, options) {
			target = wrapIfNeeded(target);

			// 1.1
			if (!options.childList && !options.attributes && !options.characterData ||

				// 1.2
				options.attributeOldValue && !options.attributes ||

				// 1.3
				options.attributeFilter && options.attributeFilter.length &&
					!options.attributes ||

				// 1.4
				options.characterDataOldValue && !options.characterData) {

				throw new SyntaxError();
			}

			var registrations = registrationsTable.get(target);
			if (!registrations)
				registrationsTable.set(target, registrations = []);

			// 2
			// If target's list of registered observers already includes a registered
			// observer associated with the context object, replace that registered
			// observer's options with options.
			var registration;
			for (var i = 0; i < registrations.length; i++) {
				if (registrations[i].observer === this) {
					registration = registrations[i];
					registration.removeListeners();
					registration.options = options;
					break;
				}
			}

			// 3.
			// Otherwise, add a new registered observer to target's list of registered
			// observers with the context object as the observer and options as the
			// options, and add target to context object's list of nodes on which it
			// is registered.
			if (!registration) {
				registration = new Registration(this, target, options);
				registrations.push(registration);
				this.nodes_.push(target);
			}

			registration.addListeners();
		},

		disconnect: function () {
			this.nodes_.forEach(function (node) {
				var registrations = registrationsTable.get(node);
				for (var i = 0; i < registrations.length; i++) {
					var registration = registrations[i];
					if (registration.observer === this) {
						registration.removeListeners();
						registrations.splice(i, 1);
						// Each node can only have one registered observer associated with
						// this observer.
						break;
					}
				}
			}, this);
			this.records_ = [];
		},

		takeRecords: function () {
			var copyOfRecords = this.records_;
			this.records_ = [];
			return copyOfRecords;
		}
	};

	/**
	 * @param {string} type
	 * @param {Node} target
	 * @constructor
	 */
	function MutationRecord(type, target) {
		this.type = type;
		this.target = target;
		this.addedNodes = [];
		this.removedNodes = [];
		this.previousSibling = null;
		this.nextSibling = null;
		this.attributeName = null;
		this.attributeNamespace = null;
		this.oldValue = null;
	}

	function copyMutationRecord(original) {
		var record = new MutationRecord(original.type, original.target);
		record.addedNodes = original.addedNodes.slice();
		record.removedNodes = original.removedNodes.slice();
		record.previousSibling = original.previousSibling;
		record.nextSibling = original.nextSibling;
		record.attributeName = original.attributeName;
		record.attributeNamespace = original.attributeNamespace;
		record.oldValue = original.oldValue;
		return record;
	};

	// We keep track of the two (possibly one) records used in a single mutation.
	var currentRecord, recordWithOldValue;

	/**
	 * Creates a record without |oldValue| and caches it as |currentRecord| for
	 * later use.
	 * @param {string} oldValue
	 * @return {MutationRecord}
	 */
	function getRecord(type, target) {
		return currentRecord = new MutationRecord(type, target);
	}

	/**
	 * Gets or creates a record with |oldValue| based in the |currentRecord|
	 * @param {string} oldValue
	 * @return {MutationRecord}
	 */
	function getRecordWithOldValue(oldValue) {
		if (recordWithOldValue)
			return recordWithOldValue;
		recordWithOldValue = copyMutationRecord(currentRecord);
		recordWithOldValue.oldValue = oldValue;
		return recordWithOldValue;
	}

	function clearRecords() {
		currentRecord = recordWithOldValue = undefined;
	}

	/**
	 * @param {MutationRecord} record
	 * @return {boolean} Whether the record represents a record from the current
	 * mutation event.
	 */
	function recordRepresentsCurrentMutation(record) {
		return record === recordWithOldValue || record === currentRecord;
	}

	/**
	 * Selects which record, if any, to replace the last record in the queue.
	 * This returns |null| if no record should be replaced.
	 *
	 * @param {MutationRecord} lastRecord
	 * @param {MutationRecord} newRecord
	 * @param {MutationRecord}
	 */
	function selectRecord(lastRecord, newRecord) {
		if (lastRecord === newRecord)
			return lastRecord;

		// Check if the the record we are adding represents the same record. If
		// so, we keep the one with the oldValue in it.
		if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord))
			return recordWithOldValue;

		return null;
	}

	/**
	 * Class used to represent a registered observer.
	 * @param {MutationObserver} observer
	 * @param {Node} target
	 * @param {MutationObserverInit} options
	 * @constructor
	 */
	function Registration(observer, target, options) {
		this.observer = observer;
		this.target = target;
		this.options = options;
		this.transientObservedNodes = [];
	}

	Registration.prototype = {
		enqueue: function (record) {
			var records = this.observer.records_;
			var length = records.length;

			// There are cases where we replace the last record with the new record.
			// For example if the record represents the same mutation we need to use
			// the one with the oldValue. If we get same record (this can happen as we
			// walk up the tree) we ignore the new record.
			if (records.length > 0) {
				var lastRecord = records[length - 1];
				var recordToReplaceLast = selectRecord(lastRecord, record);
				if (recordToReplaceLast) {
					records[length - 1] = recordToReplaceLast;
					return;
				}
			} else {
				scheduleCallback(this.observer);
			}

			records[length] = record;
		},

		addListeners: function () {
			this.addListeners_(this.target);
		},

		addListeners_: function (node) {
			var options = this.options;
			if (options.attributes)
				node.addEventListener('DOMAttrModified', this, true);

			if (options.characterData)
				node.addEventListener('DOMCharacterDataModified', this, true);

			if (options.childList)
				node.addEventListener('DOMNodeInserted', this, true);

			if (options.childList || options.subtree)
				node.addEventListener('DOMNodeRemoved', this, true);
		},

		removeListeners: function () {
			this.removeListeners_(this.target);
		},

		removeListeners_: function (node) {
			var options = this.options;
			if (options.attributes)
				node.removeEventListener('DOMAttrModified', this, true);

			if (options.characterData)
				node.removeEventListener('DOMCharacterDataModified', this, true);

			if (options.childList)
				node.removeEventListener('DOMNodeInserted', this, true);

			if (options.childList || options.subtree)
				node.removeEventListener('DOMNodeRemoved', this, true);
		},

		/**
		 * Adds a transient observer on node. The transient observer gets removed
		 * next time we deliver the change records.
		 * @param {Node} node
		 */
		addTransientObserver: function (node) {
			// Don't add transient observers on the target itself. We already have all
			// the required listeners set up on the target.
			if (node === this.target)
				return;

			this.addListeners_(node);
			this.transientObservedNodes.push(node);
			var registrations = registrationsTable.get(node);
			if (!registrations)
				registrationsTable.set(node, registrations = []);

			// We know that registrations does not contain this because we already
			// checked if node === this.target.
			registrations.push(this);
		},

		removeTransientObservers: function () {
			var transientObservedNodes = this.transientObservedNodes;
			this.transientObservedNodes = [];

			transientObservedNodes.forEach(function (node) {
				// Transient observers are never added to the target.
				this.removeListeners_(node);

				var registrations = registrationsTable.get(node);
				for (var i = 0; i < registrations.length; i++) {
					if (registrations[i] === this) {
						registrations.splice(i, 1);
						// Each node can only have one registered observer associated with
						// this observer.
						break;
					}
				}
			}, this);
		},

		handleEvent: function (e) {
			// Stop propagation since we are managing the propagation manually.
			// This means that other mutation events on the page will not work
			// correctly but that is by design.
			e.stopImmediatePropagation();

			switch (e.type) {
				case 'DOMAttrModified':
					// http://dom.spec.whatwg.org/#concept-mo-queue-attributes

					var name = e.attrName;
					var namespace = e.relatedNode.namespaceURI;
					var target = e.target;

					// 1.
					var record = new getRecord('attributes', target);
					record.attributeName = name;
					record.attributeNamespace = namespace;

					// 2.
					var oldValue =
						e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;

					forEachAncestorAndObserverEnqueueRecord(target, function (options) {
						// 3.1, 4.2
						if (!options.attributes)
							return;

						// 3.2, 4.3
						if (options.attributeFilter && options.attributeFilter.length &&
							options.attributeFilter.indexOf(name) === -1 &&
							options.attributeFilter.indexOf(namespace) === -1) {
							return;
						}
						// 3.3, 4.4
						if (options.attributeOldValue)
							return getRecordWithOldValue(oldValue);

						// 3.4, 4.5
						return record;
					});

					break;

				case 'DOMCharacterDataModified':
					// http://dom.spec.whatwg.org/#concept-mo-queue-characterdata
					var target = e.target;

					// 1.
					var record = getRecord('characterData', target);

					// 2.
					var oldValue = e.prevValue;


					forEachAncestorAndObserverEnqueueRecord(target, function (options) {
						// 3.1, 4.2
						if (!options.characterData)
							return;

						// 3.2, 4.3
						if (options.characterDataOldValue)
							return getRecordWithOldValue(oldValue);

						// 3.3, 4.4
						return record;
					});

					break;

				case 'DOMNodeRemoved':
					this.addTransientObserver(e.target);
					// Fall through.
				case 'DOMNodeInserted':
					// http://dom.spec.whatwg.org/#concept-mo-queue-childlist
					var changedNode = e.target;
					var addedNodes, removedNodes;
					if (e.type === 'DOMNodeInserted') {
						addedNodes = [changedNode];
						removedNodes = [];
					} else {

						addedNodes = [];
						removedNodes = [changedNode];
					}
					var previousSibling = changedNode.previousSibling;
					var nextSibling = changedNode.nextSibling;

					// 1.
					var record = getRecord('childList', e.target.parentNode);
					record.addedNodes = addedNodes;
					record.removedNodes = removedNodes;
					record.previousSibling = previousSibling;
					record.nextSibling = nextSibling;

					forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function (options) {
						// 2.1, 3.2
						if (!options.childList)
							return;

						// 2.2, 3.3
						return record;
					});

			}

			clearRecords();
		}
	};

	global.JsMutationObserver = JsMutationObserver;

	if (!global.MutationObserver) {
		global.MutationObserver = JsMutationObserver;
		// Explicltly mark MO as polyfilled for user reference.
		JsMutationObserver._isPolyfilled = true;
	}

})(self);
/// <reference path="../../Common/Controls/jquery-ui/js/jquery.ui.core.js" />
if (!window.Core) {
	window.Core = new CoreNamespace();
}

function AJAX(url, type, json, callBack, showLoadingMessage, contentType, forceCallBack, suppressErrorMessage) {
	contentType = contentType || 'application/x-www-form-urlencoded; charset=UTF-8';
	showLoadingMessage = showLoadingMessage == null ? true : showLoadingMessage;
	forceCallBack = forceCallBack == null ? false : forceCallBack;
	if (typeof (suppressErrorMessage) === 'undefined') suppressErrorMessage = false;
	$.ajax({
		url: url,
		type: type,
		contentType: contentType,
		data: json,
		success: function (response) {
			if (response.ErrorMessage && !forceCallBack) {
				if (response.ErrorMessage.indexOf('You do not have permission to perform this action.') != -1 && !isUserLoggedIn()) { // 079B4F43 
					alert('You are not logged in. Please login to continue.');
					location.href = '/myaccount?from=url&url=' + window.location.pathname;
				} else {
					alert(response.ErrorMessage);
				}
			}
			else if (response.RedirectURL && !forceCallBack)
				window.location.href = response.RedirectURL;
			else if (callBack)
				callBack(response);
		},
		beforeSend: function () {
			if (showLoadingMessage) {
				ajaxPostBackStart('Loading');
			}
		},
		complete: function () {
			if (showLoadingMessage) {
				ajaxPostBackEnd();
			}
		},
		error: function (xhr, textStatus, exception) {
			if (!suppressErrorMessage) {
				alert('Error: ' + xhr.statusText + '\nStatus: ' + xhr.status);
			}
		}
	});
}

function isUserLoggedIn() {
	var result = true; // if there is an error lets not show the login message.
	$.ajaxSetup({ async: false, ignoreEditor: true });
	$.post('/Utility/IsUserLoggedIn', function (data) {
		result = data;
	});
	$.ajaxSetup({ async: true, ignoreEditor: false });
	return result;
}

///Method to pause a javascript execution for x seconds, works like sleep(). VB
function sleep(seconds) {
	var max_sec = new Date().getTime();
	while (new Date() < max_sec + seconds * 1000) { }
	return true;
}

if (!String.prototype.format) {
	String.prototype.format = function () {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] != 'undefined'
				? args[number]
				: match
				;
		});
	};
}

if (!String.prototype.isNullOrWhiteSpace) {
	String.prototype.isNullOrWhiteSpace = function () {
		return this == null || this.trim() == '';
	};
}

function isValidMoney(value) {
	var isValid = false;
	if (value && value != '')
		isValid = /^\$?\s*\d+(,\d{3})*(\.\d{1,2})?$/.test(value);
	return isValid;
};

if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.slice(0, str.length) == str;
	};
}

String.prototype.format = String.prototype.f = function () {
	var s = this,
		i = arguments.length;

	while (i--) {
		s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
	}
	return s;
};

//Creates a javascript namespace, if one already exists, just returns that namespace.
function createNamespace(namespaceString) {
	var parts = namespaceString.split('.'),
		parent = window,
		currentPart = '',
		nsLength = parts.length;

	for (var i = 0, length = nsLength; i < length; i++) {
		currentPart = parts[i];
		parent[currentPart] = parent[currentPart] || {};
		parent = parent[currentPart];
	}
	return parent;
}
$(function () {

	// Ensures a dependency exists. If it doesn't acquire it.
	function ensure(dependencyExists, dependencyUrl, onceItExistsCallback) {
		if (dependencyExists) {
			onceItExistsCallback();
			return;
		}
		$.getScript(dependencyUrl, onceItExistsCallback);
	}

	var ajaxControlToolkit = window.AjaxControlToolkit;
	// This is hack override in order to fix problems with Ajax Toolkit Drag and Drop in newer browsers. It substitutes in jQuery Draggable if it is available.
	// A more proper fix is ideal, but extremely expensive as it would require replacing over a hundred instances of invocations of the old modal.
	// There isn't a clean way to integrate in the new modal system. JE
	// https://system.netsuite.com/app/crm/support/issuedb/issue.nl?id=3809568&l=T
	if (ajaxControlToolkit && ajaxControlToolkit.ModalPopupBehavior) {
		ajaxControlToolkit.ModalPopupBehavior.prototype._attachPopup = function () {
			/// <summary>
			/// Attach the event handlers for the popup
			/// </summary>

			if (this._DropShadow && !this._dropShadowBehavior) {
				this._dropShadowBehavior = $create(ajaxControlToolkit.DropShadowBehavior, {}, null, null, this._popupElement);
			}

			var _this = this;
			// Drag and Drop Replacement. Acquire any dependencies on the fly.
			ensure($.ui, "/Common/Controls/jquery-ui/js/jquery.ui.core.min.js", function () { // I
				ensure($.widget, "/Common/Controls/jquery-ui/js/jquery.ui.widget.min.js", function () { // callbacks
					ensure($.ui.mouse, "/Common/Controls/jquery-ui/js/jquery.ui.mouse.min.js", function () { // love
						ensure($.fn.draggable, '/Common/Controls/jquery-ui/js/jquery.ui.draggable.min.js', function () {
							$("#" + _this._PopupControlID).draggable({ handle: '#' + _this._PopupDragHandleControlID }); // Subsitution over original Ajax Toolkit Drag and Drop code.
							$("#" + _this._PopupDragHandleControlID).css('cursor', 'move'); // Let's go ahead and fix the move handle while we are at it.
						});
					});
				});
			});

			$addHandler(window, 'resize', this._resizeHandler);
			$addHandler(window, 'scroll', this._scrollHandler);
			this._windowHandlersAttached = true;
		}
	}
});

String.prototype.replaceAll = function (search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

function executeViewMapPostClickActions($element) {
	//Hide the view map element post click(to avoid clicking repeatedly)
	$element.hide('fast');
	
	//Collect analytics around map clicks
	var url = '/Admin/Analytics/CollectGoogleMapClicks/Execute';
	var moduleId = $element.data('moduleid');
	$.ajax({
		url: url,
		type: 'POST',
		data: {
			url: window.location.href,
			moduleId: moduleId
		},
		success: function (json) {
			//send data to telemetry
			appInsights.trackEvent("googlemapclicked", json);
		},
		error: function (xhr, textStatus, exception) {
			alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
		}
	});
}

function importModal(options) {
	if (window.ImportModalInstance === undefined) {
		var script = document.createElement("script");
		script.onload = function () {
			window.ImportModalInstance.init(options);
		};
		script.src = "/Assets/Scripts/ImportModal.js";
		document.head.appendChild(script);
	}
	else
		window.ImportModalInstance.init(options);
}

function exportModal(options) {
	if (window.ExportModalInstance === undefined) {
		var script = document.createElement("script");
		script.onload = function () {
			window.ExportModalInstance.init(options);
		};
		script.src = "/Assets/Scripts/ExportModal.js";
		document.head.appendChild(script);
	}
	else
		window.ExportModalInstance.init(options);
}

document.addEventListener("DOMContentLoaded", function () {
	var modal = document.querySelector(".importModal");
	if (modal !== null) {
		try {
			if (!modal.classList.contains("processed")) {
				var options = modal.dataset.importconfig;
				if (options) {
					modal.addEventListener("click",
						function (e) {
							e.preventDefault();
							importModal(JSON.parse(options));
						});
					//Avoid further processing if the event gets triggered multiple times during page load
					modal.classList.add("processed");
				}
			}
		} catch (err) {
			console.error("Unable to initialize import modal");
		}
	}
	var modalExport = document.querySelector(".exportModal");
	if (modalExport !== null) {
		try {
			if (!modalExport.classList.contains("processed")) {
				var options = modalExport.dataset.exportconfig;
				if (options) {
					modalExport.addEventListener("click",
						function (e) {
							e.preventDefault();
							exportModal(JSON.parse(options));
						});
					//Avoid further processing if the event gets triggered multiple times during page load
					modalExport.classList.add("processed");
				}
			}
		} catch (err) {
			console.error("Unable to initialize export modal");
		}
	}
});


;
function FeatureTogglesClass() {
	this.features = null;
	this.callCount = 0;

	this.GetFromLocalStorage = function (key, delegate, expire) {
		var cached = null;

		// account for the case when cache is corrupt
		try {
			cached = JSON.parse(localStorage.getItem(key));
		} catch (error) {
			console.error("Cache is corrupt for", key);
			console.error(error);
		}

		try {
			// try retrieving the values, either if it expired, missing or not an object.
			if (!cached || !cached.value || typeof cached.value !== "object" || expire(cached.timestamp)) {
				var value = delegate();
				// we expect object, so do not cache, if it is not an object or if it is empty
				if (value && typeof value === "object" && Object.keys(value).length > 0 && value.constructor === Object) {
					var toCache = JSON.stringify({
						value: value,
						timestamp: Date.now()
					});
					localStorage.setItem(key, toCache);
					return value;
				}
			}
			if (cached && cached.value && typeof cached.value === "object") {
				return cached.value;
			}
		} catch (err) {
			console.error("Unable to retrieve value for", key);
			console.error(err);
		}
		return null;
	}

	this.getJsonSync = function () {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/Toggle', false);
		xhr.send(null);
		return JSON.parse(xhr.responseText);
	};

	// Expire method.
	this.expire = function (timestamp) {
		return !timestamp || timestamp < new Date().setHours(0, 0, 0, 0);
	}

	this.isActive = function (featureName) {
		// If /toggle is failing and we do not have cached value, retry at most 4 times or bail out. 
		if (this.features === null && this.callCount < 4) {
			this.features = this.GetFromLocalStorage("FeatureToggles", this.getJsonSync, this.expire);
			this.callCount += 1;
		}
		return this.features !== null && !!this.features[featureName];
	};
}

if (!window.FeatureToggles) {
	window.FeatureToggles = new FeatureTogglesClass();
};
function attrOrProps($element, key, value)
{
	if (window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224"))
	{
		//value can be null or undefined hence "=="
		if (value == null )
			return $element.prop(key);
		else
			$element.prop(key, value);
	}		
	else
		//value can be null or undefined hence "=="
		if (value == null)
			return $element.attr(key);
		else
			$element.attr(key, value);
}

function onOrLive($element, callback, event)
{	
	//jQuery 2.2.4 does not seem to fire correctly with the .on('load') syntax. .load() works instead. This will work up to jQuery3.0 (https://api.jquery.com/load-event/).
	//TODO: With next upgrade, we need to remove this if statment so that it goes back to using .on('load') syntax.
	if (event === 'load') {
		return $element.load(callback);
	}

	if (window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") && $('#hdnModuleEligibleForJquery224Upgrade').val() == "true")
	{
		return $element.off(event).on(event, callback);
	}		
	else
	{
		if (event == 'unload') {
			return $element.unload(callback);
		}
		
		else {
			return $element.die(event).live(event, callback);
		}
	}	
}

function isResolvedOrState(element)
{
	if (window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224"))
		return element.state() === "resolved";
	else
		return element.isResolved();
}

function removeAttrOrProps(element, key) {
	if (window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") && $('#hdnModuleEligibleForJquery224Upgrade').val() == "true") {
		if (isNativeElementProperty(key))
			element.prop(key, false);

		return element.removeProp(key);
	}
	else {
		return element.removeAttr(key);
	}
}

function isNativeElementProperty(key)
{
	if (key === "checked" || key === "selected" || key === "disabled") //any native property of an element
		return true;
	return false;
}

function cookieGet(key) {
	if (window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") && $('#hdnModuleEligibleForJquery224Upgrade').val() == "true") {
		return Cookies.get(key);
	}
	else {
		return $.cookie(key);
	}
}

function delegateOrOn($element,selector , event , handler) {
	if (window.FeatureToggles.isActive("CMS.JqueryUpgrade.UpgradeTo224") && $('#hdnModuleEligibleForJquery224Upgrade').val() == "true") {
		 $element.on(event,selector,handler);
	}
	else {
		 $element.delegate(selector, event, handler);
	}
};
(function () {

	var initDateTimePickers = function (dateTimePickers) {
		$(dateTimePickers).each(function (index, item) {
			var options = item.getAttribute("data-cp-datetimepicker");

			options = options && JSON.parse(options) || {};

			if (!options.timePicker) {
				//Item is date picker
				if (!options.overrideDayBeforeMonth && !options.format) {
					options.format = getDateFormat().toLowerCase()
				}
				else {
					options.format = 'mm/dd/yyyy';
				}
				if (options.rootContainer) {
					options.container = '#root-picker-outlet';
				}
				cp.datetimepicker?.createDatePicker('#' + item.id, options);
			}
			else {
				//Item is time picker
				options.format = 'h:i A';
				options.editable = true;
				cp.datetimepicker?.createTimePicker('#' + item.id, options);
			}

		})
	};

	var init = function () {
		var dateTimePickers = document.querySelectorAll('input[data-cp-datetimepicker]');
		if (dateTimePickers.length === 0 || window.cpDateTimePickerInitLock) {
			return;
		}

		// Prevent script reinitialization, in case it is included multiple times
		if (window.cpDateTimePickerInit) {
			initDateTimePickers(dateTimePickers, true);
			return;
		}
		window.cpDateTimePickerInitLock = true;
		window.cpDateTimePickerInit = true;

		var stylesheets = [
			"/Assets/AdminRefresh/DateTimePicker/dateTimePicker.css",
			"/Assets/Styles/DateTimePicker/cp.datetimepicker.css",
		];
		stylesheets.forEach(function (stylesheet) {
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = stylesheet;
			document.head.appendChild(link);
		});

		var javascripts = [
			"/Assets/Scripts/Flyout.js",
			"/Assets/Scripts/DateTimePicker/picker.min.js",
			"/Assets/Scripts/DateTimePicker/picker.date.min.js",
			"/Assets/Scripts/DateTimePicker/picker.time.min.js"
		];
		javascripts.forEach(function (ref) {
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = ref;
			script.async = false;
			document.head.appendChild(script);
		});
		var script = document.createElement("script");
		script.onload = function () {
			initDateTimePickers(dateTimePickers);
			window.cpDateTimePickerInitLock = false;
		};
		script.src = "/Assets/Scripts/DateTimePicker/cp.datetimepicker.js";
		script.async = false;
		document.head.appendChild(script);
	};

	window.initDateTimePickers = init;

	init();
	document.addEventListener("DOMContentLoaded", init);
})();
;

