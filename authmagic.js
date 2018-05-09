module.exports = {
  "core": {
    "name": "authmagic-timerange-stateless-core",
    "source": "../authmagic-timerange-stateless-core"
  },
  "plugins": {
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
    "authmagic-smsc-plugin": {
      "login": "" || process.env.SMSC_LOGIN,
      "password": "" || process.env.SMSC_PASSWORD
    }
  },
  "port": 3000
};