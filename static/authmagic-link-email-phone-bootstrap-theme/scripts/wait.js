"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function (resp) {
  var eproof = getParameterByName('eproof');
  var interval = setInterval(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, _ref2, token, refreshToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/token', {
              body: JSON.stringify({ eproof: eproof }),
              mode: 'cors',
              method: 'post',
              headers: {
                'content-type': 'application/json'
              }
            });

          case 2:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 15;
              break;
            }

            clearInterval(interval);
            _context.next = 7;
            return res.json();

          case 7:
            _ref2 = _context.sent;
            token = _ref2.token;
            refreshToken = _ref2.refreshToken;

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            location.href = '/profile.html';
            _context.next = 16;
            break;

          case 15:
            console.log('forbidden');

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })), 1000);
})();