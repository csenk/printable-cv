var path = require("path");
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var extractSCSS = new ExtractTextPlugin("[hash].css");


var PRODUCTION = (process.env.NODE_ENV === 'production')

var configuration = {
    entry: "./src/app.js",
    output: {
        path: "./dist",
        filename: "[hash].js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".html", ".js", ".css", ".png"],
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: "babel"
        }, {
            test: /\.s?css$/,
            loader: extractSCSS.extract("style-loader", "css-loader" + (PRODUCTION ? "" : "?sourceMap") + "!sass-loader")
        }, {
            test: /\.png$/,
            loader: "url-loader",
            query: {
                mimetype: "image/png"
            }
        }, {
            test: /\.jpg$/,
            loader: "url-loader",
            query: {
                mimetype: "image/jpeg"
            }
        }, {
            test: /.ttf$|.eot$|.woff2?$/,
            loader: 'file',
            query: {
                name: 'font/[hash].[ext]'
            },
            include: [/node_modules\/materialize-css/]
        }, {
            test: /.tpl.html$/,
            loader: "vue-html-loader"
        }, {
            test: /.html$/,
            exclude: /.tpl.html$/,
            loader: "html"
        }]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // to not to load all locales
        extractSCSS
    ]
};

if (PRODUCTION) {
    configuration.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        comments: false,
        sourceMap: false
    }));
} else {
    configuration.devtool = "eval"
}

module.exports = configuration
