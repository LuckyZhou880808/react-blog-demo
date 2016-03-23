var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var appName = 'react_reduxenterprise_spa_starter';

module.exports = {
    devtool: 'source-map',
    entry: {
        home: [
            // 'webpack/hot/only-dev-server',
            'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true',

            //app entry points
            './app/js/index'
        ]
    },

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/assets/'
    },

    plugins: [
        //enable hot reloading of js files
        new webpack.HotModuleReplacementPlugin(),

        //don't rebundle webpack bundle if compilation errors exist
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('bundle.css')
    ],

    resolve: {
        root: [path.resolve('./app')],
        extensions: ['', '.js', '.jsx', '.es6']
    },

    module: {
        loaders: [
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery'
            },
            {
                test: /\.(jsx?|es6)$/,
                loaders: ['react-hot', 'babel?optional[]=runtime&stage=1'],
                include: path.join(__dirname, 'app/js')
            },
            {
                test: /\.sass$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss',
                    'resolve-url',
                    'sass?sourceMap&indentedSyntax&outputStyle=expanded'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss',
                    'resolve-url'
                ]
            },
            {
                test: /\.(png|gif|bmp|jpg|woff|woff2|ttf|eot|otf|svg)([\?#][a-zA-Z0-9#?&]*)?$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    postcss: [
            autoprefixer({browsers: ['last 2 versions']})
    ]
};
