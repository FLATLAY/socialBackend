var request = require('request'); // to make requests if needed

var config = require('./config/config'); // config files 

window.fbAsyncInit = function() { // javascript sdk setup
    FB.init({
      appId            : '576756513229634',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v7.0'
    });
    FB.getLoginStatus(function(response) {   // called after sdk
      statusChangeCallback(response);        // response = login status
    });
  };

 (function(d, s, id) {                      // load sdk async
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

function statusChangeCallback(response) {  // from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // response = login status of user
    if (response.status === 'connected') {   // connected = person logged into fb AND the webpage, not_authorized = fb but not webpage	, and unknown = not logged into fb 
      testAPI();  
    } else {                                 // other anomalies
      document.getElementById('status').innerHTML = 'Please login.';
    }
  }

function checkLoginState() {               
    FB.getLoginStatus(function(response) {  
      statusChangeCallback(response);
    });
  }



