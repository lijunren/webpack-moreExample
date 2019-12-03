function format(time) {
    return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}
function run(fn){
    //let task = typeof fn.default === "undefined" ? fn : fn.default;
    const time = new Date();
    console.log(
        `[${format(time)}] Starting ${fn.name}...`
    );
    console.log(process.pid)
    return fn().then((result) => {
        return result;
    });
}
module.exports = run
if(require.main === module && process.argv.length > 2){
    delete require.cache[__dirname];
    const module = require(`./${process.argv[2]}.js`)
    run(module).catch((err) => {console.error(err.stack); process.exit(1);})
}
