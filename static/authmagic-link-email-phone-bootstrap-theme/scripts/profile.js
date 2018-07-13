'use strict';

var validate = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var token, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = localStorage.getItem('token');
            _context.next = 3;
            return fetch('/token/status/' + encodeURIComponent(token));

          case 3:
            response = _context.sent;

            if (response.status === 200) {
              renderInfo();
            }

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function validate() {
    return _ref.apply(this, arguments);
  };
}();

var refreshToken = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var token, refreshToken, res, _ref3, _token, _refreshToken;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = localStorage.getItem('token');
            refreshToken = localStorage.getItem('refreshToken');
            _context2.next = 4;
            return fetch('/token', {
              body: JSON.stringify({ token: token, refreshToken: refreshToken }),
              mode: 'cors',
              method: 'post',
              headers: {
                'content-type': 'application/json'
              }
            });

          case 4:
            res = _context2.sent;

            if (!(res.status === 200)) {
              _context2.next = 16;
              break;
            }

            _context2.next = 8;
            return res.json();

          case 8:
            _ref3 = _context2.sent;
            _token = _ref3.token;
            _refreshToken = _ref3.refreshToken;

            localStorage.setItem('token', _token);
            localStorage.setItem('refreshToken', _refreshToken);
            validate();
            _context2.next = 17;
            break;

          case 16:
            console.log('forbidden');

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function refreshToken() {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

function renderInfo() {
  var token = localStorage.getItem('token');
  var info = parseJwt(token);
  var infoList = '\n    <li class="list-group-item">Email: ' + info.u + '</li>\n    <li class="list-group-item">Exp: ' + info.exp + '</li>\n    <li class="list-group-item">Iat: ' + info.iat + '</li>\n  ';
  document.getElementById('info').innerHTML = infoList;
}

function logout() {
  localStorage.setItem('token', '');
  location.href = '/';
}

validate();

document.getElementById('logout').onclick = logout;
document.getElementById('refresh').onclick = refreshToken;