function loadStylesheet(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

// Defer loading the Font Awesome stylesheet
var fontAwesomeUrl = '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
window.onload = function() {
  loadStylesheet(fontAwesomeUrl);
};