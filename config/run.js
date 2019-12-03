const devconfig =  require("./webpack.config.dev");
const webpack = require("webpack");
const webpackDev = require("webpack-dev-server");
const merge = require("webpack-merge");
const path = require("path");
const notifier = require("node-notifier");
const open = require("opn");
const chalk = require("chalk");
const rm = require("rimraf");
(function(){
    rm(path.resolve(__dirname,"../dist"), startDevServer);
})()
function startDevServer() {
    const options = {
        contentBase: path.resolve(__dirname,"../public"), //静态资源目录
        watchContentBase: true,  //contentBase内容的变化
        publicPath: "/",
        compress: true, //开启gzip压缩
        inline: true,   //应用程序启用内联模式(inline mode),也可以使用 iframe 模式
        hot: true, //启用 webpack 的模块热替换特性
        noInfo: true, //隐藏编译信息
        quiet: true
    }
    let complier = webpack(devconfig);
    let opened = false;
    complier.hooks.invalid.tap("none", ()=>{
        console.log(chalk.yellow("Compiling..."));
    })
    complier.hooks.done.tap("none",() => {
        if(!opened){
            //open("http://localhost:5210");
            opened = true;
        }
        console.log(chalk.green("Compiled successfully!"));
        notifier.notify({
            title: "build状态",
            message: "完成",
        });
    })
    let server = new webpackDev(complier, options);
    server.listen("5210","localhost",() => {
        console.log(chalk.redBright('Started server on http://localhost:5210'))
    })
    
}