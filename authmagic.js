module.exports = {
  "core": {
    "name": "authmagic-timerange-core",
    "source": "../authmagic-timerange-core"
  },
  "plugins": [
    {
      "name": "authmagic-email-plugin",
      "source": "../authmagic-email-plugin"
    }
  ],
  "params": {
    "authmagic-timerange-core": {
      "duration": 300,
      "key": "fd5eb88c6955b86d",
      "sendKeyPlugin": "authmagic-email-plugin",
      "expiresIn": 1200
    },
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
      "subject": "Your Magic Link",
      "link": "{{pluginConfig.url}}/check.html?ekey={{ekey | urlencode}}"
    }
  },
  "port": 3000
};