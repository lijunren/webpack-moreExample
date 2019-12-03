const dev = require("./dev");
const rundebug = require("./rundebug");
async function debug() {
    await rundebug(dev)
    process.on('SIGINT', function() {
        console.log('收到 SIGINT 信号。');
    });
}
module.exports = debug