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
    },
    "authmagic-timerange-core": {
      "duration": 300,
      "key": "106827392fbe9a1b",
      "sendKeyPlugin": "authmagic-email-plugin",
      "expiresIn": 1200
    }
  },
  "port": 3000,
  "sendKeyPlugin": "authmagic-email-plugin"
};