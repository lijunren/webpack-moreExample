const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const ExtractTextPlugin = require("extract-text-webpack-plugin"); //分离css,废弃的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //分离css,
const devMode = !process.argv.includes('--release');
const webpack = require("webpack");
const common = { 
    output: { 
        filename: devMode? 'build.js' : 'build.[hash].js',
        path: path.dirname(__dirname) + "/dist",
        publicPath: "/assets/"
    }, 
    resolve: { //配置模块如何解析
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'] 
    }, 
    module: { //通过loader可以支持各种语言和预处理器编写模块
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader' 
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: "./images"
                   }
                 }
                ]
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-withimg-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: true
                    }
                }],
            }
        ] 
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: "index",
            inject: true,
            //template: path.resolve(__dirname,'../public/index.html'),
            alwaysWriteToDisk: true,
            //hash:true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    /* optimzation:{
        splitchunks:{},
        runtimechunk:{}
    } */
}
module.exports = common