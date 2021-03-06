const path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
    entry: {
        app: './src/index.js'
    },
    target: "web",
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'browser-bundle'),
        chunkFilename: '[id].js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                include: [
                    path.resolve('./src')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new BabiliPlugin()
    ]
};
