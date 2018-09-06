const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'development',
    plugins: [new BundleAnalyzerPlugin()],
    devServer: {
        port: 3000,
        open: true,
    },
});
