if (typeof FA == 'undefined') { // Make sure FA namespace is initialized
  var FA = {};
}

// Food Bank lookup.
jQuery(document).ready(function() {
  if (FA.ws) {
    function findYourLocalFoodBank(zip, active=false) {
      if (active) {
        var el = jQuery('.zip_search_results.active');
      } else {
        // Make sure we don't auto-submit SNAP, since it can redirect.
        var el = jQuery('.zip_search_results:not([data-result-type="snap"])');
      }
      // Use each() in case there's more than one per page.
      el.each(function(){
        var zipForm = jQuery(this).closest('.zip_search'),
            subsrc = zipForm.find('input[name=s_subsrc]').val(),
            keyword = zipForm.find('input[name=s_keyword]').val(),
            channel = zipForm.find('input[name=s_channel]').val(),
            results = jQuery(this);

        results.empty().hide(); // Clear the display

        // Validate zip.
        var dZip = zip.replace(/\D/g,'');
        if (dZip.length != 5 || dZip != zip) {
          results.append('This is an invalid zip. Please try a valid U.S. zip.').show();
          return;
        }

        // Do the request.
        if (zip != '') {
          results.append('<div class="loading-white"></div>').show(); // Loading...
          faSetCookie('cms_cons_zip', zip, 365);
          var homepageWS = new FA.httpWebService();
          homepageWS.init({url: '/ws-api', dataType: 'json'});
          homepageWS.request('GetOrganizationsByZip', { zip: zip, orgFields: 'FullName,MailAddress,Drupal,URL,Phone,AgencyURL,SocialUrls,VolunteerURL' }, 'Organization', function(data) {
            var counter = 0;
            results.empty();
            var dataDisplay = results.data('result-type');
            for (var key in data) {
              counter++;
              if (counter > 2) { return; } // Display only first two results

              var org = data[key];
              var profileUrl = org.Drupal.path;
              if (dataDisplay){
                if (dataDisplay == 'snap') {
                  if (org.Drupal.field_snap_link) {
                    var snapLink = true;
                    profileUrl = org.Drupal.field_snap_link;
                  }
                  else if (org.Drupal.field_state_office_link) {
                    var stateOfficeLink = true;
                    profileUrl = org.Drupal.field_state_office_link;
                  }
                  else {
                    profileUrl = org.Drupal[dataDisplay];
                  }
                }
                else if (org.Drupal[dataDisplay]) {
                  profileUrl = org.Drupal[dataDisplay];
                }
                else {
                  profileUrl = 'https://' + org.URL;
                }
                if (dataDisplay == 'field_food_cta_buttons') {
                  linkResults = '<a href="' + profileUrl + '">' + org.FullName + '</a> <p>' + '<a class="button orange" href="tel:+1' + org.Phone + '">Call</a> &nbsp;&bull;&nbsp; ' + '<a class="button orange" href="' + org.AgencyURL + '">Find Food</a></p>'
                }
                else if (dataDisplay == 'field_food_cta_volunteer') {
                  linkResults = '<a href="' + profileUrl + '">' + org.FullName + '</a> <p>' + '<a class="button orange" href="' + org.VolunteerURL + '">Volunteer</a></p>'
                }
                else if (dataDisplay == 'snap') {
                  if (org.SocialUrls.WebUrl != '') {
                    linkResults = '<a href="' + org.SocialUrls.WebUrl + '&twoStep=true&zip=' + zip + '&s_channel=' + channel + '&s_subsrc=' + subsrc + '&s_keyword=' + keyword + '">Loading your local SNAP assistance...</a>';
                    window.location = org.SocialUrls.WebUrl+'&twoStep=true&zip='+zip+'&s_channel='+channel+'&s_subsrc='+subsrc+'&s_keyword='+keyword;
                  }
                  else if (snapLink) {
                  linkResults = '<h3>Your local food bank can help you learn about and apply for SNAP.</h3><a href="' + profileUrl + '">' + org.FullName + '</a><br>' + org.MailAddress.City + ', ' + org.MailAddress.State + ' &nbsp;&bull;&nbsp; <a href="tel:+1' + org.Phone + '">' + org.Phone + '</a><br><a class="button orange" href="' + profileUrl + '">Learn more about SNAP</a>'
                  }
                  else if (stateOfficeLink) {
                  linkResults = '<h3>Your <a href="' + profileUrl + '">local SNAP office</a> can help you learn about and apply for SNAP.</h3>'
                  }
                } else {
                  linkResults = '<a href="' + profileUrl + '">' + org.FullName + '</a> &nbsp;&bull;&nbsp; ' + org.MailAddress.City + ', ' + org.MailAddress.State
                }
              }

              results.append([
                '<div class="find_local_food_bank_result  ', dataDisplay, '" aria-live="polite">',
                linkResults,
                '</div>'
                ].join(''));

              jQuery('.find_local_food_bank_result a[href^="tel:"]').click(function(){
                var faDataLayer = {};
                faDataLayer['event'] = 'phone_number_click';
                faDataLayer['click_text'] = jQuery(this).text();
                faDataLayer['user_audience_type'] = 'Neighbor';
                window.dataLayer.push(faDataLayer);
              });
              jQuery('.find_local_food_bank_result a:nth-child(2)').click(function(){
                var faDataLayer = {};
                faDataLayer['event'] = 'foodbank_find_food_button';
                faDataLayer['page_area'] = 'Foodbank Finder';
                faDataLayer['click_url'] = jQuery(this).attr('href');
                faDataLayer['click_text'] = jQuery(this).text();
                faDataLayer['user_audience_type'] = 'Neighbor';
                window.dataLayer.push(faDataLayer);
              });
            }

            if (counter == 0) { // No results
              results.append('This is an invalid zip. Please try a valid U.S. zip.');
            }

          }, function(response) { // Error
            results.html('Our online search is not working at this time. To find out your food bank, please call us at 800.771.2303');
          });
        }
      });
    }

    // Form Submit - sets active form.
    jQuery('.zip_search_form button[type="submit"]').click(function(e) {
      e.preventDefault();
      var el = jQuery(this).parent(),
          zip = el.find('input[name="zip"]');
      jQuery('.zip_search_results').removeClass('active');
      el.parent().find('.zip_search_results').addClass('active');
      zip.attr('value',zip.val());
      findYourLocalFoodBank(zip.val(), true);
    });

    // Cookie handling.
    var cms_cons_zip = faGetCookie('cms_cons_zip');
    if (cms_cons_zip && cms_cons_zip == '') {
      cms_cons_zip = jQuery('#cms_cons_zip').val();
    }
    if (cms_cons_zip && cms_cons_zip != '') {
      var el = jQuery('.zip_search');

      el.each(function(){
        var fbResult = jQuery(this).find('.zip_search_results');
        if (fbResult.data('result-type') != 'snap' ) {
          jQuery(this).find('input[name="zip"]')
            .val(cms_cons_zip)
            .attr('value',cms_cons_zip);
          findYourLocalFoodBank(cms_cons_zip);
        }
      });
    }

    // Hunger Meter - not currently used.
    // if (cms_cons_zip && cms_cons_zip != '') { // We already have the user's zip
    //   // Do nothing
    // } else {
    //   var cms_cons_state = faGetCookie('cms_cons_state'); // Get state from cookies
    //   if (cms_cons_state && cms_cons_state == '') {
    //     cms_cons_state = jQuery('#cms_cons_state').val(); // Get state from user's record
    //   }
    //   if (cms_cons_state && cms_cons_state != '') { // We already have the user's state
    //     jQuery('#homepage_ending_select').val(cms_cons_state);
    //     faSetCookie('cms_cons_state', cms_cons_state, 365);
    //     stateHungerMeter(cms_cons_state);
    //   } else { // Nationwide
    //     nationHungerMeter();
    //   }
    // }
  }
});
;
if (typeof FA == 'undefined') { // Make sure FA namespace is initialized
	var FA = {};
}

