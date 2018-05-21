module.exports = {
  "core": {
    "name": "authmagic-timerange-stateless-core",
    "source": "../authmagic-timerange-stateless-core"
  },
  "plugins": {
    "authmagic-email-plugin": {
      "source": "../authmagic-email-plugin"
    },
    "authmagic-smsc-plugin": {
      "source": "../authmagic-smsc-plugin"
    }
  },
  "params": {
    "authmagic-timerange-stateless-core": {
      "duration": 300,
      "key": "aeed48faee37c6a4",
      "sendKeyPlugin": "authmagic-smsc-plugin",
      "expiresIn": 1200
    },
    "authmagic-email-plugin": {
      "isTest": true,
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
    "authmagic-smsc-plugin": {
      "login": "",
      "password": ""
    }
  },
  "port": 3000
};