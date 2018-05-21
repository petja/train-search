const path = require('path')
const webpack = require('webpack')

const jsxRule = {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
        plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-regenerator',
            'syntax-dynamic-import',
            'transform-async-to-generator',
        ],
        presets: [
            [
                'env',
                {
                    targets: {
                        browsers: ['last 2 versions'],
                    },
                },
            ],
            ['react'],
        ],
    },
}

const imgRule = {
    test: /\.(jpg|png|mp3|ogg)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[hash].[ext]',
        },
    },
}

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './front/src/index.js'],
    output: {
        path: path.join(__dirname, 'front/dist'),
        filename: './[name].bundle.js',
        publicPath: '/',
        sourceMapFilename: '[file].map',
    },
    module: {
        rules: [jsxRule, imgRule],
    },
    plugins: [],
}
