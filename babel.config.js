module.exports = {
  presets: ["@vue/app"],
  module: {
    rules: [{
      test: /\.(png|gif|cur|jpg)$/, loader: 'url-loader', query: { limit: 8192 }
    }]
  }
};
