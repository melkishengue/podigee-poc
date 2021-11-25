const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackConfig = {
  mode: 'development',
  context: __dirname,
  devtool: '#cheap-module-source-map',
  entry: [
    './src/main.ts'
  ],
  output: {
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    aliasFields: ['browser'],
    alias: {
      vue$: 'vue/dist/vue.common.dev.js',
    },
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
        },
      },
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: ['\\.vue$'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8912,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8912, // For files less than 8912 bytes, return data-url
              // name: Utils.assetFileName('fonts'),
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/i, // Todo: Better handling for different renderer (client/server)
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer', { /* Options */ }],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },

    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: join(__dirname, "dist"),
    hot: true,
    port: 9000
  }
};

webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    template: resolve(__dirname, 'src/assets/index.html')
  })
);

module.exports = webpackConfig;
