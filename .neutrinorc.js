const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const mocha = require('@neutrinojs/mocha');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb(),
    react({
      html: {
        title: 'BetTerra'
      }
    }),
    mocha(),
    neutrino => {
      neutrino.config.node.set('Buffer', true)
    }
  ],
};
