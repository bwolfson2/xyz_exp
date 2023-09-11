/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};
  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
window.Drupal = {
  behaviors: {},
  locale: {}
};
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };
  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;
        case '!':
          processedArgs[key] = args[key];
          break;
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }
    if (keys.length === 0) {
      return str;
    }
    var key = keys.pop();
    var fragments = str.split(key);
    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }
    return fragments.join(args[key]);
  };
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }
    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');
    try {
      url = decodeURIComponent(url);
    } catch (e) {}
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };
  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;
    if (protocol === 'http:' && absoluteUrl.indexOf('summer-food-service-program.html') === 0) {
      protocol = 'summer-food-service-program.html';
    }
    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}
    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "https://www.feedingamerica.org/")) === 0;
  };
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }
    return translations[index];
  };
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, 'https://www.feedingamerica.org/');
  };
  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;
    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };
  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;
    if (!Proxy || !Reflect) {
      return target;
    }
    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }
        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };
  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };
  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.jQuery) {
  jQuery.noConflict();
}
document.documentElement.className += ' js';
(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };
  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){"use strict";return e.ui=e.ui||{},e.ui.version="1.13.2"}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict"}));

/*!
 * jQuery Color Animations v2.2.0
 * https://github.com/jquery/jquery-color
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Sun May 10 09:02:36 2020 +0200
 */
!function(r,n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof exports?module.exports=n(require("jquery")):n(r.jQuery)}(this,(function(r,n){var t,e={},o=e.toString,a=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[r[1],r[2],r[3],r[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[2.55*r[1],2.55*r[2],2.55*r[3],r[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,parse:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),r[4]?(parseInt(r[4],16)/255).toFixed(2):1]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,parse:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16),r[4]?(parseInt(r[4]+r[4],16)/255).toFixed(2):1]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(r){return[r[1],r[2]/100,r[3]/100,r[4]]}}],s=r.Color=function(n,t,e,o){return new r.Color.fn.parse(n,t,e,o)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=s.support={},c=r("<p>")[0],p=r.each;function d(r){return null==r?r+"":"object"==typeof r?e[o.call(r)]||"object":typeof r}function h(r,n,t){var e=l[n.type]||{};return null==r?t||!n.def?null:n.def:(r=e.floor?~~r:parseFloat(r),isNaN(r)?n.def:e.mod?(r+e.mod)%e.mod:Math.min(e.max,Math.max(0,r)))}function b(n){var e=s(),o=e._rgba=[];return n=n.toLowerCase(),p(i,(function(r,t){var a,i=t.re.exec(n),s=i&&t.parse(i),l=t.space||"rgba";if(s)return a=e[l](s),e[u[l].cache]=a[u[l].cache],o=e._rgba=a._rgba,!1})),o.length?("0,0,0,0"===o.join()&&r.extend(o,t.transparent),e):t[n]}function g(r,n,t){return 6*(t=(t+1)%1)<1?r+(n-r)*t*6:2*t<1?n:3*t<2?r+(n-r)*(2/3-t)*6:r}c.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=c.style.backgroundColor.indexOf("rgba")>-1,p(u,(function(r,n){n.cache="_"+r,n.props.alpha={idx:3,type:"percent",def:1}})),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(r,n){e["[object "+n+"]"]=n.toLowerCase()})),s.fn=r.extend(s.prototype,{parse:function(e,o,a,i){if(e===n)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=r(e).css(o),o=n);var l=this,f=d(e),c=this._rgba=[];return o!==n&&(e=[e,o,a,i],f="array"),"string"===f?this.parse(b(e)||t._default):"array"===f?(p(u.rgba.props,(function(r,n){c[n.idx]=h(e[n.idx],n)})),this):"object"===f?(p(u,e instanceof s?function(r,n){e[n.cache]&&(l[n.cache]=e[n.cache].slice())}:function(n,t){var o=t.cache;p(t.props,(function(r,n){if(!l[o]&&t.to){if("alpha"===r||null==e[r])return;l[o]=t.to(l._rgba)}l[o][n.idx]=h(e[r],n,!0)})),l[o]&&r.inArray(null,l[o].slice(0,3))<0&&(null==l[o][3]&&(l[o][3]=1),t.from&&(l._rgba=t.from(l[o])))}),this):void 0},is:function(r){var n=s(r),t=!0,e=this;return p(u,(function(r,o){var a,i=n[o.cache];return i&&(a=e[o.cache]||o.to&&o.to(e._rgba)||[],p(o.props,(function(r,n){if(null!=i[n.idx])return t=i[n.idx]===a[n.idx]}))),t})),t},_space:function(){var r=[],n=this;return p(u,(function(t,e){n[e.cache]&&r.push(t)})),r.pop()},transition:function(r,n){var t=s(r),e=t._space(),o=u[e],a=0===this.alpha()?s("transparent"):this,i=a[o.cache]||o.to(a._rgba),f=i.slice();return t=t[o.cache],p(o.props,(function(r,e){var o=e.idx,a=i[o],s=t[o],u=l[e.type]||{};null!==s&&(null===a?f[o]=s:(u.mod&&(s-a>u.mod/2?a+=u.mod:a-s>u.mod/2&&(a-=u.mod)),f[o]=h((s-a)*n+a,e)))})),this[e](f)},blend:function(n){if(1===this._rgba[3])return this;var t=this._rgba.slice(),e=t.pop(),o=s(n)._rgba;return s(r.map(t,(function(r,n){return(1-e)*o[n]+e*r})))},toRgbaString:function(){var n="rgba(",t=r.map(this._rgba,(function(r,n){return null!=r?r:n>2?1:0}));return 1===t[3]&&(t.pop(),n="rgb("),n+t.join()+")"},toHslaString:function(){var n="hsla(",t=r.map(this.hsla(),(function(r,n){return null==r&&(r=n>2?1:0),n&&n<3&&(r=Math.round(100*r)+"%"),r}));return 1===t[3]&&(t.pop(),n="hsl("),n+t.join()+")"},toHexString:function(n){var t=this._rgba.slice(),e=t.pop();return n&&t.push(~~(255*e)),"#"+r.map(t,(function(r){return 1===(r=(r||0).toString(16)).length?"0"+r:r})).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,u.hsla.to=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n,t,e=r[0]/255,o=r[1]/255,a=r[2]/255,i=r[3],s=Math.max(e,o,a),u=Math.min(e,o,a),l=s-u,f=s+u,c=.5*f;return n=u===s?0:e===s?60*(o-a)/l+360:o===s?60*(a-e)/l+120:60*(e-o)/l+240,t=0===l?0:c<=.5?l/f:l/(2-f),[Math.round(n)%360,t,c,null==i?1:i]},u.hsla.from=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n=r[0]/360,t=r[1],e=r[2],o=r[3],a=e<=.5?e*(1+t):e+t-e*t,i=2*e-a;return[Math.round(255*g(i,a,n+1/3)),Math.round(255*g(i,a,n)),Math.round(255*g(i,a,n-1/3)),o]},p(u,(function(r,t){var e=t.props,o=t.cache,i=t.to,u=t.from;s.fn[r]=function(r){if(i&&!this[o]&&(this[o]=i(this._rgba)),r===n)return this[o].slice();var t,a=d(r),l="array"===a||"object"===a?r:arguments,f=this[o].slice();return p(e,(function(r,n){var t=l["object"===a?r:n.idx];null==t&&(t=f[n.idx]),f[n.idx]=h(t,n)})),u?((t=s(u(f)))[o]=f,t):s(f)},p(e,(function(n,t){s.fn[n]||(s.fn[n]=function(e){var o,i,s,u,l=d(e);return i=(o=this[u="alpha"===n?this._hsla?"hsla":"rgba":r]())[t.idx],"undefined"===l?i:("function"===l&&(l=d(e=e.call(this,i))),null==e&&t.empty?this:("string"===l&&(s=a.exec(e))&&(e=i+parseFloat(s[2])*("+"===s[1]?1:-1)),o[t.idx]=e,this[u](o)))})}))})),s.hook=function(n){var t=n.split(" ");p(t,(function(n,t){r.cssHooks[t]={set:function(n,e){var o,a,i="";if("transparent"!==e&&("string"!==d(e)||(o=b(e)))){if(e=s(o||e),!f.rgba&&1!==e._rgba[3]){for(a="backgroundColor"===t?n.parentNode:n;(""===i||"transparent"===i)&&a&&a.style;)try{i=r.css(a,"backgroundColor"),a=a.parentNode}catch(r){}e=e.blend(i&&"transparent"!==i?i:"_default")}e=e.toRgbaString()}try{n.style[t]=e}catch(r){}}},r.fx.step[t]=function(n){n.colorInit||(n.start=s(n.elem,t),n.end=s(n.end),n.colorInit=!0),r.cssHooks[t].set(n.elem,n.start.transition(n.end,n.pos))}}))},s.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),r.cssHooks.borderColor={expand:function(r){var n={};return p(["Top","Right","Bottom","Left"],(function(t,e){n["border"+e+"Color"]=r})),n}},t=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}));

/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));

/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){"use strict";return i.fn.extend({uniqueId:(e=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++e)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var e}));

