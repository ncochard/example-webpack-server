const path = require('path');
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
    }
};
