'use strict';

document.getElementById('redirect-url').value = location.protocol + '//' + location.host + '/check.html';

function getToken() {
  var emailElement = document.getElementById('email');
  var redirectUrl = document.getElementById('redirect-url').value;
  var email = emailElement.value;
  var data = {
    user: email,
    params: { r: Math.random() },
    redirectUrl: redirectUrl
  };

  fetch('/key', {
    body: JSON.stringify(data),
    mode: 'cors',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (resp) {
    var eproof = resp.eproof;

    location.href = '/wait.html?eproof=' + eproof;
  });
}

document.getElementById('go').onclick = getToken;