/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";var e,i=0,s=Array.prototype.hasOwnProperty,n=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove");e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),Array.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr.pseudos[u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(t,e){r[t]="function"==typeof e?function(){function s(){return i.prototype[t].apply(this,arguments)}function n(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,o=this._superApply;return this._super=s,this._superApply=n,t=e.apply(this,arguments),this._super=i,this._superApply=o,t}}():e})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,o,a=n.call(arguments,1),r=0,l=a.length;r<l;r++)for(i in a[r])o=a[r][i],s.call(a[r],i)&&void 0!==o&&(t.isPlainObject(o)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):e[i]=o);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=n.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?"function"!=typeof n[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for "+e+" widget instance"):(i=n[o].apply(n,r))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(){var i=[];e.element.each((function(e,n){t.map(s.classesElementLookup,(function(t){return t})).some((function(t){return t.is(n)}))||i.push(n)})),s._on(t(i),{remove:"_untrackClassesElement"})}function o(o,a){var r,l;for(l=0;l<o.length;l++)r=s.classesElementLookup[o[l]]||t(),e.add?(n(),r=t(t.uniqueSort(r.get().concat(e.element.get())))):r=t(r.not(e.element).get()),s.classesElementLookup[o[l]]=r,i.push(o[l]),a&&e.classes[o[l]]&&i.push(e.classes[o[l]])}return(e=t.extend({element:this.element,classes:this.options.classes||{}},e)).keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})),this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!("function"==typeof a&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})?n={duration:n}:!0===n&&(n={}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));

/*!
 * jQuery UI Accordion 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../keycode","../unique-id","../widget"],e):e(jQuery)}((function(e){"use strict";return e.widget("ui.accordion",{version:"1.13.2",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:function(e){return e.find("> li > :first-child").add(e.find("> :not(li)").even())},heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),t.collapsible||!1!==t.active&&null!=t.active||(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t,i,a=this.options.icons;a&&(t=e("<span>"),this._addClass(t,"ui-accordion-header-icon","ui-icon "+a.header),t.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,a.header)._addClass(i,null,a.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){"active"!==e?("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||!1!==this.options.active||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons())):this._activate(t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",e),this._toggleClass(null,"ui-state-disabled",!!e),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!e)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,a=this.headers.length,s=this.headers.index(t.target),n=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:n=this.headers[(s+1)%a];break;case i.LEFT:case i.UP:n=this.headers[(s-1+a)%a];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:n=this.headers[0];break;case i.END:n=this.headers[a-1]}n&&(e(t.target).attr("tabIndex",-1),e(n).attr("tabIndex",0),e(n).trigger("focus"),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().trigger("focus")},refresh:function(){var t=this.options;this._processPanels(),!1===t.active&&!0===t.collapsible||!this.headers.length?(t.active=!1,this.active=e()):!1===t.active?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;"function"==typeof this.options.header?this.headers=this.options.header(this.element):this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,a=i.heightStyle,s=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each((function(){var t=e(this),i=t.uniqueId().attr("id"),a=t.next(),s=a.uniqueId().attr("id");t.attr("aria-controls",s),a.attr("aria-labelledby",i)})).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===a?(t=s.height(),this.element.siblings(":visible").each((function(){var i=e(this),a=i.css("position");"absolute"!==a&&"fixed"!==a&&(t-=i.outerHeight(!0))})),this.headers.each((function(){t-=e(this).outerHeight(!0)})),this.headers.next().each((function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))})).css("overflow","auto")):"auto"===a&&(t=0,this.headers.next().each((function(){var i=e(this).is(":visible");i||e(this).show(),t=Math.max(t,e(this).css("height","").height()),i||e(this).hide()})).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),(function(e,t){i[t]="_eventHandler"})),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i,a,s=this.options,n=this.active,h=e(t.currentTarget),r=h[0]===n[0],o=r&&s.collapsible,d=o?e():h.next(),c=n.next(),l={oldHeader:n,oldPanel:c,newHeader:o?e():h,newPanel:d};t.preventDefault(),r&&!s.collapsible||!1===this._trigger("beforeActivate",t,l)||(s.active=!o&&this.headers.index(h),this.active=r?e():h,this._toggle(l),this._removeClass(n,"ui-accordion-header-active","ui-state-active"),s.icons&&(i=n.children(".ui-accordion-header-icon"),this._removeClass(i,null,s.icons.activeHeader)._addClass(i,null,s.icons.header)),r||(this._removeClass(h,"ui-accordion-header-collapsed")._addClass(h,"ui-accordion-header-active","ui-state-active"),s.icons&&(a=h.children(".ui-accordion-header-icon"),this._removeClass(a,null,s.icons.header)._addClass(a,null,s.icons.activeHeader)),this._addClass(h.next(),"ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,a=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=a,this.options.animate?this._animate(i,a,t):(a.hide(),i.show(),this._toggleComplete(t)),a.attr({"aria-hidden":"true"}),a.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&a.length?a.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter((function(){return 0===parseInt(e(this).attr("tabIndex"),10)})).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var a,s,n,h=this,r=0,o=e.css("box-sizing"),d=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},l=d&&c.down||c,u=function(){h._toggleComplete(i)};return"number"==typeof l&&(n=l),"string"==typeof l&&(s=l),s=s||l.easing||c.easing,n=n||l.duration||c.duration,t.length?e.length?(a=e.show().outerHeight(),t.animate(this.hideProps,{duration:n,easing:s,step:function(e,t){t.now=Math.round(e)}}),void e.hide().animate(this.showProps,{duration:n,easing:s,complete:u,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===o&&(r+=i.now):"content"!==h.options.heightStyle&&(i.now=Math.round(a-t.outerHeight()-r),r=0)}})):t.animate(this.hideProps,n,s,u):e.animate(this.showProps,n,s,u)},_toggleComplete:function(e){var t=e.oldPanel,i=t.prev();this._removeClass(t,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})}));

/*!
 * jQuery UI Datepicker 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../version","../keycode"],e):e(jQuery)}((function(e){"use strict";var t;function a(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",selectMonthLabel:"Select month",selectYearLabel:"Select year"},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,onUpdateDatepicker:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=i(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function i(t){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.on("mouseout",a,(function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")})).on("mouseover",a,s)}function s(){e.datepicker._isDisabledDatepicker(t.inline?t.dpDiv.parent()[0]:t.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,a){for(var i in e.extend(t,a),a)null==a[i]&&(t[i]=a[i]);return t}return e.extend(e.ui,{datepicker:{version:"1.13.2"}}),e.extend(a.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,a){var i,s,r;s="div"===(i=t.nodeName.toLowerCase())||"span"===i,t.id||(this.uuid+=1,t.id="dp"+this.uuid),(r=this._newInst(e(t),s)).settings=e.extend({},a||{}),"input"===i?this._connectDatepicker(t,r):s&&this._inlineDatepicker(t,r)},_newInst:function(t,a){return{id:t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?i(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,a){var i=e(t);a.append=e([]),a.trigger=e([]),i.hasClass(this.markerClassName)||(this._attachments(i,a),i.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(a),e.data(t,"datepicker",a),a.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,a){var i,s,r,n=this._get(a,"appendText"),d=this._get(a,"isRTL");a.append&&a.append.remove(),n&&(a.append=e("<span>").addClass(this._appendClass).text(n),t[d?"before":"after"](a.append)),t.off("focus",this._showDatepicker),a.trigger&&a.trigger.remove(),"focus"!==(i=this._get(a,"showOn"))&&"both"!==i||t.on("focus",this._showDatepicker),"button"!==i&&"both"!==i||(s=this._get(a,"buttonText"),r=this._get(a,"buttonImage"),this._get(a,"buttonImageOnly")?a.trigger=e("<img>").addClass(this._triggerClass).attr({src:r,alt:s,title:s}):(a.trigger=e("<button type='button'>").addClass(this._triggerClass),r?a.trigger.html(e("<img>").attr({src:r,alt:s,title:s})):a.trigger.text(s)),t[d?"before":"after"](a.trigger),a.trigger.on("click",(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1})))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,a,i,s,r=new Date(2009,11,20),n=this._get(e,"dateFormat");n.match(/[DM]/)&&(t=function(e){for(a=0,i=0,s=0;s<e.length;s++)e[s].length>a&&(a=e[s].length,i=s);return i},r.setMonth(t(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),r.setDate(t(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-r.getDay())),e.input.attr("size",this._formatDate(e,r).length)}},_inlineDatepicker:function(t,a){var i=e(t);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(a.dpDiv),e.data(t,"datepicker",a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(t),a.dpDiv.css("display","block"))},_dialogDatepicker:function(t,a,i,s,n){var d,c,o,l,h,u=this._dialogInst;return u||(this.uuid+=1,d="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+d+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),e("body").append(this._dialogInput),(u=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},e.data(this._dialogInput[0],"datepicker",u)),r(u.settings,s||{}),a=a&&a.constructor===Date?this._formatDate(u,a):a,this._dialogInput.val(a),this._pos=n?n.length?n:[n.pageX,n.pageY]:null,this._pos||(c=document.documentElement.clientWidth,o=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+l,o/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),u.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",u),this},_destroyDatepicker:function(a){var i,s=e(a),r=e.data(a,"datepicker");s.hasClass(this.markerClassName)&&(i=a.nodeName.toLowerCase(),e.removeData(a,"datepicker"),"input"===i?(r.append.remove(),r.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==i&&"span"!==i||s.removeClass(this.markerClassName).empty(),t===r&&(t=null,this._curInst=null))},_enableDatepicker:function(t){var a,i,s=e(t),r=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&("input"===(a=t.nodeName.toLowerCase())?(t.disabled=!1,r.trigger.filter("button").each((function(){this.disabled=!1})).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==a&&"span"!==a||((i=s.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,(function(e){return e===t?null:e})))},_disableDatepicker:function(t){var a,i,s=e(t),r=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&("input"===(a=t.nodeName.toLowerCase())?(t.disabled=!0,r.trigger.filter("button").each((function(){this.disabled=!0})).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==a&&"span"!==a||((i=s.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,(function(e){return e===t?null:e})),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(e){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,a,i){var s,n,d,c,o=this._getInst(t);if(2===arguments.length&&"string"==typeof a)return"defaults"===a?e.extend({},e.datepicker._defaults):o?"all"===a?e.extend({},o.settings):this._get(o,a):null;s=a||{},"string"==typeof a&&((s={})[a]=i),o&&(this._curInst===o&&this._hideDatepicker(),n=this._getDateDatepicker(t,!0),d=this._getMinMaxDate(o,"min"),c=this._getMinMaxDate(o,"max"),r(o.settings,s),null!==d&&void 0!==s.dateFormat&&void 0===s.minDate&&(o.settings.minDate=this._formatDate(o,d)),null!==c&&void 0!==s.dateFormat&&void 0===s.maxDate&&(o.settings.maxDate=this._formatDate(o,c)),"disabled"in s&&(s.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),o),this._autoSize(o),this._setDate(o,n),this._updateAlternate(o),this._updateDatepicker(o))},_changeDatepicker:function(e,t,a){this._optionDatepicker(e,t,a)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var a=this._getInst(e);a&&(this._setDate(a,t),this._updateDatepicker(a),this._updateAlternate(a))},_getDateDatepicker:function(e,t){var a=this._getInst(e);return a&&!a.inline&&this._setDateFromField(a,t),a?this._getDate(a):null},_doKeyDown:function(t){var a,i,s,r=e.datepicker._getInst(t.target),n=!0,d=r.dpDiv.is(".ui-datepicker-rtl");if(r._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),n=!1;break;case 13:return(s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",r.dpDiv))[0]&&e.datepicker._selectDay(t.target,r.selectedMonth,r.selectedYear,s[0]),(a=e.datepicker._get(r,"onSelect"))?(i=e.datepicker._formatDate(r),a.apply(r.input?r.input[0]:null,[i,r])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(r,"stepBigMonths"):-e.datepicker._get(r,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(r,"stepBigMonths"):+e.datepicker._get(r,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),n=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),n=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,d?1:-1,"D"),n=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(r,"stepBigMonths"):-e.datepicker._get(r,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),n=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,d?-1:1,"D"),n=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(r,"stepBigMonths"):+e.datepicker._get(r,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),n=t.ctrlKey||t.metaKey;break;default:n=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):n=!1;n&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var a,i,s=e.datepicker._getInst(t.target);if(e.datepicker._get(s,"constrainInput"))return a=e.datepicker._possibleChars(e.datepicker._get(s,"dateFormat")),i=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||i<" "||!a||a.indexOf(i)>-1},_doKeyUp:function(t){var a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a))&&(e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(e){}return!0},_showDatepicker:function(t){var a,i,s,n,d,c,o;("input"!==(t=t.target||t).nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),e.datepicker._isDisabledDatepicker(t)||e.datepicker._lastInput===t)||(a=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==a&&(e.datepicker._curInst.dpDiv.stop(!0,!0),a&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),!1!==(s=(i=e.datepicker._get(a,"beforeShow"))?i.apply(t,[t,a]):{})&&(r(a.settings,s),a.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(a),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),n=!1,e(t).parents().each((function(){return!(n|="fixed"===e(this).css("position"))})),d={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,a.dpDiv.empty(),a.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(a),d=e.datepicker._checkOffset(a,d,n),a.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":n?"fixed":"absolute",display:"none",left:d.left+"px",top:d.top+"px"}),a.inline||(c=e.datepicker._get(a,"showAnim"),o=e.datepicker._get(a,"duration"),a.dpDiv.css("z-index",function(e){for(var t,a;e.length&&e[0]!==document;){if(("absolute"===(t=e.css("position"))||"relative"===t||"fixed"===t)&&(a=parseInt(e.css("zIndex"),10),!isNaN(a)&&0!==a))return a;e=e.parent()}return 0}(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[c]?a.dpDiv.show(c,e.datepicker._get(a,"showOptions"),o):a.dpDiv[c||"show"](c?o:null),e.datepicker._shouldFocusInput(a)&&a.input.trigger("focus"),e.datepicker._curInst=a)))},_updateDatepicker:function(a){this.maxRows=4,t=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var i,r=this._getNumberOfMonths(a),n=r[1],d=a.dpDiv.find("."+this._dayOverClass+" a"),c=e.datepicker._get(a,"onUpdateDatepicker");d.length>0&&s.apply(d.get(0)),a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&a.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",17*n+"em"),a.dpDiv[(1!==r[0]||1!==r[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(a)&&a.input.trigger("focus"),a.yearshtml&&(i=a.yearshtml,setTimeout((function(){i===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year").first().replaceWith(a.yearshtml),i=a.yearshtml=null}),0)),c&&c.apply(a.input?a.input[0]:null,[a])},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,a,i){var s=t.dpDiv.outerWidth(),r=t.dpDiv.outerHeight(),n=t.input?t.input.outerWidth():0,d=t.input?t.input.outerHeight():0,c=document.documentElement.clientWidth+(i?0:e(document).scrollLeft()),o=document.documentElement.clientHeight+(i?0:e(document).scrollTop());return a.left-=this._get(t,"isRTL")?s-n:0,a.left-=i&&a.left===t.input.offset().left?e(document).scrollLeft():0,a.top-=i&&a.top===t.input.offset().top+d?e(document).scrollTop():0,a.left-=Math.min(a.left,a.left+s>c&&c>s?Math.abs(a.left+s-c):0),a.top-=Math.min(a.top,a.top+r>o&&o>r?Math.abs(r+d):0),a},_findPos:function(t){for(var a,i=this._getInst(t),s=this._get(i,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.pseudos.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return[(a=e(t).offset()).left,a.top]},_hideDatepicker:function(t){var a,i,s,r,n=this._curInst;!n||t&&n!==e.data(t,"datepicker")||this._datepickerShowing&&(a=this._get(n,"showAnim"),i=this._get(n,"duration"),s=function(){e.datepicker._tidyDialog(n)},e.effects&&(e.effects.effect[a]||e.effects[a])?n.dpDiv.hide(a,e.datepicker._get(n,"showOptions"),i,s):n.dpDiv["slideDown"===a?"slideUp":"fadeIn"===a?"fadeOut":"hide"](a?i:null,s),a||s(),this._datepickerShowing=!1,(r=this._get(n,"onClose"))&&r.apply(n.input?n.input[0]:null,[n.input?n.input.val():"",n]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var a=e(t.target),i=e.datepicker._getInst(a[0]);(a[0].id===e.datepicker._mainDivId||0!==a.parents("#"+e.datepicker._mainDivId).length||a.hasClass(e.datepicker.markerClassName)||a.closest("."+e.datepicker._triggerClass).length||!e.datepicker._datepickerShowing||e.datepicker._inDialog&&e.blockUI)&&(!a.hasClass(e.datepicker.markerClassName)||e.datepicker._curInst===i)||e.datepicker._hideDatepicker()}},_adjustDate:function(t,a,i){var s=e(t),r=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(r,a,i),this._updateDatepicker(r))},_gotoToday:function(t){var a,i=e(t),s=this._getInst(i[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(a=new Date,s.selectedDay=a.getDate(),s.drawMonth=s.selectedMonth=a.getMonth(),s.drawYear=s.selectedYear=a.getFullYear()),this._notifyChange(s),this._adjustDate(i)},_selectMonthYear:function(t,a,i){var s=e(t),r=this._getInst(s[0]);r["selected"+("M"===i?"Month":"Year")]=r["draw"+("M"===i?"Month":"Year")]=parseInt(a.options[a.selectedIndex].value,10),this._notifyChange(r),this._adjustDate(s)},_selectDay:function(t,a,i,s){var r,n=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(n[0])||((r=this._getInst(n[0])).selectedDay=r.currentDay=parseInt(e("a",s).attr("data-date")),r.selectedMonth=r.currentMonth=a,r.selectedYear=r.currentYear=i,this._selectDate(t,this._formatDate(r,r.currentDay,r.currentMonth,r.currentYear)))},_clearDate:function(t){var a=e(t);this._selectDate(a,"")},_selectDate:function(t,a){var i,s=e(t),r=this._getInst(s[0]);a=null!=a?a:this._formatDate(r),r.input&&r.input.val(a),this._updateAlternate(r),(i=this._get(r,"onSelect"))?i.apply(r.input?r.input[0]:null,[a,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],"object"!=typeof r.input[0]&&r.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(t){var a,i,s,r=this._get(t,"altField");r&&(a=this._get(t,"altFormat")||this._get(t,"dateFormat"),i=this._getDate(t),s=this.formatDate(a,i,this._getFormatConfig(t)),e(document).find(r).val(s))},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t,a=new Date(e.getTime());return a.setDate(a.getDate()+4-(a.getDay()||7)),t=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((t-a)/864e5)/7)+1},parseDate:function(t,a,i){if(null==t||null==a)throw"Invalid arguments";if(""===(a="object"==typeof a?a.toString():a+""))return null;var s,r,n,d,c=0,o=(i?i.shortYearCutoff:null)||this._defaults.shortYearCutoff,l="string"!=typeof o?o:(new Date).getFullYear()%100+parseInt(o,10),h=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,u=(i?i.dayNames:null)||this._defaults.dayNames,p=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,g=(i?i.monthNames:null)||this._defaults.monthNames,_=-1,f=-1,k=-1,D=-1,m=!1,y=function(e){var a=s+1<t.length&&t.charAt(s+1)===e;return a&&s++,a},v=function(e){var t=y(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=new RegExp("^\\d{"+("y"===e?i:1)+","+i+"}"),r=a.substring(c).match(s);if(!r)throw"Missing number at position "+c;return c+=r[0].length,parseInt(r[0],10)},M=function(t,i,s){var r=-1,n=e.map(y(t)?s:i,(function(e,t){return[[t,e]]})).sort((function(e,t){return-(e[1].length-t[1].length)}));if(e.each(n,(function(e,t){var i=t[1];if(a.substr(c,i.length).toLowerCase()===i.toLowerCase())return r=t[0],c+=i.length,!1})),-1!==r)return r+1;throw"Unknown name at position "+c},b=function(){if(a.charAt(c)!==t.charAt(s))throw"Unexpected literal at position "+c;c++};for(s=0;s<t.length;s++)if(m)"'"!==t.charAt(s)||y("'")?b():m=!1;else switch(t.charAt(s)){case"d":k=v("d");break;case"D":M("D",h,u);break;case"o":D=v("o");break;case"m":f=v("m");break;case"M":f=M("M",p,g);break;case"y":_=v("y");break;case"@":_=(d=new Date(v("@"))).getFullYear(),f=d.getMonth()+1,k=d.getDate();break;case"!":_=(d=new Date((v("!")-this._ticksTo1970)/1e4)).getFullYear(),f=d.getMonth()+1,k=d.getDate();break;case"'":y("'")?b():m=!0;break;default:b()}if(c<a.length&&(n=a.substr(c),!/^\s+/.test(n)))throw"Extra/unparsed characters found in date: "+n;if(-1===_?_=(new Date).getFullYear():_<100&&(_+=(new Date).getFullYear()-(new Date).getFullYear()%100+(_<=l?0:-100)),D>-1)for(f=1,k=D;;){if(k<=(r=this._getDaysInMonth(_,f-1)))break;f++,k-=r}if((d=this._daylightSavingAdjust(new Date(_,f-1,k))).getFullYear()!==_||d.getMonth()+1!==f||d.getDate()!==k)throw"Invalid date";return d},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(e,t,a){if(!t)return"";var i,s=(a?a.dayNamesShort:null)||this._defaults.dayNamesShort,r=(a?a.dayNames:null)||this._defaults.dayNames,n=(a?a.monthNamesShort:null)||this._defaults.monthNamesShort,d=(a?a.monthNames:null)||this._defaults.monthNames,c=function(t){var a=i+1<e.length&&e.charAt(i+1)===t;return a&&i++,a},o=function(e,t,a){var i=""+t;if(c(e))for(;i.length<a;)i="0"+i;return i},l=function(e,t,a,i){return c(e)?i[t]:a[t]},h="",u=!1;if(t)for(i=0;i<e.length;i++)if(u)"'"!==e.charAt(i)||c("'")?h+=e.charAt(i):u=!1;else switch(e.charAt(i)){case"d":h+=o("d",t.getDate(),2);break;case"D":h+=l("D",t.getDay(),s,r);break;case"o":h+=o("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":h+=o("m",t.getMonth()+1,2);break;case"M":h+=l("M",t.getMonth(),n,d);break;case"y":h+=c("y")?t.getFullYear():(t.getFullYear()%100<10?"0":"")+t.getFullYear()%100;break;case"@":h+=t.getTime();break;case"!":h+=1e4*t.getTime()+this._ticksTo1970;break;case"'":c("'")?h+="'":u=!0;break;default:h+=e.charAt(i)}return h},_possibleChars:function(e){var t,a="",i=!1,s=function(a){var i=t+1<e.length&&e.charAt(t+1)===a;return i&&t++,i};for(t=0;t<e.length;t++)if(i)"'"!==e.charAt(t)||s("'")?a+=e.charAt(t):i=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":a+="0123456789";break;case"D":case"M":return null;case"'":s("'")?a+="'":i=!0;break;default:a+=e.charAt(t)}return a},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var a=this._get(e,"dateFormat"),i=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),r=s,n=this._getFormatConfig(e);try{r=this.parseDate(a,i,n)||s}catch(e){i=t?"":i}e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),e.currentDay=i?r.getDate():0,e.currentMonth=i?r.getMonth():0,e.currentYear=i?r.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,a,i){var s=null==a||""===a?i:"string"==typeof a?function(a){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),a,e.datepicker._getFormatConfig(t))}catch(e){}for(var i=(a.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,s=i.getFullYear(),r=i.getMonth(),n=i.getDate(),d=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,c=d.exec(a);c;){switch(c[2]||"d"){case"d":case"D":n+=parseInt(c[1],10);break;case"w":case"W":n+=7*parseInt(c[1],10);break;case"m":case"M":r+=parseInt(c[1],10),n=Math.min(n,e.datepicker._getDaysInMonth(s,r));break;case"y":case"Y":s+=parseInt(c[1],10),n=Math.min(n,e.datepicker._getDaysInMonth(s,r))}c=d.exec(a)}return new Date(s,r,n)}(a):"number"==typeof a?isNaN(a)?i:function(e){var t=new Date;return t.setDate(t.getDate()+e),t}(a):new Date(a.getTime());return(s=s&&"Invalid Date"===s.toString()?i:s)&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,a){var i=!t,s=e.selectedMonth,r=e.selectedYear,n=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=n.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=n.getMonth(),e.drawYear=e.selectedYear=e.currentYear=n.getFullYear(),s===e.selectedMonth&&r===e.selectedYear||a||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(i?"":this._formatDate(e))},_getDate:function(e){return!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay))},_attachHandlers:function(t){var a=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map((function(){var t={prev:function(){e.datepicker._adjustDate(i,-a,"M")},next:function(){e.datepicker._adjustDate(i,+a,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(i)},selectDay:function(){return e.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(i,this,"Y"),!1}};e(this).on(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])}))},_generateHTML:function(t){var a,i,s,r,n,d,c,o,l,h,u,p,g,_,f,k,D,m,y,v,M,b,w,C,I,x,Y,S,F,N,T,A,K,j,O,L,R,H,W,E=new Date,U=this._daylightSavingAdjust(new Date(E.getFullYear(),E.getMonth(),E.getDate())),P=this._get(t,"isRTL"),z=this._get(t,"showButtonPanel"),B=this._get(t,"hideIfNoPrevNext"),J=this._get(t,"navigationAsDateFormat"),V=this._getNumberOfMonths(t),q=this._get(t,"showCurrentAtPos"),Q=this._get(t,"stepMonths"),X=1!==V[0]||1!==V[1],Z=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(t,"min"),G=this._getMinMaxDate(t,"max"),ee=t.drawMonth-q,te=t.drawYear;if(ee<0&&(ee+=12,te--),G)for(a=this._daylightSavingAdjust(new Date(G.getFullYear(),G.getMonth()-V[0]*V[1]+1,G.getDate())),a=$&&a<$?$:a;this._daylightSavingAdjust(new Date(te,ee,1))>a;)--ee<0&&(ee=11,te--);for(t.drawMonth=ee,t.drawYear=te,i=this._get(t,"prevText"),i=J?this.formatDate(i,this._daylightSavingAdjust(new Date(te,ee-Q,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,ee)?e("<a>").attr({class:"ui-datepicker-prev ui-corner-all","data-handler":"prev","data-event":"click",title:i}).append(e("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(P?"e":"w")).text(i))[0].outerHTML:B?"":e("<a>").attr({class:"ui-datepicker-prev ui-corner-all ui-state-disabled",title:i}).append(e("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(P?"e":"w")).text(i))[0].outerHTML,r=this._get(t,"nextText"),r=J?this.formatDate(r,this._daylightSavingAdjust(new Date(te,ee+Q,1)),this._getFormatConfig(t)):r,n=this._canAdjustMonth(t,1,te,ee)?e("<a>").attr({class:"ui-datepicker-next ui-corner-all","data-handler":"next","data-event":"click",title:r}).append(e("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(P?"w":"e")).text(r))[0].outerHTML:B?"":e("<a>").attr({class:"ui-datepicker-next ui-corner-all ui-state-disabled",title:r}).append(e("<span>").attr("class","ui-icon ui-icon-circle-triangle-"+(P?"w":"e")).text(r))[0].outerHTML,d=this._get(t,"currentText"),c=this._get(t,"gotoCurrent")&&t.currentDay?Z:U,d=J?this.formatDate(d,c,this._getFormatConfig(t)):d,o="",t.inline||(o=e("<button>").attr({type:"button",class:"ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all","data-handler":"hide","data-event":"click"}).text(this._get(t,"closeText"))[0].outerHTML),l="",z&&(l=e("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(P?o:"").append(this._isInRange(t,c)?e("<button>").attr({type:"button",class:"ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all","data-handler":"today","data-event":"click"}).text(d):"").append(P?"":o)[0].outerHTML),h=parseInt(this._get(t,"firstDay"),10),h=isNaN(h)?0:h,u=this._get(t,"showWeek"),p=this._get(t,"dayNames"),g=this._get(t,"dayNamesMin"),_=this._get(t,"monthNames"),f=this._get(t,"monthNamesShort"),k=this._get(t,"beforeShowDay"),D=this._get(t,"showOtherMonths"),m=this._get(t,"selectOtherMonths"),y=this._getDefaultDate(t),v="",b=0;b<V[0];b++){for(w="",this.maxRows=4,C=0;C<V[1];C++){if(I=this._daylightSavingAdjust(new Date(te,ee,t.selectedDay)),x=" ui-corner-all",Y="",X){if(Y+="<div class='ui-datepicker-group",V[1]>1)switch(C){case 0:Y+=" ui-datepicker-group-first",x=" ui-corner-"+(P?"right":"left");break;case V[1]-1:Y+=" ui-datepicker-group-last",x=" ui-corner-"+(P?"left":"right");break;default:Y+=" ui-datepicker-group-middle",x=""}Y+="'>"}for(Y+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===b?P?n:s:"")+(/all|right/.test(x)&&0===b?P?s:n:"")+this._generateMonthYearHeader(t,ee,te,$,G,b>0||C>0,_,f)+"</div><table class='ui-datepicker-calendar'><thead><tr>",S=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",M=0;M<7;M++)S+="<th scope='col'"+((M+h+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+p[F=(M+h)%7]+"'>"+g[F]+"</span></th>";for(Y+=S+"</tr></thead><tbody>",N=this._getDaysInMonth(te,ee),te===t.selectedYear&&ee===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,N)),T=(this._getFirstDayOfMonth(te,ee)-h+7)%7,A=Math.ceil((T+N)/7),K=X&&this.maxRows>A?this.maxRows:A,this.maxRows=K,j=this._daylightSavingAdjust(new Date(te,ee,1-T)),O=0;O<K;O++){for(Y+="<tr>",L=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(j)+"</td>":"",M=0;M<7;M++)R=k?k.apply(t.input?t.input[0]:null,[j]):[!0,""],W=(H=j.getMonth()!==ee)&&!m||!R[0]||$&&j<$||G&&j>G,L+="<td class='"+((M+h+6)%7>=5?" ui-datepicker-week-end":"")+(H?" ui-datepicker-other-month":"")+(j.getTime()===I.getTime()&&ee===t.selectedMonth&&t._keyEvent||y.getTime()===j.getTime()&&y.getTime()===I.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(H&&!D?"":" "+R[1]+(j.getTime()===Z.getTime()?" "+this._currentClass:"")+(j.getTime()===U.getTime()?" ui-datepicker-today":""))+"'"+(H&&!D||!R[2]?"":" title='"+R[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+j.getMonth()+"' data-year='"+j.getFullYear()+"'")+">"+(H&&!D?"&#xa0;":W?"<span class='ui-state-default'>"+j.getDate()+"</span>":"<a class='ui-state-default"+(j.getTime()===U.getTime()?" ui-state-highlight":"")+(j.getTime()===Z.getTime()?" ui-state-active":"")+(H?" ui-priority-secondary":"")+"' href='#' aria-current='"+(j.getTime()===Z.getTime()?"true":"false")+"' data-date='"+j.getDate()+"'>"+j.getDate()+"</a>")+"</td>",j.setDate(j.getDate()+1),j=this._daylightSavingAdjust(j);Y+=L+"</tr>"}++ee>11&&(ee=0,te++),w+=Y+="</tbody></table>"+(X?"</div>"+(V[0]>0&&C===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}v+=w}return v+=l,t._keyEvent=!1,v},_generateMonthYearHeader:function(e,t,a,i,s,r,n,d){var c,o,l,h,u,p,g,_,f=this._get(e,"changeMonth"),k=this._get(e,"changeYear"),D=this._get(e,"showMonthAfterYear"),m=this._get(e,"selectMonthLabel"),y=this._get(e,"selectYearLabel"),v="<div class='ui-datepicker-title'>",M="";if(r||!f)M+="<span class='ui-datepicker-month'>"+n[t]+"</span>";else{for(c=i&&i.getFullYear()===a,o=s&&s.getFullYear()===a,M+="<select class='ui-datepicker-month' aria-label='"+m+"' data-handler='selectMonth' data-event='change'>",l=0;l<12;l++)(!c||l>=i.getMonth())&&(!o||l<=s.getMonth())&&(M+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+d[l]+"</option>");M+="</select>"}if(D||(v+=M+(!r&&f&&k?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",r||!k)v+="<span class='ui-datepicker-year'>"+a+"</span>";else{for(h=this._get(e,"yearRange").split(":"),u=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?a+parseInt(e.substring(1),10):e.match(/[+\-].*/)?u+parseInt(e,10):parseInt(e,10);return isNaN(t)?u:t},g=p(h[0]),_=Math.max(g,p(h[1]||"")),g=i?Math.max(g,i.getFullYear()):g,_=s?Math.min(_,s.getFullYear()):_,e.yearshtml+="<select class='ui-datepicker-year' aria-label='"+y+"' data-handler='selectYear' data-event='change'>";g<=_;g++)e.yearshtml+="<option value='"+g+"'"+(g===a?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",v+=e.yearshtml,e.yearshtml=null}return v+=this._get(e,"yearSuffix"),D&&(v+=(!r&&f&&k?"":"&#xa0;")+M),v+="</div>"},_adjustInstDate:function(e,t,a){var i=e.selectedYear+("Y"===a?t:0),s=e.selectedMonth+("M"===a?t:0),r=Math.min(e.selectedDay,this._getDaysInMonth(i,s))+("D"===a?t:0),n=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(i,s,r)));e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),"M"!==a&&"Y"!==a||this._notifyChange(e)},_restrictMinMax:function(e,t){var a=this._getMinMaxDate(e,"min"),i=this._getMinMaxDate(e,"max"),s=a&&t<a?a:t;return i&&s>i?i:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,a,i){var s=this._getNumberOfMonths(e),r=this._daylightSavingAdjust(new Date(a,i+(t<0?t:s[0]*s[1]),1));return t<0&&r.setDate(this._getDaysInMonth(r.getFullYear(),r.getMonth())),this._isInRange(e,r)},_isInRange:function(e,t){var a,i,s=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),n=null,d=null,c=this._get(e,"yearRange");return c&&(a=c.split(":"),i=(new Date).getFullYear(),n=parseInt(a[0],10),d=parseInt(a[1],10),a[0].match(/[+\-].*/)&&(n+=i),a[1].match(/[+\-].*/)&&(d+=i)),(!s||t.getTime()>=s.getTime())&&(!r||t.getTime()<=r.getTime())&&(!n||t.getFullYear()>=n)&&(!d||t.getFullYear()<=d)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return{shortYearCutoff:t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,a,i){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(i,a,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).on("mousedown",e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var a=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(a)):this.each((function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(a)):e.datepicker._attachDatepicker(this,t)})):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(a))},e.datepicker=new a,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.13.2",e.datepicker}));

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);;
/*!
 * jQuery UI Effects 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery-var-for-color","./vendor/jquery-color/jquery.color","./version"],t):t(jQuery)}((function(t){"use strict";var e,n="ui-effects-",i="ui-effects-style",o="ui-effects-animated";return t.effects={effect:{}},function(){var e,n=["add","remove","toggle"],i={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function o(t){var e,n,i,o=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,r={};if(o&&o.length&&o[0]&&o[o[0]])for(n=o.length;n--;)"string"==typeof o[e=o[n]]&&(r[(i=e,i.replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})))]=o[e]);else for(e in o)"string"==typeof o[e]&&(r[e]=o[e]);return r}t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],(function(e,n){t.fx.step[n]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,n,t.end),t.setAttr=!0)}})),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,r,s,a){var f=t.speed(r,s,a);return this.queue((function(){var r,s=t(this),a=s.attr("class")||"",c=f.children?s.find("*").addBack():s;c=c.map((function(){return{el:t(this),start:o(this)}})),(r=function(){t.each(n,(function(t,n){e[n]&&s[n+"Class"](e[n])}))})(),c=c.map((function(){return this.end=o(this.el[0]),this.diff=function(e,n){var o,r,s={};for(o in n)r=n[o],e[o]!==r&&(i[o]||!t.fx.step[o]&&isNaN(parseFloat(r))||(s[o]=r));return s}(this.start,this.end),this})),s.attr("class",a),c=c.map((function(){var e=this,n=t.Deferred(),i=t.extend({},f,{queue:!1,complete:function(){n.resolve(e)}});return this.el.animate(this.diff,i),n.promise()})),t.when.apply(t,c.get()).done((function(){r(),t.each(arguments,(function(){var e=this.el;t.each(this.diff,(function(t){e.css(t,"")}))})),f.complete.call(s[0])}))}))},t.fn.extend({addClass:(e=t.fn.addClass,function(n,i,o,r){return i?t.effects.animateClass.call(this,{add:n},i,o,r):e.apply(this,arguments)}),removeClass:function(e){return function(n,i,o,r){return arguments.length>1?t.effects.animateClass.call(this,{remove:n},i,o,r):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(n,i,o,r,s){return"boolean"==typeof i||void 0===i?o?t.effects.animateClass.call(this,i?{add:n}:{remove:n},o,r,s):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:n},i,o,r)}}(t.fn.toggleClass),switchClass:function(e,n,i,o,r){return t.effects.animateClass.call(this,{add:n,remove:e},i,o,r)}})}(),function(){var e;function r(e,n,i,o){return t.isPlainObject(e)&&(n=e,e=e.effect),e={effect:e},null==n&&(n={}),"function"==typeof n&&(o=n,i=null,n={}),("number"==typeof n||t.fx.speeds[n])&&(o=i,i=n,n={}),"function"==typeof i&&(o=i,i=null),n&&t.extend(e,n),i=i||n.duration,e.duration=t.fx.off?0:"number"==typeof i?i:i in t.fx.speeds?t.fx.speeds[i]:t.fx.speeds._default,e.complete=o||n.complete,e}function s(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||("string"==typeof e&&!t.effects.effect[e]||("function"==typeof e||"object"==typeof e&&!e.effect))}function a(t,e){var n=e.outerWidth(),i=e.outerHeight(),o=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,n,i,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?n:parseFloat(o[2]),bottom:"auto"===o[3]?i:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.pseudos&&t.expr.pseudos.animated&&(t.expr.pseudos.animated=(e=t.expr.pseudos.animated,function(n){return!!t(n).data(o)||e(n)})),!1!==t.uiBackCompat&&t.extend(t.effects,{save:function(t,e){for(var i=0,o=e.length;i<o;i++)null!==e[i]&&t.data(n+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,o=0,r=e.length;o<r;o++)null!==e[o]&&(i=t.data(n+e[o]),t.css(e[o],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var n={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},i=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:e.width(),height:e.height()},r=document.activeElement;try{r.id}catch(t){r=document.body}return e.wrap(i),(e[0]===r||t.contains(e[0],r))&&t(r).trigger("focus"),i=e.parent(),"static"===e.css("position")?(i.css({position:"relative"}),e.css({position:"relative"})):(t.extend(n,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],(function(t,i){n[i]=e.css(i),isNaN(parseInt(n[i],10))&&(n[i]="auto")})),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(o),i.css(n).show()},removeWrapper:function(e){var n=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===n||t.contains(e[0],n))&&t(n).trigger("focus")),e}}),t.extend(t.effects,{version:"1.13.2",define:function(e,n,i){return i||(i=n,n="effect"),t.effects.effect[e]=i,t.effects.effect[e].mode=n,i},scaledDimensions:function(t,e,n){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var i="horizontal"!==n?(e||100)/100:1,o="vertical"!==n?(e||100)/100:1;return{height:t.height()*o,width:t.width()*i,outerHeight:t.outerHeight()*o,outerWidth:t.outerWidth()*i}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,n){var i=t.queue();e>1&&i.splice.apply(i,[1,0].concat(i.splice(e,n))),t.dequeue()},saveStyle:function(t){t.data(i,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(i)||"",t.removeData(i)},mode:function(t,e){var n=t.is(":hidden");return"toggle"===e&&(e=n?"show":"hide"),(n?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var n,i;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=t[1]/e.width}return{x:i,y:n}},createPlaceholder:function(e){var i,o=e.css("position"),r=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(o)&&(o="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),float:e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(n+"placeholder",i)),e.css({position:o,left:r.left,top:r.top}),i},removePlaceholder:function(t){var e=n+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,n,i,o){return o=o||{},t.each(n,(function(t,n){var r=e.cssUnit(n);r[0]>0&&(o[n]=r[0]*i+r[1])})),o}}),t.fn.extend({effect:function(){var e=r.apply(this,arguments),n=t.effects.effect[e.effect],i=n.mode,s=e.queue,a=s||"fx",f=e.complete,c=e.mode,u=[],l=function(e){var n=t(this),r=t.effects.mode(n,c)||i;n.data(o,!0),u.push(r),i&&("show"===r||r===i&&"hide"===r)&&n.show(),i&&"none"===r||t.effects.saveStyle(n),"function"==typeof e&&e()};if(t.fx.off||!n)return c?this[c](e.duration,f):this.each((function(){f&&f.call(this)}));function d(r){var s=t(this);function a(){"function"==typeof f&&f.call(s[0]),"function"==typeof r&&r()}e.mode=u.shift(),!1===t.uiBackCompat||i?"none"===e.mode?(s[c](),a()):n.call(s[0],e,(function(){s.removeData(o),t.effects.cleanUp(s),"hide"===e.mode&&s.hide(),a()})):(s.is(":hidden")?"hide"===c:"show"===c)?(s[c](),a()):n.call(s[0],e,a)}return!1===s?this.each(l).each(d):this.queue(a,l).queue(a,d)},show:function(t){return function(e){if(s(e))return t.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(e){if(s(e))return t.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(e){if(s(e)||"boolean"==typeof e)return t.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var n=this.css(e),i=[];return t.each(["em","px","%","pt"],(function(t,e){n.indexOf(e)>0&&(i=[parseFloat(n),e])})),i},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):a(this.css("clip"),this)},transfer:function(e,n){var i=t(this),o=t(e.to),r="fixed"===o.css("position"),s=t("body"),a=r?s.scrollTop():0,f=r?s.scrollLeft():0,c=o.offset(),u={top:c.top-a,left:c.left-f,height:o.innerHeight(),width:o.innerWidth()},l=i.offset(),d=t("<div class='ui-effects-transfer'></div>");d.appendTo("body").addClass(e.className).css({top:l.top-a,left:l.left-f,height:i.innerHeight(),width:i.innerWidth(),position:r?"fixed":"absolute"}).animate(u,e.duration,e.easing,(function(){d.remove(),"function"==typeof n&&n()}))}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=a(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),e={},t.each(["Quad","Cubic","Quart","Quint","Expo"],(function(t,n){e[n]=function(e){return Math.pow(e,t+2)}})),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,(function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return t<.5?n(2*t)/2:1-n(-2*t+2)/2}})),t.effects}));

/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},a=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},l=function e(t,o,i){for(var a=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,i);i.flatten?a.push.apply(a,d):a.push({scope:u,candidates:d})}else{r.call(u,n)&&i.filter(u)&&(o||!t.includes(u))&&a.push(u);var f=u.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(u),s=!i.shadowRootFilter||i.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,i);i.flatten?a.push.apply(a,p):a.push({scope:u,candidates:p})}else l.unshift.apply(l,u.children)}}return a},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||i(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var a=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(a,"details:not([open]) *"))return!0;var l=i(e).host,u=(null==l?void 0:l.ownerDocument.contains(l))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var c=e;e;){var d=e.parentElement,f=i(e);if(d&&!d.shadowRoot&&!0===o(d))return s(e);e=e.assignedSlot?e.assignedSlot:d||f===e.ownerDocument?d:f.host}e=c}if(u)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(f(t)||u(t)<0||!p(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},m=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:p.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a(e,t.includeContainer,p.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,m)&&p(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&h(t,e)},e.tabbable=function(e,t){return function e(t){var n=[],o=[];return t.forEach((function(t,r){var i=!!t.scope,a=i?t.scope:t,l=u(a,i),c=i?e(t.candidates):a;0===l?i?n.push.apply(n,c):n.push(a):o.push({documentOrder:r,tabIndex:l,item:t,isScope:i,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)}((t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):a(e,t.includeContainer,h.bind(null,t)))},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };
  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();
      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function attach() {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, window, Drupal, drupalSettings, loadjs, _ref) {
  var isFocusable = _ref.isFocusable,
    tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }
        once('drupal-ajax', $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }
      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once('ajax', '.use-ajax-submit').forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;
    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }
    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';
    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim()
      }));
    } catch (e) {}
    responseText = '';
    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim()
      }));
    } catch (e) {}
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };
  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;
    if (!settings.progress && !element) {
      settings.progress = false;
    }
    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };
  Drupal.ajax.instances = [];
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };
  Drupal.ajax.bindAjaxLinks = function (element) {
    once('ajax', '.use-ajax', element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };
  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;
    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }
    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;
    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }
    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }
    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress: function isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        var _this = this;
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }
        return Promise.resolve(ajax.success(response, status)).then(function () {
          ajax.ajaxing = false;
          $(document).trigger('ajaxSuccess', [xmlhttprequest, _this]);
          $(document).trigger('ajaxComplete', [xmlhttprequest, _this]);
          if (--$.active === 0) {
            $(document).trigger('ajaxStop');
          }
        });
      },
      error: function error(xmlhttprequest, status, _error) {
        ajax.ajaxing = false;
      },
      complete: function complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };
    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }
    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }
    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;
    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;
    if (ajax.ajaxing) {
      return;
    }
    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }
        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }
    $(this.element).prop('disabled', true);
    if (!this.progress || !this.progress.type) {
      return;
    }
    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    var _this2 = this;
    var ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(function (executionQueue, key) {
      return executionQueue.then(function () {
        var command = response[key].command;
        if (command && ajaxCommands[command]) {
          return ajaxCommands[command](_this2, response[key], status);
        }
      });
    }, Promise.resolve());
  };
  Drupal.Ajax.prototype.success = function (response, status) {
    var _this3 = this;
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = Object.keys(response || {}).some(function (key) {
      var _response$key = response[key],
        command = _response$key.command,
        method = _response$key.method;
      return command === 'focusFirst' || command === 'invoke' && method === 'focus';
    });
    return this.commandExecutionQueue(response, status).then(function () {
      if (!focusChanged && _this3.element && !$(_this3.element).data('disable-refocus')) {
        var target = false;
        for (var n = elementParents.length - 1; !target && n >= 0; n--) {
          target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
        }
        if (target) {
          $(target).trigger('focus');
        }
      }
      if (_this3.$form && document.body.contains(_this3.$form.get(0))) {
        var settings = _this3.settings || drupalSettings;
        Drupal.attachBehaviors(_this3.$form.get(0), settings);
      }
      _this3.settings = null;
    }).catch(function (error) {
      return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
        '!error': error
      }));
    });
  };
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }
    return effect;
  };
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.wrapper).show();
    $(this.element).prop('disabled', false);
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };
  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };
  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }
      $wrapper[method]($newContent);
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }
      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }
      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }
      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);
      if (container) {
        var tabbableElements = tabbable(container);
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).forEach(function (item) {
        item.value = response.new;
      });
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },
    add_js: function add_js(ajax, response, status) {
      var parentEl = document.querySelector(response.selector || 'body');
      var settings = ajax.settings || drupalSettings;
      var allUniqueBundleIds = response.data.map(function (script) {
        var uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          async: false,
          before: function before(path, scriptEl) {
            Object.keys(script).forEach(function (attributeKey) {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });
            parentEl.appendChild(scriptEl);
            return false;
          }
        });
        return uniqueBundleId;
      });
      return new Promise(function (resolve, reject) {
        loadjs.ready(allUniqueBundleIds, {
          success: function success() {
            Drupal.attachBehaviors(parentEl, settings);
            resolve();
          },
          error: function error(depsNotFound) {
            var message = Drupal.t("The following files could not be loaded: @dependencies", {
              '@dependencies': depsNotFound.join(', ')
            });
            reject(message);
          }
        });
      });
    }
  };
  var stopEvent = function stopEvent(xhr, settings) {
    return xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress();
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      }
    },
    ajaxComplete: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          $.active++;
          return false;
        }
      }
    }
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }
    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }
  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=t(s,e)?c:a;n(s,e)}var t,a,c;"classList"in document.documentElement?(t=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(t=function(s,n){return e(n).test(s.className)},a=function(s,e){t(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var o={hasClass:t,addClass:a,removeClass:c,toggleClass:n,has:t,add:a,remove:c,toggle:n};"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:s.classie=o}(window);
;
/**
 * $Source$
 * $Author$
 * $Revision$
 * $Date$
 *
 * ====================================================================
 *
 * Copyright (C) 2002-04 Frontleaf. All Rights Reserved.
 *
 * Use, modification and distribution of this Software in source or
 * object form is strictly prohibited without prior agreement
 * with Frontleaf.  Frontleaf reserves all rights not expressly granted to
 * you in such an agreement.
 *
 * Send all inquiries to license (at) frontleaf.com.
 **/

