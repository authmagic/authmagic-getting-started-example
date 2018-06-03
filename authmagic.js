module.exports = {
  "core": {
    "name": "authmagic-timerange-stateless-core",
    "source": "../authmagic-timerange-stateless-core"
  },
  "plugins": {
    "authmagic-email-plugin": {
      "source": "../authmagic-email-plugin"
    }
  },
  "params": {
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
    "authmagic-timerange-stateless-core": {
      "duration": 300,
      "key": "ad5de0e6c809b89b",
      "sendKeyPlugin": "authmagic-email-plugin",
      "expiresIn": 1200
    }
  },
  "port": 3000,
  "theme": {
    "name": "authmagic-link-email-phone-bootstrap-theme",
    "source": "../authmagic-link-email-phone-bootstrap-theme"
  }
};