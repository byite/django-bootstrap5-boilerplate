const Webpack = require("webpack");
//const Bootstrap = require('bootstrap');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");



const opts = {
    rootDir: process.cwd(),
    devBuild: process.env.NODE_ENV !== "production"
};

module.exports = {
    entry: {
        app: './static_src/js/index.js',
    },
    watch: true,
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devtool:
      process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
    output: {
      path: Path.join(opts.rootDir, "static"),
      pathinfo: opts.devBuild,
      filename: "js/[name].js",
      chunkFilename: 'js/[name].js',
    },
    performance: { hints: false },
    optimization: {
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 5
            }
          }),
          new CssMinimizerPlugin({}),
        ],
        runtimeChunk: false
    },
    plugins: [
        // Extract css files to seperate bundle
        new MiniCssExtractPlugin({
            filename: "css/app.css",
            chunkFilename: "css/app.css"
        }),
        // Copy fonts and images to dist
        new CopyWebpackPlugin({
            patterns: [
                { from: "static_src/fonts", to: "fonts" },
                { from: "static_src/img", to: "img" }
            ]
        }),
    ],
    module: {
        rules: [
            // Babel-loader
            /*
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader?cacheDirectory=true"]
            },
            */
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
            
            // Css-loader & sass-loader
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            // Load fonts
            {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "/[name].[ext]",
                        outputPath: "fonts/",
                        publicPath: "../fonts/"
                    }
                }
            ]
            },
            // Load images
            {
            test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img/",
                        publicPath: "../img/"
                    }
                }
            ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".scss"],
        modules: ["node_modules"],
        alias: {
            request$: "xhr"
        }
    },
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1500,
        ignored: /node_modules/,
    },
    /*
    devServer: {
        contentBase: Path.join(__dirname, "static"),
        compress: true,
        port: 8080,
        open: true
    },*/
}



