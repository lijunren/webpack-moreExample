const common = require("./common");
const merge = require("webpack-merge");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//uglifyjs-webpack-plugin
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css文件
module.exports = merge(common, {
    entry: "./src/index",
    mode: "production",
    optimization:{
        minimizer:[
            new UglifyJSPlugin({
                exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
                cache: true,
                parallel: true, // 开启并行压缩，充分利用cpu
                sourceMap: false,
                extractComments: false, // 移除注释
                uglifyOptions: {
                    compress:{
                        drop_console: true //去掉console
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
});