var Webpack = require("webpack");
var Config = require("./webpack.config.js");

module.exports = {
    entry: Config.entry,
    output: Config.output,
    devtool: "cheap-module-source-map",
    module: Config.module,
    plugins: Config.plugins
}