function faGetExpirationDate(days) {

  var dateString;

  var today = new Date();
  var millis = Date.parse(today);
  today.setTime(millis + days * 24 * 60 * 60 * 1000);
  dateString = today.toString();

  return dateString;
}

function faSetCookie(name, value, days){

  var cookieString = name + "=" + escape(value) +
    ";SameSite=None;Secure;EXPIRES=" + faGetExpirationDate(days) + ";PATH=/";
  document.cookie = cookieString;

  if(! faGetCookie(name)){
    return false;
  } else {
    return true;
  }
}

function faGetCookie(name) {

  var cookieString = "" + document.cookie;

  var start = cookieString.indexOf(name);
  if (start == -1 || name == "") { return ""; }

  var end = cookieString.indexOf(';', start);
  if (end == -1) { end = cookieString.length; }

  return unescape(cookieString.substring(start + name.length + 1, end));
}

function faDeleteCookie(name) {
  faSetCookie(name, "", -1);
}
;
!function o(a,r,i){function l(t,e){if(!r[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=r[t]={exports:{}},a[t][0].call(n.exports,function(e){return l(a[t][1][e]||e)},n,n.exports,o,a,r,i)}return r[t].exports}for(var s="function"==typeof require&&require,e=0;e<i.length;e++)l(i[e]);return l}({1:[function(e,t,n){var f;f=jQuery,Drupal,window,Drupal.behaviors.tsFeedingAmerica={attach:function(e,t){function n(e){f(e).each(function(){f(this).text()==f(this).attr("title")&&f(this).removeAttr("title")})}f(document).ready(function(){0<(e=f(".promos")).length&&e.each(function(){var e=f(this).find(".primary-promos"),t=f(this).find(".secondary-promos");0!==e.length&&0!==t.length&&(0<e.children(".promo").length?t.hide():(e.hide(),t.show()))}),0<(e=f(".column-2")).length&&0<($sidebarPromos=e.find(".sidebar-promo-box:visible")).length&&$sidebarPromos.last().addClass("last-child"),0<(e=f(".interrupter")).length&&e.each(function(){var t=f(this);t.find(".int-btn-open").on("click",function(e){e.preventDefault(),t.removeClass("closed").addClass("open").parent().removeClass("closed").addClass("open")}),t.find(".int-btn-close").on("click",function(e){e.preventDefault(),t.removeClass("open").addClass("closed").parent().removeClass("open").addClass("closed"),f("body").focus();e={event:"modal_close"};e.modal_type=f(".interrupter form")[0].id,window.dataLayer.push(e)}),f(document).keyup(function(e){27===e.keyCode&&t.find(".int-btn-close").trigger("click")}),f(".ts-pop-up__close").on("click",function(e){t.find(".int-btn-close").trigger("click")})}),f('.interrupter button[type="submit"]').once().click(function(){faSetCookie("session_interrupter_status","action_taken");var e={event:"modal_submit"};e.modal_type=f(".interrupter form")[0].id,window.dataLayer.push(e)});var l,s=f("body"),e=s.find(".interrupter");if(0<e.length&&("action_taken"==(l=faGetCookie("session_interrupter_status"))||f("#nointerrupter").length?e.remove():e.each(function(){var n,t=f(this),e=0,o=!0,a=(t.hasClass("donated-media")?e=10:t.hasClass("organic-search")?e=10:t.hasClass("referral")?e=.001:t.hasClass("direct")&&(e=10),t.hasClass("holiday")&&(s.find(".interrupter.newsletter").parent().remove(),(n=f("#donation-level-amount")).once().each(function(){n.keyup(function(){var e=n[0].value,t=parseFloat(e);0<e.length&&(f("#other-donation-level").attr("disabled",!1),n.addClass("active"),f(".interrupter.holiday input[type=radio]").prop("checked",!1),f("#other-donation-level")[0].value=t,f(".interrupter.holiday label").removeClass("checked"))}),f(".interrupter.holiday label").click(function(){f(".interrupter.holiday label").removeClass("checked"),f(this).addClass("checked"),n[0].value="",n.attr("value",""),f("#other-donation-level")[0].value="",f("#other-donation-level").attr("disabled",!0),n.removeClass("active")})})),t.data("block-delay"));if(Array.isArray(a)&&a.length)for(var r=0;r<a.length;++r){var i=new RegExp("^"+a[r][0].replace("*",".*")+"$");location.pathname.match(i)&&(e=a[r][1])}0<e&&("active"==l&&(o=!1,e=0),window.setTimeout(function(){var e;o&&(t.removeClass("closed").addClass("open").parent().removeClass("closed").addClass("open"),t.show().parent().show(),t[0].focus(),faSetCookie("session_interrupter_status","active",7),(e={event:"modal_view"}).modal_type=f(".interrupter form")[0].id,window.dataLayer.push(e))},1e3*e))})),!f("body.expand-news").length)for(var t=["#recent_news_boxes>a.recent_news_item"],n=[["one"],["two","two"],["three","three","three"],["four","four","four","four"],["two","two","three","three","three"],["three","three","three","three","three","three"],["two","two","two","two","three","three","three"],["four","four","four","four","four","four","four","four"],["three","three","three","three","three","three","three","three","three"],["two","two","four","four","four","four","four","four","four","four"]],o=0;o<t.length;o++){var a=f(t[o]),r=a.length;0<r&&a.each(function(e){f(this).addClass(n[r-1][e])})}f(".section-img-hover").once().click(function(e){e.preventDefault(),window.location=f(this).parent().find("a").attr("href")}),f("#util_search_expand").once().click(function(e){e.preventDefault(),f(this).toggleClass("on"),f("#util_search_form_box").toggleClass("opened"),u("search"),f(document).keyup(function(e){27===e.keyCode&&(f("#util_search_expand").removeClass("on"),f("#util_search_form_box").removeClass("opened"))})}),f("#util_sign_up_expand").once().click(function(e){e.preventDefault(),f(this).toggleClass("on"),f("#util_sign_up_form_box").toggleClass("opened").find("input[type=email]").focus(),u("sign_up"),f(document).keyup(function(e){27===e.keyCode&&(f("#util_sign_up_expand").removeClass("on").focus(),f("#util_sign_up_form_box").removeClass("opened"))})}),f("#mainmenu button.navbar-toggle").once().click(function(){var e=f("#nav1"),t=e.hasClass("opened");u("nav1"),0==t&&e.hide(),e.animate({height:"toggle"},400,function(){e.toggleClass("opened").css("display","").css("overflow","")})});var e=!0,e=(-1<navigator.userAgent.indexOf("PTST/SpeedCurve")&&(e=!1),f(".flexslider").flexslider({animation:"slide",slideshow:e,slideshowSpeed:1e4,before:function(){f(".flex-active-slide a").attr("tabindex","-1")},after:function(e){f(".flex-active-slide a").attr("tabindex",0)},start:function(e){f(".flex-active-slide a").attr("tabindex",0),f(".slide-container .img-wrap .contextual-region button").remove(),f(".flex-control-nav").remove(),f(".flex-direction-nav a").click(function(){var e={event:"homepage_slider"};e.slide_movement=f(this).text(),window.dataLayer.push(e)})}}),f(".random-partner-image").map(function(){return f(this).data("uri")}).get()),i=f(".random-partner-image").map(function(){return f(this).data("alt")}).get(),c=e.length,c=1+Math.floor(Math.random()*c)-1,e=e[c],i=i[c];function d(e){var t=f("."+e+"-partner-image").map(function(){return f(this).data("uri")}).get(),n=f("."+e+"-partner-image").map(function(){return f(this).data("alt")}).get(),o=f("."+e+"-partner-image").map(function(){return f(this).data("node")}).get(),a=t.length,a=1+Math.floor(Math.random()*a)-1,t=t[a],n=n[a];partnerNode=o[a],f("."+e+"-img").once().attr("src",t).attr("alt",n).parent().attr("href",partnerNode)}function u(e){var t,n,o={search:{link:"util_search_expand",box:"util_search_form_box"},sign_up:{link:"util_sign_up_expand",box:"util_sign_up_form_box"},nav1:{link:"null",box:"nav1"}};for(t in delete o[e],o)o.hasOwnProperty(t)&&(f("#"+(n=o[t]).link).removeClass("on"),f("#"+n.box).removeClass("opened"))}f(".partner-image img").once().attr("src",e).attr("alt",i),d("media"),d("entertainment"),d("disaster"),d("story")}),n(f(".footer_nav_redesign a")),n(f("#footer_links a")),window.addEventListener("scroll",function(e){var t=window.pageYOffset||document.documentElement.scrollTop,n=document.querySelector("header");300<t?classie.add(n,"smaller"):classie.remove(n,"smaller")});document.querySelector("header"),document.querySelector(".tub .alert-banner")&&document.querySelector(".tub .alert-banner"),document.querySelector(".gdpr-banner .alert-banner");f(window).scroll(function(){f(".navbar-collapse").hasClass("opened")&&f(".navbar-collapse").removeClass("opened")}),f(document).ready(function(){f(".user-logged-in .block-local-tasks-block").once().prepend('<div class="show-hide"><span></span></div>'),f(".block-local-tasks-block .show-hide").once().click(function(){f(this).parent().toggleClass("active")}),f(".messages").once().click(function(){f(this).fadeOut()});var e=f(".node--type-job-opportunity .field--name-field-city .field__item").text(),t=f(".node--type-job-opportunity .field--name-field-state .field__item").text(),e=(f(".node--type-job-opportunity .field--name-field-food-bank .field__item").once().append("<br>"+e+", "+t),f(".column-2 .section-nav > .menu-element").hasClass("menu-element--active-trail")||f(".column-2 .section-nav > .menu-element").addClass("no-active-path"),f(".view-promotions-active .view-footer").once().prependTo(".view-promotions-active .pager"),f(".field--name-field-recent-items .node--view-mode-related-news-listing-item").once().each(function(){f(this).find(".field--name-field-thumb").prependTo(f(this).parent())}),f(".page-node-type-landing-page .recent-news-items").once().appendTo(".region.region-content"),f('.alink a[href$="'+window.location.pathname+'"]').parent().addClass("active"),f(".video-embed-field-lazy-play").each(function(){f(this).replaceWith('<button class="video-embed-field-lazy-play" aria-label="Play video"></button>')}),f(".watchVid").once().click(function(e){e.preventDefault(),f(".watchVid").each(function(){var e=f(this).closest("article").find(".lightbox-content .client-story-video-lazy");e.html(e.data("client-story-video-lazy"))})}),f(".field--name-field-featured-blog-post").once().each(function(){var e=f(this),t=e.find(".field--name-field-display-title").text();e.find("img").attr("alt",t.trim())}),f(".paragraph--type--two-up-partner-block .field--name-field-blog-title, .paragraph--type--two-up-partner-block .field--name-field-partner-title, .footer_nav_redesign .footer-head").once().each(function(){f(this).find("a").wrapInner("<h2>")}),f('#views-exposed-form-network-jobs-listing-block-1 #edit-title option[value!=""]')),n=e.map(function(e,t){return{t:f(t).text(),v:t.value}}).get();n.sort(function(e,t){return e.t>t.t?1:e.t<t.t?-1:0}),e.each(function(e,t){t.value=n[e].v,f(t).text(n[e].t)}),0<f(".view-thank-a-food-bank").length&&(f(".view-thank-a-food-bank").once().each(function(){var e=f(".view-thank-a-food-bank .view-content .quote-owner .value").map(function(){return f(this).text()}).get(),t=f(".view-thank-a-food-bank .view-content .quote-text .value").map(function(){return f(this).text().trim()}).get(),n=function(e){for(var t,n,o=e.length;o--;)t=Math.floor(Math.random()*(o+1)),n=e[o],e[o]=e[t],e[t]=n;return e}(Array.from(Array(t.length).keys()));f(".random-thanks .thanks p").eq(0).once().text(t[n[0]]),f(".random-thanks .name").eq(0).once().text(function(){f(this).text(e[n[0]])}),f(".random-thanks .thanks p").eq(1).once().text(t[n[1]]),f(".random-thanks .name").eq(1).once().text(function(){f(this).text(e[n[1]])}),f(".random-thanks .thanks p").eq(2).once().text(t[n[2]]),f(".random-thanks .name").eq(2).once().text(function(){f(this).text(e[n[2]])})}),f("textarea.form-control").focus(function(){jQuery(this).removeAttr("placeholder")})),0<f(".fontawesome-icon svg").length&&(t=f(".fontawesome-icon").html(),f("button.mainAccordion").once().append(t))});var o=f(".field--name-field-survey-id").text(),a=f(".field--name-field-question-id").text();0<o.length&&0<a.length&&f.ajax({dataType:"jsonp",jsonp:"callback",success:function(e){e=f(e.results).find("p:eq(1)").html();f(".field--name-field-before-number").append("<strong>"+e+"</strong>")},url:"//secure.feedingamerica.org/site/SPageServer/?pagename=GetSurveyResults&pgwrap=n&survey_id="+o+"&question_id="+a+"&callback=?"}),f("img:not([alt])").attr("alt","")}}},{}]},{},[1]);
;
/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);void 0===a.rtl&&"rtl"==$("html").attr("dir")&&(a.rtl=!0),n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":n.vars.rtl?"marginRight":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=n.vars.rtl?37===t?n.getTarget("next"):39===t&&n.getTarget("prev"):39===t?n.getTarget("next"):37===t&&n.getTarget("prev");n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var r=t<0?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(r,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),s&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),r?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),r;r=n.vars.rtl?-1*(t.offset().right-$(n).scrollLeft()):t.offset().left-$(n).scrollLeft(),r<=0&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,r;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var s=0;s<n.pagingCount;s++){if(r=n.slides.eq(s),void 0===r.attr("data-thumb-alt")&&r.attr("data-thumb-alt",""),a=$("<a></a>").attr("href","#").text(t),"thumbnails"===n.vars.controlNav&&(a=$("<img/>").attr("src",r.attr("data-thumb"))),""!==r.attr("data-thumb-alt")&&a.attr("alt",r.attr("data-thumb-alt")),"thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=r.attr("data-thumbcaption");if(""!==c&&void 0!==c){var d=$("<span></span>").addClass(i+"caption").text(c);a.append(d)}}var u=$("<li>");a.appendTo(u),u.append("</li>"),n.controlNavScaffold.append(u),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;""!==l&&l!==e.type||(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),""!==l&&l!==e.type||($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),w=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;if(w+=d?i:n,m=(a.vars.rtl?-1:1)*w,x=d?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA)return void setImmediate(function(){t._gesture.stop()});(!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=w/(0===a.currentSlide&&w<0||a.currentSlide===a.last&&w>0?Math.abs(w)/c+2:1)),a.setProps(l+m,"setTouch")))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}s=null,o=null,m=null,l=null,w=0}}var s,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,w=0;r?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,s=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?s-b:(n.vars.rtl?-1:1)*(s-y),x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),s=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).innerHeight()},e):t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause();break}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,r,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&r){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)s?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return!!t||(!(!m||n.currentItem!==n.count-1||0!==e||"prev"!==n.direction)||(!m||0!==n.currentItem||e!==n.pagingCount-1||"next"===n.direction)&&(!(e===n.currentSlide&&!m)&&(!!n.vars.animationLoop||(!n.atEnd||0!==n.currentSlide||e!==a||"next"===n.direction)&&(!n.atEnd||n.currentSlide!==a||0!==e||"next"!==n.direction))))},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e||(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo;return function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}()*(n.vars.rtl?1:-1)+"px"}();n.transitions&&(i=n.isFirefox?d?"translate3d(0,"+i+",0)":"translate3d("+parseInt(i)+"px,0,0)":d?"translate3d(0,"+i+",0)":"translate3d("+(n.vars.rtl?-1:1)*parseInt(i)+"px,0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.vars.rtl?n.slides.css({width:"100%",float:"right",marginLeft:"-100%",position:"relative"}):n.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.vars.rtl&&n.isFirefox?n.newSlides.css({width:n.computedW,marginRight:n.computedM,float:"right",display:"block"}):n.newSlides.css({width:n.computedW,marginRight:n.computedM,float:"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.isFirefox&&(n.w=n.width()),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,isFirefox:!1,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){},rtl:!1},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&!1===e.allowOneSlide||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
;
if (typeof FA == 'undefined') { // Make sure FA namespace is initialized
  var FA = {};
}

