setTimeout(function() {
  var i = document.createElement("iframe");
  i.async = true;
  i.style = "display:none";
  i.setAttribute("src", "https://buygoods.com/affiliates/go/conversion/iframe/bg?a=8446&t=&s=" + ReadCookie('sessid2'));
  document.body.appendChild(i);
}, 1000);