var _initSearch=function(){var e=document.getElementById("frase-search");if(e){e.innerHTML="";var t=document.createElement("div");t.id="frase-search-wrapper";var n=document.createElement("form");n.id="frase-search-form";var a=document.createElement("input");a.id="frase-search-input",a.placeholder="Search site..",a.setAttribute("autocomplete","off");var i=document.createElement("button");i.id="frase-close-search",i.onclick=function(){frase.search.close()},i.style.visibility="hidden";var o=document.createElement("div");o.id="frase-search-autosuggest",o.style.visibility="hidden",n.append(a),t.append(n),t.append(i),t.append(o),e.append(t),frase.search.searchInputListener(),frase.search.setSearchStyling()}},_updateSearchSettings=function(e){var t=document.getElementById("frase-search-input");e=frase.context.active_bot;t&&e&&e.miscInfo&&e.miscInfo.other&&e.miscInfo.other.siteSearchPlaceholder&&(t.placeholder=e.miscInfo.other.siteSearchPlaceholder)},_closeSearch=function(){frase.search.clearAutoSuggest();var e=document.getElementById("frase-close-search");e&&(e.style.visibility="hidden");var t=document.getElementById("frase-search-input");t&&(t.value="");var n=document.getElementById("frase-search");n&&n.classList.remove("frase-search-active-mobile")},_setSearchStyling=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML="#frase-search{min-width: 300px; width: 500px; max-width: 100%;}#frase-search-wrapper{background-color: white; border: 1px solid rgb(0 0 0 / 10%); border-radius: 3px; padding: 0 10px; position: relative;}#frase-search-form{border: none; box-shadow: none; display: inline-block; margin: 0; padding: 0; width: 90%;}#frase-search-input{border: none; box-shadow: none; color: #555; font-size: 15px; margin: 0; padding: 10px 0px 10px 0px; outline: none; width: 100%;}#frase-close-search{background-color: transparent; border: none; color: #555; cursor: pointer; display: inline-block; margin: 0; padding: 0; outline: none; text-align: right; width: 10%;}#frase-close-search:focus{border: none; outline: none;}#frase-close-search:after{content: '✕'; font-size: 15px;}#frase-search-autosuggest{background-color: white; border: 1px solid rgb(0 0 0 / 10%); border-radius: 3px; left: -1px; margin-top: 2px; position: absolute; width: 100%; z-index: 999999999;}#frase-search-autosuggest ul{margin: 0; max-height: 400px; overflow-y: scroll; padding: 0;}#frase-search-autosuggest .item{cursor: pointer; display: inline-block; font-size: 15px; margin: 0; padding: 5px 0; width: 100%;}#frase-search-autosuggest .item:hover{background-color: #f3f5f8;}#frase-search-autosuggest .item-img{background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; border-radius: 5px; display: inline-block; height: 70px; margin-left: 10px; vertical-align: middle; max-width: 15%; width: 70px;}#frase-search-autosuggest .item-body{display: inline-block; padding: 0 10px; vertical-align: middle;}#frase-search-autosuggest .item-header{font-size: 15px; font-weight: 500; margin: 5px 0; padding: 0;}#frase-search-autosuggest .item-path{font-size: 13px; margin: 5px 0; opacity: 0.5; padding: 0;}#frase-search-autosuggest .item-price{font-size: 13px; margin: 5px 0; opacity: 0.5; padding: 0;}#frase-search-autosuggest .item-snippet{font-size: 13px; margin: 5px 0; opacity: 0.8; padding: 0;}",document.getElementsByTagName("head")[0].appendChild(e)},_clearAutoSuggest=function(){var e=document.getElementById("frase-search-autosuggest");e&&(e.style.visibility="hidden")},_searchInputListener=function(){var e=document.getElementById("frase-search-input");e.addEventListener("keyup",(function(e){_searchInput(e)})),e.addEventListener("click",(function(e){_clickInput(e)})),document.getElementById("frase-search-form").addEventListener("submit",(function(e){e.preventDefault()}))},_clickInput=function(e){document.getElementById("frase-search").classList.add("active"),"true"==frase.is_mobile&&document.getElementById("frase-search").classList.add("frase-search-active-mobile");var t=document.getElementById("frase-close-search");t&&(t.style.visibility="visible"),frase.search.active_results||frase.search.renderFeaturedLinks()},_searchInput=function(e,t){e.preventDefault();var n=e.currentTarget.value;if(n&&13==e.keyCode)frase.widget.ask(n),frase.search.clearAutoSuggest();else if(!n||32!=e.keyCode&&191!=e.keyCode)n&&0!=n.length||(frase.search.clearAutoSuggest(),frase.search.renderFeaturedLinks());else{document.getElementById("frase-search-autosuggest");frase.search.query(n).then((function(e){frase.search.renderAutosuggest(e),frase.search.retryDelayedSearch()}))}},_retryDelayedSearch=function(){setTimeout((function(){var e=document.getElementById("frase-search-input");e&&e.value&&e.value.length>1&&frase.search.query(e.value).then((function(e){frase.search.renderAutosuggest(e)}))}),1e3)};function _searchQuery(e){return new Promise((function(t,n){if(e=e.trim(),frase.search.cache[e]){var a=frase.search.cache[e];a&&a.length>0&&t(a)}else if(!frase.search.in_progress){var i=frase.context.active_bot,o=[];if(i.datasets&&i.datasets.length>0&&(o=o.concat(i.datasets)),i.crawls&&i.crawls.length>0)for(index=0;index<i.crawls.length;++index){var r=i.crawls[index]+"_kb";o.push(r)}var s={datasets:o,query:e,full_object:"true",thresh:-50,ranker_thresh:.25,top_n:10,use_ranker:"true"};frase.search.in_progress=!0;var c=new XMLHttpRequest;c.open("post",frase.context.path+"/qa/fetchAutoSuggestCORS",!0),c.setRequestHeader("Content-type","application/json"),c.send(JSON.stringify(s)),c.onreadystatechange=function(){if(4==c.readyState&&200==c.status){var n=JSON.parse(c.responseText).suggestions;frase.search.cache[e]=n,frase.search.in_progress=!1,t(n)}}}}))}var _renderFeaturedLinks=function(){var e=frase.context.active_bot.miscInfo.other.siteSearchLinks;if(e&&(e=JSON.parse(e))&&e.links&&e.links.length>0){var t="";for(t+="<ul>",index=0;index<e.links.length;++index){var n=e.links[index];t+="<li class='item'>",t+="<a style='display: inherit; text-decoration: none !important; width: 100%;' ",t+="onclick='frase.search.logQuery(\""+n.title+'", "'+n.link+'")\' href="'+n.link+'">',t+="<div class='item-body'>",t+="<p class='item-header'>"+n.title+"</p>",t+="</div>",t+="</a>",t+="</li>"}t+="</ul>";var a=document.getElementById("frase-search-autosuggest");a.innerHTML=t,a.style.visibility="visible";var i=document.getElementById("frase-close-search");i&&(i.style.visibility="visible")}},_renderAutosuggest=function(e){if(e&&e.length>0){var t="";for(t+="<ul>",index=0;index<e.length;++index){var n=e[index];if(n.answer){var a=n.answer.replace(/(<([^>]+)>)/gi," ").trim();a.length>100&&(a=a.slice(0,100)+"...")}if(n.buttons&&n.buttons[0]&&n.buttons[0].link&&n.buttons[0].link.length>0)var i=n.buttons[0].link;if(t+="<li class='item'>",i&&"kb"==n.dataset_type?t+="<a style='display: inherit; text-decoration: none !important; width: 100%;' onclick='frase.search.logQuery(\""+n.question+'", "'+i+"\")' href="+i+">":t+="<a style='display: inherit; text-decoration: none !important; width: 100%;' onclick='frase.widget.ask(\""+n.question+"\")'>",n.product_info&&n.product_info.image_link)t+="<div class='item-img' style='background-image: url(\""+n.product_info.image_link+"\")'></div>",t+="<div class='item-body' style='width: 80%;'>";else t+="<div class='item-body'>";if(t+="<p class='item-header'>"+n.question+"</p>",i&&!n.product_info&&"kb"==n.dataset_type){var o=frase.util.getUrlPath(i);o&&o.length>0&&(t+="<p class='item-path'>"+o+"</p>")}else n.product_info&&n.product_info.price&&(t+="<p class='item-price'>"+n.product_info.price+"</p>");a&&(t+="<p class='item-snippet'>"+a+"</p>"),t+="</div>",t+="</a></li>"}t+="</ul>";var r=document.getElementById("frase-search-autosuggest");r.innerHTML=t,r.style.visibility="visible";var s=document.getElementById("frase-close-search");s&&(s.style.visibility="visible"),frase.search.active_results=!0}else frase.search.active_results=!1},_getUrlPath=function(e){var t="",n=(e=frase.util.cleanUrlPrefix(e)).split("/").slice(0,e.split("/").length);if(n.length>0)for(i=0;i<n.length;++i)n[i].length>0&&(0==i?t+=n[i]:t+=" > "+n[i]);return t},_cleanUrlPrefix=function(e){return e?e=(e=(e=(e=e.replace("https://","")).replace("http://","")).replace("www.","")).replace(/\/$/,""):""},_inputListener=function(){var e=document.getElementsByClassName("frase-input");e&&e[0]&&(e[0].addEventListener("keydown",(function(e){if(13==e.keyCode){e.preventDefault();var t=e.currentTarget.value;t&&t.length>0&&frase.context.iframe&&frase.context.iframe.contentWindow&&(frase.settings.display=!0,frase.widget.show(),frase.context.iframe.contentWindow.postMessage({question:t,question_source:"custom html"},"*"))}})),frase.context.custom_frase_input=!0)},_track=function(e){if(frase.context.frase_engaged_user_cookie){var t={event:e.event,frase_cookie:frase.context.frase_cookie,bot_id:frase.context.active_bot.id.toString(),traits:e.traits},n=new XMLHttpRequest;n.open("post",frase.context.path+"/qa/fetchCORSInfoFromServices",!0),n.setRequestHeader("Content-type","application/json"),n.send(JSON.stringify(t)),n.onreadystatechange=function(){4==n.readyState&&200==n.status&&console.log("frase event")}}},_show=function(){document.getElementById("frase-widget-container").style.display="block"},_hide=function(){document.getElementById("frase-widget-container").style.display="none"},_open=function(e){frase.widget.show(),frase.context.iframe&&frase.context.iframe.contentWindow&&frase.context.iframe.contentWindow.postMessage({open:!0,greeting:e},"*")},_showGreeting=function(){frase.widget.show(),frase.context.iframe&&frase.context.iframe.contentWindow&&frase.context.iframe.contentWindow.postMessage({showGreeting:"true"},"*")},_hideGreeting=function(){frase.widget.show(),frase.context.iframe&&frase.context.iframe.contentWindow&&frase.context.iframe.contentWindow.postMessage({showGreeting:"false"},"*")},_disableChatFallback=function(){frase.context.iframe&&frase.context.iframe.contentWindow&&frase.context.iframe.contentWindow.postMessage({disableChatFallback:"true"},"*")},_ask=(_open=function(e){frase.widget.show(),frase.context.iframe&&frase.context.iframe.contentWindow&&frase.context.iframe.contentWindow.postMessage({open:!0,greeting:e},"*")},function(e){frase.widget.show(),frase.search.clearAutoSuggest(),frase.context.iframe&&frase.context.iframe.contentWindow&&frase.context.iframe.contentWindow.postMessage({question:e},"*")}),_logQuery=function(e,t){if(frase.context.iframe&&frase.context.iframe.contentWindow){var n={answers:[],answer_type:"site search",url:t};frase.context.iframe.contentWindow.postMessage({site_search:!0,question:e,answer:n},"*"),frase.event({name:"frase_search_click"})}},_set=function(e){frase.settings=e},_identify=function(e){iframe=document.getElementById("frase-widget"),iframe&&iframe.contentWindow?(iframe.contentWindow.postMessage({traits:{email:e.email}},"*"),frase.traits=e,console.log("New trait added to Frase user.")):console.log("No Frase iframe found.")},_event=function(e){if(console.log(e),window.parent.postMessage(e,"*"),"ready"!=e.name){var t=frase.util.guid();frase.context.frase_engaged_user_cookie=t,frase.util.setCookie("frase_engaged_user",t,7)}},_on=function(e,t){"ready"==e&&frase.ready?t():window.addEventListener("message",(function(n){n.data.name&&n.data.name==e&&t()}))},_urlListener=function(){window.addEventListener("popstate",(function(e){!frase.context.open_frase_triggered&&window&&window.location&&window.location.hash&&"#open-frase"==window.location.hash?(frase.context.open_frase_triggered=!0,frase.widget.open()):window.location&&window.location.hash&&window.location.hash.length>0&&frase.context.iframe.contentWindow.postMessage({parent_url_hash:window.location.hash},"*")}))},_handleResize=function(){window.onresize=function(e){var t=window.outerHeight;frase.context.iframe&&frase.context.iframe.contentWindow&&(frase.context.iframe.contentWindow.postMessage({window_height:t},"*"),frase.context.height=t)}},_hideChat=function(){var e=document.createElement("style"),t="";["#hubspot-messages-iframe-container","#drift-widget-container","#drift-widget","#intercom-frame",".intercom-launcher","#olark-wrapper","#tidio-chat-iframe","#contact-widget-launcher","#contact-widget","#fc_frame","#gorgias-web-messenger-container","#gorgias-chat-container","#chat-button","#helpcrunch-iframe"].forEach((function(e,n){t+=e+"{visibility: hidden !important}",t+=e+"{display: none !important}"})),e.innerHTML=t,document.head.appendChild(e),frase.widget.show(),"undefined"!=typeof drift&&drift.hide(),"undefined"!=typeof HubSpotConversations&&HubSpotConversations.widget.remove(),"undefined"!=typeof Intercom&&Intercom("shutdown"),"undefined"!=typeof olark&&olark("api.box.hide"),"undefined"!=typeof tidioChatApi&&tidioChatApi.display(!1),"undefined"!=typeof zE&&zE("webWidget","hide"),"undefined"!=typeof fcWidget&&fcWidget.hide(),"undefined"!=typeof Tawk_API&&Tawk_API.hideWidget(),"undefined"!=typeof HelpCrunch&&HelpCrunch("hideChatWidget")},_showChat=function(){var e=document.createElement("style"),t="";["#hubspot-messages-iframe-container","#drift-widget-container","#drift-widget","#intercom-frame",".intercom-launcher","#olark-wrapper","#tidio-chat-iframe","#contact-widget-launcher","#contact-widget","#fc_frame","#gorgias-web-messenger-container","#gorgias-chat-container","#chat-button","#helpcrunch-iframe"].forEach((function(e,n){t+=e+"{visibility: visible !important}",t+=e+"{display: block !important}"})),e.innerHTML=t,document.head.appendChild(e),frase.widget.hide(),"undefined"!=typeof drift&&drift.show(),"undefined"!=typeof HubSpotConversations&&HubSpotConversations.widget.load(),"undefined"!=typeof Intercom&&Intercom("show"),"undefined"!=typeof olark&&olark("api.box.show"),"undefined"!=typeof tidioChatApi&&tidioChatApi.display(!0),"undefined"!=typeof zE&&zE("webWidget","show"),"undefined"!=typeof fcWidget&&fcWidget.show(),"undefined"!=typeof Tawk_API&&Tawk_API.showWidget(),"undefined"!=typeof HelpCrunch&&HelpCrunch("showChatWidget")},_showChatSidebar=function(e){frase.widget.showChat(),"undefined"!=typeof drift&&drift.openChat(),"undefined"!=typeof HubSpotConversations&&HubSpotConversations.widget.open(),"undefined"!=typeof Intercom&&Intercom("show"),"undefined"!=typeof olark&&olark("api.box.expand"),"undefined"!=typeof tidioChatApi&&tidioChatApi.open(),"undefined"!=typeof zE&&zE("webWidget","open"),"undefined"!=typeof fcWidget&&fcWidget.open(),"undefined"!=typeof Tawk_API&&Tawk_API.maximize(),"undefined"!=typeof Smooch&&Smooch.open(),"undefined"!=typeof GorgiasChat&&GorgiasChat.open(),"undefined"!=typeof HelpCrunch&&HelpCrunch("openChat")},_minimizeBot=function(){if("false"==frase.context.is_mobile){var e=document.getElementById("frase-widget-container");e.style.height="190px",e.style.width="300px"}},_removeGreeting=function(){var e=document.getElementById("frase-widget-container");e.style.height="75px",e.style.width="70px";var t=new Date;t=frase.util.formatDate(t),frase.util.setCookie("frase_widget_closed",t)},_formatDate=function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate();t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[n,a].join("/")},_positionAvatar=function(){var e=document.getElementById("frase-widget-container"),t=frase.context.active_bot;t&&t.miscInfo&&t.miscInfo.other&&t.miscInfo.other.marginBottom&&(e.style.bottom=t.miscInfo.other.marginBottom+"px")},_showAvatar=function(){var e=document.getElementById("frase-widget-container");e.style["background-color"]="transparent",e.style["box-shadow"]="none",e.style.display="block",e.style.height="260px",e.style.position="fixed",e.style.top="auto",e.style.right="15px",e.style["z-index"]="999999999999","true"==frase.context.is_mobile&&(e.style.bottom="5px",e.style.height="150px",e.style.top="auto",e.style.right="5px",e.style.width="140px");var t=frase.context.active_bot;t&&t.miscInfo&&t.miscInfo.other&&t.miscInfo.other.marginBottom?e.style.bottom=t.miscInfo.other.marginBottom+"px":e.style.bottom="10px",frase.context.search_bar_mode?e.style.width="450px":e.style.width="350px","left"==frase.settings.position&&(e.style.left="0"),frase.context.greeting_removed&&frase.widget.removeGreeting();var n=document.getElementById("frase-widget");n.style.border="none",n.style.height="100%",n.style.margin="0",n.style.width="100%",n.style.opacity="1",n.setAttribute("scrolling","no"),!frase.context.open_frase_triggered&&window&&window.location&&window.location.hash&&"#open-frase"==window.location.hash&&(frase.context.open_frase_triggered=!0,frase.widget.open())},_showSidebar=function(){var e=document.getElementById("frase-widget-container");e.style.bottom="0",e.style.height="100%",e.style.right="0",e.style.width="440px",e.style["background-color"]="white",e.style["box-shadow"]="0 5px 40px rgba(0,0,0,.15)",e.style["z-index"]="999999999999","true"==frase.context.is_mobile&&(e.style.height="100%",e.style.top="0",e.style.right="0",e.style.width="100%")},_googleAnalytics=function(e){"undefined"!=typeof ga&&ga("send",{hitType:"event",eventCategory:"frase",eventAction:"click",eventLabel:e})},_askAudioPermission=function(){window.hasOwnProperty("webkitSpeechRecognition")&&navigator.mediaDevices&&navigator.permissions.query({name:"microphone"}).then((function(e){"granted"==e.state?start_speech.call():navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){frase.context.iframe.contentWindow.postMessage({voice:!0,text:"microphone_request"},"*")})).catch((function(){frase.context.iframe.contentWindow.postMessage({voice:!0,text:"microphone_request"},"*")}))}))},transcript="",_startSpeech=function(){transcript="",recognition=new webkitSpeechRecognition,recognition.continuous=!1,recognition.interimResults=!1,recognition.lang="en-US",recognition.start(),recognition.onresult=function(e){transcript=e.results[0][0].transcript,recognition.stop(),frase.context.iframe.contentWindow.postMessage({voice:!0,text:transcript},"*")},recognition.onnomatch=function(e){recognition.stop(),frase.context.iframe.contentWindow.postMessage({voice:!0,text:transcript},"*")},recognition.onerror=function(e){recognition.stop(),frase.context.iframe.contentWindow.postMessage({voice:!0,text:transcript},"*")}},_addEvent=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},_detectExitIntent=function(){frase.util.addEvent(document,"mouseout",(function(e){frase.context.exit_cookie=frase.util.getCookie("frase_exit_intent");var t=document.getElementById("exit-modal");null!=e.toElement||null!=e.relatedTarget||frase.context.exit_cookie||t||(frase.popup.showExitModal(),frase.context.exit_intent=!0)}))},_showExitModal=function(){var e,t=frase.context.active_bot,n=frase.context.iframe,a=document.getElementsByTagName("HEAD")[0];(e=document.createElement("link")).rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.7/css/all.css",a.appendChild(e),(e=document.createElement("link")).rel="stylesheet",e.type="text/css",e.href=frase.context.path+"/core_platform/css/bots/bots.css",a.appendChild(e);var i=document.createElement("div"),o="<div id='exit-modal'>";o+="<div id='exit-modal-wrapper'>",o+="<i class='fas fa-times' style='color: "+t.miscInfo.brandColor+"'></i>",o+="<img src="+t.avatar+" />",o+="<h2 id='exit-modal-header' style='margin: 0;'>"+t.miscInfo.other.exitPopupHeader+"</h2>",t.miscInfo&&t.miscInfo.other&&t.miscInfo.other.exitPopupText&&(o+="<div id='exit-modal-text'>"+t.miscInfo.other.exitPopupText+"</div>"),o+="<div style='font-size: 16px !important; margin-top: 35px;'>",o+="<div id='exit-modal-input-wrapper'>",o+="<input placeholder='Enter your question...'/></div>",o+="<div id='exit-modal-input-submit'><a style='background-color:"+t.miscInfo.brandColor+" !important'>Send</a></div>",o+="</div>",o+="</div></div>",i.innerHTML=o,document.getElementsByTagName("BODY")[0].appendChild(i);var r=document.getElementById("edit-modal");document.getElementById("exit-modal-input-submit").querySelector("a").onclick=function(){var e=r.querySelector("input").value;e&&e.length>0&&n&&n.contentWindow&&(n.contentWindow.postMessage({question:e,question_source:"popup"},"*"),r.style.display="none")},(r=document.getElementById("exit-modal")).querySelector(".fa-times").onclick=function(){document.getElementById("exit-modal").style.display="none"},frase.util.setCookie("frase_exit_intent","true",1)},_manageCookies=function(){var e=frase.util.getCookie("frase_cookie");e?(frase.context.frase_cookie=e,frase.context.known_user=!0):(e=frase.util.guid(),frase.context.frase_cookie=e,frase.context.known_user=!1,frase.util.setCookie("frase_cookie",e,30));var t=frase.util.getCookie("frase_engaged_user");if(t&&(frase.context.frase_engaged_user_cookie=t),frase.context.frase_widget_closed_cookie=frase.util.getCookie("frase_widget_closed"),frase.context.frase_widget_closed_cookie){var n=new Date;(n=frase.util.formatDate(n))!=frase.context.frase_widget_closed_cookie&&(frase.context.frase_widget_closed_cookie=null,frase.util.deleteCookie("frase_widget_closed"))}},_setCookie=function(e,t,n){var a="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),a="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+a+"; path=/"},_getCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var i=n[a];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},_deleteCookie=function(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},_guid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+e()+e()},_ga_convention={ea:"event",ec:"event_category",dl:"document_location",dt:"document_title",tr:"transaction_revenue"},_ga_event_listener=function(){ga((function(e){var t=e.get("sendHitTask");e.set("sendHitTask",(function(e){t(e);var n=e.get("hitPayload"),a=(n=decodeURIComponent(n)).split("&"),i={event:null,traits:{}};for(index=0;index<a.length;++index){var o=a[index],r=o.split("=")[0],s=o.split("=")[1];frase.util.gaConvention[r]&&("event"==(r=frase.util.gaConvention[r])?i.event=s:i.traits[r]=s)}i&&i.event&&frase.track(i)}))}))},_get_parameter_by_name=function(e,t){e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null};window.addEventListener("message",(function(e){if(e&&e.data){if(e.data.hash){if(frase.util.manageCookies(),frase.context.hash=e.data.hash,frase.context.iframe=document.getElementById("frase-widget"),frase.context.iframe&&frase.context.iframe.contentWindow){var t={height:frase.context.height,is_mobile:frase.context.is_mobile,parent_url:frase.context.parent_url,parent_url_hash:frase.context.parent_url_hash,question:frase.context.question,custom_frase_input:frase.context.custom_frase_input,settings:frase.settings,frase_cookie:frase.context.frase_cookie,known_user:frase.context.known_user,frase_widget_closed_cookie:frase.context.frase_widget_closed_cookie};frase.event({name:"ready"}),frase.ready=!0,"undefined"!=typeof test_bot&&(t.test_bot=test_bot),frase.context.iframe.contentWindow.postMessage(t,"*")}}else if(e.data.active_bot){frase.context.active_bot=e.data.active_bot,frase.context.active_bot.miscInfo.other&&"true"==frase.context.active_bot.miscInfo.other.exitPopup&&frase.popup.detectExitIntent(),frase.active=!0,frase.context.iframe&&frase.context.iframe.contentWindow&&frase.context.iframe.contentWindow.postMessage({settings:frase.settings},"*"),frase.search.updateSettings(frase.context.active_bot);var n=frase.util.getParameterByName("frase-q",frase.context.parent_url);n&&frase.widget.ask(n)}else"destroy_bot"==e.data.event_id?(document.getElementById("frase-widget").remove(),frase.context.widget_closed=!0,frase.widget.showChat()):"remove_greeting"==e.data.event_id?(frase.context.widget_closed=!0,frase.context.greeting_removed=!0,frase.widget.removeGreeting()):"minimize_bot"!=e.data.event_id||frase.context.search_bar_mode?"show_panel"==e.data.event_id?(frase.widget.showSidebar(),frase.event({name:"frase_sidebar"})):"close_panel"==e.data.event_id?(frase.widget.showAvatar(),frase.widget.hideChat(),frase.event({name:"frase_sidebar_close"})):"show_search_mode"==e.data.event_id?(frase.context.search_bar_mode=!0,frase.widget.showAvatar(),frase.widget.hideChat()):"show_bot_avatar"==e.data.event_id?(frase.widget.showAvatar(),frase.widget.hideChat()):"position_bot_avatar"==e.data.event_id?frase.widget.positionAvatar():"talk_to_human"==e.data.event_id?(frase.widget.showChatSidebar(e.data.questions),frase.event({name:"frase_live_chat"})):e.data.ga?(frase.util.googleAnalytics(e.data.event.name),frase.event(e.data.event)):"ask_audio"==e.data.event_id?frase.util.askAudioPermission():"email_capture"==e.data.event_id&&frase.event({name:"frase_email_capture"}):frase.widget.minimizeBot();frase.settings&&0==frase.settings.display&&frase.widget.hide()}}));var _loadBot=function(e){var t=window.location.origin;-1!=t.indexOf("localhost")?frase.context.path="https://localhost:8443":-1!=t.indexOf("dev.frase")?frase.context.path="https://dev.frase.io":-1!=t.indexOf("staging.frase")?frase.context.path="https://staging.frase.io":frase.context.path="https://app.frase.io";var n=document.createElement("iframe"),a=window;frase.context.width=a.innerWidth,frase.context.height=a.innerHeight,frase.context.width<700?frase.context.is_mobile="true":frase.context.is_mobile="false",frase.context.question=e,n.src=frase.context.path+"/bot/home/"+frase.context.hash,n.id="frase-widget",n.title="Frase Question Answering Chatbot",n["aria-label"]="Frase Question Answering Chatbot",n.style.opacity=0,document.getElementById("frase-widget-container").append(n),frase.widget.hideChat()},_getHash=function(){var e;if(frase.context.parent_url=window.location.href,frase.context.parent_url_hash=window.location.hash,document.getElementById("frase-script"))e=document.getElementById("frase-script").getAttribute("data-hash");else{var t=document.getElementById("frase-widget-container");if(t)e=(e=t.children[0].getAttribute("id")).split("-")[1]}if(e){frase.context.hash=e;var n=document.createElement("div");n.id="frase-widget-container",document.body.appendChild(n),frase.util.loadBot(""),frase.util.inputListener(),frase.util.urlListener(),frase.util.handleResize()}},_init=function(){frase.util.getHash(),frase.search.init(),"undefined"!=typeof ga&&frase.util.gaEventListener.call()},frase={active:!1,event:_event,identify:_identify,init:_init,on:_on,ready:!1,traits:{},track:_track,set:_set,context:{active_bot:null,custom_frase_input:null,exit_intent:null,hash:null,height:null,iframe:null,is_mobile:null,known_user:null,frase_cookie:null,frase_widget_closed_cookie:null,open_frase_triggered:null,parent_url:null,parent_url_hash:null,path:null,question:null,search_bar_mode:null,widget_closed:null,width:null},popup:{detectExitIntent:_detectExitIntent,showExitModal:_showExitModal},search:{cache:{},clearAutoSuggest:_clearAutoSuggest,clickInput:_clickInput,close:_closeSearch,init:_initSearch,in_progress:!1,logQuery:_logQuery,query:_searchQuery,renderFeaturedLinks:_renderFeaturedLinks,renderAutosuggest:_renderAutosuggest,retryDelayedSearch:_retryDelayedSearch,searchInputListener:_searchInputListener,setSearchStyling:_setSearchStyling,updateSettings:_updateSearchSettings},settings:{chat_cta:null,display:!0,inner_avatar:null,position:null},util:{addEvent:_addEvent,cleanUrlPrefix:_cleanUrlPrefix,getHash:_getHash,getUrlPath:_getUrlPath,getParameterByName:_get_parameter_by_name,gaConvention:_ga_convention,gaEventListener:_ga_event_listener,googleAnalytics:_googleAnalytics,guid:_guid,formatDate:_formatDate,handleResize:_handleResize,loadBot:_loadBot,manageCookies:_manageCookies,getCookie:_getCookie,setCookie:_setCookie,deleteCookie:_deleteCookie,startSpeech:_startSpeech,askAudioPermission:_askAudioPermission,urlListener:_urlListener,inputListener:_inputListener},widget:{ask:_ask,disableChatFallback:_disableChatFallback,hide:_hide,hideChat:_hideChat,hideGreeting:_hideGreeting,minimizeBot:_minimizeBot,open:_open,positionAvatar:_positionAvatar,removeGreeting:_removeGreeting,show:_show,showAvatar:_showAvatar,showChat:_showChat,showChatSidebar:_showChatSidebar,showGreeting:_showGreeting,showSidebar:_showSidebar}};!document.readyState||"complete"!=document.readyState&&"interactive"!=document.readyState?document.addEventListener("DOMContentLoaded",(function(){frase.init()})):frase.init();