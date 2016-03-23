var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var appName = 'react_reduxenterprise_spa_starter';

module.exports = {

    devtool: false,
    inline: true,
    debug: false,

    entry: {
        home: [
            'babel/polyfill',
            './app/js/index'
        ]
    },

    output: {
        path: 'public/',
        pathInfo: true,
        publicPath: "/",
        // Use chunkhash to update client's cache
        filename: '[chunkhash].js'
    },

    plugins: [
        // Use chunkhash to update client's cache
        new ExtractTextPlugin('[chunkhash].css', { allChunks: true }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, comments: false }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'views/template.html',
            inject: false,
            // minify: {
            //     collapseWhitespace: true,
            //     collapseInlineTagWhitespace: true,
            //     removeComments: true,
            //     useShortDoctype: true
            // },
            favicon: 'app/favicon.ico'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.PrefetchPlugin('react'),
        new webpack.PrefetchPlugin('jquery'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        })
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
                loaders: ['babel?stage=1'],
                include: path.join(__dirname, 'app/js')
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style',
                    '!css?modules!postcss!sass?indentedSyntax&outputStyle=expanded')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style',
                    '!css?modules!postcss!sass')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style',
                    '!css?modules!postcss')
            },
            {
                test: /\.(png|gif|bmp|jpg|woff|woff2|ttf|eot|otf|svg|ico)([\?#][a-zA-Z0-9#?&]*)?$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    }
};
