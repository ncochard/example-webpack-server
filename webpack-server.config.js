const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('webpack-uglify-harmony');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    target: "node",
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'server-bundle', 'bundle'),
        chunkFilename: '[id].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                include: [
                    path.resolve('./node_modules/example-webpack-dependency')
                ],
                use: 'source-map-loader'
            },
            {
                include: [
                    path.resolve('./src')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            minimize: true,
            mangle: true,
            compress: {warnings: false},
            sourceMap: true
        })
    ]
};
