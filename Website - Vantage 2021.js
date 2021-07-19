//location for cookies
var loc;
 $.ajax({ url: "https://geolocation-db.com/jsonp", jsonpCallback: "callback",  dataType: "jsonp", success: function(location){
loc = location.country_name;
}
});
//brightcove videos setup
setInterval(function(){
if($('#done').length < 1){
$('.brightcoveVid').append('<div id="done" data-experience="60ece268c9511300228980c7"></div>');
var sc = document.createElement("script");
sc.setAttribute("src", "https://players.brightcove.net/6057994540001/experience_60ece268c9511300228980c7/live.js");
sc.setAttribute("type", "text/javascript");
document.head.appendChild(sc);
clearInterval();
}
},200);

// cookie policy
$(window).on('load', function(){
console.log(loc);
//check if not in Australia
if(loc != 'Australia1'){
var match = (document.cookie.match(/^(?:.*;)?\s*accepted_cookies\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
//if they've not said yes, display cookie popup
  if (match != 'yes') {
    $('.cookie-overlay').css('display', 'block');
  }
//cookies accepted
$(document).on('click', '.accept-cookies', function() {
    document.cookie = "accepted_cookies=yes;"
    $('.cookie-overlay').css('display', 'none');

  })

  // cookies closed
$(document).on('click', '.close-cookies', function() {
    $('.cookie-overlay').css('display', 'none');
  })
}
})

//eloqua tracking
var _elqQ = _elqQ || [];
var match = (document.cookie.match(/^(?:.*;)?\s*accepted_cookies\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
//check if they have accepted cookies
  if (match = 'yes') {
    _elqQ.push(['elqSetSiteId', '2144279454']);
    _elqQ.push(['elqTrackPageView']);
    }

    (function () {
        function async_load() {
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
            s.src = '//img07.en25.com/i/elqCfg.min.js';
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        }
        if (window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);
        else if (window.attachEvent) window.attachEvent('onload', async_load); 
    })();

//remove the accordion class used to easy editing in page
$(window).on('load', function(){
  $('.accordion-collapse').removeClass('show');
});

//logo and rego setup
var logoLink ='/cmspreview/vantage-2021/';
var regLink = "#";
setTimeout(function(){
$('.navbar-collapse .navbar-nav').append('<a id="rego" class="regP" href="'+regLink+'"target="_blank">Register</a>');
$('.navbar').prepend('<a id="logo" class="logo" href="'+logoLink+'"target="_blank"></a>');
$('.navbar-toggler').prepend('<a id="logoMob" class="logo" href="'+logoLink+'"target="_blank"></a>');
}, 100);



