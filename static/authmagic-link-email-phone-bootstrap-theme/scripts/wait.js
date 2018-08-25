function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

async function getToken() {
  const codeElement = document.getElementById('code')
  const eproof = getParameterByName('eproof');
  const securityKey = codeElement.value;
  const redirect = getParameterByName('redirect');
  const res = await fetch('/token', {
    body: JSON.stringify({eproof, securityKey}),
    mode: 'cors',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
  });

  if (res.status === 200) {
    const { token, refreshToken } = await res.json();
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    location.href = redirect;
  } else {
    document.getElementById('code').className = codeElement.className.concat(` is-invalid`);
    document.getElementById('go').className = document.getElementById('go').className.concat(` btn-danger`);
  }
}

document.getElementById('go').onclick = getToken;