var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry : './src/main.js',
    output : {
        path : './bundles',
        filename : 'app.bundle.js'
    },
    resolve : {
        root : [
            path.resolve('./src'),
            path.resolve('./styles')
        ],
        extensions : ['', '.js', 'jsx', '.scss'],
        exclude : [
            path.resolve('./node_modules')
        ],
        modulesDirectories : ['node_modules']
    },
    devtool : 'source-map',
    module : {
        preLoaders : [
            {
                test : /\.jsx?$/, // include .js files
                exclude : /node_modules/, // exclude any and all files in the node_modules folder
                loader : 'jsxhint-loader'
            }
        ],
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            },
            {
                test : /\.scss$/,
                loader : ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
            },
            {
                test : /\.(eot|svg|ttf|woff|woff2)$/,
                loader : 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
    jshint : {
        esversion : 6
    },
    plugins : [
        new ExtractTextPlugin('styles.css')
    ]
};
