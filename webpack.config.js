const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
            {  test: /\.jsx?$/,
              loader: 'eslint-loader',
              include: path.resolve(process.cwd(), 'src/js'),
              enforce: 'pre',
              options: {
                fix: true,
              }
            }

        ],
    },
    devtool: 'source-map',
}
