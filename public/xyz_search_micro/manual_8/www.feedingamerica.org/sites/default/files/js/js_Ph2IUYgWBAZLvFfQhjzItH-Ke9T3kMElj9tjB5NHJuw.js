/*
Modified version of: http://www.fyneworks.com/jquery/xml-to-json/
*/
// Avoid collisions
;if(window.jQuery) (function($){
 
 // Add function to jQuery namespace
 $.extend({
  
  // converts xml documents and xml text to json object
  xml2json: function(xml, extended) {
   if(!xml) return {}; // quick fail
   
   //### PARSER LIBRARY
   // Core function
   function parseXML(node, simple){
    if(!node) return null;
    var txt = '', obj = null, att = null;
    var nt = node.nodeType, nn = jsVar(node.localName || node.nodeName);
    var nv = node.text || node.nodeValue || '';
    /*DBG*/ //if(window.console) console.log(['x2j',nn,nt,nv.length+' bytes']);
    if(node.childNodes){
     if(node.childNodes.length>0){
      var children = node.childNodes;
      if (children.length==1) {
       children = [node.firstChild];
      }
      /*DBG*/ //if(window.console) console.log(['x2j',nn,'CHILDREN',node.childNodes]);
      $.each(children, function(n,cn){
       var cnt = cn.nodeType, cnn = jsVar(cn.localName || cn.nodeName);
       var cnv = cn.text || cn.nodeValue || '';
       /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>a',cnn,cnt,cnv]);
       if(cnt == 8){
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>b',cnn,'COMMENT (ignore)']);
        return; // ignore comment node
       }
       else if(cnt == 3 || cnt == 4 || !cnn){
        // ignore white-space in between tags
        if(cnv.match(/^\s+$/)){
         /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>c',cnn,'WHITE-SPACE (ignore)']);
         return;
        };
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>d',cnn,'TEXT']);
        txt += cnv.replace(/^\s+/,'').replace(/\s+$/,'');
								// make sure we ditch trailing spaces from markup
       }
       else{
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>e',cnn,'OBJECT']);
        obj = obj || {};
        if(obj[cnn]){
         /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>f',cnn,'ARRAY']);
         
									// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
									if(!obj[cnn].length) obj[cnn] = myArr(obj[cnn]);
									obj[cnn] = myArr(obj[cnn]);
         
									obj[cnn][ obj[cnn].length ] = parseXML(cn, true/* simple */);
         obj[cnn].length = obj[cnn].length;
        }
        else{
         /*DBG*/ //if(window.console) console.log(['x2j',nn,'node>g',cnn,'dig deeper...']);
         obj[cnn] = parseXML(cn);
        };
       };
      });
     };//node.childNodes.length>0
    };//node.childNodes
    if(node.attributes){
     if(node.attributes.length>0){
      /*DBG*/ //if(window.console) console.log(['x2j',nn,'ATTRIBUTES',node.attributes])
      att = {}; obj = obj || {};
      $.each(node.attributes, function(a,at){
       var atn = jsVar(at.name), atv = at.value;
       att[atn] = atv;
       if(obj[atn]){
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'attr>',atn,'ARRAY']);
        
								// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
								//if(!obj[atn].length) obj[atn] = myArr(obj[atn]);//[ obj[ atn ] ];
        obj[cnn] = myArr(obj[cnn]);
								
								obj[atn][ obj[atn].length ] = atv;
        obj[atn].length = obj[atn].length;
       }
       else{
        /*DBG*/ //if(window.console) console.log(['x2j',nn,'attr>',atn,'TEXT']);
        obj[atn] = atv;
       };
      });
      //obj['attributes'] = att;
     };//node.attributes.length>0
    };//node.attributes
    if(obj){
     obj = $.extend( (txt!='' ? new String(txt) : {}),/* {text:txt},*/ obj || {}/*, att || {}*/);
     //txt = (obj.text) ? (typeof(obj.text)=='object' ? obj.text : [obj.text || '']).concat([txt]) : txt;
     txt = (obj.text) ? ([obj.text || '']).concat([txt]) : txt;
     if(txt) obj.text = txt;
     txt = '';
    };
    var out = obj || txt;
    //console.log([extended, simple, out]);
    if(extended){
     if(txt) out = {};//new String(out);
     txt = out.text || txt || '';
     if(txt) out.text = txt;
     if(!simple) out = myArr(out);
    };
    return out;
   };// parseXML
   // Core Function End
   // Utility functions
   var jsVar = function(s){ return String(s || '').replace(/-/g,"_"); };
   
			// NEW isNum function: 01/09/2010
			// Thanks to Emile Grau, GigaTecnologies S.L., www.gigatransfer.com, www.mygigamail.com
			function isNum(s){
				// based on utility function isNum from xml2json plugin (http://www.fyneworks.com/ - diego@fyneworks.com)
				// few bugs corrected from original function :
				// - syntax error : regexp.test(string) instead of string.test(reg)
				// - regexp modified to accept  comma as decimal mark (latin syntax : 25,24 )
				// - regexp modified to reject if no number before decimal mark  : ".7" is not accepted
				// - string is "trimmed", allowing to accept space at the beginning and end of string
				var regexp=/^((-)?([0-9]+)(([\.\,]{0,1})([0-9]+))?$)/
				return (typeof s == "number") || regexp.test(String((s && typeof s == "string") ? jQuery.trim(s) : ''));
			};
			// OLD isNum function: (for reference only)
			//var isNum = function(s){ return (typeof s == "number") || String((s && typeof s == "string") ? s : '').test(/^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/); };
																
   var myArr = function(o){
    
				// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
				//if(!o.length) o = [ o ]; o.length=o.length;
    if(!$.isArray(o)) o = [ o ]; o.length=o.length;
				
				// here is where you can attach additional functionality, such as searching and sorting...
    return o;
   };
   // Utility functions End
   //### PARSER LIBRARY END
   
   // Convert plain text to xml
   if(typeof xml=='string') xml = $.text2xml(xml);
   
   // Quick fail if not xml (or if this is a node)
   if(!xml.nodeType) return;
   if(xml.nodeType == 3 || xml.nodeType == 4) return xml.nodeValue;
   
   // Find xml root node
   var root = (xml.nodeType == 9) ? xml.documentElement : xml;
   
   // Convert xml to json
   var out = parseXML(root, true /* simple */);
   
   // Clean-up memory
   xml = null; root = null;
   
   // Send output
   return out;
  },
  
  // Convert text to XML DOM
  text2xml: function(str) {
   // NOTE: I'd like to use jQuery for this, but jQuery makes all tags uppercase
   //return $(xml)[0];
   
   /* prior to jquery 1.9 */
   /*
   var out;
   try{
    var xml = ((!$.support.opacity && !$.support.style))?new ActiveXObject("Microsoft.XMLDOM"):new DOMParser();
    xml.async = false;
   }catch(e){ throw new Error("XML Parser could not be instantiated") };
   try{
    if((!$.support.opacity && !$.support.style)) out = (xml.loadXML(str))?xml:false;
    else out = xml.parseFromString(str, "text/xml");
   }catch(e){ throw new Error("Error parsing XML string") };
   return out;
   */

   /* jquery 1.9+ */
   return $.parseXML(str);
  }
		
 }); // extend $

})(jQuery);
;
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function($) {

// Only continue if we're on IE8/IE9 with jQuery 1.5+ (contains the ajaxTransport function)
if ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) {
  return;
}

