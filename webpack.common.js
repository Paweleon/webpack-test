const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    kościół: "./src/js/kościół.js",
    Historia: "./src/js/Historia.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index2.html",
      inject: true,
      chunks: ["index"],
      filename: "index2.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index", "kościół"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/linki.html",
      inject: true,
      chunks: ["index"],
      filename: "linki.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/forum-komunia.html",
      inject: true,
      chunks: ["index"],
      filename: "forum-komunia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/forum.html",
      inject: true,
      chunks: ["index"],
      filename: "forum.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/HistoriaKościoła.html",
      inject: true,
      chunks: ["index", "Historia"],
      filename: "HistoriaKościoła.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/News.html",
      inject: true,
      chunks: ["index"],
      filename: "News.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ogłoszenia.html",
      inject: true,
      chunks: ["index"],
      filename: "ogłoszenia.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pokuta.html",
      inject: true,
      chunks: ["index"],
      filename: "pokuta.html",
    }),
   
  ],
};
