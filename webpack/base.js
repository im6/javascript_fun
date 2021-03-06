const path = require('path');
const nodeExternals = require('webpack-node-externals');

const resolve = {
  extensions: ['.js', '.jsx'],
};

exports.clientBaseConfig = {
  resolve,
  entry: {
    main: path.join(__dirname, '../src/client/main.js'),
    site: path.join(__dirname, '../src/client/site.js'),
  },
};

exports.serverBaseConfig = {
  target: 'node',
  resolve,
  externals: [nodeExternals()],
};

exports.localIdentName = '[hash:base64:5]';
exports.include = path.resolve(__dirname, '../src');
