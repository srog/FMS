var Webpack = require("webpack");
var Path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: Path.resolve("./wwwroot"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
        {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
                fallback: "style-loader"
            })
        },
        {
            test: /\.(jpe?g|gif)$/,
            exclude: /node_modules/,
            loaders: ["file-loader", "image-webpack-loader"]
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};