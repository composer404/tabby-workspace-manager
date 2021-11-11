const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: 'src/index.ts',
    mode: 'production',
    context: __dirname,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        pathinfo: true,
        libraryTarget: 'umd',
    },
    resolve: {
        modules: ['.', 'src', 'node_modules'].map((x) => path.join(__dirname, x)),
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                },
            },
            {
                test: /\.node$/,
                loader: 'node-loader',
            },
            {
                test: /\.scss$/,
                use: ['@tabby-gang/to-string-loader', 'css-loader', 'sass-loader'],
                include: /(theme.*|component)\.scss/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /(theme.*|component)\.scss/,
            },
            { test: /\.css$/, use: ['@tabby-gang/to-string-loader', 'css-loader'], include: /component\.css/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /component\.css/ },
            { test: /\.pug$/, use: ['apply-loader', 'pug-loader'] },
        ],
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            exclude: [/node_modules/, /vendor/],
            filename: '[file].map',
        }),
    ],
    externals: ['fs/promises', 'path', 'ngx-toastr', /^rxjs/, /^@angular/, /^@ng-bootstrap/, /^tabby-/],
};
