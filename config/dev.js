const common = require("./common");
const merge = require("webpack-merge");
const webpack = require("webpack");
const webpackDev = require("webpack-dev-server");
const agvr = require("yargs");
const prompt = require("prompt");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const path = require("path");
const notifier = require("node-notifier");
const open = require("opn");
let pa = "./src/";
let num = 1;
function dev() {
    return new Promise(async (resolve)=>{
        let enterPath;
        if(agvr.entry === undefined || agvr.entry === ""){
            enterPath = await getEnterCommoondLine();
        } else {
            enterPath = agvr.entry;
        }
        startDebugServer(enterPath, () => resolve())
    });
};
async function getEnterCommoondLine(){
    return new Promise((resolve) => {
        prompt.start();
        const schema = {
            properties: {
                entryPath: {
                    description: "请输入需要build的活动路径（例如：1706/4216）",
                    pattern: /^[0-9]+\/[0-9]+$/,
                    message: "必须是类似于这样的形式：1706/4216",
                    required: true,
                },
            },
        };
        prompt.get(schema, (err, result)=>{
            if(err) {return 1};
            console.log("输入的内容是：", result.entryPath)
            resolve(result.entryPath);
            
        })
    });
}
function startDebugServer(enterPath, done){
    let devConfg = merge(common, {
        entry: pa + enterPath,
        mode: "development",
        plugins:[
            /* new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            }), */
            new HtmlWebpackHarddiskPlugin({
                outputPath: common.output.path,
            })
        ]
    });
    const compiler = webpack(devConfg);
    let opened = false;
    compiler.hooks.watchRun.tap("done",() => {
        if(!opened){
            open("http://localhost:5555");
            opened = true;
        }
        if(num === 1){
            notifier.notify({
                title: "build状态",
                message: "完成",
            });
            num++;
        } else {
            notifier.notify({
                title: "compiler",
                message: num,
            });
        }
        done();
        
    })
    //console.log(path.join(__dirname, "../dist"));
    const server = new webpackDev(compiler, {
        contentBase: path.join(__dirname, "../dist"),
        publicPath: "/assets/",
        inline: true,
        watchContentBase: true,
        noInfo:true,
        hot: true
    });
    server.listen(5555, "localhost", () => {
        console.log("Started server on localhost:8000");
    });
}

module.exports = dev
