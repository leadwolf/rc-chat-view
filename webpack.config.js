const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'demo/src/index.html'),
    filename: './index.html',
});
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();

module.exports = {
    entry: path.join(__dirname, 'demo/src/index.js'),
    output: {
        path: path.join(__dirname, 'demo/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            fallback: 'file-loader',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        bundleAnalyzerPlugin,
        // Ignore all locale files of moment.js
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
