var photoInfo=new Array();function setupPhoto(a,f,g){var d=photoInfo.length;photoInfo[d]=new Object();photoInfo[d].uniq=g;photoInfo[d].index=f;photoInfo[d].photos=new Array();var c=a.split("http");for(var b=1;b<c.length;b++){var e="http"+c[b];if(b==c.length-1){e=e.substring(0,e.length-1)}if(e.substring(e.length-2)==", "){e=e.substring(0,e.length-2)}if(e.substring(e.length-1)==","){e=e.substring(0,e.length-1)}photoInfo[d].photos[b-1]=e}}function clearPhotoInfo(c){var b=-1;for(var a=0;a<photoInfo.length;a++){if(photoInfo[a].uniq==c.value){b=a;break}}if(b!=-1){photoInfo[b]=new Object();photoInfo[b].uniq=-1;photoInfo[b].index=-1;photoInfo[b].photos=new Array()}}function changePhoto(l,m,b,d){var o=-1;for(var g=0;g<photoInfo.length;g++){if(photoInfo[g].uniq==m){o=g;break}}if(o==-1){setupPhoto(d,b,m);o=photoInfo.length-1}var n=photoInfo[o].index+l;if(n>=photoInfo[o].photos.length){n=0}else{if(n<0){n=photoInfo[o].photos.length-1}}photoInfo[o].index=n;var j=photoInfo[o].photos[n];if(j==null){return}var k=j.split("!");if(k==null){return}var h=k[0];var a=document.getElementById("photoImage"+photoInfo[o].uniq);if(a!=null){a.setAttribute("src",h)}if(k.length>1){var f=k[1];var c=document.getElementById("photoAttribution"+photoInfo[o].uniq);if(c!=null){var e=document.createTextNode(f);while(c.firstChild!=null){c.removeChild(c.firstChild)}c.appendChild(e)}}}function doPopup(b,a){if(a==null||a==""){a="widgetPopupWin"}popwindow=window.open(b,a,"width=600,height=600,scrollbars=yes");if(window.focus){popwindow.focus()}}function doPopupWithSize(c,b,d,a){if(b==null||b==""){b="widgetPopupWin"}popwindow=window.open(c,b,"width="+d+",height="+a+",scrollbars=1");if(window.focus){popwindow.focus()}}function doNewTAWindow(b,a){if(a==null||a==""){a="widgetNewTaWin"}return window.open(b,a,"toolbar=1,resizable=1,menubar=1,location=1,status=1,scrollbars=1,width=800,height=600")}function doSort(h){var j=getElementsByName_iefix("dd","sortableReview");if(j==null||j.length<=1){return}var e=new Array();for(var f=0;f<j.length;f++){var g=j[f].id.split("-");if(h==null||h.indexOf("date")==0){e.push(g[1]+"-"+g[0]+"-"+g[2])}else{e.push(g[2]+"-"+g[0]+"-"+g[1])}}e.sort();if(h.indexOf("desc")>-1){e.reverse()}var a=document.createElement("div");for(var f=0;f<e.length;f++){var k=e[f].split("-");var d="";if(h==null||h.indexOf("date")==0){d=k[1]+"-"+k[0]+"-"+k[2]}else{d=k[1]+"-"+k[2]+"-"+k[0]}var c=document.getElementById(d);a.appendChild(c)}var b=document.getElementById("reviewsContainer");while(b.firstChild!=null){b.removeChild(b.firstChild)}b.appendChild(a)}function getElementsByName_iefix(b,c){var d=document.getElementsByTagName(b);var a=new Array();for(i=0,iarr=0;i<d.length;i++){att=d[i].getAttribute("name");if(att==c){a[iarr]=d[i];iarr++}}return a}function expandReview(e,g,c){var d="none";var h="block";if(c==0){d="block";h="none"}var b=getElementsByName_iefix("dd","reviewText");for(var f=0;f<b.length;f++){var a=b[f];if(a.id==g+"short"+e){a.style.display=d}else{if(a.id==g+"full"+e){a.style.display=h}else{if(a.id.indexOf("short")!=-1){a.style.display="block"}else{a.style.display="none"}}}}if(window.sendHeight){sendHeight()}}function toggleLanguage(h,a){var d=getElementsByName_iefix("dd","sortableReview");for(var f=0;f<d.length;f++){var g=d[f];if(g.id.substr(0,1)==a){g.style.display="block";var k=g.getElementsByTagName("dd");for(var e=0;e<k.length;e++){var c=k[e];var b=c.id;if(b.substr(1,4)=="full"||b.substr(1,5)=="short"){if(b.substr(b.length-1,1)==h){if(b.substr(0,5)==(a+"full")){c.style.display="block"}else{c.style.display="none"}}else{if(b.substr(0,6)==(a+"short")){c.style.display="block"}else{c.style.display="none"}}}}}else{g.style.display="none"}}}function showElem(b){var a=document.getElementById(b);if(a!=null){a.style.display="block"}}function hideElem(b){var a=document.getElementById(b);if(a!=null){a.style.display="none"}}function setHref(c,b){var a=document.getElementById(c);if(a!=null){a.setAttribute("href",b)}}function changePane(b,a){changeTab(b);var d=$$("#list"+b+" div[name=propertyPane]");for(var c=0;c<d.length;++c){if(d[c].id=="list"+a+"Pane"){d[c].style.display="block"}else{d[c].style.display="none"}}}function changeTab(b){var e=getElementsByName_iefix("a","propertyTab");if(e==null||e.length<=1){return}for(var c=0;c<e.length;c++){if(e[c].id==b){e[c].className="tabSelected"}else{e[c].className=""}}var d=getElementsByName_iefix("div","propertyList");if(d==null||d.length<=1){return}for(var c=0;c<d.length;c++){if(d[c].id=="list"+b){d[c].style.display="block"}else{d[c].style.display="none"}}var a=document.getElementById("DESTSEARCH_FORM");if(a!=null&&a.tab!=null){a.tab.value=b}}function getPartnerPropertyLink(e,d,c,a,g,f){var b=null;if(window.taPartnerPropertyLink&&g=="true"){b=taPartnerPropertyLink(d,c,a)}if(b!=null){partnerRedirect(b,f)}else{if(f=="new"&&g=="false"){doNewTAWindow(e,"newTApropdetail");return}else{doPopup(e,"propdetail");return}}return}function getPartnerPropertyLinkForMap(e,d,c,a){var b=null;if(window.taPartnerPropertyLink){b=taPartnerPropertyLink(d,c,a)}if(b!=null&&b!=""){return b}return e}function getPartnerBookingLink(d,c,a,g){var b=null;if(window.taPartnerBookingLink){b=taPartnerBookingLink(d,c,a);if(b!=null&&b!=""){if(window.taPartnerBookingText){var e=taPartnerBookingText(d,c,a);if(e!=null&&e!=""){var f=document.getElementById(g);f.innerHTML=e}}return b}}return null}function partnerRedirect(b,a){if(a==null||a==""||a=="existing"){if(window.opener==null){window.top.location=b}else{window.opener.top.location=b}return}else{if(a=="new"){doNewTAWindow(b,"tpbWin");return}}}function doCRPopup(b,a){popwindow=window.open(b,a,"toolbar=0,resizable=1,menubar=0,location=0,status=0,scrollbars=1,width=255,height=730,screenX=5,left=5,screenY=5,top=5");if(window.focus){popwindow.focus()}}function doMore(c){var a=document.getElementById(c+"full");var b=document.getElementById(c+"short");a.style.display="block";b.style.display="none"}function doLess(c){var a=document.getElementById(c+"full");var b=document.getElementById(c+"short");a.style.display="none";b.style.display="block"}function showMap(c,a,d,b){showMap(c,a,d,b,"WidgetEmbed-cdsdest")}function showMap(a,e,h,j,d){var l=ta.id(a);l.map=new ta.maps.Map(l,{origLat:e,origLng:h,zoom:j,servlet:d,smallMap:true,typeControl:false,scaleControl:false,markerActivateOn:ta.overlays.ACTIVATE_BOTH});l.map.addIcon("hotel",{name:"Hotel"});l.map.addIcon("rental",{name:"Rental",iconPrefix:"icon",iconWidth:19,iconHeight:18,iconAnchorX:9,iconAnchorY:18,shadow:"shadowIcon.png",shadowWidth:21,shadowHeight:20});l.map.addIcon("restaurant",{name:"Restaurant"});l.map.addIcon("attraction",{name:"ThingToDo"});var f=$("mapTitle");if(f){f.addEvent("click",l.map.reset.bind(l.map))}l.map.replaceMarkers(markerData.hotels,"hotel",ta.maps.MARKER_HOTEL);l.map.replaceMarkers(markerData.rentals,"rental",ta.maps.MARKER_VR_APPROX);l.map.replaceMarkers(markerData.restaurants,"restaurant",ta.maps.MARKER_RESTAURANT);l.map.replaceMarkers(markerData.attractions,"attraction",ta.maps.MARKER_ATTRACTION);var g=document.getElementById("cbx1");var m=document.getElementById("cbx2");var b=document.getElementById("cbx3");var k=document.getElementById("cbx4");if(g!=null&&g!=undefined&&!g.checked){l.map.toggleType("hotel")}if(m!=null&&m!=undefined&&!m.checked){l.map.toggleType("rental")}if(b!=null&&b!=undefined&&!b.checked){l.map.toggleType("attraction")}if(k!=null&&k!=undefined&&!k.checked){l.map.toggleType("restaurant")}l.errorDiv=ta.id("mapError");var c=l.errorDiv;if(c){l.map.addEvent("noPins",function(){c.show()});l.map.addEvent("allPins",function(){c.hide()});l.map.addEvent("homePinOnly",function(){c.show()})}}function toggleMapMarkers(c,b){var a=document.getElementById(c);a.map.toggleType(b)}function callForumWidget(b,c,d){var a=b+"/WidgetEmbed-cdsforum?locationId="+c+d;document.location=a}function pageNav(f,d,b){for(var e=0;e<b;e++){var a=document.getElementById(f+e);var c=document.getElementById(f+"Link"+e);if(a!=null&&a!=undefined){if(e==d){a.style.display="block";if(c!=null&&c!=undefined){c.style.cursor="default";c.style.color="#2c2c2c"}}else{a.style.display="none";if(c!=null&&c!=undefined){c.style.cursor="pointer";c.style.color="#202d95"}}}}}function doHacSearch(e,d){var c=d;var a=document.getElementById(e);if(a==null||a==undefined||d==null||d==undefined){return}var b=d.substring(d.length-1);if(b!="/"){c=d+"/"}c=c+"HACSearch?geo="+a.geo.value+"&inDay="+a.inDay.value+"&inMonth="+a.inMonth.value+"&outDay="+a.outDay.value+"&outMonth="+a.outMonth.value+"&q="+a.hacGeo.value;doNewTAWindow(c,"TAHacSearchWin")}function doHacSearchWithMCID(f,e,a){var d=e;var b=document.getElementById(f);if(b==null||b==undefined||e==null||e==undefined){return}var c=e.substring(e.length-1);if(c!="/"){d=e+"/"}d=d+"HACSearch?geo="+b.geo.value+"&m="+a+"&inDay="+b.inDay.value+"&inMonth="+b.inMonth.value+"&outDay="+b.outDay.value+"&outMonth="+b.outMonth.value+"&q="+b.hacGeo.value;doNewTAWindow(d,"TAHacSearchWin")}function doDestSearch(c){var b=document.getElementById("DESTSEARCH_FORM");b.locationId.value=b.geo.value;hideElem("destSearchError");var a={url:"/WidgetEmbed",data:b,onFailure:function(d){showElem("destSearchError")},onSuccess:function(d){var f=document.getElementById("cdsDestContent");if(f!=null&&f!=undefined){f.innerHTML=d;var h=document.getElementById("DESTSEARCH_FORM");if(h!=null&&h.tab!=null){var g=document.getElementById("list"+h.tab.value);if(g!=null){changeTab(h.tab.value)}if((g!=null&&h.tab.value=="Map")||(g==null&&h.defaultTab.value=="Map")){var j=document.getElementById("mapLatLongInfo");if(j!=null&&j.childNodes!=null){var k=j.childNodes[0].nodeValue;if(k!=null){var e=k.split(":");if(e!=null&&e.length==3){showMap("theMap",parseFloat(e[0]),parseFloat(e[1]),parseInt(e[2]))}}}}}}},evalScripts:true};new Request(a).send();clearPhotoInfo(b.uniq)}function doTOGSearch(d){var c=document.getElementById("CDSTOG_FORM");var a=checkTOGInput(c);if(a==true){return}hideElem("cdsTogIntro");showElem("cdsTogSpinner");var b={url:"/TankOfGas",data:c,onFailure:ta.util.error.ajaxFailure.partial("CdsWidgets:doTOGSearch"),onComplete:function(e){if(e.indexOf("ERROR")==0){showElem("tog_error_notfoundcity");showElem("TOG_ERROR_MSG");addElemClass("TANK_OF_GAS_FORM","cdsTogErr");hideElem("cdsTogSpinner");ta.id("TANK_RESULTS").empty()}else{var f=document.getElementById("cdsTogResults");if(f!=null&&f!=undefined){f.innerHTML=e;f.style.display="block";hideElem("cdsTogIntro");hideElem("cdsTogSpinner")}}sendHeight()}};new Request(b).send()}function redoTOGSearch(d,a){var c=document.getElementById("CDSTOG_FORM");c.geo.value=d;for(var b=0;b<c.tog_range.length;b++){if(c.tog_range[b].value==a){c.tog_range[b].checked=true}else{c.tog_range[b].checked=false}}doTOGSearch(c)}function checkTOGInput(d){hideElem("TOG_ERROR_MSG");hideElem("tog_error_nocity");hideElem("tog_error_notfoundcity");hideElem("tog_error_range");removeElemClass("TANK_OF_GAS_FORM","cdsTogErr");removeElemClass("tog_city_label","cdsTogErr");removeElemClass("tog_range_label","cdsTogErr");removeElemClass("togGeoSearch","cdsTogErr");var a=false;if(d.q.value==null||d.q.value==""){d.geo.value="";showElem("tog_error_nocity");addElemClass("tog_city_label","cdsTogErr");addElemClass("togGeoSearch","cdsTogErr");a=true}var b=false;for(var c=0;c<d.tog_range.length;c++){if(d.tog_range[c].checked==true){b=true;break}}if(b==false){showElem("tog_error_range");addElemClass("tog_range_label","cdsTogErr");a=true}if(a==true){showElem("TOG_ERROR_MSG");addElemClass("TANK_OF_GAS_FORM","cdsTogErr");sendHeight();return true}return false}function addElemClass(c,a){var b=document.getElementById(c);if(b!=null){b.className+=(" "+a)}}function removeElemClass(c,a){var b=document.getElementById(c);if(b!=null){b.className=b.className.replace(a,"")}}function limitLength(b,a){if(b!=null&&b.value!=null&&b.value.length>=a){b.value=b.value.substr(0,a)}}function initTextArea(a){if(a!=null){a.value="";a.onfocus=null;a.style.color="#2C2C2C"}}function selectRating(f,c,k,m){if(f!=null&&c!=null&&f.clientWidth!=0){var j=f;var e=0;while(j){e+=j.offsetLeft;j=j.offsetParent}var l=c.pageX?c.pageX-window.pageXOffset:c.clientX;var a=l-e;var g=Math.ceil((a/f.clientWidth)*5);f.className="widWRLRate n"+g+"0";var b=document.getElementById("ratingText"+m);var d=document.getElementById("rating"+g+m);if(b!=null&&d!=null){b.innerHTML=d.value}if(k){var h=document.getElementById("qid10"+m);if(h!=null){h.value=g}}}}function lastSetRating(f,g){if(f!=null){var b=document.getElementById("qid10"+g);if(b!=null){var e=b.value;var a=document.getElementById("rating"+e+g);if(a!=null){var d=a.value;if(e==0){f.className="widWRLRate g00"}else{f.className="widWRLRate n"+e+"0"}var c=document.getElementById("ratingText"+g);if(c!=null){c.innerHTML=d}}}}}function checkTextArea(e){var a=document.getElementById("taWRLTitle"+e);var d=document.getElementById("defaultTitle"+e);var c=document.getElementById("reviewTitle"+e);if(a!=null&&d!=null&&c!=null){if(d.value==a.value){c.value=""}else{c.value=encodeURIComponent(a.value)}var b=document.getElementById("cdsWRLForm"+e);if(b!=null){b.submit()}}}function checkSearchBox(b,a){if(b!=null&&b.value==a){b.value="";b.onclick=null;b.style.color="#2C2C2C"}}function togglePIDetails(a){if(a=="show"){showElem("cdsPIHideReviews");hideElem("cdsPIReadReviews");showElem("cdsPIDetails");if(window.sendHeight){sendHeight()}}else{showElem("cdsPIReadReviews");hideElem("cdsPIHideReviews");hideElem("cdsPIDetails");if(window.sendHeight){sendHeight()}}}function resizeRatingsOnlyWidget(a){if(!a){return}var d=document.getElementById(a.widgetDivId);var h=d.children[0];var c=document.getElementById(a.locDivId);var b=c.children[0];var g=a.maxLocFontSize||14;var f=a.minLocFontSize||10;var e=a.maxHeight;if(f>g){f=g}if(a.wide){while(b.offsetHeight>e&&g>f){b.style.fontSize=(--g)+"px"}c.style.maxWidth=b.offsetWidth+1+"px";h.style.width="auto";d.style.width=h.offsetWidth+1+"px"}else{while(b.offsetHeight>e&&g>f){b.style.fontSize=(--g)+"px"}}}var ta=ta||{};ta.cds=ta.cds||{};ta.cds.handleTALink=function(d,b){if(typeof(Cookie)!=="undefined"&&typeof(Cookie.writeSession)!=="undefined"&&typeof(cookieDomain)!=="undefined"&&Cookie&&Cookie.writeSession&&cookieDomain&&window.location.hostname.match(cookieDomain)){if(Cookie.writeSession("MC",d)){return true}}if(typeof(b)==="undefined"){return false}var a=null;if(typeof(b.pathname)==="string"){a=b.pathname}else{if(typeof(b.action)==="string"){var e=document.createElement("a");e.href=b.action;a=e.pathname}else{return false}}var c=a.split(".");c[0]=c[0]+"-m"+d;a=c.join(".");if(typeof(b.pathname)==="string"){b.pathname=a}else{if(typeof(b.action)==="string"){e.pathname=a;b.action=e.href}}return true};