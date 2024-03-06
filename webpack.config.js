const path = require('path');

module.exports = {
    entry: './src/FormComponent.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'FormComponent',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'production',
};
