const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        })
    ],
    module:{
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
            }
        ]
    }
}