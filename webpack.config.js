var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry : './src/app.js',
    output : {
        path : './bundles',
        filename : 'app.bundle.js'
    },
    resolve : {
        root : [
            path.resolve('./src'),
            path.resolve('./styles')
        ],
        extensions : ['', '.js', '.scss'],
        exclude : [
            path.resolve('./node_modules')
        ],
        modulesDirectories : ['node_modules']
    },
    devtool : 'source-map',
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            },
            {
                test : /\.scss$/,
                loader : ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins : [
        new ExtractTextPlugin('styles.css')
    ]
};
