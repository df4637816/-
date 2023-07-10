const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 載入 html-webpack-plugin (第一步)
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode:process.env.NODE_ENV,
  entry: {
     bundle: './src/index.js',
   
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    
    
    },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
      compress: true,
      port: 9000,
      
      },

    
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
              
              'css-loader',
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        "postcss-preset-env",
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                },
              },
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
        type:  "asset",
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        },
        use:[
        
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV === 'production' ? false : true,
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
        
      },
     
       
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new HtmlWebpackPlugin({
      title: 'singapore index',
      template: '/public/index.html',
      filename: 'index.html',
      minify:  {
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