FA.httpWebService = function() { // FA web service helper

  this.options = {
    url:   'http://192.237.132.147/fawebservice.asmx',
    xmlns: 'http://feedingamerica.org/',
    dataType: 'xml'
  };

  // Private properties
  var self = this;

  // Public methods
  this.init = function(options) {
    self.options = jQuery.extend({}, self.options, options);
  };

  this.request = function(method, data, path, successCallback, errorCallback) {
    var url = self.options.url + '/' + method;
    jQuery.ajax({
      async: true,
      url: url,
      type: 'GET',
      contentType: 'text/plain',
      data: data,
      // cache: true,
      dataType: self.options.dataType,
      success: function (data) {
        if (path == null) {
          if (self.options.dataType == 'json') {
            successCallback(data);
          }
          else {
            successCallback(self.toXML(data));
          }
        } else {
          if (self.options.dataType == 'xml') {
            data = self.toJSON(data);
          }
          if (path != 'https://www.feedingamerica.org/') {
            data = digestResponse(path, data);
          }
          successCallback(data);
        }
      },
      error: function (data) {
        if (typeof(errorCallback) == 'function') {
          errorCallback(data);
        }
      }
    });
  };

  this.toXML = function(data) {
    if (jQuery.isXMLDoc(data)) {
      return data;
    }
    return jQuery.parseXML(data);
  };

  this.toJSON = function(data) {
    if (jQuery.xml2json) {
      return jQuery.xml2json(data);
    }
    warn("jQuery.soap: Missing JQuery Plugin 'xml2json'");
  };

  this.getArrayOfChildren = function(data) {
    var result = null;
    if (data.childNodes) {
      result = [];
      var children = data.childNodes;
      for (var i = 0 ; i < children.length ; i++) {
        var node = children[i];
        switch (node.nodeType) {
          case 1 : // ELEMENT_NODE
          result.push(node);
        }
      }
    }
    return result;
  }

  // Private methods
  function digestResponse(path, data) {
    var path = path.split('https://www.feedingamerica.org/');
    for (var i = 0; i < path.length; i++) {
      var key = path[i];
      if (!data[key] && key == 'Body') {
        key = 'soap:Body';
      }
      if (data[key]) {
        data = data[key];
      } else {
        return null;
      }
    }
    if (data.constructor == Array) {
      return data;
    } else {
      return [data];
    }
  }


  var localCache = {
    timeout: 86400,
    data: {},
    remove: function (url) {
      delete localCache.data[url];
    },
    exist: function (url) {
      return !!localCache.data[url] && ((new Date().getTime() - localCache.data[url]._) < localCache.timeout);
    },
    get: function (url) {
      // console.log('Getting in cache for url' + url);
      return localCache.data[url].data;
    },
    set: function (url, cachedData, callback) {
      localCache.remove(url);
      localCache.data[url] = {
        _: new Date().getTime(),
        data: cachedData
      };
      if (jQuery.isFunction(callback)) callback(cachedData);
    }
  };

  jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    if (options.cache) {
      var complete = originalOptions.complete || jQuery.noop,
        url = originalOptions.url;
      //remove jQuery cache as we have our own localCache
      options.cache = false;
      options.beforeSend = function () {
        if (localCache.exist(url)) {
          complete(localCache.get(url));
          return false;
        }
        return true;
      };
      options.complete = function (data, textStatus) {
        localCache.set(url, data, complete);
      };
    }
  });

};
FA.ws = new FA.httpWebService();
;
/* luminateExtend.js | Version: 1.8.1 (18-OCT-2016) */
!function(a){var b=function(b){return b&&a.inArray(b,["es_US","en_CA","fr_CA","en_GB","en_AU"])<0&&(b="en_US"),b},c=function(a){return a&&(a=b(a),luminateExtend.sessionVars.set("locale",a)),a},d=function(a,b){return(a?luminateExtend.global.path.secure+"S":luminateExtend.global.path.nonsecure)+"PageServer"+(luminateExtend.global.routingId&&""!==luminateExtend.global.routingId?";"+luminateExtend.global.routingId:"")+"?pagename=luminateExtend_server&pgwrap=n"+(b?"&"+b:"")},e=function(b,c){if(b.responseFilter&&b.responseFilter.array&&b.responseFilter.filter&&luminateExtend.utils.stringToObj(b.responseFilter.array,c)){var e,f,d=b.responseFilter.filter.split("==")[0].split("!=")[0].replace(/^\s+|\s+$/g,"");if(b.responseFilter.filter.indexOf("!=")!==-1?(e="nequal",f=b.responseFilter.filter.split("!=")[1]):b.responseFilter.filter.indexOf("==")!==-1&&(e="equal",f=b.responseFilter.filter.split("==")[1]),e&&f){f=f.replace(/^\s+|\s+$/g,"");var g=[],h=!1;if(a.each(luminateExtend.utils.ensureArray(luminateExtend.utils.stringToObj(b.responseFilter.array,c)),function(){"nequal"===e&&this[d]===f||"equal"===e&&this[d]!==f?h=!0:g.push(this)}),h){var i=b.responseFilter.array.split(".");a.each(c,function(b,d){b===i[0]&&a.each(d,function(d,e){d===i[1]&&(2===i.length?c[b][d]=g:a.each(e,function(e,f){e===i[2]&&(3===i.length?c[b][d][e]=g:a.each(f,function(a,f){a===i[3]&&4===i.length&&(c[b][d][e][a]=g)}))}))})})}}}var j=a.noop;b.callback&&("function"==typeof b.callback?j=b.callback:b.callback.error&&c.errorResponse?j=b.callback.error:b.callback.success&&!c.errorResponse&&(j=b.callback.success));var k=b.data.indexOf("&method=login")!==-1&&b.data.indexOf("&method=loginTest")===-1,l=b.data.indexOf("&method=logout")!==-1;if(k||l){var m=function(){j(c)},n={callback:m,useCache:!1,useHTTPS:b.useHTTPS};k&&c.loginResponse&&c.loginResponse.nonce&&(n.nonce="NONCE_TOKEN="+c.loginResponse.nonce),luminateExtend.api.getAuth(n)}else j(c)};window.luminateExtend=function(a){luminateExtend.init(a||{})},luminateExtend.library={version:"1.7.1"},luminateExtend.global={update:function(b,d){b&&(b.length?d&&("locale"===b&&(d=c(d)),luminateExtend.global[b]=d):(b.locale&&(b.locale=c(b.locale)),luminateExtend.global=a.extend(luminateExtend.global,b)))}},luminateExtend.init=function(c){var d=a.extend({apiCommon:{},auth:{type:"auth"},path:{}},c||{});if(d.locale&&(d.locale=b(d.locale)),d.supportsCORS=!1,window.XMLHttpRequest){var e=new XMLHttpRequest;"withCredentials"in e&&(d.supportsCORS=!0)}return luminateExtend.global=a.extend(luminateExtend.global,d),luminateExtend},luminateExtend.api=function(a){luminateExtend.api.request(a||{})},luminateExtend.api.bind=function(b){return b=b||"form.luminateApi",a(b).length>0&&a(b).each(function(){"form"===this.nodeName.toLowerCase()&&a(this).bind("submit",function(b){b.cancelBubble=!0,b.returnValue=!1,b.stopPropagation&&(b.stopPropagation(),b.preventDefault()),a(this).attr("id")||a(this).attr("id","luminateApi-"+(new Date).getTime());var g,c=a(this).attr("action"),d=c.split("?"),e=a(this).data("luminateapi"),f=d[0].indexOf("https://www.feedingamerica.org/site/")!==-1?d[0].split("https://www.feedingamerica.org/site/")[1]:d[0],h=a(this).attr("enctype"),i=d.length>1?d[1]:"",j="#"+a(this).attr("id"),k=!1,l=!1;e&&(e.callback&&(g=luminateExtend.utils.stringToObj(e.callback)),e.requiresAuth&&"true"===e.requiresAuth&&(k=!0),(0===c.indexOf("summer-food-service-program.html")||"https:"===window.location.protocol&&c.indexOf("http")===-1)&&(l=!0)),luminateExtend.api.request({api:f,callback:g,contentType:h,data:i,form:j,requiresAuth:k,useHTTPS:l})})}),luminateExtend},luminateExtend.api.getAuth=function(b){var c=a.extend({useCache:!0,useHTTPS:!1},b||{});if(luminateExtend.api.getAuthLoad)if(luminateExtend.api.getAuthLoad=!1,c.useCache&&luminateExtend.global.auth.type&&luminateExtend.global.auth.token)luminateExtend.api.getAuthLoad=!0,c.callback&&c.callback();else{var e=function(a){luminateExtend.global.update(a),luminateExtend.api.getAuthLoad=!0,c.callback&&c.callback()};luminateExtend.global.supportsCORS?a.ajax({url:(c.useHTTPS?luminateExtend.global.path.secure:luminateExtend.global.path.nonsecure)+"CRConsAPI",data:"luminateExtend="+luminateExtend.library.version+(c.nonce&&""!==c.nonce?"&"+c.nonce:"")+"&api_key="+luminateExtend.global.apiKey+"&method=getLoginUrl&response_format=json&v=1.0",xhrFields:{withCredentials:!0},dataType:"json",success:function(a){var b=a.getLoginUrlResponse,c=b.url,d=b.routing_id,f=b.JSESSIONID;d||c.indexOf("CRConsAPI;jsessionid=")===-1||(d=c.split("CRConsAPI;jsessionid=")[1].split("?")[0]),e({auth:{type:"auth",token:b.token},routingId:d?"jsessionid="+d:"",sessionCookie:f?"JSESSIONID="+f:""})}}):a.ajax({url:d(c.useHTTPS,"action=getAuth&callback=?"),dataType:"jsonp",success:e})}else{var f=function(){luminateExtend.api.getAuth(c)};setTimeout(f,1e3)}},luminateExtend.api.getAuthLoad=!0;var f=function(b){var c=a.extend({contentType:"application/x-www-form-urlencoded",data:"",requiresAuth:!1,useHTTPS:null},b||{}),f=["addressbook","advocacy","connect","cons","content","datasync","donation","email","group","orgevent","recurring","survey","teamraiser"];if(a.inArray(c.api.toLowerCase(),f)>=0&&(c.api="CR"+c.api.charAt(0).toUpperCase()+c.api.slice(1).toLowerCase()+"API",c.api=c.api.replace("Addressbook","AddressBook").replace("Datasync","DataSync").replace("Orgevent","OrgEvent")),luminateExtend.global.path.nonsecure&&luminateExtend.global.path.secure&&luminateExtend.global.apiKey&&c.api){"multipart/form-data"===c.contentType.split(";")[0]?c.contentType="multipart/form-data":c.contentType="application/x-www-form-urlencoded",c.contentType+="; charset=UTF-8",c.data="luminateExtend="+luminateExtend.library.version+(""===c.data?"":"&"+c.data),c.form&&a(c.form).length>0&&(c.data+="&"+a(c.form).eq(0).serialize()),c.data.indexOf("&api_key=")===-1&&(c.data+="&api_key="+luminateExtend.global.apiKey),luminateExtend.global.apiCommon.centerId&&c.data.indexOf("&center_id=")===-1&&(c.data+="&center_id="+luminateExtend.global.apiCommon.centerId),luminateExtend.global.apiCommon.categoryId&&c.data.indexOf("&list_category_id=")===-1&&(c.data+="&list_category_id="+luminateExtend.global.apiCommon.categoryId),c.data.indexOf("&response_format=xml")!==-1?c.data=c.data.replace(/&response_format=xml/g,"&response_format=json"):c.data.indexOf("&response_format=")===-1&&(c.data+="&response_format=json"),luminateExtend.global.apiCommon.source&&c.data.indexOf("&source=")===-1&&(c.data+="&source="+luminateExtend.global.apiCommon.source),luminateExtend.global.apiCommon.subSource&&c.data.indexOf("&sub_source=")===-1&&(c.data+="&sub_source="+luminateExtend.global.apiCommon.subSource),c.data.indexOf("&suppress_response_codes=")===-1&&(c.data+="&suppress_response_codes=true"),luminateExtend.global.locale&&c.data.indexOf("&s_locale=")===-1&&(c.data+="&s_locale="+luminateExtend.global.locale),c.data.indexOf("&v=")===-1&&(c.data+="&v=1.0");var g="http://",h=luminateExtend.global.path.nonsecure.split("http://")[1];"CRDonationAPI"===c.api||"CRTeamraiserAPI"===c.api||"CRConnectAPI"!==c.api&&("https:"===window.location.protocol&&null==c.useHTTPS||1==c.useHTTPS)?c.useHTTPS=!0:c.useHTTPS=!1,c.useHTTPS&&(g="https:///",h=luminateExtend.global.path.secure.split("https:///")[1]),g+=h+c.api;var i=!1,j=!1,k=!1;window.location.protocol===g.split("//")[0]&&document.domain===h.split("https://www.feedingamerica.org/")[0]?(i=!0,j=!0):luminateExtend.global.supportsCORS?j=!0:"postMessage"in window&&(k=!0);var l;j?l=function(){luminateExtend.global.routingId&&""!==luminateExtend.global.routingId&&(g+=";"+luminateExtend.global.routingId),c.requiresAuth&&c.data.indexOf("&"+luminateExtend.global.auth.type+"=")===-1&&(c.data+="&"+luminateExtend.global.auth.type+"="+luminateExtend.global.auth.token),luminateExtend.global.sessionCookie&&""!==luminateExtend.global.sessionCookie&&(c.data+="&"+luminateExtend.global.sessionCookie),c.data+="&ts="+(new Date).getTime(),a.ajax({url:g,data:c.data,xhrFields:{withCredentials:!0},contentType:c.contentType,dataType:"json",type:"POST",success:function(a){e(c,a)}})}:k&&(l=function(){var b=(new Date).getTime(),f="luminateApiPostMessage"+b,h=d(c.useHTTPS,"action=postMessage");luminateExtend.global.routingId&&""!==luminateExtend.global.routingId&&(g+=";"+luminateExtend.global.routingId),c.requiresAuth&&c.data.indexOf("&"+luminateExtend.global.auth.type+"=")===-1&&(c.data+="&"+luminateExtend.global.auth.type+"="+luminateExtend.global.auth.token),luminateExtend.global.sessionCookie&&""!==luminateExtend.global.sessionCookie&&(c.data+="&"+luminateExtend.global.sessionCookie),c.data+="&ts="+b,luminateExtend.api.request.postMessageEventHandler||(luminateExtend.api.request.postMessageEventHandler={},luminateExtend.api.request.postMessageEventHandler.handler=function(b){if(luminateExtend.global.path.nonsecure.indexOf(b.origin)!==-1||luminateExtend.global.path.secure.indexOf(b.origin)!==-1){var c=a.parseJSON(b.data),d=c.postMessageFrameId,e=a.parseJSON(decodeURIComponent(c.response));luminateExtend.api.request.postMessageEventHandler[d]&&luminateExtend.api.request.postMessageEventHandler[d](d,e)}},"undefined"!=typeof window.addEventListener?window.addEventListener("message",luminateExtend.api.request.postMessageEventHandler.handler,!1):"undefined"!=typeof window.attachEvent&&window.attachEvent("onmessage",luminateExtend.api.request.postMessageEventHandler.handler)),luminateExtend.api.request.postMessageEventHandler[f]=function(b,d){e(c,d),a("#"+b).remove(),delete luminateExtend.api.request.postMessageEventHandler[b]},a("body").append('<iframe style="position: absolute; top: 0; left: -999em;" name="'+f+'" id="'+f+'"></iframe>'),a("#"+f).bind("load",function(){var b='{"postMessageFrameId": "'+a(this).attr("id")+'", "requestUrl": "'+g+'", "requestContentType": "'+c.contentType+'", "requestData": "'+c.data+'"}',d=g.split("https://www.feedingamerica.org/site/")[0].split("https://www.feedingamerica.org/admin/")[0];document.getElementById(a(this).attr("id")).contentWindow.postMessage(b,d)}),a("#"+f).attr("src",h)}),c.requiresAuth||!j&&!i&&!luminateExtend.global.sessionCookie?luminateExtend.api.getAuth({callback:l,useHTTPS:c.useHTTPS}):l()}};luminateExtend.api.request=function(b){if(a.isArray(b)){b.reverse();var c=[];a.each(b,function(d){var e=a.extend({async:!0},this);if(e.async||d===b.length-1)c.push(e);else{var g=b[d+1];if(g.callback&&"function"!=typeof g.callback){var h=g.callback.success||a.noop;g.callback.success=function(a){h(a),f(e)}}else{var g=b[d+1],i=g.callback||a.noop;g.callback={success:function(a){i(a),f(e)},error:function(a){i(a)}}}}}),c.reverse(),a.each(c,function(){f(this)})}else f(b)},luminateExtend.sessionVars={set:function(a,b,c){var d={};c&&(d.callback=c),a&&(d.data="s_"+a+"="+(b||""),luminateExtend.utils.ping(d))}},luminateExtend.tags=function(a,b){luminateExtend.tags.parse(a,b)},luminateExtend.tags.parse=function(b,c){luminateExtend.widgets?luminateExtend.widgets(b,c):(b=b&&"all"!==b?luminateExtend.utils.ensureArray(b):["cons"],c=c||"body",a.each(b,function(b,d){if("cons"===d){var e=a(c).find(document.getElementsByTagName("luminate:cons"));if(e.length>0){var f=function(b){e.each(function(){b.getConsResponse?a(this).replaceWith(luminateExtend.utils.stringToObj(a(this).attr("field"),b.getConsResponse)):a(this).remove()})};luminateExtend.api.request({api:"cons",callback:f,data:"method=getUser",requiresAuth:!0})}}}))},luminateExtend.utils={ensureArray:function(b){return a.isArray(b)?b:b?[b]:[]},stringToObj:function(a,b){var c=b||window;if(a)for(var d=a.split("."),e=0;e<d.length;e++){if(e<d.length-1&&!c[d[e]])return{};c=c[d[e]]}return c},ping:function(b){var c=a.extend({data:null},b||{}),d="luminatePing"+(new Date).getTime();a("body").append('<img style="position: absolute; left: -999em; top: 0;" id="'+d+'" />'),a("#"+d).bind("load",function(){a(this).remove(),c.callback&&c.callback()}),a("#"+d).attr("src",("https:"===window.location.protocol?luminateExtend.global.path.secure:luminateExtend.global.path.nonsecure)+"EstablishSession"+(luminateExtend.global.routingId&&""!==luminateExtend.global.routingId?";"+luminateExtend.global.routingId:"")+"?"+(null==c.data?"":c.data+"&")+"NEXTURL="+encodeURIComponent(("https:"===window.location.protocol?luminateExtend.global.path.secure:luminateExtend.global.path.nonsecure)+"PixelServer"))},simpleDateFormat:function(c,d,e){if(e=e||luminateExtend.global.locale,e=b(e),d=d||(a.inArray(e,["en_CA","fr_CA","en_GB","en_AU"])>=0?"d/M/yy":"M/d/yy"),c=c||new Date,!(c instanceof Date)){var f=c.split("T")[0].split("-"),g=c.split("T").length>1?c.split("T")[1].split(".")[0].split("Z")[0].split("-")[0].split(":"):["00","00","00"];c=new Date(f[0],f[1]-1,f[2],g[0],g[1],g[2])}var h=function(a){return a=""+a,0===a.indexOf("0")&&"0"!==a?a.substring(1):a},i=function(a){return a=Number(a),isNaN(a)?"00":(a<10?"0":"")+a},j={month:i(c.getMonth()+1),date:i(c.getDate()),year:i(c.getFullYear()),day:c.getDay(),hour24:c.getHours(),hour12:c.getHours(),minutes:i(c.getMinutes()),ampm:"AM"};j.hour24>11&&(j.ampm="PM"),j.hour24=i(j.hour24),0===j.hour12&&(j.hour12=12),j.hour12>12&&(j.hour12=j.hour12-12),j.hour12=i(j.hour12);var k,l=function(a){var b=a.replace(/yy+(?=y)/g,"yy").replace(/MMM+(?=M)/g,"MMM").replace(/d+(?=d)/g,"d").replace(/EEE+(?=E)/g,"EEE").replace(/a+(?=a)/g,"").replace(/k+(?=k)/g,"k").replace(/h+(?=h)/g,"h").replace(/m+(?=m)/g,"m"),c=b.replace(/yyy/g,j.year).replace(/yy/g,j.year.substring(2)).replace(/y/g,j.year).replace(/dd/g,j.date).replace(/d/g,h(j.date)),d=function(a,b,c){for(var d=1;d<a.length;d++)if(!isNaN(a[d].substring(0,1))){var e=a[d].substring(0,2);a[d]=a[d].substring(2),isNaN(e.substring(1))&&(a[d]=e.substring(1)+a[d],e=e.substring(0,1)),e=Number(e),e>23&&(e=23);var f="+"===c?e:0-e;"kk"===b||"k"===b?(f=Number(j.hour24)+f,f>24?f-=24:f<0&&(f+=24)):(f=Number(j.hour12)+f,f>24?f-=24:f<0&&(f+=24),f>12&&(f-=12)),f=""+f,"kk"!==b&&"hh"!==b||(f=i(f)),("h"===b&&0===f||"hh"===b&&"00"===f)&&(f="12"),a[d]=f+a[d]}return a.join("")};c.indexOf("k+")!==-1&&(c=d(c.split("kk+"),"kk","+"),c=d(c.split("k+"),"k","+")),c.indexOf("k-")!==-1&&(c=d(c.split("kk-"),"kk","-"),c=d(c.split("k-"),"k","-")),c=c.replace(/kk/g,j.hour24).replace(/k/g,h(j.hour24)),c.indexOf("h+")!==-1&&(c=d(c.split("hh+"),"hh","+"),c=d(c.split("h+"),"h","+")),c.indexOf("h-")!==-1&&(c=d(c.split("hh-"),"hh","-"),c=d(c.split("h-"),"h","-")),c=c.replace(/hh/g,j.hour12<12&&j.hour12.indexOf&&0!==j.hour12.indexOf("0")?"0"+j.hour12:j.hour12).replace(/h/g,h(j.hour12)),c=c.replace(/mm/g,j.minutes).replace(/m/g,h(j.minutes)),c=c.replace(/a/g,"A");var f=["January","February","march","april","may","June","July","august","September","October","November","December"];"es_US"===e&&(f=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]),"fr_CA"===e&&(f=["janvier","f&#233;vrier","mars","avril","mai","juin","juillet","ao&#251;t","septembre","octobre","novembre","d&#233;cembre"]),c=c.replace(/MMMM/g,f[Number(j.month)-1]).replace(/MMM/g,f[Number(j.month)-1].substring(0,3)).replace(/MM/g,j.month).replace(/M/g,h(j.month)).replace(/march/g,"March").replace(/may/g,"May").replace(/Mayo/g,"mayo");var g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return"es_US"===e&&(g=["domingo","lunes","martes","mi&eacute;rcoles","jueves","viernes","s&aacute;bado"]),"fr_CA"===e&&(g=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]),c=c.replace(/EEEE/g,g[j.day]).replace(/EEE/g,g[j.day].substring(0,3)).replace(/EE/g,g[j.day].substring(0,3)).replace(/E/g,g[j.day].substring(0,3)),c=c.replace(/A/g,j.ampm).replace(/april/g,"April").replace(/august/g,"August")};if(d.indexOf("'")!==-1){var m=d.replace(/\'+(?=\')/g,"''").split("''");if(1===m.length){m=d.split("'");for(var n=0;n<m.length;n++)n%2===0&&(m[n]=l(m[n]));return m.join("")}for(var n=0;n<m.length;n++){for(var o=m[n].split("'"),p=0;p<o.length;p++)p%2===0&&(o[p]=l(o[p]));m[n]=o.join("")}return m.join("'")}return k=l(d)}}}("undefined"==typeof jQuery&&"function"==typeof Zepto?Zepto:jQuery);;
(function ($, Drupal) {
  Drupal.behaviors.tsFeedingAmericaEmailSignup = {
    attach: function (context, settings) {

      luminateExtend({
        apiKey: 'B3AC0NF33D',
        path: {
          nonsecure: 'http://help.feedingamerica.org/site/',
          secure: 'https://secure.feedingamerica.org/site/'
        }
      });

      retryEmailSignup = function ( form_id ) {
        var form = $('#' + form_id);
        form.prev('.alert').remove();
        form.show();
      };

      /* if the Survey is submitted succesfully, send them to the donation form */
      /* if there is an error, display it inline */
      window.submitSurveyCallbackDefault = {
        error: function (data) {
          // console.log('default callback - error');
          //        console.log('error function ' + data.errorResponse.message);
          $('form.signup-form').prev('.alert').remove();
          $('form.signup-form').hide();
          $('form.signup-form')
            .before('<div class="alert alert-danger" aria-live="polite">' +
            'We encountered an unexpected error. Please try again later.' +
            '</div>');
        },
        success: function (data) {
          // console.log('default callback - success');
          if (data.submitSurveyResponse.success == 'false') {
            var surveyErrors = luminateExtend.utils.ensureArray(data.submitSurveyResponse.errors);
            $.each(surveyErrors, function () {
              if (this.questionInError) { $('input[name="question_' + this.questionInError + '"]').before('<div class="alert alert-danger" aria-live="polite">' + this.errorMessage +'</div>'); }
            });
          }
          else {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'formSubmission',
              'formType': 'Email Signup'
            });
            // On success, redirect (if url is set) or show a message.
            if ( $('.redirect-url').text().length > 0) {
              window.location = $('.redirect-url').text();
            } else {
              $('.content-signup-form').hide().after('<p>Thank you for signing up!<br>' +
              'You will now receive our monthly newsletter and timely alerts with hunger facts, stories of hope, and information about how you can help fight hunger in America.</p>');
            }
          }
        }
      };

      /* if the Survey is submitted succesfully, send them to the donation form */
      /* if there is an error, display it inline */
      window.submitInlineCallbackDefault = {
        error: function (data) {
          var inlineForm = $('#inline_promo_form');
          inlineForm
            .removeClass('spinner')
            .prev('.alert')
            .remove();
          inlineForm.hide();
          inlineForm
            .removeClass('spinner')
            .before('<div class="alert alert-danger" aria-live="polite">' +
            'We encountered an unexpected error. Please try again later.' +
            '</div>');
        },
        success: function (data) {
          // console.log('default callback - success');
          if (data.submitSurveyResponse.success == 'false') {
            var surveyErrors = luminateExtend.utils.ensureArray(data.submitSurveyResponse.errors);
            $.each(surveyErrors, function () {
              if (this.questionInError) { $('input[name="question_' + this.questionInError + '"]').before('<div class="alert alert-danger" aria-live="polite">' + this.errorMessage +'</div>'); }
            });
          }
          else {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'formSubmission',
              'formType': 'Email Signup'
            });
            // On success, redirect (if url is set) or show a message.
            if ( $('.redirect-url').text().length > 0) {
              window.location = $('.redirect-url').text();
            } else {
              $('#inline_promo_form')
                .removeClass('spinner')
                .before('<div class="alert" aria-live="polite">' +
                  'Thank you for signing up!' +
                  '</div>')
                .find("input[type=email]").val("");
            }
          }
        }
      };

      /* Header email signup - it currently just says thank you. */
      /* It could be a redirect by updating the form. */
      window.submitUtilCallbackDefault = {
        error: function (data) {
          $('form.signup-form').prev('.alert').remove();
          $('form.signup-form').hide();
          $('form.signup-form')
            .before('<div class="alert alert-danger" aria-live="polite">' +
            'We encountered an unexpected error. Please try again later.' +
            '</div>');
        },
        success: function (data) {
          if (data.submitSurveyResponse.success == 'false') {
            var surveyErrors = luminateExtend.utils.ensureArray(data.submitSurveyResponse.errors);
            $.each(surveyErrors, function () {
              if (this.questionInError) { $('input[name="question_' + this.questionInError + '"]').before('<div class="alert alert-danger" aria-live="polite">' + this.errorMessage +'</div>'); }
            });
          }
          else {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'formSubmission',
              'formType': 'Email Signup'
            });
            // On success, redirect (if url is set) or show a message.
            if ( $('.redirect-url').text().length > 0) {
              window.location = $('.redirect-url').text();
            } else {
              $('#util_sign_up_form').before('<p class="success-message">Thank you for signing up!</p>');
            }
          }
        }
      };

      /* Download signup - added for the Summer Hunger campaign. */
      /* It could be a redirect by updating the form. */
      window.submitDownloadCallback = {
        error: function (data) {
          $('form.signup-form').prev('.alert').remove();
          $('form.signup-form').removeClass('spinner').hide();
          $('form.signup-form')
            .before('<div class="alert alert-danger" aria-live="polite">' +
            'We encountered an unexpected error. Please try again later.' +
            '</div>');
        },
        success: function (data) {
          if (data.submitSurveyResponse.success == 'false') {
            var surveyErrors = luminateExtend.utils.ensureArray(data.submitSurveyResponse.errors);
            $.each(surveyErrors, function () {
              if (this.questionInError) { $('input[name="question_' + this.questionInError + '"]').before('<div class="alert alert-danger" aria-live="polite">' + this.errorMessage +'</div>'); }
            });
          }
          else {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'formSubmission',
              'formType': 'Email Signup'
            });
            // On success, redirect (if url is set) or show a message.
            if ( $('.redirect-url').text().length > 0) {
              window.location = $('.redirect-url').text();
            } else {
              $('#sign_up_and_download_form')
                .removeClass('spinner')
                .after('<p class="download-message">Thank you for signing up. Download your <a href="https://www.feedingamerica.org/sites/default/files/2023-04/summer-action-plan-2023.pdf" download>Summer Action Plan</a>. Keep an eye on your inbox for more ways to help end hunger in the United States.</p>')
                .find('#pledge-to-volunteer-bttn').prop("disabled", true);
              window.open('https://www.feedingamerica.org/sites/default/files/2023-04/summer-action-plan-2023.pdf', '_blank');
            }
          }
        }
      };

      /* if the Survey is submitted succesfully, send them to the donation form */
      /* if there is an error, display it inline */
      window.submitHomepageSurveyCallback = {
        error: function (data) {
          //				console.log('error function ' + data.errorResponse.message);
          $('form.signup-form').prev('.alert').remove();
          $('form.signup-form').hide();
          $('form.signup-form')
            .before('<div class="alert alert-danger" aria-live="polite">' +
              'We encountered an unexpected error. Please try again later.' +
              '</div>');
        },
        success: function (data) {
          if (data.submitSurveyResponse.success == 'false') {
            var surveyErrors = luminateExtend.utils.ensureArray(data.submitSurveyResponse.errors);
            $.each(surveyErrors, function () {
              if (this.questionInError) {
                $('input[name="question_' + this.questionInError + '"]').before('<div class="alert alert-danger" aria-live="polite">' +
                    this.errorMessage +
                    '</div>');
              }
            });
          }
          else {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'formSubmission',
              'formType': 'Email Signup'
            });
            // on success send them to the donation form
            if (data.submitSurveyResponse.nextUrl.length > 0) {
              window.location = data.submitSurveyResponse.nextUrl;
            }
            else {
              window.location = 'https://secure.feedingamerica.org/site/Donation2';
            }
          }
        }
      };

      /* if the Survey is submitted succesfully, send them to the donation form */
      /* if there is an error, display it inline */
      window.submitQuizCallback = {
        error: function (data) {
          // console.log('default callback - error');
          //        console.log('error function ' + data.errorResponse.message);
          $('form.signup-form').prev('.alert').remove();
          $('form.signup-form').hide();
          $('form.signup-form')
            .before('<div class="alert alert-danger" aria-live="polite">' +
            'We encountered an unexpected error. Please try again later.' +
            '</div>');
        },
        success: function (data) {
          // console.log('default callback - success');
          if (data.submitSurveyResponse.success == 'false') {
            var surveyErrors = luminateExtend.utils.ensureArray(data.submitSurveyResponse.errors);
            $.each(surveyErrors, function () {
              if (this.questionInError) { $('input[name="question_' + this.questionInError + '"]').before('<div class="alert alert-danger" aria-live="polite">' + this.errorMessage +'</div>'); }
            });
          }
          else {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'formSubmission',
              'formType': 'Email Signup'
            });
            // On success, redirect (if url is set) or show a message.
            if ( $('.redirect-url').text().length > 0) {
              window.location = $('.redirect-url').text();
            } else {
              $("#correct_response, #incorrect_response, .quiz-form-wrapper").hide();
              $(".quiz--joinus-form").css("display", "flex");
            }
          }
        }
      };

      /* Newsletter signup */
      window.submitInterrupterCallback = {
        error: function (data) {
          console.log('newsletter submit - error');
        },
        success: function (data) {
          if (data.submitSurveyResponse.success == 'false') {
            console.log('newsletter submit - success: false');
          }
          else {
            $('.newsletter .thank-you').show();
            $('form.signup-form #sign_up_button').hide();
            $('form.signup-form #sign_up_query_2').hide();
          }
        }
      };

      var checkEmail = function (email, form) {
        var emailVerifyApi = 'https://api.emailable.com/v1/verify?email=' + encodeURIComponent(email) + '&api_key=live_7f1954ca3e2d233d9c65';
        var form_id = form.attr('id');
        $('.loading-white').remove();
        $('.kickbox-reason', form).val('');
        $('.kickbox-accept-all-value', form).val('');
        form.find('#sign_up_button').append('<div class="loading-white clicked"></div>').show();
        // $('.kickbox-disposable-value', form).val('');
        // $('.kickbox-sendex-value', form).val('');
        // console.log('emailVerifyApi: '+emailVerifyApi);
        // execute remote request to perform email verification. Any errors will appear in the developer console (e.g. viewable using Chrome developer tools)
        $.getJSON(emailVerifyApi, {})
            .done(function (data) {
              // console.log("Email Checker: "+data.state);
              // console.log(data);
              $('.loading-white').remove();
              // No state so this must be an error.
              if ( !('state' in data)) {
                // console.log("Request failed");
                submitSurvey(form_id);
              }
              var state = data['state'].toLowerCase();
              var reason = data['reason'];
              // console.log(state);
              // Clear email on success
              if (data.reason === 'Success') {
                setTimeout(() => {
                  document.getElementById('sign_up_query').value="";
                }, 500);
              }
              if (state === 'deliverable') {
                // If we have a suggestion, but get an OK we accept it.
                if (data.did_you_mean !== '') {
                  $("input[name='cons_email']", form).val(data.did_you_mean);
                }
                else if (data.email != null) {
                  $("input[name='cons_email']", form).val(data.email);
                }
                // console.log('final email' + data.email);
                submitSurvey(form_id);
              }
              else {
                if (data.did_you_mean !== '') {
                  // console.log('data.did_you_mean ' + data.did_you_mean);
                  var didYouMean = decodeURIComponent(data.did_you_mean);
                  $("input[name='cons_email']", form).val(didYouMean);
                  $('form.signup-form').removeClass('spinner');
                  form.before('<div class="alert alert-danger" aria-live="polite">' +
                      '<p>Did you mean ' + data.did_you_mean + '? <a href="javascript:void(0);" id="retry" onclick="retryEmailSignup(\'' + form_id + '\')">Please try again</a>.</p>' +
                      '</div>');
                }
                else {
                  switch (reason) {
                    // We accept these failures and record data about them.
                    case 'None':
                    case 'TransientNetworkFault':
                      // console.log("Network fault");
                    case 'Unknown':
                      $('.kickbox-reason', form).val(reason);
                      $("input[name='cons_email']", form).val(data.email);
                      submitSurvey(form_id);
                      break;
                    case 'ServerIsCatchAll':
                      $('.kickbox-accept-all-value', form).val(reason);
                      $("input[name='cons_email']", form).val(data.email);
                      submitSurvey(form_id);
                      break;
                    default:
                      // form.hide();
                      form.before('<div class="alert alert-danger" aria-live="polite">' +
                          '<p>The email you entered appears to be invalid. <a href="javascript:void(0);" id="retry" onclick="retryEmailSignup(\'' + form_id + '\')">Please try again</a>.</p>' +
                          '</div>');
                  }

                }
              }
            })
            .fail(function (jqxhr, textStatus, error) {
              var err = textStatus + ", " + error;
              // console.log("Request failed: " + err);
              submitSurvey(form_id);
            });

        form.prev('.alert').remove();

      };

      var submitSurvey = function (form_id) {
        // console.log("FORM ID:");
        // console.log(form_id);
        var callback = window.submitSurveyCallbackDefault;
        if (form_id === 'together_form') {
          callback = window.submitHomepageSurveyCallback;
        } else if (form_id === 'sign_up_and_download_form') {
          callback = window.submitDownloadCallback;
        } else if (form_id === 'inline_promo_form') {
          callback = window.submitInlineCallbackDefault;
        } else if (form_id === 'util_sign_up_form') {
          callback = window.submitUtilCallbackDefault;
        } else if (form_id === 'quiz_form') {
          callback = window.submitQuizCallback;
        } else if (form_id === 'interrupter_form') {
          callback = window.submitInterrupterCallback;
        } else if (form_id === 'interrupter_form1') {
          callback = window.submitInterrupterCallback;
        }
        luminateExtend.api({
          api: 'survey',
          form: '#' + form_id,
          callback: callback,
          requiresAuth: true,
          useHTTPS: true
        });
      };

      // Override the form submit handler to use our custom logic.
      $('form.signup-form', context).submit(function (e) {
        e.preventDefault();
        var form = $(this);
        if ($('.fake-field', form).val() === '') {
          if ($('.current-page-url', form).length) {
            $('.current-page-url', form).val(window.location.href);
          }
          if (form.is('#inline_promo_form')) {
            $('#inline_promo_form').addClass('spinner');
          }
          if (form.is('#sign_up_and_download_form')) {
            $('#sign_up_and_download_form').addClass('spinner');
          }
          var emailVal = $("input[name='cons_email']", form).val();
          var email = encodeURIComponent(emailVal);
          checkEmail(email, form);
        }
      });
    }
  }
})(jQuery, Drupal);
;
// This debug code is pulling in the session variables from Convio. If the quotes are empty, then the Convio session variables are not available.

