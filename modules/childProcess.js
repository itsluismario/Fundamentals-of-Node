const { exec, spawn } = require('child_process');

// -- Example 1
exec('ls -la', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false
    }
    console.log(stdout);
})

// -- Example 2
exec('node modules/console.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false
    }
    console.log(stdout);
})

// -- Example 3
let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function (data) {
    console.log(data.toString());
})

process.on('exit', function() {
    console.log('This process ended');
})