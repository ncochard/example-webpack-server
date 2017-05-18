const path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
    entry: {
        app: './src/index.js'
    },
    target: "node",
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'server-bundle'),
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
