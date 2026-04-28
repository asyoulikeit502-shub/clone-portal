try {
    var simplXHR1 = new XMLHttpRequest();
    simplXHR1.open('GET', "https://cdn.getsimpl.com/widget-script-v2/shopify/widget-script.js")
    simplXHR1.send();
    simplXHR1.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        eval(simplXHR1.responseText)
      }
    }
    simplXHR1.onerror = function(e) {
      console.log('Error occured while loading simpl widget -> ', e)
    }
  } catch (e) {
    console.log('Error occured while loading simpl widget -> ', e)
  }