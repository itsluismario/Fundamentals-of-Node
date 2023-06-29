// -- Process
// Process is available in Global

// -- beforeExit
// process.on('beforeExit', () => {
//     console.log('The process is going to end');
// })

let x = -1
process.on('beforeExit', () => {
setTimeout(() => {
        if(x) {
            console.log('El Proceso va a terminar')
            console.log('Esta funcion asíncrona se va a repetir…')
            x++
        } else {
            console.log('Y repetir…')
        }
    }, 2000)
}) 

// -- Exit
process.on('exit', () => {
    console.log('The process ended');
    setTimeout(() => {
        console.log('This is not gonna run');
    }, 0)
})

// Testing async fun
setTimeout(() => {
    console.log('This is gonna run');
}, 0)

// -- UncaughtException
process.on('uncaughtException', (err, origin) => {
    console.log('We missed to capture an error');
    console.error(err);
    setTimeout(() => {
        console.log('This is in exceptions section');
    }, 0)
})

functionDoesNotExist();
