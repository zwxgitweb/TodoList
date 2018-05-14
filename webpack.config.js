const path = require('path');
module.exports = {
    entry:{
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss|sass)/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 8000,
        historyApiFallback: true,
        noInfo: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    watch: true
}