/*

S80:src = '[[S80:src]]'
S80:subsrc = '[[S80:subsrc]]'
S80:onsite_promo = '[[S80:onsite_promo]]'
S80:referrer = '[[S80:referrer]]'
S80:keyword = '[[S80:keyword]]'
*/

// Sitewide Custom JS (legacy host/CMS).
(function ($) {
  Drupal.behaviors.faGetAttributionValue = function(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    if (faGetCookie('Luminate')) {
      var luminateVars = {};
      luminateVars = JSON.parse(faGetCookie('Luminate'));
      if (luminateVars[variable] != undefined) {
        return luminateVars[variable];
      }
    }
    return ('');
  };

  Drupal.behaviors.faLuminate = {
    attach: function(context, settings) {

      // Setup Convio Source Codes for convio forms
      function generateSourceCodes_convio() {

        // Set the initial JS vars to values provided by Convio after being set in Query String
        var s_src = Drupal.behaviors.faGetAttributionValue("s_src");
        s_src = s_src.substring(0, 200);
        var s_channel = Drupal.behaviors.faGetAttributionValue("s_channel");
        s_channel = s_channel.substring(0, 200);
        var s_subsrc = Drupal.behaviors.faGetAttributionValue("s_subsrc");
        s_subsrc = s_subsrc.substring(0, 200);
        var s_onsite_promo = Drupal.behaviors.faGetAttributionValue("s_onsite_promo");
        s_onsite_promo = s_onsite_promo.substring(0, 200);
        var s_keyword = Drupal.behaviors.faGetAttributionValue("s_keyword");
        s_keyword = s_keyword.substring(0, 200);
        var s_referrer = Drupal.behaviors.faGetAttributionValue("s_referrer"); // this is set by the query string parameter passed to Convio
        s_referrer = s_referrer.substring(0, 200);

        // Placeholders
        var referrer = '';
        var keyword = '';

        // If there is no source code, try to determine the referrer
        if (s_src == '') {
          // Determine Referrer: Check session tag, then browser
          // Check Query String for referrer
          if (s_referrer != '') {
            //console.log('check Query String for referrer: ' + s_referrer);
            referrer = s_referrer;
          }
          // Check CONVIO.referrer
          if (typeof CONVIO!="undefined" && typeof CONVIO!=undefined){
            //console.log('enter CONVIO.referrer check');
            if (CONVIO.referrer.length != 0) {
              // Note: CONVIO.referrer is inconsistent
              //console.log('check CONVIO.referrer: ' + CONVIO.referrer);
              referrer = CONVIO.referrer;
            }
          }
          // Catch browser referrer if CONVIO referrer is missing
          if (referrer == '') {
            // Also, skip certain domains
            //console.log('Catch browser referrer if CONVIO referrer is missing');

            //console.log('check document.referrer: ' + document.referrer);
            var localUrl = location.hostname;
            if(document.referrer.indexOf(localUrl) == -1) {
              referrer = document.referrer;
            }else{
              referrer = '';
            }
          }
        } // END if source code does not exist

        // Check Query String for keyword (search terms)
        if (s_keyword != '') {
          keyword = s_keyword;
        }

        // Determine keyword and set Search engine referrers to name of engine
        // Note: Keywords from search engines are not a fully supported feature.
        if (s_src == '' && referrer != '') {
          // Decode the referrer string and return a list of search keywords.
          // Determine Keywords
          // Set Referrer to search engine name
          if (referrer.match(/search\.yahoo.*/i)) {
            // Yahoo
            if (referrer.match(/p=/) && keyword == '') {
              keyword = referrer.replace(/^.*p=([^&]+)&?.*$/i, '$1');
            }
            referrer = "yahoo";
          }
          else if (referrer.match(/bing\.com\/search/i)) {
            // Bing
            if (referrer.match(/q=/) && keyword == '') {
              keyword = referrer.replace(/^.*q=([^&]+)&?.*$/i, '$1');
            }
            referrer = "bing";
          }
          else if (referrer.match(/^http:\/\/(www\.)?alltheweb.*/i)) {
            // AllTheWeb
            if (referrer.match(/q=/) && keyword == '') {
              keyword = referrer.replace(/^.*q=([^&]+)&?.*$/i, '$1');
            }
            referrer = "alltheweb";
          }
          else if (referrer.match(/search\.lycos.*/i)) {
            // Lycos
            if (referrer.match(/query=/) && keyword == '') {
              keyword = referrer.replace(/^.*query=([^&]+)&?.*$/i, '$1');
            }
            referrer = "lycos";
          }
          else if (referrer.match(/search\.msn.*/i)) {
            // MSN
            if (referrer.match(/q=/) && keyword == '') {
              keyword = referrer.replace(/^.*p=([^&]+)&?.*$/i, '$1');
            }
            referrer = "msn";
          }
          else if (referrer.match(/google\.com/i)) {
            if (referrer.match(/q=/) && keyword == '') {
              keyword = referrer.replace(/^.*q=([^&]+)&?.*$/i, '$1');
            } else {
              keyword = "NO_KEYWORD";
            }
            referrer = "google";
          }
          else if (referrer.match(/q=/) && keyword == '') {
            keyword = referrer.replace(/^.*q=([^&]+)&?.*$/i, '$1');
          }
          else if (referrer.match(/google\.com/i)) {
            if (referrer.match(/q=/) && keyword == '') {
              keyword = referrer.replace(/^.*q=([^&]+)&?.*$/i, '$1');
            } else {
              keyword = "NO_KEYWORD";
            }
            referrer = "google";
          }

          keyword = keyword.replace(/\'|"/g, '');
          keyword = keyword.replace(/\+|%20|,/g, ' ');

          // Clean up referrer
          referrer = referrer.replace(/http:\/\//, '');
        }

        //console.log('s_src: ' + s_src + ' referrer: ' + referrer);

        // If keyword was set, clean it up
        if (keyword != '') {
          keyword = decodeURIComponent(keyword);
        }

        // Get current date parts for new source code
        var _dateSourceCode_obj = new Date();
        // set date as string
        var dateSourceCode = "W" + _dateSourceCode_obj.getFullYear().toString().substr(2,3);
        var dateSourceCode_month = parseInt(_dateSourceCode_obj.getMonth()+1, 10);
        switch(dateSourceCode_month) {
          case 10:
          dateSourceCode_month = "A";
          break;
          case 11:
          dateSourceCode_month = "B";
          break;
          case 12:
          dateSourceCode_month = "C";
          break;
        }
        dateSourceCode = dateSourceCode + dateSourceCode_month;

        // Setup placeholders to be checked for valid values
        var _s_src = '';
        var _s_channel = '';
        //var _s_subsrc = (s_subsrc != '') ? encodeURIComponent(s_subsrc) : encodeURIComponent(window.location);
        var _s_subsrc = (s_subsrc != '') ? s_subsrc : window.location.href;
        var _s_keyword = '';
        var _s_referrer = '';
        ///////////////////////////////////////////////////////////////////
        // TESTING
        var sourcecode_type = ''; // Use this to add a message to //console.log
        ///////////////////////////////////////////////////////////////////

        // Convert s_onsite_promo to use current month's date. Replace characters 2-4 with the date
        // s_onsite_promo = s_onsite_promo.substr(0,1) + dateSourceCode.substr(1) + s_onsite_promo.substr(4);

        if (s_src != '') {
          _s_src = s_src;
          _s_channel = s_channel;
          _s_keyword = s_keyword;
          _s_referrer = s_referrer;
          sourcecode_type = 'default: s_src exists';
          //console.log('Source exists. Set _s_referrer to s_referrer: ' + _s_referrer);
        }

        ///////////////////////////////////////////////////////////////////
        // Setup custom source codes if none exist
        ///////////////////////////////////////////////////////////////////
        // Create HTML to add to form field?
        else {
          // If there is a referrer and it is not a search engine domain
          if (referrer.indexOf('https://www.feedingamerica.org/') > -1) { // Search engines converted to a name
            // if there is a referrer and no keyword: set code to WYYMMREFR
            _s_src = dateSourceCode + 'REFER';
            _s_referrer = referrer;
            _s_channel = referrer;
            //console.log('referrer.indexOf > -1: ' + _s_referrer);
            sourcecode_type = 'referrer and no keyword: set code to ' + _s_src;
          }

          // If there is a referrer and it is not a URL, it is a Search Engine name
          else if (referrer != '' && referrer.indexOf('https://www.feedingamerica.org/') == -1) {
            //console.log('referrer is search engine: ' + referrer);
            // else if (keyword != '') {
            // If organic search (keyword and no existing source code): set code to WYYMMORSC
            if (keyword == "NO_KEYWORD") {
              keyword = "";
            }
            _s_src = dateSourceCode + 'ORGSC';
            _s_keyword = keyword;
            _s_referrer = referrer;
            _s_channel = referrer;
            sourcecode_type = 'organic search: keyword and no existing source code: set code to ' + _s_src;
          }
          else if (referrer == '') {
            // If no referrer / direct link: set code to WYYMMDRCT
            _s_src = dateSourceCode + 'DIRCT';
            sourcecode_type = 'no referrer: direct link: set code to ' + _s_src;
            _s_channel = 'no_channel'
          }
          else {
            // If unknown: set code to WYYMMUNKN
            _s_src = dateSourceCode + 'UNKNO';
            sourcecode_type = 'unknown: set code to ' + _s_src;
          }
        }


        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        // Testing
        //*
        if (typeof console != "undefined" && typeof console != undefined) { // only log if allowed by browser
          // console.log('sourcecode type:' + sourcecode_type);
          // console.log("s_src: " + _s_src);
          // console.log("s_subsrc: " + _s_subsrc);
          // console.log("s_onsite_promo: " + s_onsite_promo);
          // console.log("s_referrer: " + _s_referrer);
          // console.log('browser referrer: ' + document.referrer);
          // console.log("s_keyword: " + _s_keyword);
        }

        // */
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////

        // write source and subsource to scraped survey inputs
        if (jQuery('.visitor-source').length > 0 && _s_src != '') {
          jQuery('.visitor-source').val(_s_src);
        };
        if (jQuery('.visitor-subsource').length > 0 && _s_subsrc != '') {
          jQuery('.visitor-subsource').val(_s_subsrc);
        };

        var $form = jQuery("#ProcessForm");

        // Note: currently, s_src cannot be set via hidden field
        // if Convio redirects and strips the QS. Session var gets lost.

        if (s_onsite_promo != '') {
          $form.find("#onsite_promohidden").val(s_onsite_promo);
        }
        if (_s_keyword != '') {
          $form.find("#keywordhidden").val(_s_keyword);
        }
        if (_s_referrer != '') {
          $form.find("#referrerhidden").val(_s_referrer);
        }

        var sites = [
        "//feedingamerica\.org",
        "//www.feedingamerica\.org",
        "//help\.feedingamerica\.org",
        "//secure\.feedingamerica\.org",
        "//fa\.pub30\.convio\.net",
        "//feedingamerica\.beaconfire\.us",
        "//web\.feeding-america\.localhost",
        "//feam\.localhost"
        ];

        // loop over each and match to hrefs
        jQuery("body a").filter(function() {
          var thisHref = jQuery(this).attr('href');
            if (thisHref === undefined) { // need to make sure <a> has href (i.e. is not an anchor only)
              return false;
            }
            // Starts with http:// https:// or //
            if (thisHref.search(/^(https?:)?\/\//) !== -1) {
              for (var i=0; i<sites.length; i++) {
                if (new RegExp(sites[i], "i").test(thisHref)) {
                  return true;
                }
              }
            }
            return false;

          }).each(function(j, ele2) {
            // Append Query String to link
            var href = jQuery(ele2).attr('href');

            // Clean up URLs.
            var splitHref = href.split('&s_src');
            var href = splitHref[0];

            var hash = '';
            var qs_separator = "?";
            // Test how to add to query string
            if (href) {
              if (href.indexOf("?") > 0) {
                qs_separator = "&";
              }
              if (href.indexOf("#") > -1) {
                var hrefParts = href.split('#');
                href = hrefParts[0];
                hash = hrefParts[1];
              }
            }

            var luminateVars = {};
            if (_s_src != '') {
              href = href + qs_separator + "s_src=" + encodeURIComponent(_s_src);
              qs_separator = "&";
              luminateVars = Object.assign({"s_src":_s_src},luminateVars);
            }
            if (s_onsite_promo != '') {
              href = href + qs_separator + "s_onsite_promo=" + encodeURIComponent(s_onsite_promo);
              qs_separator = "&";
              luminateVars = Object.assign({"s_onsite_promo":s_onsite_promo},luminateVars);
            }
            if (_s_keyword != '') {
              href = href + qs_separator + "s_keyword=" + encodeURIComponent(_s_keyword);
              qs_separator = "&";
              luminateVars = Object.assign({"s_keyword":_s_keyword},luminateVars);
            }
            if (_s_referrer != '') {
              href = href + qs_separator + "s_referrer=" + encodeURIComponent(_s_referrer);
              qs_separator = "&";
              luminateVars = Object.assign({"s_referrer":_s_referrer},luminateVars);
            }
            if (_s_channel != '') {
              href = href + qs_separator + "s_channel=" + encodeURIComponent(_s_channel);
              qs_separator = "&";
              luminateVars = Object.assign({"s_channel":_s_channel},luminateVars);
            }
            if (_s_subsrc != '') {
              href = href + qs_separator + "s_subsrc=" + encodeURIComponent(_s_subsrc);
              qs_separator = "&";
              luminateVars = Object.assign({"s_subsrc":_s_subsrc},luminateVars);
            }
            if (hash != '') {
              href += '#' + hash;
            }
            if (!faGetCookie('Luminate')) {
              faSetCookie('Luminate', JSON.stringify(luminateVars), 1);
            };

            // Apend to help and secure hrefs.
            var faSecure = 'secure.feedingamerica.org';
            var faHelp = 'help.feedingamerica.org';
            var faMap = 'map.feedingamerica.org';
            // console.log( href.indexOf(faSecure) != -1 )
            if(href.indexOf(faSecure) != -1 || href.indexOf(faHelp) != -1 || href.indexOf(faMap) != -1){
              jQuery(ele2).attr('href', href);
            }
          });
        }

        // Y.use('jquery-noconflict', function() {
        // Setup Source Codes
        // generateSourceCodes_convio();
        jQuery(document).ready(function($) {
          generateSourceCodes_convio();
        });
        // });

      /* End Organic Source Code Setup */

      /* Begin Conditional to appear on Any Donation Form  */

      // [[?[[?[[S8]]::donation=form1::DF::]]
      // [[?[[S8]]::giveonline::DF::]]::DF::]]
      /* If Not a Donation Form or Thank You page */

      /* Place Marketing code here that should go on all Luminate pages that are not donation form or thank you pages */

      /* End If Not Donation Form Landing Page */


      // [[?[[?[[S8]]::donation=complete::DFS::]]
      /*Begin If Donation Form Thank You page */

      // [[?[[S8]]::pagename=Donation_ThankYou_donate_success::DFS::]]

      // ::DFS::

      /* Code for Donation Form Thank You page, includes API Donation Success Page*/

      /*Tracks Donation and Revenue for Optmizely Testing
      Use Pre-Build Optimizely Donation Complete and Revenue Tracking Goals with this tracking code- JB 9/9/14 This code should remain so that it does not have to be put in each time FA runs an Optimizely test*/

      // var op_amount='<convio:session param="dc:giftAmount" name="120"></convio:session>';
      // op_amount = op_amount.replace("$","");
      // op_amount = op_amount.replace("\,","");
      // op_amount=parseFloat(op_amount);
      // var gift_frequency = '<convio:session param="dc:recurringFrequencyLabel" name="120"></convio:session>';
      // var optimizely = optimizely || [];
      // optimizely.push(['trackEvent', 'Donation_Complete', op_amount * 100]);
      //                adroll_custom_data = {"ORDER_ID": "[[S120:dc:transactionID]]", "AMOUNT":"[[S120:dc:giftAmount]]", "SOURCE_CODE": "[[S120:dc:recurringFrequencyLabel]]", "MEMBERSHIP": "[[S120:dc:newMembership]]"};
      // adroll_custom_data = {"ORDER_ID": "[[S120:dc:transactionID]]", "AMOUNT":"[[E130:[[T8:[[S120:dc:giftAmount]]]] currency "$" "" replaceall "," "" replaceall]]", "SOURCE_CODE": "[[S120:dc:recurringFrequencyLabel]]", "MEMBERSHIP": "[[S120:dc:newMembership]]"};

    } // attach
  }; // faLuminate
})(jQuery, Drupal, window);
;
(function ($) {
  Drupal.behaviors.faDataLayer = {
    attach: function (context, settings) {

      // Get the URL,
      var sHref = window.location.href.toLowerCase();
      var faDataLayer = {};

      // Default Page Types.
      if (sHref.indexOf('ways-to-give') > -1) {
        faDataLayer['page_type'] = 'Donor';
        faDataLayer['user_audience_type'] = 'Donor';
        faDataLayer['location_id'] = '';
        faDataLayer['zip_code'] = '';
      } else if (sHref.indexOf('need-help-find-food') > -1) {
        faDataLayer['page_type'] = 'Neighbor';
        faDataLayer['user_audience_type'] = 'Neighbor';
        faDataLayer['location_id'] = '';
        faDataLayer['zip_code'] = '';
      } else if (sHref.indexOf('take-action/advocate') > -1) {
        faDataLayer['page_type'] = 'Advocate';
        faDataLayer['user_audience_type'] = 'Advocate';
        faDataLayer['location_id'] = '';
        faDataLayer['zip_code'] = '';
      } else if (sHref.indexOf('take-action/volunteer') > -1) {
        faDataLayer['page_type'] = 'Volunteer';
        faDataLayer['user_audience_type'] = 'Volunteer';
        faDataLayer['location_id'] = '';
        faDataLayer['zip_code'] = '';
      } else {
        faDataLayer['page_type'] = 'Public';
        faDataLayer['user_audience_type'] = 'Public';
        faDataLayer['location_id'] = '';
        faDataLayer['zip_code'] = '';
      };

      // Page-level events.
      $('.page-node-type-landing-page .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Landing Page';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-page .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Basic Page';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-press-release .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Press Release';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-news .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Blog Post';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-promotion .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Promotion';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-media-landing-page .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Media Landing Page';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-job-opportunity .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Job Opportunity';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-feature .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Campaign Page';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-story .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Client Story';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-e-card .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'E-Card';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-food-bank .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Food Bank';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-profile .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Profile';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-publication .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Publication';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-state .region-content a').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'content_click';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'State';
        faDataLayer['user_audience_type'] = 'Public';
        window.dataLayer.push(faDataLayer);
      });
      $('a[href^="tel:"]').once('faDataLayer').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'phone_number_click';
        faDataLayer['click_text'] = $(this).text();
        faDataLayer['user_audience_type'] = 'Neighbor';
        window.dataLayer.push(faDataLayer);
      });

      $('.results-box a').once('faDataLayer').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'fb_result_click';
        faDataLayer['page_area'] = 'search-results';
        faDataLayer['page_sub_area'] = 'food-bank-result';
        faDataLayer['click_text'] = $(this).text();
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['content_type'] = 'Landing Page';
        faDataLayer['user_audience_type'] = 'Neighbor';
        window.dataLayer.push(faDataLayer);
      });
      $('.info-block-text-wrapper a').once('faDataLayer').click(function(e){
        var faDataLayer2 = {};
        faDataLayer2['event'] = 'volunteer_result_link_click';
        faDataLayer2['click_text'] = $(this).text();
        faDataLayer2['click_url'] = $(this).attr('href');
        faDataLayer2['user_audience_type'] = faDataLayer['page_type'];
        window.dataLayer.push(faDataLayer2);
      });

      $('.page-node-type-food-bank .profile-buttons a:nth-child(1)').once('faDataLayer').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'foodbank_give_locally_button';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['click_text'] = $(this).text();
        faDataLayer['page_name'] = $('h1').text();
        faDataLayer['user_audience_type'] = 'Donor';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-food-bank .profile-buttons a:nth-child(2)').once('faDataLayer').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'foodbank_find_food_button';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['click_text'] = $(this).text();
        faDataLayer['page_name'] = $('h1').text();
        faDataLayer['user_audience_type'] = 'Neighbor';
        window.dataLayer.push(faDataLayer);
      });
      $('.page-node-type-food-bank .profile-buttons a:nth-child(3)').once('faDataLayer').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'foodbank_volunteer_button';
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['click_text'] = $(this).text();
        faDataLayer['page_name'] = $('h1').text();
        faDataLayer['user_audience_type'] = 'Volunteer';
        window.dataLayer.push(faDataLayer);
      });

      $('#util_findfood a').once('faDataLayer').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'find_help_click';
        faDataLayer['click_text'] = 'Need Help';
        faDataLayer['user_audience_type'] = 'Neighbor';
        window.dataLayer.push(faDataLayer);
      });

      $('button.mainAccordion').once('faDataLayer').click(function(){
        if ($(this).hasClass('minus')) {
          faAction = "Close Question";
        } else {
          faAction = "Open Question";
        }
        var faDataLayer2 = {};
        faDataLayer2['event'] = 'accordion_content';
        faDataLayer2['click_text'] = $(this).text();
        faDataLayer2['action'] = faAction;
        faDataLayer2['content_type'] = $('.ga4-content-type').data('content-type');
        faDataLayer2['user_audience_type'] = faDataLayer['page_type'];
        window.dataLayer.push(faDataLayer2);
      });

      $('a.nav-link-main').once('faDataLayer').click(function(e){
        var faDataLayer2 = {};
        faDataLayer2['event'] = 'header_nav';
        faDataLayer2['click_text'] = $(this).find('span').html().replace('<br>', ' ');
        faDataLayer2['click_url'] = $(this).attr('href');
        faDataLayer2['user_audience_type'] = faDataLayer['page_type'];
        window.dataLayer.push(faDataLayer2);
      });

      $('footer .footer_nav_redesign a').once('faDataLayer').click(function(){
        var faDataLayer2 = {};
        faDataLayer2['event'] = 'footer_nav';
        faDataLayer2['click_text'] = $(this).text();
        faDataLayer2['click_url'] = $(this).attr('href');
        faDataLayer2['user_audience_type'] = faDataLayer['page_type'];
        window.dataLayer.push(faDataLayer2);
      });

      $('a[href*="give.feedingamerica.org"]').once('faDataLayer').click(function(){
        var faDataLayer = {};
        faDataLayer['event'] = 'donate_button_click';
        faDataLayer['click_text'] = $(this).text();
        faDataLayer['click_url'] = $(this).attr('href');
        faDataLayer['user_audience_type'] = 'Donor';
        window.dataLayer.push(faDataLayer);
      });

      $('a[href$=".pdf"]').once('faDataLayer').click(function(){
        var faDataLayer2 = {};
        faDataLayer2['event'] = 'pdf_link_click';
        faDataLayer2['click_text'] = $(this).text();
        faDataLayer2['click_url'] = $(this).attr('href');
        faDataLayer2['user_audience_type'] = faDataLayer['page_type'];
        window.dataLayer.push(faDataLayer2);
      });

      $('a.iframe-trigger, button.video-modal-trigger').once('faDataLayer').click(function(){
        var targetIframe = $(this).parent().find('iframe');
        var faDataLayer2 = {};
        faDataLayer2['event'] = 'iframe_trigger';
        faDataLayer2['click_text'] = targetIframe.attr('title');
        faDataLayer2['click_url'] = targetIframe.attr('src');
        faDataLayer2['user_audience_type'] = faDataLayer['page_type'];
        window.dataLayer.push(faDataLayer2);
      });

      // Legacy dataLayer params.
      if (Drupal.behaviors.faGetAttributionValue("cons_id") !== '') {
        faDataLayer['visitorID'] = faGetAttributionValue("cons_id");
      }
      if (Drupal.behaviors.faGetAttributionValue("s_src") !== '') {
        faDataLayer['sourceCode'] = Drupal.behaviors.faGetAttributionValue("s_src");
      }
      if (Drupal.behaviors.faGetAttributionValue("s_subsrc") !== '') {
        faDataLayer['subSourceCode'] = Drupal.behaviors.faGetAttributionValue("s_subsrc");
      }
      // Referrer if not www.feedingamerica.org.
      if (document.referrer.indexOf("www.feedingamerica.org") == -1) {
        faDataLayer['referrer'] = document.referrer;
      }

      // console.log(faDataLayer);
      window.dataLayer.push(faDataLayer);
    }
  }
  // End Data Layer
})(jQuery, Drupal, window);
;
/**
 * @file
 * TS SVG button. Adds svg elements.
 */

