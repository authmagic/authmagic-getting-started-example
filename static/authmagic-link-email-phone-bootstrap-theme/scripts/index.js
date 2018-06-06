document.getElementById('redirect-url').value = `${location.protocol}//${location.host}/check.html`;

function getToken() {
  const emailElement = document.getElementById('email');
  const redirectUrl = document.getElementById('redirect-url').value;
  const email = emailElement.value;
  const data = {
    user: email,
    params: {r: Math.random()},
    redirectUrl,
  };

  fetch('/key', {
    body: JSON.stringify(data),
    mode: 'cors',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
  }).then(function(res) {
    return res.json();
  }).then(function(resp) {
    const { eproof } = resp;
    location.href = `/wait.html?eproof=${eproof}`;
  })
}

document.getElementById('go').onclick = getToken;