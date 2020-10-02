const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

      config.module.rules.push({
          test: /\*.js$/,
          exclude: /node_modules/,
          use: [
               {
                  loader: 'webpack-atomizer-loader',
                  options: {
                      configPath: path.resolve('./atomicCssConfig.js')
                  }
                },
                {
                  loader: 'babel-loader',
                  options: {
                      presets: ['react', 'es2015']
                  }
              },
          ]
      }
      )

      // Important: return the modified config
      return config
    },
  }
