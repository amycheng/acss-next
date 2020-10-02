const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    config.module.rules.push({
        test: /\.html$/, // or /\.hbs$/ or /\.jsx$/ (you may need to change loaders order and put webpack-atomizer-loader first on the array)
        use: [
            {
                loader: 'html-loader', // Or the corresponding loader for the template system you're using
                options: {
                    preprocessor: () => '' // THIS LINE IS IMPORTANT
                }
            },
            {
                loader: 'webpack-atomizer-loader',
                options: {
                    configPath: path.resolve('./atomCssConfig.js')
                }
            }
        ]
    })

      config.module.rules.push({
          test: /pages\/*.js?$/,
          use: [
               {
                        loader: 'webpack-atomizer-loader',
                        options: {
                            configPath: path.resolve('./atomCssConfig.js')
                        }
                    }
          ]
      }
      )
  
      // Important: return the modified config
      return config
    },
  }