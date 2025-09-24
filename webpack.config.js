import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/index.js',       // точка входа JS
  output: {
    path: path.resolve('dist'),  // папка для сборки production
    filename: 'bundle.js',
    clean: true                  // очищает dist перед сборкой
  },
  module: {
    rules: [
      // SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // Картинки
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      // Шрифты
      {
        test: /\.(woff2?|ttf|eot|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
        patterns: [
        { from: 'src/assets', to: 'assets' }
        ]
    })
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true
  },
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map'
};