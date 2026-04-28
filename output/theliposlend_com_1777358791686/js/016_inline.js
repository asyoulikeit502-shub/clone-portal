var mysrc = "https://tracking.buygoods.com/track/?a=8446&firstcookie=0&referrer=" + encodeURIComponent(document.referrer) + "&product=1,2,3&sessid2=" + ReadCookie('sessid2') + "&caller_url=" + encodeURIComponent(window.location.href);

var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.async = true;
newScript.src = mysrc;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(newScript, s);

function ReadCookie(name) {
  name += '=';
  var parts = document.cookie.split(/;\s*/);
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part.indexOf(name) == 0) return part.substring(name.length)
  }
  return '';
}