const path = require('path');
//const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: './index.js',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'build'),
    //publicPath: "/assets/",
    filename: 'out.js'
  },
  plugins: [
    /*
    new BabiliPlugin(),
    new OfflinePlugin({
      caches: {
        main: [
          'out.js',
          ':externals:',
        ]
      },
      externals: [
        '/',
        '/assets/icons.png',
        '/assets/alley.jpg',
        '/assets/long-blue-arrow-right.png',
        '/assets/swish.wav'

      ],
      ServiceWorker: {
        navigateFallbackUrl: '/'
      }

    })
    */
  ]
};
