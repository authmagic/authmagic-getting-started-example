module.exports = {
  "plugins": [
    {
      "name": "authmagic-email",
      "source": "../authmagic-email"
    }
  ],
  "params": {
    "authmagic-email": {
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
  "sendKeyPlugin": "authmagic-email"
};