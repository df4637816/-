const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 載入 html-webpack-plugin (第一步)
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:process.env.NODE_ENV,
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            
          'css-loader',
          'style-loader',
          MiniCssExtractPlugin.loader
              
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
          } 
      ]
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg|avif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './img',
              emitFile: false
            }  
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'singapore index',
      template: '/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
  ],
};