var httpRegEx = /^https?:\/\//i;
var getOrPostRegEx = /^get|post$/i;
var sameSchemeRegEx = new RegExp('^'+location.protocol, 'i');

// ajaxTransport exists in jQuery 1.5+
$.ajaxTransport('* text html xml json', function(options, userOptions, jqXHR) {
  
  // Only continue if the request is: asynchronous, uses GET or POST method, has HTTP or HTTPS protocol, and has the same scheme as the calling page
  if (!options.crossDomain || !options.async || !getOrPostRegEx.test(options.type) || !httpRegEx.test(options.url) || !sameSchemeRegEx.test(options.url)) {
    return;
  }

  var xdr = null;

  return {
    send: function(headers, complete) {
      var postData = '';
      var userType = (userOptions.dataType || '').toLowerCase();

      xdr = new XDomainRequest();
      if (/^\d+$/.test(userOptions.timeout)) {
        xdr.timeout = userOptions.timeout;
      }

      xdr.ontimeout = function() {
        complete(500, 'timeout');
      };

      xdr.onload = function() {
        var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
        var status = {
          code: 200,
          message: 'success'
        };
        var responses = {
          text: xdr.responseText
        };
        try {
          if (userType === 'html' || /text\/html/i.test(xdr.contentType)) {
            responses.html = xdr.responseText;
          } else if (userType === 'json' || (userType !== 'text' && /\/json/i.test(xdr.contentType))) {
            try {
              responses.json = $.parseJSON(xdr.responseText);
            } catch(e) {
              status.code = 500;
              status.message = 'parseerror';
              //throw 'Invalid JSON: ' + xdr.responseText;
            }
          } else if (userType === 'xml' || (userType !== 'text' && /\/xml/i.test(xdr.contentType))) {
            var doc = new ActiveXObject('Microsoft.XMLDOM');
            doc.async = false;
            try {
              doc.loadXML(xdr.responseText);
            } catch(e) {
              doc = undefined;
            }
            if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
              status.code = 500;
              status.message = 'parseerror';
              throw 'Invalid XML: ' + xdr.responseText;
            }
            responses.xml = doc;
          }
        } catch(parseMessage) {
          throw parseMessage;
        } finally {
          complete(status.code, status.message, responses, allResponseHeaders);
        }
      };

      // set an empty handler for 'onprogress' so requests don't get aborted
      xdr.onprogress = function(){};
      xdr.onerror = function() {
        complete(500, 'error', {
          text: xdr.responseText
        });
      };

      if (userOptions.data) {
        postData = ($.type(userOptions.data) === 'string') ? userOptions.data : $.param(userOptions.data);
      }
      xdr.open(options.type, options.url);
      xdr.send(postData);
    },
    abort: function() {
      if (xdr) {
        xdr.abort();
      }
    }
  };
});

}));
;
jQuery(document).ready(function(jQuery){

    jQuery('#map_states').on('change', function() {
      window.location.href = jQuery('#map_states option:selected').val();
    });

    FA.howweareending = {
      rate: function(num) {
        if (isNaN(num) || num == 0) {
          return false;
        }
        num = 1/num;
        num = Math.round(num);
        num = Math.min(1000, num);
        num = Math.max(1, num);
        return num;
      }
    }

    var statesFullToAbbr = {
      "Alabama": "AL",
      "Alaska": "AK",
      "American Samoa": "AS",
      "Arizona": "AZ",
      "Arkansas": "AR",
      "California": "CA",
      "Colorado": "CO",
      "Connecticut": "CT",
      "Delaware": "DE",
      "District Of Columbia": "DC",
      "Federated States Of Micronesia": "FM",
      "Florida": "FL",
      "Georgia": "GA",
      "Guam": "GU",
      "Hawaii": "HI",
      "Idaho": "ID",
      "Illinois": "IL",
      "Indiana": "IN",
      "Iowa": "IA",
      "Kansas": "KS",
      "Kentucky": "KY",
      "Louisiana": "LA",
      "Maine": "ME",
      "Marshall Islands": "MH",
      "Maryland": "MD",
      "Massachusetts": "MA",
      "Michigan": "MI",
      "Minnesota": "MN",
      "Mississippi": "MS",
      "Missouri": "MO",
      "Montana": "MT",
      "Nebraska": "NE",
      "Nevada": "NV",
      "New Hampshire": "NH",
      "New Jersey": "NJ",
      "New Mexico": "NM",
      "New York": "NY",
      "North Carolina": "NC",
      "North Dakota": "ND",
      "Northern Mariana Islands": "MP",
      "Ohio": "OH",
      "Oklahoma": "OK",
      "Oregon": "OR",
      "Palau": "PW",
      "Puerto Rico": "PR",
      "Pennsylvania": "PA",
      "Rhode Island": "RI",
      "South Carolina": "SC",
      "South Dakota": "SD",
      "Tennessee": "TN",
      "Texas": "TX",
      "The United States": "US",
      "Utah": "UT",
      "Vermont": "VT",
      "Virgin Islands": "VI",
      "Virginia": "VA",
      "Washington": "WA",
      "West Virginia": "WV",
      "Wisconsin": "WI",
      "Wyoming": "WY"
    };

    jQuery('#mlp_map_states').on('change', function() {

      var this_select = document.getElementById('mlp_map_states');
      var mlpStateTitle = this_select.options[this_select.selectedIndex].text;
      var mlpStateName = statesFullToAbbr[mlpStateTitle];
      var mlpStateRateText = document.getElementById("state_hunger_rate_text");

      if (mlpStateName != '' && mlpStateRateText) {
        var mlpstateWS = new FA.httpWebService();
        mlpstateWS.init({url: '/ws-api', dataType: 'json'});
        mlpstateWS.request('GetStateStatisticsByState', { state: mlpStateName }, 'https://www.feedingamerica.org/', function(data) {
          var foodInsecure = FA.howweareending.rate(data.StateStats.FoodInsecurityRate);
          if (mlpStateName == 'US' || mlpStateName == 'PR') {
            foodInsecure = '9';
          }
          var mlpStateRateTextString = ' ';
          if (foodInsecure) {
            mlpStateRateTextString = 'where 1 in '+foodInsecure+' people struggle with hunger.';
          }
          jQuery(mlpStateRateText).text(mlpStateRateTextString);
          Drupal.announce(
            Drupal.t("I live in " + mlpStateTitle + " " + mlpStateRateTextString)
          );
        }, function(response) { // Error
          jQuery(mlpStateRateText).text(' ');
        });
      }
    });

    var stateTitle = jQuery('#stateTitleID').text().trim();
    var stateName = statesFullToAbbr[stateTitle];
    if (typeof stateName === 'undefined') {
      return;
    }
    var stateNameLower = stateName.toLowerCase();

    jQuery('.state_img').attr('src', '/themes/custom/ts_feeding_america/images/state-icons/howweareending_' + stateNameLower + '.png');

    var multiplier = jQuery('.economic-activity .orange strong').text().replace(/\,/g, '');
    var parseMultiplier = parseInt(multiplier);
    var roundMultiplier = Math.round(multiplier);
    var commaMultiplier = Number(roundMultiplier).toLocaleString('en');
    jQuery('.economic-activity .orange strong').html('$' + commaMultiplier);
    if (stateTitle != 'The United States') {
      jQuery('.stateTitle').html(stateTitle);
    }
    else {
      jQuery('.stateTitle').html('the United States');
    }

    function stateHungerMeter(state) {
      if (state != '') {
        var statehmWS = new FA.httpWebService();
        statehmWS.init({url: '/ws-api', dataType: 'json'});
        statehmWS.request('GetStateStatisticsByState', { state : state }, 'https://www.feedingamerica.org/', function(data) {
          var childFoodCount = FA.howweareending.rate(data.StateStats.CHILD_FI_PCT);
          var foodInsecure = FA.howweareending.rate(data.StateStats.FoodInsecurityRate);
          var peopleHunger = Number(data.StateStats.MMG_FI_INDV_POP_COUNT).toLocaleString('en');
          var childHunger = Number(data.StateStats.CHILD_FI_COUNT).toLocaleString('en');
          var annualDollars = Number(data.StateStats.WT_ANNUAL_DOLLARS).toLocaleString('en');
          if (state == 'PR') {
              jQuery('.state-content h2').first().hide();
              jQuery('.state-data').hide();
          }

          jQuery('.child_count').html('1 in ' + childFoodCount);
          jQuery('.people_count').html('1 in ' + foodInsecure);
          var food_insecure_image = Math.min(14, foodInsecure);
          food_insecure_image = Math.max(2, food_insecure_image);
          jQuery('.stat_img').attr('src', '/themes/custom/ts_feeding_america/images/profile_1in' + food_insecure_image + '.png');
          jQuery('.peopleHunger').html(peopleHunger);
          jQuery('.childHunger').html(childHunger);
          jQuery('.cost-per-meal').html('$' + data.StateStats.COST_PER_MEAL);
          jQuery('.wt-annual-dollars').html('$' + annualDollars);

        }, function(response) { // Error
        });
      }
    }
    stateHungerMeter(stateName);

    function stateFoodBanks(state) {
      if (state != '') {

        var statefbWS = new FA.httpWebService();
        statefbWS.init({url: '/ws-api', dataType: 'json'});
        statefbWS.request('GetOrganizationsByState', { state : state }, 'Organization', function(data) {
          if (data !== null) {
            var resultsWrapper = jQuery('#find-fb-search-results');

            for (var key in data) { // build our HTML for each item
              var org = data[key];
              jQuery('#find-fb-search-results').append(buildFAOrgResultBox(org));
            }
            buildFAOrgsSummaryBox(data, resultsWrapper, name);
          }
        },
        function(response) { // Error
        });
      }
    }
    stateFoodBanks(stateName);

    function buildFAOrgResultBox(org) {
      var resultsBox = jQuery('<div class="results-box" data-orgid="' + org.OrganizationID + '">'),
      profileUrlName = (org.FullName.replace(/ - /g, '-')).replace(/ /g, '-').toLowerCase(),
      profileUrl = '/find-your-local-foodbank/' + (profileUrlName.replace(/[&]/g, 'and')).replace(/[^a-zA-Z0-9-]/g, ''),
      orgImage = '<a href="' + profileUrl + '"><img width="230" height="" loading="lazy" border="0" alt="' + org.FullName + '" src="' + org.LogoUrls.FoodBankLocator + '"></a>',
      orgName = '<p class="name"><a href="' + profileUrl + '">' + org.FullName + '</a></p>',
      addressString = (org.MailAddress.Address2) ? org.MailAddress.Address1 + '<br>' + org.MailAddress.Address2 + '<br>' : org.MailAddress.Address1 + '<br>',
      orgAddress = '<p>' + addressString + org.MailAddress.City + ', ' + org.MailAddress.State + ' ' + org.MailAddress.Zip + '<br>' + org.Phone + '</p>',
      orgUrl = '<p class="url"><a href="//' + org.URL + '">' + org.URL + '</a></p>',
      orgAgencyButton = '',
      orgVolunteerURL = '';

      resultsBox.append(orgImage + orgName + orgAddress + orgUrl);


      if (org.AgencyURL !== '' || org.VolunteerURL !== '') {
        if (org.AgencyURL !== '') { // TODO: temp style, put in CSStemp style, put in CSS
          orgAgencyButton = '<a href="' + org.AgencyURL + '" class="green button" style="padding: 11px 10px"> Find Food </a>&nbsp;&nbsp;';
        }
        if (org.VolunteerURL !== '') {
          orgVolunteerURL = '<a href="' + org.VolunteerURL + '" class="green button" style="padding: 11px 10px"> Volunteer </a>&nbsp;&nbsp;';
        }
        resultsBox.append('<div class="buttonWrapper">' + orgAgencyButton + orgVolunteerURL + '</div>');
      }

      if (org.ListPDOs !== '' && org.ListPDOs.length) {
        // console.log('PDO is not null');
        var listPDOs = org.ListPDOs,
        pdoWrapper = jQuery('<div class="partner-orgs"/>'),
        pdoListWrapper = jQuery('<ul />');
        pdoWrapper.append('Affiliate Food Banks:');
        for (var i = 0; i < listPDOs.length; i++) {
          var pdo = listPDOs[i];
          pdoListWrapper.append('<li>' + pdo.Title + '<br>' + pdo.Address + '<br>' + pdo.City + ', ' + pdo.State + ' ' + (pdo.ZipCode ? pdo.ZipCode : '') + '<br>' + pdo.Phone + '<br>' + (pdo.Website ? ('<a href="' + pdo.Website + '">' + pdo.Website + '</a>') : ''));
        }
        pdoWrapper.append(pdoListWrapper);
        resultsBox.append(pdoWrapper);
      }
      return resultsBox;
    }

    function buildFAOrgsSummaryBox(data, resultsWrapper, searchString) {
      var headlineString = ' Food Bank[s] that serve[t] ' + stateTitle;

      if (data.length === 1) {
        headlineString = '1' + headlineString.replace('[s]', '').replace('[t]', 's');
      } else {
        headlineString = data.length.toString() + headlineString.replace('[s]', 's').replace('[t]', '') + ' ';
      }

      jQuery('#fbSearchSummary').remove();
      resultsWrapper.prepend(
        '<div class="results-box" id="fbSearchSummary">' +
        '<div class="headline">' + headlineString + /*searchString.toString() +*/ '</div>' +
        '<!--<p class="countstring"></p>-->' +
        '<p>Food banks serve large areas and will be able to find a feeding program in your local community.</p>' +
        '</div>'
        );
    }
});
;
