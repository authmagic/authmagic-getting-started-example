function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

async function validate() {
  const token = localStorage.getItem('token');
  const response = await fetch(`/token/status/${encodeURIComponent(token)}`);
  if(response.status === 200) {
    renderInfo();
  }
}

function renderInfo() {
  const token = localStorage.getItem('token');
  const info = parseJwt(token);
  const infoList = `
    <li class="list-group-item">Email: ${info.u}</li>
    <li class="list-group-item">Exp: ${info.exp}</li>
    <li class="list-group-item">Iat: ${info.iat}</li>
  `;
  document.getElementById('info').innerHTML = infoList;
}

function logout() {
  localStorage.setItem('token', '');
  location.href = '/';
}

async function refreshToken() {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  const res = await fetch('/token', {
    body: JSON.stringify({token, refreshToken}),
    mode: 'cors',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
  });
  if(res.status === 200) {
    const {token, refreshToken} = await res.json();
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    validate();
  } else {
    console.log('forbidden');
  }
}

validate();

document.getElementById('logout').onclick = logout;
document.getElementById('refresh').onclick = refreshToken;