const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //分离css
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const devConfig ={
    entry: path.join(__dirname, '../src/index'), 
    output: { 
        pathinfo: true,
        filename: '[hash].js',
        chunkFilename: '[name].build.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    }, 
    mode: 'development',
    devtool: 'eval-source-map', 
    resolve: { //配置模块如何解析
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'] 
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
                    'style-loader',
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
            title: 'index',
            inject: true,
            template: path.resolve(__dirname,'../public/index.html'),
            //alwaysWriteToDisk: true,
            //hash:true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        /* new webpack.NamedModulesPlugin(),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, '../dist')
        }),
        new CleanWebpackPlugin(
            ['dist']
        ), */
    ],
}

module.exports = devConfig