const path = require('path');
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
    }
};