(function ($, Drupal) {
  Drupal.behaviors.tsMLPSvgButtons = {
    attach: function (context, settings) {
      $(".link-arrow", context).each(function() {
        const arrow =
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg'" +
          " xmlns='http://www.w3.org/2000/svg'" +
        " x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'>" +
        "<path d='M13,1l-2.8,2.8l6.2,6.2H0v4h16.4l-6.2,6.2L13,23l11-11L13,1z'/></svg>";

        $(this).append(arrow);
      });
    }
  }
})(jQuery, Drupal);
;
// Sitewide Custom JS (legacy host/CMS).
(function ($) {
  Drupal.behaviors.mlpVideoModal = {
    attach: function(context, settings) {
      $(document).ready(function() {

        var closeModal = function() {
          var modal = $('.show-modal');
          $('.modal-visibility').removeClass('show-modal');
          var iframeToReset = modal.find('.video-iframe');
          // Keeps video from playing after it's closed
          iframeToReset.attr('src', iframeToReset.attr('src'));
        }

        $(".video-modal-trigger").once().click(function(e) {
          $(this).parent('.modal-visibility').addClass('show-modal');
          $(this).find('.video-button-wrapper').focus();

          // Close modal with escape key
          $(document).on('keydown', function(event) {
            if (event.key == "Escape") {
              closeModal();
            }
          });
        });

        // Close modal with X button
        $('.video-modal .close-button').once().click(function(e) {
          closeModal();
          $(this).find('.video-modal-trigger').focus();
        });

      });

    } // attach
  }; // tsFeedingAmerica
})(jQuery, Drupal, window);

