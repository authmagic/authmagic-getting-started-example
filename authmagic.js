module.exports = {
  "core": {
    "name": "authmagic-timerange-stateless-core",
    "source": "../authmagic-timerange-stateless-core"
  },
  "plugins": [
    {
      "name": "authmagic-email-plugin",
      "source": "../authmagic-email-plugin"
    },
    {
      "name": "authmagic-proxy-plugin",
      "source": "../authmagic-proxy-plugin"
    }
  ],
  "params": {
    "authmagic-email-plugin": {
      "isTest": true,
      "url": "http://localhost:3000",
      "mailer": {
        "auth": {
          "user": "",
          "pass": ""
        },
        "host": "smtp.ethereal.email",
        "port": 587,
        "secure": false
      },
      "from": "AuthMailer",
      "subject": "Your Magic Link"
    },
    "authmagic-timerange-stateless-core": {
      "duration": 300,
      "key": "106827392fbe9a1b",
      "sendKeyPlugin": "authmagic-email-plugin",
      "expiresIn": 1200
    },
    "authmagic-proxy-plugin": {
      "apiKey": "test_key",
      "uri": "http://localhost:3001/proxy",
      "mapItems": [
        "apiKey",
        "ekey",
        "user"
      ]
    }
  },
  "port": 3000,
  "sendKeyPlugin": "authmagic-email-plugin"
};