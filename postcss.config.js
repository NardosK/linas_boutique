module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // Other rules...
  plugins: [
    new NodePolyfillPlugin()
  ]
};