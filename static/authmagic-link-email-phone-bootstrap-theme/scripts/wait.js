function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function(resp) {
  const eproof = getParameterByName('eproof');
  const interval = setInterval(async function() {
    const res = await fetch('/token', {
      body: JSON.stringify({eproof}),
      mode: 'cors',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
    });

    if (res.status === 200) {
      clearInterval(interval);
      const { token, refreshToken } = await res.json();
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      location.href = '/profile.html';
    } else {
      console.log('forbidden');
    }
  }, 1000);
})();