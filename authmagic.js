module.exports = {
  "core": "authmagic-timerange-core",
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
      "link": "{{pluginConfig.url}}/check.html?z={{z | urlencode}}"
    }
  },
  "duration": 300,
  "key": "fd5eb88c6955b86d",
  "expiresIn": 1200,
  "port": 3000,
  "sendKeyPlugin": "authmagic-email-plugin"
};