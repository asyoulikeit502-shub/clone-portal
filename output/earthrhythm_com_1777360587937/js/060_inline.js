var simplsessionid = localStorage.getItem('simplsessionid');
  var siimplXHR2 = new XMLHttpRequest();
  try {
    siimplXHR2.open('GET', "https://pi3-backend.getsimpl.com/api/v3/app/custom-checkout/widget/master-config?shop=earth-rhythm-v1.myshopify.com");
    siimplXHR2.setRequestHeader(
      "Simpl-Widget-Session-Token",
      simplsessionid == 'null'
        ? ""
        : simplsessionid
    );
    siimplXHR2.send();
    siimplXHR2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        window.SimplMasterConfig = JSON.parse(siimplXHR2.responseText)
        var sessionId = siimplXHR2.getResponseHeader("Simpl-Widget-Session-Token");
        window.simplSessionId = sessionId
        localStorage.setItem('simplsessionid', sessionId);
      }
    }
    siimplXHR2.onerror = function(e) {
      console.log('Error occured while loading simpl widget -> ', e)
    }
  } catch (e) {
    console.log(e);
  }