// Constants
FA.howweareending = {
	nationwide: {
		food_insecurity_rate: 0.118
	},
	stat: {
		img_src: '/themes/custom/ts_feeding_america/images/howweareending_1in[count].png'
	},
	state: {
		img_src: '/themes/custom/ts_feeding_america/images/state-icons/howweareending_[id].png',
		link: '/hunger-in-america/impact-of-hunger/states/'
	},
	map_link: {
		//link: 'http://map.feedingamerica.org/county/2014/overall/'
		link: '/hunger-in-america/'
		//link: 'http://www.feedingamerica.org/hunger-in-america/the-united-states/'
	},
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
let faHowWeAreEnding = FA.howweareending;

// Hunger Meter
function displayHungerMeterResults(loc, id, name, rate) {
	var msg = 'in ';
	var link = faHowWeAreEnding.state.link + name.replace(/ /g, '-').toLowerCase();
	var count = faHowWeAreEnding.rate(rate);
    var count_image = Math.min(13, count);
    count_image = Math.max(2, count_image);
	var hungerImg = (faHowWeAreEnding.stat.img_src).replace('[count]', count_image);
	var map_link = faHowWeAreEnding.map_link.link + name.replace(/ /g, '-').toLowerCase();
	var learn_more = 'Learn more about hunger ';

	switch (id) {
		case 'DC' :
			msg = 'In the ';
			break;
	}
	if (count === false) {
		msg = '<a href="' + map_link + '">' + learn_more + msg + loc + '</a>' + '.';
		alt = 'Graphic showing 1 in 9 people face hunger.';
	}
	else {
		//msg += "<a href='" + map_link + "'>" + loc + "</a>" + ', 1 in ' + count.toString() + ' people';
		msg += '<span class="state">' + loc + '</span>' + ', 1 in ' + count.toString() + ' people face hunger. ' + '<a href="' + map_link + '">' + learn_more + msg + loc + '</a>' + '.';
		alt = 'Graphic showing 1 in ' + count.toString() + ' people face hunger.';
	}

	jQuery('#howweareending_stat_msg').html(msg);
	if (count === false) {
		jQuery('#howweareending_stat_img').hide();
	}
	else {
		jQuery('#howweareending_stat_img').attr('src', hungerImg).attr('alt', alt);
		jQuery('#howweareending_stat_img').show();
	}
	jQuery('#howweareending_state_img').attr('src', (faHowWeAreEnding.state.img_src).replace('[id]', id.toLowerCase())).attr('alt', loc);
	jQuery('#howweareending_social_icons').attr('addthis:url', link).attr('addthis:title', 'Hunger in ' + id);
	jQuery('#howweareending_state_img').wrap("<a href='" + map_link + "'></a>");

}

function stateHungerMeter(state) {
	if (state != '') { // Do the request
		FA.ws.request('GetStateStatisticsByState', { state: state }, 'https://www.feedingamerica.org/', function(data) {
			if (data && data.StateID) {
				displayHungerMeterResults(data.Name, data.StateID, data.Name, data.StateStats.FoodInsecurityRate);
				return;
			}
			// No results
			// ...
		}, function(response) { // Error
			// No results behaviour
		});
	}
}

function nationHungerMeter() {
	displayHungerMeterResults('the United States', 'US', 'United States', faHowWeAreEnding.nationwide.food_insecurity_rate);
}
;
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