;
(function ($, Drupal, window, FA) {
  /**
   * A hash of form behavior callbacks used by registerFormBehaviorCallback().
   */
  var _formBehaviors = {};

  Drupal.behaviors.eaForms = {
    attach: function (context, settings) {
      if (context === document) {
        /**
         * This callback is called after the form is filled.
         * @see https://docs.everyaction.com/reference/callbacks#postfill
         */
        function postFill (args) {
          var $form = $(args.view.el);
          var $submit = $('.at-submit', $form);
          var $emailSignupForm = $form.find(".EmailAddress");

          var target = document.querySelector('.ngp-form');
          if (target) {
            var config = { attributes: true, childList: true, characterData: true };
            var observer = new MutationObserver(function(mutations) {
              // Remove Duplicating EA IDs
              $('#YesSignMeUpForUpdatesForBinder_Value').removeAttr('id');
              $('#fastaction-signup').remove();
              $('#fastaction-login').remove();
              $('.ngp-form, .at-form').off();
            });
            observer.observe(target, config);
          }

          if ($emailSignupForm.length > 0) {
            if ($form.parent().data('form-behavior') == 'volunteer_signup') {
              var $formType = 'volunteer',
                  $userAudienceType = 'Volunteer';
            } else {
              var $formType = 'email_signup',
                  $userAudienceType = 'Public';
            }
            $form.parent().find('input:not([type=submit])').off();
            $form.parent().find('input:not([type=submit])').on('focus', function(e) {
              if (!$form.parent().hasClass('form-start')) {
                var faDataLayer = {};
                faDataLayer['event'] = 'form_start';
                faDataLayer['form_name'] = $form[0].id;
                faDataLayer['form_type'] = $formType;
                faDataLayer['user_audience_type'] = $userAudienceType;
                window.dataLayer.push(faDataLayer);
                $form.parent().addClass('form-start')
              }

              var faDataLayer2 = {};
              faDataLayer2['event'] = 'form_interaction';
              faDataLayer2['form_name'] = $form[0].id;
              faDataLayer2['form_type'] = $formType;
              faDataLayer2['field_name'] = e.currentTarget.name;
              faDataLayer2['user_audience_type'] = $userAudienceType;
              window.dataLayer.push(faDataLayer2);
            });
          };

          // Run form behavior, if one has been registered.
          var callbacks = _formBehaviors[$form.closest('.ngp-form').data('form-behavior')];
          if (callbacks && callbacks.postFill) {
            callbacks.postFill(args);
          }
        }
        this.addCallback('postFill', postFill);

        // function volunteerSignupPostFill(args) {
        //   var $form = $(args.view.el);
        // }
        // Drupal.behaviors.eaForms.registerFormBehaviorCallback('volunteer_signup', 'postFill', volunteerSignupPostFill);

        /**
         * This callback is called after the form has completed rendering but before it is filled.
         * @see https://docs.everyaction.com/reference/callbacks#postrender
         */
        function postRender (args) {
          var $form = $(args.options.el);
          var $submit = $('.at-submit', $form);
          var $footer = $('footer.FooterHtml');

          // Remove header and legend elements completely
          $('header, legend', $form).remove();

          // Strip fieldset and div.at-row tags while keeping the contents.
          $('fieldset, .at-row:not(.at-row-full), .at-inner', $form).contents().unwrap();

          // Remove Duplicating EA IDs
          $('#YesSignMeUpForUpdatesForBinder_Value').removeAttr('id');
          $('#fastaction-signup').remove();
          $('#fastaction-login').remove();

          // Update Submit button text.
          var buttonText = $form.closest('.ngp-form').data('button-text');
          if (buttonText) {
            $submit.attr("value", buttonText);
          }

          // If the footer has content, show it.
          if ($footer.length > 6) {
            $footer.show();
          };


          // This function will interrupt the normal form submit
          $submit.on('click', function (e) {
            // when the submit button is clicked
            e.preventDefault(); // interrupt the submit

            // Validate zip code (if there is one) before proceeding.
            var zip_code = $('.PostalCode input', $form).val();
            if (zip_code) {
              if (zip_code.length > 4) {
                zip_code = zip_code.substring(0, 5);
              }
              var zipOrganizations = new FA.httpWebService();
              zipOrganizations.init({url: '/ws-api', dataType: 'json'});
              zipOrganizations.request('GetOrganizationsByZip', { zip: zip_code }, 'Organization', function(data) {
                var counter = 0;
                for (var key in data) {
                  counter++;
                  if (counter > 2) { return; }
                  $(".local-food-banks.error").remove();
                  validateEmail($form, $submit);
                }
                if (counter == 0) { // No results
                  var $localFoodBanks = $('<div class="local-food-banks"></div>');
                  $localFoodBanks.insertAfter($form.closest('.ngp-form'));
                  $localFoodBanks.append('This is an invalid zip. A valid U.S. zip is required').addClass('error');

                  if ($form.data('form-behavior') == 'volunteer_signup') {
                    var faDataLayer = {};
                    faDataLayer['event'] = 'form_error';
                    faDataLayer['form_name'] = $form.find('.at-form')[0].id;
                    faDataLayer['form_type'] = 'volunteer';
                    faDataLayer['field_name'] = 'PostalCode';
                    faDataLayer['user_audience_type'] = 'Volunteer';
                    window.dataLayer.push(faDataLayer);
                  };
                }
              }, function (response) { // Error
                $localFoodBanks.html('Our online search is not working at this time. To find out your food bank, please call us at 800.771.2303');
              });
            } else {
              $(".local-food-banks.error").remove();
              validateEmail($form, $submit);
            }
          });

          // Run form behavior, if one has been registered.
          var callbacks = _formBehaviors[$form.closest('.ngp-form').data('form-behavior')];
          if (callbacks && callbacks.postRender) {
            callbacks.postRender(args);
          }

          return args;
        }
        this.addCallback('postRender', postRender);

        /**
         * This hook is called after a successful form submission, but prior to the segue to the next thing.
         * @see https://docs.everyaction.com/reference/callbacks#presegue
         */
        function preSegue (args) {
          var $form = $(args.formdef.options.el);

          // Add a DataLayer event for any submitted email-signup form.
          if ($form.parent().find(".EmailAddress").length > 0 && $form.data('form-behavior') !== 'volunteer_signup') {
            var faDataLayer = {};
            faDataLayer['event'] = 'form_submit';
            faDataLayer['form_name'] = $form.find('.at-form')[0].id;
            faDataLayer['form_type'] = 'email_signup';
            faDataLayer['user_audience_type'] = 'Public';
            window.dataLayer.push(faDataLayer);

            var faDataLayer2 = {};
            faDataLayer2['event'] = 'email_signup';
            faDataLayer2['form_name'] = $form.find('.at-form')[0].id;
            faDataLayer2['user_audience_type'] = 'Public';
            window.dataLayer.push(faDataLayer2);
          };

          // Run form behavior, if one has been registered.
          var callbacks = _formBehaviors[$form.closest('.ngp-form').data('form-behavior')];
          if (callbacks && callbacks.preSegue) {
            callbacks.preSegue(args);
          }
        }
        this.addCallback('preSegue', preSegue);

        /**
         * This hook is called when a segue is happening.
         * @see https://docs.everyaction.com/reference/callbacks#segue
         */
        function segue (args) {
          var $form = $(args.calling_tag.el);

          if (!args.thank) {
            $('.at-form', $form).html('<p class="success-message">Thank you for signing up!</p>');
          }

          // Run form behavior, if one has been registered.
          var callbacks = _formBehaviors[$form.closest('.ngp-form').data('form-behavior')];
          if (callbacks && callbacks.segue) {
            callbacks.segue(args);
          }
        }
        this.addCallback('segue', segue);

        function validateEmail ($form, $submit) {
          // grab the value of the email address
          var emailAddress = $(".EmailAddress input", $form).val();

          // if there was a previous error el, remove it.
          $("small.error", $form).remove();
          $(".error", $form).removeClass('error');
          $form.closest(".ngp-form").addClass("spinner"); // add a spinning class to the form container

          var emailVerifyApi = 'https://api.emailable.com/v1/verify?email=' + encodeURIComponent(emailAddress) + '&api_key=live_7f1954ca3e2d233d9c65';
          $.getJSON(emailVerifyApi, {})
            .done(function (data) {
              var state = data && data.state && data.state.toLowerCase();
              if (state === "deliverable" || state === "risky") {
                $form.closest(".ngp-form").removeClass("spinner");
                $submit.off('click').trigger('click');
              }
              else if (state === "undeliverable" && data.did_you_mean !== '') {
                var formErrId = $form.find('.at-form')[0].id + '-error';
                $("small.error", $form).remove();
                $(".EmailAddress", $form).addClass("error").find('input').attr("aria-describedby", formErrId);
                $("<small class='error absolute' id='" + formErrId + "'>Invalid email address. Did you mean '" + data.did_you_mean +  "'</small>").insertAfter($submit);
                $form.closest(".ngp-form").removeClass("spinner").find('.didYouMean').remove().end();
                if ($form.data('form-behavior') == 'volunteer_signup') {
                  var faDataLayer = {};
                  faDataLayer['event'] = 'form_error';
                  faDataLayer['form_name'] = $form.find('.at-form')[0].id;
                  faDataLayer['form_type'] = 'volunteer';
                  faDataLayer['field_name'] = 'EmailAddress';
                  faDataLayer['user_audience_type'] = 'Volunteer';
                  window.dataLayer.push(faDataLayer);
                };
                if ($form.find(".EmailAddress").length > 0 && $form.data('form-behavior') !== 'volunteer_signup') {
                  var faDataLayer2 = {};
                  faDataLayer2['event'] = 'form_error';
                  faDataLayer2['form_name'] = $form.find('.at-form')[0].id;
                  faDataLayer2['form_type'] = 'email_signup';
                  faDataLayer2['field_name'] = 'EmailAddress';
                  faDataLayer2['user_audience_type'] = 'Public';
                  window.dataLayer.push(faDataLayer2);
                };
              }
              else if (!state || state === "unknown") {
                // If there's no valid response, just submit it.
                $form.closest(".ngp-form").removeClass("spinner");
                $submit.off('click').trigger('click'); // Submit the form
              }
              else {
                // but if it's not, then it's likely a bad email
                $(".EmailAddress", $form).addClass("error"); // so add the error state to the EmailAddress wrapper
                $("<small class='error'>You appear to have used an invalid email address. Please enter a valid email address above.</small>").insertAfter($submit); // provide a useful error message below the submit button
                $form.closest(".ngp-form").removeClass("spinner");
                if ($form.data('form-behavior') == 'volunteer_signup') {
                  var faDataLayer = {};
                  faDataLayer['event'] = 'form_error';
                  faDataLayer['form_name'] = $form.find('.at-form')[0].id;
                  faDataLayer['form_type'] = 'volunteer';
                  faDataLayer['field_name'] = 'EmailAddress';
                  faDataLayer['user_audience_type'] = 'Volunteer';
                  window.dataLayer.push(faDataLayer);
                };
                if ($form.find(".EmailAddress").length > 0 && $form.data('form-behavior') !== 'volunteer_signup') {
                  var faDataLayer2 = {};
                  faDataLayer2['event'] = 'form_error';
                  faDataLayer2['form_name'] = $form.find('.at-form')[0].id;
                  faDataLayer2['form_type'] = 'email_signup';
                  faDataLayer2['field_name'] = 'EmailAddress';
                  faDataLayer2['user_audience_type'] = 'Public';
                  window.dataLayer.push(faDataLayer2);
                };
              }
            })
            .fail(function () {
              $form.closest(".ngp-form").removeClass("spinner"); // remove the spinning class on the form container
              $submit.off('click').trigger('click'); // Submit the form
            });
        }
      }
    },

    /**
     * Add an ActionTag callback with name and callback function. Any number of
     * callbacks can be added.
     *
     * @param {string} callbackName
     * @param {function} callback
     */
    addCallback: function (callbackName, callback) {
      window.nvtag_callbacks = window.nvtag_callbacks || {};

      window.nvtag_callbacks[callbackName] = window.nvtag_callbacks[callbackName] || [];
      window.nvtag_callbacks[callbackName].push(callback);
    },

    /**
     * Register a special kind of ActionTag callback that is only run on forms
     * with the designated form behavior. Note: only one callback function can be
     * registered for any behaviorName/callbackName pair.
     *
     * Supported callbacks: postFill, postRender, preSegue, segue.
     *
     * @param {string} behaviorName
     * @param {string} callbackName
     * @param {function} callback
     */
    registerFormBehaviorCallback: function (behaviorName, callbackName, callback) {
      _formBehaviors[behaviorName] = _formBehaviors[behaviorName] || {};
      _formBehaviors[behaviorName][callbackName] = callback;
    }
  };

  function volunteerSignupPreSegue(args) {
    var $form = $(args.formdef.options.el);

    var zip_code = args.postVals.PostalCode;
    if (zip_code) {
      if (zip_code.length > 4) {
        zip_code = zip_code.substring(0, 5);
      }
      var $localFoodBanks = $('<div class="local-food-banks"></div>');
      $localFoodBanks.append('<div class="loading-white"></div>'); // Loading...
      $localFoodBanks.insertAfter($form.closest('.ngp-form'));
      var zipOrganizations = new FA.httpWebService();
      zipOrganizations.init({url: '/ws-api', dataType: 'json'});
      zipOrganizations.request('GetOrganizationsByZip', { zip: zip_code }, 'Organization', function(data) {
        var counter = 0;
        $localFoodBanks.empty();

        for (var key in data) {
          counter++;
          if (counter > 2) { return; } // Display only first two results

          var org = data[key];
          var profileUrlName = (org.FullName.replace(/ - /g, '-')).replace(/ /g, '-').toLowerCase();
          var profileUrl = '/find-your-local-foodbank/' + (profileUrlName.replace(/[&]/g, 'and')).replace(/[^a-zA-Z0-9-]/g, '') + '.html';

          $localFoodBanks.append([
            '<div class="find_local_food_bank_result">',
            '<h3>Your nearest Feeding America member food bank is:</h3>',
            '<a href="', profileUrl, '">', org.FullName, '</a> &nbsp;&bull;&nbsp; ', org.MailAddress.City, ', ', org.MailAddress.State, '<br>',
            '<span class="volunteer-url">Learn more about <a href="', org.VolunteerURL, '">volunteer opportunities</a> at this food bank.</span>',
            '</div>'
          ].join(''));
        }

        var faDataLayer = {};
        faDataLayer['event'] = 'volunteer_form_submit';
        faDataLayer['page_area'] = 'Hero';
        faDataLayer['page_sub_area'] = 'Volunteer Form';
        faDataLayer['user_audience_type'] = 'Volunteer';
        window.dataLayer.push(faDataLayer);

        var faDataLayer2 = {};
        faDataLayer2['event'] = 'email_signup';
        faDataLayer2['form_name'] = $form.find('.at-form')[0].id;
        faDataLayer2['user_audience_type'] = 'Volunteer';
        window.dataLayer.push(faDataLayer2);

        var faDataLayer3 = {};
        faDataLayer3['event'] = 'form_submit';
        faDataLayer3['form_name'] = $form.find('.at-form')[0].id;
        faDataLayer3['form_type'] = 'volunteer';
        faDataLayer3['user_audience_type'] = 'Volunteer';
        window.dataLayer.push(faDataLayer3);

        if (counter == 0) { // No results
          var faDataLayer4 = {};
          faDataLayer4['event'] = 'form_error';
          faDataLayer4['form_name'] = $form.find('.at-form')[0].id;
          faDataLayer4['form_type'] = 'volunteer';
          faDataLayer4['field_name'] = 'PostalCode';
          faDataLayer4['user_audience_type'] = 'Volunteer';
          window.dataLayer.push(faDataLayer4);

          $localFoodBanks.append('This is an invalid zip. A valid U.S. zip is required');
        }
      }, function (response) { // Error
        $localFoodBanks.html('Our online search is not working at this time. To find out your food bank, please call us at 800.771.2303');
      });
    } else {
      $('.at-form', $form).parent().append('<p class="success-message">Thank you for signing up!</p>');

      var faDataLayer = {};
      faDataLayer['event'] = 'volunteer_form_submit';
      faDataLayer['page_area'] = 'Hero';
      faDataLayer['page_sub_area'] = 'Volunteer Form';
      faDataLayer['user_audience_type'] = 'Volunteer';
      window.dataLayer.push(faDataLayer);

      var faDataLayer2 = {};
      faDataLayer2['event'] = 'form_submit';
      faDataLayer2['form_name'] = $form.find('.at-form')[0].id;
      faDataLayer2['form_type'] = 'volunteer';
      faDataLayer2['user_audience_type'] = 'Volunteer';
      window.dataLayer.push(faDataLayer2);
    }
  }
  Drupal.behaviors.eaForms.registerFormBehaviorCallback('volunteer_signup', 'preSegue', volunteerSignupPreSegue);

  // Summer Hunger download PDF response.
  function downloadActionPlanPreSegue(args) {
    var $form = $(args.formdef.options.el);
    $form.removeClass('spinner')
      .after('<p class="download-message">Thank you for signing up. Download your <a href="https://www.feedingamerica.org/sites/default/files/2023-04/summer-action-plan-2023.pdf" download>Summer Action Plan</a>. Keep an eye on your inbox for more ways to help end hunger in the United States.</p>')
      .find('input[type="submit"].btn-at-primary').prop("disabled", true);
    // window.open('https://www.feedingamerica.org/sites/default/files/2023-04/summer-action-plan-2023.pdf', '_blank');
  }
  Drupal.behaviors.eaForms.registerFormBehaviorCallback('download_action_plan', 'preSegue', downloadActionPlanPreSegue);

  // Add placeholder / required text, make sure text is wrapped in <kbd> tag.
  function showThankYouPostFill(args) {
    var $form = $(args.view.el);
    $form.find('.at-text input').each(function(){
      var el = $(this),
          label = el.parent(),
          labelInput = label.html(),
          labelText = label.text();
        label.contents().filter(function(){
          return (this.nodeType == 3);
        }).remove();
        label.prepend(('<kbd>' + labelText.trim() + '</kbd>'))
        if (!$(this).prop('required')){
          el.attr('placeholder', labelText);
        } else {
          el.attr('placeholder', labelText + '*');
        }
    });
  }
  Drupal.behaviors.eaForms.registerFormBehaviorCallback('show_thank_you', 'postFill', showThankYouPostFill);

  // Show 'Thank You' blurb.
  function showThankYouPreSegue(args) {
    var $form = $(args.formdef.options.el);
    $form.removeClass('spinner');
    $('.ngp-spinner, .fa-field-intro').remove();
    $('div.thank-you').show();
  }
  Drupal.behaviors.eaForms.registerFormBehaviorCallback('show_thank_you', 'preSegue', showThankYouPreSegue);

  // Post-signup redirect.
  function signupRedirectPreSegue(args) {
    var $form = $(args.formdef.options.el);
    $form.removeClass('spinner');
    window.location.href = "https://give.feedingamerica.org/SfJsiULP-EiyWdCx6ACyyg2";
  }
  Drupal.behaviors.eaForms.registerFormBehaviorCallback('signup_redirect', 'preSegue', signupRedirectPreSegue);

  // E-Card textarea pre-fill.
  function ecardMessagePostFill(args) {
    var $form = $(args.view.el);
    $form.find('textarea')
      .after("<div id='sample-text'><small>Sample message: <em>I know you don't know me, but times are tough for a lot of us right now. I want you to know I'm thinking of you this holiday season because...</em></small></div>")
      .attr('aria-describedby', 'sample-text')
      .parent().find('kbd').append('*');
    $form.find('#sample-text').click(function(e){
      e.preventDefault();
      $form.find('textarea').text("I know you don't know me, but times are tough for a lot of us right now. I want you to know I'm thinking of you this holiday season because ");
    });
    $form.find('.at-text input').each(function(){
      var el = $(this)
          placeholder = el.attr('placeholder')
          label = el.parent().find('kbd');
      if (placeholder.match(/\*$/)) {
        el.attr('placeholder', label.text());
        label.text(placeholder);
      }
    });

  }
  Drupal.behaviors.eaForms.registerFormBehaviorCallback('ecard_message', 'postFill', ecardMessagePostFill);

})(jQuery, Drupal, window, FA);
;
/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));
;
