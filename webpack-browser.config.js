const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    target: "web",
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'browser-bundle', 'bundle'),
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
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            mangle: true,
            compress: {warnings: false},
            sourceMap: true
        })
    ]
};
