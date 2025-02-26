const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

module.exports = {
    mode:"production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin(),
        new CspHtmlWebpackPlugin({
            'base-uri': "'self'",
            'object-src': "'none'",
            'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
            'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"]
          }, {
            enabled: true,
            hashingMethod: 'sha256',
            hashEnabled: {
              'script-src': true,
              'style-src': true
            },
            nonceEnabled: {
              'script-src': true,
              'style-src': true
            }
        })
     
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    //  "style-loader","css-loader"
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader", options: { modules: true } },

                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader", options: { modules: false } },
                    { loader :"sass-loader"}
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                type:"asset/resource"
            }

        ]
    }

}