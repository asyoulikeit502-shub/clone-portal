function autoLogin (){
        document.getElementById('kwik-pass-text').textContent = 'Account';
        document.getElementById('kp-account').classList.remove('kwik-pass-login');
        document.getElementById('kp-account').classList.add('kwik-pass-account');
        document.getElementsByClassName('kwik-pass-account')[0].addEventListener('click', function(e){
          handleShopifyLogin(e,"/account")
        });
      }
      window.addEventListener('user-loggedin', function(event) {
         const { token } = event?.detail;
         if (token){
           autoLogin();
         }
      });
    document.addEventListener('DOMContentLoaded',function () {
      var userToken = localStorage.getItem('KWIKSESSIONTOKEN');
      if (userToken){
        autoLogin();
      }
  })